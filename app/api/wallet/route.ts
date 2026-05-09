import { NextRequest, NextResponse } from 'next/server'
import Razorpay from 'razorpay'
import crypto from 'crypto'
import { createServerClient } from '@supabase/ssr'

const rzp = new Razorpay({
  key_id:     process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
})

function getSupabase() {
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    { cookies: { get: () => undefined, set: () => {}, remove: () => {} } }
  )
}

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

// PUT — verify payment signature and credit wallet
export async function PUT(req: NextRequest) {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, userId, amount } = await req.json()

    // Verify Razorpay signature
    const body     = razorpay_order_id + '|' + razorpay_payment_id
    const expected = crypto.createHmac('sha256', process.env.RAZORPAY_KEY_SECRET!)
                       .update(body).digest('hex')
    if (expected !== razorpay_signature) {
      return NextResponse.json({ error: 'Invalid payment signature' }, { status: 400 })
    }

    const sb = getSupabase()

    // Credit wallet — increment balance
    const { data: user } = await sb.from('users').select('wallet_balance').eq('id', userId).single()
    const newBalance = (user?.wallet_balance || 0) + amount
    await sb.from('users').update({ wallet_balance: newBalance }).eq('id', userId)

    // Log the transaction
    await sb.from('wallet_transactions').insert({
      user_id:      userId,
      amount:       amount,
      type:         'credit',
      description:  'Wallet recharge',
      reference_id: razorpay_payment_id,
    })

    return NextResponse.json({ success: true, newBalance })
  } catch (err) {
    console.error('Payment verify error:', err)
    return NextResponse.json({ error: 'Verification failed' }, { status: 500 })
  }
}
