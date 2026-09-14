-- 054_nri_session_rate.sql
--
-- NRI session billing (Phase 2): NRI seekers pay a flat INR price instead of
-- listener_rate × duration. To settle correctly, the session must record the
-- listener's configured rate at booking time — otherwise settlement cannot
-- tell "how much goes to the listener" vs "how much is the NRI margin".
--
-- MUST BE RUN MANUALLY in Supabase SQL Editor.

ALTER TABLE sessions ADD COLUMN IF NOT EXISTS listener_rate_per_min integer;

-- Index: admin sessions tab sorts/filters on status + listener_id already;
-- this column is only read at settlement time, so no index needed.

COMMENT ON COLUMN sessions.listener_rate_per_min IS
  'Listener rate_per_min at booking time (INR). Used by settlement to cap '
  'listener earnings for NRI sessions where amount_held = flat NRI price, '
  'not rate × duration. NULL for sessions booked before this migration.';
