// POST — store a push token for the authenticated user's current device.
import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient, createAdminClient } from '@/lib/supabase-server'
import { checkRateLimit } from '@/lib/rate-limit'
import { logger } from '@/lib/logger'

export async function POST(req: NextRequest) {
  const supabase = createServerSupabaseClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthenticated' }, { status: 401 })
  if (!checkRateLimit(`push-register:${user.id}`, 20, 60_000)) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 })
  }

  let fcm_token: string
  try {
    const body = await req.json()
    fcm_token = body.fcm_token
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }

  if (!fcm_token || typeof fcm_token !== 'string' || fcm_token.length < 10 || fcm_token.length > 4096) {
    return NextResponse.json({ error: 'Invalid FCM token' }, { status: 400 })
  }

  const sb = createAdminClient()

  // A device belongs to whoever is signed in on it NOW. Without this, a phone
  // shared by two accounts kept ringing for the previous account's requests.
  await sb.from('users').update({ fcm_token: null })
    .eq('fcm_token', fcm_token).neq('id', user.id)
    .then(() => {}, () => {})

  // Per-device row (migration 061). Tolerated if the table isn't there yet.
  const { error: tokErr } = await sb.from('push_tokens').upsert({
    token: fcm_token,
    user_id: user.id,
    user_agent: (req.headers.get('user-agent') ?? '').slice(0, 300),
    last_seen_at: new Date().toISOString(),
  }, { onConflict: 'token' })
  if (tokErr && !/push_tokens/.test(tokErr.message ?? '') && tokErr.code !== '42P01' && tokErr.code !== 'PGRST205') {
    logger.warn('push register: push_tokens upsert failed', { userId: user.id, error: tokErr.message })
  }

  // Legacy single-token column — still read as a fallback (lib/push.ts).
  const { error } = await sb.from('users').update({ fcm_token }).eq('id', user.id)
  if (error) {
    logger.error('FCM token save error', { userId: user.id, error: error.message })
    return NextResponse.json({ error: 'Failed to save token' }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
