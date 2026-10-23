import QuickAnswer from '@/app/components/QuickAnswer'
import { GEO_QUESTIONS, PRICE } from '@/lib/geo-questions'

// QuickAnswer for the lib/geo-questions.ts entry that points at `path`.
// The price sentence is dropped because QuickAnswer already shows live prices.
export default function GeoQuickAnswer({ path }: { path: string }) {
  const g = GEO_QUESTIONS.find(q => q.url === path)
  if (!g) return null
  return <QuickAnswer question={g.q} answer={g.a.replace(' ' + PRICE, '').replace(PRICE, '').trim()} />
}
