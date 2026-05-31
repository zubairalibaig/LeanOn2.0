-- ================================================================
-- Migration 014: Schema reconciliation for existing databases
-- The 20250512_complete_schema.sql uses CREATE TABLE IF NOT EXISTS,
-- which silently skips when tables already exist — leaving columns
-- added in that migration missing from older databases.
-- Run ALL statements here in Supabase SQL Editor.
-- ================================================================

-- ── public.users missing columns ─────────────────────────────────
ALTER TABLE public.users ADD COLUMN IF NOT EXISTS email        TEXT;
ALTER TABLE public.users ADD COLUMN IF NOT EXISTS avatar_url   TEXT;
ALTER TABLE public.users ADD COLUMN IF NOT EXISTS is_admin     BOOLEAN NOT NULL DEFAULT FALSE;
ALTER TABLE public.users ADD COLUMN IF NOT EXISTS is_suspended BOOLEAN NOT NULL DEFAULT FALSE;
ALTER TABLE public.users ADD COLUMN IF NOT EXISTS updated_at   TIMESTAMPTZ;

-- ── listener_profiles missing columns ────────────────────────────
ALTER TABLE public.listener_profiles ADD COLUMN IF NOT EXISTS languages_spoken TEXT[]  NOT NULL DEFAULT '{"english"}';
ALTER TABLE public.listener_profiles ADD COLUMN IF NOT EXISTS is_active         BOOLEAN NOT NULL DEFAULT TRUE;
ALTER TABLE public.listener_profiles ADD COLUMN IF NOT EXISTS is_verified       BOOLEAN NOT NULL DEFAULT FALSE;
ALTER TABLE public.listener_profiles ADD COLUMN IF NOT EXISTS topics            TEXT[]  NOT NULL DEFAULT '{}';
ALTER TABLE public.listener_profiles ADD COLUMN IF NOT EXISTS rating            NUMERIC(3,2) NOT NULL DEFAULT 0;
ALTER TABLE public.listener_profiles ADD COLUMN IF NOT EXISTS total_sessions    INTEGER NOT NULL DEFAULT 0;

-- ── sessions missing columns ──────────────────────────────────────
ALTER TABLE public.sessions ADD COLUMN IF NOT EXISTS crisis_flagged    BOOLEAN    DEFAULT FALSE;
ALTER TABLE public.sessions ADD COLUMN IF NOT EXISTS crisis_flagged_at TIMESTAMPTZ;
ALTER TABLE public.sessions ADD COLUMN IF NOT EXISTS seeker_rating     NUMERIC(3,2);
ALTER TABLE public.sessions ADD COLUMN IF NOT EXISTS platform_fee      INTEGER    NOT NULL DEFAULT 0;

-- ── Indexes ───────────────────────────────────────────────────────
CREATE INDEX IF NOT EXISTS users_is_admin_idx
  ON public.users(is_admin) WHERE is_admin = TRUE;

CREATE UNIQUE INDEX IF NOT EXISTS wallet_txn_payment_id_unique
  ON public.wallet_transactions(reference_id)
  WHERE reference_id IS NOT NULL;

CREATE INDEX IF NOT EXISTS sessions_listener_status_idx
  ON public.sessions(listener_id, status)
  WHERE status IN ('pending', 'active');

CREATE INDEX IF NOT EXISTS sessions_seeker_status_idx
  ON public.sessions(seeker_id, status)
  WHERE status IN ('pending', 'active');

-- ── Fix amount_held constraint (free trials have amount_held = 0) ─
ALTER TABLE public.sessions DROP CONSTRAINT IF EXISTS sessions_amount_held_positive;
ALTER TABLE public.sessions DROP CONSTRAINT IF EXISTS sessions_amount_held_non_negative;
ALTER TABLE public.sessions
  ADD CONSTRAINT sessions_amount_held_non_negative CHECK (amount_held >= 0);

-- ── Sync email/phone from auth.users into public.users ───────────
-- Fills email column for users who signed up before it was added.
UPDATE public.users pu
SET
  email = au.email,
  phone = COALESCE(pu.phone, au.phone)
FROM auth.users au
WHERE pu.id = au.id
  AND (pu.email IS NULL OR pu.phone IS NULL);

-- ── After running this, grant yourself admin: ─────────────────────
-- 1. Find your UUID:
--    SELECT id, name, phone FROM public.users ORDER BY created_at LIMIT 20;
-- 2. Set is_admin:
--    UPDATE public.users SET is_admin = true WHERE id = '<your-uuid>';
