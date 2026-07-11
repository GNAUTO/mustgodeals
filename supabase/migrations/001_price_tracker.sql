-- MGD Price Tracker: initial schema
-- Run this in the Supabase SQL editor to set up the price tracking tables.

-- ── price_snapshots ─────────────────────────────────────────────────────────
-- One row per brand per collection run. Stores the page hash for change
-- detection and whatever structured offers were extracted from the page.
CREATE TABLE IF NOT EXISTS price_snapshots (
  id              BIGSERIAL PRIMARY KEY,
  brand           TEXT NOT NULL,
  source_url      TEXT NOT NULL,
  page_hash       TEXT NOT NULL,
  offers_extracted JSONB NOT NULL DEFAULT '[]',
  raw_excerpt     TEXT,
  robots_allowed  BOOLEAN NOT NULL DEFAULT TRUE,
  http_status     INTEGER,
  error_msg       TEXT,
  collected_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_snapshots_brand_collected
  ON price_snapshots (brand, collected_at DESC);

-- ── price_offers ─────────────────────────────────────────────────────────────
-- Normalised offer records. One row per unique offer across all weeks.
-- Deduplication key is offer_hash (deterministic hash of brand + model + trim
-- + offer_type + price + expiry_date). Rows are updated in-place as the same
-- offer persists week over week; last_seen_at advances and is_active stays true.
-- When an offer is no longer seen, is_active flips to false.
CREATE TABLE IF NOT EXISTS price_offers (
  id            BIGSERIAL PRIMARY KEY,
  brand         TEXT NOT NULL,
  model         TEXT,
  trim          TEXT,
  offer_type    TEXT,                     -- e.g. driveaway | cashback | low_rate | other
  price         NUMERIC(12, 2),
  expiry_date   DATE,
  source_url    TEXT NOT NULL,
  offer_hash    TEXT NOT NULL UNIQUE,
  first_seen_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  last_seen_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  is_active     BOOLEAN NOT NULL DEFAULT TRUE
);

CREATE INDEX IF NOT EXISTS idx_offers_brand ON price_offers (brand);
CREATE INDEX IF NOT EXISTS idx_offers_active ON price_offers (is_active, brand);
CREATE INDEX IF NOT EXISTS idx_offers_last_seen ON price_offers (last_seen_at DESC);
