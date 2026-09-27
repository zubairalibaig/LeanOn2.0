-- Lounge moderation + authorization hardening
-- Run AFTER 063_listener_lounge.sql in Supabase SQL Editor.

-- 1. Add soft-delete columns so deleted messages stay auditable
ALTER TABLE lounge_messages
  ADD COLUMN IF NOT EXISTS deleted_at  timestamptz,
  ADD COLUMN IF NOT EXISTS deleted_by  uuid REFERENCES public.users(id);

-- 2. Explicit revoke — prevent anon from querying the table at all
--    (RLS would return 0 rows anyway, but this stops the table appearing
--    accessible and avoids leaking its existence via PostgREST schema inspection)
REVOKE ALL ON lounge_messages FROM anon;
GRANT SELECT, INSERT ON lounge_messages TO authenticated;

-- 3. Rebuild RLS policies to include is_active check and hide deleted messages
DROP POLICY IF EXISTS "lounge_select" ON lounge_messages;
DROP POLICY IF EXISTS "lounge_insert" ON lounge_messages;
DROP POLICY IF EXISTS "lounge_admin_all" ON lounge_messages;

-- Approved, active, non-suspended listeners can read non-deleted messages
CREATE POLICY "lounge_select" ON lounge_messages
  FOR SELECT USING (
    deleted_at IS NULL AND
    EXISTS (
      SELECT 1 FROM listener_profiles
      WHERE user_id = auth.uid()
        AND is_approved = true
        AND is_active    = true
        AND (is_suspended IS NULL OR is_suspended = false)
    )
  );

-- Same gate for insert; sender_id must be the authenticated user
CREATE POLICY "lounge_insert" ON lounge_messages
  FOR INSERT WITH CHECK (
    auth.uid() = sender_id AND
    EXISTS (
      SELECT 1 FROM listener_profiles
      WHERE user_id = auth.uid()
        AND is_approved = true
        AND is_active    = true
        AND (is_suspended IS NULL OR is_suspended = false)
    )
  );

-- Listeners can soft-delete their own messages
CREATE POLICY "lounge_self_delete" ON lounge_messages
  FOR UPDATE USING (
    auth.uid() = sender_id AND deleted_at IS NULL
  ) WITH CHECK (
    auth.uid() = sender_id
  );

-- Admins can read (including deleted) and update any message
CREATE POLICY "lounge_admin_all" ON lounge_messages
  FOR ALL USING (
    EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND (is_admin = true OR role = 'admin'))
  );
