-- ================================================================
-- Migration 018: Schema fixes discovered from app-level analysis
-- Run in Supabase Dashboard → SQL Editor
-- ================================================================

-- ── FIX 1: listener_profiles.is_suspended column missing ─────────
-- admin/users route queries this column and the suspend action
-- should set it. Without it the admin listener query fails.
ALTER TABLE public.listener_profiles
  ADD COLUMN IF NOT EXISTS is_suspended BOOLEAN NOT NULL DEFAULT FALSE;

CREATE INDEX IF NOT EXISTS idx_lp_suspended
  ON public.listener_profiles(is_suspended) WHERE is_suspended = TRUE;

-- Backfill: sync suspended state from users → listener_profiles
UPDATE public.listener_profiles lp
SET is_suspended = TRUE
FROM public.users u
WHERE u.id = lp.user_id AND u.is_suspended = TRUE;


-- ── FIX 2: listener_profiles.rate_per_min CHECK constraint ────────
-- Validation is currently client-side only. Add DB-level protection.
-- Constants define MIN=8 MAX=25. Existing rows with lower rates
-- (set before the constant was updated) will need to be clamped first.
UPDATE public.listener_profiles
  SET rate_per_min = 8
  WHERE rate_per_min < 8;

UPDATE public.listener_profiles
  SET rate_per_min = 25
  WHERE rate_per_min > 25;

ALTER TABLE public.listener_profiles
  DROP CONSTRAINT IF EXISTS lp_rate_range;

ALTER TABLE public.listener_profiles
  ADD CONSTRAINT lp_rate_range
  CHECK (rate_per_min >= 8 AND rate_per_min <= 25);


-- ── FIX 3: sessions heartbeat columns for abandonment detection ───
-- Heartbeat route updates these columns; cleanup route can use them
-- to detect which party abandoned the session.
ALTER TABLE public.sessions
  ADD COLUMN IF NOT EXISTS seeker_last_seen TIMESTAMPTZ;

ALTER TABLE public.sessions
  ADD COLUMN IF NOT EXISTS listener_last_seen TIMESTAMPTZ;


-- ── FIX 4: updated_at auto-update trigger for users ───────────────
-- users.updated_at exists (added in migration 014) but never updates.
CREATE OR REPLACE FUNCTION public.set_updated_at()
  RETURNS TRIGGER LANGUAGE plpgsql AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS users_set_updated_at ON public.users;
CREATE TRIGGER users_set_updated_at
  BEFORE UPDATE ON public.users
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();


-- ── FIX 5: Drop orphaned topics column (data in specialty_tags) ───
-- Migration 014 added a `topics` column to listener_profiles.
-- The become-listener form stores data in `specialty_tags` (from
-- the 20250512 schema). The `topics` column is always empty and
-- the admin query was incorrectly selecting it. Drop topics and
-- use specialty_tags consistently everywhere.
ALTER TABLE public.listener_profiles
  DROP COLUMN IF EXISTS topics;


-- ── Verify ────────────────────────────────────────────────────────
-- SELECT column_name, data_type, column_default, is_nullable
--   FROM information_schema.columns
--   WHERE table_schema = 'public' AND table_name = 'listener_profiles'
--   ORDER BY ordinal_position;
-- SELECT tgname, tgrelid::regclass FROM pg_trigger WHERE tgrelid = 'public.users'::regclass;
