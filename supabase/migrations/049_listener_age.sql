-- 049_listener_age.sql
-- Capture listener age with MONTH + YEAR precision only (never the day) so the
-- /browse page can offer an age-range filter (18–29, 30–39, 40–49, 50–59, 60+).
-- Privacy-conscious: month+year alone cannot identify a person the way a full
-- DOB can. Lives on listener_profiles because that is the table /api/listeners
-- reads and filters for the public browse list.
--
-- Nullable: existing approved listeners keep NULL until they re-submit; a NULL
-- age simply means the listener is not matched by any specific age-range filter
-- (they still appear under "All ages"). New listeners must supply it in the
-- become-listener form.
--
-- MANUAL: run in Supabase SQL Editor, then refresh db/LIVE_SCHEMA.md.
-- The apply route and /api/listeners degrade gracefully until this is applied
-- (they retry without the birth columns if they are missing).

ALTER TABLE public.listener_profiles
  ADD COLUMN IF NOT EXISTS birth_year  smallint;
ALTER TABLE public.listener_profiles
  ADD COLUMN IF NOT EXISTS birth_month smallint;

-- Defensive range checks (idempotent — guarded so re-running never errors).
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint WHERE conname = 'listener_profiles_birth_month_chk'
  ) THEN
    ALTER TABLE public.listener_profiles
      ADD CONSTRAINT listener_profiles_birth_month_chk
      CHECK (birth_month IS NULL OR (birth_month BETWEEN 1 AND 12));
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint WHERE conname = 'listener_profiles_birth_year_chk'
  ) THEN
    ALTER TABLE public.listener_profiles
      ADD CONSTRAINT listener_profiles_birth_year_chk
      CHECK (birth_year IS NULL OR (birth_year BETWEEN 1920 AND 2015));
  END IF;
END $$;
