// Input validation utilities — apply to all mutation routes (ITEM 6)

export const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i

export function parseBody(input: unknown): Record<string, unknown> {
  if (!input || typeof input !== 'object') throw new Error('Invalid body')
  return input as Record<string, unknown>
}

export function requireString(val: unknown, name: string, max = 500): string {
  if (typeof val !== 'string' || !val.trim()) throw new Error(`${name} is required`)
  return val.trim().slice(0, max)
}

export function requireUUID(val: unknown, name: string): string {
  if (typeof val !== 'string' || !UUID_RE.test(val)) throw new Error(`Invalid ${name}`)
  return val
}

export function optionalString(val: unknown, max = 500): string | null {
  if (val === undefined || val === null) return null
  if (typeof val !== 'string') return null
  return val.trim().slice(0, max) || null
}

export function requirePositiveInt(val: unknown, name: string): number {
  if (typeof val !== 'number' || !Number.isInteger(val) || val <= 0) {
    throw new Error(`${name} must be a positive integer`)
  }
  return val
}
