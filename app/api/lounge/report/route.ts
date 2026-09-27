import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient, createServerSupabaseClient } from '@/lib/supabase-server'
import { checkRateLimit } from '@/lib/rate-limit'

const VALID_REASONS = [
  'inappropriate_sexual',
  'harassment',
  'spam',
  'seeker_privacy',
  'other',
] as const

// POST /api/lounge/report — report a lounge message (listener only, 5/hour)
export async function POST(req: NextRequest) {
  const sb = createServerSupabaseClient()
  const { data: { user } } = await sb.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

  const admin = createAdminClient()
  const { data: lp } = await admin
    .from('listener_profiles')
    .select('is_approved, is_active, is_suspended')
    .eq('user_id', user.id)
    .single()

  if (!lp || !lp.is_approved || lp.is_active === false || lp.is_suspended) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  if (!checkRateLimit(`lounge-report:${user.id}`, 5, 3_600_000)) {
    return NextResponse.json({ error: 'Too many reports.' }, { status: 429 })
  }

  let body: unknown
  try { body = await req.json() } catch { return NextResponse.json({ error: 'Invalid request.' }, { status: 400 }) }

  const { messageId, reason, details } = body as Record<string, unknown>

  if (typeof messageId !== 'string' || !messageId) {
    return NextResponse.json({ error: 'messageId required.' }, { status: 400 })
  }
  if (!VALID_REASONS.includes(reason as typeof VALID_REASONS[number])) {
    return NextResponse.json({ error: 'Invalid reason.' }, { status: 400 })
  }

  // Verify the message exists
  const { data: msg } = await admin
    .from('lounge_messages')
    .select('id, sender_id, content')
    .eq('id', messageId)
    .is('deleted_at', null)
    .single()

  if (!msg) return NextResponse.json({ error: 'Message not found.' }, { status: 404 })

  // Insert into existing content_flags table; store lounge context in details
  const { error } = await admin.from('content_flags').insert({
    reporter_id:    user.id,
    target_user_id: msg.sender_id,
    reason:         reason as string,
    details: JSON.stringify({
      lounge_message_id: messageId,
      message_preview:   (msg.content as string).slice(0, 200),
      extra: typeof details === 'string' ? details.slice(0, 500) : '',
    }),
  })

  if (error) {
    console.error('[lounge report]', error)
    return NextResponse.json({ error: 'Failed to submit report.' }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
