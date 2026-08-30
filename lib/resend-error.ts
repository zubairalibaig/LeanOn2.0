/**
 * Resend's SDK reports API errors as a PLAIN object ({ statusCode, name,
 * message }) via the returned { data, error } — it does NOT throw, and the
 * object is not an Error instance. So naive logging with
 * `err instanceof Error ? err.message : String(err)` collapses it to the
 * useless "[object Object]", hiding the real reason (unverified sending
 * domain, bad from-address, rate limit, …).
 *
 * This surfaces the actual message so a rejected send names its own cause in
 * the logs. Used by every path that sends through Resend (contact form,
 * self-harm crisis escalation).
 */
export function serializeResendError(error: unknown): string {
  if (error instanceof Error) return error.message
  if (error && typeof error === 'object') {
    const e = error as { statusCode?: number; name?: string; message?: string }
    const parts = [e.name, e.message].filter(Boolean).join(': ')
    return parts ? `${parts}${e.statusCode ? ` (HTTP ${e.statusCode})` : ''}` : JSON.stringify(error)
  }
  return String(error)
}
