import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient, createAdminClient } from '@/lib/supabase-server'
import { checkRateLimit } from '@/lib/rate-limit'
import { SELFIE_BUCKET, selfiePath, hasSelfie } from '@/lib/selfie-storage'
import { logger } from '@/lib/logger'

// Under Vercel's 4.5 MB request-body cap, so oversize photos get our message, not a 413.
const MAX_BYTES = 4 * 1024 * 1024
const TYPES = new Set(['image/jpeg', 'image/png', 'image/webp'])

// Short, non-sensitive reason codes shown to the user ("code: …") so a
// screenshot is enough to debug. See docs/SELFIE_STORAGE.md.
function reasonFor(message: string): string {
  const m = message.toLowerCase()
  if (m.includes('bucket not found')) return 'bucket_missing'
  if (m.includes('mime')) return 'bucket_mime_rejected'
  if (m.includes('maximum allowed size') || m.includes('too large')) return 'bucket_size_limit'
  if (m.includes('invalid') && (m.includes('jwt') || m.includes('signature') || m.includes('key'))) return 'service_key_invalid'
  if (m.includes('row-level security') || m.includes('unauthorized') || m.includes('403')) return 'storage_permission'
  return 'storage_upload_failed'
}

// POST multipart { file } — store the caller's private verification selfie.
export async function POST(req: NextRequest) {
  try {
    const userSb = createServerSupabaseClient()
    const { data: { user } } = await userSb.auth.getUser()
    if (!user) return NextResponse.json({ error: 'Your session expired. Please sign in again.', code: 'not_authenticated' }, { status: 401 })
    if (!checkRateLimit(`listener-selfie:${user.id}`, 10, 60_000)) {
      return NextResponse.json({ error: 'Too many attempts. Please wait a minute.', code: 'rate_limited' }, { status: 429 })
    }

    const form = await req.formData().catch(() => null)
    const file = form?.get('file')
    if (!(file instanceof Blob)) return NextResponse.json({ error: 'No photo received.', code: 'no_file' }, { status: 400 })
    if (!TYPES.has(file.type)) return NextResponse.json({ error: 'Please upload a JPEG, PNG or WebP photo.', code: 'bad_type' }, { status: 400 })
    if (file.size === 0 || file.size > MAX_BYTES) return NextResponse.json({ error: 'Photo must be under 4 MB.', code: 'bad_size' }, { status: 400 })
    if (!process.env.SUPABASE_SERVICE_ROLE_KEY) {
      logger.error('selfie upload: SUPABASE_SERVICE_ROLE_KEY is not set')
      return NextResponse.json({ error: 'Could not save your selfie (code: service_key_missing). Please try again later.', code: 'service_key_missing' }, { status: 500 })
    }

    const admin = createAdminClient()
    const bytes = Buffer.from(await file.arrayBuffer())
    const upload = () => admin.storage.from(SELFIE_BUCKET)
      .upload(selfiePath(user.id), bytes, { upsert: true, contentType: file.type })

    let { error } = await upload()
    if (error && reasonFor(error.message) === 'bucket_missing') {
      // The bucket was never created in this Supabase project — create it
      // PRIVATE (selfies must never be publicly readable) and retry once.
      const { error: createErr } = await admin.storage.createBucket(SELFIE_BUCKET, { public: false })
      if (createErr && !/already exists/i.test(createErr.message)) {
        logger.error('selfie upload: could not create bucket', { bucket: SELFIE_BUCKET, error: createErr.message })
      } else {
        logger.warn('selfie upload: created missing private bucket', { bucket: SELFIE_BUCKET })
      }
      ;({ error } = await upload())
    }
    if (error) {
      const code = reasonFor(error.message)
      logger.error('selfie upload failed', { userId: user.id, bucket: SELFIE_BUCKET, code, error: error.message })
      return NextResponse.json({ error: `Could not save your selfie (code: ${code}). Please try again.`, code }, { status: 500 })
    }
    return NextResponse.json({ success: true })
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err)
    logger.error('selfie route error', { error: message })
    return NextResponse.json({ error: 'Could not save your selfie (code: server_error). Please try again.', code: 'server_error' }, { status: 500 })
  }
}

// GET — does the caller already have a verification selfie on file?
export async function GET() {
  const userSb = createServerSupabaseClient()
  const { data: { user } } = await userSb.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
  return NextResponse.json({ exists: await hasSelfie(createAdminClient(), user.id) })
}
