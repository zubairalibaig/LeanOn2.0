import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'
import { logger } from '@/lib/logger'

// Supabase "Send SMS" auth hook → MSG91.
//
// WHY THIS EXISTS: Supabase Auth only ships native support for Twilio,
// Twilio Verify, MessageBird, Vonage and Textlocal. MSG91 is not on that list,
// and Textlocal is winding down in India — so the only supported way to use an
// Indian provider is the Send SMS hook.
//
// WHAT THIS DOES *NOT* DO — and that is the whole point:
// Supabase still generates the OTP, verifies it, enforces its own rate limits,
// and mints the session. This endpoint only replaces the delivery truck. The
// browser keeps calling signInWithOtp()/verifyOtp() exactly as before, so
// app/auth/page.tsx and app/become-listener/page.tsx need ZERO changes and the
// fragile auth path CLAUDE.md warns about is never touched.
//
// If MSG91 ever breaks, disabling the hook in the Supabase dashboard restores
// the previous behaviour instantly, with no deploy.
//
// WHY A NEXT.JS ROUTE, NOT A SUPABASE EDGE FUNCTION:
// Deploying an Edge Function needs the Supabase CLI + Docker on a local
// machine, which the owner does not have. A Supabase hook can point at ANY
// HTTPS URL, so this ships with the normal `git push` → Vercel deploy instead.
//
// WHY UNDER /api/webhooks/: middleware.ts exempts that prefix from the CSRF
// origin check. Supabase calls this server-to-server with no Origin header, so
// this reuses the existing, tested exemption rather than a new special case.
//
// ENV VARS (set in Vercel — never in code, never in chat):
//   SUPABASE_SMS_HOOK_SECRET  the secret Supabase shows when you enable the
//                             hook. Paste it verbatim, including the
//                             "v1,whsec_" prefix.
//   MSG91_AUTHKEY             MSG91 dashboard → Auth Key (server-side secret)
//   MSG91_FLOW_ID             the Flow/template id of your DLT-approved
//                             OTP template
//   MSG91_OTP_VAR             optional. The variable name inside your DLT
//                             template that receives the code. Defaults to
//                             "otp" — change it if your approved template
//                             names the placeholder something else.
//   SMS_HOOK_BLOCKED_PHONES   optional, comma-separated. Numbers here are
//                             ACCEPTED but never actually sent, so QA does not
//                             burn credits. Leave unset in production.

export const runtime = 'nodejs' // needs node:crypto for HMAC verification
export const dynamic = 'force-dynamic'

// Overridable so the hook can be exercised end-to-end against a stand-in
// server without spending real SMS credits — MSG91 has no sandbox mode.
// Leave unset in production.
const MSG91_FLOW_URL = process.env.MSG91_FLOW_URL || 'https://control.msg91.com/api/v5/flow'
const MSG91_TIMEOUT_MS = 10_000
const TIMESTAMP_TOLERANCE_SECS = 5 * 60

type HookPayload = {
  user?: { phone?: string }
  sms?: { otp?: string }
}

/** Supabase error shape for auth hooks — anything else shows as a generic failure. */
const hookError = (httpCode: number, message: string) =>
  NextResponse.json({ error: { http_code: httpCode, message } }, { status: httpCode })

/**
 * Verify a Standard Webhooks signature (the spec Supabase auth hooks use).
 *
 * Implemented directly on node:crypto rather than pulling in the
 * `standardwebhooks` package — it is ~30 lines, and this endpoint is the door
 * through which every OTP passes, so fewer third-party dependencies in the
 * trust path is worth more than the saved code.
 */
function verifySignature(rawBody: string, headers: Headers, secret: string): string | null {
  const id = headers.get('webhook-id')
  const timestamp = headers.get('webhook-timestamp')
  const signature = headers.get('webhook-signature')
  if (!id || !timestamp || !signature) return 'missing webhook signature headers'

  // Reject stale/replayed deliveries.
  const ts = Number(timestamp)
  if (!Number.isFinite(ts)) return 'malformed webhook-timestamp'
  if (Math.abs(Math.floor(Date.now() / 1000) - ts) > TIMESTAMP_TOLERANCE_SECS) {
    return 'webhook timestamp outside tolerance'
  }

  // Supabase presents the secret as "v1,whsec_<base64>". Accept it with or
  // without the decoration so a copy-paste variation is not a silent outage.
  const b64 = secret.replace(/^v1,/, '').replace(/^whsec_/, '')
  let key: Buffer
  try {
    key = Buffer.from(b64, 'base64')
  } catch {
    return 'hook secret is not valid base64'
  }
  if (key.length === 0) return 'hook secret decoded to empty'

  const expected = crypto
    .createHmac('sha256', key)
    .update(`${id}.${timestamp}.${rawBody}`)
    .digest('base64')

  // The header may carry several space-separated versioned signatures.
  const provided = signature.split(' ')
  const expectedBuf = Buffer.from(expected)
  const match = provided.some(part => {
    const value = part.startsWith('v1,') ? part.slice(3) : part
    const buf = Buffer.from(value)
    // timingSafeEqual throws on length mismatch — check first, and keep the
    // comparison constant-time for equal-length candidates.
    return buf.length === expectedBuf.length && crypto.timingSafeEqual(buf, expectedBuf)
  })

  return match ? null : 'signature mismatch'
}

