import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase-server'
import { checkRateLimit } from '@/lib/rate-limit'
import { logger } from '@/lib/logger'
import { requireAdmin } from '@/lib/require-admin'

// Never statically cache or revalidate — KPI counts (incl. online listeners)
// must always reflect the live DB, not a cached snapshot.
export const dynamic = 'force-dynamic'

export async function GET(req: NextRequest) {
  const { error, code, status, user } = await requireAdmin(req)
  if (error) return NextResponse.json({ error, code }, { status })
  if (!checkRateLimit(`admin:${user!.id}`, 30, 60_000)) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 })
  }

  try {
    const sb = createAdminClient()
    const now = new Date()
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate()).toISOString()
    const thisMonth = new Date(now.getFullYear(), now.getMonth(), 1).toISOString()
    const last30Days = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000).toISOString()

    // Use Promise.allSettled so a missing/errored table doesn't crash the whole response.
    // Auth has already been verified above — we never want a DB hiccup to look like a login failure.
    const results = await Promise.allSettled([
      // User KPIs
      sb.from('users').select('id', { count: 'exact', head: true }),
      sb.from('users').select('id', { count: 'exact', head: true }).eq('is_active', true).gte('updated_at', last30Days),
      sb.from('users').select('id', { count: 'exact', head: true }).gte('created_at', today),
      sb.from('users').select('id', { count: 'exact', head: true }).gte('created_at', thisMonth),

      // Listener KPIs
      sb.from('listener_profiles').select('id', { count: 'exact', head: true }),
      sb.from('listener_profiles').select('id', { count: 'exact', head: true }).eq('is_active', true).eq('is_approved', true),
      sb.from('listener_applications').select('user_id', { count: 'exact', head: true }).eq('status', 'pending'),
      sb.from('listener_profiles').select('id', { count: 'exact', head: true }).eq('is_available', true),

      // Session KPIs
      sb.from('sessions').select('id', { count: 'exact', head: true }),
      sb.from('sessions').select('id', { count: 'exact', head: true }).gte('started_at', today),
      sb.from('sessions').select('id', { count: 'exact', head: true }).gte('started_at', thisMonth),
      sb.from('sessions').select('id', { count: 'exact', head: true }).eq('status', 'active'),

      // Revenue KPIs — wallet recharges
      sb.from('wallet_transactions').select('amount').eq('type', 'credit').ilike('description', '%recharge%'),
      sb.from('wallet_transactions').select('amount').eq('type', 'credit').ilike('description', '%recharge%').gte('created_at', thisMonth),
      sb.from('wallet_transactions').select('amount').eq('type', 'credit').ilike('description', '%recharge%').gte('created_at', today),

      // Payout KPIs
      sb.from('payout_requests').select('amount').eq('status', 'pending'),
      sb.from('payout_requests').select('amount').eq('status', 'completed'),

      // Moderation KPIs
      sb.from('reports').select('id', { count: 'exact', head: true }).eq('status', 'pending'),

      // Earnings KPIs
      sb.from('listener_earnings').select('net_amount').eq('status', 'settled'),

      // Session duration
      sb.from('sessions').select('duration_mins').eq('status', 'completed'),

      // Free vs paid
      sb.from('sessions').select('id', { count: 'exact', head: true }).eq('is_free_trial', true),
      sb.from('sessions').select('id', { count: 'exact', head: true }).eq('is_free_trial', false).eq('status', 'completed'),

      // Gateway fee KPIs — amount collected from users to offset Razorpay costs
      sb.from('wallet_transactions').select('amount').eq('type', 'gateway_fee'),
      sb.from('wallet_transactions').select('amount').eq('type', 'gateway_fee').gte('created_at', thisMonth),
      sb.from('wallet_transactions').select('amount').eq('type', 'gateway_fee').gte('created_at', today),
    ])

    // Extract values safely — failed queries return zero/null defaults
    type QR<T> = { data: T[] | null; count: number | null }
    const extract = <T>(i: number): QR<T> => {
      const r = results[i]
      if (r.status === 'fulfilled') return r.value as QR<T>
      return { data: null, count: null }
    }

    const totalUsers        = extract<{ id: string }>(0)
    const activeUsers       = extract<{ id: string }>(1)
    const newUsersToday     = extract<{ id: string }>(2)
    const newUsersThisMonth = extract<{ id: string }>(3)
    const totalListeners    = extract<{ id: string }>(4)
    const activeListeners   = extract<{ id: string }>(5)
    const pendingListeners  = extract<{ user_id: string }>(6)
    const onlineListeners   = extract<{ id: string }>(7)
    const totalSessions     = extract<{ id: string }>(8)
    const sessionsToday     = extract<{ id: string }>(9)
    const sessionsThisMonth = extract<{ id: string }>(10)
    const activeSessions    = extract<{ id: string }>(11)
    const totalRevenue      = extract<{ amount: number }>(12)
    const revenueThisMonth  = extract<{ amount: number }>(13)
    const revenueToday      = extract<{ amount: number }>(14)
    const pendingPayouts    = extract<{ amount: number }>(15)
    const totalPayouts      = extract<{ amount: number }>(16)
    const pendingReports    = extract<{ id: string }>(17)
    const totalEarnings     = extract<{ net_amount: number }>(18)
    const avgSessionDuration = extract<{ duration_mins: number }>(19)
    const freeTrialSessions   = extract<{ id: string }>(20)
    const paidSessions        = extract<{ id: string }>(21)
    const gatewayFeesAllTime  = extract<{ amount: number }>(22)
    const gatewayFeesMonth    = extract<{ amount: number }>(23)
    const gatewayFeesToday    = extract<{ amount: number }>(24)

    const sum = (rows: { amount?: number; net_amount?: number }[] | null, field: 'amount' | 'net_amount' = 'amount') =>
      (rows ?? []).reduce((s, r) => s + (r[field] ?? 0), 0)

    const avgDuration = avgSessionDuration.data?.length
      ? Math.round(avgSessionDuration.data.reduce((s, r) => s + (r.duration_mins ?? 0), 0) / avgSessionDuration.data.length)
      : 0

    return NextResponse.json({
      users: {
        total: totalUsers.count ?? 0,
        active: activeUsers.count ?? 0,
        inactive: (totalUsers.count ?? 0) - (activeUsers.count ?? 0),
        newToday: newUsersToday.count ?? 0,
        newThisMonth: newUsersThisMonth.count ?? 0,
      },
      listeners: {
        total: totalListeners.count ?? 0,
        active: activeListeners.count ?? 0,
        pending: pendingListeners.count ?? 0,
        online: onlineListeners.count ?? 0,
      },
      sessions: {
        total: totalSessions.count ?? 0,
        today: sessionsToday.count ?? 0,
        thisMonth: sessionsThisMonth.count ?? 0,
        active: activeSessions.count ?? 0,
        freeTrial: freeTrialSessions.count ?? 0,
        paid: paidSessions.count ?? 0,
        avgDurationMins: avgDuration,
      },
      revenue: {
        totalRechargedPaise: sum(totalRevenue.data),
        thisMonthPaise: sum(revenueThisMonth.data),
        todayPaise: sum(revenueToday.data),
        listenerEarningsPaise: sum(totalEarnings.data, 'net_amount'),
      },
      payouts: {
        pendingAmountPaise: sum(pendingPayouts.data),
        pendingCount: pendingPayouts.data?.length ?? 0,
        totalPaidPaise: sum(totalPayouts.data),
      },
      moderation: {
        pendingReports: pendingReports.count ?? 0,
      },
      gatewayFees: {
        allTime:   sum(gatewayFeesAllTime.data),
        thisMonth: sum(gatewayFeesMonth.data),
        today:     sum(gatewayFeesToday.data),
      },
    })
  } catch (err) {
    logger.error('KPI error:', { error: err instanceof Error ? err.message : String(err) })
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
