import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'NRI Support for Indians in Kuwait | Emotional Support Online | LeanOn',
  description: 'Emotional support for Indians living and working in Kuwait. Talk anonymously to a trained Indian peer listener who understands the Gulf expat experience. Free trial.',
  keywords: [
    'NRI support Kuwait', 'Indian expat Kuwait emotional support', 'Indian in Kuwait feeling lonely',
    'Kuwait Indian mental health', 'Gulf NRI support', 'Indians working in Kuwait',
    'emotional support Kuwait expat', 'Indian listener Kuwait online',
    'Kuwait NRI homesick', 'Indian expat Kuwait anxiety', 'Kerala NRI Kuwait support',
    'NRI Kuwait talk to someone', 'Gulf expat mental health Indian',
  ],
  alternates: {
    canonical: 'https://www.leanon.app/kuwait-nri-support',
    languages: { 'en-IN': 'https://www.leanon.app/kuwait-nri-support' },
  },
  openGraph: {
    title: 'Emotional Support for Indians in Kuwait — NRI Peer Support | LeanOn',
    description: 'Indian in Kuwait and feeling the weight of expat life? LeanOn peer listeners understand Gulf NRI experience. Anonymous, in your language, first 5 minutes free.',
    url: 'https://www.leanon.app/kuwait-nri-support',
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
      name: 'Is there emotional support available for Indians in Kuwait?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. LeanOn connects you with trained Indian peer listeners who understand the NRI and Gulf expat experience. Sessions are anonymous, available 24/7, and start with a free 5 minutes. No appointment needed.',
      },
    },
    {
      '@type': 'Question',
      name: 'What problems do Indians in Kuwait typically reach out about?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Common topics include loneliness, homesickness, work stress, relationship issues with family back home or a partner, financial pressure from being the family\'s main earner, and anxiety about visa renewals or job security. There is no minimum seriousness — you can reach out just because you are having a hard week.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I talk in Malayalam or Hindi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. LeanOn has listeners in twelve Indian languages including Malayalam, Hindi, Tamil, Telugu, Kannada, Marathi, Bengali, and Gujarati. The Kerala community is particularly large in Kuwait — there are Malayalam-speaking listeners available.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will my employer or family know I am using this?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Sessions are completely anonymous. You can join without using your real name. No information is shared with anyone outside the session.',
      },
    },
  ],
}

export default function KuwaitNriSupportPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main style={{ maxWidth: 720, margin: '0 auto', padding: '40px 20px 80px', fontFamily: 'system-ui, sans-serif', color: '#1a1a2e' }}>
        <nav style={{ fontSize: 13, color: '#888', marginBottom: 24 }}>
          <a href="/" style={{ color: '#888', textDecoration: 'none' }}>Home</a>
          {' › '}
          <span>NRI Support — Kuwait</span>
        </nav>

        <h1 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.2rem)', fontWeight: 800, lineHeight: 1.2, marginBottom: 16 }}>
          Emotional Support for Indians in Kuwait<br />
          <span style={{ color: '#1A8FA0' }}>Someone Who Gets the Gulf Expat Life</span>
        </h1>

        <p style={{ fontSize: '1.05rem', color: '#444', lineHeight: 1.7, marginBottom: 32 }}>
          Life in Kuwait has a particular weight to it — long working hours, distance from family, the pressure of being the one who is "settled abroad," and a loneliness that can be hard to name when you are surrounded by people. LeanOn gives you a trained Indian peer listener who understands this from the inside. Anonymous, available any hour, in your language.
        </p>

        <a href="/browse" style={{ display: 'inline-block', background: '#0F4867', color: '#fff', padding: '14px 28px', borderRadius: 10, textDecoration: 'none', fontWeight: 700, fontSize: '1rem', marginBottom: 48 }}>
          Talk to an Indian listener — first 5 min free
        </a>

        <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: 12 }}>The NRI Experience Kuwait Does Not Talk About</h2>
        <p style={{ color: '#444', lineHeight: 1.7, marginBottom: 24 }}>
          There is an unspoken rule in many Indian expat communities: you are supposed to be grateful. You left India, you are earning well by comparison, your family is proud. Admitting that you are lonely, or anxious, or that something is deeply wrong — that can feel like ingratitude. So most people say nothing.
        </p>
        <p style={{ color: '#444', lineHeight: 1.7, marginBottom: 32 }}>
          LeanOn is built for exactly this. A private conversation with someone who has lived something similar and will not minimise what you are carrying. The Gulf community — particularly the Kerala, Tamil Nadu, and Andhra Pradesh diaspora in Kuwait — is large, but the emotional support infrastructure within it is nearly invisible. This is an attempt to change that.
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
