import { NextResponse } from 'next/server'
import { createServerSupabaseClient, createAdminClient } from '@/lib/supabase-server'
import { checkRateLimit } from '@/lib/rate-limit'
import { logger } from '@/lib/logger'
import { removeAllSelfies } from '@/lib/selfie-storage'

// PATCH — deactivate listener profile only (keeps user account active)
export async function PATCH() {
  try {
    const userSb = createServerSupabaseClient()
    const { data: { user } } = await userSb.auth.getUser()
    if (!user) return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })

    // Destructive action — throttle to prevent abusive/accidental repeats.
    if (!checkRateLimit(`account:${user.id}`, 5, 60_000)) {
      return NextResponse.json({ error: 'Too many requests. Please wait a moment.' }, { status: 429 })
    }

    const admin = createAdminClient()
    // Deactivate = take offline + remove from discovery, but PRESERVE is_approved.
    // Clearing is_approved would brick the listener: availability and payout both
    // hard-block on !is_approved, so they could neither go back online nor withdraw
    // their existing balance without an admin re-approving them.
    const { error } = await admin.from('listener_profiles')
      .update({ is_active: false, is_available: false })
      .eq('user_id', user.id)

    if (error) throw error
    return NextResponse.json({ success: true })
  } catch (err) {
    logger.error('Listener deactivation error:', { error: err instanceof Error ? err.message : String(err) })
    return NextResponse.json({ error: 'Failed to deactivate listener profile' }, { status: 500 })
  }
}

// Scrub PII from all tables for a given user, preserving structural/financial records.
// Phone becomes "DELETE" + last 5 digits for audit trail.
// Money must never be stranded by a deletion: the person can't log in afterwards
// and their UPI/bank details are erased, so any balance or pending payout/refund
// becomes unreachable. (Found 2026-09-25: a deleted listener's pending payout was
// cancelled and ₹55 of earnings returned to a wallet nobody could access.)
//   - Self-deletion is blocked until the money is withdrawn (MONEY_OUTSTANDING).
//   - Admin deletion proceeds but keeps pending payouts/refunds payable, and any
//     leftover balance is listed on the admin Overview ("Deleted accounts still
//     holding money") so it is settled on purpose.
class MoneyOutstanding extends Error {
  constructor(public userMessage: string) { super('MONEY_OUTSTANDING') }
}

async function assertNoMoneyOutstanding(admin: ReturnType<typeof createAdminClient>, userId: string) {
  const [{ data: u }, { data: payouts }, { data: refunds }, { count: earned }] = await Promise.all([
    admin.from('users').select('wallet_balance').eq('id', userId).single(),
    admin.from('payout_requests').select('amount').eq('user_id', userId).eq('status', 'pending'),
    admin.from('refund_requests').select('amount').eq('user_id', userId).eq('status', 'pending'),
    admin.from('listener_earnings').select('id', { count: 'exact', head: true }).eq('listener_id', userId),
  ])
  const pendingPayout = (payouts ?? []).reduce((t, r) => t + Number(r.amount ?? 0), 0)
  const pendingRefund = (refunds ?? []).reduce((t, r) => t + Number(r.amount ?? 0), 0)
  if (pendingPayout > 0) throw new MoneyOutstanding(`Your payout of ₹${pendingPayout} is still being transferred. You can delete your account once it has arrived.`)
  if (pendingRefund > 0) throw new MoneyOutstanding(`Your refund of ₹${pendingRefund} is still being processed. You can delete your account once it has arrived.`)
  const balance = Number(u?.wallet_balance ?? 0)
  if (balance >= 1) {
    throw new MoneyOutstanding((earned ?? 0) > 0
      ? `You still have ₹${balance} in your LeanOn wallet. Please request a payout from your dashboard first — once it has been transferred you can delete your account.`
      : `You still have ₹${balance} in your LeanOn wallet. Please use it or request a refund from the Wallet page first — then you can delete your account.`)
  }
}

