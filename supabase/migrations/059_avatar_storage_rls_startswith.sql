-- Migration 059: broaden avatars storage RLS to starts_with
--
-- Migration 037 used split_part(name, '.', 1) = auth.uid() which only allows
-- files named exactly {userId}.{ext}. Gallery photos use {userId}.gallery-N.ext
-- which passes split_part but future naming schemes might not. Switch all three
-- write policies to starts_with(name, auth.uid()::text || '.') which allows any
-- file whose name starts with the user's ID followed by a dot.

-- Owner-only INSERT
DROP POLICY IF EXISTS "avatars_insert_own" ON storage.objects;
CREATE POLICY "avatars_insert_own"
  ON storage.objects FOR INSERT TO authenticated
  WITH CHECK (
    bucket_id = 'avatars'
    AND starts_with(name, auth.uid()::text || '.')
  );

-- Owner-only UPDATE (upsert overwrites land here)
DROP POLICY IF EXISTS "avatars_update_own" ON storage.objects;
CREATE POLICY "avatars_update_own"
  ON storage.objects FOR UPDATE TO authenticated
  USING (
    bucket_id = 'avatars'
    AND starts_with(name, auth.uid()::text || '.')
  )
  WITH CHECK (
    bucket_id = 'avatars'
    AND starts_with(name, auth.uid()::text || '.')
  );

-- Owner-only DELETE
DROP POLICY IF EXISTS "avatars_delete_own" ON storage.objects;
CREATE POLICY "avatars_delete_own"
  ON storage.objects FOR DELETE TO authenticated
  USING (
    bucket_id = 'avatars'
    AND starts_with(name, auth.uid()::text || '.')
  );
