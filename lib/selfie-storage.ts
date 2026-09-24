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

export async function hasSelfie(admin: Admin, userId: string): Promise<boolean> {
  const name = selfiePath(userId).slice('selfies/'.length)
  const { data, error } = await admin.storage.from(SELFIE_BUCKET).list('selfies', { search: name, limit: 5 })
  return !error && (data ?? []).some(f => f.name === name)
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
