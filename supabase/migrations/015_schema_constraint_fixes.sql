-- ================================================================
-- Migration 015: Fix DB constraint bugs found in production
-- Run in Supabase Dashboard → SQL Editor
-- ================================================================

-- ── FIX 1: wallet_transactions.type is missing 'refund' ────────────
-- The base schema CHECK only allowed ('credit','debit') but the
-- session completion code inserts type='refund' for partial refunds.
-- These inserts silently failed, leaving no audit trail for refunds.
-- Wallet balances were correct (credit_wallet RPC ran), but no record.

ALTER TABLE public.wallet_transactions
  DROP CONSTRAINT IF EXISTS wallet_transactions_type_check;

ALTER TABLE public.wallet_transactions
  ADD CONSTRAINT wallet_transactions_type_check
  CHECK (type IN ('credit', 'debit', 'refund'));


-- ── FIX 2: sessions.status missing 'pending' ───────────────────────
-- Indexes and cleanup code reference 'pending' sessions.
-- Add it to the constraint so the status is valid if/when used.

ALTER TABLE public.sessions
  DROP CONSTRAINT IF EXISTS sessions_status_check;

ALTER TABLE public.sessions
  ADD CONSTRAINT sessions_status_check
  CHECK (status IN ('pending', 'active', 'completed', 'cancelled'));


-- ── FIX 3: payout_requests missing status values ───────────────────
-- Base schema only had ('pending','completed','rejected') but the
-- admin UI uses 'approved' and 'processing' as intermediate states.

ALTER TABLE public.payout_requests
  DROP CONSTRAINT IF EXISTS payout_requests_status_check;

ALTER TABLE public.payout_requests
  ADD CONSTRAINT payout_requests_status_check
  CHECK (status IN ('pending', 'approved', 'processing', 'paid', 'completed', 'rejected'));


-- ── FIX 4: sessions.seeker_rating type reconciliation ─────────────
-- Base schema used INTEGER, migration 014 tried to add NUMERIC(3,2).
-- The column exists as INTEGER which is correct for 1-5 ratings.
-- No action needed — just document the intended type is INTEGER.


-- ── FIX 5: Ensure realtime is enabled on sessions (for live status) ─
DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_publication_tables
    WHERE pubname = 'supabase_realtime' AND tablename = 'sessions'
  ) THEN
    ALTER PUBLICATION supabase_realtime ADD TABLE public.sessions;
  END IF;
END $$;


-- ── Verify constraints are correct ────────────────────────────────
-- Run these to confirm (optional):
-- SELECT conname, consrc FROM pg_constraint
--   WHERE conrelid = 'public.wallet_transactions'::regclass AND contype = 'c';
-- SELECT conname, consrc FROM pg_constraint
--   WHERE conrelid = 'public.sessions'::regclass AND contype = 'c';
