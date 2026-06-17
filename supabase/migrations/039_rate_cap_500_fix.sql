-- 039_rate_cap_500_fix.sql
--
-- FIX MIGRATION DRIFT: the listener rate cap in code (MAX_LISTENER_RATE = 500)
-- does not match the live DB, which still enforces ≤ 200.
--
-- WHY 011 DIDN'T WORK: migration 011_rate_limit_500.sql tried to drop a
-- constraint named `listener_profiles_rate_per_min_check` and add a new one of
-- the same name. But migration 022_rate_and_schema_fixes.sql had already
-- renamed the live constraint to `lp_rate_range` (≤ 200). So 011 dropped a
-- constraint that no longer existed (no-op) and the original `lp_rate_range`
-- ≤ 200 stayed in force. Result: applying with a rate of 201–500 passes the
-- app's validation but fails the DB CHECK (23514), and onboarding breaks with
-- an opaque error.
--
-- THE FIX: drop the ACTUAL live constraint (`lp_rate_range`) and any stray
-- duplicate from 011, then add a single ≤ 500 constraint.
--
-- ⚠️ MANUAL: owner runs this in the Supabase SQL Editor, then refreshes
-- db/LIVE_SCHEMA.md.

ALTER TABLE public.listener_profiles
  DROP CONSTRAINT IF EXISTS lp_rate_range;

ALTER TABLE public.listener_profiles
  DROP CONSTRAINT IF EXISTS listener_profiles_rate_per_min_check;

ALTER TABLE public.listener_profiles
  ADD CONSTRAINT lp_rate_range
  CHECK (rate_per_min >= 1 AND rate_per_min <= 500);
