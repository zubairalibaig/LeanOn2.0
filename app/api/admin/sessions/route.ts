import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase-server'
import { checkRateLimit } from '@/lib/rate-limit'
import { logger } from '@/lib/logger'
import { requireAdmin , ADMIN_ACTION_LIMIT, ADMIN_ACTION_WINDOW_MS } from '@/lib/require-admin'


// GET /api/admin/sessions — list recent sessions with optional status filter + search
export async function GET(req: NextRequest) {
  const { error, code, status, user } = await requireAdmin(req)
  if (error) return NextResponse.json({ error, code }, { status })
  if (!checkRateLimit(`admin:${user!.id}`, ADMIN_ACTION_LIMIT, ADMIN_ACTION_WINDOW_MS)) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 })
  }

  try {
    const sb = createAdminClient()
    const url = new URL(req.url)
    const statusFilter = url.searchParams.get('status') || ''
    const page = Math.max(0, parseInt(url.searchParams.get('page') || '0'))
    // sort direction: 'asc' | 'desc'
    const sortAscending = url.searchParams.get('sort') === 'asc'
    // sortBy: which column to order by across all pages.
    // 'created_at' (default) — when the session was requested.
    // 'amount'               — amount_held (listener earning proxy); lets admin
    //                          surface highest-value sessions regardless of age.
    const sortBy = url.searchParams.get('sortBy') || 'created_at'
    // search: partial match against name or phone of either participant.
    // We resolve matching user IDs first, then filter sessions by those IDs.
    const search = (url.searchParams.get('search') || '').trim()
    const PAGE_SIZE = 50

    // When a search term is given, find all user IDs whose name or phone
    // contains the term (case-insensitive). The sessions query then restricts
    // to sessions where seeker_id OR listener_id is in that set.
    let matchingUserIds: string[] | null = null
    if (search) {
      const term = `%${search}%`
      const { data: matched } = await sb
        .from('users')
        .select('id')
        .or(`name.ilike.${term},phone.ilike.${term}`)
        .limit(200)
      matchingUserIds = (matched ?? []).map((u: { id: string }) => u.id)
      // No users matched → no sessions can match; short-circuit.
      if (matchingUserIds.length === 0) {
        return NextResponse.json({ sessions: [], total: 0, page })
      }
    }

    let query = sb.from('sessions')
      .select(`
        id, seeker_id, listener_id, session_type, duration_mins,
        amount_held, status, is_free_trial, started_at, ended_at, platform_fee,
        listener_rate_per_min,
        crisis_flagged, crisis_flagged_at, created_at,
        seeker:users!seeker_id(name, phone),
        listener:users!listener_id(name, phone)
      `, { count: 'exact' })
      .order(sortBy === 'amount' ? 'amount_held' : 'created_at', { ascending: sortAscending })
      .range(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE - 1)

    if (statusFilter && statusFilter !== 'all') {
      query = query.eq('status', statusFilter)
    }

    if (matchingUserIds !== null) {
      // Sessions where the seeker OR the listener is in the matched user set.
      // Supabase OR filter: seeker_id=in.(ids) OR listener_id=in.(ids)
      const idList = matchingUserIds.join(',')
      query = query.or(`seeker_id.in.(${idList}),listener_id.in.(${idList})`)
    }

    const { data, count, error: qErr } = await query
    if (qErr) throw qErr

    // Attach listener_earnings data so the admin UI can show the accurate
    // LeanOn earning per session (₹10 seeker fee + 15% service fee) and the
    // precise listener net_amount, rather than re-computing from raw columns.
    // Old sessions (no earnings row or platform_fee = ₹10 only) return null for
    // listener_service_fee so the UI falls back to the legacy display.
    const sessionIds = (data ?? []).map((s: { id: string }) => s.id)
    let earningsMap: Record<string, { listener_service_fee: number; listener_net_amount: number }> = {}
    if (sessionIds.length > 0) {
      const { data: earnings } = await sb
        .from('listener_earnings')
        .select('session_id, platform_fee, net_amount')
        .in('session_id', sessionIds)
      for (const e of earnings ?? []) {
        if (!e.session_id) continue
        // service_fee = combined_platform_fee − seeker_platform_fee
        // (for old sessions both are ₹10 → service_fee = 0, preserving old display)
        // We don't have sessions.platform_fee here, but it's returned in the row
        // below — so we store the raw combined value and let the UI subtract.
        earningsMap[e.session_id] = {
          listener_service_fee: e.platform_fee,   // combined; UI subtracts sessions.platform_fee
          listener_net_amount:  e.net_amount,
        }
      }
    }

    const sessions = (data ?? []).map((s: { id: string; platform_fee?: number }) => {
      const e = earningsMap[s.id]
      return e
        ? {
            ...s,
            // service fee = combined_le_platform_fee − seeker's flat ₹10
            listener_service_fee: e.listener_service_fee - (s.platform_fee ?? 0),
            listener_net_amount:  e.listener_net_amount,
          }
        : { ...s, listener_service_fee: null, listener_net_amount: null }
    })

    return NextResponse.json({ sessions, total: count ?? 0, page })
  } catch (err) {
    logger.error('Admin sessions GET error:', { error: err instanceof Error ? err.message : String(err) })
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
