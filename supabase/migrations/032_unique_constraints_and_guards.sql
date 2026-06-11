-- ================================================================
-- Migration 032: Add UNIQUE constraints to listener_profiles and
-- listener_applications user_id columns.
-- Without these, all upsert({...}, { onConflict: 'user_id' }) calls
-- silently fail or create duplicate rows.
-- ================================================================

-- Step 1: Deduplicate listener_profiles — keep the most recent row per user_id
DELETE FROM public.listener_profiles lp1
USING public.listener_profiles lp2
WHERE lp1.user_id = lp2.user_id
  AND lp1.created_at < lp2.created_at;

-- Step 2: Add UNIQUE constraint on listener_profiles.user_id
ALTER TABLE public.listener_profiles
  DROP CONSTRAINT IF EXISTS listener_profiles_user_id_key;

ALTER TABLE public.listener_profiles
  ADD CONSTRAINT listener_profiles_user_id_key UNIQUE (user_id);

-- Step 3: Deduplicate listener_applications — keep the most recent row per user_id
DELETE FROM public.listener_applications la1
USING public.listener_applications la2
WHERE la1.user_id = la2.user_id
  AND la1.created_at < la2.created_at;

-- Step 4: Add UNIQUE constraint on listener_applications.user_id
ALTER TABLE public.listener_applications
  DROP CONSTRAINT IF EXISTS listener_applications_user_id_key;

ALTER TABLE public.listener_applications
  ADD CONSTRAINT listener_applications_user_id_key UNIQUE (user_id);
