import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase-server'
import { logger } from '@/lib/logger'
import { requireAdmin } from '@/lib/require-admin'


export async function GET(req: NextRequest) {
  const { error, code, status } = await requireAdmin(req)
  if (error) return NextResponse.json({ error, code }, { status })

  try {
    const sb = createAdminClient()
    const now = new Date()
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate()).toISOString()
    const thisMonth = new Date(now.getFullYear(), now.getMonth(), 1).toISOString()
    const last30Days = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000).toISOString()

    const [
      totalUsers,
      activeUsers,
      newUsersToday,
      newUsersThisMonth,
      totalListeners,
      activeListeners,
      pendingListeners,
      onlineListeners,
      totalSessions,
      sessionsToday,
      sessionsThisMonth,
      activeSessions,
      totalRevenue,
      revenueThisMonth,
      revenueToday,
      pendingPayouts,
      totalPayouts,
      pendingReports,
      totalEarnings,
      avgSessionDuration,
      freeTrialSessions,
      paidSessions,
    ] = await Promise.all([
      // User KPIs
      sb.from('users').select('id', { count: 'exact', head: true }),
      sb.from('users').select('id', { count: 'exact', head: true }).eq('is_active', true).gte('updated_at', last30Days),
      sb.from('users').select('id', { count: 'exact', head: true }).gte('created_at', today),
      sb.from('users').select('id', { count: 'exact', head: true }).gte('created_at', thisMonth),

      // Listener KPIs
      sb.from('listener_profiles').select('id', { count: 'exact', head: true }),
      sb.from('listener_profiles').select('id', { count: 'exact', head: true }).eq('is_active', true).eq('is_approved', true),
      sb.from('listener_profiles').select('id', { count: 'exact', head: true }).eq('is_approved', false),
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
    ])

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
    })
  } catch (err) {
    logger.error('KPI error:', { error: err instanceof Error ? err.message : String(err) })
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
