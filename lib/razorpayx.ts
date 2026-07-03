import { logger } from '@/lib/logger'

// RazorpayX automated UPI payouts.
//
// Env vars (all optional — with any missing, payouts stay manual):
//   NEXT_PUBLIC_RAZORPAY_KEY_ID  — shared with the payment gateway
//   RAZORPAY_KEY_SECRET          — shared with the payment gateway
//   RAZORPAYX_ACCOUNT_NUMBER     — the RazorpayX virtual account number
//                                  (Dashboard → RazorpayX → My Account → Account Number)
//
// Uses the composite Payouts API: one call creates contact + fund account +
// payout together. Docs: https://razorpay.com/docs/api/x/payout-composite/
// The razorpay npm SDK does not cover the X APIs, so this calls REST directly.

export function razorpayxEnabled(): boolean {
  return Boolean(
    process.env.RAZORPAYX_ACCOUNT_NUMBER &&
    process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID &&
    process.env.RAZORPAY_KEY_SECRET
  )
}

export type UpiPayoutResult =
  | { ok: true; payoutId: string; status: string }
  | { ok: false; error: string }

export async function createUpiPayout(opts: {
  name: string          // listener's display name (RazorpayX contact)
  upiId: string         // VPA to pay, e.g. name@okhdfcbank
  amountInr: number     // rupees (converted to paise here)
  referenceId: string   // payout_requests.id — idempotency + reconciliation
  userId: string        // internal user id, stored in payout notes
}): Promise<UpiPayoutResult> {
  if (!razorpayxEnabled()) {
    return { ok: false, error: 'RazorpayX not configured (RAZORPAYX_ACCOUNT_NUMBER missing)' }
  }

  const auth = Buffer.from(
    `${process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID}:${process.env.RAZORPAY_KEY_SECRET}`
  ).toString('base64')

  try {
    const res = await fetch('https://api.razorpay.com/v1/payouts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${auth}`,
        // Same reference re-sent (e.g. admin double-click, retry after network
        // error) returns the original payout instead of paying twice.
        'X-Payout-Idempotency': opts.referenceId,
      },
      body: JSON.stringify({
        account_number: process.env.RAZORPAYX_ACCOUNT_NUMBER,
        amount: Math.round(opts.amountInr * 100), // paise
        currency: 'INR',
        mode: 'UPI',
        purpose: 'payout',
        // If the X balance is short, park the payout in RazorpayX's queue
        // instead of failing — it fires automatically after the next top-up.
        queue_if_low_balance: true,
        reference_id: opts.referenceId.slice(0, 40),
        narration: 'LeanOn listener payout',
        fund_account: {
          account_type: 'vpa',
          vpa: { address: opts.upiId },
          contact: {
            name: opts.name.slice(0, 50) || 'LeanOn Listener',
            type: 'vendor',
            reference_id: opts.userId.slice(0, 40),
          },
        },
        notes: { userId: opts.userId, payoutRequestId: opts.referenceId },
      }),
      signal: AbortSignal.timeout(15_000),
    })

    const body = await res.json().catch(() => ({}))
    if (!res.ok) {
      const msg = body?.error?.description || `RazorpayX HTTP ${res.status}`
      logger.error('RazorpayX payout failed:', { referenceId: opts.referenceId, status: res.status, error: msg })
      return { ok: false, error: msg }
    }

    // status: processing | processed | queued — all mean the payout is accepted.
    // 'reversed'/'cancelled'/'rejected' at creation time means it will not pay.
    const status = String(body.status ?? 'processing')
    if (['cancelled', 'rejected', 'reversed', 'failed'].includes(status)) {
      logger.error('RazorpayX payout rejected at creation:', { referenceId: opts.referenceId, status, body })
      return { ok: false, error: `Payout ${status}: ${body?.status_details?.description ?? 'see RazorpayX dashboard'}` }
    }

    logger.info('RazorpayX payout created:', { payoutId: body.id, status, referenceId: opts.referenceId })
    return { ok: true, payoutId: String(body.id), status }
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err)
    logger.error('RazorpayX payout error:', { referenceId: opts.referenceId, error: msg })
    return { ok: false, error: msg }
  }
}
