-- 068_suspension_lockdown.sql
--
-- Suspended and banned users (account-level OR listener-only) must not be able
-- to log in, keep an existing login, or change anything about their profile.
--
-- THE BUGS this fixes (found 2026-10-13, suspended listener uploaded a new
-- profile photo and posted in the Listener Lounge):
--
--   1. The admin Suspend/Ban actions called auth.admin.signOut(userId), but that
--      API takes a JWT, not a user id — it always failed silently. A suspended
--      user's existing login (refresh token) kept working forever.
--   2. RLS policy listener_profiles_own_write (FOR ALL) + the update guard only
--      froze is_approved/is_verified/is_suspended/rating/total_sessions. Any
--      listener — suspended or not — could change every other column of their
--      own row straight from the browser (is_active, pending_avatar_url,
--      rate_per_min, …) and could even DELETE their row (wiping the suspension).
--      No app code writes listener_profiles from the browser; every write goes
--      through a server route using the service role.
--   3. A suspended user could still change users.avatar_url / name from the
--      browser, and any user could set users.avatar_url directly (skipping the
--      admin photo review).
--
-- THE FIX:
--   A. sync_auth_ban(): whenever users.is_suspended or listener_profiles.is_suspended
--      changes, set auth.users.banned_until (Supabase refuses sign-in and token
--      refresh for a banned user) and delete the user's auth sessions (kills
--      every live login immediately). Lifting both flags lifts the ban.
--      Runs from triggers, so it covers admin buttons AND manual SQL.
--   B. End-user tokens (role authenticated/anon) can no longer UPDATE
--      listener_profiles at all, nor DELETE it. Server routes (service role)
--      and the SQL Editor are unaffected.
--   C. End-user tokens cannot change users.avatar_url, and a suspended user
--      cannot change their users row at all.
--   D. Lounge RLS also checks the account-level suspension.
--   E. Backfill: ban + log out everyone who is suspended right now.
--
-- ⚠️ MANUAL: owner runs this in the Supabase SQL Editor.

-- ── helpers ────────────────────────────────────────────────────────────────
CREATE OR REPLACE FUNCTION public.is_end_user_request()
RETURNS BOOLEAN LANGUAGE sql STABLE
SET search_path = public, pg_temp AS $$
  -- true for requests made with a signed-in user's (or anon) token via the
  -- API; false for the service role and for the SQL Editor (no JWT at all).
  SELECT COALESCE(
    current_setting('request.jwt.claim.role', true),
    (NULLIF(current_setting('request.jwt.claims', true), '')::jsonb ->> 'role'),
    ''
  ) IN ('authenticated', 'anon');
$$;

CREATE OR REPLACE FUNCTION public.sync_auth_ban(p_user_id uuid)
RETURNS void LANGUAGE plpgsql SECURITY DEFINER
SET search_path = public, pg_temp AS $$
DECLARE
  v_suspended boolean;
BEGIN
  SELECT COALESCE((SELECT u.is_suspended FROM public.users u WHERE u.id = p_user_id), false)
      OR COALESCE((SELECT lp.is_suspended FROM public.listener_profiles lp WHERE lp.user_id = p_user_id), false)
    INTO v_suspended;

  IF v_suspended THEN
    UPDATE auth.users SET banned_until = now() + interval '100 years' WHERE id = p_user_id;
    -- Deleting the sessions also removes their refresh tokens (FK cascade);
    -- the user's next request fails auth and they land on /auth.
    DELETE FROM auth.sessions WHERE user_id = p_user_id;
  ELSE
    UPDATE auth.users SET banned_until = NULL
     WHERE id = p_user_id AND banned_until IS NOT NULL;
  END IF;
END;
$$;

REVOKE ALL ON FUNCTION public.sync_auth_ban(uuid) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.sync_auth_ban(uuid) TO service_role;

-- ── A. triggers: suspension flag change → auth ban/unban ──────────────────
CREATE OR REPLACE FUNCTION public.trg_users_sync_auth_ban()
RETURNS TRIGGER LANGUAGE plpgsql SECURITY DEFINER
SET search_path = public, pg_temp AS $$
BEGIN
  PERFORM public.sync_auth_ban(NEW.id);
  RETURN NULL;
END;
$$;

DROP TRIGGER IF EXISTS users_sync_auth_ban ON public.users;
CREATE TRIGGER users_sync_auth_ban
  AFTER UPDATE OF is_suspended ON public.users
  FOR EACH ROW WHEN (OLD.is_suspended IS DISTINCT FROM NEW.is_suspended)
  EXECUTE FUNCTION public.trg_users_sync_auth_ban();

