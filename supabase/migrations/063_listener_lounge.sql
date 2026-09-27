-- Listener Lounge: shared group chat for approved listeners only
-- Owner must run this in Supabase SQL Editor before the feature is live.

CREATE TABLE IF NOT EXISTS lounge_messages (
  id          uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  sender_id   uuid        NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  content     text        NOT NULL CHECK (char_length(content) BETWEEN 1 AND 2000),
  created_at  timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_lounge_messages_created ON lounge_messages(created_at);

ALTER TABLE lounge_messages ENABLE ROW LEVEL SECURITY;

-- Only approved, non-suspended listeners may read messages
CREATE POLICY "lounge_select" ON lounge_messages
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM listener_profiles
      WHERE user_id = auth.uid()
        AND is_approved = true
        AND (is_suspended IS NULL OR is_suspended = false)
    )
  );

-- Only approved, non-suspended listeners may insert their own messages
CREATE POLICY "lounge_insert" ON lounge_messages
  FOR INSERT WITH CHECK (
    auth.uid() = sender_id AND
    EXISTS (
      SELECT 1 FROM listener_profiles
      WHERE user_id = auth.uid()
        AND is_approved = true
        AND (is_suspended IS NULL OR is_suspended = false)
    )
  );

-- Admins can read and delete (moderation)
CREATE POLICY "lounge_admin_all" ON lounge_messages
  FOR ALL USING (
    EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND (is_admin = true OR role = 'admin'))
  );

-- Add to realtime publication so the client gets live INSERT events
ALTER PUBLICATION supabase_realtime ADD TABLE lounge_messages;