/**
 * MSG91 wants digits including the country code and NO leading "+"
 * (e.g. 919876543210). Supabase hands us E.164.
 */
function toMsg91Mobile(phone: string): string | null {
  const digits = phone.replace(/\D/g, '')
  if (!digits) return null
  if (digits.length === 10) return `91${digits}`            // bare Indian number
  if (digits.length === 11 && digits.startsWith('0')) return `91${digits.slice(1)}`
  if (digits.length >= 11 && digits.length <= 15) return digits // already has a country code
  return null
}

function isBlocked(mobile: string): boolean {
  const list = (process.env.SMS_HOOK_BLOCKED_PHONES || '')
    .split(',')
    .map(s => s.replace(/\D/g, ''))
    .filter(Boolean)
  return list.some(blocked => mobile.endsWith(blocked))
}

export async function POST(req: NextRequest) {
  const secret = process.env.SUPABASE_SMS_HOOK_SECRET
  const authkey = process.env.MSG91_AUTHKEY
  const flowId = process.env.MSG91_FLOW_ID

  // Fail loudly and specifically. A misconfigured env var here means nobody in
  // the country can sign in, so it must never look like a generic 500.
  const missing = [
    !secret && 'SUPABASE_SMS_HOOK_SECRET',
    !authkey && 'MSG91_AUTHKEY',
    !flowId && 'MSG91_FLOW_ID',
  ].filter(Boolean)
  if (missing.length) {
    logger.error('sms-hook: missing env vars', { missing })
    return hookError(500, `SMS hook misconfigured: ${missing.join(', ')} not set`)
  }

  const rawBody = await req.text()

  const sigError = verifySignature(rawBody, req.headers, secret!)
  if (sigError) {
    // Never echo the reason to the caller — an unauthenticated probe should not
    // learn why it failed. The detail goes to our logs only.
    logger.warn('sms-hook: rejected unverified request', { reason: sigError })
    return hookError(401, 'Unauthorized')
  }

  let payload: HookPayload
  try {
    payload = JSON.parse(rawBody)
  } catch {
    return hookError(400, 'Malformed JSON payload')
  }

  const phone = payload.user?.phone ?? ''
  const otp = payload.sms?.otp ?? ''
  if (!phone || !otp) return hookError(400, 'Payload missing user.phone or sms.otp')

  const mobile = toMsg91Mobile(phone)
  if (!mobile) return hookError(400, 'Could not normalise phone number')

  // QA numbers: report success so the auth flow completes, but spend nothing.
  if (isBlocked(mobile)) {
    logger.info('sms-hook: blocked test number, no SMS sent')
    return NextResponse.json({})
  }

  try {
    const controller = new AbortController()
    const timer = setTimeout(() => controller.abort(), MSG91_TIMEOUT_MS)

    const res = await fetch(MSG91_FLOW_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', authkey: authkey! },
      body: JSON.stringify({
        template_id: flowId,
        short_url: '0', // no link in the message — keeps it DLT-clean
        recipients: [{
          mobiles: mobile,
          // Variable name must match the placeholder in the DLT-approved
          // template; configurable because that name is set at approval time.
          [process.env.MSG91_OTP_VAR || 'otp']: otp,
        }],
      }),
      signal: controller.signal,
    }).finally(() => clearTimeout(timer))

    const bodyText = await res.text()

    // GOTCHA: MSG91 answers HTTP 200 even for some failures, signalling the
    // real outcome as {"type":"error"} in the body. Checking res.ok alone
    // would silently swallow undelivered OTPs.
    let msg91Type: string | undefined
    try { msg91Type = JSON.parse(bodyText)?.type } catch { /* non-JSON body */ }

    if (!res.ok || msg91Type === 'error') {
      // bodyText may name the template/DLT problem — useful, and contains no OTP.
      logger.error('sms-hook: MSG91 rejected the send', { status: res.status, body: bodyText.slice(0, 500) })
      return hookError(502, 'SMS provider rejected the message')
    }

    // Deliberately NOT logging the OTP, or the full phone number.
    logger.info('sms-hook: OTP dispatched via MSG91', { mobileSuffix: mobile.slice(-4) })
    return NextResponse.json({})
  } catch (err) {
    const aborted = err instanceof Error && err.name === 'AbortError'
    logger.error('sms-hook: MSG91 request failed', {
      error: aborted ? `timeout after ${MSG91_TIMEOUT_MS}ms` : String(err),
    })
    return hookError(502, aborted ? 'SMS provider timed out' : 'Could not reach SMS provider')
  }
}
