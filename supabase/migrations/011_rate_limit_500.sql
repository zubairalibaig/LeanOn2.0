-- Raise the listener rate_per_min cap from ₹200 to ₹500/min.
-- Run in Supabase SQL Editor, then refresh db/LIVE_SCHEMA.md.

ALTER TABLE listener_profiles
  DROP CONSTRAINT IF EXISTS listener_profiles_rate_per_min_check;

ALTER TABLE listener_profiles
  ADD CONSTRAINT listener_profiles_rate_per_min_check
  CHECK (rate_per_min >= 1 AND rate_per_min <= 500);
