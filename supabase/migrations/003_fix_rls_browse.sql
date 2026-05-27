-- ================================================================
-- Migration 003: Fix RLS so browse works + add seed listeners
-- Run in Supabase Dashboard → SQL Editor
-- ================================================================

-- ----------------------------------------------------------------
-- 1. Allow authenticated users to read public info of approved
--    listeners. The existing users_select_own policy blocks the
--    listener browse join (users!inner(name, avatar_url)) because
--    users can only read their OWN row — so the join always returns
--    empty. This policy adds the missing public-read for listeners.
-- ----------------------------------------------------------------
DROP POLICY IF EXISTS "users_select_listener_public" ON public.users;
CREATE POLICY "users_select_listener_public"
  ON public.users FOR SELECT
  USING (
    id IN (
      SELECT user_id FROM public.listener_profiles
      WHERE is_approved = TRUE AND is_active = TRUE
    )
  );

-- ----------------------------------------------------------------
-- 2. Also allow session participants to read each other's name
--    (needed for the session page to show the listener's name)
-- ----------------------------------------------------------------
DROP POLICY IF EXISTS "users_select_session_participant" ON public.users;
CREATE POLICY "users_select_session_participant"
  ON public.users FOR SELECT
  USING (
    id IN (
      SELECT listener_id FROM public.sessions WHERE seeker_id = auth.uid()
      UNION
      SELECT seeker_id  FROM public.sessions WHERE listener_id = auth.uid()
    )
  );

-- ----------------------------------------------------------------
-- 3. Add gender column to users table (foundation for same-gender
--    matching — not enforced yet, collected at signup)
-- ----------------------------------------------------------------
ALTER TABLE public.users
  ADD COLUMN IF NOT EXISTS gender TEXT CHECK (gender IN ('male','female','other','prefer_not_to_say'));

-- ----------------------------------------------------------------
-- 4. Seed data — insert a test approved listener so browse works
--    immediately for testing. Replace with real listeners later.
--    NOTE: This creates auth + profile entries atomically.
-- ----------------------------------------------------------------
-- We can't insert into auth.users from SQL Editor directly.
-- Instead, create listener_profiles for any users you manually
-- approve via the admin panel, OR run the admin approval flow.
--
-- To approve a listener application via SQL (replace USER_UUID):
-- UPDATE listener_profiles SET is_approved=true, is_active=true WHERE user_id='USER_UUID';
-- UPDATE users SET name='Display Name' WHERE id='USER_UUID';
