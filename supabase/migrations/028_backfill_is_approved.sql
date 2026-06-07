-- Migration 028: Backfill is_approved for pre-existing active listeners
--
-- The availability API now guards on is_approved before allowing a listener
-- to toggle availability. is_approved defaults to FALSE, so any listener whose
-- profile was created before the admin approval flow was enforced has
-- is_approved=false and is silently blocked from going available.
--
-- Backfill: any profile that is currently is_active=true was already approved
-- and live on the platform — set is_approved=true for all of them.
-- New applicants must still go through the admin flow (is_active starts false).

UPDATE public.listener_profiles
  SET is_approved = true
  WHERE is_active = true
    AND is_approved = false;
