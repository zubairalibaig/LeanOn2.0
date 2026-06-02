import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient, createAdminClient } from '@/lib/supabase-server'
import { checkRateLimit } from '@/lib/rate-limit'
import { Resend } from 'resend'
import { logger } from '@/lib/logger'

const VALID_REPORT_TYPES = [
  'harassment',
  'inappropriate_content',
  'sexual_content',
  'spam',
  'impersonation',
  'self_harm_risk',
  'abuse',
  'other',
] as const

// POST — submit a content/user report or session dispute
// Body: { reportedUserId?, sessionId?, type, description }
export async function POST(req: NextRequest) {
  try {
    const userSb = createServerSupabaseClient()
    const { data: { user } } = await userSb.auth.getUser()
    if (!user) return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })

    // SECURITY: 5 reports per day per user — prevents spam
    if (!checkRateLimit(`report:${user.id}`, 5, 86_400_000)) {
      return NextResponse.json({ error: 'Too many reports. You can submit up to 5 reports per day.' }, { status: 429 })
    }

    const { reportedUserId, sessionId, type, description } = await req.json()
    const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i

    if (!VALID_REPORT_TYPES.includes(type)) {
      return NextResponse.json({ error: 'Invalid report type' }, { status: 400 })
    }
    if (!description?.trim() || description.trim().length < 10) {
      return NextResponse.json({ error: 'Please provide more detail (minimum 10 characters)' }, { status: 400 })
    }
    if (!reportedUserId && !sessionId) {
      return NextResponse.json({ error: 'Provide either reportedUserId or sessionId' }, { status: 400 })
    }
    if (reportedUserId && !UUID_RE.test(reportedUserId)) {
      return NextResponse.json({ error: 'Invalid reportedUserId' }, { status: 400 })
    }
    if (sessionId && !UUID_RE.test(sessionId)) {
      return NextResponse.json({ error: 'Invalid sessionId' }, { status: 400 })
    }

    const sb = createAdminClient()

    // If sessionId provided — verify caller is a participant
    if (sessionId) {
      const { data: session } = await sb
        .from('sessions')
        .select('seeker_id, listener_id')
        .eq('id', sessionId)
        .single()
      if (!session || (session.seeker_id !== user.id && session.listener_id !== user.id)) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
      }
    }

    // Save report to DB
    const { error: dbErr } = await sb.from('reports').insert({
      reporter_id:      user.id,
      reported_user_id: reportedUserId ?? null,
      session_id:       sessionId ?? null,
      type,
      description:      description.trim().slice(0, 2000),
      status:           'pending',
    })
    if (dbErr) throw dbErr

    // Auto-escalate self-harm reports — send immediate admin email
    if (type === 'self_harm_risk' && process.env.RESEND_API_KEY && process.env.ADMIN_NOTIFICATION_EMAIL) {
      try {
        // Escape user-supplied content before inserting into HTML to prevent injection
        const escHtml = (s: string) => s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')
        const safeDescription = escHtml(description.trim().slice(0, 2000))
        const resend = new Resend(process.env.RESEND_API_KEY)
        await resend.emails.send({
          from: process.env.RESEND_FROM || 'LeanOn <onboarding@resend.dev>',
          to: process.env.ADMIN_NOTIFICATION_EMAIL,
          subject: '🚨 URGENT: Self-harm risk report on LeanOn',
          html: `
            <p><strong>A self-harm risk report has been submitted.</strong></p>
            <p><strong>Reporter:</strong> ${escHtml(user.id)}</p>
            ${sessionId ? `<p><strong>Session ID:</strong> ${escHtml(sessionId)}</p>` : ''}
            ${reportedUserId ? `<p><strong>Reported user:</strong> ${escHtml(reportedUserId)}</p>` : ''}
            <p><strong>Description:</strong> ${safeDescription}</p>
            <p>Please review immediately in the admin panel.</p>
          `,
        })
      } catch (emailErr) {
        logger.error('Failed to send self-harm escalation email:', { error: emailErr instanceof Error ? emailErr.message : String(emailErr) })
      }
    }

    return NextResponse.json({ success: true })
  } catch (err: unknown) {
    logger.error('Report submission error:', { error: err instanceof Error ? err.message : String(err) })
    return NextResponse.json({ error: 'Failed to submit report. Please try again.' }, { status: 500 })
  }
}
