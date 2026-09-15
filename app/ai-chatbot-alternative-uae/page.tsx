import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'AI Chatbot Alternative UAE — Real Human Emotional Support | LeanOn',
  description: 'Tired of talking to ChatGPT, Claude or Gemini about your feelings in the UAE? LeanOn connects you with real trained Indian listeners who have lived through what you are facing. Anonymous. 24/7.',
  keywords: [
    'AI chatbot alternative UAE', 'ChatGPT alternative UAE Indian', 'human listener UAE instead of AI',
    'real person emotional support UAE', 'alternative to ChatGPT Dubai', 'better than AI chatbot Dubai',
    'human connection instead of AI UAE', 'ChatGPT not helping loneliness UAE',
    'Claude Gemini alternative UAE', 'tired of talking to AI UAE', 'real human support Dubai',
    'AI chatbot replacement UAE emotional', 'peer support vs AI UAE', 'human vs AI UAE',
  ],
  alternates: {
    canonical: 'https://www.leanon.app/ai-chatbot-alternative-uae',
    languages: { 'en-IN': 'https://www.leanon.app/ai-chatbot-alternative-uae' },
  },
  openGraph: {
    title: 'AI Chatbot Alternative in UAE — Talk to a Real Human | LeanOn',
    description: 'Tired of ChatGPT, Claude or Gemini for emotional support in the UAE? Talk to a real Indian listener who understands your experience. First 5 minutes free.',
    url: 'https://www.leanon.app/ai-chatbot-alternative-uae',
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
      name: 'Is there a good alternative to ChatGPT for emotional support in the UAE?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. LeanOn connects you with trained peer listeners — real Indians who have lived through loneliness, expat life, family pressure and relationship problems. Unlike AI, they bring genuine lived experience and are accountable to you as a real person. Sessions are anonymous, available 24/7, and start with a free 5 minutes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is talking to a real person better than ChatGPT or Claude for loneliness?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI chatbots process your words and generate calibrated responses — but they have never felt what you are feeling. A peer listener on LeanOn brings lived experience: they have been lonely, homesick, under financial pressure, in relationships that were complicated. When they say "I understand," it comes from having been there. Research consistently shows that this felt recognition — being met by someone who has genuinely experienced what you carry — reduces loneliness more effectively than information-based support.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can Indians in the UAE use LeanOn in their own language?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. LeanOn supports twelve Indian languages including Hindi, Malayalam, Tamil, Telugu, Kannada, Marathi, Bengali, and Gujarati. The UAE has large Indian communities across all these language groups — you can filter listeners by the language you are most comfortable speaking in.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if I have been using AI chatbots for emotional support for a long time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'That is very common and completely understandable — AI is available at any hour, does not judge, and is easy to access. Many LeanOn users started with AI chatbots and found, over time, that the relief was shorter each session and the underlying loneliness was not actually improving. A peer listener offers something different: the felt sense of being received by another person, which is what the nervous system is actually looking for.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is LeanOn anonymous? Will my colleagues or family know?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Completely anonymous. You can use LeanOn with a nickname. Your employer, your family, and anyone in your social circle in the UAE will not know. The session is private between you and your listener.',
      },
    },
  ],
}

export default function AIChatbotAlternativeUAEPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main style={{ maxWidth: 720, margin: '0 auto', padding: '40px 20px 80px', fontFamily: 'system-ui, sans-serif', color: '#1a1a2e' }}>
        <nav style={{ fontSize: 13, color: '#888', marginBottom: 24 }}>
          <a href="/" style={{ color: '#888', textDecoration: 'none' }}>Home</a>
          {' › '}
          <span>AI Chatbot Alternative — UAE</span>
        </nav>

        <h1 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.2rem)', fontWeight: 800, lineHeight: 1.2, marginBottom: 16 }}>
          Tired of Talking to ChatGPT About Your Feelings in the UAE?<br />
          <span style={{ color: '#1A8FA0' }}>Talk to a Real Human Instead</span>
        </h1>

        <p style={{ fontSize: '1.05rem', color: '#444', lineHeight: 1.7, marginBottom: 32 }}>
          A lot of Indians in Dubai and Abu Dhabi have started using AI chatbots — ChatGPT, Claude, Gemini — for emotional support. It makes complete sense: AI is available at 2am, does not judge, and does not panic when you say something difficult. But if you are reading this, you have probably noticed something: the relief is getting shorter, and the loneliness underneath has not actually improved.
        </p>
        <p style={{ fontSize: '1.05rem', color: '#444', lineHeight: 1.7, marginBottom: 32 }}>
          What you are looking for is not better AI. It is recognition — being heard by someone who has genuinely been where you are. That is what a peer listener on LeanOn offers.
        </p>

        <a href="/browse" style={{ display: 'inline-block', background: '#0F4867', color: '#fff', padding: '14px 28px', borderRadius: 10, textDecoration: 'none', fontWeight: 700, fontSize: '1rem', marginBottom: 48 }}>
          Talk to a real listener — first 5 min free
        </a>

        <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: 12 }}>What AI Cannot Give You</h2>
        <ul style={{ lineHeight: 2, paddingLeft: 20, color: '#333', marginBottom: 32 }}>
          <li><strong>Lived experience.</strong> An AI has never been an Indian expat in the Gulf.</li>
          <li><strong>Real recognition.</strong> AI identifies patterns in your words — a human listener recognises your experience from having lived something similar.</li>
          <li><strong>Memory.</strong> Most AI conversations reset. A real person carries the thread of who you are.</li>
          <li><strong>Accountability.</strong> A peer listener has something at stake in being present. AI does not.</li>
          <li><strong>The sense that something was received.</strong> Many people feel hollower after long AI conversations, not better.</li>
        </ul>

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
