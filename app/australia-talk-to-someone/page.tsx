import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Talk to Someone Online in Australia | Indian Expat Support | LeanOn',
  description: 'Need a real person to talk to in Australia? LeanOn connects Indian expats with trained peer listeners 24/7 — in Hindi, Tamil, Telugu, Malayalam and more. First 5 minutes free.',
  keywords: [
    'talk to someone online australia', 'someone to talk to australia indian', 'need to talk australia expat',
    'online chat support australia indian', 'emotional support australia indian',
    'peer support australia indian', 'someone to listen australia expat',
    'real person to talk to australia', 'online listener australia indian',
    'Indian expat support australia', 'hindi listener australia', 'tamil listener australia',
    'indian australian loneliness', 'NRI australia talk to someone', 'Indian in australia emotional support',
    'Indian expat mental health australia',
  ],
  alternates: {
    canonical: 'https://www.leanon.app/australia-talk-to-someone',
    languages: { 'en-AU': 'https://www.leanon.app/australia-talk-to-someone' },
  },
  openGraph: {
    title: 'Talk to Someone Online in Australia — Real Indian Peer Listeners | LeanOn',
    description: 'Need a real person to talk to in Australia? LeanOn connects Indian expats with peer listeners 24/7 — in your language, anonymously.',
    url: 'https://www.leanon.app/australia-talk-to-someone',
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
      name: 'Can I talk to someone in Australia right now?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. LeanOn listeners are available 24/7 across time zones. No appointment, no waiting list. The first 5 minutes are free with every new listener. Browse who is online and start a conversation immediately.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are there Indian peer listeners who understand expat life in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. LeanOn peer listeners are real Indians, many with their own experience of moving abroad. They understand the emotional landscape of immigrating — the initial excitement that gives way to loneliness, the gap between how it looks to people back home and how it actually feels, the pressure of building a life in a new country without your support network nearby.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I speak in Hindi, Tamil, Telugu or Gujarati?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. LeanOn supports twelve Indian languages including Hindi, Tamil, Telugu, Malayalam, Kannada, Gujarati, Marathi, Bengali, and Punjabi. You can filter listeners by language.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is LeanOn different from Australian mental health services like Beyond Blue?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Beyond Blue and similar services are crisis-oriented and clinical. LeanOn is peer support — not for mental health emergencies, but for the everyday emotional weight that does not quite meet a clinical threshold but is still real: loneliness, homesickness, relationship problems, the exhaustion of starting over in a new country. There is no waitlist and no clinical notes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it anonymous?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Completely anonymous. You can use LeanOn with a nickname. Your employer, your family, your social circle in Australia will not know.',
      },
    },
  ],
}

export default function AustraliaTalkToSomeonePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main style={{ maxWidth: 720, margin: '0 auto', padding: '40px 20px 80px', fontFamily: 'system-ui, sans-serif', color: '#1a1a2e' }}>
        <nav style={{ fontSize: 13, color: '#888', marginBottom: 24 }}>
          <a href="/" style={{ color: '#888', textDecoration: 'none' }}>Home</a>
          {' › '}
          <span>Talk to Someone — Australia</span>
        </nav>

        <h1 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.2rem)', fontWeight: 800, lineHeight: 1.2, marginBottom: 16 }}>
          Need Someone to Talk to in Australia?<br />
          <span style={{ color: '#1A8FA0' }}>Real Indian Peer Listeners, Any Hour</span>
        </h1>

        <p style={{ fontSize: '1.05rem', color: '#444', lineHeight: 1.7, marginBottom: 32 }}>
          Australia has a large and growing Indian community — Melbourne, Sydney, Brisbane, Perth. The professional opportunities are real. So is the loneliness that can set in when the excitement of the move wears off and you realise the people who actually know you are ten thousand kilometres away. LeanOn gives you a real Indian peer listener who understands this from the inside. Anonymous, in your language, available now.
        </p>

        <a href="/browse" style={{ display: 'inline-block', background: '#0F4867', color: '#fff', padding: '14px 28px', borderRadius: 10, textDecoration: 'none', fontWeight: 700, fontSize: '1rem', marginBottom: 48 }}>
          Browse listeners — first 5 min free
        </a>

        <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: 12 }}>What Indians in Australia Talk About</h2>
        <ul style={{ lineHeight: 2, paddingLeft: 20, color: '#333', marginBottom: 32 }}>
          <li>The gap between how the move looks to family back home and how it actually feels</li>
          <li>Loneliness in a country where you are professional but not close to anyone</li>
          <li>Immigration stress — visa anxiety, PR applications, uncertainty about the future</li>
          <li>Relationship strain — long distance with a partner, or conflict with family back home</li>
          <li>The exhaustion of starting over: building a social life from scratch as an adult</li>
          <li>Just needing to say something out loud to a person who gets the Indian part</li>
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
          Crisis support: NIMHANS 080-46110007 · Tele-MANAS 14416 · Australian Lifeline 13 11 14
        </p>
      </main>
    </>
  )
}
