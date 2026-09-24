import type { createAdminClient } from '@/lib/supabase-server'
import { sendWebPush, type WebPushMessage } from '@/lib/firebase-admin'
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

export async function getPushTokens(sb: Sb, userId: string): Promise<string[]> {
  const tokens: string[] = []
  const { data: rows, error } = await sb.from('push_tokens')
    .select('token')
    .eq('user_id', userId)
    .order('last_seen_at', { ascending: false })
    .limit(MAX_DEVICES)
  if (error && !isMissingTable(error)) logger.warn('push: push_tokens read failed', { userId, error: error.message })
  for (const r of (rows ?? []) as { token: string }[]) tokens.push(r.token)

  const { data: u } = await sb.from('users').select('fcm_token').eq('id', userId).maybeSingle()
  const legacy = (u as { fcm_token?: string | null } | null)?.fcm_token
  if (legacy && !tokens.includes(legacy)) tokens.push(legacy)
  return tokens.slice(0, MAX_DEVICES)
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
    const tokens = await getPushTokens(sb, userId)
    summary.devices = tokens.length
    const results = await Promise.all(tokens.map(t => sendWebPush(t, msg).then(r => ({ t, r }))))
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
