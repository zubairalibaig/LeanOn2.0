import { createHmac } from 'crypto'
import type { createAdminClient } from '@/lib/supabase-server'

// Verification selfies are PRIVATE: uploaded server-side into the
// `verifications` bucket and only ever shown to the admin via short-lived
// signed URLs. The object path carries an HMAC of the user id, keyed by a
// server-only secret, so it can't be guessed even if the bucket is public
// (listener ids are visible in /listener/<id> URLs). Deterministic, so no DB
// column is needed to find a user's selfie.
export const SELFIE_BUCKET = 'verifications'

export function selfiePath(userId: string): string {
  const secret = process.env.SELFIE_PATH_SECRET || process.env.SUPABASE_SERVICE_ROLE_KEY || ''
  const tag = createHmac('sha256', secret).update(`selfie:${userId}`).digest('hex').slice(0, 32)
  return `selfies/${userId}-${tag}`
}

type Admin = ReturnType<typeof createAdminClient>

// true/false = checked; null = storage couldn't be queried (bucket missing,
// permissions) — callers must NOT tell the user "take a selfie" in that case.
export async function hasSelfie(admin: Admin, userId: string): Promise<boolean | null> {
  const name = selfiePath(userId).slice('selfies/'.length)
  const { data, error } = await admin.storage.from(SELFIE_BUCKET).list('selfies', { search: name, limit: 5 })
  if (error) {
    if (/bucket not found/i.test(error.message)) return false // nothing can be on file yet
    console.error('[selfie-storage] list failed', { userId, error: error.message })
    return null
  }
  return (data ?? []).some(f => f.name === name)
}

// Admin asked for a fresh selfie (identity/photo concern): move the current one
// aside so hasSelfie() is false and the applicant must retake it. Moved, not
// deleted — the old image stays available for audit. Archive names keep the
// HMAC tag, so they're as unguessable as the live path.
export async function archiveSelfie(admin: Admin, userId: string): Promise<{ error: string | null }> {
  const from = selfiePath(userId)
  const to = `selfies-archive/${from.slice('selfies/'.length)}-${Date.now()}`
  const { error } = await admin.storage.from(SELFIE_BUCKET).move(from, to)
  // Nothing on file (or no bucket yet) means there's nothing to archive.
  if (error && !/not found|does not exist/i.test(error.message)) return { error: error.message }
  return { error: null }
}

// Account deletion: erase the live selfie and every archived one.
export async function removeAllSelfies(admin: Admin, userId: string): Promise<void> {
  const bucket = admin.storage.from(SELFIE_BUCKET)
  const paths = [selfiePath(userId)]
  const { data } = await bucket.list('selfies-archive', { search: `${userId}-`, limit: 100 })
  for (const f of data ?? []) if (f.name.startsWith(`${userId}-`)) paths.push(`selfies-archive/${f.name}`)
  await bucket.remove(paths)
}

// Signed URLs (10 min) keyed by user id; users without a selfie are omitted.
export async function selfieSignedUrls(admin: Admin, userIds: string[]): Promise<Record<string, string>> {
  if (userIds.length === 0) return {}
  const paths = userIds.map(selfiePath)
  const { data, error } = await admin.storage.from(SELFIE_BUCKET).createSignedUrls(paths, 600)
  if (error || !data) return {}
  const out: Record<string, string> = {}
  data.forEach((d, i) => { if (!d.error && d.signedUrl) out[userIds[i]] = d.signedUrl })
  return out
}

// When each user's CURRENT selfie was saved (a retake overwrites the same
// path), so the admin can see they're looking at the latest one. One list call
// for the whole folder; users without a selfie are omitted.
export async function selfieTakenAt(admin: Admin, userIds: string[]): Promise<Record<string, string>> {
  if (userIds.length === 0) return {}
  const wanted = new Map(userIds.map(id => [selfiePath(id).slice('selfies/'.length), id]))
  const { data, error } = await admin.storage.from(SELFIE_BUCKET)
    .list('selfies', { limit: 1000, sortBy: { column: 'updated_at', order: 'desc' } })
  if (error || !data) return {}
  const out: Record<string, string> = {}
  for (const f of data) {
    const id = wanted.get(f.name)
    const at = (f as { updated_at?: string; created_at?: string }).updated_at || (f as { created_at?: string }).created_at
    if (id && at) out[id] = at
  }
  return out
}
