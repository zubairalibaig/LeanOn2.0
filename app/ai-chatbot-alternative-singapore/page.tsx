import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'AI Chatbot Alternative Singapore — Real Human Support for Indians | LeanOn',
  description: 'Tired of talking to ChatGPT, Claude or Gemini about loneliness in Singapore? LeanOn connects Indians with real trained peer listeners who understand expat life. Anonymous. 24/7.',
  keywords: [
    'AI chatbot alternative Singapore', 'ChatGPT alternative Singapore Indian', 'human listener Singapore',
    'real person emotional support Singapore', 'alternative to ChatGPT Singapore', 'better than AI chatbot Singapore',
    'human connection instead of AI Singapore', 'tired of talking to AI Singapore',
    'Claude Gemini alternative Singapore Indian', 'real human support Singapore expat',
    'Tamil listener Singapore AI alternative', 'peer support vs AI Singapore', 'Indian expat AI alternative Singapore',
  ],
  alternates: {
    canonical: 'https://www.leanon.app/ai-chatbot-alternative-singapore',
    languages: { 'en-SG': 'https://www.leanon.app/ai-chatbot-alternative-singapore' },
  },
  openGraph: {
    title: 'AI Chatbot Alternative in Singapore — Talk to a Real Indian Listener | LeanOn',
    description: 'Tired of AI chatbots for emotional support in Singapore? Talk to a real peer listener who understands. Anonymous, in your language. First 5 minutes free.',
    url: 'https://www.leanon.app/ai-chatbot-alternative-singapore',
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
      name: 'Is there a good alternative to ChatGPT for emotional support for Indians in Singapore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. LeanOn connects you with trained Indian peer listeners who bring real lived experience — expat loneliness, family pressure, relationship problems, the specific isolation of high-pressure work culture. Unlike AI, they have been where you are. Sessions are anonymous, available 24/7, and start with a free 5 minutes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is talking to a real person better than ChatGPT for loneliness in Singapore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Singapore has a high-performance culture where admitting emotional difficulty can feel professionally risky, and where the Indian expat community can feel simultaneously close and isolated. AI processes your words accurately but cannot hold the felt experience of being an Indian in Singapore. A peer listener who has lived this offers recognition — and recognition is what loneliness actually needs.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I talk to a Tamil or Hindi-speaking listener in Singapore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. LeanOn supports twelve Indian languages including Tamil, Hindi, Telugu, Malayalam, and Kannada. There is a large Tamil community in Singapore in particular — Tamil-speaking listeners are available.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it anonymous — will my employer know?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Completely anonymous. In a competitive professional environment like Singapore, this matters. Your employer, your colleagues, and your social circle will not know. You can use LeanOn with a nickname.',
      },
    },
  ],
}

export default function AIChatbotAlternativeSingaporePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main style={{ maxWidth: 720, margin: '0 auto', padding: '40px 20px 80px', fontFamily: 'system-ui, sans-serif', color: '#1a1a2e' }}>
        <nav style={{ fontSize: 13, color: '#888', marginBottom: 24 }}>
          <a href="/" style={{ color: '#888', textDecoration: 'none' }}>Home</a>
          {' › '}
          <span>AI Chatbot Alternative — Singapore</span>
        </nav>

        <h1 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.2rem)', fontWeight: 800, lineHeight: 1.2, marginBottom: 16 }}>
          Tired of Talking to AI About Your Feelings in Singapore?<br />
          <span style={{ color: '#1A8FA0' }}>Talk to a Real Indian Listener Instead</span>
        </h1>

        <p style={{ fontSize: '1.05rem', color: '#444', lineHeight: 1.7, marginBottom: 32 }}>
          Singapore&apos;s high-performance culture means a lot of people carry a lot quietly. Many Indians here have turned to AI — ChatGPT, Claude, Gemini — because it is private, non-judgmental, and available at midnight without requiring any explanation of your whole backstory. Those are real advantages.
        </p>
        <p style={{ fontSize: '1.05rem', color: '#444', lineHeight: 1.7, marginBottom: 32 }}>
          But if the conversations are becoming repetitive, if the relief is getting shorter, if you find yourself wishing the response came from a real person — that is the signal to reach for one.
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
