import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'NRI Support for Indians in Australia | Emotional Support Online | LeanOn',
  description: 'Emotional support for Indians living in Australia. Talk to a trained Indian peer listener who understands immigrant life, loneliness, visa stress and family pressure. Anonymous. Free trial.',
  keywords: [
    'NRI support australia', 'Indian expat australia emotional support', 'Indians in australia lonely',
    'australia indian mental health', 'NRI australia loneliness', 'Indians working in australia',
    'emotional support australia expat indian', 'Indian listener australia online',
    'australia NRI homesick', 'Indian expat australia anxiety', 'Indian immigrant australia support',
    'NRI australia talk to someone', 'Indian student australia support', 'PR visa anxiety australia indian',
    'Indian Australian mental health peer support',
  ],
  alternates: {
    canonical: 'https://www.leanon.app/australia-nri-support',
    languages: { 'en-AU': 'https://www.leanon.app/australia-nri-support' },
  },
  openGraph: {
    title: 'NRI Emotional Support for Indians in Australia | LeanOn',
    description: 'Indian in Australia and carrying the weight of expat life? Talk anonymously to a peer listener who understands. First 5 minutes free.',
    url: 'https://www.leanon.app/australia-nri-support',
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
      name: 'Is there peer support available for Indians in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. LeanOn connects you with trained Indian peer listeners who understand the NRI experience — immigration stress, loneliness, homesickness, family pressure, the gap between the life you imagined and the one you are living. Sessions are anonymous, available 24/7, and start with a free 5 minutes.',
      },
    },
    {
      '@type': 'Question',
      name: 'What makes LeanOn different from Australian mental health services?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Australian services like Beyond Blue and Lifeline focus on clinical mental health and crisis support. LeanOn is peer support — for the everyday emotional weight that falls below a clinical threshold but is still real: loneliness, the exhaustion of starting over, the particular pressure of being an Indian immigrant in Australia. No waitlists, no referrals, no clinical notes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I talk about visa stress and immigration anxiety?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Many Indians in Australia carry visa-related anxiety — the PR process, 189/190/491 points, partner visa timelines, uncertainty about the future. LeanOn listeners are not immigration lawyers, but they can listen without judgment and without needing the whole thing explained from the beginning. The emotional weight of that uncertainty is real, and having someone who gets it can help.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I speak in Hindi, Tamil, Telugu or Gujarati?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. LeanOn supports twelve Indian languages including Hindi, Tamil, Telugu, Malayalam, Kannada, Gujarati, Marathi, Bengali, and Punjabi.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it anonymous?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Completely. You can use LeanOn with a nickname. Nothing is shared with your employer, your partner\'s visa applications, or your family in India.',
      },
    },
  ],
}

export default function AustraliaNriSupportPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main style={{ maxWidth: 720, margin: '0 auto', padding: '40px 20px 80px', fontFamily: 'system-ui, sans-serif', color: '#1a1a2e' }}>
        <nav style={{ fontSize: 13, color: '#888', marginBottom: 24 }}>
          <a href="/" style={{ color: '#888', textDecoration: 'none' }}>Home</a>
          {' › '}
          <span>NRI Support — Australia</span>
        </nav>

        <h1 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.2rem)', fontWeight: 800, lineHeight: 1.2, marginBottom: 16 }}>
          Emotional Support for Indians in Australia<br />
          <span style={{ color: '#1A8FA0' }}>Someone Who Gets the Immigrant Experience</span>
        </h1>

        <p style={{ fontSize: '1.05rem', color: '#444', lineHeight: 1.7, marginBottom: 32 }}>
          Moving to Australia is an achievement. It can also be exhausting, lonely, and nothing like what you imagined. The people back home think you are living the dream. The people around you in Australia are colleagues, not close friends. And the weight of building a life from scratch — while managing visa stress, missing family, and holding the gap between expectation and reality — can be very real.
        </p>
        <p style={{ fontSize: '1.05rem', color: '#444', lineHeight: 1.7, marginBottom: 32 }}>
          LeanOn is a trained Indian peer listener — not a therapist, not a helpline — who has lived through something similar and is there to listen without judgment. Anonymous, available in your language, no appointment needed.
        </p>

        <a href="/browse" style={{ display: 'inline-block', background: '#0F4867', color: '#fff', padding: '14px 28px', borderRadius: 10, textDecoration: 'none', fontWeight: 700, fontSize: '1rem', marginBottom: 48 }}>
          Talk to an Indian listener — first 5 min free
        </a>

        <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: 12 }}>What the Australian NRI Experience Actually Carries</h2>
        <p style={{ color: '#444', lineHeight: 1.7, marginBottom: 16 }}>
          The PR timeline anxiety. The loneliness of weekends in a new city where you are professional but not close to anyone. The strain of long-distance with a partner or family in India. The particular isolation of being the person everyone back home thinks is doing brilliantly.
        </p>
        <p style={{ color: '#444', lineHeight: 1.7, marginBottom: 32 }}>
          Most of this does not meet the threshold for clinical support. And most of it is too complicated to explain to the people around you in Australia, or too worrying to share with family back home. Peer support fills exactly this gap.
        </p>

        <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: 16 }}>Frequently Asked Questions</h2>
        {faqSchema.mainEntity.map((q, i) => (
          <details key={i} style={{ borderBottom: '1px solid #eee', paddingBottom: 16, marginBottom: 16 }}>
            <summary style={{ fontWeight: 600, cursor: 'pointer', fontSize: '1rem', paddingTop: 8 }}>{q.name}</summary>
            <p style={{ color: '#444', lineHeight: 1.7, marginTop: 10, marginLeft: 4 }}>{q.acceptedAnswer.text}</p>
          </details>
        ))}

        <div style={{ background: '#f0f9fb', borderRadius: 16, padding: '28px 24px', marginTop: 40, textAlign: 'center' }}>
          <p style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: 8 }}>You do not have to hold it alone.</p>
          <p style={{ color: '#555', marginBottom: 20 }}>First 5 minutes free. Anonymous. In your language.</p>
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
