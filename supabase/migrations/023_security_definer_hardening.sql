-- ================================================================
-- Migration 023: Harden SECURITY DEFINER functions against
-- search_path injection attacks.
-- Per Supabase security advisory: SECURITY DEFINER functions
-- without SET search_path are exploitable via a malicious schema.
-- ================================================================

-- credit_wallet: add search_path hardening
CREATE OR REPLACE FUNCTION public.credit_wallet(p_user_id UUID, p_amount INTEGER)
RETURNS VOID LANGUAGE plpgsql SECURITY DEFINER
SET search_path = public, pg_temp AS $$
BEGIN
  UPDATE public.users
  SET wallet_balance = wallet_balance + p_amount
  WHERE id = p_user_id;

  IF NOT FOUND THEN
    RAISE EXCEPTION 'User not found: %', p_user_id;
  END IF;
END;
$$;

-- deduct_wallet: add search_path hardening
CREATE OR REPLACE FUNCTION public.deduct_wallet(p_user_id UUID, p_amount INTEGER)
RETURNS VOID LANGUAGE plpgsql SECURITY DEFINER
SET search_path = public, pg_temp AS $$
DECLARE
  v_balance INTEGER;
BEGIN
  SELECT wallet_balance INTO v_balance
  FROM public.users
  WHERE id = p_user_id
  FOR UPDATE;

  IF v_balance IS NULL THEN
    RAISE EXCEPTION 'User not found: %', p_user_id;
  END IF;

  IF v_balance < p_amount THEN
    RAISE EXCEPTION 'insufficient_balance: has %, needs %', v_balance, p_amount;
  END IF;

  UPDATE public.users
  SET wallet_balance = wallet_balance - p_amount
  WHERE id = p_user_id;
END;
$$;

-- handle_new_user trigger: add search_path hardening
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER LANGUAGE plpgsql SECURITY DEFINER
SET search_path = public, pg_temp AS $$
BEGIN
  -- Phone-only users (email IS NULL): skip here.
  -- They are created by the auth page upsert AFTER OTP verification.
  IF NEW.email IS NULL THEN
    RETURN NEW;
  END IF;

  INSERT INTO public.users (id, email, phone, name)
  VALUES (
    NEW.id,
    NEW.email,
    NEW.phone,
    COALESCE(NEW.raw_user_meta_data->>'name', '')
  )
  ON CONFLICT (id) DO NOTHING;

  RETURN NEW;
END;
$$;

-- set_updated_at trigger: add search_path hardening
CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS TRIGGER LANGUAGE plpgsql SECURITY DEFINER
SET search_path = public, pg_temp AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$;

-- updateListenerRating (if it exists as a PG function) — find and patch
-- The rating update may be done in application code rather than SQL.
-- If create_session_rpc exists, harden it too.
DO $$
DECLARE
  r RECORD;
BEGIN
  FOR r IN
    SELECT proname
    FROM pg_proc
    WHERE pronamespace = 'public'::regnamespace
      AND prosecdef = true   -- SECURITY DEFINER
      AND proname NOT IN ('credit_wallet','deduct_wallet','handle_new_user','set_updated_at')
  LOOP
    RAISE NOTICE 'Un-hardened SECURITY DEFINER function found: %.  Add SET search_path = public, pg_temp manually.', r.proname;
  END LOOP;
END;
$$;
