import { NextResponse } from 'next/server'
import { createServerSupabaseClient, createAdminClient } from '@/lib/supabase-server'
import { checkRateLimit } from '@/lib/rate-limit'
import { logger } from '@/lib/logger'

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
async function scrubUserData(admin: ReturnType<typeof createAdminClient>, userId: string) {
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

  // 5. Handle pending payout requests — reject and return balance before scrub
  const { data: pendingPayouts } = await admin.from('payout_requests')
    .select('id, amount').eq('user_id', userId).eq('status', 'pending')
  for (const pp of pendingPayouts ?? []) {
    await admin.from('payout_requests')
      .update({ status: 'rejected', admin_notes: 'Account deleted — balance returned' })
      .eq('id', pp.id)
    await admin.rpc('credit_wallet', { p_user_id: userId, p_amount: pp.amount })
      .then(() => {}, (e) => logger.warn('scrubUserData: credit_wallet failed for pending payout', { userId, payoutId: pp.id, error: String(e) }))
  }

  // Scrub UPI from all payout requests (pending already rejected above, but also historical)
  await admin.from('payout_requests').update({ upi_id: null })
    .eq('user_id', userId)
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
    await scrubUserData(admin, userId)

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
