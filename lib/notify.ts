// Notification helper — sends transactional emails via Resend.
// All functions are fire-and-forget: they never throw, only log errors.
// Set RESEND_API_KEY + RESEND_FROM + ADMIN_NOTIFICATION_EMAIL in Vercel env vars.

import { Resend } from 'resend'

function getResend(): Resend | null {
  if (!process.env.RESEND_API_KEY) return null
  return new Resend(process.env.RESEND_API_KEY)
}

const FROM = () => process.env.RESEND_FROM || 'LeanOn <onboarding@resend.dev>'

// Escape user-supplied values before interpolating into email HTML.
// User names are user-controlled (set in profile) — without this a name like
// <img src=x onerror=...> would render as markup in the recipient's inbox.
function esc(s: string | number | null | undefined): string {
  return String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

// Send a notification email — never throws
async function send(opts: Parameters<Resend['emails']['send']>[0]) {
  const resend = getResend()
  if (!resend) return
  try {
    const { error } = await resend.emails.send(opts)
    if (error) console.error('Resend send error:', error)
  } catch (err) {
    console.error('Resend network error:', err)
  }
}

export async function notifySessionComplete(opts: {
  seekerEmail?: string | null
  listenerEmail?: string | null
  listenerName: string
  seekerName: string
  durationMins: number
  sessionType: string
  listenerEarning: number
}) {
  const { seekerEmail, listenerEmail, listenerName, seekerName, durationMins, sessionType, listenerEarning } = opts

  // Email to seeker
  if (seekerEmail) {
    await send({
      from: FROM(),
      to: seekerEmail,
      subject: `Your LeanOn session with ${esc(listenerName)} is complete`,
      html: `
        <div style="font-family:sans-serif;max-width:480px;margin:0 auto;padding:24px;">
          <img src="https://leanon.app/logo.png" alt="LeanOn" style="height:40px;margin-bottom:20px;" />
          <h2 style="color:#0F4867;">Your session is complete 🙏</h2>
          <p style="color:#5A7A8A;">You just had a ${durationMins}-min ${sessionType} session with <strong>${esc(listenerName)}</strong>.</p>
          <p style="color:#5A7A8A;">We hope it helped. You can rate your session and book again anytime.</p>
          <a href="https://leanon.app/sessions" style="display:inline-block;background:#FF9933;color:white;padding:12px 28px;border-radius:50px;font-weight:700;text-decoration:none;margin-top:16px;">View my sessions →</a>
          <p style="font-size:12px;color:#8AAAB8;margin-top:24px;">In crisis? Call Tele-MANAS 14416 (free, 24/7).</p>
        </div>
      `,
    })
  }

  // Email to listener
  if (listenerEmail) {
    await send({
      from: FROM(),
      to: listenerEmail,
      subject: `Session complete — ₹${listenerEarning} credited to your wallet`,
      html: `
        <div style="font-family:sans-serif;max-width:480px;margin:0 auto;padding:24px;">
          <img src="https://leanon.app/logo.png" alt="LeanOn" style="height:40px;margin-bottom:20px;" />
          <h2 style="color:#0F4867;">Great session, ${esc(listenerName)}! 🎉</h2>
          <p style="color:#5A7A8A;">Your ${durationMins}-min ${sessionType} session is complete.</p>
          <p style="color:#5A7A8A;"><strong>₹${listenerEarning} has been credited to your LeanOn wallet.</strong></p>
          <a href="https://leanon.app/dashboard" style="display:inline-block;background:#1A8FA0;color:white;padding:12px 28px;border-radius:50px;font-weight:700;text-decoration:none;margin-top:16px;">View dashboard →</a>
        </div>
      `,
    })
  }
}

export async function notifyWalletRecharge(opts: {
  userEmail?: string | null
  userName: string
  amount: number
}) {
  const { userEmail, userName, amount } = opts
  if (!userEmail) return

  await send({
    from: FROM(),
    to: userEmail,
    subject: `₹${amount} added to your LeanOn wallet`,
    html: `
      <div style="font-family:sans-serif;max-width:480px;margin:0 auto;padding:24px;">
        <img src="https://leanon.app/logo.png" alt="LeanOn" style="height:40px;margin-bottom:20px;" />
        <h2 style="color:#0F4867;">Wallet topped up! 💰</h2>
        <p style="color:#5A7A8A;">Hi ${esc(userName || 'there')}, <strong>₹${amount} has been added to your LeanOn wallet.</strong></p>
        <p style="color:#5A7A8A;">You're all set to book a session. Browse available listeners now.</p>
        <a href="https://leanon.app/browse" style="display:inline-block;background:#FF9933;color:white;padding:12px 28px;border-radius:50px;font-weight:700;text-decoration:none;margin-top:16px;">Browse listeners →</a>
      </div>
    `,
  })
}

export async function notifyPayoutRequested(opts: {
  listenerEmail?: string | null
  listenerName: string
  amount: number
}) {
  const { listenerEmail, listenerName, amount } = opts
  if (!listenerEmail) return

  await send({
    from: FROM(),
    to: listenerEmail,
    subject: `Payout of ₹${amount} requested — we'll process it in 3 business days`,
    html: `
      <div style="font-family:sans-serif;max-width:480px;margin:0 auto;padding:24px;">
        <img src="https://leanon.app/logo.png" alt="LeanOn" style="height:40px;margin-bottom:20px;" />
        <h2 style="color:#0F4867;">Payout request received 🏦</h2>
        <p style="color:#5A7A8A;">Hi ${esc(listenerName)}, your request to withdraw <strong>₹${amount}</strong> has been received.</p>
        <p style="color:#5A7A8A;">We'll transfer it to your registered bank account within <strong>3 business days</strong>.</p>
      </div>
    `,
  })
}
