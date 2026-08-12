import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase-server'
import { checkRateLimit } from '@/lib/rate-limit'
import { logger } from '@/lib/logger'
import { requireAdmin, dbUserIdOrNull , ADMIN_ACTION_LIMIT, ADMIN_ACTION_WINDOW_MS } from '@/lib/require-admin'

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i


// POST /api/admin/verify-listener
// Body: { verificationId, action: 'approve'|'reject', notes? }
export async function POST(req: NextRequest) {
  const { error, code, status, user } = await requireAdmin(req)
  if (error) return NextResponse.json({ error, code }, { status })
  if (!checkRateLimit(`admin:${user!.id}`, ADMIN_ACTION_LIMIT, ADMIN_ACTION_WINDOW_MS)) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 })
  }

  try {
    const { verificationId, action, notes } = await req.json()

    if (!verificationId || !UUID_RE.test(verificationId)) {
      return NextResponse.json({ error: 'Invalid verificationId' }, { status: 400 })
    }
    if (!['approve', 'reject'].includes(action)) {
      return NextResponse.json({ error: 'Invalid action' }, { status: 400 })
    }

    const sb = createAdminClient()

    const { data: verification } = await sb.from('listener_verifications')
      .select('listener_id, status')
      .eq('id', verificationId)
      .single()

    if (!verification) return NextResponse.json({ error: 'Not found' }, { status: 404 })

    const newStatus = action === 'approve' ? 'approved' : 'rejected'

    const { error: vErr } = await sb.from('listener_verifications').update({
      status:      newStatus,
      admin_notes: notes ?? null,
      reviewed_at: new Date().toISOString(),
      // reviewed_by has an FK to users(id) — the synthetic password-admin id
      // would violate it and fail the whole update.
      reviewed_by: dbUserIdOrNull(user!.id),
    }).eq('id', verificationId)
    if (vErr) {
      logger.error('verify-listener: verification update failed', { verificationId, error: vErr.message })
      return NextResponse.json({ error: 'Failed to update verification' }, { status: 500 })
    }

    if (action === 'approve') {
      const { error: lpErr } = await sb.from('listener_profiles')
        .update({ is_verified: true })
        .eq('user_id', verification.listener_id)
      if (lpErr) {
        logger.error('verify-listener: is_verified update failed', { listenerId: verification.listener_id, error: lpErr.message })
        return NextResponse.json({ error: 'Verification approved but badge update failed. Run migration 008/014 (is_verified column) and retry.' }, { status: 500 })
      }
    }

    // Notify the listener
    const notifBody = action === 'approve'
      ? 'Congratulations! Your identity has been verified. A verified badge now appears on your profile.'
      : `Your verification was not approved. ${notes ? `Reason: ${notes}` : 'Please resubmit with clearer documents.'}`

    await sb.from('notifications').insert({
      user_id:    verification.listener_id,
      type:       'verification_update',
      title:      action === 'approve' ? '✓ Identity verified!' : 'Verification not approved',
      body:       notifBody,
      action_url: '/become-listener/verify',
    }).then(() => {}, () => {})

    await sb.from('admin_audit_logs').insert({
      admin_id:  dbUserIdOrNull(user!.id),
      action:    `${action}_verification`,
      target_id: verification.listener_id,
    }).then(() => {}, () => {})

    return NextResponse.json({ ok: true })
  } catch (err) {
    logger.error('verify-listener admin error:', { error: err instanceof Error ? err.message : String(err) })
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}

// GET /api/admin/verify-listener — list verifications
export async function GET(req: NextRequest) {
  const { error, code, status, user } = await requireAdmin(req)
  if (error) return NextResponse.json({ error, code }, { status })
  if (!checkRateLimit(`admin:${user!.id}`, ADMIN_ACTION_LIMIT, ADMIN_ACTION_WINDOW_MS)) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 })
  }

  const url = new URL(req.url)
  const statusFilter = url.searchParams.get('status') || 'pending'
  if (!['pending', 'approved', 'rejected', 'needs_resubmission'].includes(statusFilter)) {
    return NextResponse.json({ error: 'Invalid status filter' }, { status: 400 })
  }

  const sb = createAdminClient()
  const { data, error: qErr } = await sb.from('listener_verifications')
    .select('id, listener_id, full_name, id_type, selfie_url, id_doc_url, status, submitted_at, admin_notes')
    .eq('status', statusFilter)
    .order('submitted_at', { ascending: false })
    .limit(50)

  if (qErr) {
    logger.error('verify-listener GET error:', { error: qErr.message })
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }

  return NextResponse.json({ verifications: data ?? [] })
}
