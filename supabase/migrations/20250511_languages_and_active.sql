-- Add languages_spoken to listener profiles
ALTER TABLE listener_profiles
  ADD COLUMN IF NOT EXISTS languages_spoken text[] DEFAULT '{"english"}';

-- Add is_active soft-delete flag to users
ALTER TABLE users
  ADD COLUMN IF NOT EXISTS is_active boolean DEFAULT true;

-- Add is_active soft-delete flag to listener_profiles
ALTER TABLE listener_profiles
  ADD COLUMN IF NOT EXISTS is_active boolean DEFAULT true;

-- Index for language filtering
CREATE INDEX IF NOT EXISTS idx_listener_profiles_languages
  ON listener_profiles USING GIN (languages_spoken);

-- Filter inactive users from auth (app-level, not RLS — apply where needed)
-- When is_active=false, treat as deleted for login/browse purposes.
