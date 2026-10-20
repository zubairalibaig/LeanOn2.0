-- 072 — Chat messages can only be written by the server (2026-10-20)
--
-- Every LeanOn page sends messages through POST /api/messages (service role),
-- which checks the session, rate-limits, and runs the contact-detail guard
-- (lib/contact-guard.ts). The two INSERT policies below let a signed-in
-- participant insert straight into `messages` from the browser instead,
-- skipping all of that — and messages_participant_insert does not even check
-- sender_id, so a participant could post as the other person.
-- No client code inserts into `messages` (history pages only SELECT), so
-- dropping them changes nothing for real users. SELECT policies are unchanged.

DROP POLICY IF EXISTS messages_insert ON public.messages;
DROP POLICY IF EXISTS messages_participant_insert ON public.messages;

-- Same for offline messages (listener_messages, migration 048): the website only
-- writes them through /api/listener/[id]/message and /api/listener-messages
-- (service role). Reads (SELECT policies) are unchanged.
DROP POLICY IF EXISTS "lm_seeker_insert" ON public.listener_messages;
DROP POLICY IF EXISTS "lm_seeker_update" ON public.listener_messages;
DROP POLICY IF EXISTS "lm_listener_update" ON public.listener_messages;

-- Check: only SELECT (and the admin policy on listener_messages) should remain.
-- select tablename, policyname, cmd from pg_policies
--  where tablename in ('messages', 'listener_messages') order by 1, 2;
