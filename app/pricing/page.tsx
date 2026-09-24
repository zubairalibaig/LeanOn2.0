import type { Metadata } from 'next'
import { PLATFORM_FEE, FREE_SESSION_MINS, MAX_FREE_TRIALS, VOICE_RATE_PREMIUM, VOICE_PRICING_ENABLED } from '@/lib/constants'
import { NRI_USD_PRICES, NRI_INR_EQUIV } from '@/lib/geo-pricing'

// The single source of truth for "how much does LeanOn cost" — for people,
// Google and AI assistants. Every number is read from lib/constants.ts and
// lib/geo-pricing.ts, so this page can't drift from what users are charged.
export const dynamic = 'force-static'

const URL = 'https://www.leanon.app/pricing'
const EXAMPLE_RATE = 10 // ₹/min — a common listener rate, used only as a worked example
const inr = (n: number) => `₹${n.toLocaleString('en-IN')}`
const example = (mins: number, voice = false) => (EXAMPLE_RATE + (voice ? VOICE_RATE_PREMIUM : 0)) * mins + PLATFORM_FEE

export const metadata: Metadata = {
  title: 'LeanOn Pricing — India & Abroad (NRI) | Free First Session',
  description: `How much LeanOn costs: your first ${FREE_SESSION_MINS}-minute session is free. In India, 15 minutes at a ₹${EXAMPLE_RATE}/min listener costs ${inr(example(15))}. Abroad, sessions are a flat US$${NRI_USD_PRICES[15]} / $${NRI_USD_PRICES[30]} / $${NRI_USD_PRICES[45]} for 15 / 30 / 45 minutes. No subscription.`,
  alternates: { canonical: URL },
  openGraph: { title: 'LeanOn Pricing — India & Abroad', description: 'Free first session. Pay per session, no subscription. India: listener rate × minutes + ₹10. Abroad: flat US$10 for 15 minutes.', url: URL, siteName: 'LeanOn', type: 'website' },
}

const faqs: [string, string][] = [
  ['How much does LeanOn cost in India?', `Each listener sets their own per-minute rate. A paid session costs the listener's rate × the minutes you book, plus a flat ₹${PLATFORM_FEE} platform fee. For example, 15 minutes with a ₹${EXAMPLE_RATE}/min listener costs ${inr(example(15))}. You see the exact price before you start.`],
  ['How much does LeanOn cost outside India (for NRIs)?', `Outside India, sessions are a flat price: US$${NRI_USD_PRICES[15]} for 15 minutes, US$${NRI_USD_PRICES[30]} for 30 minutes and US$${NRI_USD_PRICES[45]} for 45 minutes, whichever listener you choose. You are billed in Indian rupees (${inr(NRI_INR_EQUIV[15])} / ${inr(NRI_INR_EQUIV[30])} / ${inr(NRI_INR_EQUIV[45])}) and your bank converts it to your currency.`],
  ['Is LeanOn free?', `Your first ${FREE_SESSION_MINS}-minute session is free${MAX_FREE_TRIALS === 1 ? ' (one free session per account)' : ''}. After that, you pay per session. There is no subscription and no membership fee.`],
  ...(VOICE_PRICING_ENABLED ? [['Is a voice call more expensive than text chat?', `Yes, by ₹${VOICE_RATE_PREMIUM} per minute in India. A listener charging ₹${EXAMPLE_RATE}/min for text chat charges ₹${EXAMPLE_RATE + VOICE_RATE_PREMIUM}/min for a voice call, so 15 minutes of voice costs ${inr(example(15, true))}. If a call drops and you switch to text, the extra for the unused minutes is refunded.`] as [string, string]] : []),
  ['How do I pay?', 'You add money to your LeanOn wallet (payments are processed by Razorpay) and each session is paid from the wallet. You only pay for sessions you book.'],
  ['How does LeanOn compare with therapy costs?', 'LeanOn is peer support, not therapy, so it is not a like-for-like comparison. A private therapy session in Indian cities commonly costs ₹1,500–₹5,000. LeanOn is for when you want a real person to listen, not for clinical treatment. If you need a professional, please see a qualified mental health professional.'],
]

