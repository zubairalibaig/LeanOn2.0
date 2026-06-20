-- 043: Session request → accept/decline flow
-- After running this migration:
--   create_session inserts as 'pending' (wallet held immediately = soft hold)
--   accept_session flips pending → active (sets started_at)
--   decline / 5-min timeout → cancelled + seeker refunded (handled in API + cleanup cron)
--
-- IMPORTANT: run this in the Supabase SQL Editor, then refresh db/LIVE_SCHEMA.md.

-- ── Discriminator + index ──────────────────────────────────────────────
-- cancel_reason distinguishes declined / timed_out / seeker_cancelled for the
-- listener's "missed requests" list and the seeker's messaging. Nullable, safe.
ALTER TABLE sessions ADD COLUMN IF NOT EXISTS cancel_reason text;
ALTER TABLE sessions ADD COLUMN IF NOT EXISTS responded_at  timestamptz;

-- Fast lookup of a listener's incoming pending requests
CREATE INDEX IF NOT EXISTS idx_sessions_listener_pending
  ON sessions (listener_id, created_at DESC) WHERE status = 'pending';

-- ── create_session: now inserts a PENDING request and holds the wallet ──
-- Checks updated so BOTH 'active' AND 'pending' block a new booking — a seeker
-- can't stack multiple outstanding requests (which would hold their wallet
-- several times), and a listener can't be sent two paid requests at once.
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
SET search_path = public, pg_temp
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

  -- Block seeker from having two concurrent sessions (active OR pending)
  IF EXISTS (
    SELECT 1 FROM sessions
    WHERE seeker_id = p_seeker_id AND status IN ('active', 'pending')
  ) THEN
    RAISE EXCEPTION 'already_in_session' USING ERRCODE = 'P0002';
  END IF;

  -- Block listener from receiving two paid requests simultaneously
  IF NOT p_is_free_trial AND EXISTS (
    SELECT 1 FROM sessions
    WHERE listener_id = p_listener_id
      AND status IN ('active', 'pending')
      AND is_free_trial = false
  ) THEN
    RAISE EXCEPTION 'listener_busy' USING ERRCODE = 'P0003';
  END IF;

  -- Insert session as PENDING (funds held; listener must accept). started_at
  -- stays NULL until acceptance so the timer doesn't run while waiting.
  INSERT INTO sessions (
    seeker_id, listener_id, session_type, duration_mins,
    amount_held, platform_fee, is_free_trial, agora_channel,
    status, started_at
  ) VALUES (
    p_seeker_id, p_listener_id, p_session_type, p_duration_mins,
    p_amount_held, p_platform_fee, p_is_free_trial, p_agora_channel,
    'pending', NULL
  ) RETURNING id INTO v_session_id;

  -- Hold the wallet immediately for paid sessions. Refunded in full if the
  -- listener declines or the 5-minute window lapses.
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

-- ── accept_session: listener accepts a pending request ─────────────────
-- Atomic pending → active transition. The partial unique indexes
-- (sessions_listener_one_active / sessions_seeker_one_active) still guard
-- against a listener/seeker ending up in two active sessions at once.
CREATE OR REPLACE FUNCTION accept_session(
  p_session_id  uuid,
  p_listener_id uuid
)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
BEGIN
  UPDATE sessions
    SET status = 'active', started_at = NOW(), responded_at = NOW()
    WHERE id = p_session_id
      AND listener_id = p_listener_id
      AND status = 'pending';

  IF NOT FOUND THEN
    RAISE EXCEPTION 'session_not_found_or_already_handled' USING ERRCODE = 'P0004';
  END IF;
END;
$$;

COMMENT ON FUNCTION create_session IS
  'Creates a session as pending and holds the wallet amount. '
  'Listener must accept via accept_session to make it active.';

COMMENT ON FUNCTION accept_session IS
  'Atomically transitions a pending session to active and records started_at.';
