-- ================================================================
-- Migration 009: Listener earnings tracking
-- ================================================================

CREATE TABLE IF NOT EXISTS public.listener_earnings (
  id           uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  listener_id  uuid NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  session_id   uuid REFERENCES public.sessions(id) ON DELETE SET NULL,
  gross_amount integer NOT NULL,
  platform_fee integer NOT NULL,
  net_amount   integer NOT NULL,
  status       text NOT NULL DEFAULT 'settled'
                 CHECK (status IN ('pending','settled','held','disputed')),
  settled_at   timestamptz NOT NULL DEFAULT now(),
  created_at   timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS listener_earnings_listener_idx
  ON public.listener_earnings(listener_id, created_at DESC);

CREATE INDEX IF NOT EXISTS listener_earnings_session_idx
  ON public.listener_earnings(session_id);

ALTER TABLE public.listener_earnings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "listener_own_earnings" ON public.listener_earnings
  FOR SELECT USING (auth.uid() = listener_id);

-- Add upi_id to payout_requests if not present
ALTER TABLE public.payout_requests
  ADD COLUMN IF NOT EXISTS upi_id text;

ALTER TABLE public.payout_requests
  ADD COLUMN IF NOT EXISTS admin_notes text;

ALTER TABLE public.payout_requests
  ADD COLUMN IF NOT EXISTS processed_at timestamptz;

ALTER TABLE public.payout_requests
  ADD COLUMN IF NOT EXISTS processed_by uuid REFERENCES public.users(id);
