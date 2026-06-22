-- 048_listener_messages.sql
-- Offline message requests: seeker can leave up to 2 short messages to a
-- listener who is currently offline. Both see them in /history (Chats page).
-- Listener marks as read; seeker gets confirmation they've reached out.
-- MANUAL: run in Supabase SQL Editor, then refresh db/LIVE_SCHEMA.md.

CREATE TABLE IF NOT EXISTS public.listener_messages (
  id          uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  seeker_id   uuid        NOT NULL,
  listener_id uuid        NOT NULL,
  messages    text[]      NOT NULL DEFAULT '{}',
  is_read     boolean     NOT NULL DEFAULT false,
  read_at     timestamptz,
  created_at  timestamptz NOT NULL DEFAULT now(),
  updated_at  timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT listener_messages_pair_unique UNIQUE (seeker_id, listener_id)
);

CREATE INDEX IF NOT EXISTS listener_messages_listener_idx
  ON public.listener_messages (listener_id, is_read);
CREATE INDEX IF NOT EXISTS listener_messages_seeker_idx
  ON public.listener_messages (seeker_id);

ALTER TABLE public.listener_messages ENABLE ROW LEVEL SECURITY;

-- Seeker: read and write their own sent messages
CREATE POLICY "lm_seeker_select" ON public.listener_messages
  FOR SELECT USING (auth.uid() = seeker_id);
CREATE POLICY "lm_seeker_insert" ON public.listener_messages
  FOR INSERT WITH CHECK (auth.uid() = seeker_id);
CREATE POLICY "lm_seeker_update" ON public.listener_messages
  FOR UPDATE USING (auth.uid() = seeker_id);

-- Listener: read and mark-read messages addressed to them
CREATE POLICY "lm_listener_select" ON public.listener_messages
  FOR SELECT USING (auth.uid() = listener_id);
CREATE POLICY "lm_listener_update" ON public.listener_messages
  FOR UPDATE USING (auth.uid() = listener_id);

-- Admin: full access
CREATE POLICY "lm_admin_all" ON public.listener_messages
  FOR ALL USING (
    EXISTS (SELECT 1 FROM public.users WHERE id = auth.uid() AND role = 'admin')
  );
