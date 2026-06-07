import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { createAdminClient } from '@/lib/supabase-server'
import { checkRateLimit } from '@/lib/rate-limit'
import { logger } from '@/lib/logger'

function getResend() {
  return new Resend(process.env.RESEND_API_KEY!)
}

export async function POST(req: NextRequest) {
  try {
    // 5 contact form submits per 15 minutes per IP — prevents spam from bots
    const clientIp = req.headers.get('x-forwarded-for')?.split(',')[0].trim() || 'unknown'
    if (!checkRateLimit(`contact:${clientIp}`, 5, 15 * 60_000)) {
      return NextResponse.json({ error: 'Too many requests. Please wait before submitting again.' }, { status: 429 })
    }

    const { name, email, type, message } = await req.json()

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json({ error: 'Name, email, and message are required' }, { status: 400 })
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
    }

    const VALID_TYPES = ['general', 'feature_request', 'bug_report', 'support', 'partnership', 'press']
    const cleanName    = name.trim().slice(0, 100)
    const cleanEmail   = email.trim().toLowerCase().slice(0, 200)
    const cleanType    = VALID_TYPES.includes(type) ? type : 'general'
    const cleanMessage = message.trim().slice(0, 2000)

    const esc = (s: string) => s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')

    const sb = createAdminClient()
    const { error: dbErr } = await sb.from('contact_messages').insert({
      name:    cleanName,
      email:   cleanEmail,
      type:    cleanType,
      message: cleanMessage,
    })
    if (dbErr) throw dbErr

    // Notify admin — non-blocking, failure doesn't affect the user response
    const adminTo = process.env.ADMIN_EMAIL
    const fromAddr = process.env.RESEND_FROM || 'LeanOn <onboarding@resend.dev>'
    if (process.env.RESEND_API_KEY && adminTo) {
      const resend = getResend()
      try {
        // NOTE: resend.emails.send returns { data, error } — it does NOT throw on API errors.
        // With onboarding@resend.dev, Resend only delivers to the account-owner's email.
        // Verify leanon.app as a sending domain and set RESEND_FROM to send anywhere.
        const { data, error } = await resend.emails.send({
          from:    fromAddr,
          to:      adminTo,
          replyTo: cleanEmail,
          subject: `[LeanOn Contact] ${cleanType} from ${cleanName}`,
          html: `
            <p><strong>From:</strong> ${esc(cleanName)} &lt;${esc(cleanEmail)}&gt;</p>
            <p><strong>Topic:</strong> ${esc(cleanType)}</p>
            <p><strong>Reply-to:</strong> ${esc(cleanEmail)}</p>
            <hr/>
            <p>${esc(cleanMessage).replace(/\n/g, '<br/>')}</p>
          `,
        })
        if (error) logger.error('Resend API rejected the email:', { error: error instanceof Error ? error.message : String(error) })
        else logger.info('Resend accepted contact email:', { id: data?.id })
      } catch (err) {
        logger.error('Resend network failure:', { error: err instanceof Error ? err.message : String(err) })
      }
    } else if (!adminTo) {
      logger.warn('ADMIN_EMAIL not set — contact form saved to DB only')
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    logger.error('Contact form error:', { error: err instanceof Error ? err.message : String(err) })
    return NextResponse.json({ error: 'Failed to submit. Please try again or reach us via the email on our website.' }, { status: 500 })
  }
}
