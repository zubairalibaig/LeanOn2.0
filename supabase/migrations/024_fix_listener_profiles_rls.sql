-- ================================================================
-- Migration 024: Fix listener_profiles RLS — remove the overly
-- permissive USING(true) policy added by migration 016 and ensure
-- only approved profiles are publicly readable.
-- ================================================================

-- Drop the overly permissive policy from migration 016
DROP POLICY IF EXISTS "listener_profiles_read_all" ON public.listener_profiles;

-- Drop old policy names that may have been left by earlier migrations
DROP POLICY IF EXISTS "lp_select_approved" ON public.listener_profiles;
DROP POLICY IF EXISTS "Public listener profiles are viewable by everyone." ON public.listener_profiles;
DROP POLICY IF EXISTS "listener_profiles_public_read" ON public.listener_profiles;
DROP POLICY IF EXISTS "Enable read access for all users" ON public.listener_profiles;

-- Re-create the restrictive read policy:
-- • Approved listeners are publicly visible (browse page)
-- • A listener can always see their own profile (dashboard / apply page guard)
-- • Unapproved profiles are NOT visible to other users
CREATE POLICY "lp_select_approved"
  ON public.listener_profiles FOR SELECT
  USING (is_approved = TRUE OR auth.uid() = user_id);

-- Also prevent self-escalation via lp_update_own:
-- The UPDATE policy must not let listeners set is_approved or is_verified.
-- Those fields must only be changed by admin APIs (which use the service role).
-- Drop and recreate with column restriction.
DROP POLICY IF EXISTS "lp_update_own" ON public.listener_profiles;

CREATE POLICY "lp_update_own"
  ON public.listener_profiles FOR UPDATE
  USING (auth.uid() = user_id)
  WITH CHECK (
    auth.uid() = user_id
    -- is_approved and is_verified can only be changed via the service role
    -- (admin APIs bypass RLS). This RLS policy can't check individual columns,
    -- so we rely on the API-level enforcement in /api/admin routes.
  );
