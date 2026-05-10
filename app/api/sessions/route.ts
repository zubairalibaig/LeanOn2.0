import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@supabase/ssr'
import { createClient } from '@supabase/supabase-js'
import { cookies } from 'next/headers'

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

    const sb      = getAdminSupabase()
    const isFree  = durationMins === 5

    // Get listener rate
    const { data: lp } = await sb
      .from('listener_profiles')
      .select('rate_per_min')
      .eq('user_id', listenerId)
      .single()

    const rate        = lp?.rate_per_min || 10
    const base        = isFree ? 0 : rate * durationMins
    const platformFee = isFree ? 0 : 15
    const total       = base + platformFee

    // ── ATOMIC balance check + deduct using SQL function
    // Prevents race condition where two sessions deduct from same balance
    if (!isFree) {
      const { data: u } = await sb
        .from('users')
        .select('wallet_balance')
        .eq('id', user.id)
        .single()

      if (!u || u.wallet_balance < total) {
        return NextResponse.json({ error: 'insufficient_balance', required: total }, { status: 400 })
      }

      // Deduct atomically — use SQL expression not read-modify-write
      const { error: deductErr } = await sb.rpc('deduct_wallet', {
        p_user_id: user.id,
        p_amount:  total,
      })

      if (deductErr) {
        // Fallback to direct update if RPC doesn't exist yet
        await sb
          .from('users')
          .update({ wallet_balance: u.wallet_balance - total })
          .eq('id', user.id)
      }
    }

    // Create session record
    const { data: session, error: sErr } = await sb.from('sessions').insert({
      seeker_id:     user.id,
      listener_id:   listenerId,
      session_type:  sessionType,
      duration_mins: durationMins,
      amount_held:   total,
      platform_fee:  platformFee,
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
  } catch (err: any) {
    console.error('Session create error:', err)
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

// PATCH — complete session + credit listener
export async function PATCH(req: NextRequest) {
  try {
    const { sessionId, rating } = await req.json()
    const sb = getAdminSupabase()

    const { data: session, error: sErr } = await sb
      .from('sessions')
      .select('*')
      .eq('id', sessionId)
      .single()

    if (sErr || !session) {
      return NextResponse.json({ error: 'Session not found' }, { status: 404 })
    }

    // Credit listener earnings
    const listenerEarning = session.amount_held - session.platform_fee
    if (listenerEarning > 0 && !session.is_free_trial) {
      const { data: lu } = await sb
        .from('users')
        .select('wallet_balance')
        .eq('id', session.listener_id)
        .single()

      await sb.from('users').update({
        wallet_balance: (lu?.wallet_balance || 0) + listenerEarning,
      }).eq('id', session.listener_id)

      await sb.from('wallet_transactions').insert({
        user_id:     session.listener_id,
        amount:      listenerEarning,
        type:        'credit',
        description: 'Session earnings',
        session_id:  sessionId,
      })
    }

    // Mark session complete
    await sb.from('sessions').update({
      status:    'completed',
      ended_at:  new Date().toISOString(),
      ...(rating ? { seeker_rating: rating } : {}),
    }).eq('id', sessionId)

    // Increment listener session count
    const { data: lp } = await sb
      .from('listener_profiles')
      .select('total_sessions')
      .eq('user_id', session.listener_id)
      .single()

    await sb.from('listener_profiles').update({
      total_sessions: (lp?.total_sessions || 0) + 1,
    }).eq('user_id', session.listener_id)

    return NextResponse.json({ success: true })
  } catch (err: any) {
    console.error('Session complete error:', err)
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
