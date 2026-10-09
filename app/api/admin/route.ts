import { NextRequest, NextResponse } from 'next/server'
import Razorpay from 'razorpay'
import { createAdminClient } from '@/lib/supabase-server'
import { checkRateLimit } from '@/lib/rate-limit'
import { logger } from '@/lib/logger'
import { requireAdmin, ADMIN_PASSWORD_USER_ID, ADMIN_ACTION_LIMIT, ADMIN_ACTION_WINDOW_MS } from '@/lib/require-admin'
import { razorpayxEnabled, createUpiPayout } from '@/lib/razorpayx'
import { refundAcrossPayments, razorpayAlreadyRefunded, rupees } from '@/lib/razorpay-refund'

function getRzp() {
  return new Razorpay({
    key_id:     process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
    key_secret: process.env.RAZORPAY_KEY_SECRET!,
  })
}

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i

// Admin routes: 30 requests per minute per admin user to prevent brute-force scraping
// Shared with every other admin route — see lib/require-admin.ts for why this
// is 150/min rather than 30 (shared synthetic admin id + 2-3 calls per click).
const ADMIN_RATE = { limit: ADMIN_ACTION_LIMIT, windowMs: ADMIN_ACTION_WINDOW_MS }

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

  const [pendingListenersRes, { data: pendingPayouts, count: prCount }, { data: refundRequests }, { data: completedPayoutsRaw }] = await Promise.all([
    lpQuery(true).then(r => (r.error && r.error.message.includes("'aadhaar'") ? lpQuery(false) : r)),

    // NO users embed here: payout_requests has TWO FKs to users (user_id and
    // processed_by), so an unqualified `users(...)` embed is ambiguous and
    // PostgREST errors out the whole query — the admin saw an empty payout list
    // while the KPI counter said 1. Names are batch-fetched separately below.
    admin
      .from('payout_requests')
      .select(`id, user_id, amount, upi_id, status, created_at`, { count: 'exact' })
      .eq('status', 'pending')
      .order('created_at', { ascending: false })
      .range(prPage * PAGE_SIZE, prPage * PAGE_SIZE + PAGE_SIZE - 1),

    admin
      .from('refund_requests')
      .select(`id, amount, reason, status, created_at, razorpay_payment_id, admin_notes, users ( name, email )`)
      .eq('status', 'pending')
      .order('created_at', { ascending: false })
      .limit(50),

    // Completed payouts — past payments the admin has marked paid
    admin
      .from('payout_requests')
      .select('id, user_id, amount, upi_id, status, created_at, processed_at')
      .eq('status', 'completed')
      .order('processed_at', { ascending: false })
      .limit(50),
  ])

  // Enrich payout rows with the listener's name/contact AND the bank details
  // captured at application time, so the admin can pay via UPI or bank
  // transfer without hunting through the Listeners tab.
  type PayoutRowOut = {
    id: string; user_id: string; amount: number; upi_id: string | null
    status: string; created_at: string
    users: { name: string | null; email: string | null; phone: string | null } | null
    bank: { upi_id: string | null; bank_account: string | null; ifsc_code: string | null; account_holder_name: string | null } | null
  }
  let payoutsOut: PayoutRowOut[] = []
  {
    const rows = (pendingPayouts ?? []) as Array<Omit<PayoutRowOut, 'users' | 'bank'>>
    const ids = Array.from(new Set(rows.map(r => r.user_id)))
    const userMap: Record<string, PayoutRowOut['users']> = {}
    const appMap:  Record<string, PayoutRowOut['bank']>  = {}
    if (ids.length > 0) {
      const [uRes, aRes] = await Promise.all([
        admin.from('users').select('id, name, email, phone').in('id', ids),
        admin.from('listener_applications').select('user_id, upi_id, bank_account, ifsc_code, account_holder_name').in('user_id', ids),
      ])
      for (const u of uRes.data ?? []) {
        userMap[u.id as string] = { name: u.name ?? null, email: u.email ?? null, phone: u.phone ?? null }
      }
      for (const a of aRes.data ?? []) {
        appMap[a.user_id as string] = { upi_id: a.upi_id ?? null, bank_account: a.bank_account ?? null, ifsc_code: a.ifsc_code ?? null, account_holder_name: (a as Record<string,unknown>).account_holder_name as string | null ?? null }
      }
    }
    payoutsOut = rows.map(r => ({ ...r, users: userMap[r.user_id] ?? null, bank: appMap[r.user_id] ?? null }))
  }

  // Enrich completed payouts with listener name + phone
  type CompletedPayoutOut = {
    id: string; user_id: string; amount: number; upi_id: string | null
    status: string; created_at: string; processed_at: string | null
    name: string | null; phone: string | null
  }
  let completedPayouts: CompletedPayoutOut[] = []
  {
    const rows = (completedPayoutsRaw ?? []) as Array<{ id: string; user_id: string; amount: number; upi_id: string | null; status: string; created_at: string; processed_at: string | null }>
    const ids = Array.from(new Set(rows.map(r => r.user_id)))
    const nameMap: Record<string, { name: string | null; phone: string | null }> = {}
    if (ids.length > 0) {
      const { data: uRows } = await admin.from('users').select('id, name, phone').in('id', ids)
      for (const u of uRows ?? []) {
        nameMap[u.id as string] = { name: u.name ?? null, phone: u.phone ?? null }
      }
    }
    completedPayouts = rows.map(r => ({ ...r, name: nameMap[r.user_id]?.name ?? null, phone: nameMap[r.user_id]?.phone ?? null }))
  }

  return NextResponse.json({
    pendingListeners: pendingListenersRes.data || [],
    lpTotal: pendingListenersRes.count ?? 0,
    lpPage,
    pendingPayouts: payoutsOut,
    prTotal: prCount ?? 0,
    prPage,
    refundRequests: refundRequests || [],
    completedPayouts,
    // Drives the admin UI banner: automated RazorpayX transfer vs manual UPI.
    razorpayxEnabled: razorpayxEnabled(),
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
    'complete_payout', 'reject_payout', 'complete_refund', 'complete_refund_manual', 'reject_refund',
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
    const safeNotes = typeof notes === 'string' ? notes.slice(0, 500) : undefined
    // Combine status + notes in one UPDATE to avoid a race where a concurrent
    // re-approval between the two calls overwrites the rejection with stale notes.
    const { error: err } = await admin.from('listener_applications')
      .update({ status: 'rejected', ...(safeNotes ? { admin_notes: safeNotes } : {}) })
      .eq('user_id', id)
    if (err) { logger.error('admin reject_listener failed:', { error: err.message }); return NextResponse.json({ error: 'Server error' }, { status: 500 }) }
    await auditLog(admin, user!.id, 'reject_listener', id)
    return NextResponse.json({ ok: true })
  }

  if (action === 'complete_payout') {
    // Claim the row FIRST (atomic optimistic lock on status='pending').
    const { data: pr, error: claimErr } = await admin.from('payout_requests')
      .update({ status: 'completed', processed_at: new Date().toISOString() })
      .eq('id', id)
      .eq('status', 'pending')
      .select('user_id, amount, upi_id')
      .single()

    if (claimErr || !pr) {
      return NextResponse.json({ error: 'Payout request not found or already processed' }, { status: 404 })
    }

    // Automated transfer via RazorpayX when configured and the request has a
    // UPI id. The idempotency header (keyed on the request id) makes retries
    // safe — re-sending the same request cannot pay twice. If the transfer is
    // NOT accepted, revert the claim so the admin can retry or pay manually;
    // no wallet mutation has happened yet at this point.
    let rzpxPayoutId: string | null = null
    // Only real VPAs qualify for automated UPI transfer — a "bank:IFSC/ACCT"
    // marker (listener without UPI) always takes the manual path.
    if (razorpayxEnabled() && pr.upi_id && (pr.upi_id as string).includes('@')) {
      const { data: userRow } = await admin.from('users').select('name').eq('id', pr.user_id).single()
      const result = await createUpiPayout({
        name:        (userRow?.name as string) ?? 'LeanOn Listener',
        upiId:       pr.upi_id as string,
        amountInr:   Number(pr.amount),
        referenceId: id,
        userId:      pr.user_id as string,
      })
      if (!result.ok) {
        await admin.from('payout_requests').update({ status: 'pending', processed_at: null }).eq('id', id)
        return NextResponse.json({
          error: `RazorpayX transfer failed: ${result.error}. The request is back in pending — retry, or transfer manually and use Mark Paid after temporarily unsetting RAZORPAYX_ACCOUNT_NUMBER.`,
        }, { status: 502 })
      }
      rzpxPayoutId = result.payoutId
      await admin.from('payout_requests')
        .update({ admin_notes: `RazorpayX payout: ${rzpxPayoutId} (${result.status})` })
        .eq('id', id)
        .then(() => {}, (e) => logger.warn('payout admin_notes update failed:', { id, error: String(e) }))
    }

    // Soft-hold model: /api/payout ALWAYS deducts the balance at request time,
    // so completing a payout must never deduct again.
    //
    // 🔴 FIXED — this previously carried a "legacy request" heuristic that
    // re-deducted whenever `wallet_balance >= pr.amount`, on the theory that a
    // still-sufficient balance meant the hold had never happened. That is
    // provably wrong: payouts are processed manually over days, and a listener
    // who completes ANY session in that window is credited again, pushing their
    // balance back above the requested amount. The admin clicking "Mark Paid"
    // then charged them a SECOND time — paid ₹500 in cash, ₹1000 off the wallet.
    // There is no column on payout_requests distinguishing held from not-held
    // (verified against LIVE_SCHEMA), so the heuristic could never be made
    // reliable. The hold is unconditional upstream, so the correct behaviour
    // here is simply to disburse and record — never to deduct.

    await admin.from('notifications').insert({
      user_id:    pr.user_id,
      type:       'payout_update',
      title:      rzpxPayoutId ? 'Payout sent! 🎉' : 'Payout completed',
      body:       rzpxPayoutId
        ? `₹${pr.amount} is on its way to your UPI (${pr.upi_id}). It usually arrives within minutes.`
        : `Your payout of ₹${pr.amount} has been transferred${(pr.upi_id as string | null)?.startsWith('bank:') ? ' to your bank account' : ''}. It may take a few hours to reflect.`,
      action_url: '/dashboard',
    }).then(() => {}, () => {})

    await auditLog(admin, user!.id, 'complete_payout', id)
    return NextResponse.json({ ok: true, rzpxPayoutId })
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
    const { data: rr, error: claimErr } = await admin.from('refund_requests')
      .update({ status: 'completed' })
      .eq('id', id)
      .eq('status', 'pending')
      .select('user_id, amount')
      .single()
    if (claimErr || !rr) {
      return NextResponse.json({ error: 'Refund request not found or already processed' }, { status: 404 })
    }

    const { data: rzpRow } = await admin.from('refund_requests')
      .select('razorpay_payment_id').eq('id', id).single()
    const preferredPaymentId = (rzpRow as { razorpay_payment_id?: string | null } | null)?.razorpay_payment_id ?? null

    // The wallet was already emptied by /api/refund when the request was made —
    // nothing to deduct here. Only cash moves now.
    const out = await refundAcrossPayments(admin, getRzp(), {
      userId: rr.user_id, requestId: id, amountRupees: Number(rr.amount), preferredPaymentId,
    })
    const sentPaise = out.sentBeforePaise + out.sentNowPaise
    const ids = out.refundIds.length ? ` (${out.refundIds.join(', ')})` : ''

    if (out.remainingPaise === 0) {
      await admin.from('refund_requests')
        .update({ admin_notes: `Razorpay refunded ${rupees(sentPaise)}${ids}` }).eq('id', id)
        .then(() => {}, (e) => logger.warn('refund admin_notes update failed:', { id, error: String(e) }))
      await auditLog(admin, user!.id, 'complete_refund', id)
      return NextResponse.json({ ok: true, amount: rr.amount, rzpRefundIds: out.refundIds })
    }

    // Not fully refunded: put it back in the pending list so it can't be forgotten.
    // A retry counts what this request already sent, so it never pays twice.
    const reason = out.errors.length ? out.errors.join('; ') : 'no recharge payment has enough refundable amount left'
    const note = `Auto-refund incomplete: ${rupees(sentPaise)} sent${ids}, ${rupees(out.remainingPaise)} NOT refunded — ${reason}`
    const { error: revertErr } = await admin.from('refund_requests')
      .update({ status: 'pending', admin_notes: note }).eq('id', id)
    logger.error('complete_refund: incomplete', { id, userId: rr.user_id, sentPaise, remainingPaise: out.remainingPaise, errors: out.errors, revertErr: revertErr?.message })
    await auditLog(admin, user!.id, 'complete_refund_partial', id)
    return NextResponse.json({
      error: `${note}. Retry, or refund the rest in the Razorpay dashboard and press "Mark refunded manually".`
        + (revertErr ? ` WARNING: could not return the request to pending (${revertErr.message}) — note this refund by hand.` : ''),
    }, { status: 502 })
  }

  if (action === 'complete_refund_manual') {
    const { data: rr, error: claimErr } = await admin.from('refund_requests')
      .update({ status: 'completed', admin_notes: `Marked refunded manually by admin${notes ? `: ${String(notes).slice(0, 300)}` : ''}` })
      .eq('id', id)
      .eq('status', 'pending')
      .select('id')
      .single()
    if (claimErr || !rr) {
      return NextResponse.json({ error: 'Refund request not found or already processed' }, { status: 404 })
    }
    await auditLog(admin, user!.id, 'complete_refund_manual', id)
    return NextResponse.json({ ok: true })
  }

  if (action === 'reject_refund') {
    const { data: rr } = await admin.from('refund_requests')
      .select('user_id, amount, razorpay_payment_id').eq('id', id).eq('status', 'pending').maybeSingle()
    if (!rr) return NextResponse.json({ error: 'Refund request not found or already processed' }, { status: 404 })

    // Rejecting returns the full amount to the wallet, so it must not happen
    // after part of it already went back as cash.
    let alreadySent = 0
    try {
      alreadySent = await razorpayAlreadyRefunded(admin, getRzp(), rr.user_id, id, rr.razorpay_payment_id ?? null)
    } catch (e) {
      return NextResponse.json({ error: `${e instanceof Error ? e.message : String(e)}. Try again.` }, { status: 502 })
    }
    if (alreadySent > 0) {
      return NextResponse.json({ error: `${rupees(alreadySent)} of this request was already refunded through Razorpay, so it can't be rejected. Finish the refund instead.` }, { status: 409 })
    }

    const { data: claimed } = await admin.from('refund_requests')
      .update({ status: 'rejected', admin_notes: `Rejected by admin${notes ? `: ${String(notes).slice(0, 300)}` : ''} — ₹${rr.amount} returned to wallet` })
      .eq('id', id).eq('status', 'pending')
      .select('id').single()
    if (!claimed) return NextResponse.json({ error: 'Refund request not found or already processed' }, { status: 404 })

    // /api/refund emptied the wallet when the request was made; give it back.
    const { error: creditErr } = await admin.rpc('credit_wallet', { p_user_id: rr.user_id, p_amount: rr.amount })
    if (creditErr) {
      await admin.from('refund_requests').update({ status: 'pending', admin_notes: null }).eq('id', id)
      logger.error('reject_refund: credit_wallet failed', { id, userId: rr.user_id, amount: rr.amount, error: creditErr.message })
      return NextResponse.json({ error: `Could not return ₹${rr.amount} to the wallet: ${creditErr.message}. Request left pending.` }, { status: 500 })
    }
    // No reference_id: /api/refund picks the latest credit reference as the Razorpay payment.
    await admin.from('wallet_transactions').insert({
      user_id: rr.user_id, amount: rr.amount, type: 'refund',
      description: 'Refund request declined — balance returned to your wallet',
    }).then(() => {}, (e) => logger.error('reject_refund: ledger insert failed (audit gap)', { id, error: String(e) }))
    await admin.from('notifications').insert({
      user_id: rr.user_id, type: 'system', title: 'Refund request declined',
      body: `Your refund request was declined and ₹${rr.amount} is back in your LeanOn wallet.`,
      action_url: '/wallet',
    }).then(() => {}, () => {})

    await auditLog(admin, user!.id, 'reject_refund', id)
    return NextResponse.json({ ok: true })
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
