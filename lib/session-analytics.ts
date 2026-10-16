import type { createAdminClient } from '@/lib/supabase-server'
import { UUID_RE } from '@/lib/constants'

type Sb = ReturnType<typeof createAdminClient>

// Analytics columns from migration 071 (sessions.booked_via / talk_search_id /
// ended_by, table talk_searches). Nothing reads them to move money or decide
// availability, so every write here is a separate best-effort update that is
// silently skipped when it fails — e.g. before the migration has been run.

export type EndedBy = 'seeker' | 'listener' | 'time_up' | 'dropped'

// A session ended through /api/sessions PATCH: the booked time ran out, or the
// person calling ended it early. 30s of slack for the two devices' clocks.
export function endedByOnPatch(s: { started_at: string | null; duration_mins: number }, isSeeker: boolean): EndedBy {
  const started = s.started_at ? Date.parse(s.started_at) : NaN
  if (Number.isFinite(started) && Date.now() >= started + s.duration_mins * 60_000 - 30_000) return 'time_up'
  return isSeeker ? 'seeker' : 'listener'
}

// Closed by the cleanup/expiry job (nobody pressed End). Billed up to the
// earlier participant's last heartbeat: if that reached the booked end it was
// a full session nobody tapped out of; otherwise someone dropped off early.
export function endedByOnAbandon(s: { started_at: string | null; ended_at: string | null; duration_mins: number }): EndedBy {
  const started = s.started_at ? Date.parse(s.started_at) : NaN
  const ended = s.ended_at ? Date.parse(s.ended_at) : NaN
  if (Number.isFinite(started) && Number.isFinite(ended) && ended >= started + s.duration_mins * 60_000 - 30_000) return 'time_up'
  return 'dropped'
}

// Only the first writer wins: the session's own end, never a later call.
export async function recordEndedBy(sb: Sb, sessionId: string, endedBy: EndedBy): Promise<void> {
  await sb.from('sessions').update({ ended_by: endedBy })
    .eq('id', sessionId).is('ended_by', null)
    .then(() => {}, () => {})
}

export function validSearchId(v: unknown): string | null {
  return typeof v === 'string' && UUID_RE.test(v) ? v : null
}

export async function recordBookingSource(sb: Sb, sessionId: string, fromTalk: boolean, talkSearchId: string | null): Promise<void> {
  await sb.from('sessions')
    .update({ booked_via: fromTalk ? 'talk' : 'browse', ...(fromTalk && talkSearchId ? { talk_search_id: talkSearchId } : {}) })
    .eq('id', sessionId)
    .then(() => {}, () => {})
}

// First candidate fetch of a Talk now search. Later fetches in the same search
// (after hops) leave the row as it was.
export async function recordTalkSearch(sb: Sb, row: { id: string; seekerId: string; free: boolean; candidates: number }): Promise<void> {
  await sb.from('talk_searches')
    .upsert({ id: row.id, seeker_id: row.seekerId, free: row.free, candidates: row.candidates }, { onConflict: 'id', ignoreDuplicates: true })
    .then(() => {}, () => {})
}
