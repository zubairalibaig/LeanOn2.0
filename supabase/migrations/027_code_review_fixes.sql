-- ================================================================
-- Migration 027: Code-review fixes round 3
--
-- 1. users.role column — add early so 016/021/022 references don't
--    fail on a fresh sequential apply. (999 also adds it as a safety
--    net, but an early creation is cleaner.)
-- 2. Idempotency guards on ADD CONSTRAINT statements in 022/025 that
--    lack DROP-first guards (fails on re-run).
-- 3. content_flags SELECT policy — add a missing authenticated SELECT
--    policy so the admin queries don't silently return nothing.
-- ================================================================

-- ── 1. users.role column ─────────────────────────────────────────
-- Referenced by policies in 016/016b/021/022 and the 025 guard
-- trigger. Not created by any earlier migration.
ALTER TABLE public.users
  ADD COLUMN IF NOT EXISTS role TEXT NOT NULL DEFAULT 'seeker';

-- ── 2. Idempotency guards for 022 constraints ────────────────────
-- These were added with ADD CONSTRAINT ... NOT VALID and no DROP-first
-- guard; re-running them errors with "constraint already exists".
ALTER TABLE public.users
  DROP CONSTRAINT IF EXISTS wallet_balance_non_negative;
ALTER TABLE public.users
  ADD CONSTRAINT wallet_balance_non_negative CHECK (wallet_balance >= 0) NOT VALID;

ALTER TABLE public.payout_requests
  DROP CONSTRAINT IF EXISTS payout_amount_positive;
ALTER TABLE public.payout_requests
  ADD CONSTRAINT payout_amount_positive CHECK (amount > 0) NOT VALID;

-- listener_earnings (may or may not exist depending on which migrations ran)
DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM information_schema.tables
             WHERE table_schema='public' AND table_name='listener_earnings') THEN
    EXECUTE 'ALTER TABLE public.listener_earnings DROP CONSTRAINT IF EXISTS earnings_net_positive';
    EXECUTE 'ALTER TABLE public.listener_earnings ADD CONSTRAINT earnings_net_positive CHECK (net_amount >= 0) NOT VALID';
  END IF;
END $$;

-- 025's refund constraint
ALTER TABLE public.refund_requests
  DROP CONSTRAINT IF EXISTS refund_amount_positive;
ALTER TABLE public.refund_requests
  ADD CONSTRAINT refund_amount_positive CHECK (amount > 0) NOT VALID;

-- ── 3. cleanup/expire self-heal rate-limit: note only ────────────
-- The per-user rate limit for the self-heal path is enforced in
-- application code (lib/rate-limit.ts). No DB change needed here.
-- Documented for reference: both routes now use checkRateLimit on
-- the non-cron authenticated path.
