import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase-server'
import { checkRateLimit } from '@/lib/rate-limit'
import { logger } from '@/lib/logger'
import { requireAdmin } from '@/lib/require-admin'


// GET /api/admin/sessions — list recent sessions with optional status filter
export async function GET(req: NextRequest) {
  const { error, code, status, user } = await requireAdmin(req)
  if (error) return NextResponse.json({ error, code }, { status })
  if (!checkRateLimit(`admin:${user!.id}`, 30, 60_000)) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 })
  }

  try {
    const sb = createAdminClient()
    const url = new URL(req.url)
    const statusFilter = url.searchParams.get('status') || ''
    const page = Math.max(0, parseInt(url.searchParams.get('page') || '0'))
    const PAGE_SIZE = 50

    let query = sb.from('sessions')
      .select(`
        id, seeker_id, listener_id, session_type, duration_mins,
        amount_held, status, is_free_trial, started_at, ended_at, platform_fee,
        crisis_flagged, crisis_flagged_at,
        seeker:users!seeker_id(name),
        listener:users!listener_id(name)
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
