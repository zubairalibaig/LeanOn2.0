-- 037_avatar_storage_rls.sql
--
-- SECURITY FIX: lock down the public `avatars` storage bucket.
--
-- THE BUG: avatars are uploaded from the browser to a FLAT path
-- `<userId>.<ext>` with upsert:true (app/profile/page.tsx,
-- app/dashboard/page.tsx, app/become-listener/page.tsx). A user's id is
-- public (it's the /listener/<id> slug), so if the bucket has a permissive
-- "authenticated can upload/update" policy, ANY logged-in user can overwrite
-- ANY other user's avatar by uploading to `<victimId>.jpg`.
--
-- THE FIX: scope INSERT/UPDATE/DELETE on the avatars bucket to objects whose
-- name belongs to the caller. Because the path is flat (`<id>.<ext>`, no
-- folder), we match on split_part(name, '.', 1) = auth.uid().
--
-- ⚠️ MANUAL STEP REQUIRED (owner): RLS policies are PERMISSIVE and combine
-- with OR. If a broad policy like "authenticated can update avatars" already
-- exists (created via the Supabase dashboard, NOT in this repo), it will still
-- allow the overwrite even after this migration. After running this file,
-- open Dashboard → Storage → Policies → avatars and DELETE any INSERT/UPDATE/
-- DELETE policy that is not one of the four `avatars_*_own` / `avatars_public_read`
-- policies below. Then refresh db/LIVE_SCHEMA.md.

-- Public read — anyone can view avatars (they appear on public listener cards).
DROP POLICY IF EXISTS "avatars_public_read" ON storage.objects;
CREATE POLICY "avatars_public_read"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'avatars');

-- Owner-only INSERT — the object name must start with the caller's user id.
DROP POLICY IF EXISTS "avatars_insert_own" ON storage.objects;
CREATE POLICY "avatars_insert_own"
  ON storage.objects FOR INSERT TO authenticated
  WITH CHECK (
    bucket_id = 'avatars'
    AND split_part(name, '.', 1) = auth.uid()::text
  );

-- Owner-only UPDATE (upsert overwrites land here).
DROP POLICY IF EXISTS "avatars_update_own" ON storage.objects;
CREATE POLICY "avatars_update_own"
  ON storage.objects FOR UPDATE TO authenticated
  USING (
    bucket_id = 'avatars'
    AND split_part(name, '.', 1) = auth.uid()::text
  )
  WITH CHECK (
    bucket_id = 'avatars'
    AND split_part(name, '.', 1) = auth.uid()::text
  );

-- Owner-only DELETE.
DROP POLICY IF EXISTS "avatars_delete_own" ON storage.objects;
CREATE POLICY "avatars_delete_own"
  ON storage.objects FOR DELETE TO authenticated
  USING (
    bucket_id = 'avatars'
    AND split_part(name, '.', 1) = auth.uid()::text
  );
