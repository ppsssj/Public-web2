import { existsSync } from "node:fs";
import { readFile } from "node:fs/promises";
import process from "node:process";
import pg from "pg";
import { contentRecords } from "./content-records.mjs";

const { Client } = pg;
const argumentsSet = new Set(process.argv.slice(2));
const dryRun = argumentsSet.has("--dry-run");
const prune = argumentsSet.has("--prune");
const allowProduction = argumentsSet.has("--allow-production");

async function loadLocalEnvironment() {
  if (!existsSync(".env")) return;
  const source = await readFile(".env", "utf8");

  for (const line of source.split(/\r?\n/)) {
    const match = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)\s*$/);
    if (!match || process.env[match[1]]) continue;
    const value = match[2].replace(/^("|')|("|')$/g, "");
    process.env[match[1]] = value;
  }
}

function validateRecords(records) {
  const keys = new Set();
  for (const item of records) {
    const key = `${item.collection}:${item.id}`;
    if (keys.has(key)) throw new Error(`Duplicate seed key: ${key}`);
    keys.add(key);
  }
}

function summarize(records) {
  const counts = new Map();
  for (const item of records) {
    counts.set(item.collection, (counts.get(item.collection) || 0) + 1);
  }
  return [...counts.entries()].sort(([left], [right]) => left.localeCompare(right));
}

await loadLocalEnvironment();
validateRecords(contentRecords);

console.log(`Seed records: ${contentRecords.length}`);
for (const [collection, count] of summarize(contentRecords)) {
  console.log(`  ${collection}: ${count}`);
}

if (dryRun) {
  console.log("Dry run complete. No database changes were made.");
  process.exit(0);
}

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is required. Add it to .env or the shell environment.");
}

if (process.env.NODE_ENV === "production" && !allowProduction) {
  throw new Error(
    "Production seed blocked. Re-run with --allow-production only after confirming the target database.",
  );
}

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.PGSSLMODE === "require" ? { rejectUnauthorized: false } : undefined,
});

try {
  await client.connect();
  await client.query("BEGIN");
  const schema = await readFile("database/content-schema.sql", "utf8");
  await client.query(schema);

  for (const item of contentRecords) {
    await client.query(
      `INSERT INTO content_items
        (collection, id, sort_order, is_published, payload)
       VALUES ($1, $2, $3, $4, $5::jsonb)
       ON CONFLICT (collection, id) DO UPDATE SET
         sort_order = EXCLUDED.sort_order,
         is_published = EXCLUDED.is_published,
         payload = EXCLUDED.payload,
         updated_at = NOW()`,
      [
        item.collection,
        item.id,
        item.sortOrder,
        item.isPublished,
        JSON.stringify(item.payload),
      ],
    );
  }

  if (prune) {
    for (const [collection] of summarize(contentRecords)) {
      const ids = contentRecords
        .filter((item) => item.collection === collection)
        .map((item) => item.id);
      await client.query(
        `DELETE FROM content_items
         WHERE collection = $1
           AND NOT (id = ANY($2::varchar[]))`,
        [collection, ids],
      );
    }
  }

  await client.query("COMMIT");
  console.log(`Seed complete${prune ? " with pruning" : ""}.`);
} catch (error) {
  await client.query("ROLLBACK").catch(() => {});
  throw error;
} finally {
  await client.end().catch(() => {});
}

