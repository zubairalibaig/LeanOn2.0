-- ================================================================
-- Migration 033: Reconcile live-DB drift on public.users.phone
--
-- The production DB has two constraints that exist in NO migration
-- file (added directly in the dashboard at some point):
--   1. users.phone NOT NULL
--   2. users_phone_key UNIQUE (phone)
--
-- (1) is WRONG for this app: email-signup users have no phone, and
-- the stale-row reconciliation in lib/ensure-user-row.ts releases a
-- phone by setting it NULL. Drop it.
-- (2) is sensible — keep it, and record it here so the migration
-- files match reality. (UNIQUE allows multiple NULLs.)
-- ================================================================

-- 1. Allow NULL phones
ALTER TABLE public.users ALTER COLUMN phone DROP NOT NULL;

-- 2. Record the UNIQUE constraint (no-op if it already exists)
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint
    WHERE conname = 'users_phone_key' AND conrelid = 'public.users'::regclass
  ) THEN
    ALTER TABLE public.users ADD CONSTRAINT users_phone_key UNIQUE (phone);
  END IF;
END $$;

-- 3. Release any phone held by an orphaned row (public.users rows whose
--    auth identity no longer exists). Safe: auth enforces one auth user
--    per phone, so the live owner of a phone is always in auth.users.
UPDATE public.users u
SET phone = NULL
WHERE u.phone IS NOT NULL
  AND NOT EXISTS (SELECT 1 FROM auth.users a WHERE a.id = u.id);

-- ── VERIFY ───────────────────────────────────────────────────────
-- SELECT is_nullable FROM information_schema.columns
-- WHERE table_schema='public' AND table_name='users' AND column_name='phone';
-- → YES
