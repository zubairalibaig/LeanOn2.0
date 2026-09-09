import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Talk to a Real Person Online India — Not an AI, Not a Bot | LeanOn',
  description: 'Tired of talking to AI chatbots? LeanOn connects you with real human peer listeners across India — available 24/7, anonymous, and genuinely caring. First 5 minutes free.',
  keywords: [
    'talk to a real person online india', 'real human conversation online india', 'not ai not chatgpt india',
    'talk to human not bot india', 'human chat support india', 'real person to talk to india',
    'talk to someone real online', 'human listener online india', 'real conversation online india',
  ],
  alternates: {
    canonical: 'https://www.leanon.app/talk-to-real-person-online-india',
    languages: { 'en-IN': 'https://www.leanon.app/talk-to-real-person-online-india' },
  },
  openGraph: {
    title: 'Talk to a Real Person Online India — Human Support, Not AI',
    description: 'LeanOn connects you with real trained peer listeners across India. No bots, no algorithms, no predictions — just genuine human conversation.',
    url: 'https://www.leanon.app/talk-to-real-person-online-india',
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
      name: 'How can I talk to a real person online in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LeanOn connects you with real trained peer listeners across India. Browse who is online, start a free 5-minute session, and talk to a real human who is there just to listen — no AI, no bots.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are LeanOn listeners real humans or AI?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'All LeanOn listeners are real people. They go through a screening and training process before they can listen on the platform. You will never talk to a bot or AI on LeanOn.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why should I talk to a real person instead of a chatbot like ChatGPT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI can give information but it cannot truly understand how you feel. A real person can notice the emotion behind your words, sit with silence, and respond in a way that makes you feel genuinely heard. For emotional support, nothing replaces a real human.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does it cost to talk to a real person on LeanOn?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Your first 5 minutes are free, every session. After that, sessions start at ₹15 for 15 minutes depending on the listener. Much more affordable than professional therapy.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is talking to a LeanOn listener private?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. LeanOn is fully anonymous — no real name required. Your conversations are private and confidential. Listeners sign agreements to maintain your privacy.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Talk to a Real Person Online India', item: 'https://www.leanon.app/talk-to-real-person-online-india' },
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
  .vs-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:16px;}
  .vs-col{border-radius:14px;padding:16px;}
  .vs-col.ai{background:#F5F5F8;border:1px solid #E0E0EE;}
  .vs-col.human{background:#EDF8FA;border:1px solid var(--border);}
  .vs-col h3{font-size:14px;font-weight:900;margin-bottom:10px;}
  .vs-col.ai h3{color:#888;}
  .vs-col.human h3{color:var(--teal);}
  .vs-col ul{list-style:none;font-size:13px;color:#3A6070;line-height:1.8;}
  .vs-col ul li::before{content:'• ';font-weight:900;}
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
  @media(max-width:480px){.related{grid-template-columns:1fr;}.vs-grid{grid-template-columns:1fr;}}
`

export default function TalkToRealPersonPage() {
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
          <a href="/">Home</a><span>›</span>Talk to a Real Person Online India
        </div>

        <h1>Done Talking to Bots?<br />Talk to a Real Human Who Listens</h1>
        <p className="lead">
          AI can answer questions. But when you are struggling, anxious, or just need to feel understood —
          only a real human can do that. LeanOn connects you with real trained peer listeners across India,
          available 24/7. No AI. No bots. No predictions.
        </p>

        <a href="/browse" className="cta-hero">Find a listener now — first 5 min free →</a>

        <div className="card">
          <h2>Why a real person is different from an AI</h2>
          <div className="vs-grid">
            <div className="vs-col ai">
              <h3>🤖 AI chatbot</h3>
              <ul>
                <li>Generates text patterns</li>
                <li>Cannot truly feel or understand</li>
                <li>Responds the same to everyone</li>
                <li>Cannot sit with silence</li>
                <li>Has no stake in your wellbeing</li>
              </ul>
            </div>
            <div className="vs-col human">
              <h3>💙 LeanOn listener</h3>
              <ul>
                <li>Genuinely present with you</li>
                <li>Hears the emotion behind words</li>
                <li>Responds to you specifically</li>
                <li>Comfortable with silence</li>
                <li>Trained to care, not just reply</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="card">
          <h2>When you need a real human — not a machine</h2>
          <p>There are moments when you know ChatGPT or any AI just won&apos;t cut it. When you are
            crying at 2 AM. When you just had a big fight. When you are feeling numb and don&apos;t
            know why. When you need to say something out loud to another human being who will actually hear it.</p>
          <p>That&apos;s exactly what LeanOn is built for.</p>
        </div>

        <div className="card">
          <h2>How to start talking right now</h2>
          <ul className="steps">
            <li>
              <div>
                <strong>Browse who is online</strong>
                <p>See real listeners available at this moment. Each has a short bio so you can pick someone who feels right.</p>
              </div>
            </li>
            <li>
              <div>
                <strong>Start for free</strong>
                <p>First 5 minutes are always free. No payment details needed to start.</p>
              </div>
            </li>
            <li>
              <div>
                <strong>Say what is on your mind</strong>
                <p>No script, no prompts needed. Just talk. Your listener will follow your lead.</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="card">
          <h2>Who are the LeanOn listeners?</h2>
          <p>LeanOn listeners are everyday people who have been through things too — and who care enough
            to show up for others. They go through a training process before they can listen on the platform,
            and they are guided by clear principles: listen without judging, don&apos;t give unsolicited advice,
            keep everything private.</p>
          <p>They are not therapists. They are not astrologers. They are real humans who are there to hear you.</p>
        </div>

        <div className="cta">
          <h2>A real human is waiting to hear you</h2>
          <p>Anonymous, affordable, available right now across India.</p>
          <a href="/browse" className="btn-white">Browse listeners →</a><br />
          <a href="/auth" className="btn-orange">Join free</a>
        </div>

        <div className="card">
          <h2>Frequently asked questions</h2>
          <div className="faq-item">
            <h3>How can I talk to a real person online in India?</h3>
            <p>LeanOn connects you with real trained peer listeners across India. Browse who is online, start a
              free 5-minute session, and talk to a real human who is there just to listen.</p>
          </div>
          <div className="faq-item">
            <h3>Are LeanOn listeners real humans or AI?</h3>
            <p>All LeanOn listeners are real people. They go through a screening and training process before
              they can listen on the platform. You will never talk to a bot or AI on LeanOn.</p>
          </div>
          <div className="faq-item">
            <h3>Why should I talk to a real person instead of a chatbot?</h3>
            <p>AI can give information but it cannot truly understand how you feel. A real person can notice
              the emotion behind your words, sit with silence, and respond in a way that makes you feel
              genuinely heard. For emotional support, nothing replaces a real human.</p>
          </div>
          <div className="faq-item">
            <h3>How much does it cost to talk on LeanOn?</h3>
            <p>Your first 5 minutes are free, every session. After that, sessions start at ₹15 for 15 minutes
              depending on the listener — much more affordable than professional therapy.</p>
          </div>
          <div className="faq-item">
            <h3>Is talking to a LeanOn listener private?</h3>
            <p>Yes. LeanOn is fully anonymous — no real name required. Your conversations are private and
              confidential.</p>
          </div>
        </div>

        <div className="related">
          <a href="/chat-with-real-person">Chat with a real person →</a>
          <a href="/ai-chatbot-alternative">AI chatbot alternatives →</a>
          <a href="/i-need-someone-to-talk-to">I need someone to talk to →</a>
          <a href="/astrotalk-alternative">AstroTalk alternative →</a>
          <a href="/someone-to-talk-to-at-night">Support at night →</a>
          <a href="/online-emotional-support-india">Online emotional support →</a>
        </div>

        <div className="disclaimer">
          <p>⚠️ If you are in crisis or thinking about self-harm, please reach out immediately:<br />
            <strong>NIMHANS helpline: 080-46110007</strong> &nbsp;|&nbsp;
            <strong>Tele-MANAS: 14416</strong> (free, 24/7)<br />
            LeanOn is peer support — not a substitute for professional mental health care or emergency services.
          </p>
        </div>
      </div>
    </>
  )
}
