import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Talk to Someone Online in Kuwait | LeanOn',
  description: 'Need a real person to talk to in Kuwait? LeanOn connects Indian expats with trained peer listeners 24/7 — in Hindi, Tamil, Malayalam and more. First 5 minutes free.',
  keywords: [
    'talk to someone online kuwait', 'someone to talk to kuwait', 'need to talk kuwait',
    'online chat support kuwait', 'talk to a person kuwait', 'emotional support online kuwait',
    'peer support kuwait indian', 'someone to listen kuwait expat',
    'talk to someone midnight kuwait', 'real person to talk to kuwait',
    'online listener kuwait', 'indian expat support kuwait', 'malayali listener kuwait',
    'hindi listener kuwait', 'talk to someone kuwait night',
  ],
  alternates: {
    canonical: 'https://www.leanon.app/kuwait-talk-to-someone',
    languages: { 'en-IN': 'https://www.leanon.app/kuwait-talk-to-someone' },
  },
  openGraph: {
    title: 'Talk to Someone Online in Kuwait — Real Indian Listeners | LeanOn',
    description: 'Need a real person to talk to in Kuwait? LeanOn connects Indian expats with peer listeners 24/7 — in your language, with no judgment.',
    url: 'https://www.leanon.app/kuwait-talk-to-someone',
    siteName: 'LeanOn',
    type: 'article',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can I talk to someone in Kuwait right now?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. LeanOn listeners are available 24/7 across time zones. No appointment needed, no waiting list. Browse listeners who are online now and start a conversation immediately.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I talk to an Indian listener who understands life in Kuwait?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Many LeanOn listeners are Indians with their own experience of living and working abroad — they understand expat loneliness, the pressure of sending money home, working in the Gulf, and the specific emotional weight that comes with living far from family.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a Malayalam or Hindi speaker I can talk to?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. LeanOn has listeners in twelve Indian languages including Malayalam, Hindi, Tamil, Telugu, Kannada, and more. You can filter listeners by the language you are most comfortable in.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it confidential?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Completely. Sessions are anonymous. Your employer, your family, and anyone in Kuwait will not know. You can use LeanOn without giving your real name.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does it cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Your first 5 minutes are free with every new listener. Paid sessions start from ₹130 for 15 minutes (approximately 0.6 KWD). You pay from an in-app wallet and unused time is fully refunded.',
      },
    },
  ],
}

export default function KuwaitTalkToSomeonePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main style={{ maxWidth: 720, margin: '0 auto', padding: '40px 20px 80px', fontFamily: 'system-ui, sans-serif', color: '#1a1a2e' }}>
        <nav style={{ fontSize: 13, color: '#888', marginBottom: 24 }}>
          <a href="/" style={{ color: '#888', textDecoration: 'none' }}>Home</a>
          {' › '}
          <span>Talk to Someone — Kuwait</span>
        </nav>

        <h1 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.2rem)', fontWeight: 800, lineHeight: 1.2, marginBottom: 16 }}>
          Need Someone to Talk to in Kuwait?<br />
          <span style={{ color: '#1A8FA0' }}>Real Indian Listeners, Any Hour</span>
        </h1>

        <p style={{ fontSize: '1.05rem', color: '#444', lineHeight: 1.7, marginBottom: 32 }}>
          Kuwait can be isolating — especially late at night when there is nobody to call, or when what you are carrying is too heavy to explain to your family back home. LeanOn connects you with trained Indian peer listeners who understand the Gulf expat experience. Anonymous, available 24/7, in your language.
        </p>

        <a href="/browse" style={{ display: 'inline-block', background: '#0F4867', color: '#fff', padding: '14px 28px', borderRadius: 10, textDecoration: 'none', fontWeight: 700, fontSize: '1rem', marginBottom: 48 }}>
          Browse listeners — first 5 min free
        </a>

        <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: 12 }}>Why LeanOn for Indians in Kuwait?</h2>
        <ul style={{ lineHeight: 2, paddingLeft: 20, color: '#333', marginBottom: 32 }}>
          <li>Listeners who understand Gulf expat life — not just generic support</li>
          <li>Malayalam, Hindi, Tamil, Telugu and 9 more Indian languages</li>
          <li>No appointment — available at 2am Kuwait time if you need it</li>
          <li>Anonymous — your name, your employer, your family will not know</li>
          <li>First 5 minutes free with every new listener</li>
        </ul>

        <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: 12 }}>What People Talk About</h2>
        <p style={{ color: '#444', lineHeight: 1.7, marginBottom: 8 }}>
          There is no minimum seriousness for reaching out. People talk to LeanOn listeners about loneliness, homesickness, job stress, relationship problems, family pressure back home, the feeling of not quite fitting in, the particular weight of being far from the people who know you. All of it is valid.
        </p>
        <ul style={{ lineHeight: 2, paddingLeft: 20, color: '#333', marginBottom: 40 }}>
          <li>Missing home and family while living in Kuwait</li>
          <li>Work stress and difficult managers</li>
          <li>Relationship problems — with a partner, with family back home</li>
          <li>Loneliness even when surrounded by colleagues</li>
          <li>Financial pressure and the weight of being the family's breadwinner</li>
          <li>Anxiety about visa status, renewals, the future</li>
          <li>Just needing someone to talk to, no specific problem required</li>
        </ul>

        <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: 16 }}>Frequently Asked Questions</h2>
        {faqSchema.mainEntity.map((q, i) => (
          <details key={i} style={{ borderBottom: '1px solid #eee', paddingBottom: 16, marginBottom: 16 }}>
            <summary style={{ fontWeight: 600, cursor: 'pointer', fontSize: '1rem', paddingTop: 8 }}>{q.name}</summary>
            <p style={{ color: '#444', lineHeight: 1.7, marginTop: 10, marginLeft: 4 }}>{q.acceptedAnswer.text}</p>
          </details>
        ))}

        <div style={{ background: '#f0f9fb', borderRadius: 16, padding: '28px 24px', marginTop: 40, textAlign: 'center' }}>
          <p style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: 8 }}>Ready to talk to a real person?</p>
          <p style={{ color: '#555', marginBottom: 20 }}>First 5 minutes free. No appointment, no forms, no judgment.</p>
          <a href="/browse" style={{ display: 'inline-block', background: '#0F4867', color: '#fff', padding: '14px 32px', borderRadius: 10, textDecoration: 'none', fontWeight: 700, fontSize: '1rem' }}>
            Find a listener now
          </a>
        </div>

        <p style={{ marginTop: 32, fontSize: 13, color: '#aaa', textAlign: 'center' }}>
          Crisis support: NIMHANS 080-46110007 · Tele-MANAS 14416
        </p>
      </main>
    </>
  )
}
