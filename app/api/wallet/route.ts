import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { listenerId, durationMins, sessionType, seekerId } = await req.json()

    // TODO: wire up Supabase
    // const { createServerSupabaseClient } = await import('@/lib/supabase')
    // const sb = createServerSupabaseClient()

    // 1. Get listener rate
    // const { data: listener } = await sb.from('listener_profiles').select('rate_per_min').eq('user_id', listenerId).single()
    // const rate = listener.rate_per_min
    const rate = 10 // placeholder

    const isFree      = durationMins === 5
    const base        = isFree ? 0 : rate * durationMins
    const platformFee = isFree ? 0 : Math.round(base * 0.10)
    const total       = base + platformFee

    // 2. Check wallet balance
    // const { data: seeker } = await sb.from('users').select('wallet_balance').eq('id', seekerId).single()
    // if (!isFree && seeker.wallet_balance < total) return NextResponse.json({ error: 'insufficient_balance' }, { status: 400 })

    // 3. Create session
    const agoraChannel = `session_${Date.now()}`
    // const { data: session } = await sb.from('sessions').insert({
    //   seeker_id: seekerId, listener_id: listenerId,
    //   session_type: sessionType, duration_mins: durationMins,
    //   amount_held: total, platform_fee: platformFee,
    //   is_free_trial: isFree, agora_channel: agoraChannel, status: 'pending'
    // }).select().single()

    // 4. Deduct wallet
    // if (!isFree) await sb.rpc('start_session', { p_session_id: session.id, p_seeker_id: seekerId, p_amount: total })

    return NextResponse.json({
      sessionId:    `sess_dev_${Date.now()}`,
      agoraChannel,
      total,
      platformFee,
      note: 'Connect Supabase to activate real sessions'
    })

  } catch (err) {
    console.error('Session create error:', err)
    return NextResponse.json({ error: 'Failed to create session' }, { status: 500 })
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const { sessionId, rating, review } = await req.json()

    // TODO: complete session in Supabase
    // const { createServerSupabaseClient } = await import('@/lib/supabase')
    // const sb = createServerSupabaseClient()
    // await sb.rpc('complete_session', { p_session_id: sessionId })
    // if (rating) await sb.from('sessions').update({ seeker_rating: rating, seeker_review: review }).eq('id', sessionId)

    return NextResponse.json({ success: true })
  } catch (err) {
    return NextResponse.json({ error: 'Failed to complete session' }, { status: 500 })
  }
}
