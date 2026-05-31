-- ================================================================
-- Migration 016: Critical security fixes + schema hardening
-- Run in Supabase Dashboard → SQL Editor
-- ================================================================

-- ── CRITICAL FIX 1: messages_read policy allows ANY auth user ─────
-- The existing policy WHERE auth.uid() IS NOT NULL lets any logged-in
-- user read ALL session messages across the entire platform. This must
-- be replaced with a policy that only allows session participants.

DROP POLICY IF EXISTS "messages_read" ON public.messages;
DROP POLICY IF EXISTS "messages_select" ON public.messages;
DROP POLICY IF EXISTS "Enable read access for all users" ON public.messages;

-- Participants only: seeker or listener of the session
CREATE POLICY "messages_select_participants" ON public.messages
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.sessions s
      WHERE s.id = messages.session_id
        AND (s.seeker_id = auth.uid() OR s.listener_id = auth.uid())
    )
  );

-- Admins can read all messages
CREATE POLICY "messages_select_admin" ON public.messages
  FOR SELECT USING (
    EXISTS (SELECT 1 FROM public.users WHERE id = auth.uid() AND (role = 'admin' OR is_admin = true))
  );


-- ── FIX 2: Remove duplicate / overly-broad RLS policies ──────────

-- listener_profiles duplicates
DROP POLICY IF EXISTS "Public listener profiles are viewable by everyone." ON public.listener_profiles;
DROP POLICY IF EXISTS "listener_profiles_public_read" ON public.listener_profiles;
DROP POLICY IF EXISTS "Enable read access for all users" ON public.listener_profiles;

-- Re-create single clean policy
DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE tablename = 'listener_profiles' AND policyname = 'listener_profiles_read_all'
  ) THEN
    EXECUTE 'CREATE POLICY "listener_profiles_read_all" ON public.listener_profiles FOR SELECT USING (true)';
  END IF;
END $$;


-- wallet_transactions duplicates
DROP POLICY IF EXISTS "Users can view own wallet transactions" ON public.wallet_transactions;
DROP POLICY IF EXISTS "wallet_tx_select_own" ON public.wallet_transactions;

DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE tablename = 'wallet_transactions' AND policyname = 'wallet_transactions_select_own'
  ) THEN
    EXECUTE 'CREATE POLICY "wallet_transactions_select_own" ON public.wallet_transactions FOR SELECT USING (auth.uid() = user_id)';
  END IF;
END $$;


-- sessions duplicates
DROP POLICY IF EXISTS "Sessions are viewable by participants" ON public.sessions;
DROP POLICY IF EXISTS "sessions_select_participants" ON public.sessions;

DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE tablename = 'sessions' AND policyname = 'sessions_read_participants'
  ) THEN
    EXECUTE 'CREATE POLICY "sessions_read_participants" ON public.sessions FOR SELECT USING (
      seeker_id = auth.uid() OR listener_id = auth.uid()
      OR EXISTS (SELECT 1 FROM public.users WHERE id = auth.uid() AND (role = ''admin'' OR is_admin = true))
    )';
  END IF;
END $$;


-- ── FIX 3: listener_profiles.bio NOT NULL without default ─────────
-- INSERT during become-listener flow fails if bio is omitted.
ALTER TABLE public.listener_profiles
  ALTER COLUMN bio SET DEFAULT '';


-- ── FIX 4: Ensure is_admin column exists (idempotent) ────────────
ALTER TABLE public.users ADD COLUMN IF NOT EXISTS is_admin BOOLEAN NOT NULL DEFAULT FALSE;

-- Also ensure role column has 'admin' as valid value (no CHECK constraint
-- expected on role, but add it if missing; if CHECK exists this is a no-op
-- since we're just documenting possible values).
-- Real DB shows role text DEFAULT 'seeker' with no check constraint — safe.


-- ── FIX 5: Add admin read policy for sessions crisis flag ─────────
DROP POLICY IF EXISTS "admin_read_sessions" ON public.sessions;

DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE tablename = 'sessions' AND policyname = 'sessions_admin_read'
  ) THEN
    EXECUTE 'CREATE POLICY "sessions_admin_read" ON public.sessions FOR SELECT USING (
      EXISTS (SELECT 1 FROM public.users WHERE id = auth.uid() AND (role = ''admin'' OR is_admin = true))
    )';
  END IF;
END $$;


-- ── FIX 6: Add admin policies for listener_verifications ─────────
DO $$ BEGIN
  IF EXISTS (SELECT 1 FROM pg_tables WHERE tablename = 'listener_verifications' AND schemaname = 'public') THEN
    IF NOT EXISTS (
      SELECT 1 FROM pg_policies WHERE tablename = 'listener_verifications' AND policyname = 'admin_all_verifications'
    ) THEN
      EXECUTE 'CREATE POLICY "admin_all_verifications" ON public.listener_verifications FOR ALL USING (
        EXISTS (SELECT 1 FROM public.users WHERE id = auth.uid() AND (role = ''admin'' OR is_admin = true))
      )';
    END IF;
  END IF;
END $$;


-- ── FIX 7: Admin read for content_flags (reports moderation) ─────
DO $$ BEGIN
  IF EXISTS (SELECT 1 FROM pg_tables WHERE tablename = 'content_flags' AND schemaname = 'public') THEN
    IF NOT EXISTS (
      SELECT 1 FROM pg_policies WHERE tablename = 'content_flags' AND policyname = 'admin_all_flags'
    ) THEN
      EXECUTE 'CREATE POLICY "admin_all_flags" ON public.content_flags FOR ALL USING (
        EXISTS (SELECT 1 FROM public.users WHERE id = auth.uid() AND (role = ''admin'' OR is_admin = true))
      )';
    END IF;
  END IF;
END $$;


-- ── GRANT ADMIN: Set role + is_admin for the platform owner ──────
-- After running this migration, also run this in a separate query
-- to grant yourself admin access. Replace <your-uuid> with your
-- actual user UUID from:
--   SELECT id FROM public.users ORDER BY created_at ASC LIMIT 5;
--
-- UPDATE public.users
-- SET role = 'admin', is_admin = true
-- WHERE id = '<your-uuid>';


-- ── Verify key policies ───────────────────────────────────────────
-- Run these to confirm (optional):
-- SELECT policyname, cmd, qual FROM pg_policies WHERE tablename = 'messages';
-- SELECT policyname, cmd, qual FROM pg_policies WHERE tablename = 'sessions';
-- SELECT id, name, phone, email, role, is_admin FROM public.users
--   WHERE role = 'admin' OR is_admin = true;
