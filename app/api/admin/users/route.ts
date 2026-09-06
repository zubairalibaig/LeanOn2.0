import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase-server'
import { logger } from '@/lib/logger'
import { requireAdmin, dbUserIdOrNull , ADMIN_ACTION_LIMIT, ADMIN_ACTION_WINDOW_MS } from '@/lib/require-admin'

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i
const PAGE_SIZE = 25

// Enrich a page of rows with last_sign_in_at from auth.users (Supabase Auth
// maintains it automatically on every OTP sign-in — no public column needed).
// One getUserById per row; the page is capped at PAGE_SIZE (25), and all calls
// run in parallel. Failures degrade to null rather than breaking the listing.
async function withLastLogin<T extends Record<string, unknown>>(
  sb: ReturnType<typeof createAdminClient>,
  rows: T[],
  idOf: (row: T) => string | undefined,
): Promise<(T & { last_sign_in_at: string | null })[]> {
  return Promise.all(rows.map(async (row) => {
    const id = idOf(row)
    let lastSignIn: string | null = null
    if (id) {
      try {
        const { data } = await sb.auth.admin.getUserById(id)
        lastSignIn = data?.user?.last_sign_in_at ?? null
      } catch {
        lastSignIn = null
      }
    }
    return { ...row, last_sign_in_at: lastSignIn }
  }))
}


