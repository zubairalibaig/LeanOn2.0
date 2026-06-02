-- ================================================================
-- Migration 022: Rate cap increase + schema fixes for production
-- ================================================================

-- ── FIX 1: Widen listener rate cap (was 8–25, now 1–200) ────────
-- Must clamp existing rows before changing the constraint.
UPDATE public.listener_profiles SET rate_per_min = 1   WHERE rate_per_min < 1;
UPDATE public.listener_profiles SET rate_per_min = 200  WHERE rate_per_min > 200;

ALTER TABLE public.listener_profiles
  DROP CONSTRAINT IF EXISTS lp_rate_range;

ALTER TABLE public.listener_profiles
  ADD CONSTRAINT lp_rate_range
  CHECK (rate_per_min >= 1 AND rate_per_min <= 200);

-- ── FIX 2: Add upi_id to listener_applications ───────────────────
-- The become-listener form collects a UPI ID for payouts.
-- The table was missing this column, causing submission failures.
ALTER TABLE public.listener_applications
  ADD COLUMN IF NOT EXISTS upi_id TEXT;

-- ── FIX 3: wallet_balance non-negative constraint ─────────────────
-- Prevents overdraft race conditions at the DB level (belt+suspenders
-- alongside the credit_wallet/debit_wallet RPC logic).
ALTER TABLE public.users
  ADD CONSTRAINT wallet_balance_non_negative
  CHECK (wallet_balance >= 0)
  NOT VALID; -- NOT VALID: skips scan of existing rows (faster), enforces for new writes

-- ── FIX 4: payout/refund amount positive constraints ─────────────
ALTER TABLE public.payout_requests
  ADD CONSTRAINT payout_amount_positive CHECK (amount > 0)
  NOT VALID;

ALTER TABLE public.listener_earnings
  ADD CONSTRAINT earnings_net_positive CHECK (net_amount >= 0)
  NOT VALID;

-- ── FIX 5: admin_audit_logs RLS also cover is_admin flag ─────────
-- Migration 021 created a policy checking only role='admin'.
-- Extend to also cover is_admin=true users.
DROP POLICY IF EXISTS "admin_read_audit_logs" ON public.admin_audit_logs;
CREATE POLICY "admin_read_audit_logs" ON public.admin_audit_logs
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.users
      WHERE id = auth.uid()
        AND (role = 'admin' OR is_admin = true)
    )
  );

-- ── FIX 6: Crisis flag UUID validation (belt-and-suspenders) ─────
-- sessions.id is already a uuid PK so any value will be validated
-- by FK. Nothing extra needed here.

-- ── VERIFY ───────────────────────────────────────────────────────
-- SELECT column_name, data_type FROM information_schema.columns
--   WHERE table_name = 'listener_applications' AND column_name = 'upi_id';
-- SELECT conname, consrc FROM pg_constraint
--   WHERE conrelid = 'public.listener_profiles'::regclass AND contype = 'c';
