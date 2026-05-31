-- ================================================================
-- Migration 016b: Idempotent re-run of 016 (fixes partial execution)
-- Run this if 016 failed with "policy already exists" errors.
-- Safe to run even if 016 completed successfully.
-- ================================================================

-- ── Messages policies — drop ALL existing, recreate cleanly ──────
-- 016 ran partially: messages_read was dropped but the new policy
-- creation failed. Drop all messages SELECT policies and recreate.
DROP POLICY IF EXISTS "messages_read"                   ON public.messages;
DROP POLICY IF EXISTS "messages_select"                 ON public.messages;
DROP POLICY IF EXISTS "messages_participant_select"     ON public.messages;
DROP POLICY IF EXISTS "messages_select_participants"    ON public.messages;
DROP POLICY IF EXISTS "messages_select_admin"           ON public.messages;
DROP POLICY IF EXISTS "Enable read access for all users" ON public.messages;

-- Participants only (seeker or listener of that session)
CREATE POLICY "messages_select_participants" ON public.messages
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.sessions s
      WHERE s.id = messages.session_id
        AND (s.seeker_id = auth.uid() OR s.listener_id = auth.uid())
    )
  );

-- Admins can read all messages for moderation
CREATE POLICY "messages_select_admin" ON public.messages
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.users
      WHERE id = auth.uid() AND (role = 'admin' OR is_admin = true)
    )
  );


-- ── listener_profiles duplicates — idempotent re-run ─────────────
DROP POLICY IF EXISTS "Public listener profiles are viewable by everyone." ON public.listener_profiles;
DROP POLICY IF EXISTS "listener_profiles_public_read" ON public.listener_profiles;
DROP POLICY IF EXISTS "Enable read access for all users" ON public.listener_profiles;
DROP POLICY IF EXISTS "listener_profiles_read_all" ON public.listener_profiles;

CREATE POLICY "listener_profiles_read_all" ON public.listener_profiles
  FOR SELECT USING (true);


-- ── wallet_transactions — idempotent ─────────────────────────────
DROP POLICY IF EXISTS "Users can view own wallet transactions"  ON public.wallet_transactions;
DROP POLICY IF EXISTS "wallet_tx_select_own"                   ON public.wallet_transactions;
DROP POLICY IF EXISTS "wallet_transactions_select_own"         ON public.wallet_transactions;

CREATE POLICY "wallet_transactions_select_own" ON public.wallet_transactions
  FOR SELECT USING (auth.uid() = user_id);


-- ── sessions — idempotent ─────────────────────────────────────────
DROP POLICY IF EXISTS "Sessions are viewable by participants" ON public.sessions;
DROP POLICY IF EXISTS "sessions_select_participants"         ON public.sessions;
DROP POLICY IF EXISTS "sessions_read_participants"           ON public.sessions;
DROP POLICY IF EXISTS "sessions_admin_read"                  ON public.sessions;

CREATE POLICY "sessions_read_participants" ON public.sessions
  FOR SELECT USING (
    seeker_id = auth.uid() OR listener_id = auth.uid()
    OR EXISTS (
      SELECT 1 FROM public.users
      WHERE id = auth.uid() AND (role = 'admin' OR is_admin = true)
    )
  );


-- ── listener_profiles.bio default ────────────────────────────────
ALTER TABLE public.listener_profiles
  ALTER COLUMN bio SET DEFAULT '';


-- ── Admin policies ────────────────────────────────────────────────
DROP POLICY IF EXISTS "admin_all_flags"          ON public.content_flags;
DROP POLICY IF EXISTS "admin_all_verifications"  ON public.listener_verifications;

DO $$ BEGIN
  IF EXISTS (SELECT 1 FROM pg_tables WHERE tablename = 'content_flags' AND schemaname = 'public') THEN
    EXECUTE 'CREATE POLICY "admin_all_flags" ON public.content_flags FOR ALL USING (
      EXISTS (SELECT 1 FROM public.users WHERE id = auth.uid() AND (role = ''admin'' OR is_admin = true))
    )';
  END IF;
END $$;

DO $$ BEGIN
  IF EXISTS (SELECT 1 FROM pg_tables WHERE tablename = 'listener_verifications' AND schemaname = 'public') THEN
    EXECUTE 'CREATE POLICY "admin_all_verifications" ON public.listener_verifications FOR ALL USING (
      EXISTS (SELECT 1 FROM public.users WHERE id = auth.uid() AND (role = ''admin'' OR is_admin = true))
    )';
  END IF;
END $$;


-- ── Verify ────────────────────────────────────────────────────────
-- SELECT policyname, cmd, qual FROM pg_policies WHERE tablename = 'messages';
-- SELECT policyname, cmd FROM pg_policies WHERE tablename = 'sessions';
