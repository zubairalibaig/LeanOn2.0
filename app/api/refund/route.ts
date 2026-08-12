import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient, createAdminClient } from '@/lib/supabase-server'
import { checkRateLimit } from '@/lib/rate-limit'
import { logger } from '@/lib/logger'

export async function POST(req: NextRequest) {
  try {
    const userSb = createServerSupabaseClient()
    const { data: { user } } = await userSb.auth.getUser()
    if (!user) return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })

    // 3 refund requests per hour per user — prevents spam
    if (!checkRateLimit(`refund:${user.id}`, 3, 60 * 60_000)) {
      return NextResponse.json({ error: 'Too many refund requests. Please try again later.' }, { status: 429 })
    }

    const body = await req.json().catch(() => ({}))
    const reason: string | null = (typeof body?.reason === 'string' && body.reason.length <= 500)
      ? body.reason.trim() || null
      : null

    const sb = createAdminClient()
    const { data: u } = await sb
      .from('users')
      .select('wallet_balance')
      .eq('id', user.id)
      .single()

    if (!u || u.wallet_balance <= 0) {
      return NextResponse.json({ error: 'No balance to refund' }, { status: 400 })
    }

    // Check for existing pending refund request
    const { data: existing } = await sb
      .from('refund_requests')
      .select('id, amount')
      .eq('user_id', user.id)
      .eq('status', 'pending')
      .limit(1)

    if (existing && existing.length > 0) {
      // If balance is already 0 (deducted at request time), tell them it's pending.
      // If somehow balance is non-zero (legacy request pre-fix), just report pending.
      return NextResponse.json({
        error: 'You already have a pending refund request. We will process it within 3–5 business days.',
      }, { status: 400 })
    }

    // Block if a pending PAYOUT exists — both claim the full balance.
    const { data: pendingPayout } = await sb
      .from('payout_requests')
      .select('id')
      .eq('user_id', user.id)
      .eq('status', 'pending')
      .limit(1)

    if (pendingPayout && pendingPayout.length > 0) {
      return NextResponse.json({ error: 'You have a pending payout request. Please wait for it to be processed before requesting a refund.' }, { status: 400 })
    }

    const amount = Number(u.wallet_balance)

    // Find the most recent Razorpay payment_id for this user (from the last recharge).
    // Stored in wallet_transactions.reference_id where type='credit'.
    // Captured now so admin can auto-issue the Razorpay refund without hunting for it.
    const { data: lastCharge } = await sb
      .from('wallet_transactions')
      .select('reference_id')
      .eq('user_id', user.id)
      .eq('type', 'credit')
      .not('reference_id', 'is', null)
      .order('created_at', { ascending: false })
      .limit(1)
      .maybeSingle()
    const razorpayPaymentId = lastCharge?.reference_id ?? null

    // Insert refund request FIRST (idempotency anchor).
    //
    // The read-then-insert guard above is NOT atomic — two concurrent requests
    // (double-click, or two tabs) both see zero pending rows and both insert,
    // producing two pending rows for the same balance. The admin then approves
    // both and Razorpay refunds the amount TWICE against the same payment.
    // Migration 051 adds a partial unique index on (user_id) WHERE
    // status='pending' so the database rejects the second insert; 23505 is
    // translated back into the same friendly "already pending" response.
    const { data: inserted, error: insertErr } = await sb.from('refund_requests').insert({
      user_id: user.id,
      amount,
      reason: reason || null,
      status: 'pending',
      ...(razorpayPaymentId ? { razorpay_payment_id: razorpayPaymentId } : {}),
    }).select('id').single()
    if (insertErr) {
      if ((insertErr as { code?: string }).code === '23505') {
        return NextResponse.json({
          error: 'You already have a pending refund request. We will process it within 3–5 business days.',
        }, { status: 400 })
      }
      logger.error('Refund insert failed:', { error: insertErr.message })
      return NextResponse.json({ error: 'Failed to submit refund request. Please try again.' }, { status: 500 })
    }

    // IMMEDIATELY zero the wallet balance so the UI shows ₹0 and the seeker cannot
    // spend funds that are earmarked for refund. The balance change fires the
    // Supabase realtime subscription on the wallet page — no page refresh needed.
    // The admin processes the cash refund (Razorpay/UPI) based on refund_requests.amount.
    const { error: deductErr } = await sb.rpc('deduct_wallet', { p_user_id: user.id, p_amount: amount })
    if (deductErr) {
      // Deduction failed — revert the request we just created so the user can retry.
      //
      // Two bugs fixed here:
      //  1. It wrote status='cancelled', which the live CHECK constraint rejects
      //     (only 'pending','completed','rejected' are allowed). The UPDATE
      //     therefore ALWAYS failed and its result was never inspected, so the
      //     rollback silently did nothing and left a phantom pending request for
      //     money that was never deducted — which the admin would later refund.
      //  2. The WHERE clause matched EVERY pending row for the user rather than
      //     the row just inserted, so it could have cancelled a different,
      //     legitimate request.
      // Now: a valid status, scoped to this row's id, with the result checked.
      logger.error('Refund deduct_wallet failed — reverting request:', { userId: user.id, amount, error: deductErr.message })
      const { error: revertErr } = await sb.from('refund_requests')
        .update({ status: 'rejected', admin_notes: 'Auto-reverted: wallet hold failed' })
        .eq('id', inserted.id)
      if (revertErr) {
        // Leaves a pending row for money never deducted — must be reconciled by hand.
        logger.error('Refund revert FAILED — manual reconciliation needed:', {
          refundRequestId: inserted.id, userId: user.id, amount, error: revertErr.message,
        })
      }
      return NextResponse.json({ error: 'Could not process your refund request. Please try again.' }, { status: 500 })
    }

    // Write a ledger entry so the wallet transaction history shows the hold.
    await sb.from('wallet_transactions').insert({
      user_id:     user.id,
      amount,
      type:        'debit',
      description: 'Wallet refund requested — cash will arrive in 3–5 business days',
    }).then(() => {}, (e) => logger.error('Refund wallet_transactions insert failed (audit gap):', { userId: user.id, error: String(e) }))

    return NextResponse.json({ ok: true, amount })
  } catch (err: unknown) {
    logger.error('Refund request error:', { error: err instanceof Error ? err.message : String(err) })
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}
