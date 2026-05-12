import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient, createAdminClient } from '@/lib/supabase-server'

async function requireAdmin() {
  const supabase = createServerSupabaseClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return { error: 'Unauthenticated', status: 401, user: null }

  // Check admin by email env var or is_admin column
  const adminEmail = process.env.ADMIN_EMAIL
  if (adminEmail) {
    if (user.email !== adminEmail) return { error: 'Forbidden', status: 403, user: null }
  } else {
    const admin = createAdminClient()
    const { data: dbUser } = await admin
      .from('users')
      .select('is_admin')
      .eq('id', user.id)
      .single()
    if (!dbUser?.is_admin) return { error: 'Forbidden', status: 403, user: null }
  }

  return { error: null, status: 200, user }
}

const PAGE_SIZE = 20

export async function GET(req: NextRequest) {
  const { error, status } = await requireAdmin()
  if (error) return NextResponse.json({ error }, { status })

  const url    = new URL(req.url)
  const lpPage = parseInt(url.searchParams.get('lpPage') || '0')
  const prPage = parseInt(url.searchParams.get('prPage') || '0')
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

export async function POST(req: NextRequest) {
  const { error, status } = await requireAdmin()
  if (error) return NextResponse.json({ error }, { status })

  const body = await req.json()
  const { action, id } = body as { action: string; id: string }

  if (!action || !id) {
    return NextResponse.json({ error: 'Missing action or id' }, { status: 400 })
  }

  const admin = createAdminClient()

  if (action === 'approve_listener') {
    const [r1, r2] = await Promise.all([
      admin
        .from('listener_profiles')
        .update({ is_approved: true })
        .eq('user_id', id),
      admin
        .from('listener_applications')
        .update({ status: 'approved' })
        .eq('user_id', id),
    ])
    if (r1.error) return NextResponse.json({ error: r1.error.message }, { status: 500 })
    if (r2.error) return NextResponse.json({ error: r2.error.message }, { status: 500 })
    return NextResponse.json({ ok: true })
  }

  if (action === 'reject_listener') {
    const { error: err } = await admin
      .from('listener_applications')
      .update({ status: 'rejected' })
      .eq('user_id', id)
    if (err) return NextResponse.json({ error: err.message }, { status: 500 })
    return NextResponse.json({ ok: true })
  }

  if (action === 'complete_payout') {
    const { error: err } = await admin
      .from('payout_requests')
      .update({ status: 'completed' })
      .eq('id', id)
    if (err) return NextResponse.json({ error: err.message }, { status: 500 })
    return NextResponse.json({ ok: true })
  }

  if (action === 'deactivate_user') {
    await admin.from('users').update({ is_active: false }).eq('id', id)
    await admin.from('listener_profiles').update({ is_active: false, is_available: false }).eq('user_id', id)
    await admin.auth.admin.signOut(id, 'global')
    return NextResponse.json({ ok: true })
  }

  if (action === 'complete_refund') {
    await admin.from('refund_requests').update({ status: 'completed' }).eq('id', id)
    // Zero out the user's wallet after refund is processed
    const { data: rr } = await admin.from('refund_requests').select('user_id, amount').eq('id', id).single()
    if (rr) {
      await admin.from('users').update({ wallet_balance: 0 }).eq('id', rr.user_id)
      await admin.from('wallet_transactions').insert({ user_id: rr.user_id, amount: -rr.amount, type: 'debit', description: 'Wallet refund processed' })
    }
    return NextResponse.json({ ok: true })
  }

  if (action === 'reactivate_user') {
    await admin.from('users').update({ is_active: true }).eq('id', id)
    await admin.from('listener_profiles').update({ is_active: true }).eq('user_id', id)
    return NextResponse.json({ ok: true })
  }

  return NextResponse.json({ error: 'Unknown action' }, { status: 400 })
}
