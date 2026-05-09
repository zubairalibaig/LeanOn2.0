import { NextRequest, NextResponse } from 'next/server'
import Razorpay from 'razorpay'
import crypto from 'crypto'

const rzp = new Razorpay({
  key_id:     process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
})

// POST — create Razorpay order
export async function POST(req: NextRequest) {
  try {
    const { amount } = await req.json()
    if (!amount || amount < 100) {
      return NextResponse.json({ error: 'Minimum recharge is ₹100' }, { status: 400 })
    }
    const order = await rzp.orders.create({
      amount:   amount * 100,
      currency: 'INR',
      receipt:  `wallet_${Date.now()}`,
    })
    return NextResponse.json({ orderId: order.id, amount: order.amount })
  } catch (err) {
    console.error('Razorpay order error:', err)
    return NextResponse.json({ error: 'Failed to create order' }, { status: 500 })
  }
}

// PUT — verify payment and credit wallet
export async function PUT(req: NextRequest) {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, userId, amount } = await req.json()

    // Verify signature
    const body      = razorpay_order_id + '|' + razorpay_payment_id
    const expected  = crypto.createHmac('sha256', process.env.RAZORPAY_KEY_SECRET!)
                        .update(body).digest('hex')
    if (expected !== razorpay_signature) {
      return NextResponse.json({ error: 'Invalid payment signature' }, { status: 400 })
    }

    // Credit wallet in Supabase
    const { createServerSupabaseClient } = await import('@/lib/supabase')
    const sb = createServerSupabaseClient()

    await sb.from('users')
      .update({ wallet_balance: sb.rpc('increment', { inc: amount }) })
      .eq('id', userId)

    // Log transaction
    await sb.from('wallet_transactions').insert({
      user_id:      userId,
      amount:       amount,
      type:         'credit',
      description:  'Wallet recharge',
      reference_id: razorpay_payment_id,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Payment verify error:', err)
    return NextResponse.json({ error: 'Verification failed' }, { status: 500 })
  }
}
