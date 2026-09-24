import type { createAdminClient } from '@/lib/supabase-server'

// PostgREST returns at most 1,000 rows per request (Supabase default max-rows),
// silently. Any KPI that sums or de-duplicates rows must page through all of them.
export type Sb = ReturnType<typeof createAdminClient>
export async function fetchAll<T>(build: (sb: Sb) => { range: (a: number, b: number) => PromiseLike<{ data: unknown; error: { message: string } | null }> }, sb: Sb): Promise<T[]> {
  const PAGE = 1000
  const out: T[] = []
  for (let from = 0; ; from += PAGE) {
    const { data, error } = await build(sb).range(from, from + PAGE - 1)
    if (error) throw new Error(error.message)
    const rows = (data ?? []) as T[]
    out.push(...rows)
    if (rows.length < PAGE) return out
  }
}

