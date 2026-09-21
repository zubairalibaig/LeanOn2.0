-- Migration 058: optional profile photo gallery for listeners
-- Up to 3 additional photos a listener uploads for their public profile.
-- Stored as a text array of public Storage URLs.
ALTER TABLE public.listener_profiles
  ADD COLUMN IF NOT EXISTS profile_photos text[] DEFAULT '{}';
