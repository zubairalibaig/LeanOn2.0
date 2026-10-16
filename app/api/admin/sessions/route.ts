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
        cancel_reason, seeker_last_seen, listener_last_seen,
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
    // LeanOn earning per session (₹10 seeker fee + listener service fee) and the
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

    // Separate read so the tab keeps working before migration 066 adds the column.
    const pushMap: Record<string, unknown> = {}
    if (sessionIds.length > 0) {
      const { data: pushRows, error: pushErr } = await sb.from('sessions').select('id, request_push').in('id', sessionIds)
      if (!pushErr) for (const r of (pushRows ?? []) as { id: string; request_push: unknown }[]) pushMap[r.id] = r.request_push ?? null
    }

    // Talk now vs /browse, the hop number within a Talk now search, and how the
    // session ended (migration 071; separate read so the tab keeps working before it's run).
    const sourceMap: Record<string, { booked_via: string | null; ended_by: string | null; talk_hop: number | null }> = {}
    if (sessionIds.length > 0) {
      const { data: srcRows, error: srcErr } = await sb.from('sessions').select('id, booked_via, talk_search_id, ended_by').in('id', sessionIds)
      if (!srcErr) {
        const rows = (srcRows ?? []) as { id: string; booked_via: string | null; talk_search_id: string | null; ended_by: string | null }[]
        const searchIds = Array.from(new Set(rows.map(r => r.talk_search_id).filter((v): v is string => !!v)))
        const hopOf: Record<string, number> = {}
        if (searchIds.length > 0) {
          const { data: hops } = await sb.from('sessions').select('id, talk_search_id, created_at')
            .in('talk_search_id', searchIds).order('created_at', { ascending: true }).limit(5000)
          const seen: Record<string, number> = {}
          for (const h of (hops ?? []) as { id: string; talk_search_id: string }[]) {
            seen[h.talk_search_id] = (seen[h.talk_search_id] ?? 0) + 1
            hopOf[h.id] = seen[h.talk_search_id]
          }
        }
        for (const r of rows) sourceMap[r.id] = { booked_via: r.booked_via, ended_by: r.ended_by, talk_hop: hopOf[r.id] ?? null }
      }
    }

    // Why a listener with no device never registered (migration 069; separate
    // read so the tab keeps working before it's run).
    const noDeviceListeners = Array.from(new Set((data ?? [])
      .filter((s: { id: string }) => Number((pushMap[s.id] as { devices?: unknown } | null)?.devices) === 0)
      .map((s: { listener_id?: string }) => s.listener_id)
      .filter((v): v is string => typeof v === 'string')))
    const pushErrMap: Record<string, { error: string; at: string | null }> = {}
    if (noDeviceListeners.length > 0) {
      const { data: errRows, error: errReadErr } = await sb.from('users')
        .select('id, push_last_error, push_last_error_at').in('id', noDeviceListeners)
      if (!errReadErr) for (const r of (errRows ?? []) as { id: string; push_last_error: string | null; push_last_error_at: string | null }[]) {
        if (r.push_last_error) pushErrMap[r.id] = { error: r.push_last_error, at: r.push_last_error_at }
      }
    }

    const sessions = (data ?? []).map((s: { id: string; platform_fee?: number; listener_id?: string }) => {
      const e = earningsMap[s.id]
      const withPush = { ...s, ...(sourceMap[s.id] ?? { booked_via: null, ended_by: null, talk_hop: null }), request_push: pushMap[s.id] ?? null, listener_push_error: (s.listener_id && pushErrMap[s.listener_id]) || null }
      return e
        ? {
            ...withPush,
            // service fee = combined_le_platform_fee − seeker's flat ₹10
            listener_service_fee: e.listener_service_fee - (s.platform_fee ?? 0),
            listener_net_amount:  e.listener_net_amount,
          }
        : { ...withPush, listener_service_fee: null, listener_net_amount: null }
    })

    return NextResponse.json({ sessions, total: count ?? 0, page })
  } catch (err) {
    logger.error('Admin sessions GET error:', { error: err instanceof Error ? err.message : String(err) })
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
