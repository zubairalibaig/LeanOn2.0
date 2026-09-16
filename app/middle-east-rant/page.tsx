import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Need to Rant? Talk to Someone in the Middle East | LeanOn',
  description: 'Work stress, kafala pressures, visa anxieties, being far from everyone who cares — sometimes you just need to vent to someone who will listen without judgment. That\'s LeanOn.',
  keywords: [
    'need to rant Middle East', 'vent to someone Middle East', 'talk to someone Gulf',
    'Indian expat rant Middle East', 'work stress Gulf Indian', 'kafala pressure',
    'visa stress Gulf Indian', 'no one to talk to Gulf', 'vent frustration UAE',
    'Indian listener Gulf rant', 'talk about work stress UAE', 'Gulf worker mental health',
    'just need to talk Middle East', 'someone to listen Gulf Indian',
  ],
  alternates: {
    canonical: 'https://www.leanon.app/middle-east-rant',
    languages: { 'en-IN': 'https://www.leanon.app/middle-east-rant' },
  },
  openGraph: {
    title: 'Need to Rant? There\'s an Indian Listener Ready in the Gulf — First 5 Min Free',
    description: 'Work stress, visa anxieties, kafala pressures — sometimes you just need someone to hear you out without fixing, judging, or minimising what you feel.',
    url: 'https://www.leanon.app/middle-east-rant',
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
      name: 'Can I use LeanOn just to vent — without wanting advice?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, absolutely. LeanOn listeners are trained to listen first — not to fix, advise, or redirect. If you just need to get it all out, say so at the start and your listener will simply hold space for you.',
      },
    },
    {
      '@type': 'Question',
      name: 'What kind of things do Indians in the Gulf usually rant about?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Work stress and impossible deadlines. Difficult managers. The kafala system and the feeling of being tied to a sponsor. Visa renewals. Missing family milestones back home. Financial pressure. Being talked over or dismissed. Feeling stuck and unable to change anything. All of it is valid.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it safe to talk openly? Will anything I say be shared?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LeanOn sessions are completely private. You can use an anonymous name — nothing is linked to your real identity. Your employer, visa sponsor, family, and anyone else will never know what you said. You can speak without filters.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does it cost to talk to a listener from the Gulf?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'From the UAE, sessions cost AED 37 for 15 min, AED 55 for 30 min, and AED 74 for 45 min. From Kuwait: KD 4 for 15 min, KD 5 for 30 min, KD 7 for 45 min. From Oman: OMR 4 for 15 min, OMR 6 for 30 min, OMR 8 for 45 min. First 5 minutes free — once per listener.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if I do not know what I want to say — I just feel overwhelmed?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Perfect. Start talking and let it come out. LeanOn listeners are patient — they will follow your lead, gently ask questions when helpful, and make you feel heard without rushing you. Sometimes just starting is the hardest part.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Need to Rant Middle East', item: 'https://www.leanon.app/middle-east-rant' },
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

export default function MiddleEastRantPage() {
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
          <a href="/">Home</a><span>›</span>Need to Rant — Middle East
        </div>

        <h1>You Just Need to Get It Out.<br />No Advice. No Judgment. Just Someone Listening.</h1>
        <p className="lead">
          Living and working in the Gulf as an Indian carries pressures that build up slowly — and then
          all at once. The work stress. The visa anxiety. Being away from everyone who truly knows you.
          Sometimes you do not need a solution. You just need to rant to someone who actually listens.
          That is exactly what LeanOn is for.
        </p>

        <a href="/browse" className="cta-hero">Talk to an Indian listener — first 5 min free →</a>

        <div className="card">
          <h2>What Gulf workers carry that they rarely say out loud</h2>
          <ul className="checklist">
            <li>A manager who treats you differently because of where you are from</li>
            <li>The kafala system — tied to a sponsor, no easy way out if things go wrong</li>
            <li>Visa renewal stress that never fully goes away</li>
            <li>Sending money home every month and having nothing left for yourself</li>
            <li>Missing a parent&apos;s health crisis, a sibling&apos;s wedding, a child&apos;s first steps</li>
            <li>Colleagues who do not see you as a full person — just a worker</li>
            <li>The constant performance of &quot;I am fine, things are good here&quot;</li>
          </ul>
          <p style={{ marginTop: '12px' }}>All of this deserves to be said. Not swallowed.</p>
        </div>

        <div className="night-box">
          <h2>🔥 Something just happened and you need to talk right now</h2>
          <p>Whether it was today at work, a call that went badly, a decision that does not feel right —
            LeanOn listeners are available around the clock. You do not have to wait until it passes.</p>
          <p>Start talking in your language. First 5 minutes are free, no payment needed to begin.</p>
          <a href="/browse" className="cta-night">Find a listener right now →</a>
        </div>

        <div className="card">
          <h2>A listener who just listens — no unsolicited advice</h2>
          <p>The most frustrating thing about venting to someone is when they immediately try to fix it,
            minimise it, or tell you what you should have done differently.</p>
          <p>LeanOn listeners are trained to listen first. If you just want to get it all out, tell your
            listener that at the start — and they will hold that space for you, fully and patiently,
            without jumping in with solutions you did not ask for.</p>
        </div>

        <div className="card">
          <h2>Completely safe. Completely private.</h2>
          <p>In the Gulf, speaking openly about frustrations at work can feel risky. LeanOn sessions
            are anonymous — you can use any name. Your employer, sponsor, and anyone you know will
            never find out what you said. You can speak without a filter, without consequences.</p>
        </div>

        <div className="cta">
          <h2>Let it out. You will feel lighter.</h2>
          <p>Available 24/7, in your language, from anywhere in the Gulf.</p>
          <a href="/browse" className="btn-white">Browse listeners →</a><br />
          <a href="/auth" className="btn-orange">Join free</a>
        </div>

        <div className="card">
          <h2>Frequently asked questions</h2>
          <div className="faq-item">
            <h3>Can I use LeanOn just to vent — without wanting advice?</h3>
            <p>Yes, absolutely. Tell your listener at the start and they will simply hold space for you to
              get it all out, without fixing or redirecting.</p>
          </div>
          <div className="faq-item">
            <h3>What kind of things do Indians in the Gulf usually rant about?</h3>
            <p>Work stress, difficult managers, kafala pressures, visa anxieties, missing family milestones,
              financial strain, feeling invisible. All of it is valid and welcome here.</p>
          </div>
          <div className="faq-item">
            <h3>Is it safe to talk openly without being identified?</h3>
            <p>Completely. LeanOn sessions are anonymous — nothing is linked to your real identity. Your
              employer and sponsor will never know. Speak without filters.</p>
          </div>
          <div className="faq-item">
            <h3>How much does it cost to talk from the Gulf?</h3>
            <p>UAE: AED 37 / AED 55 / AED 74 for 15/30/45 min. Kuwait: KD 4 / KD 5 / KD 7.
              Oman: OMR 4 / OMR 6 / OMR 8. First 5 minutes free — once per listener.</p>
          </div>
          <div className="faq-item">
            <h3>What if I do not know what to say — I just feel overwhelmed?</h3>
            <p>Just start. LeanOn listeners will follow your lead patiently. Sometimes just starting is
              the hardest part — and they are trained to help you through that.</p>
          </div>
        </div>

        <div className="related">
          <a href="/uae-loneliness">Loneliness support UAE →</a>
          <a href="/gulf-nri-support">Gulf NRI support →</a>
          <a href="/middle-east-empathy-listener">Empathy listener Gulf →</a>
          <a href="/middle-east-loneliness">Middle East loneliness →</a>
          <a href="/kuwait-loneliness">Kuwait support →</a>
          <a href="/oman-loneliness">Oman support →</a>
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
