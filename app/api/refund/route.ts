import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient, createAdminClient } from '@/lib/supabase-server'

export async function POST(req: NextRequest) {
  try {
    const userSb = createServerSupabaseClient()
    const { data: { user } } = await userSb.auth.getUser()
    if (!user) return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })

    const body = await req.json().catch(() => ({}))
    const reason: string | null = (typeof body?.reason === 'string' && body.reason.length <= 500)
      ? body.reason.trim() || null
      : null

    const sb = createAdminClient()
    const { data: u } = await sb
      .from('users')
      .select('wallet_balance')
      .eq('id', user.id)
      .single()

    if (!u || u.wallet_balance <= 0) {
      return NextResponse.json({ error: 'No balance to refund' }, { status: 400 })
    }

    // Check for existing pending refund request
    const { data: existing } = await sb
      .from('refund_requests')
      .select('id')
      .eq('user_id', user.id)
      .eq('status', 'pending')
      .limit(1)

    if (existing && existing.length > 0) {
      return NextResponse.json({ error: 'You already have a pending refund request. We will process it within 3–5 business days.' }, { status: 400 })
    }

    await sb.from('refund_requests').insert({
      user_id: user.id,
      amount: u.wallet_balance,
      reason: reason || null,
      status: 'pending',
    })

    return NextResponse.json({ ok: true, amount: u.wallet_balance })
  } catch (err: unknown) {
    console.error('Refund request error:', err)
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}
