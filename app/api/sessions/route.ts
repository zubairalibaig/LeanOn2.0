import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient, createAdminClient } from '@/lib/supabase-server'
import { checkRateLimit } from '@/lib/rate-limit'
import { PLATFORM_FEE, FREE_SESSION_MINS } from '@/lib/constants'

// POST — create session + deduct wallet atomically
export async function POST(req: NextRequest) {
  try {
    const { listenerId, durationMins, sessionType } = await req.json()

    const userSb = createServerSupabaseClient()
    const { data: { user } } = await userSb.auth.getUser()
    if (!user) return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })

    // 5 session-starts per minute per user — prevents spam booking
    if (!checkRateLimit(`session:${user.id}`, 5, 60_000)) {
      return NextResponse.json({ error: 'Too many requests. Please wait.' }, { status: 429 })
    }

    const sb     = createAdminClient()
    const isFree = durationMins === FREE_SESSION_MINS

    // Block paid sessions if listener already has an active paid session
    if (!isFree) {
      const { data: activeSessions } = await sb
        .from('sessions')
        .select('id')
        .eq('listener_id', listenerId)
        .eq('status', 'active')
        .eq('is_free_trial', false)
        .limit(1)
      if (activeSessions && activeSessions.length > 0) {
        return NextResponse.json({ error: 'listener_busy', message: 'This listener is in a session right now. Please try again shortly.' }, { status: 409 })
      }
    }

    const { data: lp } = await sb
      .from('listener_profiles')
      .select('rate_per_min')
      .eq('user_id', listenerId)
      .single()

    const rate  = lp?.rate_per_min || 10
    const base  = isFree ? 0 : rate * durationMins
    const total = isFree ? 0 : base + PLATFORM_FEE

    if (!isFree) {
      const { data: u } = await sb
        .from('users')
        .select('wallet_balance')
        .eq('id', user.id)
        .single()

      if (!u || u.wallet_balance < total) {
        return NextResponse.json({ error: 'insufficient_balance', required: total }, { status: 400 })
      }

      // Deduct atomically — prevents race condition / double-spend
      const { error: deductErr } = await sb.rpc('deduct_wallet', {
        p_user_id: user.id,
        p_amount:  total,
      })

      if (deductErr) {
        console.error('deduct_wallet RPC failed:', deductErr)
        return NextResponse.json({ error: 'Payment processing failed. Please try again.' }, { status: 500 })
      }
    }

    const { data: session, error: sErr } = await sb.from('sessions').insert({
      seeker_id:     user.id,
      listener_id:   listenerId,
      session_type:  sessionType,
      duration_mins: durationMins,
      amount_held:   total,
      platform_fee:  isFree ? 0 : PLATFORM_FEE,
      is_free_trial: isFree,
      agora_channel: `lo_${Date.now()}`,
      status:        'active',
      started_at:    new Date().toISOString(),
    }).select().single()

    if (sErr) throw sErr

    if (!isFree) {
      await sb.from('wallet_transactions').insert({
        user_id:     user.id,
        amount:      -total,
        type:        'debit',
        description: `${durationMins}-min ${sessionType} session`,
        session_id:  session.id,
      })
    }

    return NextResponse.json({ sessionId: session.id, total })
  } catch (err: unknown) {
    console.error('Session create error:', err)
    return NextResponse.json({ error: err instanceof Error ? err.message : 'Unknown error' }, { status: 500 })
  }
}

// PATCH — complete session + credit listener
export async function PATCH(req: NextRequest) {
  try {
    const { sessionId, rating } = await req.json()

    const userSb = createServerSupabaseClient()
    const { data: { user } } = await userSb.auth.getUser()
    if (!user) return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })

    const sb = createAdminClient()

    const { data: session, error: sErr } = await sb
      .from('sessions')
      .select('*')
      .eq('id', sessionId)
      .single()

    if (sErr || !session) {
      return NextResponse.json({ error: 'Session not found' }, { status: 404 })
    }

    // Only the seeker or listener of THIS session can complete it
    if (user.id !== session.seeker_id && user.id !== session.listener_id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
    }

    // Optimistic lock — .eq('status','active') prevents double-payout if two requests race
    const { data: completed } = await sb
      .from('sessions')
      .update({
        status:   'completed',
        ended_at: new Date().toISOString(),
        ...(rating ? { seeker_rating: rating } : {}),
      })
      .eq('id', sessionId)
      .eq('status', 'active')
      .select()
      .single()

    if (!completed) return NextResponse.json({ success: true }) // already completed

    const listenerEarning = session.amount_held - session.platform_fee
    if (listenerEarning > 0 && !session.is_free_trial) {
      const { error: creditErr } = await sb.rpc('credit_wallet', {
        p_user_id: session.listener_id,
        p_amount:  listenerEarning,
      })

      if (creditErr) {
        console.error('credit_wallet RPC failed — manual reconciliation needed:', {
          sessionId, listenerId: session.listener_id, amount: listenerEarning,
        })
      } else {
        await sb.from('wallet_transactions').insert({
          user_id:     session.listener_id,
          amount:      listenerEarning,
          type:        'credit',
          description: 'Session earnings',
          session_id:  sessionId,
        })
      }
    }

    const { data: lp } = await sb
      .from('listener_profiles')
      .select('total_sessions')
      .eq('user_id', session.listener_id)
      .single()

    await sb.from('listener_profiles').update({
      total_sessions: (lp?.total_sessions || 0) + 1,
    }).eq('user_id', session.listener_id)

    return NextResponse.json({ success: true })
  } catch (err: unknown) {
    console.error('Session complete error:', err)
    return NextResponse.json({ error: err instanceof Error ? err.message : 'Unknown error' }, { status: 500 })
  }
}
