import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase-server'
import { logger } from '@/lib/logger'

// POST — notify offline listeners that a seeker is waiting
// Auth: CRON_SECRET bearer required — this is an internal endpoint only
export async function POST(req: NextRequest) {
  const cronSecret = process.env.CRON_SECRET
  const authHeader = req.headers.get('authorization')

  if (!cronSecret || authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  try {
    const sb = createAdminClient()

    // Check last notification time via DB to be serverless-safe
    const fiveMinutesAgo = new Date(Date.now() - 5 * 60_000).toISOString()
    const { data: recentNotif } = await sb
      .from('notifications')
      .select('id')
      .eq('type', 'seeker_waiting')
      .gte('created_at', fiveMinutesAgo)
      .limit(1)
      .single()

    if (recentNotif) {
      return NextResponse.json({ notified: 0, reason: 'cooldown' })
    }

    // Find all offline but active+approved listeners
    const { data: listeners } = await sb
      .from('listener_profiles')
      .select('user_id')
      .eq('is_available', false)
      .eq('is_active', true)
      .eq('is_approved', true)
      .eq('is_suspended', false)

    if (!listeners || listeners.length === 0) {
      return NextResponse.json({ notified: 0 })
    }

    const notifications = listeners.map(l => ({
      user_id: l.user_id,
      type: 'seeker_waiting',
      title: 'Someone needs support right now',
      body: 'A seeker is looking for a listener. Log in to LeanOn and go online to connect.',
      action_url: '/dashboard',
    }))

    await sb.from('notifications').insert(notifications)

    logger.info('Cold-start notifications sent', { count: listeners.length })
    return NextResponse.json({ notified: listeners.length })
  } catch (err) {
    logger.error('Notify listeners error:', { error: err instanceof Error ? err.message : String(err) })
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
