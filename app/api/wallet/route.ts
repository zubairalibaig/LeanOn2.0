import { NextRequest, NextResponse } from 'next/server'
import Razorpay from 'razorpay'
import crypto from 'crypto'
import { createServerSupabaseClient, createAdminClient } from '@/lib/supabase-server'
import { checkRateLimit } from '@/lib/rate-limit'

function getRzp() {
  return new Razorpay({
    key_id:     process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
    key_secret: process.env.RAZORPAY_KEY_SECRET!,
  })
}

// POST — create Razorpay order (requires auth)
export async function POST(req: NextRequest) {
  try {
    const rzp = getRzp()
    const userSb = createServerSupabaseClient()
    const { data: { user } } = await userSb.auth.getUser()
    if (!user) return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })

    // 10 order-creates per hour per user — prevents wallet abuse
    if (!checkRateLimit(`wallet:${user.id}`, 10, 60 * 60_000)) {
      return NextResponse.json({ error: 'Too many requests. Please wait.' }, { status: 429 })
    }

    const { amount } = await req.json()
    if (!amount || amount < 100) {
      return NextResponse.json({ error: 'Minimum recharge is ₹100' }, { status: 400 })
    }

    const order = await rzp.orders.create({
      amount:   amount * 100,
      currency: 'INR',
      receipt:  `wallet_${user.id.slice(0, 8)}_${Date.now()}`,
      notes:    { userId: user.id, amount: String(amount) },
    })
    return NextResponse.json({ orderId: order.id, amount: order.amount })
  } catch (err) {
    console.error('Razorpay order error:', err)
    return NextResponse.json({ error: 'Failed to create order' }, { status: 500 })
  }
}

// PUT — verify Razorpay signature and credit wallet (requires auth)
export async function PUT(req: NextRequest) {
  try {
    const rzp = getRzp()
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, amount } = await req.json()

    // userId from verified session cookie — NOT from request body (prevents spoofing)
    const userSb = createServerSupabaseClient()
    const { data: { user } } = await userSb.auth.getUser()
    if (!user) return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })

    // Verify Razorpay HMAC signature
    const expected = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET!)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest('hex')

    if (expected !== razorpay_signature) {
      return NextResponse.json({ error: 'Invalid payment signature' }, { status: 400 })
    }

    // Validate amount against the actual Razorpay order — prevents client manipulation
    let verifiedAmount: number
    try {
      const order = await rzp.orders.fetch(razorpay_order_id)
      verifiedAmount = Math.round(Number(order.amount) / 100)
      if (verifiedAmount !== amount) {
        console.warn(`Amount mismatch: client sent ${amount}, order has ${verifiedAmount}`)
      }
    } catch (err) {
      console.error('Failed to fetch Razorpay order for validation:', err)
      // Fail closed — never trust client-provided amount if we can't verify it
      return NextResponse.json(
        { error: `Could not verify payment amount. Contact support with payment ID: ${razorpay_payment_id}` },
        { status: 500 }
      )
    }

    const sb = createAdminClient()

    // Idempotency — prevent double-credit if PUT is called twice for the same payment
    const { data: existing } = await sb
      .from('wallet_transactions')
      .select('id')
      .eq('reference_id', razorpay_payment_id)
      .maybeSingle()

    if (existing) {
      const { data: u } = await sb.from('users').select('wallet_balance').eq('id', user.id).single()
      return NextResponse.json({ success: true, newBalance: u?.wallet_balance ?? 0 })
    }

    // Credit wallet atomically using server-validated amount
    const { error: creditErr } = await sb.rpc('credit_wallet', {
      p_user_id: user.id,
      p_amount:  verifiedAmount,
    })

    if (creditErr) {
      console.error('credit_wallet RPC failed:', creditErr)
      return NextResponse.json(
        { error: `Wallet credit failed. Contact support with payment ID: ${razorpay_payment_id}` },
        { status: 500 }
      )
    }

    await sb.from('wallet_transactions').insert({
      user_id:      user.id,
      amount:       verifiedAmount,
      type:         'credit',
      description:  'Wallet recharge',
      reference_id: razorpay_payment_id,
    })

    const { data: updated } = await sb.from('users').select('wallet_balance').eq('id', user.id).single()
    return NextResponse.json({ success: true, newBalance: updated?.wallet_balance ?? 0 })
  } catch (err) {
    console.error('Payment verify error:', err)
    return NextResponse.json({ error: 'Verification failed' }, { status: 500 })
  }
}
