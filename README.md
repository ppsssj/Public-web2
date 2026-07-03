![Screenshot](public/assets/Screenshot.png)
https://aics-web-seven.vercel.app/

## PostgreSQL content seed

Public page collections live in `src/data/`. The frontend and PostgreSQL seed
both consume the same modules, so seed values cannot drift from the public site.

1. Copy `.env.example` to `.env` and set `DATABASE_URL`.
2. Validate the records without connecting to PostgreSQL:
   `npm run seed:check`
3. Create/update seed records:
   `npm run seed`
4. To also remove obsolete seeded rows in the managed collections:
   `npm run seed -- --prune`

The seed creates `content_items` using `database/content-schema.sql` and upserts
records by `(collection, id)`. Production execution is blocked when
`NODE_ENV=production` unless `--allow-production` is explicitly supplied.
