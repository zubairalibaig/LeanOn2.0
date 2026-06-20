-- ================================================================
-- Migration 045: Eliminate the REMAINING "infinite recursion
-- detected in policy for relation users" (Postgres 42P17).
--
-- WHY 044 WASN'T ENOUGH
--   42P17 here is a CROSS-TABLE policy cycle, not a self-reference.
--   Migration 044 cleaned every policy on public.users and you saw
--   "6 clean policies" — but a cycle is invisible when you only look
--   at one table. The other half of the loop lives on public.sessions:
--
--     • users.users_select_session_participant   → reads  sessions
--         id IN (SELECT listener_id FROM sessions WHERE seeker_id = auth.uid()
--                UNION SELECT seeker_id FROM sessions WHERE listener_id = auth.uid())
--     • sessions.sessions_read_participants        → reads  users
--         ... OR EXISTS (SELECT 1 FROM users
--                        WHERE id = auth.uid() AND (role='admin' OR is_admin))
--
--   Evaluating a SELECT on users runs users_select_session_participant,
--   which sub-selects sessions, which runs sessions_read_participants,
--   which sub-selects users, which runs users_select_session_participant…
--   → infinite recursion, raised against relation "users".
--
--   This poisons EVERY anon/authenticated read that touches users or
--   sessions: the dashboard's sessions+seeker-name load, the browse
--   wallet-balance read, the session page, message history. The browse
--   LIST survived only because /api/listeners uses the service-role
--   admin client (RLS bypassed) — which is exactly why "go online /
--   offline" looked broken: the list rendered but everything around it
--   threw 42P17.
--
-- THE FIX
--   Break the cycle on the sessions side. The admin EXISTS sub-select
--   is the only reason a sessions policy reads users, and it is
--   unnecessary: admins read/write sessions through createAdminClient()
--   (service role), which bypasses RLS entirely (see lib/require-admin.ts
--   and every app/api/admin/* route). Removing it leaves sessions
--   policies referencing NO other table, so no cycle can exist.
--
--   While here, collapse the three overlapping sessions SELECT policies
--   (sessions_own, sessions_participant_select, sessions_read_participants)
--   into ONE clean participant-only policy. INSERT/UPDATE policies are
--   left untouched.
--
-- ⚠️ MANUAL: run this in the Supabase SQL Editor, then refresh
--    db/LIVE_SCHEMA.md. Idempotent and safe to re-run.
-- ================================================================

-- 1) Drop every SELECT policy on public.sessions (deterministic — we
--    cannot know if extra ones were added by hand in the dashboard).
DO $$
DECLARE
  pol record;
BEGIN
  FOR pol IN
    SELECT polname
    FROM pg_policy
    WHERE polrelid = 'public.sessions'::regclass
      AND polcmd IN ('r', '*')   -- SELECT or ALL
  LOOP
    EXECUTE format('DROP POLICY IF EXISTS %I ON public.sessions', pol.polname);
  END LOOP;
END $$;

-- Belt-and-suspenders: drop the known names explicitly too.
DROP POLICY IF EXISTS "sessions_own"                ON public.sessions;
DROP POLICY IF EXISTS "sessions_participant_select" ON public.sessions;
DROP POLICY IF EXISTS "sessions_read_participants"  ON public.sessions;
DROP POLICY IF EXISTS "sessions_admin_read"         ON public.sessions;

ALTER TABLE public.sessions ENABLE ROW LEVEL SECURITY;

-- 2) One clean participant-only SELECT policy. References NO other
--    table, so it can never participate in a recursion cycle.
CREATE POLICY "sessions_select_participant"
  ON public.sessions FOR SELECT
  USING (seeker_id = auth.uid() OR listener_id = auth.uid());

-- NOTE: intentionally NO admin SELECT policy on public.sessions.
-- Admin session reads go through the service-role client
-- (createAdminClient), which bypasses RLS. Re-adding an admin
-- EXISTS(SELECT ... FROM users ...) clause is exactly what created
-- the 42P17 cycle this migration removes.
