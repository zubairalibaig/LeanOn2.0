-- ================================================================
-- Migration 031: CRITICAL — users INSERT policy + application
-- resubmission fix
--
-- 1. public.users has NO INSERT policy. Migration 019 made the
--    auth trigger skip phone-only users, delegating row creation to
--    the client-side upsert in app/auth/page.tsx — but with RLS
--    default-deny and no INSERT policy, that upsert can NEVER
--    insert. Every new phone signup ends up with no public.users
--    row: no name, no wallet, and listener registration fails with
--    an RLS violation. This adds the missing policy plus a BEFORE
--    INSERT guard so users can't self-grant privileged values.
--
-- 2. Migration 029's guard trigger froze listener_applications.status
--    on ALL non-service-role updates — contradicting its own comment
--    ("Listeners may reset to 'pending'"). A rejected applicant who
--    resubmits stays 'rejected' forever and never re-enters the
--    admin pending queue. This replaces the trigger to allow exactly
--    rejected/needs_resubmission → pending for the row owner.
-- ================================================================

-- ── 1a. users INSERT policy (own row only) ───────────────────────
DROP POLICY IF EXISTS "users_insert_own" ON public.users;
CREATE POLICY "users_insert_own"
  ON public.users FOR INSERT
  WITH CHECK (auth.uid() = id);

-- ── 1b. BEFORE INSERT guard — force privileged columns to safe
--        defaults for non-service-role inserts. Without this, a new
--        user could INSERT their own row with is_admin=true or an
--        arbitrary wallet_balance.
CREATE OR REPLACE FUNCTION public.guard_users_insert_cols()
RETURNS TRIGGER LANGUAGE plpgsql SECURITY DEFINER
SET search_path = public, pg_temp AS $$
BEGIN
  IF public.is_service_role() THEN
    RETURN NEW;
  END IF;

  NEW.is_admin       := FALSE;
  NEW.role           := 'seeker';
  NEW.wallet_balance := 0;
  NEW.is_suspended   := FALSE;
  NEW.is_active      := TRUE;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS users_guard_insert ON public.users;
CREATE TRIGGER users_guard_insert
  BEFORE INSERT ON public.users
  FOR EACH ROW EXECUTE FUNCTION public.guard_users_insert_cols();

-- ── 2. listener_applications: allow resubmission ─────────────────
-- Replaces 029's freeze-everything version. Owners may move their
-- own application from rejected/needs_resubmission back to pending;
-- every other status transition stays service-role only.
CREATE OR REPLACE FUNCTION public.guard_listener_app_status()
RETURNS TRIGGER LANGUAGE plpgsql SECURITY DEFINER
SET search_path = public, pg_temp AS $$
BEGIN
  -- Service role (admin APIs) may change anything.
  IF public.is_service_role() THEN
    RETURN NEW;
  END IF;

  -- Resubmission: rejected / needs_resubmission → pending is allowed.
  IF OLD.status IN ('rejected', 'needs_resubmission') AND NEW.status = 'pending' THEN
    NEW.admin_notes := OLD.admin_notes;  -- keep the rejection notes for history
    RETURN NEW;
  END IF;

  -- Everything else: freeze status + admin_notes.
  NEW.status      := OLD.status;
  NEW.admin_notes := OLD.admin_notes;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS la_guard_status ON public.listener_applications;
CREATE TRIGGER la_guard_status
  BEFORE UPDATE ON public.listener_applications
  FOR EACH ROW EXECUTE FUNCTION public.guard_listener_app_status();

-- ── VERIFY ───────────────────────────────────────────────────────
-- 1. INSERT policy exists:
--    SELECT policyname, cmd FROM pg_policies
--    WHERE tablename = 'users' AND cmd = 'INSERT';
-- 2. As a normal user, INSERT with is_admin=true is forced to false:
--    (sign up with a new phone, then)
--    SELECT is_admin, role, wallet_balance FROM users WHERE id = auth.uid();
-- 3. As a rejected applicant, resubmitting sets status back to 'pending':
--    SELECT status FROM listener_applications WHERE user_id = auth.uid();
