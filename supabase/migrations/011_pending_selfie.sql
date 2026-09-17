-- Migration 011: pending selfie column for approved listener photo review.
-- When an approved listener uploads a new selfie it lands in pending_avatar_url
-- (not avatar_url) and requires admin approval before going public.
ALTER TABLE listener_profiles ADD COLUMN IF NOT EXISTS pending_avatar_url text;
