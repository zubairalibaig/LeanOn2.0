import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient, createAdminClient } from '@/lib/supabase-server'
import { checkRateLimit } from '@/lib/rate-limit'
import { SELFIE_BUCKET, idVerificationSelfiePath, idVerificationDocPath } from '@/lib/selfie-storage'
import { logger } from '@/lib/logger'

const MAX_BYTES = 4 * 1024 * 1024
const TYPES = new Set(['image/jpeg', 'image/png', 'image/webp'])

// POST multipart { file, folder: 'selfie'|'id_doc' }
// Uploads the file server-side to the PRIVATE verifications bucket using the
// admin (service-role) client, so the bucket never needs to be public and paths
// are never guessable (they carry an HMAC tag). Returns { path } — a storage
// key, never a public URL. The caller posts this path to /api/listener/verify.
export async function POST(req: NextRequest) {
  try {
    const userSb = createServerSupabaseClient()
    const { data: { user } } = await userSb.auth.getUser()
    if (!user) return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })

    if (!checkRateLimit(`id-verify-upload:${user.id}`, 10, 60_000)) {
      return NextResponse.json({ error: 'Too many attempts. Please wait a minute.' }, { status: 429 })
    }

    if (!process.env.SUPABASE_SERVICE_ROLE_KEY) {
      logger.error('id verify upload: SUPABASE_SERVICE_ROLE_KEY not set')
      return NextResponse.json({ error: 'Server misconfiguration. Please try again later.' }, { status: 500 })
    }

    const form = await req.formData().catch(() => null)
    const file = form?.get('file')
    const folder = form?.get('folder')

    if (!(file instanceof Blob)) return NextResponse.json({ error: 'No file received.' }, { status: 400 })
    if (!TYPES.has(file.type)) return NextResponse.json({ error: 'Please upload a JPEG, PNG or WebP image.' }, { status: 400 })
    if (file.size === 0 || file.size > MAX_BYTES) return NextResponse.json({ error: 'File must be under 4 MB.' }, { status: 400 })
    if (folder !== 'selfie' && folder !== 'id_doc') return NextResponse.json({ error: 'Invalid folder.' }, { status: 400 })

    const admin = createAdminClient()

    const { data: userRow } = await admin.from('users').select('is_suspended').eq('id', user.id).maybeSingle()
    if (userRow?.is_suspended) {
      return NextResponse.json({ error: 'Your account is suspended. Please contact support.' }, { status: 403 })
    }

    const storagePath = folder === 'selfie'
      ? idVerificationSelfiePath(user.id)
      : idVerificationDocPath(user.id)
    const bytes = Buffer.from(await file.arrayBuffer())
    const { error } = await admin.storage.from(SELFIE_BUCKET)
      .upload(storagePath, bytes, { upsert: true, contentType: file.type, cacheControl: '10' })

    if (error) {
      logger.error('id verify upload: storage upload failed', { userId: user.id, folder, error: error.message })
      return NextResponse.json({ error: 'Could not save your file. Please try again.' }, { status: 500 })
    }

    return NextResponse.json({ path: storagePath })
  } catch (err) {
    logger.error('id verify upload error', { error: err instanceof Error ? err.message : String(err) })
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 })
  }
}
