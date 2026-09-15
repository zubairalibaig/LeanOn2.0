import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'AI Chatbot Alternative UK — Real Human Emotional Support for British Indians | LeanOn',
  description: 'Tired of talking to ChatGPT, Claude or Gemini about your feelings in the UK? LeanOn connects British Indians with real trained peer listeners who have lived through what you are facing. Anonymous. 24/7.',
  keywords: [
    'AI chatbot alternative UK', 'ChatGPT alternative UK Indian', 'human listener UK instead of AI',
    'real person emotional support UK', 'alternative to ChatGPT UK', 'better than AI chatbot UK',
    'human connection instead of AI UK', 'ChatGPT not helping loneliness UK',
    'Claude Gemini alternative UK Indian', 'tired of talking to AI UK', 'real human support UK Indian',
    'British Indian AI chatbot alternative', 'peer support vs AI UK', 'South Asian mental health UK AI',
  ],
  alternates: {
    canonical: 'https://www.leanon.app/ai-chatbot-alternative-uk',
    languages: { 'en-GB': 'https://www.leanon.app/ai-chatbot-alternative-uk' },
  },
  openGraph: {
    title: 'AI Chatbot Alternative in the UK — Talk to a Real Human | LeanOn',
    description: 'Tired of ChatGPT, Claude or Gemini for emotional support in the UK? Talk to a real Indian peer listener who understands. First 5 minutes free.',
    url: 'https://www.leanon.app/ai-chatbot-alternative-uk',
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
      name: 'Is there a good alternative to ChatGPT for emotional support for Indians in the UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. LeanOn connects you with trained peer listeners — real Indians who have lived through loneliness, immigrant life, family pressure, the second-generation identity gap, and relationship problems. Unlike AI, they bring lived experience and genuine presence. Sessions are anonymous, available 24/7, and start with a free 5 minutes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is talking to a real person better than ChatGPT or Claude for South Asian mental health in the UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The South Asian experience in the UK carries specific things that AI cannot hold: the gap between what your parents expect and what you actually want, the cultural hybridity of being British and Indian at the same time, the particular loneliness of not quite fitting in either world. A peer listener who has lived this holds context that no AI can generate from training data.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I talk in Hindi, Gujarati, Punjabi, Tamil or Telugu?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. LeanOn supports twelve Indian languages including Hindi, Gujarati, Punjabi, Tamil, Telugu, Malayalam, Kannada, Marathi, and Bengali. The UK has large communities across all these language groups.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if I have been using AI chatbots for emotional support for months?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'That is very common and understandable — AI is available at any hour and does not require explaining your entire background. Many LeanOn users came from AI chatbot use and noticed that the underlying loneliness or anxiety was not actually improving. A real person offers something different: genuine recognition from someone who has been where you are.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is LeanOn different from NHS mental health services?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, completely different. NHS services are clinical — GPs, therapists, psychiatrists. LeanOn is peer support: real people trained in active listening who understand your emotional experience from having lived through similar things. There are no waiting lists, no referrals required, and no clinical notes. It complements NHS support rather than replacing it.',
      },
    },
  ],
}

export default function AIChatbotAlternativeUKPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main style={{ maxWidth: 720, margin: '0 auto', padding: '40px 20px 80px', fontFamily: 'system-ui, sans-serif', color: '#1a1a2e' }}>
        <nav style={{ fontSize: 13, color: '#888', marginBottom: 24 }}>
          <a href="/" style={{ color: '#888', textDecoration: 'none' }}>Home</a>
          {' › '}
          <span>AI Chatbot Alternative — UK</span>
        </nav>

        <h1 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.2rem)', fontWeight: 800, lineHeight: 1.2, marginBottom: 16 }}>
          Tired of Talking to AI About Your Feelings in the UK?<br />
          <span style={{ color: '#1A8FA0' }}>Talk to a Real Indian Listener Instead</span>
        </h1>

        <p style={{ fontSize: '1.05rem', color: '#444', lineHeight: 1.7, marginBottom: 32 }}>
          Many Indians in the UK have turned to AI chatbots — ChatGPT, Claude, Gemini — for emotional support. The availability, the non-judgment, the 2am access — these are real advantages. But if you are reading this, something is not quite working. The conversations are helpful for a moment, and then the feeling is back.
        </p>
        <p style={{ fontSize: '1.05rem', color: '#444', lineHeight: 1.7, marginBottom: 32 }}>
          What AI cannot give you is the felt sense of being received by someone who has actually been there. The specific loneliness of being South Asian in the UK — the identity gap, the family pressure that does not stop just because you live in London, the particular exhaustion of code-switching between worlds — these are things a peer listener holds from the inside, not from training data.
        </p>

        <a href="/browse" style={{ display: 'inline-block', background: '#0F4867', color: '#fff', padding: '14px 28px', borderRadius: 10, textDecoration: 'none', fontWeight: 700, fontSize: '1rem', marginBottom: 48 }}>
          Talk to a real listener — first 5 min free
        </a>

        <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: 12 }}>What AI Cannot Do for South Asian Emotional Health</h2>
        <ul style={{ lineHeight: 2, paddingLeft: 20, color: '#333', marginBottom: 32 }}>
          <li>AI has never been an Indian immigrant in the UK — it cannot recognise your experience from having lived it</li>
          <li>AI cannot hold the cultural context of being British and Indian simultaneously</li>
          <li>AI does not carry the conversation forward — most sessions reset and you start over</li>
          <li>AI has no stake in your wellbeing — a real person does</li>
          <li>AI often makes the underlying loneliness worse over time, not better</li>
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