async function scrubUserData(admin: ReturnType<typeof createAdminClient>, userId: string, opts: { byAdmin?: boolean } = {}) {
  if (!opts.byAdmin) await assertNoMoneyOutstanding(admin, userId)
  // Block deletion if the user has an active or pending session
  const { count: activeSessions } = await admin.from('sessions')
    .select('id', { count: 'exact', head: true })
    .or(`seeker_id.eq.${userId},listener_id.eq.${userId}`)
    .in('status', ['active', 'pending'])
  if (activeSessions && activeSessions > 0) {
    throw new Error('ACTIVE_SESSION')
  }

  // Fetch current phone + avatar BEFORE scrubbing (avatar_url is nulled in step 1)
  const { data: userRow } = await admin.from('users').select('phone, avatar_url').eq('id', userId).single()
  const phone = (userRow?.phone as string) || ''
  const savedAvatarUrl = (userRow?.avatar_url as string) || null
  // Use full phone digits (not just last 5) to avoid UNIQUE constraint collisions
  const phoneDigits = phone.replace(/\D/g, '')
  const scrubPhone = phoneDigits ? `DELETE${phoneDigits}` : `DELETED_${userId.slice(0, 8)}`

  // 1. Scrub users table — keep name for admin audit trail; scrub phone, email, avatar
  await admin.from('users').update({
    email: null,
    phone: scrubPhone,
    avatar_url: null,
    is_active: false,
    is_suspended: true,
    fcm_token: null,
  }).eq('id', userId)

  // 2. Scrub listener_profiles — hide from all discovery, clear bio
  // bio is NOT NULL in the live schema — use empty string, not null
  const { error: lpErr } = await admin.from('listener_profiles').update({
    is_active: false,
    is_approved: false,
    is_available: false,
    is_suspended: true,
    bio: '',
  }).eq('user_id', userId)
  if (lpErr) {
    logger.error('scrubUserData: listener_profiles update failed', { userId, error: lpErr.message })
  }

  // 3. Scrub listener_applications — wipe all PII (bank, aadhaar, phone, name, UPI)
  // Use 'rejected' status (valid CHECK constraint value) — 'deleted' is not allowed.
  // account_holder_name may not exist yet (pre-migration) — try with, fall back without.
  let laErr = (await admin.from('listener_applications').update({
    phone: scrubPhone,
    aadhaar_last4: null,
    bank_account: null,
    ifsc_code: null,
    upi_id: null,
    account_holder_name: null,
    status: 'rejected',
    admin_notes: 'Account deleted by user/admin',
  }).eq('user_id', userId)).error
  if (laErr?.message?.includes('account_holder_name')) {
    // Column doesn't exist yet — retry without it
    await admin.from('listener_applications').update({
      phone: scrubPhone,
      aadhaar_last4: null,
      bank_account: null,
      ifsc_code: null,
      upi_id: null,
      status: 'rejected',
      admin_notes: 'Account deleted by user/admin',
    }).eq('user_id', userId)
      .then(() => {}, () => {})
  }

  // Also try to clear full aadhaar if column exists (migration 047)
  await admin.from('listener_applications').update({ aadhaar: null } as Record<string, null>)
    .eq('user_id', userId)
    .then(() => {}, () => {})

  // Private screening answers + public onboarding text (migration 060). Separate
  // best-effort updates so a missing column never blocks the rest of the scrub.
  await admin.from('listener_applications').update({ screening: null } as Record<string, null>)
    .eq('user_id', userId)
    .then(() => {}, () => {})
  await admin.from('listener_profiles').update({ lived_experience: null, tagline_phrases: [] })
    .eq('user_id', userId)
    .then(() => {}, () => {})

  // Private verification selfie (live + any archived by "request a new selfie").
  // Its path is derived, not stored in a column, so it isn't in the URL list below.
  await removeAllSelfies(admin, userId).catch(err =>
    logger.error('scrubUserData: selfie removal failed', { userId, error: err instanceof Error ? err.message : String(err) }))

  // 4. Scrub listener_verifications — fetch storage URLs first, then delete rows
  const { data: verRows } = await admin.from('listener_verifications')
    .select('selfie_url, id_doc_url').eq('listener_id', userId)
  const storageFilesToDelete: string[] = []
  for (const v of verRows ?? []) {
    if (v.selfie_url) storageFilesToDelete.push(v.selfie_url as string)
    if (v.id_doc_url) storageFilesToDelete.push(v.id_doc_url as string)
  }
  await admin.from('listener_verifications').delete().eq('listener_id', userId)
    .then(() => {}, () => {})

  // Add avatar (fetched before step 1 nulled it)
  if (savedAvatarUrl) storageFilesToDelete.push(savedAvatarUrl)

  // Clean up Supabase Storage files (selfies, ID docs, avatars)
  for (const url of storageFilesToDelete) {
    try {
      // Extract bucket and path from Supabase storage URL (public, sign, or authenticated)
      const match = (url as string).match(/\/storage\/v1\/object\/(?:public|sign|authenticated)\/([^/]+)\/(.+?)(?:\?|$)/)
      if (match) {
        await admin.storage.from(match[1]).remove([decodeURIComponent(match[2])])
      }
    } catch { /* best-effort cleanup */ }
  }

  // 5. Pending payout/refund requests stay PENDING (admin deletion only — a
  // self-deletion can't reach here with any) so they can still be paid. Their
  // payout destination is kept on the pending row; historical rows are scrubbed.
  await admin.from('payout_requests').update({ upi_id: null })
    .eq('user_id', userId)
    .neq('status', 'pending')
    .then(() => {}, () => {})

  // 6. Delete notifications — no audit value
  await admin.from('notifications').delete().eq('user_id', userId)
    .then(() => {}, () => {})

  // 7. Sign out globally
  await admin.auth.admin.signOut(userId, 'global')
    .then(() => {}, (e) => logger.warn('scrubUserData: global signOut failed', { userId, error: String(e) }))

  // 8. Delete auth.users entry — prevents login
  await admin.auth.admin.deleteUser(userId)
    .then(() => {}, (e) => logger.warn('scrubUserData: auth.deleteUser failed', { userId, error: String(e) }))

  logger.info('Account permanently deleted (PII scrubbed)', { userId, scrubPhone })
}

