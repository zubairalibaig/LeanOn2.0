-- ================================================================
-- Migration 008: Listener identity verification
-- ================================================================

CREATE TABLE IF NOT EXISTS public.listener_verifications (
  id              uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  listener_id     uuid NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  full_name       text NOT NULL,
  id_type         text NOT NULL CHECK (id_type IN ('aadhaar','pan','passport','voter_id','driving_license')),
  id_number_hash  text NOT NULL,
  selfie_url      text,
  id_doc_url      text,
  status          text NOT NULL DEFAULT 'pending'
                    CHECK (status IN ('pending','approved','rejected','needs_resubmission')),
  admin_notes     text,
  submitted_at    timestamptz NOT NULL DEFAULT now(),
  reviewed_at     timestamptz,
  reviewed_by     uuid REFERENCES public.users(id),
  UNIQUE(listener_id)
);

CREATE INDEX IF NOT EXISTS listener_verifications_status_idx
  ON public.listener_verifications(status);

ALTER TABLE public.listener_verifications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "listener_own_verification_select" ON public.listener_verifications
  FOR SELECT USING (auth.uid() = listener_id);

CREATE POLICY "listener_own_verification_insert" ON public.listener_verifications
  FOR INSERT WITH CHECK (auth.uid() = listener_id);

CREATE POLICY "listener_own_verification_update" ON public.listener_verifications
  FOR UPDATE USING (auth.uid() = listener_id)
  WITH CHECK (auth.uid() = listener_id);

-- is_verified column on listener_profiles
ALTER TABLE public.listener_profiles
  ADD COLUMN IF NOT EXISTS is_verified boolean NOT NULL DEFAULT false;

-- reports table — used by /api/report
CREATE TABLE IF NOT EXISTS public.reports (
  id               uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  reporter_id      uuid NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  reported_user_id uuid REFERENCES public.users(id) ON DELETE SET NULL,
  session_id       uuid REFERENCES public.sessions(id) ON DELETE SET NULL,
  type             text NOT NULL,
  description      text NOT NULL,
  status           text NOT NULL DEFAULT 'pending'
                     CHECK (status IN ('pending','reviewed','resolved','dismissed')),
  admin_notes      text,
  resolved_by      uuid REFERENCES public.users(id) ON DELETE SET NULL,
  created_at       timestamptz NOT NULL DEFAULT now(),
  updated_at       timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS reports_status_idx    ON public.reports(status);
CREATE INDEX IF NOT EXISTS reports_reporter_idx  ON public.reports(reporter_id);

ALTER TABLE public.reports ENABLE ROW LEVEL SECURITY;

CREATE POLICY "users_insert_reports" ON public.reports
  FOR INSERT WITH CHECK (reporter_id = auth.uid());

CREATE POLICY "users_select_own_reports" ON public.reports
  FOR SELECT USING (reporter_id = auth.uid());
