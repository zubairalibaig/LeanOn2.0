import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Someone to Talk to in Canada — Real Human, Not a Chatbot | LeanOn',
  description: 'You do not want a chatbot. You want a real person to actually listen. LeanOn connects Indians in Canada with trained human peer listeners — available any time you need.',
  keywords: [
    'someone to talk to canada', 'real person to talk to canada', 'not a chatbot canada',
    'human listener canada', 'talk to someone canada indian', 'emotional support canada human',
    'peer listener canada', 'someone who listens canada', 'need to talk canada',
  ],
  alternates: {
    canonical: 'https://www.leanon.app/canada-talk-to-someone',
    languages: { 'en-CA': 'https://www.leanon.app/canada-talk-to-someone' },
  },
  openGraph: {
    title: 'Someone to Talk to in Canada — Real Human, Not a Chatbot | LeanOn',
    description: 'When you need to talk, you need a real person. LeanOn peer listeners are available 24/7 — warm, trained, and genuinely present.',
    url: 'https://www.leanon.app/canada-talk-to-someone',
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
      name: 'Are LeanOn listeners real humans or AI?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Real humans — every single one. LeanOn listeners are trained peer supporters, not AI, not bots, not scripts. When you connect with a listener, there is a real person on the other end giving you their genuine attention.',
      },
    },
    {
      '@type': 'Question',
      name: 'What do I talk about? I do not have one specific problem.',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You do not need a specific problem. Many people come to LeanOn just because they are feeling heavy, or lonely, or overwhelmed without being able to name why. That is a completely valid reason to reach out. You can just start talking and see where it goes.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is a peer listener different from a therapist?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A therapist is a licensed mental health professional who can diagnose and treat. A LeanOn peer listener is a trained human who listens deeply, asks thoughtful questions, and holds space for you — without diagnosis or clinical treatment. Think of it as warm human connection, available on demand.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a session cost in Canada?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Your first 5 minutes are free. After that: CA$14 for 15 min, CA$21 for 30 min, CA$28 for 45 min.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if I want to stop mid-session?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can end a session at any time. There is no pressure to continue, no obligation to finish a block. The experience is designed to be entirely on your terms.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Talk to Someone Canada', item: 'https://www.leanon.app/canada-talk-to-someone' },
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
  .night-box{background:linear-gradient(135deg,#0F2640,#143354);border-radius:20px;padding:28px;margin-bottom:20px;color:white;}
  .night-box h2{font-size:18px;font-weight:900;margin-bottom:12px;color:white;}
  .night-box p{font-size:15px;line-height:1.78;margin-bottom:10px;color:rgba(255,255,255,0.85);}
  .night-box p:last-child{margin-bottom:0;}
  .night-box .cta-night{display:inline-block;background:var(--orange);color:white;font-weight:800;font-size:15px;padding:12px 28px;border-radius:50px;margin-top:16px;}
  .checklist{list-style:none;margin-top:10px;}
  .checklist li{font-size:15px;color:#3A6070;line-height:1.7;padding:6px 0;border-bottom:1px solid var(--border);display:flex;gap:10px;align-items:flex-start;}
  .checklist li:last-child{border-bottom:none;}
  .checklist li::before{content:'💙';flex-shrink:0;}
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
  @media(max-width:480px){.related{grid-template-columns:1fr;}}
`

export default function CanadaTalkToSomeonePage() {
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
          <a href="/">Home</a><span>›</span>Talk to Someone Canada
        </div>

        <h1>You Want a Real Human.<br />Not Another App That Pretends to Listen.</h1>
        <p className="lead">
          AI chatbots are everywhere. They are fast, always available, and completely hollow when
          you actually need to feel heard. LeanOn is different — every listener is a real, trained
          human being who is genuinely present in your conversation. There is no script. No algorithm.
          Just a person listening.
        </p>

        <a href="/browse" className="cta-hero">Talk to someone now — first 5 min free →</a>

        <div className="card">
          <h2>Why real human connection matters</h2>
          <p>When you are lonely, overwhelmed, or going through something hard, what you actually need
            is to feel like someone is with you. A chatbot cannot give you that — no matter how well it
            simulates concern. A real human can.</p>
          <ul className="checklist">
            <li>Real humans notice when your voice changes, when you pause, when you are holding something back</li>
            <li>Real humans respond to what you actually said, not a keyword match</li>
            <li>Real humans can sit in silence with you without trying to fill it with suggestions</li>
            <li>Real humans make you feel less alone — which is the whole point</li>
          </ul>
        </div>

        <div className="night-box">
          <h2>🌙 Available right now — no appointment, no waiting room</h2>
          <p>You do not need to book a week in advance. You do not need to explain why you want to talk.
            Browse the listeners who are available right now, pick the one who feels right, and start
            your first 5 minutes free.</p>
          <p>That is it. No friction. Just a real conversation when you need one.</p>
          <a href="/browse" className="cta-night">Find a listener online now →</a>
        </div>

        <div className="card">
          <h2>Who talks to LeanOn listeners in Canada</h2>
          <ul className="checklist">
            <li>Indian newcomers who have been holding everything together and need to just let it out</li>
            <li>Students away from home for the first time, overwhelmed and lonely</li>
            <li>Working professionals with no one to process the day with</li>
            <li>People going through immigration anxiety who cannot sleep at night</li>
            <li>Anyone who has been feeling off and cannot name why</li>
            <li>People who tried a chatbot and it did not help — because it never really could</li>
          </ul>
        </div>

        <div className="card">
          <h2>Session details</h2>
          <ul className="checklist">
            <li>First 5 minutes completely free — no credit card</li>
            <li>CA$14 for 15 min &nbsp;·&nbsp; CA$21 for 30 min &nbsp;·&nbsp; CA$28 for 45 min</li>
            <li>Real humans every time — we do not use AI in sessions</li>
            <li>Anonymous — your name and story are yours</li>
            <li>Available 24/7 across all of Canada</li>
          </ul>
        </div>

        <div className="cta">
          <h2>A real person is ready to listen right now</h2>
          <p>No algorithm. No script. Just human presence when you need it.</p>
          <a href="/browse" className="btn-white">Browse listeners →</a><br />
          <a href="/auth" className="btn-orange">Join free</a>
        </div>

        <div className="card">
          <h2>Frequently asked questions</h2>
          <div className="faq-item">
            <h3>Are LeanOn listeners real humans or AI?</h3>
            <p>Real humans — every single one. LeanOn listeners are trained peer supporters. When you
              connect, there is a real person on the other end giving you their genuine attention.</p>
          </div>
          <div className="faq-item">
            <h3>What do I talk about? I do not have one specific problem.</h3>
            <p>You do not need a specific problem. Many people come just because they feel heavy or
              overwhelmed without being able to name why. That is completely valid. Just start talking.</p>
          </div>
          <div className="faq-item">
            <h3>How is a peer listener different from a therapist?</h3>
            <p>A therapist is a licensed professional who can diagnose and treat. A LeanOn peer listener
              listens deeply and holds space — without diagnosis or treatment. Warm human connection,
              available on demand.</p>
          </div>
          <div className="faq-item">
            <h3>How much does a session cost in Canada?</h3>
            <p>First 5 minutes free. Then CA$14 for 15 min, CA$21 for 30 min, CA$28 for 45 min.</p>
          </div>
          <div className="faq-item">
            <h3>What if I want to stop mid-session?</h3>
            <p>You can end a session at any time. No pressure, no obligation. The experience is
              entirely on your terms.</p>
          </div>
        </div>

        <div className="related">
          <a href="/canada-loneliness">Loneliness in Canada →</a>
          <a href="/canada-empathy-listener">Empathy listener →</a>
          <a href="/canada-rant-to-someone">Need to rant? →</a>
          <a href="/canada-nri-support">NRI emotional support →</a>
          <a href="/desi-canada-support">Desi community support →</a>
          <a href="/canada-immigration-stress">Immigration anxiety →</a>
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
