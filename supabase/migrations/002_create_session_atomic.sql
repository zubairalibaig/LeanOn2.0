-- ============================================================
-- Migration 002: Atomic session creation stored procedure
-- Run this in Supabase SQL Editor to replace application-level
-- session create + wallet deduction with a single atomic transaction.
--
-- This eliminates the TOCTOU race in app/api/sessions/route.ts.
-- After deploying this function, update the API to call:
--   sb.rpc('create_session', { ... })
-- ============================================================

CREATE OR REPLACE FUNCTION create_session(
  p_seeker_id        uuid,
  p_listener_id      uuid,
  p_session_type     text,
  p_duration_mins    int,
  p_amount_held      numeric,
  p_platform_fee     numeric,
  p_is_free_trial    boolean,
  p_agora_channel    text
)
RETURNS uuid
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_session_id uuid;
  v_balance    numeric;
BEGIN
  -- Lock the seeker row to prevent concurrent session creation
  SELECT wallet_balance INTO v_balance
    FROM users WHERE id = p_seeker_id FOR UPDATE;

  -- Check balance for paid sessions
  IF NOT p_is_free_trial AND v_balance < p_amount_held THEN
    RAISE EXCEPTION 'insufficient_balance' USING ERRCODE = 'P0001';
  END IF;

  -- Check for existing active session for this seeker
  IF EXISTS (
    SELECT 1 FROM sessions
    WHERE seeker_id = p_seeker_id AND status = 'active'
  ) THEN
    RAISE EXCEPTION 'already_in_session' USING ERRCODE = 'P0002';
  END IF;

  -- Check listener is not already in a paid session
  IF NOT p_is_free_trial AND EXISTS (
    SELECT 1 FROM sessions
    WHERE listener_id = p_listener_id
      AND status = 'active'
      AND is_free_trial = false
  ) THEN
    RAISE EXCEPTION 'listener_busy' USING ERRCODE = 'P0003';
  END IF;

  -- Insert session
  INSERT INTO sessions (
    seeker_id, listener_id, session_type, duration_mins,
    amount_held, platform_fee, is_free_trial, agora_channel,
    status, started_at
  ) VALUES (
    p_seeker_id, p_listener_id, p_session_type, p_duration_mins,
    p_amount_held, p_platform_fee, p_is_free_trial, p_agora_channel,
    'active', NOW()
  ) RETURNING id INTO v_session_id;

  -- Deduct wallet for paid sessions
  IF NOT p_is_free_trial THEN
    UPDATE users
      SET wallet_balance = wallet_balance - p_amount_held
      WHERE id = p_seeker_id AND wallet_balance >= p_amount_held;
    IF NOT FOUND THEN
      RAISE EXCEPTION 'insufficient_balance' USING ERRCODE = 'P0001';
    END IF;
  END IF;

  RETURN v_session_id;
END;
$$;

COMMENT ON FUNCTION create_session IS
  'Atomically creates a session and deducts the wallet in a single transaction. '
  'Replaces the multi-step application logic in /api/sessions POST.';
