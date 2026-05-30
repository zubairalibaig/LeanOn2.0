-- Messages: only session participants can read
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "messages_participant_select" ON messages;
CREATE POLICY "messages_participant_select" ON messages FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM sessions s
      WHERE s.id = messages.session_id
        AND (s.seeker_id = auth.uid() OR s.listener_id = auth.uid())
    )
  );

DROP POLICY IF EXISTS "messages_participant_insert" ON messages;
CREATE POLICY "messages_participant_insert" ON messages FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM sessions s
      WHERE s.id = messages.session_id
        AND (s.seeker_id = auth.uid() OR s.listener_id = auth.uid())
    )
  );

-- Sessions: only participants can read their own sessions
DROP POLICY IF EXISTS "sessions_participant_select" ON sessions;
CREATE POLICY "sessions_participant_select" ON sessions FOR SELECT
  USING (seeker_id = auth.uid() OR listener_id = auth.uid());
