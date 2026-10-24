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
  title: 'Talk to Someone — Request a Listener, First 5 Minutes Free | LeanOn',
  description: `Request a conversation with a real person — no appointment. Pick what's on your mind, choose text or voice, and LeanOn asks screened peer listeners in India who are online; a session starts when one accepts. First ${FREE_SESSION_MINS} minutes free, once per account.`,
  keywords: ['talk to someone now', 'talk to someone online india', 'someone to talk to', 'talk to a real person', 'relationship problems talk to someone', 'nri talk to someone', 'peer support india', 'online emotional support india', 'vent to someone online'],
  alternates: { canonical: URL },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Talk to someone now — LeanOn',
    description: `Request a one-to-one conversation with a screened peer listener in India. A session starts when a listener accepts. First ${FREE_SESSION_MINS} minutes free.`,
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
    description: 'One-to-one text or voice conversation with a screened peer listener in India, starting when an available listener accepts the request. Not therapy or emergency care.',
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
          .talk-info h2{font-size:16px;font-weight:900;color:#0F4867;margin:26px 0 8px;}
          .talk-info details{border-bottom:1px solid #E3EFF3;padding:10px 0;}
          .talk-info summary{font-size:14.5px;font-weight:800;color:#0F4867;cursor:pointer;list-style-position:inside;}
          .talk-info details p{margin:6px 0 2px;}
          .talk-info p,.talk-info li{font-size:13.5px;line-height:1.6;color:#3A6070;}
          .talk-info ol{margin:6px 0 0 20px;}
          .talk-info a{color:#1A8FA0;font-weight:800;}
        `}</style>
        <h2 id="talk-info-h">How Talk now works</h2>
        <ol>
          <li>Choose text or voice and tap what&apos;s on your mind.</li>
          <li>We ask a screened peer listener who is free now. No answer in about {TALK_TRY_SECS} seconds? We ask the next one.</li>
          <li>Talk privately, one to one. First {FREE_SESSION_MINS} minutes free, once per account. Peer support, not therapy.</li>
        </ol>
        <h2>Questions</h2>
        {TALK_FAQ.map(f => (
          <details key={f.q}>
            <summary>{f.q}</summary>
            <p>{f.a}</p>
          </details>
        ))}
        <p style={{ marginTop: 18 }}><a href="/how-leanon-works">How LeanOn works</a> · <a href="/pricing">Pricing</a> · <a href="/trust">Trust &amp; safety</a></p>
      </section>
    </>
  )
}
