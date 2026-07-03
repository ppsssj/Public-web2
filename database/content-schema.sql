CREATE TABLE IF NOT EXISTS content_items (
  collection VARCHAR(80) NOT NULL,
  id VARCHAR(180) NOT NULL,
  sort_order INTEGER NOT NULL DEFAULT 0,
  is_published BOOLEAN NOT NULL DEFAULT TRUE,
  payload JSONB NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  PRIMARY KEY (collection, id)
);

CREATE INDEX IF NOT EXISTS content_items_collection_order_idx
  ON content_items (collection, sort_order);

