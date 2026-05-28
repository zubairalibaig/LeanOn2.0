-- ================================================================
-- Migration 004: Trust & Safety — user blocks + content flags
-- Run in Supabase Dashboard → SQL Editor
-- ================================================================

-- User blocking table
CREATE TABLE IF NOT EXISTS public.user_blocks (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  blocker_id  UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  blocked_id  UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (blocker_id, blocked_id),
  CHECK (blocker_id <> blocked_id)
);

CREATE INDEX IF NOT EXISTS user_blocks_blocker_idx ON public.user_blocks(blocker_id);
CREATE INDEX IF NOT EXISTS user_blocks_blocked_idx ON public.user_blocks(blocked_id);

ALTER TABLE public.user_blocks ENABLE ROW LEVEL SECURITY;

CREATE POLICY "users_select_own_blocks" ON public.user_blocks
  FOR SELECT USING (blocker_id = auth.uid());

CREATE POLICY "users_insert_own_blocks" ON public.user_blocks
  FOR INSERT WITH CHECK (blocker_id = auth.uid());

CREATE POLICY "users_delete_own_blocks" ON public.user_blocks
  FOR DELETE USING (blocker_id = auth.uid());

-- Content flags table (extends existing report_requests if it exists)
CREATE TABLE IF NOT EXISTS public.content_flags (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  reporter_id     UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  target_user_id  UUID REFERENCES public.users(id) ON DELETE SET NULL,
  session_id      UUID REFERENCES public.sessions(id) ON DELETE SET NULL,
  reason          TEXT NOT NULL CHECK (reason IN ('harassment','spam','inappropriate','self_harm','other')),
  details         TEXT CHECK (char_length(details) <= 1000),
  status          TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending','reviewed','resolved','dismissed')),
  resolved_by     UUID REFERENCES public.users(id) ON DELETE SET NULL,
  created_at      TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at      TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS content_flags_reporter_idx    ON public.content_flags(reporter_id);
CREATE INDEX IF NOT EXISTS content_flags_status_idx      ON public.content_flags(status);
CREATE INDEX IF NOT EXISTS content_flags_target_idx      ON public.content_flags(target_user_id);

ALTER TABLE public.content_flags ENABLE ROW LEVEL SECURITY;

CREATE POLICY "users_insert_content_flags" ON public.content_flags
  FOR INSERT WITH CHECK (reporter_id = auth.uid());

CREATE POLICY "users_select_own_flags" ON public.content_flags
  FOR SELECT USING (reporter_id = auth.uid());
-- Admins read all via service role (no policy needed for service role)
