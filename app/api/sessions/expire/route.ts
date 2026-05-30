import { NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase-server'
import { logger } from '@/lib/logger'

// GET — expire abandoned sessions
// Sessions where status='active' AND started_at < now() - (duration_mins + 10 minutes)
// For abandoned sessions, listener gets pro-rated credit based on actual minutes
export async function GET() {
  try {
    const sb = createAdminClient()

    // Find all active sessions that should have expired
    const { data: activeSessions } = await sb
      .from('sessions')
      .select('*')
      .eq('status', 'active')

    if (!activeSessions || activeSessions.length === 0) {
      return NextResponse.json({ expired: 0 })
    }

    const now = Date.now()
    let expiredCount = 0

    for (const session of activeSessions) {
      const startedAt = new Date(session.started_at).getTime()
      const allowedMs = (session.duration_mins + 10) * 60_000
      if (now - startedAt < allowedMs) continue

      // Calculate actual duration used
      const actualMins = Math.floor((now - startedAt) / 60_000)
      const endedAt = new Date().toISOString()

      // Optimistic lock
      const { data: completed } = await sb
        .from('sessions')
        .update({ status: 'completed', ended_at: endedAt })
        .eq('id', session.id)
        .eq('status', 'active')
        .select()
        .single()

      if (!completed) continue
      expiredCount++

      // Pro-rate listener earnings based on actual time used vs booked time
      const bookedMins = session.duration_mins as number
      const usedMins = Math.min(actualMins, bookedMins)
      const listenerRate = session.amount_held > 0 && bookedMins > 0
        ? (session.amount_held - (session.platform_fee ?? 0)) / bookedMins
        : 0

      const listenerEarning = usedMins < 1 ? 0 : Math.floor(listenerRate * usedMins)
      const refundAmount = session.is_free_trial ? 0 : Math.max(0, session.amount_held - listenerEarning - (session.platform_fee ?? 0))

      if (listenerEarning > 0 && !session.is_free_trial) {
        await sb.rpc('credit_wallet', { p_user_id: session.listener_id, p_amount: listenerEarning })
          .then(() => {}, () => {})
        await sb.from('wallet_transactions').insert({
          user_id: session.listener_id,
          amount: listenerEarning,
          type: 'credit',
          description: 'Session earnings (auto-expired, pro-rated)',
          session_id: session.id,
        }).then(() => {}, () => {})

        await sb.from('listener_earnings').insert({
          listener_id: session.listener_id,
          session_id: session.id,
          gross_amount: session.amount_held,
          platform_fee: session.platform_fee ?? 0,
          net_amount: listenerEarning,
          status: 'settled',
        }).then(() => {}, () => {})
      }

      if (refundAmount > 0) {
        await sb.rpc('credit_wallet', { p_user_id: session.seeker_id, p_amount: refundAmount })
          .then(() => {}, () => {})
        await sb.from('wallet_transactions').insert({
          user_id: session.seeker_id,
          amount: refundAmount,
          type: 'refund',
          description: 'Session refund (auto-expired)',
          session_id: session.id,
        }).then(() => {}, () => {})
      }

      logger.info('Auto-expired session', { sessionId: session.id, actualMins, listenerEarning, refundAmount })
    }

    return NextResponse.json({ expired: expiredCount })
  } catch (err) {
    logger.error('Session expire error:', { error: err instanceof Error ? err.message : String(err) })
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