CREATE OR REPLACE FUNCTION public.trg_lp_sync_auth_ban()
RETURNS TRIGGER LANGUAGE plpgsql SECURITY DEFINER
SET search_path = public, pg_temp AS $$
BEGIN
  PERFORM public.sync_auth_ban(NEW.user_id);
  RETURN NULL;
END;
$$;

DROP TRIGGER IF EXISTS lp_sync_auth_ban ON public.listener_profiles;
CREATE TRIGGER lp_sync_auth_ban
  AFTER UPDATE OF is_suspended ON public.listener_profiles
  FOR EACH ROW WHEN (OLD.is_suspended IS DISTINCT FROM NEW.is_suspended)
  EXECUTE FUNCTION public.trg_lp_sync_auth_ban();

-- ── B. listener_profiles: no direct writes from user tokens ───────────────
CREATE OR REPLACE FUNCTION public.guard_lp_privileged_cols()
RETURNS TRIGGER LANGUAGE plpgsql SECURITY DEFINER
SET search_path = public, pg_temp AS $$
BEGIN
  -- A signed-in user may not change their listener profile directly; every
  -- legitimate change goes through a server route (service role), which can
  -- check suspension, photo review, etc. Silently keep the old row.
  IF public.is_end_user_request() THEN
    RETURN OLD;
  END IF;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS lp_guard_privileged ON public.listener_profiles;
CREATE TRIGGER lp_guard_privileged
  BEFORE UPDATE ON public.listener_profiles
  FOR EACH ROW EXECUTE FUNCTION public.guard_lp_privileged_cols();

-- The FOR ALL policy also allowed DELETE of one's own row (wiping a suspension).
-- SELECT / INSERT / UPDATE keep their own dedicated policies.
DROP POLICY IF EXISTS listener_profiles_own_write ON public.listener_profiles;

-- ── C. users: suspended users can't edit; nobody self-sets avatar_url ─────
CREATE OR REPLACE FUNCTION public.guard_users_privileged_cols()
RETURNS TRIGGER LANGUAGE plpgsql SECURITY DEFINER
SET search_path = public, pg_temp AS $$
BEGIN
  -- Service role (admin APIs) may change anything.
  IF public.is_service_role() THEN
    RETURN NEW;
  END IF;

  IF public.is_end_user_request() THEN
    -- Suspended (account or listener profile): no self-edits at all.
    IF OLD.is_suspended
       OR EXISTS (SELECT 1 FROM public.listener_profiles lp
                   WHERE lp.user_id = OLD.id AND lp.is_suspended) THEN
      RETURN OLD;
    END IF;
    -- Profile photos are set by /api/auth/profile (and admin photo review).
    NEW.avatar_url := OLD.avatar_url;
  END IF;

  -- For everyone except the service role, freeze privileged columns
  -- (unchanged from 025 — keeps the wallet_balance rule in CLAUDE.md true).
  NEW.is_admin       := OLD.is_admin;
  NEW.role           := OLD.role;
  NEW.wallet_balance := OLD.wallet_balance;
  NEW.is_suspended   := OLD.is_suspended;
  NEW.is_active      := OLD.is_active;
  RETURN NEW;
END;
$$;

-- ── D. lounge: account-level suspension also blocks read/write ────────────
DROP POLICY IF EXISTS "lounge_select" ON lounge_messages;
CREATE POLICY "lounge_select" ON lounge_messages
  FOR SELECT USING (
    deleted_at IS NULL AND
    EXISTS (
      SELECT 1 FROM listener_profiles
      WHERE user_id = auth.uid()
        AND is_approved = true
        AND is_active    = true
        AND (is_suspended IS NULL OR is_suspended = false)
    ) AND
    NOT EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND is_suspended = true)
  );

DROP POLICY IF EXISTS "lounge_insert" ON lounge_messages;
CREATE POLICY "lounge_insert" ON lounge_messages
  FOR INSERT WITH CHECK (
    auth.uid() = sender_id AND
    EXISTS (
      SELECT 1 FROM listener_profiles
      WHERE user_id = auth.uid()
        AND is_approved = true
        AND is_active    = true
        AND (is_suspended IS NULL OR is_suspended = false)
    ) AND
    NOT EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND is_suspended = true)
  );

-- ── E. backfill: everyone suspended right now ─────────────────────────────
SELECT public.sync_auth_ban(x.id)
FROM (
  SELECT id FROM public.users WHERE is_suspended = true
  UNION
  SELECT user_id FROM public.listener_profiles WHERE is_suspended = true
) x;

-- Suspended listeners can't go live, so their photo is never reviewable.
UPDATE public.listener_profiles SET pending_avatar_url = NULL
WHERE is_suspended = true AND pending_avatar_url IS NOT NULL;
