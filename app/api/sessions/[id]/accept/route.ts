import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient, createAdminClient } from '@/lib/supabase-server'
import { logger } from '@/lib/logger'

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i
const REQUEST_TTL_MS = 5 * 60_000

// POST /api/sessions/[id]/accept — listener accepts a pending session request
export async function POST(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  const sessionId = params.id
  if (!sessionId || !UUID_RE.test(sessionId)) {
    return NextResponse.json({ error: 'Invalid session id' }, { status: 400 })
  }

  const userSb = createServerSupabaseClient()
  const { data: { user } } = await userSb.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })

  const sb = createAdminClient()

  const { data: session } = await sb
    .from('sessions')
    .select('id, listener_id, seeker_id, status, created_at, is_free_trial, amount_held')
    .eq('id', sessionId)
    .single()

  if (!session) return NextResponse.json({ error: 'Session not found' }, { status: 404 })
  if (session.listener_id !== user.id) return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
  if (session.status !== 'pending') {
    return NextResponse.json({ error: 'Session is no longer pending', status: session.status }, { status: 409 })
  }

  // If the 5-minute window already lapsed, treat accept as too-late: cancel + refund.
  const ageMs = Date.now() - new Date(session.created_at as string).getTime()
  if (ageMs > REQUEST_TTL_MS) {
    await expireSession(sb, sessionId, session)
    return NextResponse.json({ error: 'request_expired', message: 'This request expired. Ask the seeker to try again.' }, { status: 409 })
  }

  // Atomically flip pending → active
  const { error: rpcErr } = await sb.rpc('accept_session', {
    p_session_id:  sessionId,
    p_listener_id: user.id,
  })

  if (rpcErr) {
    const msg = rpcErr.message || ''
    if (msg.includes('session_not_found_or_already_handled')) {
      return NextResponse.json({ error: 'Session no longer available' }, { status: 409 })
    }
    // Unique-index violation = listener already has another active paid session
    if ((rpcErr as { code?: string }).code === '23505' || msg.includes('one_active')) {
      return NextResponse.json({ error: 'listener_busy', message: 'You already have an active session.' }, { status: 409 })
    }
    logger.error('accept_session RPC failed:', { sessionId, error: msg })
    return NextResponse.json({ error: 'Failed to accept session' }, { status: 500 })
  }

  // Notify seeker that the session was accepted (in-app)
  await sb.from('notifications').insert({
    user_id:    session.seeker_id,
    type:       'session_accepted',
    title:      'Listener joined!',
    body:       'Your listener accepted — your session is starting now.',
    action_url: `/session/${sessionId}`,
  }).then(() => {}, () => {})

  return NextResponse.json({ ok: true, sessionId })
}

// Cancel + refund an expired pending session (optimistic lock on status='pending')
async function expireSession(
  sb: ReturnType<typeof createAdminClient>,
  sessionId: string,
  session: { seeker_id: string; amount_held: number | string; is_free_trial: boolean }
) {
  const { data: cancelled } = await sb
    .from('sessions')
    .update({ status: 'cancelled', ended_at: new Date().toISOString(), cancel_reason: 'timed_out', responded_at: new Date().toISOString() })
    .eq('id', sessionId)
    .eq('status', 'pending')
    .select('id')
    .maybeSingle()
  if (!cancelled) return

  const held = Number(session.amount_held) || 0
  if (held > 0 && !session.is_free_trial) {
    const { error } = await sb.rpc('credit_wallet', { p_user_id: session.seeker_id, p_amount: held })
    if (!error) {
      await sb.from('wallet_transactions').insert({
        user_id: session.seeker_id, amount: held, type: 'refund',
        description: 'Refund — listener did not respond', session_id: sessionId,
      }).then(() => {}, () => {})
    } else {
      logger.error('accept/expire: refund failed', { sessionId, error: error.message })
    }
  }
}
