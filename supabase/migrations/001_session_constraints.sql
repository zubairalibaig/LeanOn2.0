-- ============================================================
-- Migration 001: Session integrity constraints
-- Run this in Supabase SQL Editor (Dashboard → SQL Editor)
-- ============================================================

-- Prevent double-booking: a listener can only have one active paid session at a time.
-- This DB-level unique partial index makes the constraint atomic — application-level
-- checks alone are vulnerable to TOCTOU races under concurrent requests.
CREATE UNIQUE INDEX IF NOT EXISTS sessions_listener_one_active
  ON sessions (listener_id)
  WHERE status = 'active' AND is_free_trial = false;

-- Upgrade deduct_wallet to raise on insufficient funds so the application
-- can detect the failure and roll back the session.
CREATE OR REPLACE FUNCTION deduct_wallet(p_user_id uuid, p_amount numeric)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  UPDATE users
    SET wallet_balance = wallet_balance - p_amount
    WHERE id = p_user_id AND wallet_balance >= p_amount;
  IF NOT FOUND THEN
    RAISE EXCEPTION 'insufficient_balance'
      USING DETAIL = 'Wallet balance too low for requested deduction',
            ERRCODE = 'P0001';
  END IF;
END;
$$;

-- Upgrade credit_wallet similarly for safety
CREATE OR REPLACE FUNCTION credit_wallet(p_user_id uuid, p_amount numeric)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  IF p_amount <= 0 THEN
    RAISE EXCEPTION 'invalid_amount' USING ERRCODE = 'P0001';
  END IF;
  UPDATE users
    SET wallet_balance = wallet_balance + p_amount
    WHERE id = p_user_id;
  IF NOT FOUND THEN
    RAISE EXCEPTION 'user_not_found' USING ERRCODE = 'P0001';
  END IF;
END;
$$;

-- Partial index so seeker can only have one active session at a time
-- (optional but prevents UI confusion)
CREATE UNIQUE INDEX IF NOT EXISTS sessions_seeker_one_active
  ON sessions (seeker_id)
  WHERE status = 'active';