// POST — permanent account deletion (PII scrub + auth removal)
export async function POST() {
  try {
    const userSb = createServerSupabaseClient()
    const { data: { user } } = await userSb.auth.getUser()
    if (!user) return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })

    if (!checkRateLimit(`account-delete:${user.id}`, 3, 60_000)) {
      return NextResponse.json({ error: 'Too many requests. Please wait a moment.' }, { status: 429 })
    }

    const admin = createAdminClient()
    await scrubUserData(admin, user.id)

    return NextResponse.json({ success: true })
  } catch (err) {
    if (err instanceof MoneyOutstanding) {
      return NextResponse.json({ error: err.userMessage, code: 'MONEY_OUTSTANDING' }, { status: 409 })
    }
    const msg = err instanceof Error ? err.message : String(err)
    if (msg === 'ACTIVE_SESSION') {
      return NextResponse.json({ error: 'You have an active session. Please end it before deleting your account.' }, { status: 409 })
    }
    logger.error('Account deletion error:', { error: msg })
    return NextResponse.json({ error: 'Failed to delete account' }, { status: 500 })
  }
}

// DELETE — admin-initiated account deletion (requires admin auth via header)
export async function DELETE(req: Request) {
  try {
    const { requireAdmin } = await import('@/lib/require-admin')
    const { error, status } = await requireAdmin(req as never)
    if (error) return NextResponse.json({ error }, { status })

    let body: { userId?: string }
    try { body = await req.json() } catch { return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 }) }
    const { userId } = body
    if (!userId || !/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(userId)) {
      return NextResponse.json({ error: 'Invalid userId' }, { status: 400 })
    }

    const admin = createAdminClient()
    await scrubUserData(admin, userId, { byAdmin: true })

    return NextResponse.json({ success: true })
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err)
    if (msg === 'ACTIVE_SESSION') {
      return NextResponse.json({ error: 'User has an active session. End it before deleting.' }, { status: 409 })
    }
    logger.error('Admin account deletion error:', { error: msg })
    return NextResponse.json({ error: 'Failed to delete account' }, { status: 500 })
  }
}
