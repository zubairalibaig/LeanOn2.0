import { NextRequest, NextResponse } from 'next/server'
import Razorpay from 'razorpay'
import { createAdminClient } from '@/lib/supabase-server'
import { checkRateLimit } from '@/lib/rate-limit'
import { logger } from '@/lib/logger'
import { requireAdmin, ADMIN_PASSWORD_USER_ID } from '@/lib/require-admin'

function getRzp() {
  return new Razorpay({
    key_id:     process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
    key_secret: process.env.RAZORPAY_KEY_SECRET!,
  })
}

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i

// Admin routes: 30 requests per minute per admin user to prevent brute-force scraping
const ADMIN_RATE = { limit: 30, windowMs: 60_000 }

const PAGE_SIZE = 20

export async function GET(req: NextRequest) {
  const { error, status, user } = await requireAdmin(req)
  if (error) return NextResponse.json({ error }, { status })
  if (!checkRateLimit(`admin:${user!.id}`, ADMIN_RATE.limit, ADMIN_RATE.windowMs)) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 })
  }

  const url    = new URL(req.url)
  // Math.max/min guard against NaN, negative pages, and unreasonably large offsets
  const MAX_PAGE = 500
  const lpPage = Math.min(MAX_PAGE, Math.max(0, parseInt(url.searchParams.get('lpPage') || '0', 10) || 0))
  const prPage = Math.min(MAX_PAGE, Math.max(0, parseInt(url.searchParams.get('prPage') || '0', 10) || 0))
  const admin  = createAdminClient()

  // listener_applications.aadhaar (full number) is added by migration 047, which
  // is applied MANUALLY by the owner. Until then the column is absent, so select
  // it optimistically and fall back to the long-standing aadhaar_last4 if the
  // full column isn't there yet — never crash the whole admin overview.
  const lpSelect = (withAadhaar: boolean) => `id, user_id, status, created_at, ${withAadhaar ? 'aadhaar, ' : ''}aadhaar_last4, bank_account, ifsc_code, phone,
        listener_profiles ( bio, rate_per_min, specialty_tags ),
        users ( name, email )`
  const lpQuery = (withAadhaar: boolean) => admin
    .from('listener_applications')
    .select(lpSelect(withAadhaar), { count: 'exact' })
    .eq('status', 'pending')
    .order('created_at', { ascending: false })
    .range(lpPage * PAGE_SIZE, lpPage * PAGE_SIZE + PAGE_SIZE - 1)

  const [pendingListenersRes, { data: pendingPayouts, count: prCount }, { data: refundRequests }] = await Promise.all([
    lpQuery(true).then(r => (r.error && r.error.message.includes("'aadhaar'") ? lpQuery(false) : r)),

    admin
      .from('payout_requests')
      .select(`id, amount, upi_id, status, created_at, users ( name, email, phone )`, { count: 'exact' })
      .eq('status', 'pending')
      .order('created_at', { ascending: false })
      .range(prPage * PAGE_SIZE, prPage * PAGE_SIZE + PAGE_SIZE - 1),

    admin
      .from('refund_requests')
      .select(`id, amount, reason, status, created_at, razorpay_payment_id, users ( name, email )`)
      .eq('status', 'pending')
      .order('created_at', { ascending: false })
      .limit(50),
  ])

  return NextResponse.json({
    pendingListeners: pendingListenersRes.data || [],
    lpTotal: pendingListenersRes.count ?? 0,
    lpPage,
    pendingPayouts: pendingPayouts || [],
    prTotal: prCount ?? 0,
    prPage,
    refundRequests: refundRequests || [],
  })
}

async function auditLog(admin: ReturnType<typeof createAdminClient>, adminId: string, action: string, targetId: string) {
  // Use null for synthetic password-admin ID — admin_audit_logs.admin_id has no FK after migration 030
  const dbId = adminId === ADMIN_PASSWORD_USER_ID ? null : adminId
  try { await admin.from('admin_audit_logs').insert({ admin_id: dbId, action, target_id: targetId }) } catch (err) {
    logger.warn('auditLog failed (audit trail gap):', { adminId, action, targetId, error: String(err) })
  }
}

