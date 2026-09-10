import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Wysa Alternative — Talk to a Real Human, Not an AI | LeanOn',
  description: 'Wysa is an AI chatbot — it can\'t truly understand you. LeanOn connects you to a real peer listener in under 2 minutes. First 5 min free. Anonymous.',
  keywords: [
    'wysa alternative', 'wysa app alternative', 'alternative to wysa',
    'wysa vs real person', 'ai chatbot alternative mental health',
    'human alternative to wysa', 'peer support india', 'talk to real person india',
    'emotional support india', 'someone to talk to india', 'human listener india',
    'wysa not helpful', 'ai chatbot not enough',
  ],
  alternates: {
    canonical: 'https://www.leanon.app/wysa-alternative',
    languages: { 'en-IN': 'https://www.leanon.app/wysa-alternative' },
  },
  openGraph: {
    title: 'Done Talking to a Bot? Talk to a Real Person on LeanOn',
    description: 'Wysa is an AI chatbot — it can\'t truly understand you. LeanOn connects you to a real peer listener in under 2 minutes. First 5 min free. Anonymous.',
    url: 'https://www.leanon.app/wysa-alternative',
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
      name: 'How is LeanOn different from Wysa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wysa is an AI chatbot that uses scripted responses and mood-tracking patterns. LeanOn connects you with a real peer listener — a human being who has experienced life, can read between the lines, and genuinely understands what you\'re feeling. AI is useful for tracking moods; for actually feeling heard, you need a human.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can a peer listener help with anxiety like Wysa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — and in ways an AI cannot. A peer listener won\'t diagnose you or prescribe exercises, but they will sit with you in your anxiety, ask the right questions, and help you feel less alone in it. Many people find that being truly heard reduces anxiety more than any chatbot script.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is LeanOn an AI?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. LeanOn is entirely human. Every listener on LeanOn is a real person — a trained peer who has been through their own struggles and genuinely wants to support others. There is no AI, no bots, no automated replies.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does a peer listener actually do?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A peer listener listens without judgment, reflects back what they hear, and asks questions that help you process what you\'re going through. They don\'t give advice or therapy — they give you the one thing AI cannot: genuine human presence and empathy.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is LeanOn free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Your first 5-minute session is completely free — no credit card, no commitment. After that, sessions start at ₹160 for 15 minutes. You only pay for the time you use.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Wysa Alternative', item: 'https://www.leanon.app/wysa-alternative' },
  ],
}

