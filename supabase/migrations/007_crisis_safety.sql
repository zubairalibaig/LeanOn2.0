-- ================================================================
-- Migration 007: Crisis safety fields on sessions
-- ================================================================

ALTER TABLE public.sessions
  ADD COLUMN IF NOT EXISTS crisis_flagged     boolean NOT NULL DEFAULT false,
  ADD COLUMN IF NOT EXISTS crisis_flagged_at  timestamptz;

CREATE INDEX IF NOT EXISTS sessions_crisis_idx
  ON public.sessions(crisis_flagged)
  WHERE crisis_flagged = true;