// GET — list users or listeners with pagination + filter
// Query params: ?type=user|listener&status=active|inactive|suspended|pending&page=0&search=
export async function GET(req: NextRequest) {
  const { error, code, status, user: adminUser } = await requireAdmin(req)
  if (error) return NextResponse.json({ error, code }, { status })
  const { checkRateLimit } = await import('@/lib/rate-limit')
  if (!checkRateLimit(`admin:${adminUser!.id}`, ADMIN_ACTION_LIMIT, ADMIN_ACTION_WINDOW_MS)) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 })
  }

  const sb = createAdminClient()
  const url = new URL(req.url)
  const type = url.searchParams.get('type') || 'user'
  const userStatus = url.searchParams.get('status') || 'all'
  const page = Math.max(0, parseInt(url.searchParams.get('page') || '0'))
  const search = url.searchParams.get('search') || ''
  // Sort direction for the "Joined" column. Applied server-side so it orders
  // across ALL pages, not just the visible one. (Last-login sorting stays
  // client-side — that value is enriched per-row from auth.users after
  // pagination, so it cannot be ordered in the query.)
  const sortAsc = url.searchParams.get('dir') === 'asc'
  // Which column to sort by. 'joined' (default) and 'wallet' order in the
  // query so they span every page. 'earnings' is handled separately for
  // listeners, because that total lives in another table.
  const sortBy = url.searchParams.get('sort') || 'joined'

  try {
    if (type === 'listener') {
      // For 'pending', source of truth is listener_applications.status (not is_approved/is_active,
      // which can be ambiguous for new applicants whose is_active defaults to TRUE).
      let userIdFilter: string[] | null = null
      if (userStatus === 'pending') {
        const { data: pendingApps } = await sb.from('listener_applications')
          .select('user_id')
          .eq('status', 'pending')
        userIdFilter = pendingApps?.map((a: { user_id: string }) => a.user_id) ?? []
        if (userIdFilter.length === 0) {
          return NextResponse.json({ items: [], total: 0, page, type: 'listener' })
        }
      }

      // Try with is_verified first (added by migration 008/014).
      // Fall back without it if the column doesn't exist yet.
      // avatar_url is included so the admin can visually verify the applicant's
      // profile photo before approving (alongside the Aadhaar number joined in
      // from listener_applications below).
      const selectWithVerified = `
        user_id, bio, specialty_tags, rate_per_min, rating, total_sessions,
        is_active, is_approved, is_available, is_verified, is_suspended, created_at,
        users!inner(id, name, email, phone, avatar_url, created_at, is_active, is_suspended, wallet_balance)
      `
      const selectWithoutVerified = `
        user_id, bio, specialty_tags, rate_per_min, rating, total_sessions,
        is_active, is_approved, is_available, is_suspended, created_at,
        users!inner(id, name, email, phone, avatar_url, created_at, is_active, is_suspended, wallet_balance)
      `

      // Earnings and name sorts require fetching the whole filtered set and
      // sorting in memory (earnings live in another table; name lives on the
      // joined users row which PostgREST can't order by directly). That is
      // fine because listener counts are small (dozens). All other sorts
      // paginate in the query.
      const sortByEarnings = sortBy === 'earnings'
      const sortByName = sortBy === 'name'
      const needsInMemorySort = sortByEarnings || sortByName

      const buildQuery = (selectStr: string) => {
        let q = sb.from('listener_profiles')
          .select(selectStr, { count: 'exact' })
          .order('created_at', { ascending: needsInMemorySort ? false : sortAsc })
        if (!needsInMemorySort) q = q.range(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE - 1)

        if (userIdFilter !== null) {
          q = q.in('user_id', userIdFilter)
        } else if (userStatus === 'active') {
          q = q.eq('is_active', true).eq('is_approved', true)
        } else if (userStatus === 'suspended') {
          q = q.eq('is_suspended', true)
        }

        if (search) {
          const safe = search.replace(/[,()*:\\%_]/g, '').slice(0, 100)
          // Filter on the joined users row — must use referencedTable so PostgREST
          // knows the columns belong to the foreign table, not listener_profiles.
          if (safe) q = q.or(`name.ilike.%${safe}%,phone.ilike.%${safe}%`, { referencedTable: 'users' })
        }
        return q
      }

      let { data, count, error: qErr } = await buildQuery(selectWithVerified)
      if (qErr) {
        // Column is_verified may not exist — retry without it
        const fallback = await buildQuery(selectWithoutVerified)
        if (fallback.error) throw fallback.error
        data = fallback.data
        count = fallback.count
      }

      // Enrich each listener row with application status/notes/payment info.
      // listener_profiles and listener_applications share no direct FK, so a second query is needed.
      // admin_notes requires migration 029 — fall back gracefully if column missing.
      let items: Record<string, unknown>[] = (data ?? []) as unknown as Record<string, unknown>[]
      if (items.length > 0) {
        const userIds = items.map(p => p.user_id as string)
        // aadhaar (full) needs migration 047; aadhaar_last4 + admin_notes are
        // long-standing. Select optimistically and fall back column-by-column so
        // a pre-migration DB never errors the listener list.
        const fullSelect = 'user_id, status, admin_notes, upi_id, bank_account, ifsc_code, aadhaar, aadhaar_last4'
        const noAadhaarSelect = 'user_id, status, admin_notes, upi_id, bank_account, ifsc_code, aadhaar_last4'
        const minimalSelect = 'user_id, status, upi_id, bank_account, ifsc_code'
        let appsData: Record<string, unknown>[] = []
        const fullRes = await sb.from('listener_applications').select(fullSelect).in('user_id', userIds)
        if (!fullRes.error) {
          appsData = (fullRes.data ?? []) as Record<string, unknown>[]
        } else {
          const midRes = await sb.from('listener_applications').select(noAadhaarSelect).in('user_id', userIds)
          appsData = !midRes.error
            ? (midRes.data ?? []) as Record<string, unknown>[]
            : ((await sb.from('listener_applications').select(minimalSelect).in('user_id', userIds)).data ?? []) as Record<string, unknown>[]
        }
        const appMap = new Map(appsData.map(a => [a.user_id as string, a]))
        items = items.map(p => ({ ...p, application: appMap.get(p.user_id as string) ?? null }))

        // Total earned per listener, from the earnings ledger. `total` is
        // everything the ledger credits them; `settled` is the subset that has
        // actually cleared and is therefore payable. Degrades to 0 rather than
        // breaking the listing if the table is missing or unreadable.
        const earnMap = new Map<string, { total: number; settled: number }>()
        const earnRes = await sb.from('listener_earnings')
          .select('listener_id, net_amount, status')
          .in('listener_id', userIds)
        if (!earnRes.error) {
          for (const row of (earnRes.data ?? []) as { listener_id: string; net_amount: number; status: string }[]) {
            const cur = earnMap.get(row.listener_id) ?? { total: 0, settled: 0 }
            const amt = Number(row.net_amount ?? 0)
            cur.total += amt
            if (row.status === 'settled') cur.settled += amt
            earnMap.set(row.listener_id, cur)
          }
        }
        items = items.map(p => {
          const e = earnMap.get(p.user_id as string) ?? { total: 0, settled: 0 }
          return { ...p, earned_total: e.total, earned_settled: e.settled }
        })
      }

      // In-memory sort + pagination for earnings and name sorts.
      let listenerTotal = count ?? 0
      if (needsInMemorySort) {
        listenerTotal = items.length
        items.sort((a, b) => {
          if (sortByName) {
            const an = String((a.users as { name?: string } | undefined)?.name ?? '').toLowerCase()
            const bn = String((b.users as { name?: string } | undefined)?.name ?? '').toLowerCase()
            return sortAsc ? an.localeCompare(bn) : bn.localeCompare(an)
          }
          // sortByEarnings
          const d = Number(a.earned_total ?? 0) - Number(b.earned_total ?? 0)
          return sortAsc ? d : -d
        })
        items = items.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE)
      }

      items = await withLastLogin(sb, items, p => (p.users as { id?: string } | undefined)?.id ?? (p.user_id as string))

      return NextResponse.json({ items, total: listenerTotal, page, type: 'listener' })
    }

    // Regular users.
    // Status/search filters are applied identically to the page query and the
    // wallet-total query, so the headline total always describes exactly the
    // set the admin is looking at.
    const safeSearch = search ? search.replace(/[,()*:\\%_]/g, '').slice(0, 100) : ''
    const searchFilter = safeSearch ? `name.ilike.%${safeSearch}%,phone.ilike.%${safeSearch}%` : ''

    let query = sb.from('users')
      .select('id, name, phone, email, avatar_url, created_at, is_active, is_suspended, wallet_balance, updated_at', { count: 'exact' })
      .order(sortBy === 'wallet' ? 'wallet_balance' : sortBy === 'name' ? 'name' : 'created_at', { ascending: sortAsc })
      .range(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE - 1)

    // Unspent customer money across the WHOLE filtered set, not just this page.
    // Degrades to null (UI hides the figure) rather than failing the listing.
    let walletQ = sb.from('users').select('wallet_balance')

    // NOTE: these two filter blocks MUST stay identical, or the headline total
    // would describe a different set of users than the rows on screen.
    if (userStatus === 'active') {
      query = query.eq('is_active', true).eq('is_suspended', false)
      walletQ = walletQ.eq('is_active', true).eq('is_suspended', false)
    } else if (userStatus === 'inactive') {
      query = query.eq('is_active', false)
      walletQ = walletQ.eq('is_active', false)
    } else if (userStatus === 'suspended') {
      query = query.eq('is_suspended', true)
      walletQ = walletQ.eq('is_suspended', true)
    }
    if (searchFilter) {
      query = query.or(searchFilter)
      walletQ = walletQ.or(searchFilter)
    }

    const [{ data, count, error: qErr }, walletRes] = await Promise.all([query, walletQ])
    if (qErr) throw qErr

    const walletRows = walletRes.error ? null : (walletRes.data as { wallet_balance: number }[] | null)
    const walletTotal = walletRows
      ? walletRows.reduce((s, r) => s + Number(r.wallet_balance ?? 0), 0)
      : null

    const items = await withLastLogin(sb, (data ?? []) as Record<string, unknown>[], u => u.id as string)
    return NextResponse.json({ items, total: count ?? 0, page, type: 'user', walletTotal })
  } catch (err) {
    logger.error('Admin users GET error:', { error: err instanceof Error ? err.message : String(err) })
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}

