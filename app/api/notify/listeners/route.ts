import { NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase-server'
import { logger } from '@/lib/logger'

// In-memory flag: timestamp of last notification send
let lastNotifiedAt = 0
const COOLDOWN_MS = 5 * 60_000 // 5 minutes

// POST — notify offline listeners that a seeker is waiting
export async function POST() {
  try {
    const now = Date.now()
    if (now - lastNotifiedAt < COOLDOWN_MS) {
      return NextResponse.json({ notified: 0, reason: 'cooldown' })
    }

    const sb = createAdminClient()

    // Find all offline but active+approved listeners
    const { data: listeners } = await sb
      .from('listener_profiles')
      .select('user_id')
      .eq('is_available', false)
      .eq('is_active', true)
      .eq('is_approved', true)

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
    lastNotifiedAt = now

    logger.info('Cold-start notifications sent', { count: listeners.length })
    return NextResponse.json({ notified: listeners.length })
  } catch (err) {
    logger.error('Notify listeners error:', { error: err instanceof Error ? err.message : String(err) })
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
