-- ================================================================
-- Migration 999: FINAL hardening — must run LAST.
--
-- WHY THIS FILE EXISTS / FILENAME:
-- The base-schema files `20250511_*` and `20250512_complete_schema.sql`
-- are date-prefixed, so they sort AFTER every numbered migration
-- (001..026) and therefore run LAST. That base schema unconditionally
-- re-creates triggers, RPCs, RLS policies and CHECK constraints in their
-- ORIGINAL (un-hardened) form — silently reverting the security and
-- correctness fixes from migrations 015, 017, 019, 023, 024, 025, 026.
--
-- A normal `027_*` file would NOT help: '0' < '2', so it still sorts
-- BEFORE `20250512_`. This file is named `999_` so it sorts AFTER the
-- date-prefixed base schema ('9' > '2') and gets the final word.
--
-- Everything here is idempotent and safe to re-run.
-- ================================================================

-- ── 0. users.role column (referenced by many policies/triggers, never created) ──
-- Policies in 016/016b/021/022 and the 025 guard trigger reference
-- public.users.role, but no migration creates it. On a fresh DB this
-- makes EVERY users UPDATE fail ("column \"role\" does not exist").
ALTER TABLE public.users
  ADD COLUMN IF NOT EXISTS role TEXT NOT NULL DEFAULT 'seeker';

-- ── 1. CHECK constraints (re-assert 015 + 017) ───────────────────
ALTER TABLE public.wallet_transactions
  DROP CONSTRAINT IF EXISTS wallet_transactions_type_check;
ALTER TABLE public.wallet_transactions
  ADD CONSTRAINT wallet_transactions_type_check
  CHECK (type IN ('credit', 'debit', 'refund'));

ALTER TABLE public.sessions
  DROP CONSTRAINT IF EXISTS sessions_status_check;
ALTER TABLE public.sessions
  ADD CONSTRAINT sessions_status_check
  CHECK (status IN ('pending', 'active', 'completed', 'cancelled'));

ALTER TABLE public.payout_requests
  DROP CONSTRAINT IF EXISTS payout_requests_status_check;
ALTER TABLE public.payout_requests
  ADD CONSTRAINT payout_requests_status_check
  CHECK (status IN ('pending', 'approved', 'processing', 'paid', 'completed', 'rejected'));

ALTER TABLE public.sessions
  DROP CONSTRAINT IF EXISTS sessions_platform_fee_nonneg;
ALTER TABLE public.sessions
  ADD CONSTRAINT sessions_platform_fee_nonneg CHECK (platform_fee >= 0);

-- ── 2. handle_new_user: ghost-user guard + search_path (re-assert 019 + 023) ──
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER LANGUAGE plpgsql SECURITY DEFINER
SET search_path = public, pg_temp AS $$
BEGIN
  -- Phone-only users (email IS NULL) are created by the auth page upsert
  -- AFTER OTP verification — skip here to avoid ghost rows.
  IF NEW.email IS NULL THEN
    RETURN NEW;
  END IF;
  INSERT INTO public.users (id, email, phone, name)
  VALUES (NEW.id, NEW.email, NEW.phone, COALESCE(NEW.raw_user_meta_data->>'name', ''))
  ON CONFLICT (id) DO NOTHING;
  RETURN NEW;
END;
$$;

-- ── 3. Wallet RPCs: positive-amount guard + search_path (re-assert 023) ──
DROP FUNCTION IF EXISTS public.credit_wallet(uuid, numeric);
DROP FUNCTION IF EXISTS public.deduct_wallet(uuid, numeric);

CREATE OR REPLACE FUNCTION public.credit_wallet(p_user_id UUID, p_amount INTEGER)
RETURNS VOID LANGUAGE plpgsql SECURITY DEFINER
SET search_path = public, pg_temp AS $$
BEGIN
  IF p_amount IS NULL OR p_amount <= 0 THEN
    RAISE EXCEPTION 'credit_wallet: amount must be positive, got %', p_amount;
  END IF;
  UPDATE public.users SET wallet_balance = wallet_balance + p_amount WHERE id = p_user_id;
  IF NOT FOUND THEN RAISE EXCEPTION 'User not found: %', p_user_id; END IF;
END;
$$;

