-- Migration 052: listener_profiles.is_in_session column
--
-- Purpose: real-time "In session" indicator on browse and listener profile pages.
-- The column is set server-side (never by the browser client) when a session
-- goes active, and cleared when the session ends. The existing Realtime
-- subscription on listener_profiles in the browse page picks it up instantly.
--
-- Run in Supabase SQL Editor. Safe to run multiple times (IF NOT EXISTS).

ALTER TABLE listener_profiles
  ADD COLUMN IF NOT EXISTS is_in_session boolean NOT NULL DEFAULT false;
