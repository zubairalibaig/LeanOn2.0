import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient, createAdminClient } from '@/lib/supabase-server'
import { checkRateLimit } from '@/lib/rate-limit'
import { notifyPayoutRequested } from '@/lib/notify'
import { logger } from '@/lib/logger'

// POST — request a payout (listener-only action)
// Replaces the client-side direct Supabase insert so we can send a notification.
export async function POST(req: NextRequest) {
  const userSb = createServerSupabaseClient()
  const { data: { user } } = await userSb.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })

  // SECURITY: 1 payout request per 7 days — prevents spam and abuse
  if (!checkRateLimit(`payout:${user.id}`, 1, 7 * 24 * 60 * 60_000)) {
    return NextResponse.json({ error: 'You can only request a payout once per week. Please try again later.' }, { status: 429 })
  }

  const sb = createAdminClient()

  // Check for existing pending payout
  const { data: existing } = await sb
    .from('payout_requests')
    .select('id')
    .eq('user_id', user.id)
    .eq('status', 'pending')
    .limit(1)

  if (existing && existing.length > 0) {
    return NextResponse.json({ error: 'already_pending', message: 'You already have a pending payout request.' }, { status: 409 })
  }

  // Also block if a pending REFUND exists — both claim the full balance with no
  // hold; allowing both would present admin with two full-balance disbursements.
  const { data: pendingRefund } = await sb
    .from('refund_requests')
    .select('id')
    .eq('user_id', user.id)
    .eq('status', 'pending')
    .limit(1)

  if (pendingRefund && pendingRefund.length > 0) {
    return NextResponse.json({ error: 'already_pending', message: 'You have a pending refund request. Please wait for it to be processed before requesting a payout.' }, { status: 409 })
  }

  // Fetch listener profile — SECURITY: only approved listeners may request payouts.
  // NOTE: wallet_balance lives on the users table, NOT listener_profiles — selecting
  // a nonexistent column here previously errored and 403'd every listener.
  const { data: profile } = await sb
    .from('listener_profiles')
    .select('is_approved')
    .eq('user_id', user.id)
    .maybeSingle()

  if (!profile) {
    return NextResponse.json({ error: 'Not a listener' }, { status: 403 })
  }
  if (!profile.is_approved) {
    return NextResponse.json({ error: 'Your listener account is not yet approved for payouts.' }, { status: 403 })
  }

  // wallet_balance lives on users table
  const { data: userData } = await sb
    .from('users')
    .select('name, wallet_balance')
    .eq('id', user.id)
    .single()

  const amount = userData?.wallet_balance ?? 0
  if (!amount || amount <= 0) {
    return NextResponse.json({ error: 'No balance to withdraw' }, { status: 400 })
  }

  // Parse body; fall back to the UPI/bank details captured at application time
  // so the dashboard "Request Payout" button works without re-asking for UPI.
  const body = await req.json().catch(() => ({}))
  let upiId = typeof body?.upi_id === 'string' ? body.upi_id.trim() : null

  if (!upiId || !upiId.includes('@')) {
    const { data: app } = await sb
      .from('listener_applications')
      .select('upi_id, bank_account, ifsc_code')
      .eq('user_id', user.id)
      .maybeSingle()
    const storedUpi = typeof app?.upi_id === 'string' ? app.upi_id.trim() : null
    if (storedUpi && storedUpi.includes('@')) {
      upiId = storedUpi
    } else if (app?.bank_account && app?.ifsc_code) {
      // No UPI but bank details exist — admin will transfer via bank. Use a marker.
      upiId = `bank:${app.ifsc_code}/${app.bank_account}`
    } else {
      return NextResponse.json({ error: 'No payout method on file. Please add a UPI ID or bank account in your application.' }, { status: 400 })
    }
  }

  const { error: insertErr } = await sb
    .from('payout_requests')
    .insert({ user_id: user.id, amount, status: 'pending', ...(upiId ? { upi_id: upiId } : {}) })

  if (insertErr) {
    logger.error('Payout insert failed:', { error: insertErr instanceof Error ? insertErr.message : String(insertErr) })
    return NextResponse.json({ error: 'Failed to submit payout request' }, { status: 500 })
  }

  // Fire-and-forget notification
  ;(async () => {
    try {
      const { data: authUser } = await sb.auth.admin.getUserById(user.id)
      await notifyPayoutRequested({
        listenerEmail: authUser?.user?.email ?? null,
        listenerName:  userData?.name ?? 'Listener',
        amount,
      })
    } catch (err) {
      logger.error('notifyPayoutRequested failed (non-critical):', { error: err instanceof Error ? err.message : String(err) })
    }
  })()

  return NextResponse.json({ ok: true, amount })
}
