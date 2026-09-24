import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Talk to Someone Online in UAE & Dubai | LeanOn',
  description: 'Need a real person to talk to in the UAE or Dubai? LeanOn connects Indian expats with trained peer listeners 24/7 — in Hindi, Tamil, Malayalam and more. First 5 minutes free.',
  keywords: [
    'talk to someone online UAE', 'someone to talk to dubai', 'need to talk UAE',
    'online chat support dubai', 'talk to a person UAE', 'emotional support online UAE',
    'peer support UAE indian', 'someone to listen dubai expat',
    'talk to someone midnight dubai', 'real person to talk to UAE',
    'online listener dubai', 'indian expat support UAE', 'tamil listener UAE',
    'hindi listener dubai', 'talk to someone UAE night', 'emotional support dubai',
    'someone to talk to UAE 24 hours',
  ],
  alternates: {
    canonical: 'https://www.leanon.app/uae-talk-to-someone',
    languages: { 'en-IN': 'https://www.leanon.app/uae-talk-to-someone' },
  },
  openGraph: {
    title: 'Talk to Someone Online in UAE & Dubai — Real Indian Listeners | LeanOn',
    description: 'Need a real person to talk to in the UAE? LeanOn connects Indian expats with peer listeners 24/7 — in your language, with no judgment.',
    url: 'https://www.leanon.app/uae-talk-to-someone',
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
      name: 'Can I talk to someone in the UAE right now?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. LeanOn listeners are available 24/7 across time zones. No appointment needed, no waiting list. Browse listeners who are online and start talking immediately — the first 5 minutes are free.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are there Indian listeners who understand life in Dubai or Abu Dhabi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. LeanOn peer listeners are real Indians, many with their own experience of living and working abroad. They understand Gulf expat life — the loneliness, the family pressure, the social performance of "doing well," and the particular weight of being far from home.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I speak in Hindi, Tamil, Malayalam or Telugu?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. LeanOn supports twelve Indian languages. The UAE has very large Malayali, Tamil, Telugu, Hindi, and Gujarati communities — listeners in all these languages are available.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it private and anonymous?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Completely. Sessions are anonymous. Your employer, your family, and your social circle in the UAE will not know. You can use LeanOn with a nickname.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does it cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Your first 5 minutes are free with every new listener. Paid sessions start from US$10 for 15 minutes. You pay from an in-app wallet; unused time is fully refunded.',
      },
    },
  ],
}

export default function UAETalkToSomeonePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main style={{ maxWidth: 720, margin: '0 auto', padding: '40px 20px 80px', fontFamily: 'system-ui, sans-serif', color: '#1a1a2e' }}>
        <nav style={{ fontSize: 13, color: '#888', marginBottom: 24 }}>
          <a href="/" style={{ color: '#888', textDecoration: 'none' }}>Home</a>
          {' › '}
          <span>Talk to Someone — UAE</span>
        </nav>

        <h1 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.2rem)', fontWeight: 800, lineHeight: 1.2, marginBottom: 16 }}>
          Need Someone to Talk to in the UAE?<br />
          <span style={{ color: '#1A8FA0' }}>Real Indian Listeners, Any Hour</span>
        </h1>

        <p style={{ fontSize: '1.05rem', color: '#444', lineHeight: 1.7, marginBottom: 32 }}>
          The UAE has one of the largest Indian communities in the world — and yet the loneliness that comes with expat life can still feel very real, very late at night, when there is nobody to call who truly understands. LeanOn gives you a trained Indian peer listener who gets the Dubai and Abu Dhabi experience from the inside. Anonymous, in your language, available now.
        </p>

        <a href="/browse" style={{ display: 'inline-block', background: '#0F4867', color: '#fff', padding: '14px 28px', borderRadius: 10, textDecoration: 'none', fontWeight: 700, fontSize: '1rem', marginBottom: 48 }}>
          Browse listeners — first 5 min free
        </a>

        <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: 12 }}>Why Indians in the UAE Reach Out</h2>
        <ul style={{ lineHeight: 2, paddingLeft: 20, color: '#333', marginBottom: 32 }}>
          <li>Loneliness even within a large Indian community</li>
          <li>Work pressure, difficult managers, uncertain visa situations</li>
          <li>Relationship problems — with a partner, or family back home</li>
          <li>The weight of being the family&apos;s financial anchor</li>
          <li>The exhaustion of maintaining the &quot;doing well&quot; narrative</li>
          <li>Midnight in Dubai when nobody is awake in India yet</li>
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
