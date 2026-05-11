import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@supabase/ssr'
import { createClient } from '@supabase/supabase-js'
import { cookies } from 'next/headers'
import { PLATFORM_FEE, FREE_SESSION_MINS } from '@/lib/constants'

// User-context client — respects RLS, used for auth check
function getUserSupabase() {
  const c = cookies()
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    { cookies: { get: (n: string) => c.get(n)?.value, set: () => {}, remove: () => {} } }
  )
}

// Admin client — bypasses RLS for trusted server operations
function getAdminSupabase() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )
}

// POST — create session + deduct wallet atomically
export async function POST(req: NextRequest) {
  try {
    const { listenerId, durationMins, sessionType } = await req.json()

    // Verify user is authenticated
    const userSb = getUserSupabase()
    const { data: { user } } = await userSb.auth.getUser()
    if (!user) return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })

    const sb     = getAdminSupabase()
    const isFree = durationMins === FREE_SESSION_MINS

    // Get listener rate
    const { data: lp } = await sb
      .from('listener_profiles')
      .select('rate_per_min')
      .eq('user_id', listenerId)
      .single()

    const rate  = lp?.rate_per_min || 10
    const base  = isFree ? 0 : rate * durationMins
    const total = isFree ? 0 : base + PLATFORM_FEE

    if (!isFree) {
      // Check balance first (fast pre-flight — RPC enforces atomically below)
      const { data: u } = await sb
        .from('users')
        .select('wallet_balance')
        .eq('id', user.id)
        .single()

      if (!u || u.wallet_balance < total) {
        return NextResponse.json({ error: 'insufficient_balance', required: total }, { status: 400 })
      }

      // Deduct atomically via SQL function — prevents race condition / double-spend
      const { error: deductErr } = await sb.rpc('deduct_wallet', {
        p_user_id: user.id,
        p_amount:  total,
      })

      if (deductErr) {
        // RPC must exist — do NOT fall back to read-modify-write (race condition risk)
        console.error('deduct_wallet RPC failed:', deductErr)
        return NextResponse.json({ error: 'Payment processing failed. Please try again.' }, { status: 500 })
      }
    }

    // Create session record
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

    // Log wallet transaction
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
    const message = err instanceof Error ? err.message : 'Unknown error'
    console.error('Session create error:', err)
    return NextResponse.json({ error: message }, { status: 500 })
  }
}

// PATCH — complete session + credit listener
export async function PATCH(req: NextRequest) {
  try {
    const { sessionId, rating } = await req.json()

    // Verify authentication — anyone without a valid session is rejected
    const userSb = getUserSupabase()
    const { data: { user } } = await userSb.auth.getUser()
    if (!user) return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })

    const sb = getAdminSupabase()

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

    // Atomically mark session completed — .eq('status','active') acts as optimistic lock.
    // If two requests race, only one UPDATE matches; the other gets null and returns early.
    const { data: completed } = await sb
      .from('sessions')
      .update({
        status:   'completed',
        ended_at: new Date().toISOString(),
        ...(rating ? { seeker_rating: rating } : {}),
      })
      .eq('id', sessionId)
      .eq('status', 'active') // only succeeds if not already completed
      .select()
      .single()

    // Already completed — idempotent success
    if (!completed) return NextResponse.json({ success: true })

    // Credit listener earnings atomically via SQL function
    const listenerEarning = session.amount_held - session.platform_fee
    if (listenerEarning > 0 && !session.is_free_trial) {
      const { error: creditErr } = await sb.rpc('credit_wallet', {
        p_user_id: session.listener_id,
        p_amount:  listenerEarning,
      })

      if (creditErr) {
        // Log for manual reconciliation — do not silently read-modify-write
        console.error('credit_wallet RPC failed — manual reconciliation needed:', {
          sessionId, listenerId: session.listener_id, amount: listenerEarning, err: creditErr,
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

    // Increment listener session count (cosmetic counter — minor race risk acceptable)
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
    const message = err instanceof Error ? err.message : 'Unknown error'
    console.error('Session complete error:', err)
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
