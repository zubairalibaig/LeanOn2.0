import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient, createAdminClient } from '@/lib/supabase-server'
import { checkRateLimit } from '@/lib/rate-limit'
import { SELFIE_BUCKET, selfiePath, hasSelfie } from '@/lib/selfie-storage'
import { logger } from '@/lib/logger'

// Under Vercel's 4.5 MB request-body cap, so oversize photos get our message, not a 413.
const MAX_BYTES = 4 * 1024 * 1024
const TYPES = new Set(['image/jpeg', 'image/png', 'image/webp'])

// POST multipart { file } — store the caller's private verification selfie.
export async function POST(req: NextRequest) {
  try {
    const userSb = createServerSupabaseClient()
    const { data: { user } } = await userSb.auth.getUser()
    if (!user) return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
    if (!checkRateLimit(`listener-selfie:${user.id}`, 10, 60_000)) {
      return NextResponse.json({ error: 'Too many requests. Please wait.' }, { status: 429 })
    }

    const form = await req.formData().catch(() => null)
    const file = form?.get('file')
    if (!(file instanceof Blob)) return NextResponse.json({ error: 'No photo received.' }, { status: 400 })
    if (!TYPES.has(file.type)) return NextResponse.json({ error: 'Please upload a JPEG, PNG or WebP photo.' }, { status: 400 })
    if (file.size === 0 || file.size > MAX_BYTES) return NextResponse.json({ error: 'Photo must be under 4 MB.' }, { status: 400 })

    const admin = createAdminClient()
    const { error } = await admin.storage.from(SELFIE_BUCKET)
      .upload(selfiePath(user.id), Buffer.from(await file.arrayBuffer()), { upsert: true, contentType: file.type })
    if (error) {
      logger.error('selfie upload failed', { userId: user.id, error: error.message })
      return NextResponse.json({ error: 'Could not save your selfie. Please try again.' }, { status: 500 })
    }
    return NextResponse.json({ success: true })
  } catch (err) {
    logger.error('selfie route error', { error: err instanceof Error ? err.message : String(err) })
    return NextResponse.json({ error: 'Could not save your selfie. Please try again.' }, { status: 500 })
  }
}

// GET — does the caller already have a verification selfie on file?
export async function GET() {
  const userSb = createServerSupabaseClient()
  const { data: { user } } = await userSb.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
  return NextResponse.json({ exists: await hasSelfie(createAdminClient(), user.id) })
}
