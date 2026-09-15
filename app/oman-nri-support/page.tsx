import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'NRI Support for Indians in Oman | Emotional Support Online | LeanOn',
  description: 'Emotional support for Indians living and working in Oman. Talk anonymously to a trained Indian peer listener who understands the Gulf expat experience. Free trial.',
  keywords: [
    'NRI support Oman', 'Indian expat Oman emotional support', 'Indians in Oman lonely',
    'Oman Indian mental health', 'Gulf NRI support Oman', 'Indians working in Oman',
    'emotional support Oman expat', 'Indian listener Oman online',
    'Oman NRI homesick', 'Indian expat Oman anxiety', 'Kerala NRI Oman support',
    'NRI Oman talk to someone', 'Muscat Indian emotional support',
  ],
  alternates: {
    canonical: 'https://www.leanon.app/oman-nri-support',
    languages: { 'en-IN': 'https://www.leanon.app/oman-nri-support' },
  },
  openGraph: {
    title: 'NRI Emotional Support for Indians in Oman | LeanOn',
    description: 'Indian in Oman and feeling the weight of expat life? Talk anonymously to a peer listener who understands. First 5 minutes free.',
    url: 'https://www.leanon.app/oman-nri-support',
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
      name: 'Is there emotional support available for Indians in Oman?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. LeanOn connects you with trained Indian peer listeners who understand Gulf expat life. Sessions are anonymous, available 24/7, and start with a free 5 minutes. No appointment needed.',
      },
    },
    {
      '@type': 'Question',
      name: 'What problems do Indians in Oman typically reach out about?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Common topics include loneliness, homesickness, work stress, financial pressure from being the family\'s main earner, relationship problems with a long-distance partner or family back home, and the general weight of being far from the people who know you. There is no minimum seriousness — you can reach out just because you are having a hard week.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I talk in Malayalam, Hindi or Tamil?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. LeanOn supports twelve Indian languages including Malayalam, Hindi, Tamil, Telugu, Kannada, Marathi, Bengali, and Gujarati. The Kerala community is very large in Oman — there are Malayalam-speaking listeners available.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will anyone know I am using this?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Sessions are completely anonymous. You can join without using your real name. Nothing is shared with your employer, your family, or anyone in Oman.',
      },
    },
  ],
}

export default function OmanNriSupportPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main style={{ maxWidth: 720, margin: '0 auto', padding: '40px 20px 80px', fontFamily: 'system-ui, sans-serif', color: '#1a1a2e' }}>
        <nav style={{ fontSize: 13, color: '#888', marginBottom: 24 }}>
          <a href="/" style={{ color: '#888', textDecoration: 'none' }}>Home</a>
          {' › '}
          <span>NRI Support — Oman</span>
        </nav>

        <h1 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.2rem)', fontWeight: 800, lineHeight: 1.2, marginBottom: 16 }}>
          Emotional Support for Indians in Oman<br />
          <span style={{ color: '#1A8FA0' }}>Someone Who Understands Gulf Expat Life</span>
        </h1>

        <p style={{ fontSize: '1.05rem', color: '#444', lineHeight: 1.7, marginBottom: 32 }}>
          The Indian community in Oman — particularly from Kerala, Tamil Nadu, and Andhra Pradesh — is one of the largest in the Gulf. But the size of the community does not close the emotional gap that expat life creates. LeanOn is a trained peer listener who understands the specific weight of this life, available anonymously any hour of the day.
        </p>

        <a href="/browse" style={{ display: 'inline-block', background: '#0F4867', color: '#fff', padding: '14px 28px', borderRadius: 10, textDecoration: 'none', fontWeight: 700, fontSize: '1rem', marginBottom: 48 }}>
          Talk to an Indian listener — first 5 min free
        </a>

        <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: 12 }}>What the Gulf Expat Experience Carries</h2>
        <p style={{ color: '#444', lineHeight: 1.7, marginBottom: 16 }}>
          There is a specific loneliness that comes with being an NRI in the Gulf: you are successful by every external measure, your family is proud, your friends back home assume you are living a good life — and you are still carrying something heavy that you cannot quite put into words or share with anyone around you.
        </p>
        <p style={{ color: '#444', lineHeight: 1.7, marginBottom: 32 }}>
          The financial pressure is real. The distance from family is real. The isolation of not having anyone close enough to say the true thing to is real. LeanOn is designed for exactly this — not therapy, not a helpline, but a trained human listener who has lived something similar and will not minimise what you are carrying.
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
          Crisis support: NIMHANS 080-46110007 · Tele-MANAS 14416
        </p>
      </main>
    </>
  )
}
