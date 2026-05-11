import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient, createAdminClient } from '@/lib/supabase'

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

export async function GET() {
  const { error, status } = await requireAdmin()
  if (error) return NextResponse.json({ error }, { status })

  const admin = createAdminClient()

  const { data: pendingListeners } = await admin
    .from('listener_applications')
    .select(`
      id,
      user_id,
      status,
      created_at,
      listener_profiles (
        bio,
        rate_per_min,
        specialty_tags,
        aadhaar_last4,
        bank_account,
        ifsc_code,
        phone
      ),
      users (
        name,
        email
      )
    `)
    .eq('status', 'pending')
    .order('created_at', { ascending: false })

  const { data: pendingPayouts } = await admin
    .from('payout_requests')
    .select(`
      id,
      amount,
      status,
      created_at,
      users (
        name,
        email
      )
    `)
    .eq('status', 'pending')
    .order('created_at', { ascending: false })

  return NextResponse.json({
    pendingListeners: pendingListeners || [],
    pendingPayouts: pendingPayouts || [],
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

  return NextResponse.json({ error: 'Unknown action' }, { status: 400 })
}
