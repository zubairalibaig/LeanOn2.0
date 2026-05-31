import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase-server'
import { checkRateLimit } from '@/lib/rate-limit'
import { logger } from '@/lib/logger'
import { requireAdmin } from '@/lib/require-admin'

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

  const [{ data: pendingListeners, count: lpCount }, { data: pendingPayouts, count: prCount }, { data: refundRequests }] = await Promise.all([
    admin
      .from('listener_applications')
      .select(`id, user_id, status, created_at,
        listener_profiles ( bio, rate_per_min, specialty_tags, aadhaar_last4, bank_account, ifsc_code, phone ),
        users ( name, email )`, { count: 'exact' })
      .eq('status', 'pending')
      .order('created_at', { ascending: false })
      .range(lpPage * PAGE_SIZE, lpPage * PAGE_SIZE + PAGE_SIZE - 1),

    admin
      .from('payout_requests')
      .select(`id, amount, status, created_at, users ( name, email )`, { count: 'exact' })
      .eq('status', 'pending')
      .order('created_at', { ascending: false })
      .range(prPage * PAGE_SIZE, prPage * PAGE_SIZE + PAGE_SIZE - 1),

    admin
      .from('refund_requests')
      .select(`id, amount, reason, status, created_at, users ( name, email )`)
      .eq('status', 'pending')
      .order('created_at', { ascending: false })
      .limit(50),
  ])

  return NextResponse.json({
    pendingListeners: pendingListeners || [],
    lpTotal: lpCount ?? 0,
    lpPage,
    pendingPayouts: pendingPayouts || [],
    prTotal: prCount ?? 0,
    prPage,
    refundRequests: refundRequests || [],
  })
}

async function auditLog(admin: ReturnType<typeof createAdminClient>, adminId: string, action: string, targetId: string) {
  try { await admin.from('admin_audit_logs').insert({ admin_id: adminId, action, target_id: targetId }) } catch {}
}

export async function POST(req: NextRequest) {
  const { error, status, user } = await requireAdmin(req)
  if (error) return NextResponse.json({ error }, { status })
  if (!checkRateLimit(`admin:${user!.id}`, ADMIN_RATE.limit, ADMIN_RATE.windowMs)) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 })
  }

  const body = await req.json()
  const { action, id } = body as { action: string; id: string }

  if (!action || !id) {
    return NextResponse.json({ error: 'Missing action or id' }, { status: 400 })
  }

  const ALLOWED_ACTIONS = [
    'approve_listener', 'reject_listener', 'deactivate_user', 'reactivate_user',
    'complete_payout', 'complete_refund',
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
    if (r1.error) return NextResponse.json({ error: r1.error.message }, { status: 500 })
    if (r2.error) return NextResponse.json({ error: r2.error.message }, { status: 500 })
    await auditLog(admin, user!.id, 'approve_listener', id)
    return NextResponse.json({ ok: true })
  }

  if (action === 'reject_listener') {
    const { error: err } = await admin.from('listener_applications').update({ status: 'rejected' }).eq('user_id', id)
    if (err) return NextResponse.json({ error: err.message }, { status: 500 })
    await auditLog(admin, user!.id, 'reject_listener', id)
    return NextResponse.json({ ok: true })
  }

  if (action === 'complete_payout') {
    // First fetch so we have user_id/amount for the deduction
    const { data: pr } = await admin.from('payout_requests')
      .select('user_id, amount')
      .eq('id', id)
      .eq('status', 'pending')
      .single()

    if (!pr) return NextResponse.json({ error: 'Payout request not found or already processed' }, { status: 404 })

    // Deduct wallet BEFORE marking complete.
    // If deduct fails the record stays 'pending' and the admin can retry safely.
    const { error: deductErr } = await admin.rpc('deduct_wallet', { p_user_id: pr.user_id, p_amount: pr.amount })
    if (deductErr) {
      logger.error('deduct_wallet failed for payout — aborting status change:', { id, deductErr: deductErr as unknown })
      return NextResponse.json({ error: 'Wallet deduction failed. Please retry.' }, { status: 500 })
    }

    // Use the UPDATE as an optimistic lock (eq status='pending') to prevent double-processing
    const { error: err } = await admin.from('payout_requests')
      .update({ status: 'completed' }).eq('id', id).eq('status', 'pending')
    if (err) return NextResponse.json({ error: err.message }, { status: 500 })

    await admin.from('wallet_transactions').insert({
      user_id: pr.user_id, amount: pr.amount, type: 'debit', description: 'Payout disbursed',
    })

    await auditLog(admin, user!.id, 'complete_payout', id)
    return NextResponse.json({ ok: true })
  }

  if (action === 'deactivate_user') {
    await admin.from('users').update({ is_active: false }).eq('id', id)
    await admin.from('listener_profiles').update({ is_active: false, is_available: false }).eq('user_id', id)
    await admin.auth.admin.signOut(id, 'global')
    await auditLog(admin, user!.id, 'deactivate_user', id)
    return NextResponse.json({ ok: true })
  }

  if (action === 'complete_refund') {
    const { data: rr } = await admin.from('refund_requests')
      .select('user_id, amount')
      .eq('id', id)
      .eq('status', 'pending')
      .single()

    if (!rr) return NextResponse.json({ error: 'Refund request not found or already processed' }, { status: 404 })

    // Deduct wallet BEFORE marking complete — same pattern as complete_payout.
    // If deduct fails the record stays 'pending' so the admin can retry.
    const { error: deductErr } = await admin.rpc('deduct_wallet', { p_user_id: rr.user_id, p_amount: rr.amount })
    if (deductErr) {
      logger.error('deduct_wallet failed for refund — aborting status change:', { id, deductErr: deductErr as unknown })
      return NextResponse.json({ error: 'Wallet deduction failed. Please retry.' }, { status: 500 })
    }

    await admin.from('refund_requests')
      .update({ status: 'completed' }).eq('id', id).eq('status', 'pending')

    await admin.from('wallet_transactions').insert({
      user_id: rr.user_id, amount: rr.amount, type: 'debit', description: 'Wallet refund processed',
    })

    await auditLog(admin, user!.id, 'complete_refund', id)
    return NextResponse.json({ ok: true })
  }

  if (action === 'reactivate_user') {
    await admin.from('users').update({ is_active: true }).eq('id', id)
    await admin.from('listener_profiles').update({ is_active: true }).eq('user_id', id)
    await auditLog(admin, user!.id, 'reactivate_user', id)
    return NextResponse.json({ ok: true })
  }

  return NextResponse.json({ error: 'Unknown action' }, { status: 400 })
}
