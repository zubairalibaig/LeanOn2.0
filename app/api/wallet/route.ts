import { NextRequest, NextResponse } from 'next/server'
import Razorpay from 'razorpay'
import crypto from 'crypto'
import { createServerSupabaseClient, createAdminClient } from '@/lib/supabase-server'
import { checkRateLimit } from '@/lib/rate-limit'
import { notifyWalletRecharge } from '@/lib/notify'
import { RECHARGE_AMOUNTS } from '@/lib/constants'
import { logger } from '@/lib/logger'

function getRzp() {
  return new Razorpay({
    key_id:     process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
    key_secret: process.env.RAZORPAY_KEY_SECRET!,
  })
}

// POST — create Razorpay order (requires auth)
// SECURITY: auth required — user context for auth check, admin client for atomic wallet credit
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
    // Whitelist valid recharge tiers — prevents crafted amounts and float abuse
    if (!Number.isInteger(amount) || !(RECHARGE_AMOUNTS as readonly number[]).includes(amount)) {
      return NextResponse.json({ error: 'Please select a valid recharge amount (₹200, ₹500, ₹1000, or ₹2000)' }, { status: 400 })
    }

    const order = await rzp.orders.create({
      amount:   amount * 100,
      currency: 'INR',
      receipt:  `wallet_${user.id.slice(0, 8)}_${Date.now()}`,
      notes:    { userId: user.id, amount: String(amount) },
    })
    return NextResponse.json({ orderId: order.id, amount: order.amount })
  } catch (err) {
    logger.error('Razorpay order error:', { error: err instanceof Error ? err.message : String(err) })
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
      // Log mismatch server-side only — never expose internal amount details to client
      if (verifiedAmount !== amount) {
        logger.warn('Wallet PUT: client-reported amount differs from Razorpay order amount. Using order amount.')
      }
    } catch (err) {
      logger.error('Failed to fetch Razorpay order for validation:', { error: err instanceof Error ? err.message : String(err) })
      // Fail closed — never trust client-provided amount if we can't verify it
      return NextResponse.json(
        { error: `Could not verify payment amount. Contact support with payment ID: ${razorpay_payment_id}` },
        { status: 500 }
      )
    }

    const sb = createAdminClient()

    // Atomic + idempotent credit: inserts the ledger row and bumps the balance
    // in one transaction, keyed on payment id. Safe against the webhook firing
    // concurrently (no double-credit window).
    const { data: newBalance, error: creditErr } = await sb.rpc('credit_wallet_idempotent', {
      p_user_id:      user.id,
      p_amount:       verifiedAmount,
      p_reference_id: razorpay_payment_id,
      p_description:  'Wallet recharge',
    })

    if (creditErr) {
      logger.error('credit_wallet_idempotent RPC failed:', { error: creditErr instanceof Error ? creditErr.message : String(creditErr) })
      return NextResponse.json(
        { error: `Wallet credit failed. Contact support with payment ID: ${razorpay_payment_id}` },
        { status: 500 }
      )
    }

    const [updated, authUser] = await Promise.all([
      sb.from('users').select('wallet_balance, name').eq('id', user.id).single(),
      sb.auth.admin.getUserById(user.id),
    ])

    // Fire-and-forget recharge confirmation email
    notifyWalletRecharge({
      userEmail: authUser.data?.user?.email ?? null,
      userName:  (updated.data as { name?: string } | null)?.name ?? 'there',
      amount:    verifiedAmount,
    }).catch(() => {})

    return NextResponse.json({ success: true, newBalance: (updated.data as { wallet_balance?: number } | null)?.wallet_balance ?? newBalance ?? 0 })
  } catch (err) {
    logger.error('Payment verify error:', { error: err instanceof Error ? err.message : String(err) })
    return NextResponse.json({ error: 'Verification failed' }, { status: 500 })
  }
}
