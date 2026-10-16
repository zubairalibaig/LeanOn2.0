import type { Metadata } from 'next'
import { FREE_SESSION_MINS } from '@/lib/constants'
import { NRI_USD_PRICES } from '@/lib/geo-pricing'
import { TALK_FAQ, TALK_TRY_SECS } from '@/lib/talk-match'

// /talk — "Talk now": the match-first entry and LeanOn's primary link for
// anyone who wants to talk to someone. Indexable. The interactive page is a
// client component (its first render is empty without JavaScript), so the
// readable description and structured data are rendered HERE, on the server,
// for search engines and AI assistants. The page hides this block while a
// match is in progress (body.talk-busy).

const URL = 'https://www.leanon.app/talk'

export const metadata: Metadata = {
  title: 'Talk to Someone Now — Free First 5 Minutes | LeanOn Talk now',
  description: `Talk to a real person right now. Pick what's on your mind, choose text or voice, and LeanOn connects you with a screened peer listener in India who is free now. First ${FREE_SESSION_MINS} minutes free; for Indians in India and abroad.`,
  keywords: ['talk to someone now', 'talk to someone online india', 'someone to talk to', 'talk to a real person', 'relationship problems talk to someone', 'nri talk to someone', 'peer support india', 'online emotional support india', 'vent to someone online'],
  alternates: { canonical: URL },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Talk to someone now — LeanOn',
    description: `Connect with a screened peer listener in India who is free right now. First ${FREE_SESSION_MINS} minutes free.`,
    url: URL,
    siteName: 'LeanOn',
    type: 'website',
  },
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${URL}#webpage`,
    url: URL,
    name: 'LeanOn Talk now — talk to someone now',
    isPartOf: { '@id': 'https://www.leanon.app/#website' },
    about: { '@id': 'https://www.leanon.app/#organization' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'LeanOn Talk now',
    url: URL,
    serviceType: 'Peer emotional support (non-clinical)',
    provider: { '@id': 'https://www.leanon.app/#organization' },
    areaServed: ['India', 'United States', 'United Kingdom', 'Canada', 'Australia', 'United Arab Emirates', 'Kuwait', 'Oman', 'Singapore', 'Malaysia'],
    description: 'One-to-one text or voice conversation with a screened peer listener in India who is available now. Not therapy or emergency care.',
    offers: [
      { '@type': 'Offer', name: `Free ${FREE_SESSION_MINS}-minute first session`, price: '0', priceCurrency: 'INR', description: 'Once per account.' },
      { '@type': 'Offer', name: '15-minute session (outside India)', price: String(NRI_USD_PRICES[15]), priceCurrency: 'USD' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to talk to someone now on LeanOn',
    step: [
      { '@type': 'HowToStep', position: 1, name: "Pick what's on your mind", text: 'Relationship, family, work or studies, loneliness, anxiety or overthinking, or just needing to talk.' },
      { '@type': 'HowToStep', position: 2, name: 'Choose text or voice', text: 'Type at your own pace or talk it through out loud.' },
      { '@type': 'HowToStep', position: 3, name: 'Confirm your phone number', text: 'A one-time code; your number is never shown to the listener.' },
      { '@type': 'HowToStep', position: 4, name: 'Get connected', text: `LeanOn asks a listener who is free now, and the next one if they cannot answer within about ${TALK_TRY_SECS} seconds.` },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: TALK_FAQ.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  },
]

export default function TalkLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
      <section className="talk-info" aria-labelledby="talk-info-h">
        <style>{`
          .talk-info{max-width:520px;margin:-90px auto 0;padding:0 18px 130px;font-family:'Nunito',system-ui,sans-serif;color:#27394A;}
          body.talk-busy .talk-info{display:none;}
          .talk-info h2{font-size:19px;font-weight:900;color:#0F4867;margin:26px 0 8px;}
          .talk-info h3{font-size:15px;font-weight:800;color:#0F4867;margin:14px 0 3px;}
          .talk-info p,.talk-info li{font-size:14px;line-height:1.65;color:#3A6070;}
          .talk-info ol{margin:6px 0 0 20px;}
          .talk-info a{color:#1A8FA0;font-weight:800;}
        `}</style>
        <h2 id="talk-info-h">Talk to someone now — how it works</h2>
        <ol>
          <li>Pick what&apos;s on your mind and choose text or voice.</li>
          <li>Confirm your phone number with a one-time code. Your number is never shown to the listener.</li>
          <li>LeanOn asks a screened peer listener who is free right now. If they can&apos;t answer within about {TALK_TRY_SECS} seconds, the next one is asked automatically.</li>
          <li>Talk privately, one to one. Your first {FREE_SESSION_MINS} minutes are free.</li>
        </ol>
        <h2>Questions</h2>
        {TALK_FAQ.map(f => (
          <div key={f.q}>
            <h3>{f.q}</h3>
            <p>{f.a}</p>
          </div>
        ))}
        <p style={{ marginTop: 18 }}>More: <a href="/how-leanon-works">How LeanOn works</a> · <a href="/pricing">Pricing</a> · <a href="/trust">Trust &amp; safety</a> · <a href="/browse">See all listeners</a></p>
      </section>
    </>
  )
}
