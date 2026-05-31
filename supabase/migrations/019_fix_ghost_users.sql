-- ================================================================
-- Migration 019: Fix ghost users — only create public.users row
-- AFTER OTP verification, not at OTP send time
-- ================================================================

-- ── ROOT CAUSE ────────────────────────────────────────────────────
-- Supabase creates auth.users on signInWithOtp() for NEW phone numbers
-- (before OTP verification). The existing trigger immediately copies
-- that unverified row to public.users, creating ghost accounts for
-- anyone who enters a phone number — even without completing OTP.
--
-- Fix: Skip phone-only users in the INSERT trigger.
-- Phone users are created in public.users by the client-side upsert
-- in app/auth/page.tsx immediately after verifyOtp() succeeds.
-- Email/social auth users still use the trigger (unchanged behavior).

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER LANGUAGE plpgsql SECURITY DEFINER AS $$
BEGIN
  -- Phone-only users (email IS NULL): skip here.
  -- They are created by the auth page upsert AFTER OTP verification.
  -- This prevents ghost rows for every unverified OTP send.
  IF NEW.email IS NULL THEN
    RETURN NEW;
  END IF;

  -- Email / social auth users: create public row immediately.
  INSERT INTO public.users (id, email, phone, name)
  VALUES (
    NEW.id,
    NEW.email,
    NEW.phone,
    COALESCE(NEW.raw_user_meta_data->>'name', '')
  )
  ON CONFLICT (id) DO NOTHING;

  RETURN NEW;
END;
$$;


-- ── CLEAN UP EXISTING GHOST USERS ────────────────────────────────
-- Remove rows with no name, no wallet balance, no sessions,
-- no wallet transactions, and no listener profile.
-- These are safely deletable — they were never real users.
DELETE FROM public.users
WHERE (name IS NULL OR name = '')
  AND wallet_balance = 0
  AND NOT EXISTS (
    SELECT 1 FROM public.sessions
    WHERE seeker_id = public.users.id OR listener_id = public.users.id
  )
  AND NOT EXISTS (
    SELECT 1 FROM public.wallet_transactions
    WHERE user_id = public.users.id
  )
  AND NOT EXISTS (
    SELECT 1 FROM public.listener_profiles
    WHERE user_id = public.users.id
  );


-- ── VERIFY ───────────────────────────────────────────────────────
-- After running, confirm only real users remain:
-- SELECT id, name, phone, email, created_at
-- FROM public.users
-- ORDER BY created_at DESC;
--
-- To confirm trigger was updated:
-- SELECT prosrc FROM pg_proc WHERE proname = 'handle_new_user';
