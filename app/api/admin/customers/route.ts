import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase-server'
import { checkRateLimit } from '@/lib/rate-limit'
import { logger } from '@/lib/logger'
import { requireAdmin, ADMIN_ACTION_LIMIT, ADMIN_ACTION_WINDOW_MS } from '@/lib/require-admin'
import { fetchAll } from '@/lib/fetch-all'

export const dynamic = 'force-dynamic'

// GET — every paying customer: anyone who recharged or completed a paid session.
// One row per person with where their money came from and where it went, so the
// owner can follow up personally and spot test accounts or anomalies.
export async function GET(req: NextRequest) {
  const { error, code, status, user } = await requireAdmin(req)
  if (error) return NextResponse.json({ error, code }, { status })
  if (!checkRateLimit(`admin:${user!.id}`, ADMIN_ACTION_LIMIT, ADMIN_ACTION_WINDOW_MS)) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 })
  }

  try {
    const sb = createAdminClient()
    const [credits, refunds, paidSessions] = await Promise.all([
      fetchAll<{ user_id: string; amount: number; description: string | null; created_at: string }>(c =>
        c.from('wallet_transactions').select('user_id, amount, description, created_at').eq('type', 'credit').order('id'), sb),
      fetchAll<{ user_id: string; amount: number }>(c =>
        c.from('wallet_transactions').select('user_id, amount').eq('type', 'refund').order('id'), sb),
      fetchAll<{ seeker_id: string; listener_id: string; amount_held: number; created_at: string; session_type: string | null }>(c =>
        c.from('sessions').select('seeker_id, listener_id, amount_held, created_at, session_type')
          .eq('is_free_trial', false).eq('status', 'completed').order('id'), sb),
    ])

    type Row = {
      user_id: string
      recharged: number; recharges: number; first_recharge: string | null; last_recharge: string | null
      other_credits: number; refunds: number
      paid_sessions: number; booked_value: number; last_paid_session: string | null
      listeners: Set<string>; voice_sessions: number
    }
    const rows = new Map<string, Row>()
    const get = (id: string): Row => {
      let r = rows.get(id)
      if (!r) {
        r = { user_id: id, recharged: 0, recharges: 0, first_recharge: null, last_recharge: null, other_credits: 0, refunds: 0,
          paid_sessions: 0, booked_value: 0, last_paid_session: null, listeners: new Set(), voice_sessions: 0 }
        rows.set(id, r)
      }
      return r
    }

    // Customers = people who recharged or completed a paid session.
    for (const c of credits) {
      if (!/recharge/i.test(c.description ?? '')) continue
      const r = get(c.user_id)
      r.recharged += Number(c.amount ?? 0); r.recharges += 1
      if (!r.first_recharge || c.created_at < r.first_recharge) r.first_recharge = c.created_at
      if (!r.last_recharge || c.created_at > r.last_recharge) r.last_recharge = c.created_at
    }
    for (const s of paidSessions) {
      const r = get(s.seeker_id)
      r.paid_sessions += 1; r.booked_value += Number(s.amount_held ?? 0)
      r.listeners.add(s.listener_id)
      if (s.session_type === 'voice') r.voice_sessions += 1
      if (!r.last_paid_session || s.created_at > r.last_paid_session) r.last_paid_session = s.created_at
    }
    // Where else their wallet money came from (only for customers).
    for (const c of credits) {
      const r = rows.get(c.user_id)
      if (r && !/recharge/i.test(c.description ?? '')) r.other_credits += Number(c.amount ?? 0)
    }
    for (const f of refunds) { const r = rows.get(f.user_id); if (r) r.refunds += Number(f.amount ?? 0) }

    const ids = Array.from(rows.keys())
    const [usersRes, lpRes, earnRes] = ids.length ? await Promise.all([
      sb.from('users').select('id, name, phone, wallet_balance, created_at').in('id', ids),
      sb.from('listener_profiles').select('user_id, is_approved').in('user_id', ids),
      sb.from('listener_earnings').select('listener_id').in('listener_id', ids),
    ]) : [{ data: [] }, { data: [] }, { data: [] }]
    const users = new Map(((usersRes.data ?? []) as { id: string; name: string | null; phone: string | null; wallet_balance: number; created_at: string }[]).map(u => [u.id, u]))
    const listenerIds = new Set(((lpRes.data ?? []) as { user_id: string }[]).map(l => l.user_id))
    const earnerIds = new Set(((earnRes.data ?? []) as { listener_id: string }[]).map(e => e.listener_id))

    const customers = Array.from(rows.values()).map(r => {
      const u = users.get(r.user_id)
      const phone = u?.phone ?? null
      const flags: string[] = []
      if (phone?.startsWith('DELETE')) flags.push('deleted')
      if (listenerIds.has(r.user_id)) flags.push('also listener')
      if (r.recharged === 0 && r.paid_sessions > 0) flags.push('paid without recharging')
      if (r.recharged > 0 && r.paid_sessions === 0) flags.push('recharged, never used')
      // Booked more than they put in + got back: money came from elsewhere (earnings, admin credit).
      if (r.booked_value > r.recharged + r.refunds + r.other_credits + 1) flags.push('spent more than wallet inflows')
      return {
        user_id: r.user_id,
        name: u?.name ?? null,
        phone,
        joined: u?.created_at ?? null,
        wallet_balance: Number(u?.wallet_balance ?? 0),
        recharged: r.recharged, recharges: r.recharges,
        first_recharge: r.first_recharge, last_recharge: r.last_recharge,
        other_credits: r.other_credits, refunds: r.refunds, earned_as_listener: earnerIds.has(r.user_id),
        paid_sessions: r.paid_sessions, voice_sessions: r.voice_sessions,
        booked_value: r.booked_value, distinct_listeners: r.listeners.size,
        last_paid_session: r.last_paid_session,
        flags,
      }
    }).sort((a, b) => b.booked_value - a.booked_value || b.recharged - a.recharged)

    return NextResponse.json({ customers })
  } catch (err) {
    logger.error('admin customers error', { error: err instanceof Error ? err.message : String(err) })
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
