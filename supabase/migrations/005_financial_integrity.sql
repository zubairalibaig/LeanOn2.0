-- ================================================================
-- Migration 005: Financial integrity constraints
-- Run in Supabase Dashboard → SQL Editor
-- ================================================================

-- Prevent double-crediting the same Razorpay payment
CREATE UNIQUE INDEX IF NOT EXISTS wallet_txn_payment_id_unique
  ON public.wallet_transactions(reference_id)
  WHERE reference_id IS NOT NULL;

-- amount_held is 0 for free trials, positive for paid sessions
-- Drop old constraint if it exists (was incorrectly set to > 0)
ALTER TABLE public.sessions DROP CONSTRAINT IF EXISTS sessions_amount_held_positive;
ALTER TABLE public.sessions
  ADD CONSTRAINT sessions_amount_held_non_negative CHECK (amount_held >= 0);

-- Fast index for double-booking prevention
CREATE INDEX IF NOT EXISTS sessions_listener_status_idx
  ON public.sessions(listener_id, status)
  WHERE status IN ('pending', 'active');

-- Fast index for seeker active sessions check
CREATE INDEX IF NOT EXISTS sessions_seeker_status_idx
  ON public.sessions(seeker_id, status)
  WHERE status IN ('pending', 'active');