// PATCH — user management actions
// Body: { userId, action: 'activate'|'deactivate'|'suspend'|'ban'|'unsuspend'|'approve_listener'|'reject_listener', notes? }
export async function PATCH(req: NextRequest) {
  const { error, code, status, user } = await requireAdmin(req)
  if (error) return NextResponse.json({ error, code }, { status })

  const { checkRateLimit } = await import('@/lib/rate-limit')
  if (!checkRateLimit(`admin:${user!.id}`, ADMIN_ACTION_LIMIT, ADMIN_ACTION_WINDOW_MS)) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 })
  }

  let body: { userId?: string; action?: string; notes?: string; name?: string }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const { userId, action, notes, name } = body
  if (!userId || !UUID_RE.test(userId)) return NextResponse.json({ error: 'Invalid userId' }, { status: 400 })

  const validActions = ['activate', 'deactivate', 'suspend', 'ban', 'unsuspend', 'approve_listener', 'reject_listener', 'rename']
  if (!action || !validActions.includes(action)) return NextResponse.json({ error: 'Invalid action' }, { status: 400 })

  const sb = createAdminClient()

  try {
    switch (action) {
      case 'approve_listener': {
        // listener_profiles is the authoritative approval gate — must succeed.
        const { error: lpErr } = await sb.from('listener_profiles')
          .update({ is_approved: true, is_active: true })
          .eq('user_id', userId)
        if (lpErr) {
          logger.error('approve_listener: listener_profiles update failed', { userId, error: lpErr.message })
          return NextResponse.json({ error: `Failed to approve listener: ${lpErr.message}` }, { status: 500 })
        }
        // Sync application status so the pending filter removes this listener.
        const { error: laErr } = await sb.from('listener_applications')
          .update({ status: 'approved' })
          .eq('user_id', userId)
        if (laErr) {
          logger.warn('approve_listener: listener_applications sync failed (listener IS approved)', { userId, error: laErr.message })
          // Not fatal — profile is approved; the application row is a secondary record.
        }
        await sb.from('notifications').insert({
          user_id: userId,
          type: 'verification_update',
          title: 'Application approved!',
          body: 'Congratulations! Your listener application has been approved. Set your availability and start taking sessions.',
          action_url: '/dashboard',
        }).then(() => {}, () => {})
        break
      }

      case 'reject_listener': {
        const { error: lpErr } = await sb.from('listener_profiles')
          .update({ is_approved: false, is_active: false })
          .eq('user_id', userId)
        if (lpErr) {
          logger.error('reject_listener: listener_profiles update failed', { userId, error: lpErr.message })
          return NextResponse.json({ error: `Failed to reject listener: ${lpErr.message}` }, { status: 500 })
        }
        // Update status — critical so listener leaves the pending queue.
        const { error: laErr } = await sb.from('listener_applications')
          .update({ status: 'rejected' })
          .eq('user_id', userId)
        if (laErr) {
          logger.warn('reject_listener: listener_applications status update failed', { userId, error: laErr.message })
        }
        // Best-effort: store rejection notes (requires migration 029).
        if (notes) {
          await sb.from('listener_applications')
            .update({ admin_notes: notes })
            .eq('user_id', userId)
            .then(() => {}, () => {})
        }
        await sb.from('notifications').insert({
          user_id: userId,
          type: 'verification_update',
          title: 'Application update',
          body: notes || 'Your listener application needs revision. Please contact support for details.',
          action_url: '/become-listener/status',
        }).then(() => {}, () => {})
        break
      }

      case 'suspend':
      case 'ban': {
        const { error: uErr } = await sb.from('users')
          .update({ is_suspended: true, is_active: false })
          .eq('id', userId)
        if (uErr) {
          logger.error('suspend: users update failed', { userId, error: uErr.message })
          return NextResponse.json({ error: `Failed to suspend user: ${uErr.message}` }, { status: 500 })
        }
        // Listener profile — best-effort (user might not be a listener)
        await sb.from('listener_profiles')
          .update({ is_active: false, is_available: false, is_suspended: true })
          .eq('user_id', userId)
          .then(() => {}, () => {})
        await sb.auth.admin.signOut(userId, 'global').then(() => {}, () => {})
        break
      }

      case 'unsuspend': {
        const { error: uErr } = await sb.from('users')
          .update({ is_suspended: false, is_active: true })
          .eq('id', userId)
        if (uErr) {
          logger.error('unsuspend: users update failed', { userId, error: uErr.message })
          return NextResponse.json({ error: `Failed to unsuspend user: ${uErr.message}` }, { status: 500 })
        }
        // For listeners: restore is_active but preserve is_approved (admin must re-approve if needed).
        await sb.from('listener_profiles')
          .update({ is_active: true, is_suspended: false })
          .eq('user_id', userId)
          .then(() => {}, () => {})
        break
      }

      case 'deactivate': {
        const { error: uErr } = await sb.from('users').update({ is_active: false }).eq('id', userId)
        if (uErr) {
          logger.error('deactivate: users update failed', { userId, error: uErr.message })
          return NextResponse.json({ error: `Failed to deactivate user: ${uErr.message}` }, { status: 500 })
        }
        break
      }

      case 'activate': {
        const { error: uErr } = await sb.from('users').update({ is_active: true }).eq('id', userId)
        if (uErr) {
          logger.error('activate: users update failed', { userId, error: uErr.message })
          return NextResponse.json({ error: `Failed to activate user: ${uErr.message}` }, { status: 500 })
        }
        break
      }

      case 'rename': {
        const newName = typeof name === 'string' ? name.trim() : ''
        if (newName.length < 2 || newName.length > 80) {
          return NextResponse.json({ error: 'Name must be 2–80 characters.' }, { status: 400 })
        }
        const { error: uErr } = await sb.from('users').update({ name: newName }).eq('id', userId)
        if (uErr) {
          logger.error('rename: users update failed', { userId, error: uErr.message })
          return NextResponse.json({ error: `Failed to rename user: ${uErr.message}` }, { status: 500 })
        }
        // Keep listener_profiles display name in sync if applicable.
        await sb.from('listener_profiles').update({ display_name: newName }).eq('user_id', userId)
          .then(() => {}, () => {})
        break
      }
    }

    await sb.from('admin_audit_logs').insert({
      admin_id: dbUserIdOrNull(user!.id),
      action: `user_${action}`,
      target_id: userId,
    }).then(() => {}, () => {})

    return NextResponse.json({ ok: true })
  } catch (err) {
    logger.error('Admin users PATCH error:', { error: err instanceof Error ? err.message : String(err) })
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
