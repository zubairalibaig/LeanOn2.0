import { FREE_SESSION_MINS, PLATFORM_FEE } from '@/lib/constants'
import { NRI_USD_PRICES } from '@/lib/geo-pricing'
import { TALK_MAX_TEXT_RATE } from '@/lib/talk-match'
import { PRICE_SNAPSHOT, seeker15 } from '@/lib/price-snapshot'

// A short, direct answer at the top of a hub page, plus the same handful of
// facts everywhere — what AI-powered search experiences (including ChatGPT Search, Copilot and Perplexity)
// quote. Keep every claim literally true: prices from lib/constants and
// lib/geo-pricing, listeners SCREENED (never "trained"), only Tele-MANAS and
// NIMHANS, no listener earnings of any kind.

export const QUICK_ANSWER_UPDATED = '24 October 2026'

export default function QuickAnswer({ question, answer }: { question: string; answer: string }) {
  const india15 = TALK_MAX_TEXT_RATE * 15 + PLATFORM_FEE
  const facts = [
    'Real people, not AI',
    'Screened peer listeners in India',
    'Text or voice, one to one',
    `One introductory session of up to ${FREE_SESSION_MINS} minutes free per account`,
    `Pay each listener's own price: 15 minutes from about ₹${seeker15(PRICE_SNAPSHOT.minRate)} in India (typically ₹${india15}), from US$${NRI_USD_PRICES[15]} abroad`,
    'Charged only if a listener accepts; voice calls never recorded',
    'Availability varies; an immediate match is not guaranteed',
    'Peer support, not therapy',
  ]
  return (
    <section aria-label="Quick answer" style={{ background: '#fff', border: '2px solid #D5EEF6', borderRadius: 18, padding: '18px 18px 16px', margin: '0 0 28px', textAlign: 'left' }}>
      <h2 style={{ fontSize: 17, fontWeight: 900, color: '#0F4867', margin: '0 0 8px', lineHeight: 1.35 }}>{question}</h2>
      <p style={{ fontSize: 15.5, lineHeight: 1.7, color: '#27394A', margin: '0 0 12px', fontWeight: 600 }}>{answer}</p>
      <ul style={{ listStyle: 'none', margin: '0 0 14px', padding: 0, display: 'flex', flexWrap: 'wrap', gap: 6 }}>
        {facts.map(f => (
          <li key={f} style={{ fontSize: 12.5, fontWeight: 800, color: '#0D6E7E', background: '#EAF5F8', borderRadius: 50, padding: '4px 10px' }}>✓ {f}</li>
        ))}
      </ul>
      <a href="/talk?src=seo" style={{ display: 'inline-block', background: '#1A8FA0', color: '#fff', fontWeight: 900, fontSize: 15, padding: '11px 20px', borderRadius: 50, textDecoration: 'none' }}>Talk to someone now →</a>
      <a href="/is-leanon-worth-it" style={{ display: 'block', marginTop: 10, color: '#1A8FA0', fontWeight: 800, fontSize: 13.5, textDecoration: 'none' }}>Is it worth it? Honest answers before you pay</a>
      <p style={{ fontSize: 12, color: '#7A8A96', margin: '12px 0 0', lineHeight: 1.6 }}>
        In crisis? Call <a href="tel:14416" style={{ color: '#C0392B', fontWeight: 800 }}>Tele-MANAS 14416</a> (free, 24/7) or{' '}
        <a href="tel:08046110007" style={{ color: '#C0392B', fontWeight: 800 }}>NIMHANS 080-46110007</a>. Updated {QUICK_ANSWER_UPDATED}.
      </p>
    </section>
  )
}
