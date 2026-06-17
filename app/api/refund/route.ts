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

    // Insert refund request FIRST (idempotency anchor)
    const { error: insertErr } = await sb.from('refund_requests').insert({
      user_id: user.id,
      amount,
      reason: reason || null,
      status: 'pending',
    })
    if (insertErr) {
      logger.error('Refund insert failed:', { error: insertErr.message })
      return NextResponse.json({ error: 'Failed to submit refund request. Please try again.' }, { status: 500 })
    }

    // IMMEDIATELY zero the wallet balance so the UI shows ₹0 and the seeker cannot
    // spend funds that are earmarked for refund. The balance change fires the
    // Supabase realtime subscription on the wallet page — no page refresh needed.
    // The admin processes the cash refund (Razorpay/UPI) based on refund_requests.amount.
    const { error: deductErr } = await sb.rpc('deduct_wallet', { p_user_id: user.id, p_amount: amount })
    if (deductErr) {
      // Deduction failed — revert the refund request so the user can retry.
      logger.error('Refund deduct_wallet failed — reverting request:', { userId: user.id, amount, error: deductErr.message })
      await sb.from('refund_requests').update({ status: 'cancelled' }).eq('user_id', user.id).eq('status', 'pending')
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
