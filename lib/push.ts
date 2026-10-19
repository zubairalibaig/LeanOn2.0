import type { createAdminClient } from '@/lib/supabase-server'
import { sendWebPush, sendNativePush, NATIVE_ANDROID_MARK, getFirebaseAdmin, type WebPushMessage } from '@/lib/firebase-admin'
import { logger } from '@/lib/logger'

type Sb = ReturnType<typeof createAdminClient>

// ── Push delivery to a user's devices ────────────────────────────────────────
//
// Tokens live in `push_tokens` (migration 061: one row per browser/device, so a
// listener's phone AND laptop both ring). Before that migration is run — and
// for tokens saved by older app versions — the single `users.fcm_token` column
// is used too. Both sources are merged and de-duplicated.
//
// A token belongs to exactly ONE user: registering it moves it to whoever is
// signed in on that device now (see /api/push/register), so a shared phone
// never rings for the previous account's requests.

const MAX_DEVICES = 5

function isMissingTable(err: { code?: string; message?: string } | null): boolean {
  if (!err) return false
  return err.code === '42P01' || err.code === 'PGRST205' || /push_tokens/.test(err.message ?? '')
}

// `native` = a LeanOn Android app install (mobile/), marked at registration
// (/api/push/register with kind 'android_app'); everything else is web push.
export type PushTarget = { token: string; native: boolean }

export async function getPushTargets(sb: Sb, userId: string): Promise<PushTarget[]> {
  const targets: PushTarget[] = []
  const { data: rows, error } = await sb.from('push_tokens')
    .select('token, user_agent')
    .eq('user_id', userId)
    .order('last_seen_at', { ascending: false })
    .limit(MAX_DEVICES)
  if (error && !isMissingTable(error)) logger.warn('push: push_tokens read failed', { userId, error: error.message })
  for (const r of (rows ?? []) as { token: string; user_agent: string | null }[]) {
    targets.push({ token: r.token, native: (r.user_agent ?? '').startsWith(NATIVE_ANDROID_MARK) })
  }

  // Legacy single-token column. The app's token is copied there too, so only
  // add it when push_tokens doesn't already know it (then it is a web token).
  const { data: u } = await sb.from('users').select('fcm_token').eq('id', userId).maybeSingle()
  const legacy = (u as { fcm_token?: string | null } | null)?.fcm_token
  if (legacy && !targets.some(t => t.token === legacy)) targets.push({ token: legacy, native: false })
  return targets.slice(0, MAX_DEVICES)
}

export async function getPushTokens(sb: Sb, userId: string): Promise<string[]> {
  return (await getPushTargets(sb, userId)).map(t => t.token)
}

// Which of these users can probably be reached by push: a device token that
// was re-confirmed recently. The app re-registers its token on every open
// (lib/firebase-client.ts), so a token not seen for REACHABLE_WITHIN_DAYS
// belongs to a device the listener no longer uses. Decides "away mode" in
// lib/listener-presence.ts. (users.fcm_token alone doesn't count — every such
// token was copied into push_tokens by migration 061.)
const REACHABLE_WITHIN_DAYS = 3

export async function pushReachableUserIds(sb: Sb, userIds: string[]): Promise<Set<string>> {
  const reachable = new Set<string>()
  if (userIds.length === 0) return reachable
  // No server push credentials → nobody can be reached by push, whatever tokens exist.
  if (!getFirebaseAdmin()) return reachable
  const since = new Date(Date.now() - REACHABLE_WITHIN_DAYS * 24 * 60 * 60_000).toISOString()
  const { data: rows, error } = await sb.from('push_tokens').select('user_id')
    .in('user_id', userIds).gte('last_seen_at', since)
  if (error) logger.warn('push: reachability read failed', { error: error.message })
  for (const r of (rows ?? []) as { user_id: string }[]) reachable.add(r.user_id)
  return reachable
}

export async function removePushToken(sb: Sb, token: string) {
  await sb.from('push_tokens').delete().eq('token', token).then(() => {}, () => {})
  await sb.from('users').update({ fcm_token: null }).eq('fcm_token', token).then(() => {}, () => {})
}

export type PushSummary = {
  configured: boolean
  devices: number
  delivered: number
  errors: string[]
}

// Send one message to every device of a user. Never throws. Tokens that FCM
// reports as dead (app uninstalled, permission revoked, site data cleared) are
// removed so they stop masking the fact that this user has no working device.
export async function sendPushToUser(sb: Sb, userId: string, msg: WebPushMessage): Promise<PushSummary> {
  const summary: PushSummary = { configured: true, devices: 0, delivered: 0, errors: [] }
  try {
    const targets = await getPushTargets(sb, userId)
    summary.devices = targets.length
    const results = await Promise.all(targets.map(({ token: t, native }) =>
      (native ? sendNativePush(t, msg) : sendWebPush(t, msg)).then(r => ({ t, r }))))
    for (const { t, r } of results) {
      if (r.ok) { summary.delivered++; continue }
      if (r.code === 'fcm_not_configured') { summary.configured = false; continue }
      summary.errors.push(r.code)
      if (r.tokenDead) await removePushToken(sb, t)
    }
  } catch (e) {
    summary.errors.push(e instanceof Error ? e.message : String(e))
  }
  return summary
}

// A request the listener was alerted about has been withdrawn by the seeker
// (Talk now moved on, Cancel, left the page, or it ran out of time). Replace
// the ringing notification on their devices — same tag — with a silent
// "withdrawn" note that public/sw.js clears after a few seconds, so a stale
// alert can't send them to an empty dashboard. Never throws.
export async function sendRequestWithdrawn(sb: Sb, listenerId: string, sessionId: string): Promise<void> {
  try {
    await sendPushToUser(sb, listenerId, {
      title: 'Request withdrawn',
      body: 'The seeker was connected with someone else or cancelled. No action needed.',
      url: '/dashboard',
      tag: `leanon-req-${sessionId}`,
      ttlSecs: 300,
      urgent: false,
      data: { sessionId, type: 'request_closed' },
    })
  } catch { /* best effort */ }
}
