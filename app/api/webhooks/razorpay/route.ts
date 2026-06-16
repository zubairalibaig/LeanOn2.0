import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'
import { createAdminClient } from '@/lib/supabase-server'
import { grossRechargeAmount } from '@/lib/constants'

const MIN_RECHARGE = 50
const MAX_RECHARGE = 10_000
import { logger } from '@/lib/logger'

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
      logger.error('RAZORPAY_WEBHOOK_SECRET not configured')
      return NextResponse.json({ error: 'Webhook not configured' }, { status: 500 })
    }

    const expected = crypto.createHmac('sha256', webhookSecret)
      .update(body).digest('hex')

    const sigBuf = Buffer.from(signature)
    const expBuf = Buffer.from(expected)
    const sigValid = sigBuf.length === expBuf.length && crypto.timingSafeEqual(sigBuf, expBuf)
    if (!sigValid) {
      return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
    }

    const event = JSON.parse(body)

    if (event.event === 'payment.captured') {
      const payment    = event.payload.payment.entity
      const paymentId  = payment.id
      const orderId    = payment.order_id
      const amountPaise = payment.amount
      const grossRs    = Math.round(amountPaise / 100) // avoid float precision issues with INTEGER DB column

      // userId + credit amount were stored in order notes during POST /api/wallet.
      // The gross charge includes the gateway fee (paid by the seeker, not credited)
      // — credit the tier amount from notes; fall back to gross for legacy orders.
      const userId = payment.notes?.userId as string | undefined
      const noteAmount = parseInt(String(payment.notes?.amount ?? ''), 10)
      // Use note amount if it's a valid recharge value; fall back to gross for legacy orders
      const amountRs = (Number.isInteger(noteAmount) && noteAmount >= MIN_RECHARGE && noteAmount <= MAX_RECHARGE)
        ? noteAmount : grossRs

      if (!userId) {
        logger.error('Webhook: no userId in order notes for order', { orderId })
        return NextResponse.json({ received: true })
      }

      const sb = createAdminClient()

      // Atomic + idempotent credit — keyed on paymentId. If the client-side PUT
      // already credited this payment, the RPC is a no-op (no double-credit).
      const { error: creditErr } = await sb.rpc('credit_wallet_idempotent', {
        p_user_id:      userId,
        p_amount:       amountRs,
        p_reference_id: paymentId,
        p_description:  'Wallet recharge (webhook)',
      })

      if (creditErr) {
        logger.error('Webhook: credit_wallet_idempotent RPC failed for payment', { paymentId, creditErr: creditErr as unknown })
        return NextResponse.json({ error: 'Credit failed' }, { status: 500 })
      }

      // Record gateway fee — idempotent via 'gf_' prefix reference_id.
      // If the client PUT already recorded it, this insert is a no-op.
      const gatewayFee = grossRs - amountRs
      const expectedGross = grossRechargeAmount(amountRs)
      const feeToRecord = gatewayFee > 0 ? gatewayFee : grossRs - expectedGross + (grossRs - amountRs)
      if (feeToRecord > 0) {
        await sb.from('wallet_transactions').insert({
          user_id:      userId,
          amount:       feeToRecord,
          type:         'gateway_fee',
          description:  `Razorpay gateway fee (₹${grossRs} charged − ₹${amountRs} credited)`,
          reference_id: `gf_${paymentId}`,
        }).then(() => {}, () => {})
      }

      logger.info('Webhook: credited wallet (idempotent)', { amountRs, gatewayFee: feeToRecord, userId, paymentId })
    }

    return NextResponse.json({ received: true })
  } catch (err) {
    logger.error('Razorpay webhook error:', { error: err instanceof Error ? err.message : String(err) })
    return NextResponse.json({ error: 'Webhook processing failed' }, { status: 500 })
  }
}
