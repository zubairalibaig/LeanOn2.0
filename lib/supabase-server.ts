import { createServerClient } from '@supabase/ssr'
import { createClient as createSupabaseClient } from '@supabase/supabase-js'
import { cookies } from 'next/headers'
import type { CookieOptions } from '@supabase/ssr'

const URL  = process.env.NEXT_PUBLIC_SUPABASE_URL!
const ANON = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// Server client — uses caller's session cookie, respects RLS
// Only import this in Server Components or API route handlers
export function createServerSupabaseClient() {
  const c = cookies()
  return createServerClient(URL, ANON, {
    cookies: {
      get(name: string)                                    { return c.get(name)?.value },
      set(name: string, value: string, opts: CookieOptions) {
        try { c.set({ name, value, ...opts }) } catch {}
      },
      remove(name: string, opts: CookieOptions) {
        try { c.set({ name, value: '', ...opts }) } catch {}
      },
    },
  })
}

// Admin client — bypasses RLS; only for trusted server-side operations.
//
// CRITICAL: we pass a `cache: 'no-store'` fetch wrapper. supabase-js issues its
// SELECT/count queries as HTTP GET requests, and Next.js's Data Cache caches GET
// fetches by default. Without this, presence reads (is_available on /browse and
// in the admin KPIs) are served from a stale snapshot — a listener toggles
// offline, the DB updates, but cached reads keep showing them online until the
// cache revalidates. That produced the long-standing "go online/offline doesn't
// reflect" bug. no-store guarantees every read sees the current row.
export function createAdminClient() {
  return createSupabaseClient(URL, process.env.SUPABASE_SERVICE_ROLE_KEY!, {
    auth: { persistSession: false, autoRefreshToken: false },
    global: {
      fetch: (input: RequestInfo | URL, init?: RequestInit) =>
        fetch(input, { ...init, cache: 'no-store' }),
    },
  })
}
