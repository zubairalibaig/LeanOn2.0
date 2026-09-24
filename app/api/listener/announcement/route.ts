import { NextResponse } from 'next/server'
import { createServerSupabaseClient, createAdminClient } from '@/lib/supabase-server'
import { checkRateLimit } from '@/lib/rate-limit'
import { PRICING_NOTICE } from '@/lib/listener-announcements'
import { logger } from '@/lib/logger'

// POST — ensure the current listener has the pricing-update notification.
// Server-side because the live notifications table has no INSERT policy
// for users. Idempotent: at most one row per listener.
export async function POST() {
  try {
    const userSb = createServerSupabaseClient()
    const { data: { user } } = await userSb.auth.getUser()
    if (!user) return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })

    if (!checkRateLimit(`listener-announcement:${user.id}`, 5, 60_000)) {
      return NextResponse.json({ error: 'Too many requests. Please wait.' }, { status: 429 })
    }

    const sb = createAdminClient()
    const { data: lp } = await sb.from('listener_profiles').select('user_id').eq('user_id', user.id).maybeSingle()
    if (!lp) return NextResponse.json({ error: 'Not a listener' }, { status: 403 })

    const { count } = await sb.from('notifications')
      .select('id', { count: 'exact', head: true })
      .eq('user_id', user.id)
      .eq('type', PRICING_NOTICE.type)
    if (!count) {
      const { error } = await sb.from('notifications').insert({
        user_id:    user.id,
        type:       PRICING_NOTICE.type,
        title:      PRICING_NOTICE.title,
        body:       PRICING_NOTICE.body,
        action_url: PRICING_NOTICE.action_url,
      })
      if (error) throw error
    }
    return NextResponse.json({ success: true })
  } catch (err) {
    logger.error('Listener announcement error:', { error: err instanceof Error ? err.message : String(err) })
    return NextResponse.json({ error: 'Failed' }, { status: 500 })
  }
}
