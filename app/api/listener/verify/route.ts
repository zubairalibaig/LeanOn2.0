import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient, createAdminClient } from '@/lib/supabase-server'
import { checkRateLimit } from '@/lib/rate-limit'
import { logger } from '@/lib/logger'

const VALID_ID_TYPES = ['aadhaar', 'pan', 'passport', 'voter_id', 'driving_license'] as const

// POST /api/listener/verify — submit identity verification
export async function POST(req: NextRequest) {
  try {
    const userSb = createServerSupabaseClient()
    const { data: { user } } = await userSb.auth.getUser()
    if (!user) return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })

    if (!checkRateLimit(`verify:${user.id}`, 3, 60 * 60_000)) {
      return NextResponse.json({ error: 'Too many requests' }, { status: 429 })
    }

    const { full_name, id_type, id_number_hash, selfie_url, id_doc_url } = await req.json()

    if (!full_name?.trim()) return NextResponse.json({ error: 'Full name is required' }, { status: 400 })
    if (!VALID_ID_TYPES.includes(id_type)) return NextResponse.json({ error: 'Invalid ID type' }, { status: 400 })
    if (!id_number_hash?.trim()) return NextResponse.json({ error: 'ID hash is required' }, { status: 400 })

    const sb = createAdminClient()

    const { error } = await sb.from('listener_verifications').upsert({
      listener_id:    user.id,
      full_name:      full_name.trim().slice(0, 120),
      id_type,
      id_number_hash: id_number_hash.trim(),
      selfie_url:     selfie_url ?? null,
      id_doc_url:     id_doc_url ?? null,
      status:         'pending',
      submitted_at:   new Date().toISOString(),
    }, { onConflict: 'listener_id' })

    if (error) throw error

    // Notification for the listener
    await sb.from('notifications').insert({
      user_id:    user.id,
      type:       'verification_update',
      title:      'Verification submitted',
      body:       "Your identity verification has been submitted. We'll review it within 48 hours.",
      action_url: '/become-listener/verify',
    }).then(() => {}, () => {})

    return NextResponse.json({ ok: true })
  } catch (err) {
    logger.error('listener verify error:', { error: err instanceof Error ? err.message : String(err) })
    return NextResponse.json({ error: 'Submission failed. Please try again.' }, { status: 500 })
  }
}

// GET /api/listener/verify — get own verification status
export async function GET() {
  const userSb = createServerSupabaseClient()
  const { data: { user } } = await userSb.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })

  const sb = createAdminClient()
  const { data } = await sb.from('listener_verifications')
    .select('status, id_type, submitted_at, reviewed_at, admin_notes')
    .eq('listener_id', user.id)
    .single()

  return NextResponse.json({ verification: data ?? null })
}
