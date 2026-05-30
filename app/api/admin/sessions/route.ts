import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient, createAdminClient } from '@/lib/supabase-server'
import { logger } from '@/lib/logger'

async function requireAdmin() {
  const supabase = createServerSupabaseClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return { error: 'Unauthenticated', status: 401, user: null }
  const adminEmail = process.env.ADMIN_EMAIL
  if (adminEmail) {
    if (user.email !== adminEmail) return { error: 'Forbidden', status: 403, user: null }
  } else {
    const admin = createAdminClient()
    const { data: dbUser } = await admin.from('users').select('is_admin').eq('id', user.id).single()
    if (!dbUser?.is_admin) return { error: 'Forbidden', status: 403, user: null }
  }
  return { error: null, status: 200, user }
}

// GET /api/admin/sessions — list recent sessions with optional status filter
export async function GET(req: NextRequest) {
  const { error, status } = await requireAdmin()
  if (error) return NextResponse.json({ error }, { status })

  try {
    const sb = createAdminClient()
    const url = new URL(req.url)
    const statusFilter = url.searchParams.get('status') || ''
    const page = Math.max(0, parseInt(url.searchParams.get('page') || '0'))
    const PAGE_SIZE = 50

    let query = sb.from('sessions')
      .select(`
        id, seeker_id, listener_id, session_type, duration_mins,
        amount_held, status, is_free_trial, started_at, ended_at, platform_fee
      `, { count: 'exact' })
      .order('started_at', { ascending: false })
      .range(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE - 1)

    if (statusFilter && statusFilter !== 'all') {
      query = query.eq('status', statusFilter)
    }

    const { data, count, error: qErr } = await query
    if (qErr) throw qErr

    return NextResponse.json({ sessions: data ?? [], total: count ?? 0, page })
  } catch (err) {
    logger.error('Admin sessions GET error:', { error: err instanceof Error ? err.message : String(err) })
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
