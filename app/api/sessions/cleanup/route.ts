import { NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase-server'

// POST — clean up sessions that have been "active" past their scheduled end time.
// Call this from a Vercel cron job: vercel.json → crons → /api/sessions/cleanup every 5 min.
// Also called client-side on session page mount to self-heal after browser crashes.
//
// A session is considered orphaned if:
//   status = 'active'  AND  started_at + duration_mins * 60s < now - 2 min grace period
//
// Vercel cron authentication: cron requests include the CRON_SECRET header.
export async function POST(req: Request) {
  // Auth: accept either a valid CRON_SECRET bearer token (Vercel cron)
  // OR an authenticated user session (session-page self-heal on mount).
  // Plain unauthenticated requests are rejected when CRON_SECRET is configured.
  const cronSecret = process.env.CRON_SECRET
  const authHeader = req.headers.get('authorization')

  if (cronSecret) {
    if (authHeader === `Bearer ${cronSecret}`) {
      // Verified cron call — proceed
    } else {
      // Not the cron secret — require a valid user session (self-heal path)
      const { createServerSupabaseClient } = await import('@/lib/supabase-server')
      const userSb = createServerSupabaseClient()
      const { data: { user } } = await userSb.auth.getUser()
      if (!user) return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }
  }

  const sb = createAdminClient()

  // Find sessions that started more than (duration + 2 min grace) ago and are still active
  const { data: orphans, error } = await sb
    .from('sessions')
    .select('id, seeker_id, listener_id, amount_held, platform_fee, is_free_trial, duration_mins, started_at')
    .eq('status', 'active')
    .lt('started_at', new Date(Date.now() - 2 * 60_000).toISOString()) // at least 2 min old

  if (error) {
    console.error('Session cleanup query failed:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  const now = Date.now()
  const expired = (orphans ?? []).filter(s => {
    const started = new Date(s.started_at).getTime()
    const durationMs = (s.duration_mins as number) * 60_000
    const grace = 2 * 60_000 // 2-minute grace period
    return started + durationMs + grace < now
  })

  let cleaned = 0
  for (const session of expired) {
    // Mark completed
    const { data: completed } = await sb
      .from('sessions')
      .update({ status: 'completed', ended_at: new Date().toISOString() })
      .eq('id', session.id)
      .eq('status', 'active') // optimistic lock
      .select()
      .single()

    if (!completed) continue // already handled by another process

    // Credit listener earnings for non-free sessions
    const earning = (session.amount_held as number) - ((session.platform_fee as number) ?? 0)
    if (earning > 0 && !session.is_free_trial) {
      const { error: creditErr } = await sb.rpc('credit_wallet', {
        p_user_id: session.listener_id,
        p_amount: earning,
      })
      if (creditErr) {
        console.error('cleanup: credit_wallet failed — manual reconciliation needed:', {
          sessionId: session.id, listenerId: session.listener_id, earning,
        })
      } else {
        await sb.from('wallet_transactions').insert({
          user_id: session.listener_id,
          amount: earning,
          type: 'credit',
          description: 'Session earnings (auto-closed)',
          session_id: session.id,
        })
      }
    }

    // Increment listener total_sessions
    const { data: lp } = await sb.from('listener_profiles')
      .select('total_sessions').eq('user_id', session.listener_id).single()
    await sb.from('listener_profiles').update({
      total_sessions: ((lp?.total_sessions as number) || 0) + 1,
    }).eq('user_id', session.listener_id)

    cleaned++
  }

  console.log(`Session cleanup: closed ${cleaned} orphaned session(s) out of ${(orphans ?? []).length} candidates`)
  return NextResponse.json({ cleaned, checked: (orphans ?? []).length })
}
