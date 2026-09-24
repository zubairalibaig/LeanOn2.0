import { NextResponse } from 'next/server'
import { createServerSupabaseClient, createAdminClient } from '@/lib/supabase-server'
import { checkRateLimit } from '@/lib/rate-limit'
import { sendPushToUser } from '@/lib/push'

export const dynamic = 'force-dynamic'

// POST — send a test alert to every device of the signed-in user, through the
// exact same path a real session request uses. Lets a listener (or the owner)
// check on the actual phone that alerts arrive with the app in the background.
export async function POST() {
  const userSb = createServerSupabaseClient()
  const { data: { user } } = await userSb.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
  if (!checkRateLimit(`push-test:${user.id}`, 5, 10 * 60_000)) {
    return NextResponse.json({ error: 'Too many test alerts. Try again in a few minutes.' }, { status: 429 })
  }

  const sb = createAdminClient()
  const r = await sendPushToUser(sb, user.id, {
    title: 'LeanOn test alert 🔔',
    body: 'Alerts are working on this device. Real requests look like this.',
    url: '/dashboard',
    tag: `leanon-test-${Date.now()}`,
    ttlSecs: 120,
    urgent: true,
    data: { type: 'test' },
  })

  if (!r.configured) return NextResponse.json({ ok: false, reason: 'not_configured', ...r })
  if (r.devices === 0) return NextResponse.json({ ok: false, reason: 'no_device', ...r })
  if (r.delivered === 0) return NextResponse.json({ ok: false, reason: 'send_failed', ...r })
  return NextResponse.json({ ok: true, ...r })
}
