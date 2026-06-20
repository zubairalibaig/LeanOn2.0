-- ================================================================
-- Migration 044: Fix "infinite recursion detected in policy for
-- relation users" (Postgres error 42P17)
--
-- SYMPTOM (confirmed in production 2026-06-20):
--   • Toggling availability ("Go online") returned:
--       { "code": "42P17",
--         "message": "infinite recursion detected in policy
--                     for relation \"users\"" }
--   • /api/listeners joins users!inner(...) — that join evaluates
--     the users SELECT policies, so the recursion broke the browse
--     list, which is why "Go online / Go offline" never reflected.
--
-- ROOT CAUSE:
--   A SELECT/ALL policy on public.users whose USING/CHECK clause
--   itself reads public.users (the classic case is an admin policy
--   like  EXISTS (SELECT 1 FROM users WHERE id = auth.uid()
--   AND role = 'admin') ). Postgres re-evaluates the users policies
--   while evaluating that sub-SELECT → infinite recursion. None of
--   the committed migrations create such a policy, so it was added
--   by hand in the Supabase dashboard. This project does NOT need an
--   admin policy on users: admin auth is env-var based and the admin
--   API routes use the service-role client, which bypasses RLS.
--
-- THE FIX:
--   Drop EVERY existing policy on public.users (deterministic — we
--   can't know the bad policy's name), then recreate ONLY the clean,
--   non-recursive set that the app relies on. None of these read
--   public.users inside their own predicate, so recursion is
--   impossible.
--
-- ⚠️ MANUAL: run this in the Supabase SQL Editor, then refresh
--    db/LIVE_SCHEMA.md. It is idempotent and safe to re-run.
-- ================================================================

-- 1) Remove ALL policies currently on public.users (including the
--    unknown recursive one added via the dashboard).
DO $$
DECLARE
  pol record;
BEGIN
  FOR pol IN
    SELECT polname
    FROM pg_policy
    WHERE polrelid = 'public.users'::regclass
  LOOP
    EXECUTE format('DROP POLICY IF EXISTS %I ON public.users', pol.polname);
  END LOOP;
END $$;

-- Ensure RLS stays enabled.
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;

-- 2) Recreate the clean, non-recursive policy set.

-- Read your own row.
CREATE POLICY "users_select_own"
  ON public.users FOR SELECT
  USING (auth.uid() = id);

-- Insert your own row (signup). The guard trigger pins privileged columns.
CREATE POLICY "users_insert_own"
  ON public.users FOR INSERT
  WITH CHECK (auth.uid() = id);

-- Update your own row. The guard trigger pins privileged columns.
CREATE POLICY "users_update_own"
  ON public.users FOR UPDATE
  USING (auth.uid() = id);

-- Anyone may read the public profile of an APPROVED listener (browse
-- page + listener profile join). Reads listener_profiles, NOT users,
-- so there is no recursion.
CREATE POLICY "users_listener_public_read"
  ON public.users FOR SELECT
  USING (
    id IN (
      SELECT user_id FROM public.listener_profiles
      WHERE is_approved = TRUE
    )
  );

-- Stricter variant kept for parity with the historical schema
-- (approved AND active). Harmless overlap (OR semantics).
CREATE POLICY "users_select_listener_public"
  ON public.users FOR SELECT
  USING (
    id IN (
      SELECT user_id FROM public.listener_profiles
      WHERE is_approved = TRUE AND is_active = TRUE
    )
  );

-- A session's two participants may read each other's user row (names
-- in the chat header). Reads sessions, NOT users — no recursion.
CREATE POLICY "users_select_session_participant"
  ON public.users FOR SELECT
  USING (
    id IN (
      SELECT listener_id FROM public.sessions WHERE seeker_id = auth.uid()
      UNION
      SELECT seeker_id  FROM public.sessions WHERE listener_id = auth.uid()
    )
  );

-- NOTE: intentionally NO admin policy on public.users. Admin reads/writes
-- go through the service-role client (createAdminClient), which bypasses
-- RLS entirely. Adding an admin policy that selects from users is exactly
-- what caused the recursion this migration fixes.
