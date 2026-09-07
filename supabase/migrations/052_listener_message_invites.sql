-- 052_listener_message_invites.sql
-- Lets a listener send a bounded, ONE-WAY "I'm available now" invite to a
-- seeker who left them an offline message (listener_messages). The invite only
-- notifies the seeker to come start a LIVE session — it never opens a freeform
-- reply thread, so LeanOn stays a live-session platform, not an async chat app.
--
-- last_invited_at records when the seeker was last pinged for this thread, so
-- both the manual invite button AND the auto-ping on going-online can enforce a
-- cooldown and avoid spamming the seeker.
--
-- The application code tolerates this column being absent (it falls back to an
-- in-memory rate limit), so the feature works before this runs — but run it so
-- the cooldown survives server restarts and is shared across instances.
--
-- MANUAL: run in Supabase SQL Editor, then refresh db/LIVE_SCHEMA.md.

ALTER TABLE public.listener_messages
  ADD COLUMN IF NOT EXISTS last_invited_at timestamptz;
