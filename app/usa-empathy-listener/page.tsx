import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Empathy Listener for Indians in the USA — Someone Who Actually Gets It | LeanOn',
  description: 'Finding someone who truly understands the Indian-American experience is rare. LeanOn peer listeners are warm, non-judgmental, and know the cultural context — no explaining needed.',
  keywords: [
    'empathy listener usa indian', 'empathetic listener nri', 'someone who understands indian american',
    'peer listener usa indian', 'emotional support indian usa', 'non judgmental listener usa',
    'compassionate listener nri', 'indian empathy support usa', 'south asian empathy listener',
    'desi empathy support america', 'understanding listener for indians usa',
  ],
  alternates: {
    canonical: 'https://www.leanon.app/usa-empathy-listener',
    languages: { 'en-US': 'https://www.leanon.app/usa-empathy-listener' },
  },
  openGraph: {
    title: 'Empathy Listener for Indians in the USA — Someone Who Actually Gets It',
    description: 'No explaining the cultural weight. No blank looks when you mention izzat or visa status. LeanOn peer listeners are warm, Indian-context aware, and available now.',
    url: 'https://www.leanon.app/usa-empathy-listener',
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
      name: 'What is a peer listener and how is it different from a therapist?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A peer listener is a trained, empathetic person who listens without judgment. They do not diagnose, prescribe, or give clinical advice — they simply hold space for you, ask thoughtful questions, and make you feel genuinely heard. Think of it as a warm human conversation, available on demand.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is it important to have a listener who understands Indian culture?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When your struggles are rooted in cultural context — family honour, visa dependency, the pressure of being the first one abroad, the model minority myth — a listener who does not share that context will spend most of the session asking you to explain it. LeanOn listeners already know. You can skip straight to what you actually feel.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are LeanOn listeners trained to handle sensitive topics?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. LeanOn listeners go through onboarding to develop active listening skills, empathy, and the ability to hold space for difficult emotions — grief, anxiety, shame, relationship pain — without judgment.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does a session cost from the USA?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sessions are $10 for 15 minutes, $15 for 30 minutes, and $20 for 45 minutes. Your first 5 minutes free — once per listener. No subscription required.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is LeanOn confidential?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Your conversations are private. You can also choose to remain anonymous when you start. What you share stays between you and your listener.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Empathy Listener USA', item: 'https://www.leanon.app/usa-empathy-listener' },
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

export default function UsaEmpathyListenerPage() {
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
          <a href="/">Home</a><span>›</span>Empathy Listener USA
        </div>

        <h1>Someone Who Actually Gets It.<br />No Explaining. No Blank Looks. Just Warmth.</h1>
        <p className="lead">
          You have tried talking to American friends. They sympathise but they do not really understand
          the visa anxiety, the family expectations, the guilt, the cultural weight you carry.
          LeanOn listeners are different. They already know the context. You can start from the middle of the story.
        </p>

        <a href="/browse" className="cta-hero">Talk to someone now — first 5 min free →</a>

        <div className="card">
          <h2>What makes a LeanOn listener different</h2>
          <ul className="checklist">
            <li>They understand what an H-1B is and why losing your job is not just a job loss.</li>
            <li>They know the family pressure to succeed that comes with being sent abroad.</li>
            <li>They get the grief of missing India during Diwali, weddings, and funerals.</li>
            <li>They understand that &quot;model minority&quot; means you are not allowed to visibly struggle.</li>
            <li>They will not tell you to &quot;just be grateful&quot; for being in America.</li>
            <li>They will just listen — and make you feel genuinely seen and heard.</li>
          </ul>
        </div>

        <div className="night-box">
          <h2>💙 Empathy is not something you schedule six weeks from now</h2>
          <p>Therapy waitlists are long. Your friends are busy. The moment you need to be heard does not
            always arrive at a convenient time.</p>
          <p>LeanOn listeners are available right now — any day, any time, including late at night US time
            when the weight of everything feels heaviest.</p>
          <a href="/browse" className="cta-night">Find a listener now →</a>
        </div>

        <div className="card">
          <h2>What a session with a LeanOn listener actually feels like</h2>
          <p>You open the app. You browse a few listener profiles. You pick someone who feels right.
            You start talking — maybe haltingly at first, maybe in a rush — and they are just there with you.
            Asking gentle questions. Reflecting back what they hear. Not rushing to fix anything.</p>
          <p>By the end of even a 15-minute session, something shifts. The weight feels more manageable.
            You feel less alone. Sometimes that is all you needed.</p>
          <p>Sessions start at <strong>$10 for 15 minutes</strong>. First 5 minutes free — once per listener.</p>
        </div>

        <div className="card">
          <h2>Who uses LeanOn from the USA?</h2>
          <ul className="checklist">
            <li>H-1B workers carrying quiet anxiety about their job and visa every single day</li>
            <li>Students far from home, overwhelmed and unsure who to call</li>
            <li>NRIs who are outwardly successful but privately exhausted and lonely</li>
            <li>Anyone who has smiled and said &quot;I&apos;m fine&quot; one too many times</li>
            <li>People who just want to be understood without having to explain their entire culture first</li>
          </ul>
        </div>

        <div className="cta">
          <h2>Someone is ready to listen right now</h2>
          <p>$10 for 15 min · $15 for 30 min · $20 for 45 min · First 5 min always free.</p>
          <a href="/browse" className="btn-white">Browse listeners →</a><br />
          <a href="/auth" className="btn-orange">Join free</a>
        </div>

        <div className="card">
          <h2>Frequently asked questions</h2>
          <div className="faq-item">
            <h3>What is a peer listener and how is it different from a therapist?</h3>
            <p>A peer listener is a trained, empathetic person who listens without judgment. They do not
              diagnose or give clinical advice — they simply hold space for you and make you feel genuinely heard.</p>
          </div>
          <div className="faq-item">
            <h3>Why is it important to have a listener who understands Indian culture?</h3>
            <p>When your struggles are rooted in cultural context — family honour, visa dependency, the model
              minority myth — a listener who does not share that context will spend half the session asking you
              to explain it. LeanOn listeners already know.</p>
          </div>
          <div className="faq-item">
            <h3>Are LeanOn listeners trained to handle sensitive topics?</h3>
            <p>Yes. LeanOn listeners go through onboarding to develop active listening skills and the ability
              to hold space for difficult emotions — grief, anxiety, shame, relationship pain — without judgment.</p>
          </div>
          <div className="faq-item">
            <h3>What does a session cost from the USA?</h3>
            <p>Sessions are $10 for 15 minutes, $15 for 30 minutes, and $20 for 45 minutes. Your first
              5 minutes free — once per listener. No subscription required.</p>
          </div>
          <div className="faq-item">
            <h3>Is LeanOn confidential?</h3>
            <p>Yes. Your conversations are private. You can also choose to remain anonymous when you start.
              What you share stays between you and your listener.</p>
          </div>
        </div>

        <div className="related">
          <a href="/usa-loneliness">Feeling lonely in the USA →</a>
          <a href="/usa-nri-support">NRI emotional support →</a>
          <a href="/usa-talk-to-someone">Someone to talk to →</a>
          <a href="/usa-rant-to-someone">Need to rant? →</a>
          <a href="/desi-usa-support">Desi community support →</a>
          <a href="/indian-american-loneliness">Indian-American loneliness →</a>
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