const S = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
  :root{--navy:#0F4867;--teal:#1A8FA0;--orange:#FF9933;--gray:#5A7A8A;--border:#D5EEF6;--light:#F0F8FC;}
  body{font-family:'Nunito',sans-serif;color:var(--navy);background:radial-gradient(ellipse 90% 55% at 0% 0%,#C2E4F2 0%,#DAEEF8 22%,#FFFFFF 58%) fixed;}
  a{text-decoration:none;color:inherit;}
  nav{padding:0 24px;height:64px;display:flex;align-items:center;justify-content:space-between;max-width:700px;margin:0 auto;}
  .logo{font-size:22px;font-weight:900;color:var(--navy);}
  .logo span{color:var(--teal);}
  .nav-cta{background:var(--teal);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:14px;padding:10px 22px;border-radius:50px;border:none;cursor:pointer;}
  .page{max-width:680px;margin:0 auto;padding:16px 24px 80px;}
  .breadcrumb{font-size:12px;color:var(--gray);margin-bottom:20px;}
  .breadcrumb a{color:var(--teal);}
  .breadcrumb span{margin:0 6px;}
  h1{font-size:clamp(26px,5vw,40px);font-weight:900;line-height:1.2;margin-bottom:16px;}
  .lead{font-size:16px;color:var(--gray);line-height:1.75;margin-bottom:32px;}
  .cta-hero{display:inline-block;background:var(--orange);color:white;font-weight:800;font-size:16px;padding:14px 32px;border-radius:50px;margin-bottom:32px;}
  .card{background:white;border:1.5px solid var(--border);border-radius:20px;padding:24px;margin-bottom:20px;}
  .card h2{font-size:18px;font-weight:800;margin-bottom:12px;}
  .card p{font-size:15px;color:#3A6070;line-height:1.78;margin-bottom:10px;}
  .card p:last-child{margin-bottom:0;}
  .compare-table{width:100%;border-collapse:collapse;font-size:14px;margin-top:12px;}
  .compare-table th{background:var(--light);padding:10px 12px;text-align:left;font-weight:800;color:var(--navy);}
  .compare-table td{padding:10px 12px;border-top:1px solid var(--border);color:#3A6070;vertical-align:top;}
  .compare-table tr:nth-child(even) td{background:#FAFCFF;}
  .tick{color:#1A8FA0;font-weight:900;}
  .cross{color:#B0B0C0;}
  .steps{counter-reset:steps;list-style:none;}
  .steps li{counter-increment:steps;display:flex;gap:14px;margin-bottom:18px;align-items:flex-start;}
  .steps li::before{content:counter(steps);background:var(--teal);color:white;font-weight:900;font-size:14px;min-width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:2px;}
  .steps li p{font-size:15px;color:#3A6070;line-height:1.68;}
  .steps li strong{display:block;color:var(--navy);font-weight:800;margin-bottom:4px;}
  .faq-item{border-top:1px solid var(--border);padding:16px 0;}
  .faq-item:last-child{border-bottom:1px solid var(--border);}
  .faq-item h3{font-size:15px;font-weight:800;color:var(--navy);margin-bottom:8px;line-height:1.4;}
  .faq-item p{font-size:14px;color:#3A6070;line-height:1.7;}
  .cta{text-align:center;background:var(--navy);border-radius:24px;padding:32px;color:white;margin-bottom:24px;}
  .cta h2{font-size:22px;font-weight:900;margin-bottom:10px;}
  .cta p{font-size:14px;opacity:.8;margin-bottom:20px;}
  .btn-white{background:white;color:var(--navy);font-family:'Nunito',sans-serif;font-weight:900;font-size:16px;padding:14px 32px;border-radius:50px;border:none;cursor:pointer;display:inline-block;}
  .btn-orange{background:var(--orange);color:white;font-family:'Nunito',sans-serif;font-weight:900;font-size:15px;padding:12px 28px;border-radius:50px;border:none;cursor:pointer;display:inline-block;margin-top:10px;}
  .related{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:24px;}
  .related a{background:white;border:1.5px solid var(--border);border-radius:14px;padding:14px 16px;font-size:13px;font-weight:700;color:var(--navy);line-height:1.4;}
  .related a:hover{border-color:var(--teal);}
  .disclaimer{background:#FFF8F0;border:1.5px solid #FFD9A0;border-radius:14px;padding:14px 16px;margin-bottom:24px;font-size:13px;color:#7A5C00;font-weight:600;line-height:1.6;}
  @media(max-width:480px){.related{grid-template-columns:1fr;}.compare-table{font-size:13px;}}
`

export default function WysaAlternativePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <style>{S}</style>

      <nav>
        <a href="/" className="logo">Lean<span>On</span></a>
        <a href="/auth" className="nav-cta">Open app</a>
      </nav>

      <div className="page">
        <div className="breadcrumb">
          <a href="/">Home</a><span>›</span>Wysa Alternative
        </div>

        <h1>Done Talking to a Bot?<br />Talk to a Real Person on LeanOn</h1>
        <p className="lead">
          Wysa is a well-designed AI chatbot — and AI is genuinely useful for tracking moods and building
          habits. But when you need to actually feel understood, no algorithm can replace a human being who
          has been through it themselves. LeanOn connects you to a real peer listener in under 2 minutes.
          First 5 minutes free. Completely anonymous.
        </p>

        <a href="/auth" className="cta-hero">Talk to a real person → first 5 min free</a>

        <div className="card">
          <h2>Why people move on from Wysa</h2>
          <p>
            Wysa is good at what it does — mood check-ins, guided breathing, CBT exercises. Many people
            find it helpful when they are just starting to pay attention to their mental health. But after
            a while, a common feeling sets in: <em>it doesn&apos;t actually know me.</em>
          </p>
          <p>
            Because it doesn&apos;t. An AI chatbot recognises patterns in text. It cannot feel the weight
            behind your words, pick up on what you are not saying, or simply sit with you in the hard
            moments without pivoting to a technique. For that, you need another human being.
          </p>
        </div>

        <div className="card">
          <h2>Wysa vs LeanOn — what&apos;s actually different</h2>
          <table className="compare-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Wysa</th>
                <th>LeanOn</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Who you talk to</td>
                <td>AI chatbot</td>
                <td className="tick">Real peer listener, not AI</td>
              </tr>
              <tr>
                <td>Understands emotion?</td>
                <td>Pattern recognition</td>
                <td className="tick">✅ Human empathy</td>
              </tr>
              <tr>
                <td>Available 24/7?</td>
                <td className="tick">✅ Yes</td>
                <td className="tick">✅ Yes</td>
              </tr>
              <tr>
                <td>Remembers your context?</td>
                <td>Within session</td>
                <td className="tick">✅ Same listener, ongoing</td>
              </tr>
              <tr>
                <td>Free to use?</td>
                <td>Free tier / paid subscription</td>
                <td className="tick">✅ First 5 min free, then ₹160/session</td>
              </tr>
              <tr>
                <td>Human connection?</td>
                <td className="cross">❌ No</td>
                <td className="tick">✅ Yes</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="card">
          <h2>How LeanOn works — 3 simple steps</h2>
          <ul className="steps">
            <li>
              <div>
                <strong>Browse real listeners</strong>
                <p>See who&apos;s online right now. Each listener has a short bio so you can pick someone who feels right for what you&apos;re going through.</p>
              </div>
            </li>
            <li>
              <div>
                <strong>Start your free session</strong>
                <p>Your first 5 minutes are completely free — no payment needed, no commitment. Sign up anonymously with just a phone number.</p>
              </div>
            </li>
            <li>
              <div>
                <strong>Feel genuinely heard</strong>
                <p>Your listener asks thoughtful questions and reflects back what they hear. No scripts, no techniques being run on you — just a real person paying full attention.</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="card">
          <h2>AI has its place — but not for this</h2>
          <p>
            This isn&apos;t about Wysa being bad. AI tools are genuinely useful for building self-awareness,
            logging moods, and learning coping frameworks when you are ready for that. Many people use both.
          </p>
          <p>
            The difference is that emotional support — the feeling that someone truly gets you — requires
            a human on the other end. Peer listeners on LeanOn have been through their own struggles.
            They are not reading from a script. They are actually with you.
          </p>
        </div>

        <div className="cta">
          <h2>Ready to talk to a real person?</h2>
          <p>No AI. No scripts. Just a genuine human conversation, whenever you need it.</p>
          <a href="/auth" className="btn-white">Talk to a real person →</a><br />
          <a href="/browse" className="btn-orange">Browse listeners →</a>
        </div>

        <div className="card">
          <h2>Frequently asked questions</h2>
          <div className="faq-item">
            <h3>How is LeanOn different from Wysa?</h3>
            <p>Wysa is an AI chatbot that uses scripted responses and mood-tracking patterns. LeanOn connects
              you with a real peer listener — a human who has experienced life, can read between the lines, and
              genuinely understands what you&apos;re feeling. AI is useful for tracking moods; for actually
              feeling heard, you need a human.</p>
          </div>
          <div className="faq-item">
            <h3>Can a peer listener help with anxiety like Wysa?</h3>
            <p>Yes — and in ways an AI cannot. A peer listener won&apos;t run CBT exercises on you, but they
              will sit with you in your anxiety, ask the right questions, and help you feel less alone in it.
              Many people find that being truly heard reduces anxiety more than any chatbot script.</p>
          </div>
          <div className="faq-item">
            <h3>Is LeanOn an AI?</h3>
            <p>No. LeanOn is entirely human. Every listener on LeanOn is a real person — a trained peer who has
              been through their own struggles and genuinely wants to support others. There is no AI, no bots,
              no automated replies.</p>
          </div>
          <div className="faq-item">
            <h3>What does a peer listener actually do?</h3>
            <p>A peer listener listens without judgment, reflects back what they hear, and asks questions that
              help you process what you&apos;re going through. They don&apos;t give advice or therapy — they
              give you the one thing AI cannot: genuine human presence and empathy.</p>
          </div>
          <div className="faq-item">
            <h3>Is LeanOn free?</h3>
            <p>Your first 5-minute session is completely free — no credit card, no commitment. After that,
              sessions start at ₹160 for 15 minutes. You only pay for the time you use.</p>
          </div>
        </div>

        <div className="related">
          <a href="/ai-chatbot-alternative">AI chatbot alternative →</a>
          <a href="/chat-with-real-person">Chat with a real person →</a>
          <a href="/talk-to-real-person-online-india">Talk to a real person online →</a>
          <a href="/i-need-someone-to-talk-to">I need someone to talk to →</a>
          <a href="/alternatives-to-therapy-india">Alternatives to therapy →</a>
          <a href="/feeling-lonely-in-india">Feeling lonely in India →</a>
        </div>

        <div className="disclaimer">
          <p>⚠️ If you are in crisis or thinking about self-harm, please reach out immediately:<br />
            <strong>NIMHANS helpline: 080-46110007</strong> &nbsp;|&nbsp;
            <strong>Tele-MANAS: 14416</strong> (free, 24/7)<br />
            LeanOn is peer support — not a substitute for emergency mental health care.
          </p>
        </div>
      </div>
    </>
  )
}
