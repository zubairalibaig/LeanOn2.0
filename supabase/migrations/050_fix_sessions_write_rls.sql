-- 050_fix_sessions_write_rls.sql
--
-- 🔴 CRITICAL SECURITY FIX — unlimited wallet money minting.
--
-- THE HOLE
-- The live DB carries this policy (confirmed in db/LIVE_SCHEMA.md):
--
--   sessions_seeker_rating_update
--     UPDATE USING (auth.uid() = seeker_id AND status = 'completed')
--            WITH CHECK (auth.uid() = seeker_id)
--
-- It was written intending "a seeker may update their own rating and review".
-- But PostgreSQL RLS policies have NO column scope — they gate the ROW, never
-- the columns. There is also no BEFORE UPDATE guard trigger on `sessions`
-- (LIVE_SCHEMA lists triggers only on users / listener_profiles /
-- listener_applications / listener_verifications). Supabase grants UPDATE on
-- public tables to `authenticated` by default, and the anon key ships in the
-- browser bundle, so ANY logged-in seeker could run:
--
--   supabase.from('sessions')
--     .update({ status: 'active', started_at: <now>, amount_held: 5000 })
--     .eq('id', '<their own completed session>')
--
-- ...then call PATCH /api/sessions, which settles the now-"active" session and
-- credits amount_held back to their wallet (settleSession refunds in full when
-- the elapsed time is under a minute). Repeatable without limit, and the
-- balance is cashable through refund_requests. `sessions_insert` was similarly
-- over-broad, letting a seeker fabricate session rows outright.
--
-- THE FIX
-- Neither policy is needed. The browser NEVER writes to `sessions` — verified
-- across the whole app, client code only ever SELECTs it. Every legitimate
-- write goes through a server route using the service-role client, or through
-- the SECURITY DEFINER RPCs (create_session / accept_session), both of which
-- bypass RLS. Ratings are submitted via PATCH /api/sessions, server-side.
--
-- So we drop both write policies and explicitly revoke the underlying grants.
-- Participant SELECT (sessions_select_participant, migration 045) is untouched,
-- so reading sessions — history, the session page, dashboards — keeps working.
--
-- MANUAL: run in the Supabase SQL Editor, then refresh db/LIVE_SCHEMA.md.
-- NOTE: app/api/sessions/route.ts also gained an `ended_at IS NULL` guard on the
-- settlement lock, which blocks the replay independently of this migration.

-- 1. Drop the over-broad write policies (idempotent).
DROP POLICY IF EXISTS "sessions_seeker_rating_update" ON public.sessions;
DROP POLICY IF EXISTS "sessions_insert"               ON public.sessions;

-- 2. Remove the underlying table grants so no future policy can re-open this.
--    Service role and the SECURITY DEFINER RPCs are unaffected by these revokes.
REVOKE INSERT, UPDATE, DELETE ON public.sessions FROM authenticated;
REVOKE INSERT, UPDATE, DELETE ON public.sessions FROM anon;

-- 3. Verify afterwards — this should return ONLY sessions_select_participant:
--    SELECT policyname, cmd FROM pg_policies
--    WHERE schemaname = 'public' AND tablename = 'sessions';
--
--    And this should show no INSERT/UPDATE/DELETE for authenticated/anon:
--    SELECT grantee, privilege_type FROM information_schema.table_privileges
--    WHERE table_schema = 'public' AND table_name = 'sessions';
