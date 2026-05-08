import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { amount, userId } = await req.json()

    if (!amount || amount < 100) {
      return NextResponse.json({ error: 'Minimum recharge is ₹100' }, { status: 400 })
    }

    // TODO: uncomment when Razorpay secret key is in .env
    // const Razorpay = (await import('razorpay')).default
    // const rzp = new Razorpay({
    //   key_id:     process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
    //   key_secret: process.env.RAZORPAY_KEY_SECRET!,
    // })
    // const order = await rzp.orders.create({
    //   amount:   amount * 100, // paise
    //   currency: 'INR',
    //   receipt:  `wallet_${userId}_${Date.now()}`,
    //   notes:    { userId, type: 'wallet_recharge' },
    // })
    // return NextResponse.json({ orderId: order.id, amount: order.amount, currency: order.currency })

    // Placeholder response for development
    return NextResponse.json({
      orderId:  `order_dev_${Date.now()}`,
      amount:   amount * 100,
      currency: 'INR',
      note:     'Connect RAZORPAY_KEY_SECRET in Vercel env vars to activate'
    })

  } catch (err) {
    console.error('Wallet order error:', err)
    return NextResponse.json({ error: 'Failed to create order' }, { status: 500 })
  }
}

// Called by Razorpay webhook after payment success
export async function PUT(req: NextRequest) {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, userId, amount } = await req.json()

    // TODO: verify signature
    // const crypto = await import('crypto')
    // const body   = razorpay_order_id + '|' + razorpay_payment_id
    // const expectedSig = crypto.createHmac('sha256', process.env.RAZORPAY_KEY_SECRET!)
    //   .update(body).digest('hex')
    // if (expectedSig !== razorpay_signature) return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })

    // TODO: credit wallet in Supabase
    // const { createServerSupabaseClient } = await import('@/lib/supabase')
    // const sb = createServerSupabaseClient()
    // await sb.rpc('credit_wallet', { p_user_id: userId, p_amount: amount / 100, p_reference: razorpay_payment_id })

    return NextResponse.json({ success: true })
  } catch (err) {
    return NextResponse.json({ error: 'Verification failed' }, { status: 500 })
  }
}
