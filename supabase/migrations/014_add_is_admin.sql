-- ================================================================
-- Migration 014: Add is_admin column to public.users
-- Required for existing databases where 20250512_complete_schema.sql
-- was skipped (CREATE TABLE IF NOT EXISTS skips when table exists).
-- Also adds is_suspended column used by moderation actions.
-- Run in Supabase Dashboard → SQL Editor
-- ================================================================

-- Add is_admin for admin role-based access control
ALTER TABLE public.users ADD COLUMN IF NOT EXISTS is_admin BOOLEAN NOT NULL DEFAULT FALSE;

-- Add is_suspended for soft moderation actions (keeps data, blocks access)
ALTER TABLE public.users ADD COLUMN IF NOT EXISTS is_suspended BOOLEAN NOT NULL DEFAULT FALSE;

-- Index for fast admin lookups
CREATE INDEX IF NOT EXISTS users_is_admin_idx ON public.users(is_admin) WHERE is_admin = TRUE;

-- Grant the admin the is_admin flag (replace with actual user ID after running this migration)
-- UPDATE public.users SET is_admin = true WHERE id = '<your-user-uuid>';
-- To find your UUID: SELECT id FROM auth.users WHERE email = 'your@email.com' LIMIT 1;
