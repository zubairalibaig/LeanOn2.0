import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'
import { createAdminClient } from '@/lib/supabase'

// Razorpay sends webhook events when payments complete asynchronously.
// This is the safety net for users who pay then close the browser before
// the client-side success callback fires (PUT /api/wallet).
export async function POST(req: NextRequest) {
  try {
    const body      = await req.text()
    const signature = req.headers.get('x-razorpay-signature') || ''

    // Verify webhook authenticity with webhook secret (different from API key secret)
    const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET
    if (!webhookSecret) {
      console.error('RAZORPAY_WEBHOOK_SECRET not configured')
      return NextResponse.json({ error: 'Webhook not configured' }, { status: 500 })
    }

    const expected = crypto.createHmac('sha256', webhookSecret)
      .update(body).digest('hex')

    if (expected !== signature) {
      return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
    }

    const event = JSON.parse(body)

    if (event.event === 'payment.captured') {
      const payment    = event.payload.payment.entity
      const paymentId  = payment.id
      const orderId    = payment.order_id
      const amountPaise = payment.amount
      const amountRs   = amountPaise / 100

      // userId was stored in order notes during POST /api/wallet
      const userId = payment.notes?.userId as string | undefined

      if (!userId) {
        console.error('Webhook: no userId in order notes for order', orderId)
        return NextResponse.json({ received: true })
      }

      const sb = createAdminClient()

      // Idempotency — skip if already credited via the client-side PUT handler
      const { data: existing } = await sb
        .from('wallet_transactions')
        .select('id')
        .eq('reference_id', paymentId)
        .maybeSingle()

      if (existing) {
        return NextResponse.json({ received: true }) // already processed
      }

      // Credit wallet atomically
      const { error: creditErr } = await sb.rpc('credit_wallet', {
        p_user_id: userId,
        p_amount:  amountRs,
      })

      if (creditErr) {
        console.error('Webhook: credit_wallet RPC failed for payment', paymentId, creditErr)
        return NextResponse.json({ error: 'Credit failed' }, { status: 500 })
      }

      await sb.from('wallet_transactions').insert({
        user_id:      userId,
        amount:       amountRs,
        type:         'credit',
        description:  'Wallet recharge (webhook)',
        reference_id: paymentId,
      })

      console.log(`Webhook: credited ₹${amountRs} to user ${userId} for payment ${paymentId}`)
    }

    return NextResponse.json({ received: true })
  } catch (err) {
    console.error('Razorpay webhook error:', err)
    return NextResponse.json({ error: 'Webhook processing failed' }, { status: 500 })
  }
}