export async function POST(req: NextRequest) {
  const { error, status, user } = await requireAdmin(req)
  if (error) return NextResponse.json({ error }, { status })
  if (!checkRateLimit(`admin:${user!.id}`, ADMIN_RATE.limit, ADMIN_RATE.windowMs)) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 })
  }

  let body: { action?: string; id?: string; notes?: string }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }
  const { action, id, notes } = body

  if (!action || !id) {
    return NextResponse.json({ error: 'Missing action or id' }, { status: 400 })
  }

  const ALLOWED_ACTIONS = [
    'approve_listener', 'reject_listener', 'deactivate_user', 'reactivate_user',
    'complete_payout', 'reject_payout', 'complete_refund',
  ] as const
  if (!(ALLOWED_ACTIONS as readonly string[]).includes(action)) {
    return NextResponse.json({ error: 'Invalid action' }, { status: 400 })
  }

  // Validate id is a proper UUID to prevent malformed DB queries
  if (!UUID_RE.test(id)) {
    return NextResponse.json({ error: 'Invalid id format' }, { status: 400 })
  }

  const admin = createAdminClient()

  if (action === 'approve_listener') {
    const [r1, r2] = await Promise.all([
      admin
        .from('listener_profiles')
        // is_active: true required — browse page filters on both is_approved AND is_active
        .update({ is_approved: true, is_active: true })
        .eq('user_id', id),
      admin
        .from('listener_applications')
        .update({ status: 'approved' })
        .eq('user_id', id),
    ])
    if (r1.error) { logger.error('admin approve_listener r1 failed:', { error: r1.error.message }); return NextResponse.json({ error: 'Server error' }, { status: 500 }) }
    if (r2.error) { logger.error('admin approve_listener r2 failed:', { error: r2.error.message }); return NextResponse.json({ error: 'Server error' }, { status: 500 }) }
    await auditLog(admin, user!.id, 'approve_listener', id)
    return NextResponse.json({ ok: true })
  }

  if (action === 'reject_listener') {
    const { error: err } = await admin.from('listener_applications').update({ status: 'rejected' }).eq('user_id', id)
    if (err) { logger.error('admin reject_listener failed:', { error: err.message }); return NextResponse.json({ error: 'Server error' }, { status: 500 }) }
    if (notes) {
      await admin.from('listener_applications').update({ admin_notes: notes }).eq('user_id', id)
        .then(() => {}, (e) => logger.warn('admin reject_listener: admin_notes update failed:', { id, error: String(e) }))
    }
    await auditLog(admin, user!.id, 'reject_listener', id)
    return NextResponse.json({ ok: true })
  }

  if (action === 'complete_payout') {
    // Claim the row FIRST (atomic optimistic lock on status='pending').
    const { data: pr, error: claimErr } = await admin.from('payout_requests')
      .update({ status: 'completed' })
      .eq('id', id)
      .eq('status', 'pending')
      .select('user_id, amount')
      .single()

    if (claimErr || !pr) {
      return NextResponse.json({ error: 'Payout request not found or already processed' }, { status: 404 })
    }

    // Soft-hold model: the wallet was already deducted when the listener
    // submitted the request, so completing it must NOT deduct again.
    // Legacy requests (created before soft-hold) were never held — detect those
    // by a still-sufficient balance and deduct once now.
    const { data: liveU } = await admin.from('users').select('wallet_balance').eq('id', pr.user_id).single()
    const liveBalance = Number(liveU?.wallet_balance ?? 0)
    if (liveBalance >= Number(pr.amount)) {
      const { error: deductErr } = await admin.rpc('deduct_wallet', { p_user_id: pr.user_id, p_amount: pr.amount })
      if (deductErr) {
        logger.error('deduct_wallet failed for payout — reverting claim:', { id, deductErr: deductErr as unknown })
        await admin.from('payout_requests').update({ status: 'pending' }).eq('id', id)
        return NextResponse.json({ error: 'Wallet deduction failed. Please retry.' }, { status: 500 })
      }
      const { error: txErr } = await admin.from('wallet_transactions').insert({
        user_id: pr.user_id, amount: pr.amount, type: 'debit', description: 'Payout disbursed (legacy)',
      })
      if (txErr) logger.error('payout wallet_transactions insert failed (ledger gap):', { id, error: txErr.message })
    }
    // Otherwise the balance was already held at request time — nothing to deduct.

    await auditLog(admin, user!.id, 'complete_payout', id)
    return NextResponse.json({ ok: true })
  }

  if (action === 'reject_payout') {
    // Claim atomically, then return the held balance to the listener's wallet.
    const { data: pr, error: claimErr } = await admin.from('payout_requests')
      .update({ status: 'rejected', ...(notes ? { admin_notes: notes } : {}) })
      .eq('id', id)
      .eq('status', 'pending')
      .select('user_id, amount')
      .single()

    if (claimErr || !pr) {
      return NextResponse.json({ error: 'Payout request not found or already processed' }, { status: 404 })
    }

    const { error: creditErr } = await admin.rpc('credit_wallet', { p_user_id: pr.user_id, p_amount: pr.amount })
    if (creditErr) {
      // Don't revert the rejection — log for manual reconciliation so the admin
      // still sees the request as handled. The balance must be returned by hand.
      logger.error('reject_payout: credit_wallet failed — MANUAL refund needed:', { id, userId: pr.user_id, amount: pr.amount, error: creditErr.message })
    } else {
      await admin.from('wallet_transactions').insert({
        user_id: pr.user_id, amount: pr.amount, type: 'credit', description: 'Payout rejected — balance returned',
      }).then(() => {}, (e) => logger.error('reject_payout: wallet_transactions insert failed', { id, error: String(e) }))
    }

    await admin.from('notifications').insert({
      user_id:    pr.user_id,
      type:       'payout_update',
      title:      'Payout request rejected',
      body:       notes
        ? `Your payout request was rejected: ${notes}. Your balance has been returned to your wallet.`
        : 'Your payout request was rejected and your balance has been returned to your wallet.',
      action_url: '/dashboard',
    }).then(() => {}, () => {})

    await auditLog(admin, user!.id, 'reject_payout', id)
    return NextResponse.json({ ok: true })
  }

  if (action === 'deactivate_user') {
    const { error: deactErr } = await admin.from('users').update({ is_active: false }).eq('id', id)
    if (deactErr) { logger.error('deactivate_user failed:', { error: deactErr.message }); return NextResponse.json({ error: 'Server error' }, { status: 500 }) }
    const { error: lpDeactErr } = await admin.from('listener_profiles').update({ is_active: false, is_available: false }).eq('user_id', id)
    if (lpDeactErr) logger.warn('deactivate_user: listener_profiles update failed (user IS deactivated):', { id, error: lpDeactErr.message })
    const { error: signOutErr } = await admin.auth.admin.signOut(id, 'global')
    if (signOutErr) logger.warn('deactivate_user: global signOut failed:', { id, error: signOutErr.message })
    await auditLog(admin, user!.id, 'deactivate_user', id)
    return NextResponse.json({ ok: true })
  }

  if (action === 'complete_refund') {
    // Claim the request atomically — prevents concurrent double-processing.
    // IMPORTANT: do NOT select razorpay_payment_id here — that column only exists
    // after migration 040 runs. A missing column in RETURNING makes the whole UPDATE
    // fail and roll back, causing a false 404. Fetch it in a separate query instead.
    const { data: rr, error: claimErr } = await admin.from('refund_requests')
      .update({ status: 'completed' })
      .eq('id', id)
      .eq('status', 'pending')
      .select('user_id, amount')
      .single()

    if (claimErr || !rr) {
      return NextResponse.json({ error: 'Refund request not found or already processed' }, { status: 404 })
    }

    // Fetch razorpay_payment_id separately — column may not exist yet (migration 040).
    // If query fails or returns null, fall back to manual refund path.
    const { data: rzpRow } = await admin.from('refund_requests')
      .select('razorpay_payment_id')
      .eq('id', id)
      .single()
    const razorpayPaymentId: string | null = (rzpRow as { razorpay_payment_id?: string | null } | null)?.razorpay_payment_id ?? null

    // Since the June 2026 fix, the wallet balance is zeroed IMMEDIATELY when the
    // seeker submits a refund request (deduct_wallet fires in /api/refund/route.ts).
    // At processing time, the balance is already 0 — no deduction needed here.
    // Legacy requests submitted BEFORE the fix may still have a non-zero balance.
    // Detect and handle those: if balance > 0, deduct now (old behaviour).
    const { data: liveU } = await admin.from('users').select('wallet_balance').eq('id', rr.user_id).single()
    const liveBalance = Number(liveU?.wallet_balance ?? 0)

    if (liveBalance > 0) {
      // Legacy request — balance wasn't zeroed at request time; do it now.
      const deductAmt = Math.min(Number(rr.amount), liveBalance)
      const { error: deductErr } = await admin.rpc('deduct_wallet', { p_user_id: rr.user_id, p_amount: deductAmt })
      if (deductErr) {
        logger.error('complete_refund: legacy deduct_wallet failed — reverting:', { id, error: deductErr.message })
        await admin.from('refund_requests').update({ status: 'pending' }).eq('id', id)
        return NextResponse.json({ error: 'Wallet deduction failed. Please retry.' }, { status: 500 })
      }
      if (deductAmt !== Number(rr.amount)) {
        await admin.from('refund_requests').update({ amount: deductAmt }).eq('id', id)
      }
      await admin.from('wallet_transactions').insert({
        user_id: rr.user_id, amount: deductAmt, type: 'debit', description: 'Wallet refund processed (legacy)',
      }).then(() => {}, (e) => logger.error('refund tx insert failed:', { error: String(e) }))
    }

    // Auto-issue Razorpay refund if we have the original payment_id.
    // Amount in Razorpay API is in paise (multiply by 100).
    let rzpRefundId: string | null = null
    if (razorpayPaymentId) {
      try {
        const rzp = getRzp()
        const refundAmountPaise = Math.round(Number(rr.amount) * 100)
        const rzpRefund = await rzp.payments.refund(razorpayPaymentId, {
          amount: refundAmountPaise,
          notes: { reason: 'LeanOn wallet refund', refund_request_id: id },
        })
        rzpRefundId = rzpRefund.id
        logger.info('Razorpay refund issued automatically:', { id, rzpRefundId, amount: rr.amount, paymentId: razorpayPaymentId })
        // Store Razorpay refund ID in admin_notes for audit trail (column exists after migration 040)
        await admin.from('refund_requests').update({ admin_notes: `Razorpay refund: ${rzpRefundId}` }).eq('id', id)
          .then(() => {}, (e) => logger.warn('refund admin_notes update failed:', { id, error: String(e) }))
      } catch (rzpErr) {
        // Log the failure but do NOT revert the claim — the wallet is already zeroed and the
        // admin has confirmed intent. They must issue the Razorpay refund manually from the dashboard.
        logger.error('complete_refund: Razorpay refund API failed — manual action required:', {
          id, paymentId: razorpayPaymentId, amount: rr.amount,
          error: rzpErr instanceof Error ? rzpErr.message : String(rzpErr),
        })
      }
    } else {
      logger.warn('complete_refund: no razorpay_payment_id — admin must issue Razorpay refund manually:', { id, amount: rr.amount })
    }

    await auditLog(admin, user!.id, 'complete_refund', id)
    return NextResponse.json({ ok: true, amount: rr.amount, rzpRefundId })
  }

  if (action === 'reactivate_user') {
    const { error: reactErr } = await admin.from('users').update({ is_active: true, is_suspended: false }).eq('id', id)
    if (reactErr) { logger.error('reactivate_user users update failed:', { error: reactErr.message }); return NextResponse.json({ error: 'Server error' }, { status: 500 }) }
    // Only restore is_approved if their application was previously approved.
    // Do NOT unconditionally set is_approved=true — that would approve rejected applicants.
    const { data: lp } = await admin.from('listener_profiles')
      .select('is_approved')
      .eq('user_id', id)
      .maybeSingle()
    if (lp) {
      const { data: app } = await admin.from('listener_applications')
        .select('status')
        .eq('user_id', id)
        .maybeSingle()
      const wasApproved = lp.is_approved || app?.status === 'approved'
      const { error: lpErr } = await admin.from('listener_profiles').update({
        is_active:    wasApproved,
        is_approved:  wasApproved,
        is_suspended: false,
      }).eq('user_id', id)
      if (lpErr) {
        logger.error('reactivate_user: listener_profiles update failed (user IS reactivated):', { id, error: lpErr.message })
        return NextResponse.json({ error: 'User reactivated, but listener profile update failed. Please retry.' }, { status: 500 })
      }
    }
    await auditLog(admin, user!.id, 'reactivate_user', id)
    return NextResponse.json({ ok: true })
  }

  return NextResponse.json({ error: 'Unknown action' }, { status: 400 })
}
