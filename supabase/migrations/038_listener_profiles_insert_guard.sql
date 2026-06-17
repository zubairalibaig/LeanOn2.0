-- 038_listener_profiles_insert_guard.sql
--
-- 🔴 CRITICAL SECURITY FIX — listener approval bypass.
--
-- THE BUG: listener_profiles has a BEFORE UPDATE guard (lp_guard_privileged →
-- guard_lp_privileged_cols) that resets is_approved/is_verified/is_suspended/
-- rating/total_sessions to their old values for non-service-role callers. But
-- there is NO equivalent BEFORE INSERT guard, and the RLS INSERT policy
-- `lp_insert_own` only checks `auth.uid() = user_id` with no column restriction.
--
-- THE EXPLOIT: any authenticated user WITHOUT an existing listener_profiles row
-- can INSERT one directly from the browser client:
--
--   supabase.from('listener_profiles').insert({
--     user_id: <self>, is_approved: true, is_active: true, is_suspended: false,
--     is_verified: true, bio: '...', rate_per_min: 50, specialty_tags: ['anxiety'],
--     languages_spoken: ['english']
--   })
--
-- The RLS check passes (user_id = auth.uid()), no trigger resets the flags, and
-- /api/listeners (which filters only on is_approved AND is_active AND NOT
-- is_suspended) immediately surfaces them as an APPROVED, VERIFIED listener —
-- with zero admin review and no listener_applications row. They can then accept
-- paying seekers.
--
-- THE FIX: a BEFORE INSERT trigger that forces the privileged columns to safe
-- defaults for everyone except the service role (the apply/approve API routes).
-- Mirrors guard_lp_privileged_cols() and the users_guard_insert pattern.
--
-- ⚠️ MANUAL: owner runs this in the Supabase SQL Editor, then refreshes
-- db/LIVE_SCHEMA.md.

CREATE OR REPLACE FUNCTION public.guard_lp_insert_cols()
RETURNS TRIGGER LANGUAGE plpgsql SECURITY DEFINER
SET search_path = public, pg_temp AS $$
BEGIN
  -- Service-role (apply/approve server routes) may set anything.
  IF public.is_service_role() THEN
    RETURN NEW;
  END IF;

  -- A browser/anon caller may create their own listener_profiles row, but must
  -- NOT be able to self-approve, self-verify, self-unsuspend, or inflate their
  -- rating / session count. Force these to the table defaults.
  NEW.is_approved    := false;
  NEW.is_verified    := false;
  NEW.is_suspended   := false;
  NEW.rating         := 0;
  NEW.total_sessions := 0;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS lp_guard_insert ON public.listener_profiles;
CREATE TRIGGER lp_guard_insert
  BEFORE INSERT ON public.listener_profiles
  FOR EACH ROW EXECUTE FUNCTION public.guard_lp_insert_cols();
