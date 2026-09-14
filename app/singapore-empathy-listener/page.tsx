import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Empathy Listening for Indians in Singapore | LeanOn',
  description: 'Feeling unheard in Singapore? LeanOn connects Indian expats with trained empathy listeners who speak your language, understand your cultural context, and give you their full, undivided attention.',
  keywords: [
    'empathy listener singapore', 'feel heard singapore', 'someone who understands singapore indian',
    'active listener singapore', 'emotional support singapore expat', 'feeling unheard singapore',
    'indian listener singapore', 'non-judgmental listener singapore', 'empathetic support singapore',
    'talk to someone who understands singapore', 'south asian empathy listener singapore',
  ],
  alternates: {
    canonical: 'https://www.leanon.app/singapore-empathy-listener',
    languages: { 'en-SG': 'https://www.leanon.app/singapore-empathy-listener' },
  },
  openGraph: {
    title: 'Empathy Listening for Indians in Singapore — Feel Truly Heard | LeanOn',
    description: 'Feeling unheard is one of the deepest forms of loneliness. LeanOn empathy listeners are trained Indian peers who give you their full attention — in your language, without judgment.',
    url: 'https://www.leanon.app/singapore-empathy-listener',
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
      name: 'What is empathy listening and how is it different from regular conversation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Empathy listening means the listener\'s whole focus is on understanding your experience — not waiting for their turn to speak, not thinking about advice, not half-distracted. LeanOn listeners are specifically trained in active listening, reflective questioning, and creating space where you feel genuinely understood, not just heard.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why do I feel unheard even when I talk to people in Singapore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most conversations are transactional — people listen to respond, not to understand. In a work-focused culture like Singapore, deep emotional conversations are rare. LeanOn listeners are specifically there to break that pattern and give you the undivided, empathetic attention most people almost never receive.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I talk to an Indian listener who understands my cultural background?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. LeanOn listeners are from India and understand the cultural context — family dynamics, social pressures, the weight of expectations, the particular loneliness of being far from home. You will not have to explain why something is hard; they will already understand.',
      },
    },
    {
      '@type': 'Question',
      name: 'What languages do LeanOn listeners speak?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LeanOn listeners speak Hindi, Tamil, Telugu, Malayalam, Kannada, Bengali, and English. You can filter by language when browsing listener profiles. Being heard in your mother tongue adds an extra layer of comfort.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does an empathy listening session cost from Singapore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sessions are S$14 for 15 minutes, S$20 for 30 minutes, and S$27 for 45 minutes. Your first session begins with 5 free minutes. No subscription, no long-term commitment.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Empathy Listener Singapore', item: 'https://www.leanon.app/singapore-empathy-listener' },
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
  .pricing-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin:16px 0;}
  .price-card{background:var(--light);border:1.5px solid var(--border);border-radius:14px;padding:14px 12px;text-align:center;}
  .price-card .dur{font-size:13px;font-weight:700;color:var(--gray);margin-bottom:4px;}
  .price-card .amt{font-size:20px;font-weight:900;color:var(--teal);}
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
  @media(max-width:480px){.related{grid-template-columns:1fr;}.pricing-grid{grid-template-columns:1fr;}}
