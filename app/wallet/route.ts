import { NextRequest, NextResponse } from 'next/server'
import Razorpay from 'razorpay'
import crypto from 'crypto'
import { createClient } from '@supabase/supabase-js'

const rzp = new Razorpay({
  key_id:     process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
})

// ── CRITICAL FIX: Use SERVICE ROLE key for server-side DB operations
// The anon key + no auth cookies = RLS blocks ALL updates silently
// Service role key bypasses RLS — safe here because this is server-only code
function getAdminSupabase() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
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

// PUT — verify Razorpay payment + credit wallet
export async function PUT(req: NextRequest) {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      userId,
      amount,
    } = await req.json()

    if (!userId || !amount) {
      return NextResponse.json({ error: 'Missing userId or amount' }, { status: 400 })
    }

    // Verify Razorpay signature — prevents spoofed payment claims
    const body     = `${razorpay_order_id}|${razorpay_payment_id}`
    const expected = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET!)
      .update(body)
      .digest('hex')

    if (expected !== razorpay_signature) {
      return NextResponse.json({ error: 'Invalid payment signature' }, { status: 400 })
    }

    const sb = getAdminSupabase()

    // Read current balance
    const { data: user, error: readErr } = await sb
      .from('users')
      .select('wallet_balance')
      .eq('id', userId)
      .single()

    if (readErr || !user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    const newBalance = (user.wallet_balance || 0) + amount

    // Update balance
    const { error: updateErr } = await sb
      .from('users')
      .update({ wallet_balance: newBalance })
      .eq('id', userId)

    if (updateErr) throw updateErr

    // Log transaction
    await sb.from('wallet_transactions').insert({
      user_id:      userId,
      amount:       amount,
      type:         'credit',
      description:  'Wallet recharge via Razorpay',
      reference_id: razorpay_payment_id,
    })

    return NextResponse.json({ success: true, newBalance })
  } catch (err: any) {
    console.error('Wallet credit error:', err)
    return NextResponse.json({ error: 'Failed to credit wallet' }, { status: 500 })
  }
}
