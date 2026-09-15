import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'AI Chatbot Alternative Malaysia — Real Human Support for Indians | LeanOn',
  description: 'Tired of talking to ChatGPT, Claude or Gemini about your feelings in Malaysia? LeanOn connects Indians in KL and across Malaysia with real trained peer listeners. Anonymous. 24/7.',
  keywords: [
    'AI chatbot alternative Malaysia', 'ChatGPT alternative Malaysia Indian', 'human listener Malaysia',
    'real person emotional support Malaysia', 'alternative to ChatGPT Malaysia', 'better than AI chatbot Malaysia',
    'human connection instead of AI Malaysia', 'tired of talking to AI Malaysia',
    'Tamil listener Malaysia AI alternative', 'peer support vs AI Malaysia Indian',
    'Indian expat AI alternative Malaysia KL', 'Indian Malaysian mental health AI alternative',
  ],
  alternates: {
    canonical: 'https://www.leanon.app/ai-chatbot-alternative-malaysia',
    languages: { 'en-MY': 'https://www.leanon.app/ai-chatbot-alternative-malaysia' },
  },
  openGraph: {
    title: 'AI Chatbot Alternative in Malaysia — Talk to a Real Indian Listener | LeanOn',
    description: 'Tired of AI chatbots for emotional support in Malaysia? Talk to a real peer listener in your language. First 5 minutes free.',
    url: 'https://www.leanon.app/ai-chatbot-alternative-malaysia',
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
      name: 'Is there a good alternative to ChatGPT for emotional support for Indians in Malaysia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. LeanOn connects you with trained Indian peer listeners who bring real lived experience of expat loneliness, family pressure, and the particular isolation of living far from your support network. Unlike AI, they have been where you are. Sessions are anonymous, available 24/7, and start with a free 5 minutes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I talk to a Tamil-speaking listener in Malaysia as an alternative to AI?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. LeanOn supports Tamil, Hindi, Telugu, Malayalam, Kannada, and nine other Indian languages. The Indian community in Malaysia, particularly the Tamil community, is one of the oldest in Southeast Asia — Tamil-speaking listeners are available.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why might talking to an AI chatbot make loneliness worse in Malaysia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI processes your words and generates thoughtful responses, but it has never been an Indian in Malaysia. It cannot recognise your experience from having lived it. Many people find that extended AI use for emotional support produces a hollowness — the words were processed but nothing was actually received. A peer listener who has lived through something similar provides the felt sense of being heard that the nervous system actually needs.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it anonymous?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Completely anonymous. You can use LeanOn with a nickname. Your employer, your family, and your social network in Malaysia will not know.',
      },
    },
  ],
}

export default function AIChatbotAlternativeMalaysiaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main style={{ maxWidth: 720, margin: '0 auto', padding: '40px 20px 80px', fontFamily: 'system-ui, sans-serif', color: '#1a1a2e' }}>
        <nav style={{ fontSize: 13, color: '#888', marginBottom: 24 }}>
          <a href="/" style={{ color: '#888', textDecoration: 'none' }}>Home</a>
          {' › '}
          <span>AI Chatbot Alternative — Malaysia</span>
        </nav>

        <h1 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.2rem)', fontWeight: 800, lineHeight: 1.2, marginBottom: 16 }}>
          Tired of Talking to AI About Your Feelings in Malaysia?<br />
          <span style={{ color: '#1A8FA0' }}>Talk to a Real Indian Listener Instead</span>
        </h1>

        <p style={{ fontSize: '1.05rem', color: '#444', lineHeight: 1.7, marginBottom: 32 }}>
          The Indian community in Malaysia has been here for generations — and yet emotional isolation is still real, especially for those who have moved recently or whose social support is thin. Many reach for AI chatbots because they are available, private, and non-judgmental. But if the relief is not lasting, what you need is not better AI.
        </p>

        <a href="/browse" style={{ display: 'inline-block', background: '#0F4867', color: '#fff', padding: '14px 28px', borderRadius: 10, textDecoration: 'none', fontWeight: 700, fontSize: '1rem', marginBottom: 48 }}>
          Talk to a real listener — first 5 min free
        </a>

        <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: 16 }}>Frequently Asked Questions</h2>
        {faqSchema.mainEntity.map((q, i) => (
          <details key={i} style={{ borderBottom: '1px solid #eee', paddingBottom: 16, marginBottom: 16 }}>
            <summary style={{ fontWeight: 600, cursor: 'pointer', fontSize: '1rem', paddingTop: 8 }}>{q.name}</summary>
            <p style={{ color: '#444', lineHeight: 1.7, marginTop: 10, marginLeft: 4 }}>{q.acceptedAnswer.text}</p>
          </details>
        ))}

        <div style={{ background: '#f0f9fb', borderRadius: 16, padding: '28px 24px', marginTop: 40, textAlign: 'center' }}>
          <p style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: 8 }}>Ready for a real conversation?</p>
          <p style={{ color: '#555', marginBottom: 20 }}>First 5 minutes free. Anonymous. In your language.</p>
          <a href="/browse" style={{ display: 'inline-block', background: '#0F4867', color: '#fff', padding: '14px 32px', borderRadius: 10, textDecoration: 'none', fontWeight: 700, fontSize: '1rem' }}>
            Browse listeners now
          </a>
        </div>

        <p style={{ marginTop: 32, fontSize: 13, color: '#aaa', textAlign: 'center' }}>
          Crisis support: NIMHANS 080-46110007 · Tele-MANAS 14416
        </p>
      </main>
    </>
  )
}
