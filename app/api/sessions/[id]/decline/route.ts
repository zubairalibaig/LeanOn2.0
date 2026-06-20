import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient, createAdminClient } from '@/lib/supabase-server'
import { logger } from '@/lib/logger'

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i

// POST /api/sessions/[id]/decline
// Called by:
//   - Listener: explicitly decline a pending request
//   - Seeker:   cancel their own pending request
// In both cases: session → cancelled, seeker's held wallet amount refunded.
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
    .select('id, listener_id, seeker_id, status, amount_held, is_free_trial')
    .eq('id', sessionId)
    .single()

  if (!session) return NextResponse.json({ error: 'Session not found' }, { status: 404 })
  if (session.listener_id !== user.id && session.seeker_id !== user.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
  }
  if (session.status !== 'pending') {
    return NextResponse.json({ error: 'Session is no longer pending', status: session.status }, { status: 409 })
  }

  const isListener = session.listener_id === user.id

  // Atomically cancel (optimistic lock on status='pending' → refund fires once)
  const { data: cancelled } = await sb
    .from('sessions')
    .update({
      status: 'cancelled',
      ended_at: new Date().toISOString(),
      cancel_reason: isListener ? 'declined' : 'seeker_cancelled',
      responded_at: new Date().toISOString(),
    })
    .eq('id', sessionId)
    .eq('status', 'pending')
    .select('id')
    .maybeSingle()

  if (!cancelled) {
    return NextResponse.json({ error: 'Session already handled' }, { status: 409 })
  }

  // Refund the held amount to the seeker
  const held = Number(session.amount_held) || 0
  if (held > 0 && !session.is_free_trial) {
    const { error: refundErr } = await sb.rpc('credit_wallet', {
      p_user_id: session.seeker_id,
      p_amount:  held,
    })
    if (refundErr) {
      logger.error('decline: seeker refund failed — manual action needed', {
        sessionId, seekerId: session.seeker_id, held, error: refundErr.message,
      })
    } else {
      await sb.from('wallet_transactions').insert({
        user_id:     session.seeker_id,
        amount:      held,
        type:        'refund',
        description: isListener ? 'Refund — listener declined' : 'Refund — request cancelled',
        session_id:  sessionId,
      }).then(() => {}, (e) => logger.error('decline: wallet_transactions insert failed', { sessionId, error: String(e) }))
    }
  }

  // Notify the seeker (only meaningful when the LISTENER declined; if the seeker
  // cancelled their own request they already know)
  if (isListener) {
    await sb.from('notifications').insert({
      user_id:    session.seeker_id,
      type:       'session_cancelled',
      title:      'Listener unavailable',
      body:       'The listener was unavailable right now. Your wallet has been fully refunded — try another listener!',
      action_url: '/browse',
    }).then(() => {}, () => {})
  }

  return NextResponse.json({ ok: true })
}
