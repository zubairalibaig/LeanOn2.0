import crypto from 'crypto'

// Google Play reviewer login (2026-10-21). Reviewers can't receive a LeanOn OTP
// (MSG91 sends it to a real phone), so ONE demo number may sign in with a fixed
// code instead. OFF unless both Vercel env vars are set:
//   REVIEW_LOGIN_PHONE  e.g. +919000000001   (a number nobody really uses)
//   REVIEW_LOGIN_CODE   6 digits, e.g. 482913
// Removing either env var (and redeploying) switches it off completely.
// The demo account is an ordinary seeker: it cannot apply as a listener
// (app/api/listener/apply) and a suspension blocks it like any other account.

function e164(raw: string): string | null {
  const d = String(raw ?? '').replace(/\D/g, '')
  if (!d) return null
  if (d.length === 10) return `+91${d}`
  if (d.length === 11 && d.startsWith('0')) return `+91${d.slice(1)}`
  if (d.length === 12 && d.startsWith('91')) return `+${d}`
  if (d.length >= 11 && d.length <= 15) return `+${d}`
  return null
}

export function reviewLoginPhone(): string | null {
  const p = process.env.REVIEW_LOGIN_PHONE
  const c = process.env.REVIEW_LOGIN_CODE
  if (!p || !c || !/^\d{4,8}$/.test(c)) return null
  return e164(p)
}

export function isReviewPhone(raw: string | null | undefined): boolean {
  const target = reviewLoginPhone()
  if (!target || !raw) return false
  return e164(raw) === target
}

export function reviewCodeMatches(code: string): boolean {
  const expected = process.env.REVIEW_LOGIN_CODE ?? ''
  const a = Buffer.from(String(code ?? ''))
  const b = Buffer.from(expected)
  return a.length === b.length && b.length > 0 && crypto.timingSafeEqual(a, b)
}

export { e164 as toE164 }
