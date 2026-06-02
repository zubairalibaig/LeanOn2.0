-- ================================================================
-- Migration 025: CRITICAL — block privileged column self-writes
--
-- RLS policies in this codebase grant users UPDATE on their own
-- rows (users_update_own, lp_update_own) with NO column-level
-- restriction. PostgreSQL RLS cannot restrict individual columns,
-- so an authenticated user can do:
--   update users set is_admin=true, wallet_balance=999999 ...
--   update listener_profiles set is_approved=true, is_verified=true ...
--   insert into payout_requests (..., status) values (..., 'approved')
--
-- These BEFORE-triggers enforce column-level protection that survives
-- regardless of which migration's policy is currently active, and
-- regardless of migration execution order. Service-role writes
-- (admin APIs) bypass these triggers via auth.role() check.
-- ================================================================

-- Helper: true when the current connection is the service role
-- (admin API routes use the service-role key, which must be allowed
-- to change these columns).
CREATE OR REPLACE FUNCTION public.is_service_role()
RETURNS BOOLEAN LANGUAGE sql STABLE
SET search_path = public, pg_temp AS $$
  SELECT COALESCE(
    current_setting('request.jwt.claim.role', true),
    (current_setting('request.jwt.claims', true)::jsonb ->> 'role'),
    ''
  ) = 'service_role';
$$;

-- ── 1. Protect public.users privileged columns ──────────────────
CREATE OR REPLACE FUNCTION public.guard_users_privileged_cols()
RETURNS TRIGGER LANGUAGE plpgsql SECURITY DEFINER
SET search_path = public, pg_temp AS $$
BEGIN
  -- Service role (admin APIs) may change anything.
  IF public.is_service_role() THEN
    RETURN NEW;
  END IF;

  -- For normal users, freeze privileged columns to their OLD values.
  NEW.is_admin       := OLD.is_admin;
  NEW.role           := OLD.role;
  NEW.wallet_balance := OLD.wallet_balance;
  NEW.is_suspended   := OLD.is_suspended;
  NEW.is_active      := OLD.is_active;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS users_guard_privileged ON public.users;
CREATE TRIGGER users_guard_privileged
  BEFORE UPDATE ON public.users
  FOR EACH ROW EXECUTE FUNCTION public.guard_users_privileged_cols();

-- ── 2. Protect listener_profiles privileged columns ─────────────
CREATE OR REPLACE FUNCTION public.guard_lp_privileged_cols()
RETURNS TRIGGER LANGUAGE plpgsql SECURITY DEFINER
SET search_path = public, pg_temp AS $$
BEGIN
  IF public.is_service_role() THEN
    RETURN NEW;
  END IF;

  -- Listeners may edit bio/tags/languages/rate/availability,
  -- but NOT approval/verification/suspension/rating/session count.
  NEW.is_approved     := OLD.is_approved;
  NEW.is_verified     := OLD.is_verified;
  NEW.is_suspended    := OLD.is_suspended;
  NEW.rating          := OLD.rating;
  NEW.total_sessions  := OLD.total_sessions;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS lp_guard_privileged ON public.listener_profiles;
CREATE TRIGGER lp_guard_privileged
  BEFORE UPDATE ON public.listener_profiles
  FOR EACH ROW EXECUTE FUNCTION public.guard_lp_privileged_cols();

-- ── 3. Protect listener_verifications status columns ────────────
CREATE OR REPLACE FUNCTION public.guard_verif_status()
RETURNS TRIGGER LANGUAGE plpgsql SECURITY DEFINER
SET search_path = public, pg_temp AS $$
BEGIN
  IF public.is_service_role() THEN
    RETURN NEW;
  END IF;
  NEW.status      := OLD.status;
  NEW.reviewed_by := OLD.reviewed_by;
  NEW.reviewed_at := OLD.reviewed_at;
  NEW.admin_notes := OLD.admin_notes;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS verif_guard_status ON public.listener_verifications;
CREATE TRIGGER verif_guard_status
  BEFORE UPDATE ON public.listener_verifications
  FOR EACH ROW EXECUTE FUNCTION public.guard_verif_status();

-- ── 4. Lock down payout_requests / refund_requests writes ───────
-- These were FOR ALL USING(auth.uid()=user_id) with no WITH CHECK,
-- letting users insert pre-approved rows or self-complete. Replace
-- with explicit per-operation policies.
DROP POLICY IF EXISTS "payout_own"          ON public.payout_requests;
DROP POLICY IF EXISTS "listener_own_payouts"      ON public.payout_requests;
DROP POLICY IF EXISTS "listener_insert_payout"    ON public.payout_requests;
DROP POLICY IF EXISTS "admin_all_payouts"         ON public.payout_requests;

CREATE POLICY "payout_select_own" ON public.payout_requests
  FOR SELECT USING (auth.uid() = user_id OR auth.uid() = listener_id);