CREATE OR REPLACE FUNCTION public.deduct_wallet(p_user_id UUID, p_amount INTEGER)
RETURNS VOID LANGUAGE plpgsql SECURITY DEFINER
SET search_path = public, pg_temp AS $$
DECLARE v_balance INTEGER;
BEGIN
  IF p_amount IS NULL OR p_amount <= 0 THEN
    RAISE EXCEPTION 'deduct_wallet: amount must be positive, got %', p_amount;
  END IF;
  SELECT wallet_balance INTO v_balance FROM public.users WHERE id = p_user_id FOR UPDATE;
  IF v_balance IS NULL THEN RAISE EXCEPTION 'User not found: %', p_user_id; END IF;
  IF v_balance < p_amount THEN
    RAISE EXCEPTION 'insufficient_balance: has %, needs %', v_balance, p_amount;
  END IF;
  UPDATE public.users SET wallet_balance = wallet_balance - p_amount WHERE id = p_user_id;
END;
$$;

-- ── 4. RLS policies: re-assert hardened forms (017, 024, 025, 026) ──

-- sessions: drop the over-broad update policy from the base schema,
-- restrict user UPDATE to seeker rating after completion (service role
-- handles all other mutations).
DROP POLICY IF EXISTS "sessions_update_own"          ON public.sessions;
DROP POLICY IF EXISTS "sessions_seeker_rating_update" ON public.sessions;
CREATE POLICY "sessions_seeker_rating_update"
  ON public.sessions FOR UPDATE
  USING (auth.uid() = seeker_id AND status = 'completed')
  WITH CHECK (auth.uid() = seeker_id);

-- payout_requests: split FOR ALL into scoped SELECT + bounded INSERT.
DROP POLICY IF EXISTS "payout_own"        ON public.payout_requests;
DROP POLICY IF EXISTS "payout_select_own" ON public.payout_requests;
DROP POLICY IF EXISTS "payout_insert_own" ON public.payout_requests;
CREATE POLICY "payout_select_own" ON public.payout_requests
  FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "payout_insert_own" ON public.payout_requests
  FOR INSERT WITH CHECK (auth.uid() = user_id AND status = 'pending' AND amount > 0);

-- refund_requests: split FOR ALL into scoped SELECT + bounded INSERT.
DROP POLICY IF EXISTS "refund_own"        ON public.refund_requests;
DROP POLICY IF EXISTS "refund_select_own" ON public.refund_requests;
DROP POLICY IF EXISTS "refund_insert_own" ON public.refund_requests;
CREATE POLICY "refund_select_own" ON public.refund_requests
  FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "refund_insert_own" ON public.refund_requests
  FOR INSERT WITH CHECK (auth.uid() = user_id AND status = 'pending' AND amount > 0);

-- contact_messages: bounded INSERT instead of WITH CHECK (TRUE).
DROP POLICY IF EXISTS "contact_insert" ON public.contact_messages;
CREATE POLICY "contact_insert" ON public.contact_messages FOR INSERT
  WITH CHECK (
    char_length(coalesce(name, ''))    BETWEEN 1 AND 200
    AND char_length(coalesce(message, '')) BETWEEN 1 AND 5000
  );

-- specialty_tags: enable RLS if the table exists (public read, no client writes).
DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM information_schema.tables
             WHERE table_schema='public' AND table_name='specialty_tags') THEN
    EXECUTE 'ALTER TABLE public.specialty_tags ENABLE ROW LEVEL SECURITY';
    EXECUTE 'DROP POLICY IF EXISTS "specialty_tags_read_all" ON public.specialty_tags';
    EXECUTE 'CREATE POLICY "specialty_tags_read_all" ON public.specialty_tags FOR SELECT USING (true)';
  END IF;
END $$;

-- ── 5. FINAL pass: pin search_path on every function + lock down
--       EXECUTE on SECURITY DEFINER functions (re-assert 026, last word). ──
DO $$
DECLARE r RECORD;
BEGIN
  FOR r IN
    SELECT p.oid, p.proname, p.prosecdef,
           pg_get_function_identity_arguments(p.oid) AS args
    FROM pg_proc p
    WHERE p.pronamespace = 'public'::regnamespace AND p.prokind = 'f'
  LOOP
    EXECUTE format('ALTER FUNCTION public.%I(%s) SET search_path = public, pg_temp',
                   r.proname, r.args);
    IF r.prosecdef THEN
      EXECUTE format('REVOKE ALL ON FUNCTION public.%I(%s) FROM PUBLIC, anon, authenticated',
                     r.proname, r.args);
      EXECUTE format('GRANT EXECUTE ON FUNCTION public.%I(%s) TO service_role',
                     r.proname, r.args);
    END IF;
  END LOOP;
END $$;
