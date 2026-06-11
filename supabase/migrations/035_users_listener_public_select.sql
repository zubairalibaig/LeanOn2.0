-- ================================================================
-- Migration 035: Re-assert users_select_listener_public policy
--
-- Migration 20250512_complete_schema.sql re-creates users_select_own
-- but does NOT re-assert users_select_listener_public (from 003).
-- If the live DB is missing this policy, the users!inner join in
-- the listener profile and browse pages fails for every user who
-- isn't the listener — resulting in "Listener not found" even after
-- a successful approval.
--
-- The primary fix is that ListenerClient now calls /api/listener/[id]
-- (server-side, admin client) so RLS doesn't affect it. This migration
-- is the belt-and-suspenders fix so direct PostgREST queries also work.
-- ================================================================

DROP POLICY IF EXISTS "users_select_listener_public" ON public.users;
CREATE POLICY "users_select_listener_public"
  ON public.users FOR SELECT
  USING (
    id IN (
      SELECT user_id FROM public.listener_profiles
      WHERE is_approved = TRUE AND is_active = TRUE
    )
  );

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
