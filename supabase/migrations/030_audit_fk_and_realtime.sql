-- ================================================================
-- Migration 030: Audit-log FK fix + wallet realtime
-- Run in Supabase Dashboard → SQL Editor
--
-- 1. admin_audit_logs.admin_id has an FK to users(id), but password-
--    authenticated admins use a synthetic id (00000000-…-0001) that has
--    no users row — every audit insert silently violated the FK, so the
--    audit trail for password admins was empty. Drop the FK; keep the
--    column as a plain UUID. (Service-role-only table, no RLS exposure.)
--
-- 2. The wallet page subscribes to postgres_changes UPDATE events on the
--    users table to live-update the balance when the Razorpay webhook
--    credits it. Events only fire for tables in the supabase_realtime
--    publication — users was never added, so the subscription was dead.
--    RLS still applies to realtime: users can only receive their own row.
-- ================================================================

-- 1. Drop the FK on admin_audit_logs.admin_id (name-agnostic, idempotent)
DO $$
DECLARE
  fk_name text;
BEGIN
  SELECT con.conname INTO fk_name
  FROM pg_constraint con
  JOIN pg_class rel ON rel.oid = con.conrelid
  JOIN pg_namespace nsp ON nsp.oid = rel.relnamespace
  WHERE nsp.nspname = 'public'
    AND rel.relname = 'admin_audit_logs'
    AND con.contype = 'f'
    AND 'admin_id' = ANY (
      SELECT attname FROM pg_attribute
      WHERE attrelid = con.conrelid AND attnum = ANY (con.conkey)
    );
  IF fk_name IS NOT NULL THEN
    EXECUTE format('ALTER TABLE public.admin_audit_logs DROP CONSTRAINT %I', fk_name);
  END IF;
END $$;

-- 2. Add users to the realtime publication (idempotent)
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_publication_tables
    WHERE pubname = 'supabase_realtime' AND tablename = 'users'
  ) THEN
    ALTER PUBLICATION supabase_realtime ADD TABLE public.users;
  END IF;
END $$;
