-- ================================================================
-- Migration 026: Resolve Supabase database linter findings
--
-- 1. ERROR  rls_disabled_in_public      → enable RLS on specialty_tags
-- 2. WARN   function_search_path_mutable → pin search_path on all fns
-- 3. WARN   rls_policy_always_true       → tighten contact_insert CHECK
-- 4. WARN   anon/authenticated_security_definer_function_executable
--           → REVOKE EXECUTE from PUBLIC/anon/authenticated on every
--             SECURITY DEFINER function; GRANT only to service_role.
--             All these RPCs are called server-side via the service-role
--             admin client, and trigger functions still fire regardless
--             of EXECUTE grants (triggers run as the table owner).
--
-- (auth_leaked_password_protection is an Auth dashboard toggle, not SQL —
--  enable it under Authentication → Policies → Password protection.)
-- ================================================================

-- ── 1. Enable RLS on specialty_tags (if the table exists) ─────────
-- This is a lookup/reference table — public read, no client writes.
DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM information_schema.tables
    WHERE table_schema = 'public' AND table_name = 'specialty_tags'
  ) THEN
    EXECUTE 'ALTER TABLE public.specialty_tags ENABLE ROW LEVEL SECURITY';
    EXECUTE 'DROP POLICY IF EXISTS "specialty_tags_read_all" ON public.specialty_tags';
    EXECUTE 'CREATE POLICY "specialty_tags_read_all" ON public.specialty_tags FOR SELECT USING (true)';
    -- No INSERT/UPDATE/DELETE policies → writes only via service role.
  END IF;
END $$;

-- ── 2. Tighten contact_messages INSERT policy (no longer always-true) ─
-- Keep it open to anonymous submitters, but require sane, bounded fields
-- so the policy is not a literal TRUE.
DROP POLICY IF EXISTS "contact_insert" ON public.contact_messages;
CREATE POLICY "contact_insert"
  ON public.contact_messages FOR INSERT
  WITH CHECK (
    char_length(coalesce(name, ''))    BETWEEN 1 AND 200
    AND char_length(coalesce(message, '')) BETWEEN 1 AND 5000
  );

-- ── 3. Pin search_path + lock down EXECUTE on every public function ──
-- Pin search_path on ALL public functions (covers handle_updated_at,
-- start_session, complete_session, credit_wallet, deduct_wallet, etc.),
-- and for SECURITY DEFINER functions revoke EXECUTE from anon/authenticated.
DO $$
DECLARE
  r RECORD;
BEGIN
  FOR r IN
    SELECT p.oid,
           p.proname,
           p.prosecdef,
           pg_get_function_identity_arguments(p.oid) AS args
    FROM pg_proc p
    WHERE p.pronamespace = 'public'::regnamespace
      AND p.prokind = 'f'
  LOOP
    -- 2. Pin a non-mutable search_path on every function.
    EXECUTE format(
      'ALTER FUNCTION public.%I(%s) SET search_path = public, pg_temp',
      r.proname, r.args
    );

    -- 4. SECURITY DEFINER functions: strip public/anon/authenticated EXECUTE,
    --    grant only to service_role (server-side admin client).
    IF r.prosecdef THEN
      EXECUTE format(
        'REVOKE ALL ON FUNCTION public.%I(%s) FROM PUBLIC, anon, authenticated',
        r.proname, r.args
      );
      EXECUTE format(
        'GRANT EXECUTE ON FUNCTION public.%I(%s) TO service_role',
        r.proname, r.args
      );
    END IF;
  END LOOP;
END $$;

-- ── VERIFY ───────────────────────────────────────────────────────
-- RLS on specialty_tags:
--   SELECT relrowsecurity FROM pg_class WHERE relname = 'specialty_tags';  -- t
-- No SECURITY DEFINER fn executable by anon/authenticated:
--   SELECT p.proname FROM pg_proc p
--   WHERE p.pronamespace='public'::regnamespace AND p.prosecdef
--     AND has_function_privilege('authenticated', p.oid, 'EXECUTE');  -- 0 rows
