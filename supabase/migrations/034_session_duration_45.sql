-- ================================================================
-- Migration 034: Allow 45-minute sessions
--
-- Live-DB drift found via constraint dump (2026-06-11):
--   sessions_duration_mins_check = CHECK (duration_mins IN (5, 15, 30))
--
-- The product spec (PROJECT.md §5) and the app (lib/constants.ts
-- SESSION_DURATIONS = [5, 15, 30, 45]) offer a 45-minute block.
-- Booking one today fails at the DB with a check-constraint violation.
-- ================================================================

ALTER TABLE public.sessions
  DROP CONSTRAINT IF EXISTS sessions_duration_mins_check;
ALTER TABLE public.sessions
  ADD CONSTRAINT sessions_duration_mins_check
  CHECK (duration_mins = ANY (ARRAY[5, 15, 30, 45]));

-- ── VERIFY ───────────────────────────────────────────────────────
-- SELECT pg_get_constraintdef(oid) FROM pg_constraint
-- WHERE conname = 'sessions_duration_mins_check';
-- → CHECK ((duration_mins = ANY (ARRAY[5, 15, 30, 45])))