`

export default function SingaporeEmpathyListenerPage() {
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
          <a href="/">Home</a><span>›</span>Empathy Listener Singapore
        </div>

        <h1>You Want Someone Who Truly Listens.<br />Not Just Hears.</h1>
        <p className="lead">
          Feeling unheard is one of the loneliest experiences there is. You speak, people respond —
          but you still leave the conversation feeling unseen. LeanOn empathy listeners are trained
          Indian peers in Singapore who do one thing exceptionally well: give you their full, genuine
          attention.
        </p>

        <a href="/browse" className="cta-hero">Find an empathy listener — first 5 min free →</a>

        <div className="card">
          <h2>The difference between being heard and being understood</h2>
          <p>Most people listen to respond. They are already forming their reply while you are still
            mid-sentence. They offer solutions before you have finished explaining the problem. They
            relate everything back to themselves.</p>
          <p>Empathy listening is different. It means the listener&apos;s whole focus is on understanding
            your experience — not just the facts, but how it feels to be you right now. LeanOn listeners
            are trained specifically in this.</p>
          <ul className="checklist">
            <li>They ask questions to understand deeper, not to redirect the conversation.</li>
            <li>They reflect back what they hear so you feel truly understood.</li>
            <li>They do not jump to solutions unless you ask for them.</li>
            <li>They sit with you in the hard feelings instead of rushing past them.</li>
            <li>They give you permission to say the thing you have been afraid to say out loud.</li>
          </ul>
        </div>

        <div className="night-box">
          <h2>🫂 What it feels like to be fully heard</h2>
          <p>When someone truly listens to you — without an agenda, without distraction — something
            shifts. The thing that felt impossibly tangled starts to clear. You feel less alone in it.
            You often know what to do next without anyone having to tell you.</p>
          <p>That is what LeanOn empathy listeners make possible. Try it once and feel the difference.</p>
          <a href="/browse" className="cta-night">Find a listener now →</a>
        </div>

        <div className="card">
          <h2>An Indian listener who gets your context</h2>
          <p>One of the hardest parts of living in Singapore as an Indian is constantly having to explain
            your context to people who did not grow up with the same pressures — family expectations,
            community judgment, the particular guilt of being the one who left.</p>
          <p>LeanOn listeners are Indian. They grew up with the same context. You will not need to
            translate your experience. They will understand it the way only someone from the same
            background can.</p>
        </div>

        <div className="card">
          <h2>Session pricing for Singapore</h2>
          <p>Pay in Singapore dollars. The first 5 minutes are always free.</p>
          <div className="pricing-grid">
            <div className="price-card">
              <div className="dur">15 min</div>
              <div className="amt">S$14</div>
            </div>
            <div className="price-card">
              <div className="dur">30 min</div>
              <div className="amt">S$20</div>
            </div>
            <div className="price-card">
              <div className="dur">45 min</div>
              <div className="amt">S$27</div>
            </div>
          </div>
          <p>No subscription. No long-term commitment. Talk when you need to.</p>
        </div>

        <div className="cta">
          <h2>Feel truly heard — maybe for the first time in a while</h2>
          <p>Real Indian listeners. Your language. Full attention. 24/7.</p>
          <a href="/browse" className="btn-white">Browse listeners →</a><br />
          <a href="/auth" className="btn-orange">Join free</a>
        </div>

        <div className="card">
          <h2>Frequently asked questions</h2>
          <div className="faq-item">
            <h3>What is empathy listening and how is it different from regular conversation?</h3>
            <p>Empathy listening means the listener&apos;s whole focus is on understanding your experience —
              not waiting for their turn, not thinking about advice. LeanOn listeners are trained in active
              listening, reflective questioning, and creating space where you feel genuinely understood.</p>
          </div>
          <div className="faq-item">
            <h3>Why do I feel unheard even when I talk to people in Singapore?</h3>
            <p>Most conversations are transactional — people listen to respond. In a work-focused culture
              like Singapore, deep emotional conversations are rare. LeanOn listeners break that pattern
              and give you the undivided, empathetic attention most people almost never receive.</p>
          </div>
          <div className="faq-item">
            <h3>Can I talk to an Indian listener who understands my cultural background?</h3>
            <p>Yes. LeanOn listeners are from India and understand cultural context — family dynamics,
              social pressures, the weight of expectations, the loneliness of being far from home.
              You will not have to explain why something is hard.</p>
          </div>
          <div className="faq-item">
            <h3>What languages do LeanOn listeners speak?</h3>
            <p>Hindi, Tamil, Telugu, Malayalam, Kannada, Bengali, and English. You can filter by language
              when browsing. Being heard in your mother tongue adds an extra layer of comfort.</p>
          </div>
          <div className="faq-item">
            <h3>How much does a session cost from Singapore?</h3>
            <p>S$14 for 15 minutes, S$20 for 30 minutes, and S$27 for 45 minutes. Your first session
              begins with 5 free minutes. No subscription required.</p>
          </div>
        </div>

        <div className="related">
          <a href="/singapore-loneliness">Loneliness support Singapore →</a>
          <a href="/singapore-talk-to-someone">Talk to someone Singapore →</a>
          <a href="/singapore-rant">Need to rant Singapore →</a>
          <a href="/malaysia-empathy-listener">Empathy listener Malaysia →</a>
          <a href="/singapore-relationship-advice">Relationship support Singapore →</a>
          <a href="/i-need-someone-to-talk-to">Need someone to talk to →</a>
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
