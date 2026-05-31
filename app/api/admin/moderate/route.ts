import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient, createAdminClient } from '@/lib/supabase-server'
import { checkRateLimit } from '@/lib/rate-limit'
import { logger } from '@/lib/logger'
import { requireAdmin } from '@/lib/require-admin'

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i


// POST /api/admin/moderate
// Body: { reportId, action: 'dismiss'|'warn'|'suspend', targetUserId? }
export async function POST(req: NextRequest) {
  const { error, status, user } = await requireAdmin()
  if (error) return NextResponse.json({ error }, { status })
  if (!checkRateLimit(`admin:${user!.id}`, 30, 60_000)) {
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

    const newStatus = action === 'dismiss' ? 'dismissed' : 'resolved'

    const { error: updateErr } = await sb.from('reports').update({
      status:      newStatus,
      resolved_by: user!.id,
      updated_at:  new Date().toISOString(),
    }).eq('id', reportId)

    if (updateErr) throw updateErr

    if (action === 'suspend' && targetUserId) {
      await sb.from('users').update({ is_suspended: true, is_active: false }).eq('id', targetUserId)
      await sb.from('listener_profiles').update({ is_active: false, is_available: false }).eq('user_id', targetUserId)
      await sb.auth.admin.signOut(targetUserId, 'global').then(() => {}, () => {})
    }

    if (action === 'warn' && targetUserId) {
      await sb.from('notifications').insert({
        user_id:    targetUserId,
        type:       'system',
        title:      'Account warning',
        body:       'Your account has received a warning for violating our community guidelines. Continued violations may result in suspension.',
        action_url: '/about',
      }).then(() => {}, () => {})
    }

    await sb.from('admin_audit_logs').insert({
      admin_id:  user!.id,
      action:    `moderate_report_${action}`,
      target_id: targetUserId ?? reportId,
    }).then(() => {}, () => {})

    return NextResponse.json({ ok: true })
  } catch (err) {
    logger.error('moderate error:', { error: err instanceof Error ? err.message : String(err) })
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}

// GET /api/admin/moderate — list reports
export async function GET(req: NextRequest) {
  const { error, status, user } = await requireAdmin()
  if (error) return NextResponse.json({ error }, { status })
  if (!checkRateLimit(`admin:${user!.id}`, 30, 60_000)) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 })
  }

  const url = new URL(req.url)
  const statusFilter = url.searchParams.get('status') || 'pending'
  const PAGE_SIZE = 20
  const page = Math.max(0, parseInt(url.searchParams.get('page') || '0', 10) || 0)

  const sb = createAdminClient()

  const { data, count } = await sb.from('reports')
    .select(`
      id, type, description, status, created_at, session_id, reported_user_id,
      reporter:users!reporter_id(name, email),
      target:users!reported_user_id(name, email)
    `, { count: 'exact' })
    .eq('status', statusFilter)
    .order('created_at', { ascending: false })
    .range(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE - 1)

  return NextResponse.json({ reports: data ?? [], total: count ?? 0, page })
}
