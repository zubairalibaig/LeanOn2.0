-- Migration 013: Add FCM token column to users table for push notifications
ALTER TABLE users ADD COLUMN IF NOT EXISTS fcm_token text;

-- Index for fast lookups when sending push notifications by user_id
CREATE INDEX IF NOT EXISTS idx_users_fcm_token ON users (id) WHERE fcm_token IS NOT NULL;
