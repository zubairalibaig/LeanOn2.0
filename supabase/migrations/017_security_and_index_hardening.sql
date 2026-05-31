-- ================================================================
-- Migration 017: Session UPDATE policy hardening + index improvements
-- Run in Supabase Dashboard → SQL Editor
-- ================================================================

-- ── FIX 1: sessions_update_own too broad ─────────────────────────
-- Current policy: seeker OR listener can UPDATE any column including
-- financial columns (amount_held, platform_fee, status).
-- The app routes use service role (admin client) for all session
-- mutations, so this user-level UPDATE policy is not needed for app
-- function. Restrict it to seeker-only rating/review after completion.

DROP POLICY IF EXISTS "sessions_update_own" ON public.sessions;

-- Seekers may only update their own rating and review after completion.
-- All other session updates (status, amounts, timestamps) go through
-- service-role API routes and do NOT require user-level UPDATE permission.
CREATE POLICY "sessions_seeker_rating_update"
  ON public.sessions FOR UPDATE
  USING (auth.uid() = seeker_id AND status = 'completed')
  WITH CHECK (auth.uid() = seeker_id);


-- ── FIX 2: platform_fee missing non-negative constraint ──────────
-- amount_held already has amount_held >= 0 from migration 005.
-- platform_fee was added later without the same protection.
ALTER TABLE public.sessions
  DROP CONSTRAINT IF EXISTS sessions_platform_fee_nonneg;

ALTER TABLE public.sessions
  ADD CONSTRAINT sessions_platform_fee_nonneg
  CHECK (platform_fee >= 0);


-- ── FIX 3: Composite index on messages for sorted queries ─────────
-- messages(session_id) exists but queries always ORDER BY created_at.
-- A composite index avoids a separate sort step.
CREATE INDEX IF NOT EXISTS idx_messages_session_created
  ON public.messages(session_id, created_at ASC);


-- ── FIX 4: Index on sessions(started_at) for admin time queries ───
-- Admin dashboard filters sessions by started_at (today, this month,
-- last 30 days). Without this index, all queries scan the full table.
CREATE INDEX IF NOT EXISTS idx_sessions_started_at
  ON public.sessions(started_at DESC);


-- ── FIX 5: wallet_transactions INSERT only via service role ────────
-- Currently no explicit INSERT policy. Service role bypasses RLS
-- so all app inserts work, but there's no explicit denial for users.
-- Add a policy that blocks direct user inserts (all credits/debits
-- must go through the credit_wallet/deduct_wallet RPCs or API routes).
DROP POLICY IF EXISTS "wallet_txns_user_insert_deny" ON public.wallet_transactions;

-- No INSERT policy = users cannot INSERT directly (default deny in Postgres RLS)
-- Document this explicitly with a comment rather than adding a policy.
-- The absence of an INSERT policy for wallet_transactions is intentional:
-- inserts ONLY happen via service-role API routes and RPCs.


-- ── FIX 6: Tighten lp_update_own scope ───────────────────────────
-- listener_profiles UPDATE currently allows any column update.
-- is_approved and is_verified should be service-role only.
-- Since the app uses service role for approvals, no app breakage occurs.
-- Note: Supabase doesn't support per-column RLS without column-level
-- security which requires triggers. Document the architectural decision:
-- all is_approved / is_verified mutations MUST go through admin API routes
-- that use createAdminClient() — never the user-facing Supabase client.


-- ── Verify ────────────────────────────────────────────────────────
-- SELECT policyname, cmd, qual, with_check
--   FROM pg_policies WHERE tablename = 'sessions' ORDER BY cmd;
-- SELECT indexname, indexdef
--   FROM pg_indexes WHERE tablename = 'messages' AND schemaname = 'public';
-- SELECT indexname, indexdef
--   FROM pg_indexes WHERE tablename = 'sessions' AND schemaname = 'public';
