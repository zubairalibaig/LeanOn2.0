import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient, createAdminClient } from '@/lib/supabase-server'
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
      let query = sb.from('listener_profiles')
        .select(`
          user_id, bio, specialty_tags, rate_per_min, rating, total_sessions,
          is_active, is_approved, is_available, is_verified, is_suspended,
          created_at,
          users!inner(id, name, email, created_at, is_active, is_suspended, wallet_balance)
        `, { count: 'exact' })
        .order('created_at', { ascending: false })
        .range(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE - 1)

      if (userStatus === 'pending') query = query.eq('is_approved', false).eq('is_active', false)
      else if (userStatus === 'active') query = query.eq('is_active', true).eq('is_approved', true)
      else if (userStatus === 'suspended') query = query.eq('is_suspended', true)

      if (search) {
        // Strip PostgREST/LIKE metacharacters before embedding in the filter,
        // consistent with the regular-users branch below.
        const safe = search.replace(/[,()*:\\%_]/g, '').slice(0, 100)
        if (safe) query = query.ilike('users.name', `%${safe}%`)
      }

      const { data, count, error: qErr } = await query
      if (qErr) throw qErr
      return NextResponse.json({ items: data ?? [], total: count ?? 0, page, type: 'listener' })
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
      // Strip PostgREST filter metacharacters to prevent filter injection via .or()
      const safe = search.replace(/[,()*:\\]/g, '').slice(0, 100)
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
      case 'approve_listener':
        await sb.from('listener_profiles').update({ is_approved: true, is_active: true }).eq('user_id', userId)
        await sb.from('listener_applications').update({ status: 'approved' }).eq('user_id', userId).then(() => {}, () => {})
        await sb.from('notifications').insert({
          user_id: userId,
          type: 'verification_update',
          title: 'Application approved!',
          body: 'Congratulations! Your listener application has been approved. Set your availability and start taking sessions.',
          action_url: '/dashboard',
        }).then(() => {}, () => {})
        break

      case 'reject_listener':
        await sb.from('listener_profiles').update({ is_approved: false, is_active: false }).eq('user_id', userId)
        await sb.from('listener_applications').update({ status: 'rejected' }).eq('user_id', userId).then(() => {}, () => {})
        await sb.from('notifications').insert({
          user_id: userId,
          type: 'verification_update',
          title: 'Application update',
          body: notes || 'Your listener application needs revision. Please contact support for details.',
          action_url: '/become-listener/status',
        }).then(() => {}, () => {})
        break

      case 'suspend':
      case 'ban':
        await sb.from('users').update({ is_suspended: true, is_active: false }).eq('id', userId)
        await sb.from('listener_profiles').update({ is_active: false, is_available: false, is_suspended: true }).eq('user_id', userId)
        await sb.auth.admin.signOut(userId, 'global').then(() => {}, () => {})
        break

      case 'unsuspend':
        await sb.from('users').update({ is_suspended: false, is_active: true }).eq('id', userId)
        await sb.from('listener_profiles').update({ is_active: true, is_suspended: false }).eq('user_id', userId)
        break

      case 'deactivate':
        await sb.from('users').update({ is_active: false }).eq('id', userId)
        break

      case 'activate':
        await sb.from('users').update({ is_active: true }).eq('id', userId)
        break
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
