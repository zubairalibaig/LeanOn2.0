import type Razorpay from 'razorpay'
import type { createAdminClient } from '@/lib/supabase-server'

type Admin = ReturnType<typeof createAdminClient>

type PaymentState = {
  id: string
  refundablePaise: number
  sentForRequestPaise: number
  error: string | null
}

export type RefundOutcome = {
  requestedPaise: number
  sentBeforePaise: number
  sentNowPaise: number
  remainingPaise: number
  refundIds: string[]
  errors: string[]
}

const errMsg = (e: unknown) =>
  (e as { error?: { description?: string } })?.error?.description
  ?? (e instanceof Error ? e.message : String(e))

// A wallet balance is usually built from several recharges, but Razorpay can only
// refund a payment up to what that payment captured. Refunding the whole balance
// against the single latest payment fails whenever the balance exceeds it.
async function loadPayments(admin: Admin, rzp: Razorpay, userId: string, requestId: string, preferredPaymentId: string | null): Promise<PaymentState[]> {
  const { data: rows } = await admin.from('wallet_transactions')
    .select('reference_id')
    .eq('user_id', userId)
    .eq('type', 'credit')
    .like('reference_id', 'pay_%')
    .order('created_at', { ascending: false })
    .limit(60)
  const ids = Array.from(new Set(
    [preferredPaymentId, ...(rows ?? []).map(r => r.reference_id as string | null)]
      .filter((x): x is string => !!x && x.startsWith('pay_')),
  ))

  return Promise.all(ids.map(async (id): Promise<PaymentState> => {
    try {
      const p = await rzp.payments.fetch(id)
      const captured = p.status === 'captured' || p.status === 'refunded'
      const amount = Number(p.amount ?? 0)
      const alreadyRefunded = Number(p.amount_refunded ?? 0)
      let sentForRequestPaise = 0
      if (alreadyRefunded > 0) {
        // Every refund we issue is tagged with its refund_request_id, so a retry
        // after a partial run counts what this request already sent.
        const list = await rzp.payments.fetchMultipleRefund(id, { count: 100 })
        for (const r of list.items ?? []) {
          if ((r.notes as Record<string, string> | undefined)?.refund_request_id === requestId && r.status !== 'failed') {
            sentForRequestPaise += Number(r.amount ?? 0)
          }
        }
      }
      return { id, refundablePaise: captured ? Math.max(0, amount - alreadyRefunded) : 0, sentForRequestPaise, error: null }
    } catch (e) {
      return { id, refundablePaise: 0, sentForRequestPaise: 0, error: `${id}: ${errMsg(e)}` }
    }
  }))
}

// Total already refunded through Razorpay for this request. Throws if any payment
// can't be read, since a reject must not return money that was already sent.
export async function razorpayAlreadyRefunded(admin: Admin, rzp: Razorpay, userId: string, requestId: string, preferredPaymentId: string | null): Promise<number> {
  const payments = await loadPayments(admin, rzp, userId, requestId, preferredPaymentId)
  const failed = payments.find(p => p.error)
  if (failed) throw new Error(`Could not read Razorpay payment ${failed.error}`)
  return payments.reduce((t, p) => t + p.sentForRequestPaise, 0)
}

export async function refundAcrossPayments(admin: Admin, rzp: Razorpay, opts: {
  userId: string; requestId: string; amountRupees: number; preferredPaymentId: string | null
}): Promise<RefundOutcome> {
  const requestedPaise = Math.round(opts.amountRupees * 100)
  const payments = await loadPayments(admin, rzp, opts.userId, opts.requestId, opts.preferredPaymentId)
  const errors = payments.flatMap(p => (p.error ? [p.error] : []))
  // An unreadable payment may already hold part of this refund — sending more
  // could pay out twice. Stop and let the admin retry.
  if (errors.length) {
    return { requestedPaise, sentBeforePaise: 0, sentNowPaise: 0, remainingPaise: requestedPaise, refundIds: [], errors }
  }

  const sentBeforePaise = payments.reduce((t, p) => t + p.sentForRequestPaise, 0)
  let remaining = requestedPaise - sentBeforePaise
  let sentNowPaise = 0
  const refundIds: string[] = []

  for (const p of payments) {
    if (remaining <= 0) break
    const take = Math.min(remaining, p.refundablePaise)
    if (take <= 0) continue
    try {
      const r = await rzp.payments.refund(p.id, {
        amount: take,
        notes: { reason: 'LeanOn wallet refund', refund_request_id: opts.requestId },
      })
      refundIds.push(r.id)
      remaining -= take
      sentNowPaise += take
    } catch (e) {
      errors.push(`${p.id}: ${errMsg(e)}`)
    }
  }

  return { requestedPaise, sentBeforePaise, sentNowPaise, remainingPaise: Math.max(0, remaining), refundIds, errors }
}

export const rupees = (paise: number) => `₹${(paise / 100).toLocaleString('en-IN', { maximumFractionDigits: 2 })}`