CREATE POLICY "payout_insert_own" ON public.payout_requests
  FOR INSERT WITH CHECK (
    (auth.uid() = user_id OR auth.uid() = listener_id)
    AND status = 'pending'
    AND amount > 0
  );
-- No user UPDATE/DELETE — status transitions are service-role only.

DROP POLICY IF EXISTS "refund_own"           ON public.refund_requests;
DROP POLICY IF EXISTS "refund_select_own"    ON public.refund_requests;
DROP POLICY IF EXISTS "refund_insert_own"    ON public.refund_requests;

CREATE POLICY "refund_select_own" ON public.refund_requests
  FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "refund_insert_own" ON public.refund_requests
  FOR INSERT WITH CHECK (
    auth.uid() = user_id
    AND status = 'pending'
    AND amount > 0
  );
-- No user UPDATE/DELETE.

-- ── 5. refund_requests positive-amount constraint ───────────────
ALTER TABLE public.refund_requests
  ADD CONSTRAINT refund_amount_positive CHECK (amount > 0) NOT VALID;

-- ── 6. Drop the over-permissive listener_profiles_read_all if present
DROP POLICY IF EXISTS "listener_profiles_read_all" ON public.listener_profiles;

-- ── 7. notifications: split FOR ALL into scoped policies ────────
DROP POLICY IF EXISTS "user_own_notifications" ON public.notifications;
DROP POLICY IF EXISTS "user_own"               ON public.notifications;
CREATE POLICY "notif_select_own" ON public.notifications
  FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "notif_update_own" ON public.notifications
  FOR UPDATE USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
-- INSERTs come from service-role server code only.

-- ── 8. create_session RPC search_path hardening ─────────────────
-- (002 created it as SECURITY DEFINER without search_path.)
-- Re-assert search_path without rewriting the body, if it exists.
DO $$
DECLARE r RECORD;
BEGIN
  FOR r IN
    SELECT p.oid, p.proname,
           pg_get_function_identity_arguments(p.oid) AS args
    FROM pg_proc p
    WHERE p.pronamespace = 'public'::regnamespace
      AND p.prosecdef = true
      AND p.proname IN ('create_session')
  LOOP
    EXECUTE format(
      'ALTER FUNCTION public.%I(%s) SET search_path = public, pg_temp',
      r.proname, r.args
    );
  END LOOP;
END $$;

-- ── 9. Idempotent wallet credit (fixes webhook/PUT double-credit race) ──
-- Inserts the ledger row FIRST (unique reference_id rejects duplicates),
-- and only bumps the balance when a row was actually inserted — all in one
-- transaction. Both the client PUT and the Razorpay webhook call this, so
-- concurrent firing can never double-credit.
CREATE OR REPLACE FUNCTION public.credit_wallet_idempotent(
  p_user_id      UUID,
  p_amount       INTEGER,
  p_reference_id TEXT,
  p_description  TEXT DEFAULT 'Wallet recharge'
)
RETURNS INTEGER  -- returns the resulting wallet balance
LANGUAGE plpgsql SECURITY DEFINER
SET search_path = public, pg_temp AS $$
DECLARE
  v_inserted INTEGER;
  v_balance  INTEGER;
BEGIN
  IF p_amount IS NULL OR p_amount <= 0 THEN
    RAISE EXCEPTION 'credit_wallet_idempotent: amount must be positive, got %', p_amount;
  END IF;

  IF p_reference_id IS NULL OR p_reference_id = '' THEN
    RAISE EXCEPTION 'credit_wallet_idempotent: reference_id is required';
  END IF;

  -- ON CONFLICT must match the partial unique index predicate
  -- (wallet_txn_payment_id_unique ... WHERE reference_id IS NOT NULL)
  INSERT INTO public.wallet_transactions (user_id, amount, type, description, reference_id)
  VALUES (p_user_id, p_amount, 'credit', p_description, p_reference_id)
  ON CONFLICT (reference_id) WHERE reference_id IS NOT NULL DO NOTHING;

  GET DIAGNOSTICS v_inserted = ROW_COUNT;

  IF v_inserted = 1 THEN
    UPDATE public.users
    SET wallet_balance = wallet_balance + p_amount
    WHERE id = p_user_id
    RETURNING wallet_balance INTO v_balance;

    IF v_balance IS NULL THEN
      RAISE EXCEPTION 'User not found: %', p_user_id;
    END IF;
  ELSE
    -- Already processed — return current balance unchanged
    SELECT wallet_balance INTO v_balance FROM public.users WHERE id = p_user_id;
  END IF;

  RETURN v_balance;
END;
$$;

-- ── VERIFY ───────────────────────────────────────────────────────
-- Confirm a normal user cannot escalate (run as that user, should be no-op):
--   UPDATE users SET is_admin = true WHERE id = auth.uid();
--   SELECT is_admin FROM users WHERE id = auth.uid();  -- still false
-- Confirm triggers exist:
--   SELECT tgname, tgrelid::regclass FROM pg_trigger
--   WHERE tgname LIKE '%guard%';
