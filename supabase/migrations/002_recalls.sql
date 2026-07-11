-- MGD Recall Tracker: schema
-- Run in Supabase SQL editor after 001_price_tracker.sql

CREATE TABLE IF NOT EXISTS recalls (
  id               BIGSERIAL PRIMARY KEY,
  recall_id        TEXT NOT NULL UNIQUE,
  brand            TEXT NOT NULL,
  model            TEXT NOT NULL,
  year_start       INTEGER,
  year_end         INTEGER,
  affected_count   INTEGER,
  defect_type      TEXT,
  defect_desc      TEXT NOT NULL,
  risk_desc        TEXT NOT NULL,
  consumer_action  TEXT NOT NULL,
  announced_date   DATE,
  source_url       TEXT NOT NULL,
  slug             TEXT NOT NULL UNIQUE,
  content_hash     TEXT,
  collected_at     TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at       TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_recalls_brand        ON recalls (brand);
CREATE INDEX IF NOT EXISTS idx_recalls_announced    ON recalls (announced_date DESC);
CREATE INDEX IF NOT EXISTS idx_recalls_brand_date   ON recalls (brand, announced_date DESC);
CREATE INDEX IF NOT EXISTS idx_recalls_defect_type  ON recalls (defect_type);
