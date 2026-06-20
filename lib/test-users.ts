// Owner / QA accounts that bypass the free-trial caps so they can start
// unlimited free sessions with any listener (used for testing and for the
// owner to reach out to listeners directly).
//
// SECURITY: phone numbers live ONLY in env vars — never hardcoded in source or
// shown in the UI (see CLAUDE.md). Set TEST_UNLIMITED_PHONES to a comma-
// separated list of numbers, e.g. "+919620155155,+919999999999". When the env
// var is unset, this returns false for everyone and the normal caps apply.
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
