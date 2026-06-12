-- 036: Drop the permissive duplicate messages INSERT policy.
--
-- The live DB has TWO INSERT policies on public.messages (OR semantics):
--   messages_insert              — sender is participant AND session is active
--   messages_participant_insert  — participant only; NO sender check, NO active check
--
-- The second policy lets a session participant insert rows into completed/
-- cancelled sessions, and even with someone else's sender_id, via a direct
-- PostgREST call. The app itself sends messages through /api/messages
-- (service role, enforces participant + active in code), so dropping the
-- permissive policy changes nothing for the app — it only closes the
-- direct-API hole.
--
-- MANUAL: run in Supabase SQL Editor, then refresh db/LIVE_SCHEMA.md.

DROP POLICY IF EXISTS messages_participant_insert ON public.messages;
