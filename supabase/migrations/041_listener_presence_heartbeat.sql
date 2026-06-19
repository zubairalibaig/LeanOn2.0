-- Tracks when a listener last pinged from the dashboard.
-- Used to detect stale online status when browser is force-killed.
ALTER TABLE listener_profiles ADD COLUMN IF NOT EXISTS last_heartbeat_at timestamptz;
