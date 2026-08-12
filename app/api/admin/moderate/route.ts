import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase-server'
import { checkRateLimit } from '@/lib/rate-limit'
import { logger } from '@/lib/logger'
import { requireAdmin, dbUserIdOrNull , ADMIN_ACTION_LIMIT, ADMIN_ACTION_WINDOW_MS } from '@/lib/require-admin'

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i


// POST /api/admin/moderate
// Body: { reportId, action: 'dismiss'|'warn'|'suspend', targetUserId? }
export async function POST(req: NextRequest) {
  const { error, code, status, user } = await requireAdmin(req)
  if (error) return NextResponse.json({ error, code }, { status })
  if (!checkRateLimit(`admin:${user!.id}`, ADMIN_ACTION_LIMIT, ADMIN_ACTION_WINDOW_MS)) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 })
  }

  try {
    const { reportId, action, targetUserId } = await req.json()

    if (!reportId || !UUID_RE.test(reportId)) {
      return NextResponse.json({ error: 'Invalid reportId' }, { status: 400 })
    }
    if (!['dismiss', 'warn', 'suspend'].includes(action)) {
      return NextResponse.json({ error: 'Invalid action' }, { status: 400 })
    }
    if (targetUserId && !UUID_RE.test(targetUserId)) {
      return NextResponse.json({ error: 'Invalid targetUserId' }, { status: 400 })
    }

    const sb = createAdminClient()

    // Fetch the report so warn/suspend can resolve a target even when the
    // report was filed against a session (reported_user_id null) — the target
    // is the session party who is NOT the reporter.
    const { data: report, error: reportErr } = await sb.from('reports')
      .select('reporter_id, reported_user_id, session_id')
      .eq('id', reportId)
      .single()
    if (reportErr || !report) {
      return NextResponse.json({ error: 'Report not found' }, { status: 404 })
    }

    let target: string | null = targetUserId ?? report.reported_user_id ?? null
    if (!target && report.session_id && action !== 'dismiss') {
      const { data: s } = await sb.from('sessions')
        .select('seeker_id, listener_id')
        .eq('id', report.session_id)
        .single()
      if (s) target = s.seeker_id === report.reporter_id ? s.listener_id : s.seeker_id
    }
    if (action !== 'dismiss' && !target) {
      return NextResponse.json({ error: 'Could not determine which user to act on for this report' }, { status: 400 })
    }

    const newStatus = action === 'dismiss' ? 'dismissed' : 'resolved'

    const { error: updateErr } = await sb.from('reports').update({
      status:      newStatus,
      // resolved_by has an FK to users(id) — the synthetic password-admin id
      // would violate it and fail the whole update.
      resolved_by: dbUserIdOrNull(user!.id),
      updated_at:  new Date().toISOString(),
    }).eq('id', reportId)

    if (updateErr) throw updateErr

    if (action === 'suspend' && target) {
      const { error: suspendErr } = await sb.from('users')
        .update({ is_suspended: true, is_active: false })
        .eq('id', target)
      if (suspendErr) throw suspendErr
      await sb.from('listener_profiles')
        .update({ is_active: false, is_available: false, is_suspended: true })
        .eq('user_id', target)
        .then(() => {}, () => {})
      await sb.auth.admin.signOut(target, 'global').then(() => {}, () => {})
    }

    if (action === 'warn' && target) {
      await sb.from('notifications').insert({
        user_id:    target,
        type:       'system',
        title:      'Account warning',
        body:       'Your account has received a warning for violating our community guidelines. Continued violations may result in suspension.',
        action_url: '/about',
      }).then(() => {}, () => {})
    }

    await sb.from('admin_audit_logs').insert({
      admin_id:  dbUserIdOrNull(user!.id),
      action:    `moderate_report_${action}`,
      target_id: target ?? reportId,
    }).then(() => {}, () => {})

    return NextResponse.json({ ok: true })
  } catch (err) {
    logger.error('moderate error:', { error: err instanceof Error ? err.message : String(err) })
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}

// GET /api/admin/moderate — list reports
export async function GET(req: NextRequest) {
  const { error, code, status, user } = await requireAdmin(req)
  if (error) return NextResponse.json({ error, code }, { status })
  if (!checkRateLimit(`admin:${user!.id}`, ADMIN_ACTION_LIMIT, ADMIN_ACTION_WINDOW_MS)) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 })
  }

  const url = new URL(req.url)
  const statusFilter = url.searchParams.get('status') || 'pending'
  if (!['pending', 'reviewed', 'resolved', 'dismissed'].includes(statusFilter)) {
    return NextResponse.json({ error: 'Invalid status filter' }, { status: 400 })
  }
  const PAGE_SIZE = 20
  const page = Math.max(0, parseInt(url.searchParams.get('page') || '0', 10) || 0)

  const sb = createAdminClient()

  const { data, count, error: qErr } = await sb.from('reports')
    .select(`
      id, type, description, status, created_at, session_id, reported_user_id,
      reporter:users!reporter_id(name, email),
      target:users!reported_user_id(name, email)
    `, { count: 'exact' })
    .eq('status', statusFilter)
    .order('created_at', { ascending: false })
    .range(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE - 1)

  if (qErr) {
    logger.error('moderate GET error:', { error: qErr.message })
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }

  return NextResponse.json({ reports: data ?? [], total: count ?? 0, page })
}
