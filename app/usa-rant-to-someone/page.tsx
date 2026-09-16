import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Need to Rant? Someone to Talk to in the USA — H-1B Stress, Work Pressure & More | LeanOn',
  description: 'Sometimes you just need to vent. H-1B anxiety, American work culture, impossible expectations — talk to a real Indian listener in the USA who gets it without needing the whole backstory.',
  keywords: [
    'rant to someone usa indian', 'vent to someone usa', 'need to talk to someone usa',
    'h1b stress vent', 'indian work pressure usa', 'someone to talk to usa nri',
    'rant about work usa indian', 'american work culture rant', 'hustle culture stress india usa',
    'nri vent talk', 'indian american vent support',
  ],
  alternates: {
    canonical: 'https://www.leanon.app/usa-rant-to-someone',
    languages: { 'en-US': 'https://www.leanon.app/usa-rant-to-someone' },
  },
  openGraph: {
    title: 'Need to Rant? Someone to Talk to in the USA',
    description: 'H-1B anxiety. Toxic work culture. Impossible expectations. Sometimes you just need to say it all out loud to someone who gets it. That is what LeanOn is for.',
    url: 'https://www.leanon.app/usa-rant-to-someone',
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
      name: 'Can I just rant to a LeanOn listener without wanting advice?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. You can tell a listener upfront: "I just need to vent, please do not give advice." LeanOn listeners are trained to hold space, not fix problems. Sometimes being heard without being judged is exactly what you need.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it okay to complain about American work culture to a listener?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, completely. The performative positivity, the hustle culture, the cold professionalism, the way no one actually checks in on you — LeanOn listeners understand the culture shock. You can say exactly what you feel without softening it.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if my H-1B anxiety feels overwhelming right now?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'H-1B anxiety is real and it is serious — the knowledge that a layoff email could end your right to stay in the country is an enormous psychological burden. A LeanOn listener can hold space for that fear while you work through what it means for you.',
      },
    },
    {
      '@type': 'Question',
      name: 'How quickly can I start a session?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Instantly. Browse available listeners, pick one, and start talking — your first 5 minutes are free. No appointment, no waitlist, no insurance forms.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does a session cost for NRIs in the USA?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sessions are $10 for 15 minutes, $15 for 30 minutes, and $20 for 45 minutes. Your first 5 minutes free — once per listener. Much more accessible than formal therapy.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Rant to Someone USA', item: 'https://www.leanon.app/usa-rant-to-someone' },
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

export default function UsaRantToSomeonePage() {
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
          <a href="/">Home</a><span>›</span>Rant to Someone USA
        </div>

        <h1>You Just Need to Say It All Out Loud.<br />Without Being Judged. Without Advice.</h1>
        <p className="lead">
          Some days you are not looking for solutions. You just need to vent. About the layoff rumours.
          About American hustle culture. About the visa limbo. About the family back home who does not
          understand your life here. About everything that has been building up for months.
          LeanOn listeners are here exactly for this.
        </p>

        <a href="/browse" className="cta-hero">Start venting now — first 5 min free →</a>

        <div className="card">
          <h2>What Indians in the USA actually need to rant about</h2>
          <ul className="checklist">
            <li>H-1B anxiety — knowing a layoff email could end your right to stay in this country.</li>
            <li>American work culture — the performative positivity, the endless hustle, the zero warmth.</li>
            <li>The &quot;model minority&quot; trap — you are not allowed to be struggling, just silently succeeding.</li>
            <li>Parents calling every week asking when you are getting promoted, married, or having kids.</li>
            <li>The guilt of being far away when something goes wrong at home in India.</li>
            <li>Colleagues who are polite but cold — and a loneliness you cannot explain to anyone.</li>
          </ul>
        </div>

        <div className="night-box">
          <h2>🔥 The H-1B stress is real and it is exhausting</h2>
          <p>Imagine your entire life in the USA — your apartment, your friends, your plans —
            depending on a single sponsorship letter from your employer. Every week of layoff news
            is a week of quiet dread that most Americans around you simply cannot understand.</p>
          <p>A LeanOn listener will not tell you &quot;it will be fine.&quot; They will just be present
            with you while you say everything you have been holding in.</p>
          <a href="/browse" className="cta-night">Find a listener online now →</a>
        </div>

        <div className="card">
          <h2>Why venting to a LeanOn listener is different</h2>
          <p>Your friends are tired of the same conversation. Your family back home will just worry.
            Your colleagues cannot know what you are really going through. And therapy has a six-week
            waitlist and costs $200 an hour.</p>
          <p>LeanOn listeners are available right now, at $10 for 15 minutes. You tell them upfront:
            &quot;I just want to rant, no advice.&quot; They will listen — fully, attentively, without judgment.
            And sometimes that is all you need.</p>
        </div>

        <div className="card">
          <h2>You do not need a &quot;good enough&quot; reason to reach out</h2>
          <p>Sometimes the rant is about nothing specific — just a general feeling of overwhelm, of being
            tired of performing okayness, of wanting someone to see through the facade for five minutes.</p>
          <p>That is a completely valid reason to start a session. In fact, it might be the best reason.</p>
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
            <h3>Can I just rant to a LeanOn listener without wanting advice?</h3>
            <p>Absolutely. You can tell a listener upfront: &quot;I just need to vent, please do not give advice.&quot;
              LeanOn listeners are trained to hold space, not fix problems.</p>
          </div>
          <div className="faq-item">
            <h3>Is it okay to complain about American work culture?</h3>
            <p>Yes, completely. The performative positivity, the hustle culture, the cold professionalism —
              LeanOn listeners understand the culture shock. You can say exactly what you feel without softening it.</p>
          </div>
          <div className="faq-item">
            <h3>What if my H-1B anxiety feels overwhelming right now?</h3>
            <p>H-1B anxiety is real and serious. A LeanOn listener can hold space for that fear while you
              work through what it means for you — without judgment or unsolicited optimism.</p>
          </div>
          <div className="faq-item">
            <h3>How quickly can I start a session?</h3>
            <p>Instantly. Browse available listeners, pick one, and start talking — your first 5 minutes
              are free. No appointment, no waitlist, no insurance forms.</p>
          </div>
          <div className="faq-item">
            <h3>What does a session cost for NRIs in the USA?</h3>
            <p>Sessions are $10 for 15 minutes, $15 for 30 minutes, and $20 for 45 minutes. Your first
              5 minutes free — once per listener.</p>
          </div>
        </div>

        <div className="related">
          <a href="/usa-h1b-visa-stress">H-1B visa stress →</a>
          <a href="/usa-loneliness">Feeling lonely in the USA →</a>
          <a href="/usa-talk-to-someone">Someone to talk to →</a>
          <a href="/usa-empathy-listener">Empathy listener →</a>
          <a href="/usa-nri-support">NRI emotional support →</a>
          <a href="/desi-usa-support">Desi community support →</a>
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
