-- ================================================================
-- Migration 029: Listener application schema fixes
--
-- 1. Add admin_notes to listener_applications — stores rejection
--    reasons so the listener status page can display them.
-- 2. Extend status CHECK to include needs_resubmission.
-- 3. Guard trigger — prevent non-service-role from changing status
--    to 'approved' (only admins via service-role key may approve).
-- ================================================================

-- ── 1. admin_notes column ────────────────────────────────────────
ALTER TABLE public.listener_applications
  ADD COLUMN IF NOT EXISTS admin_notes TEXT;

-- ── 2. Extend status constraint ──────────────────────────────────
ALTER TABLE public.listener_applications
  DROP CONSTRAINT IF EXISTS listener_applications_status_check;

ALTER TABLE public.listener_applications
  ADD CONSTRAINT listener_applications_status_check
  CHECK (status IN ('pending', 'approved', 'rejected', 'needs_resubmission'));

-- ── 3. Guard trigger on listener_applications.status ─────────────
-- Prevents an authenticated user from self-approving their own
-- application. Only the service role (admin API) may set status to
-- 'approved'. Listeners may reset to 'pending' (resubmission) but
-- not to 'approved' or 'rejected'.
CREATE OR REPLACE FUNCTION public.guard_listener_app_status()
RETURNS TRIGGER LANGUAGE plpgsql SECURITY DEFINER
SET search_path = public, pg_temp AS $$
BEGIN
  -- Service role (admin APIs) may change anything.
  IF public.is_service_role() THEN
    RETURN NEW;
  END IF;

  -- Normal users may not change status at all via UPDATE —
  -- the form uses upsert but omits status, so only INSERTs
  -- hit the DEFAULT. If somehow an UPDATE reaches here, freeze status.
  NEW.status      := OLD.status;
  NEW.admin_notes := OLD.admin_notes;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS la_guard_status ON public.listener_applications;
CREATE TRIGGER la_guard_status
  BEFORE UPDATE ON public.listener_applications
  FOR EACH ROW EXECUTE FUNCTION public.guard_listener_app_status();
