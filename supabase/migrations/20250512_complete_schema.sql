-- ============================================================
--  LeanOn 2.0 — Complete Schema Migration
--  Run this in Supabase SQL Editor (top to bottom, once).
--  All statements use IF NOT EXISTS / IF EXISTS so it is
--  safe to re-run on an existing database.
-- ============================================================


-- ── 1. USERS ────────────────────────────────────────────────
-- Supabase creates auth.users automatically.
-- This mirrors it into public.users with extra fields.

CREATE TABLE IF NOT EXISTS public.users (
  id              UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  name            TEXT,
  phone           TEXT,
  email           TEXT,
  avatar_url      TEXT,
  wallet_balance  INTEGER NOT NULL DEFAULT 0,
  is_active       BOOLEAN NOT NULL DEFAULT TRUE,
  is_admin        BOOLEAN NOT NULL DEFAULT FALSE,
  created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Auto-create a public.users row whenever a new auth user signs up
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER LANGUAGE plpgsql SECURITY DEFINER AS $$
BEGIN
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

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();


-- ── 2. LISTENER PROFILES ────────────────────────────────────

CREATE TABLE IF NOT EXISTS public.listener_profiles (
  id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id           UUID NOT NULL UNIQUE REFERENCES public.users(id) ON DELETE CASCADE,
  bio               TEXT,
  specialty_tags    TEXT[]   NOT NULL DEFAULT '{}',
  languages_spoken  TEXT[]   NOT NULL DEFAULT '{"english"}',
  rate_per_min      INTEGER  NOT NULL DEFAULT 10,
  rating            NUMERIC(3,2) NOT NULL DEFAULT 0,
  total_sessions    INTEGER  NOT NULL DEFAULT 0,
  is_available      BOOLEAN  NOT NULL DEFAULT FALSE,
  is_approved       BOOLEAN  NOT NULL DEFAULT FALSE,
  is_active         BOOLEAN  NOT NULL DEFAULT TRUE,
  created_at        TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE public.listener_profiles
  ADD COLUMN IF NOT EXISTS languages_spoken TEXT[] NOT NULL DEFAULT '{"english"}',
  ADD COLUMN IF NOT EXISTS is_active         BOOLEAN NOT NULL DEFAULT TRUE;


-- ── 3. LISTENER APPLICATIONS ────────────────────────────────
-- Stores the KYC / payout details submitted at signup.

CREATE TABLE IF NOT EXISTS public.listener_applications (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id       UUID NOT NULL UNIQUE REFERENCES public.users(id) ON DELETE CASCADE,
  name          TEXT,
  phone         TEXT,
  aadhaar_last4 TEXT,
  bank_account  TEXT,
  ifsc_code     TEXT,
  status        TEXT NOT NULL DEFAULT 'pending'
                  CHECK (status IN ('pending','approved','rejected')),
  created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
);


-- ── 4. SESSIONS ─────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS public.sessions (
  id             UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  seeker_id      UUID NOT NULL REFERENCES public.users(id),
  listener_id    UUID NOT NULL REFERENCES public.users(id),
  session_type   TEXT NOT NULL DEFAULT 'text'
                   CHECK (session_type IN ('text','voice')),
  duration_mins  INTEGER NOT NULL,
  amount_held    INTEGER NOT NULL DEFAULT 0,
  platform_fee   INTEGER NOT NULL DEFAULT 0,
  is_free_trial  BOOLEAN NOT NULL DEFAULT FALSE,
  agora_channel  TEXT,
  status         TEXT NOT NULL DEFAULT 'active'
                   CHECK (status IN ('active','completed','cancelled')),
  seeker_rating  INTEGER CHECK (seeker_rating BETWEEN 1 AND 5),
  seeker_review  TEXT,
  started_at     TIMESTAMPTZ,
  ended_at       TIMESTAMPTZ,
  created_at     TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_sessions_listener_id  ON public.sessions(listener_id);
CREATE INDEX IF NOT EXISTS idx_sessions_seeker_id    ON public.sessions(seeker_id);
CREATE INDEX IF NOT EXISTS idx_sessions_status       ON public.sessions(status);
CREATE INDEX IF NOT EXISTS idx_sessions_listener_active
  ON public.sessions(listener_id, status) WHERE status = 'active';


-- ── 5. MESSAGES ─────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS public.messages (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id  UUID NOT NULL REFERENCES public.sessions(id) ON DELETE CASCADE,
  sender_id   UUID NOT NULL REFERENCES public.users(id),
  content     TEXT NOT NULL,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_messages_session_id ON public.messages(session_id);

-- Enable Realtime on messages (required for live chat delivery)
ALTER PUBLICATION supabase_realtime ADD TABLE public.messages;


-- ── 6. WALLET TRANSACTIONS ──────────────────────────────────

CREATE TABLE IF NOT EXISTS public.wallet_transactions (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id     UUID NOT NULL REFERENCES public.users(id),
  amount      INTEGER NOT NULL,   -- positive = credit, negative = debit
  type        TEXT NOT NULL CHECK (type IN ('credit','debit')),
  description TEXT,
  session_id  UUID REFERENCES public.sessions(id),
  reference_id TEXT,             -- Razorpay order/payment ID
  created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_wallet_txns_user_id ON public.wallet_transactions(user_id);


-- ── 7. PAYOUT REQUESTS ──────────────────────────────────────
-- Listener requests to withdraw their earnings.

CREATE TABLE IF NOT EXISTS public.payout_requests (
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id    UUID NOT NULL REFERENCES public.users(id),
  amount     INTEGER NOT NULL,
  status     TEXT NOT NULL DEFAULT 'pending'
               CHECK (status IN ('pending','completed','rejected')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);


-- ── 8. REFUND REQUESTS ──────────────────────────────────────
-- Seeker requests to refund their unused wallet balance.

CREATE TABLE IF NOT EXISTS public.refund_requests (
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id    UUID NOT NULL REFERENCES public.users(id),
  amount     INTEGER NOT NULL,
  reason     TEXT,
  status     TEXT NOT NULL DEFAULT 'pending'
               CHECK (status IN ('pending','completed','rejected')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);


-- ── 9. CONTACT MESSAGES ─────────────────────────────────────

CREATE TABLE IF NOT EXISTS public.contact_messages (
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name       TEXT,
  email      TEXT,
  type       TEXT,
  message    TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);


-- ── 10. RPC FUNCTIONS ───────────────────────────────────────
-- These run inside a transaction so concurrent requests can't
-- double-spend or double-credit.

-- credit_wallet: atomically adds amount to a user's balance
CREATE OR REPLACE FUNCTION public.credit_wallet(p_user_id UUID, p_amount INTEGER)
RETURNS VOID LANGUAGE plpgsql SECURITY DEFINER AS $$
BEGIN
  UPDATE public.users
  SET wallet_balance = wallet_balance + p_amount
  WHERE id = p_user_id;

  IF NOT FOUND THEN
    RAISE EXCEPTION 'User not found: %', p_user_id;
  END IF;
END;
$$;

-- deduct_wallet: atomically subtracts; raises if insufficient balance
CREATE OR REPLACE FUNCTION public.deduct_wallet(p_user_id UUID, p_amount INTEGER)
RETURNS VOID LANGUAGE plpgsql SECURITY DEFINER AS $$
DECLARE
  v_balance INTEGER;
BEGIN
  SELECT wallet_balance INTO v_balance
  FROM public.users
  WHERE id = p_user_id
  FOR UPDATE;  -- row-level lock prevents race condition

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


-- ── 11. ROW LEVEL SECURITY ──────────────────────────────────

ALTER TABLE public.users               ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.listener_profiles   ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.listener_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.sessions            ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.messages            ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.wallet_transactions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.payout_requests     ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.refund_requests     ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_messages    ENABLE ROW LEVEL SECURITY;

-- Drop existing policies before recreating (safe to re-run)
DO $$ BEGIN
  DROP POLICY IF EXISTS "users_select_own"    ON public.users;
  DROP POLICY IF EXISTS "users_update_own"    ON public.users;
  DROP POLICY IF EXISTS "lp_select_approved"  ON public.listener_profiles;
  DROP POLICY IF EXISTS "lp_insert_own"       ON public.listener_profiles;
  DROP POLICY IF EXISTS "lp_update_own"       ON public.listener_profiles;
  DROP POLICY IF EXISTS "la_own"              ON public.listener_applications;
  DROP POLICY IF EXISTS "sessions_own"        ON public.sessions;
  DROP POLICY IF EXISTS "sessions_insert"     ON public.sessions;
  DROP POLICY IF EXISTS "sessions_update_own" ON public.sessions;
  DROP POLICY IF EXISTS "messages_select"     ON public.messages;
  DROP POLICY IF EXISTS "messages_insert"     ON public.messages;
  DROP POLICY IF EXISTS "wallet_txns_own"     ON public.wallet_transactions;
  DROP POLICY IF EXISTS "payout_own"          ON public.payout_requests;
  DROP POLICY IF EXISTS "refund_own"          ON public.refund_requests;
  DROP POLICY IF EXISTS "contact_insert"      ON public.contact_messages;
END $$;

-- users: read own row; service role bypasses RLS for admin ops
CREATE POLICY "users_select_own"
  ON public.users FOR SELECT USING (auth.uid() = id);

CREATE POLICY "users_update_own"
  ON public.users FOR UPDATE USING (auth.uid() = id);

-- listener_profiles: anyone can read approved profiles; owner can write
CREATE POLICY "lp_select_approved"
  ON public.listener_profiles FOR SELECT
  USING (is_approved = TRUE OR auth.uid() = user_id);

CREATE POLICY "lp_insert_own"
  ON public.listener_profiles FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "lp_update_own"
  ON public.listener_profiles FOR UPDATE USING (auth.uid() = user_id);

-- listener_applications: owner only
CREATE POLICY "la_own"
  ON public.listener_applications FOR ALL USING (auth.uid() = user_id);

-- sessions: seeker and listener can see their own sessions
CREATE POLICY "sessions_own"
  ON public.sessions FOR SELECT
  USING (auth.uid() = seeker_id OR auth.uid() = listener_id);

CREATE POLICY "sessions_insert"
  ON public.sessions FOR INSERT WITH CHECK (auth.uid() = seeker_id);

CREATE POLICY "sessions_update_own"
  ON public.sessions FOR UPDATE
  USING (auth.uid() = seeker_id OR auth.uid() = listener_id);

-- messages: participants of the session can read/write
CREATE POLICY "messages_select"
  ON public.messages FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.sessions s
      WHERE s.id = session_id
        AND (s.seeker_id = auth.uid() OR s.listener_id = auth.uid())
    )
  );

CREATE POLICY "messages_insert"
  ON public.messages FOR INSERT
  WITH CHECK (
    auth.uid() = sender_id AND
    EXISTS (
      SELECT 1 FROM public.sessions s
      WHERE s.id = session_id
        AND (s.seeker_id = auth.uid() OR s.listener_id = auth.uid())
        AND s.status = 'active'
    )
  );

-- wallet_transactions: own only
CREATE POLICY "wallet_txns_own"
  ON public.wallet_transactions FOR SELECT USING (auth.uid() = user_id);

-- payout & refund requests: own only
CREATE POLICY "payout_own"
  ON public.payout_requests FOR ALL USING (auth.uid() = user_id);

CREATE POLICY "refund_own"
  ON public.refund_requests FOR ALL USING (auth.uid() = user_id);

-- contact_messages: anyone can insert; no one can read (admin uses service role)
CREATE POLICY "contact_insert"
  ON public.contact_messages FOR INSERT WITH CHECK (TRUE);


-- ── 12. FULL-TEXT / GIN INDEXES ─────────────────────────────

CREATE INDEX IF NOT EXISTS idx_lp_languages
  ON public.listener_profiles USING GIN (languages_spoken);

CREATE INDEX IF NOT EXISTS idx_lp_tags
  ON public.listener_profiles USING GIN (specialty_tags);

CREATE INDEX IF NOT EXISTS idx_lp_approved
  ON public.listener_profiles (is_approved, is_available, rating DESC);


-- ── Done ─────────────────────────────────────────────────────
-- After running this migration:
--   1. Create a public Storage bucket called "avatars" (see manual steps)
--   2. Enable Realtime on the messages table (see manual steps)
--   3. Set all required env vars in Vercel (see manual steps)
