import twilio from 'twilio'
import { logger } from '@/lib/logger'

// Send an SMS via Twilio. Requires env vars:
//   TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_FROM_NUMBER
//
// Returns true on success, false on failure (non-throwing — SMS is non-critical).
export async function sendSms(to: string, body: string): Promise<boolean> {
  const sid   = process.env.TWILIO_ACCOUNT_SID
  const token = process.env.TWILIO_AUTH_TOKEN
  const from  = process.env.TWILIO_FROM_NUMBER

  if (!sid || !token || !from) {
    logger.warn('sendSms: Twilio env vars not configured — skipping SMS', { to })
    return false
  }

  // Normalise to E.164: Indian numbers stored as +91XXXXXXXXXX already
  const normalised = to.startsWith('+') ? to : `+91${to.replace(/\D/g, '').slice(-10)}`

  try {
    const client = twilio(sid, token)
    await client.messages.create({ from, to: normalised, body })
    return true
  } catch (err) {
    logger.error('sendSms failed:', { to: normalised, error: err instanceof Error ? err.message : String(err) })
    return false
  }
}