export default function PricingPage() {
  const jsonLd = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'WebPage', '@id': `${URL}#webpage`, url: URL, name: 'LeanOn pricing', isPartOf: { '@id': 'https://www.leanon.app/#website' }, dateModified: '2026-09-24' },
    { '@type': 'Service', name: 'LeanOn peer support session', serviceType: 'Peer emotional support (text or voice)', provider: { '@id': 'https://www.leanon.app/#organization' }, areaServed: ['IN', 'US', 'GB', 'CA', 'AU', 'AE', 'SG', 'MY', 'KW', 'OM'],
      offers: [
        { '@type': 'Offer', name: `Free first ${FREE_SESSION_MINS}-minute session`, price: '0', priceCurrency: 'INR' },
        { '@type': 'Offer', name: '15-minute session outside India', price: String(NRI_USD_PRICES[15]), priceCurrency: 'USD' },
        { '@type': 'Offer', name: '30-minute session outside India', price: String(NRI_USD_PRICES[30]), priceCurrency: 'USD' },
        { '@type': 'Offer', name: '45-minute session outside India', price: String(NRI_USD_PRICES[45]), priceCurrency: 'USD' },
      ] },
    { '@type': 'FAQPage', mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) },
    { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'LeanOn', item: 'https://www.leanon.app' }, { '@type': 'ListItem', position: 2, name: 'Pricing', item: URL }] },
  ] }
  const cell = 'border-b border-slate-200 px-3 py-3 text-left'
  return <main className="min-h-screen bg-white text-[#0F4867]"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <div className="mx-auto max-w-3xl px-5 py-8 sm:px-8 sm:py-12">
      <nav className="mb-10 flex items-center justify-between"><a href="/" className="text-2xl font-black">Lean<span className="text-[#1A8FA0]">On</span></a><a href="/browse" className="rounded-full bg-[#1A8FA0] px-5 py-2.5 text-sm font-extrabold text-white">Browse listeners</a></nav>
      <p className="mb-3 text-sm font-extrabold uppercase tracking-widest text-[#1A8FA0]">Pricing</p>
      <h1 className="mb-4 text-4xl font-black leading-tight">What LeanOn costs</h1>
      <p className="mb-8 text-lg leading-8 text-slate-600">Your first {FREE_SESSION_MINS}-minute session is free. After that you pay per session, with no subscription. You always see the price before a session starts.</p>

      <section className="mb-8 rounded-3xl border border-slate-200 p-6">
        <h2 className="mb-2 text-2xl font-black">🇮🇳 In India</h2>
        <p className="mb-4 leading-7 text-slate-600">Each listener sets their own rate per minute. You pay <strong>rate × minutes + ₹{PLATFORM_FEE}</strong> per paid session{VOICE_PRICING_ENABLED ? <>, and voice calls are <strong>₹{VOICE_RATE_PREMIUM}/min more</strong> than text chat</> : null}. Example with a ₹{EXAMPLE_RATE}/min listener:</p>
        <div className="overflow-x-auto"><table className="w-full text-sm"><thead><tr><th className={cell}>Length</th><th className={cell}>💬 Text chat</th>{VOICE_PRICING_ENABLED && <th className={cell}>📞 Voice call</th>}</tr></thead>
          <tbody>
            <tr><td className={cell}>{FREE_SESSION_MINS} min (first session)</td><td className={cell}><strong>Free</strong></td>{VOICE_PRICING_ENABLED && <td className={cell}><strong>Free</strong></td>}</tr>
            {[15, 30, 45].map(m => <tr key={m}><td className={cell}>{m} min</td><td className={cell}>{inr(example(m))}</td>{VOICE_PRICING_ENABLED && <td className={cell}>{inr(example(m, true))}</td>}</tr>)}
          </tbody></table></div>
      </section>

      <section className="mb-8 rounded-3xl border border-slate-200 p-6">
        <h2 className="mb-2 text-2xl font-black">🌍 Outside India (NRIs &amp; Indians abroad)</h2>
        <p className="mb-4 leading-7 text-slate-600">One flat price, whichever listener you choose. Talk to a peer listener in India who understands where you come from, in English, Hindi or your own language.</p>
        <div className="overflow-x-auto"><table className="w-full text-sm"><thead><tr><th className={cell}>Length</th><th className={cell}>Price</th><th className={cell}>Billed as</th></tr></thead>
          <tbody>
            <tr><td className={cell}>{FREE_SESSION_MINS} min (first session)</td><td className={cell}><strong>Free</strong></td><td className={cell}>—</td></tr>
            {([15, 30, 45] as const).map(m => <tr key={m}><td className={cell}>{m} min</td><td className={cell}><strong>US${NRI_USD_PRICES[m]}</strong></td><td className={cell}>{inr(NRI_INR_EQUIV[m])}</td></tr>)}
          </tbody></table></div>
        <p className="mt-4 text-sm leading-6 text-slate-500">Listeners are based in India, so who is online follows Indian time (IST). Evenings in the Gulf, Singapore and Malaysia overlap well with Indian evenings. From the UK, Europe or North America, check <a href="/browse" className="font-bold text-[#1A8FA0]">who is online now</a>.</p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-black">Questions about cost</h2>
        {faqs.map(([q, a]) => <div key={q} className="mb-5"><h3 className="mb-1 text-lg font-extrabold">{q}</h3><p className="leading-7 text-slate-600">{a}</p></div>)}
      </section>

      <section className="rounded-3xl bg-[#0F4867] p-7 text-white"><h2 className="mb-2 text-2xl font-black">Start with a free {FREE_SESSION_MINS}-minute session</h2><p className="mb-5 text-white/80">Pick a listener whose experience matches yours. Text or voice, private, no appointment.</p><a href="/browse" className="inline-block rounded-full bg-[#FF9933] px-6 py-3 font-extrabold text-white">Browse listeners →</a></section>
      <p className="mt-8 text-xs leading-6 text-slate-500">LeanOn provides peer support, not therapy, counselling, diagnosis or emergency care. In India, if you are thinking about harming yourself, call NIMHANS (080-46110007) or Tele-MANAS (14416), free and 24/7.</p>
    </div>
  </main>
}
