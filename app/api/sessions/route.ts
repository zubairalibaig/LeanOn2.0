import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

function getSupabase() {
  const c = cookies()
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    { cookies: { get: (n:string) => c.get(n)?.value, set: ()=>{}, remove: ()=>{} } }
  )
}

// POST — create session + deduct wallet
export async function POST(req: NextRequest) {
  try {
    const { listenerId, durationMins, sessionType } = await req.json()
    const sb = getSupabase()
    const { data:{ user } } = await sb.auth.getUser()
    if (!user) return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })

    const isFree      = durationMins === 5
    const { data: lp } = await sb.from('listener_profiles').select('rate_per_min').eq('user_id', listenerId).single()
    const rate        = lp?.rate_per_min || 10
    const base        = isFree ? 0 : rate * durationMins
    const platformFee = isFree ? 0 : 15
    const total       = base + platformFee

    // Check balance
    if (!isFree) {
      const { data: u } = await sb.from('users').select('wallet_balance').eq('id', user.id).single()
      if (!u || u.wallet_balance < total) {
        return NextResponse.json({ error: 'insufficient_balance', required: total }, { status: 400 })
      }
    }

    // Create session
    const { data: session, error: sErr } = await sb.from('sessions').insert({
      seeker_id:    user.id,
      listener_id:  listenerId,
      session_type: sessionType,
      duration_mins: durationMins,
      amount_held:  total,
      platform_fee: platformFee,
      is_free_trial: isFree,
      agora_channel: `lo_${Date.now()}`,
      status: 'active',
      started_at: new Date().toISOString(),
    }).select().single()

    if (sErr) throw sErr

    // Deduct wallet
    if (!isFree) {
      const { data: u } = await sb.from('users').select('wallet_balance').eq('id', user.id).single()
      await sb.from('users').update({ wallet_balance: (u?.wallet_balance||0) - total }).eq('id', user.id)
      await sb.from('wallet_transactions').insert({
        user_id: user.id, amount: -total, type: 'debit',
        description: `${durationMins}-min session`, session_id: session.id,
      })
    }

    return NextResponse.json({ sessionId: session.id, total })
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

// PATCH — complete session + credit listener + save rating
export async function PATCH(req: NextRequest) {
  try {
    const { sessionId, rating } = await req.json()
    const sb = getSupabase()

    const { data: session } = await sb.from('sessions').select('*').eq('id', sessionId).single()
    if (!session) return NextResponse.json({ error: 'Session not found' }, { status: 404 })

    // Credit listener
    const listenerEarning = session.amount_held - session.platform_fee
    if (listenerEarning > 0) {
      const { data: lu } = await sb.from('users').select('wallet_balance').eq('id', session.listener_id).single()
      await sb.from('users').update({ wallet_balance: (lu?.wallet_balance||0) + listenerEarning }).eq('id', session.listener_id)
      await sb.from('wallet_transactions').insert({
        user_id: session.listener_id, amount: listenerEarning, type: 'credit',
        description: 'Session earnings', session_id: sessionId,
      })
    }

    // Update session record
    await sb.from('sessions').update({
      status: 'completed',
      ended_at: new Date().toISOString(),
      ...(rating ? { seeker_rating: rating } : {}),
    }).eq('id', sessionId)

    // Update listener stats
    await sb.from('listener_profiles')
      .update({ total_sessions: session.total_sessions + 1 })
      .eq('user_id', session.listener_id)

    return NextResponse.json({ success: true })
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
