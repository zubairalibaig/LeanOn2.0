-- 046_realtime_listener_profiles.sql
--
-- Make listener availability changes propagate to /browse in realtime.
--
-- The browse page (app/browse/page.tsx) subscribes to postgres_changes UPDATE
-- events on public.listener_profiles to flip a listener's online/offline dot the
-- instant they toggle it — across devices and incognito sessions, where the
-- in-browser BroadcastChannel cannot reach. That subscription has been DEAD the
-- whole time: Supabase Realtime only emits events for tables in the
-- `supabase_realtime` publication, and listener_profiles was never added (only
-- public.users and public.messages were). So cross-device availability relied
-- entirely on the slow polling fallback — the "browse doesn't reflect for
-- 5-30s" symptom.
--
-- This migration:
--   1. Adds listener_profiles to the supabase_realtime publication (idempotent).
--   2. Sets REPLICA IDENTITY FULL so UPDATE payloads carry the complete new row
--      (is_available, user_id, etc.) and any client-side filtering is reliable.
--
-- RLS still applies to Realtime: anonymous/seeker clients only receive changes
-- for rows they can SELECT, which is exactly the approved listener rows the
-- browse page shows (policy lp_select_approved). No private data is exposed.
--
-- Safe to re-run.

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_publication_tables
    WHERE pubname = 'supabase_realtime'
      AND schemaname = 'public'
      AND tablename = 'listener_profiles'
  ) THEN
    ALTER PUBLICATION supabase_realtime ADD TABLE public.listener_profiles;
  END IF;
END $$;

-- FULL replica identity: include all columns in the WAL for UPDATEs so Realtime
-- delivers the full new record (and old record) rather than just the primary key.
ALTER TABLE public.listener_profiles REPLICA IDENTITY FULL;
