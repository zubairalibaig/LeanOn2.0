import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase-server'
import { checkRateLimit } from '@/lib/rate-limit'
import { requireAdmin, ADMIN_ACTION_LIMIT, ADMIN_ACTION_WINDOW_MS } from '@/lib/require-admin'

export const dynamic = 'force-dynamic'

export async function GET(req: NextRequest) {
  const { error, code, status, user } = await requireAdmin(req)
  if (error) return NextResponse.json({ error, code }, { status })
  if (!checkRateLimit(`admin:${user!.id}`, ADMIN_ACTION_LIMIT, ADMIN_ACTION_WINDOW_MS)) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 })
  }

  const sb = createAdminClient()

  const [sessionsRes, usersRes] = await Promise.all([
    sb.from('sessions')
      .select('id, listener_id, seeker_id, session_type, duration_mins, status, is_free_trial, started_at, ended_at')
      .in('status', ['completed', 'active']),
    sb.from('users').select('id, name'),
  ])

  const sessions = sessionsRes.data ?? []
  const userMap = new Map((usersRes.data ?? []).map(u => [u.id as string, u.name as string]))

  type ListenerStats = {
    paid_sessions: number
    seeker_counts: Map<string, number>
    free_trials: number
    silent_sessions: number   // voice completed, actual duration < 2 min
    total_duration_secs: number
    completed_count: number
  }

  const listenerMap = new Map<string, ListenerStats>()
  const ensure = (id: string): ListenerStats => {
    if (!listenerMap.has(id)) listenerMap.set(id, {
      paid_sessions: 0, seeker_counts: new Map(), free_trials: 0,
      silent_sessions: 0, total_duration_secs: 0, completed_count: 0,
    })
    return listenerMap.get(id)!
  }

  for (const s of sessions) {
    if (!s.listener_id) continue
    const ls = ensure(s.listener_id as string)

    const actualSecs = s.started_at && s.ended_at
      ? (new Date(s.ended_at as string).getTime() - new Date(s.started_at as string).getTime()) / 1000
      : null

    if (s.is_free_trial) {
      ls.free_trials++
    } else {
      ls.paid_sessions++
      if (s.seeker_id) {
        ls.seeker_counts.set(s.seeker_id as string, (ls.seeker_counts.get(s.seeker_id as string) ?? 0) + 1)
      }
    }

    if (s.status === 'completed') {
      ls.completed_count++
      if (actualSecs !== null) ls.total_duration_secs += actualSecs
      // Silent session: voice call that ended in under 2 minutes (listener accepted but didn't engage)
      if (s.session_type === 'voice' && !s.is_free_trial) {
        if (actualSecs === null || actualSecs < 120) {
          ls.silent_sessions++
        }
      }
    }
  }

  const listeners = Array.from(listenerMap.entries())
    .map(([id, ls]) => {
      const repeatSeekers = Array.from(ls.seeker_counts.values()).filter(c => c >= 3).length
      const total = ls.paid_sessions + ls.free_trials
      return {
        listener_id: id,
        name: userMap.get(id) ?? '—',
        paid_sessions: ls.paid_sessions,
        unique_paid_seekers: ls.seeker_counts.size,
        repeat_seekers: repeatSeekers,
        free_trials: ls.free_trials,
        conversion_pct: total > 0 ? Math.round(ls.paid_sessions / total * 100) : 0,
        silent_sessions: ls.silent_sessions,
        avg_duration_mins: ls.completed_count > 0
          ? Math.round(ls.total_duration_secs / ls.completed_count / 60)
          : 0,
      }
    })
    .sort((a, b) => b.paid_sessions - a.paid_sessions)

  // Top repeat seeker-listener pairs (paid sessions only)
  type Pair = { seeker_id: string; listener_id: string; count: number }
  const pairMap = new Map<string, Pair>()
  for (const s of sessions) {
    if (!s.is_free_trial && s.status === 'completed' && s.seeker_id && s.listener_id) {
      const key = `${s.seeker_id}:${s.listener_id}`
      const p = pairMap.get(key) ?? { seeker_id: s.seeker_id as string, listener_id: s.listener_id as string, count: 0 }
      p.count++
      pairMap.set(key, p)
    }
  }

  const repeatPairs = Array.from(pairMap.values())
    .filter(p => p.count >= 3)
    .sort((a, b) => b.count - a.count)
    .slice(0, 30)
    .map(p => ({
      seeker_name: userMap.get(p.seeker_id) ?? '—',
      listener_name: userMap.get(p.listener_id) ?? '—',
      count: p.count,
    }))

  return NextResponse.json({ listeners, repeatPairs })
}
