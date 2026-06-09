-- ================================================================
-- Migration 029: Listener application schema fixes
--
-- 1. Add admin_notes to listener_applications — allows storing
--    rejection reasons so the listener status page can display them.
-- 2. Extend status CHECK to include needs_resubmission.
-- ================================================================

-- ── 1. admin_notes column ────────────────────────────────────────
ALTER TABLE public.listener_applications
  ADD COLUMN IF NOT EXISTS admin_notes TEXT;

-- ── 2. Extend status constraint ──────────────────────────────────
-- Drop first (idempotent), then recreate with needs_resubmission.
ALTER TABLE public.listener_applications
  DROP CONSTRAINT IF EXISTS listener_applications_status_check;

ALTER TABLE public.listener_applications
  ADD CONSTRAINT listener_applications_status_check
  CHECK (status IN ('pending', 'approved', 'rejected', 'needs_resubmission'));
