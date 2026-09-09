import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'AstroTalk Alternative for Real Emotional Support | LeanOn',
  description: 'Looking for an AstroTalk alternative where you can talk to a real person — not an astrologer? LeanOn connects you with peer listeners for genuine human conversation. No predictions, no gimmicks.',
  keywords: [
    'astrotalk alternative', 'alternative to astrotalk', 'astrotalk for emotional support',
    'talk to real person instead of astrotalk', 'peer support india', 'talk to someone online india',
    'emotional support india', 'someone to talk to india', 'human listener india',
  ],
  alternates: {
    canonical: 'https://www.leanon.app/astrotalk-alternative',
    languages: { 'en-IN': 'https://www.leanon.app/astrotalk-alternative' },
  },
  openGraph: {
    title: 'AstroTalk Alternative — Talk to a Real Person, Not an Astrologer',
    description: 'LeanOn is the emotional support platform for people who want a real human conversation without astrology predictions.',
    url: 'https://www.leanon.app/astrotalk-alternative',
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
      name: 'How is LeanOn different from AstroTalk?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AstroTalk connects you with astrologers for horoscope and prediction-based chats. LeanOn connects you with trained peer listeners for real emotional conversations — no predictions, just genuine human support. LeanOn is ideal when you want to talk, vent, or feel heard.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I talk to someone on LeanOn just to feel better?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, that\'s exactly what LeanOn is for. Many people just want someone to talk to — not to hear what their stars say, but to feel understood. Our listeners are available 24/7 for exactly that.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is LeanOn free to use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Your first 5-minute session is completely free. After that, sessions are affordable starting at ₹15–₹30 per session depending on the listener.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will my conversations be kept private?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. LeanOn is fully anonymous — your name, phone number, and personal details are never shared with listeners. You can speak freely without worrying about privacy.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do LeanOn listeners give advice or predictions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. LeanOn listeners are trained to listen, not to advise or predict. They ask questions, reflect back what they hear, and help you feel understood — without telling you what to do.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'AstroTalk Alternative', item: 'https://www.leanon.app/astrotalk-alternative' },
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

export default function AstroTalkAlternativePage() {
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
          <a href="/">Home</a><span>›</span>AstroTalk Alternative
        </div>

        <h1>Looking for an AstroTalk Alternative?<br />Talk to a Real Person Instead</h1>
        <p className="lead">
          Millions of people visit AstroTalk when they are lonely, anxious, or stressed — not for horoscopes,
          but just to talk. If what you actually need is someone to listen, LeanOn is built for exactly that.
          Real peer listeners, no predictions, completely anonymous.
        </p>

        <a href="/browse" className="cta-hero">Find a listener now — first 5 min free →</a>

        <div className="card">
          <h2>Why people go to AstroTalk when they&apos;re struggling</h2>
          <p>
            AstroTalk is popular in India, but most people don&apos;t actually care about their horoscope when
            they open it at 11 PM. They care because they&apos;re lonely, overwhelmed, or just need someone
            to hear them out. The astrologer becomes a conversation partner by default.
          </p>
          <p>
            The problem is that astrologers are trained to give predictions — not to listen. LeanOn was built
            to fill that gap: trained peer listeners who are there specifically to hear you, not to tell you
            what the stars say.
          </p>
        </div>

        <div className="card">
          <h2>LeanOn vs AstroTalk — what&apos;s actually different</h2>
          <table className="compare-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>LeanOn</th>
                <th>AstroTalk</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Purpose</td>
                <td className="tick">Emotional support &amp; listening</td>
                <td>Astrology &amp; predictions</td>
              </tr>
              <tr>
                <td>Who you talk to</td>
                <td className="tick">Trained peer listeners</td>
                <td>Astrologers / tarot readers</td>
              </tr>
              <tr>
                <td>First session</td>
                <td className="tick">First 5 min free, always</td>
                <td>Varies by astrologer</td>
              </tr>
              <tr>
                <td>Anonymous</td>
                <td className="tick">Fully anonymous</td>
                <td>Requires registration</td>
              </tr>
              <tr>
                <td>Available at 2 AM</td>
                <td className="tick">Yes, 24/7</td>
                <td>Depends on astrologer</td>
              </tr>
              <tr>
                <td>Judgment-free</td>
                <td className="tick">Yes — listeners are trained to not advise</td>
                <td>Varies by astrologer</td>
              </tr>
              <tr>
                <td>Scientific basis</td>
                <td className="tick">Peer support model</td>
                <td className="cross">Astrology / belief-based</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="card">
          <h2>How LeanOn works — 3 simple steps</h2>
          <ul className="steps">
            <li>
              <div>
                <strong>Browse listeners</strong>
                <p>See who&apos;s online right now. Each listener has a short bio so you can pick someone who feels right.</p>
              </div>
            </li>
            <li>
              <div>
                <strong>Start your free session</strong>
                <p>Your first 5 minutes are free — no payment needed, no commitment. Just start talking.</p>
              </div>
            </li>
            <li>
              <div>
                <strong>Feel heard</strong>
                <p>Listeners ask gentle questions and reflect back what they hear. No advice, no judgement, no predictions.</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="card">
          <h2>What people talk about on LeanOn</h2>
          <p>Relationship problems. Job stress. Family pressure. Feeling lost or lonely. Not sleeping. Not knowing
            what to do next. These are the real reasons people reach out — and our listeners are trained
            to hold space for all of it.</p>
          <p>You don&apos;t need a reason big enough. If something is bothering you, that&apos;s enough.</p>
        </div>

        <div className="cta">
          <h2>Ready to talk to a real person?</h2>
          <p>No astrology. No predictions. Just a genuine human conversation.</p>
          <a href="/browse" className="btn-white">Browse listeners →</a><br />
          <a href="/auth" className="btn-orange">Join free</a>
        </div>

        <div className="card">
          <h2>Frequently asked questions</h2>
          <div className="faq-item">
            <h3>How is LeanOn different from AstroTalk?</h3>
            <p>AstroTalk connects you with astrologers for horoscope and prediction-based chats. LeanOn connects you
              with trained peer listeners for real emotional conversations — no predictions, just genuine human support.</p>
          </div>
          <div className="faq-item">
            <h3>Can I talk to someone on LeanOn just to feel better?</h3>
            <p>Yes, that&apos;s exactly what LeanOn is for. Many people just want someone to talk to — not to hear
              what their stars say, but to feel understood. Our listeners are available 24/7 for exactly that.</p>
          </div>
          <div className="faq-item">
            <h3>Is LeanOn free to use?</h3>
            <p>Your first 5-minute session is completely free. After that, sessions are affordable starting at ₹15 per
              15-minute session depending on the listener.</p>
          </div>
          <div className="faq-item">
            <h3>Will my conversations be kept private?</h3>
            <p>Yes. LeanOn is fully anonymous — your name, phone number, and personal details are never shared with
              listeners. You can speak freely without worrying about privacy.</p>
          </div>
          <div className="faq-item">
            <h3>Do LeanOn listeners give advice or predictions?</h3>
            <p>No. LeanOn listeners are trained to listen, not to advise or predict. They ask questions, reflect back
              what they hear, and help you feel understood — without telling you what to do.</p>
          </div>
        </div>

        <div className="related">
          <a href="/i-need-someone-to-talk-to">I need someone to talk to →</a>
          <a href="/chat-with-real-person">Chat with a real person →</a>
          <a href="/relationship-advice-online-india">Relationship support online →</a>
          <a href="/someone-to-talk-to-at-night">Support available at night →</a>
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
