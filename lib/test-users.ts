// Owner / QA accounts that bypass the free-trial caps so they can start
// unlimited free sessions with any listener (used for testing and for the
// owner to reach out to listeners directly).
//
// SECURITY: phone numbers live ONLY in env vars — never hardcoded in source or
// shown in the UI (see CLAUDE.md). This repo is public, and a number listed here
// grants unlimited free sessions, so the example below is deliberately a
// non-routable placeholder rather than anyone's real number.
// Set TEST_UNLIMITED_PHONES to a comma-separated E.164 list,
// e.g. "+91XXXXXXXXXX,+91XXXXXXXXXX". When the env var is unset, this returns
// false for everyone and the normal caps apply.
export function isUnlimitedTestPhone(phone: string | null | undefined): boolean {
  if (!phone) return false
  const digits = (p: string) => p.replace(/[^0-9]/g, '')
  const target = digits(phone)
  if (!target) return false
  return (process.env.TEST_UNLIMITED_PHONES || '')
    .split(',')
    .map(digits)
    .filter(Boolean)
    .includes(target)
}
