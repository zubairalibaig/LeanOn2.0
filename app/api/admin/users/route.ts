import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase-server'
import { logger } from '@/lib/logger'
import { requireAdmin } from '@/lib/require-admin'

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i
const PAGE_SIZE = 25


// GET — list users or listeners with pagination + filter
// Query params: ?type=user|listener&status=active|inactive|suspended|pending&page=0&search=
export async function GET(req: NextRequest) {
  const { error, code, status } = await requireAdmin(req)
  if (error) return NextResponse.json({ error, code }, { status })

  const sb = createAdminClient()
  const url = new URL(req.url)
  const type = url.searchParams.get('type') || 'user'
  const userStatus = url.searchParams.get('status') || 'all'
  const page = Math.max(0, parseInt(url.searchParams.get('page') || '0'))
  const search = url.searchParams.get('search') || ''

  try {
    if (type === 'listener') {
      // For 'pending', source of truth is listener_applications.status (not is_approved/is_active,
      // which can be ambiguous for new applicants whose is_active defaults to TRUE).
      let userIdFilter: string[] | null = null
      if (userStatus === 'pending') {
        const { data: pendingApps } = await sb.from('listener_applications')
          .select('user_id')
          .eq('status', 'pending')
        userIdFilter = pendingApps?.map((a: { user_id: string }) => a.user_id) ?? []
        if (userIdFilter.length === 0) {
          return NextResponse.json({ items: [], total: 0, page, type: 'listener' })
        }
      }

      // Try with is_verified first (added by migration 008/014).
      // Fall back without it if the column doesn't exist yet.
      const selectWithVerified = `
        user_id, bio, specialty_tags, rate_per_min, rating, total_sessions,
        is_active, is_approved, is_available, is_verified, is_suspended, created_at,
        users!inner(id, name, email, phone, created_at, is_active, is_suspended, wallet_balance)
      `
      const selectWithoutVerified = `
        user_id, bio, specialty_tags, rate_per_min, rating, total_sessions,
        is_active, is_approved, is_available, is_suspended, created_at,
        users!inner(id, name, email, phone, created_at, is_active, is_suspended, wallet_balance)
      `

      const buildQuery = (selectStr: string) => {
        let q = sb.from('listener_profiles')
          .select(selectStr, { count: 'exact' })
          .order('created_at', { ascending: false })
          .range(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE - 1)

        if (userIdFilter !== null) {
          q = q.in('user_id', userIdFilter)
        } else if (userStatus === 'active') {
          q = q.eq('is_active', true).eq('is_approved', true)
        } else if (userStatus === 'suspended') {
          q = q.eq('is_suspended', true)
        }

        if (search) {
          const safe = search.replace(/[,()*:\\%_]/g, '').slice(0, 100)
          if (safe) q = q.ilike('users.name', `%${safe}%`)
        }
        return q
      }

      let { data, count, error: qErr } = await buildQuery(selectWithVerified)
      if (qErr) {
        // Column is_verified may not exist — retry without it
        const fallback = await buildQuery(selectWithoutVerified)
        if (fallback.error) throw fallback.error
        data = fallback.data
        count = fallback.count
      }

      // Enrich each listener row with application status/notes/payment info.
      // listener_profiles and listener_applications share no direct FK, so a second query is needed.
      // admin_notes requires migration 029 — fall back gracefully if column missing.
      let items: Record<string, unknown>[] = (data ?? []) as unknown as Record<string, unknown>[]
      if (items.length > 0) {
        const userIds = items.map(p => p.user_id as string)
        const { data: appsWithNotes, error: appsErr } = await sb.from('listener_applications')
          .select('user_id, status, admin_notes, upi_id, bank_account, ifsc_code')
          .in('user_id', userIds)
        const appsData: Record<string, unknown>[] = appsWithNotes
          ? (appsWithNotes as Record<string, unknown>[])
          : appsErr
            ? ((await sb.from('listener_applications')
                .select('user_id, status, upi_id, bank_account, ifsc_code')
                .in('user_id', userIds)).data ?? []) as Record<string, unknown>[]
            : []
        const appMap = new Map(appsData.map(a => [a.user_id as string, a]))
        items = items.map(p => ({ ...p, application: appMap.get(p.user_id as string) ?? null }))
      }

      return NextResponse.json({ items, total: count ?? 0, page, type: 'listener' })
    }

    // Regular users
    let query = sb.from('users')
      .select('id, name, phone, email, created_at, is_active, is_suspended, wallet_balance, updated_at', { count: 'exact' })
      .order('created_at', { ascending: false })
      .range(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE - 1)

    if (userStatus === 'active') query = query.eq('is_active', true).eq('is_suspended', false)
    else if (userStatus === 'inactive') query = query.eq('is_active', false)
    else if (userStatus === 'suspended') query = query.eq('is_suspended', true)

    if (search) {
      const safe = search.replace(/[,()*:\\%_]/g, '').slice(0, 100)
      if (safe) query = query.or(`name.ilike.%${safe}%,phone.ilike.%${safe}%`)
    }

    const { data, count, error: qErr } = await query
    if (qErr) throw qErr
    return NextResponse.json({ items: data ?? [], total: count ?? 0, page, type: 'user' })
  } catch (err) {
    logger.error('Admin users GET error:', { error: err instanceof Error ? err.message : String(err) })
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}

// PATCH — user management actions
// Body: { userId, action: 'activate'|'deactivate'|'suspend'|'ban'|'unsuspend'|'approve_listener'|'reject_listener', notes? }
export async function PATCH(req: NextRequest) {
  const { error, code, status, user } = await requireAdmin(req)
  if (error) return NextResponse.json({ error, code }, { status })

  const { checkRateLimit } = await import('@/lib/rate-limit')
  if (!checkRateLimit(`admin:${user!.id}`, 30, 60_000)) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 })
  }

  let body: { userId?: string; action?: string; notes?: string }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const { userId, action, notes } = body
  if (!userId || !UUID_RE.test(userId)) return NextResponse.json({ error: 'Invalid userId' }, { status: 400 })

  const validActions = ['activate', 'deactivate', 'suspend', 'ban', 'unsuspend', 'approve_listener', 'reject_listener']
  if (!action || !validActions.includes(action)) return NextResponse.json({ error: 'Invalid action' }, { status: 400 })

  const sb = createAdminClient()

  try {
    switch (action) {
      case 'approve_listener': {
        // listener_profiles is the authoritative approval gate — must succeed.
        const { error: lpErr } = await sb.from('listener_profiles')
          .update({ is_approved: true, is_active: true })
          .eq('user_id', userId)
        if (lpErr) {
          logger.error('approve_listener: listener_profiles update failed', { userId, error: lpErr.message })
          return NextResponse.json({ error: `Failed to approve listener: ${lpErr.message}` }, { status: 500 })
        }
        // Sync application status so the pending filter removes this listener.
        const { error: laErr } = await sb.from('listener_applications')
          .update({ status: 'approved' })
          .eq('user_id', userId)
        if (laErr) {
          logger.warn('approve_listener: listener_applications sync failed (listener IS approved)', { userId, error: laErr.message })
          // Not fatal — profile is approved; the application row is a secondary record.
        }
        await sb.from('notifications').insert({
          user_id: userId,
          type: 'verification_update',
          title: 'Application approved!',
          body: 'Congratulations! Your listener application has been approved. Set your availability and start taking sessions.',
          action_url: '/dashboard',
        }).then(() => {}, () => {})
        break
      }

      case 'reject_listener': {
        const { error: lpErr } = await sb.from('listener_profiles')
          .update({ is_approved: false, is_active: false })
          .eq('user_id', userId)
        if (lpErr) {
          logger.error('reject_listener: listener_profiles update failed', { userId, error: lpErr.message })
          return NextResponse.json({ error: `Failed to reject listener: ${lpErr.message}` }, { status: 500 })
        }
        // Update status — critical so listener leaves the pending queue.
        const { error: laErr } = await sb.from('listener_applications')
          .update({ status: 'rejected' })
          .eq('user_id', userId)
        if (laErr) {
          logger.warn('reject_listener: listener_applications status update failed', { userId, error: laErr.message })
        }
        // Best-effort: store rejection notes (requires migration 029).
        if (notes) {
          await sb.from('listener_applications')
            .update({ admin_notes: notes })
            .eq('user_id', userId)
            .then(() => {}, () => {})
        }
        await sb.from('notifications').insert({
          user_id: userId,
          type: 'verification_update',
          title: 'Application update',
          body: notes || 'Your listener application needs revision. Please contact support for details.',
          action_url: '/become-listener/status',
        }).then(() => {}, () => {})
        break
      }

      case 'suspend':
      case 'ban': {
        const { error: uErr } = await sb.from('users')
          .update({ is_suspended: true, is_active: false })
          .eq('id', userId)
        if (uErr) {
          logger.error('suspend: users update failed', { userId, error: uErr.message })
          return NextResponse.json({ error: `Failed to suspend user: ${uErr.message}` }, { status: 500 })
        }
        // Listener profile — best-effort (user might not be a listener)
        await sb.from('listener_profiles')
          .update({ is_active: false, is_available: false, is_suspended: true })
          .eq('user_id', userId)
          .then(() => {}, () => {})
        await sb.auth.admin.signOut(userId, 'global').then(() => {}, () => {})
        break
      }

      case 'unsuspend': {
        const { error: uErr } = await sb.from('users')
          .update({ is_suspended: false, is_active: true })
          .eq('id', userId)
        if (uErr) {
          logger.error('unsuspend: users update failed', { userId, error: uErr.message })
          return NextResponse.json({ error: `Failed to unsuspend user: ${uErr.message}` }, { status: 500 })
        }
        // For listeners: restore is_active but preserve is_approved (admin must re-approve if needed).
        await sb.from('listener_profiles')
          .update({ is_active: true, is_suspended: false })
          .eq('user_id', userId)
          .then(() => {}, () => {})
        break
      }

      case 'deactivate': {
        const { error: uErr } = await sb.from('users').update({ is_active: false }).eq('id', userId)
        if (uErr) {
          logger.error('deactivate: users update failed', { userId, error: uErr.message })
          return NextResponse.json({ error: `Failed to deactivate user: ${uErr.message}` }, { status: 500 })
        }
        break
      }

      case 'activate': {
        const { error: uErr } = await sb.from('users').update({ is_active: true }).eq('id', userId)
        if (uErr) {
          logger.error('activate: users update failed', { userId, error: uErr.message })
          return NextResponse.json({ error: `Failed to activate user: ${uErr.message}` }, { status: 500 })
        }
        break
      }
    }

    await sb.from('admin_audit_logs').insert({
      admin_id: user!.id,
      action: `user_${action}`,
      target_id: userId,
    }).then(() => {}, () => {})

    return NextResponse.json({ ok: true })
  } catch (err) {
    logger.error('Admin users PATCH error:', { error: err instanceof Error ? err.message : String(err) })
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
