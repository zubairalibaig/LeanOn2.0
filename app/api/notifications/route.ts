import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient, createAdminClient } from '@/lib/supabase-server'
import { logger } from '@/lib/logger'

// GET /api/notifications?page=0&limit=20
export async function GET(req: NextRequest) {
  try {
    const userSb = createServerSupabaseClient()
    const { data: { user } } = await userSb.auth.getUser()
    if (!user) return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })

    const url    = new URL(req.url)
    const limit  = Math.min(50, Math.max(1, parseInt(url.searchParams.get('limit') || '20', 10) || 20))
    const page   = Math.max(0, parseInt(url.searchParams.get('page') || '0', 10) || 0)

    const sb = createAdminClient()

    const { data, count } = await sb.from('notifications')
      .select('*', { count: 'exact' })
      .eq('user_id', user.id)
      .order('created_at', { ascending: false })
      .range(page * limit, page * limit + limit - 1)

    const unreadCount = await sb.from('notifications')
      .select('id', { count: 'exact', head: true })
      .eq('user_id', user.id)
      .eq('is_read', false)
      .then(r => r.count ?? 0)

    return NextResponse.json({ notifications: data ?? [], total: count ?? 0, unreadCount, page })
  } catch (err) {
    logger.error('notifications GET error:', { error: err instanceof Error ? err.message : String(err) })
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}

// PATCH /api/notifications — mark as read
// Body: { ids?: string[], all?: boolean }
export async function PATCH(req: NextRequest) {
  try {
    const userSb = createServerSupabaseClient()
    const { data: { user } } = await userSb.auth.getUser()
    if (!user) return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })

    const { ids, all } = await req.json()
    const sb = createAdminClient()

    if (all) {
      await sb.from('notifications')
        .update({ is_read: true })
        .eq('user_id', user.id)
        .eq('is_read', false)
    } else if (Array.isArray(ids) && ids.length > 0) {
      const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i
      const validIds = ids.filter((x: unknown) => typeof x === 'string' && UUID_RE.test(x)).slice(0, 100)
      if (validIds.length > 0) {
        await sb.from('notifications')
          .update({ is_read: true })
          .eq('user_id', user.id)
          .in('id', validIds)
      }
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    logger.error('notifications PATCH error:', { error: err instanceof Error ? err.message : String(err) })
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
