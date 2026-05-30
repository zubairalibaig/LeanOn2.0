-- Migration 012: Explicit create_session RPC reference
-- The create_session function is defined in migration 002.
-- This migration is a no-op reference marker to document that the
-- API route at app/api/sessions/route.ts uses the atomic create_session
-- RPC defined in 002_create_session_atomic.sql.
-- No SQL changes needed here — the function already exists.

-- Confirm the function exists (safe to run multiple times):
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_proc
    WHERE proname = 'create_session'
  ) THEN
    RAISE WARNING 'create_session function not found — run 002_create_session_atomic.sql first';
  END IF;
END $$;
