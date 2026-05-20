import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { createAdminClient } from '@/lib/supabase-server'

function getResend() {
  return new Resend(process.env.RESEND_API_KEY!)
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, type, message } = await req.json()

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json({ error: 'Name, email, and message are required' }, { status: 400 })
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
    }

    const cleanName    = name.trim().slice(0, 100)
    const cleanEmail   = email.trim().toLowerCase().slice(0, 200)
    const cleanType    = type || 'general'
    const cleanMessage = message.trim().slice(0, 2000)

    const sb = createAdminClient()
    const { error: dbErr } = await sb.from('contact_messages').insert({
      name:    cleanName,
      email:   cleanEmail,
      type:    cleanType,
      message: cleanMessage,
    })
    if (dbErr) throw dbErr

    // Notify admin — non-blocking, failure doesn't affect the user response
    const adminTo = process.env.ADMIN_NOTIFICATION_EMAIL
    if (process.env.RESEND_API_KEY && adminTo) {
      const resend = getResend()
      await resend.emails.send({
        from:    'LeanOn Contact <no-reply@leanon.app>',
        to:      adminTo,
        replyTo: cleanEmail,
        subject: `[LeanOn Contact] ${cleanType} from ${cleanName}`,
        html: `
          <p><strong>From:</strong> ${cleanName} &lt;${cleanEmail}&gt;</p>
          <p><strong>Topic:</strong> ${cleanType}</p>
          <hr/>
          <p>${cleanMessage.replace(/\n/g, '<br/>')}</p>
        `,
      }).catch(err => console.error('Resend notification failed:', err))
    } else if (!adminTo) {
      console.warn('ADMIN_NOTIFICATION_EMAIL not set — contact form saved to DB only')
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact form error:', err)
    return NextResponse.json({ error: 'Failed to submit. Please try again or reach us via the email on our website.' }, { status: 500 })
  }
}
