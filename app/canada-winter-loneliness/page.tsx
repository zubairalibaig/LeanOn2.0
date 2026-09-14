import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'First Winter in Canada — Why Indians Feel So Lonely | LeanOn',
  description: 'Nothing prepares you for the first Canadian winter — the darkness, the cold, the silence. For Indian newcomers, it can be overwhelming. LeanOn is here when it gets heavy.',
  keywords: [
    'first winter canada indian', 'winter loneliness canada', 'canadian winter depression indian',
    'winter isolation canada newcomer', 'dark winter canada lonely', 'seasonal loneliness canada',
    'winter canada mental health indian', 'sad winter canada immigrant', 'cold lonely canada winter',
  ],
  alternates: {
    canonical: 'https://www.leanon.app/canada-winter-loneliness',
    languages: { 'en-CA': 'https://www.leanon.app/canada-winter-loneliness' },
  },
  openGraph: {
    title: 'First Winter in Canada — Why Indians Feel So Lonely | LeanOn',
    description: 'Dark at 4 PM. Minus 20. Nowhere to go. Nobody around. The first Canadian winter is genuinely hard for Indian newcomers. LeanOn peer listeners are here for it.',
    url: 'https://www.leanon.app/canada-winter-loneliness',
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
      name: 'Why is the first Canadian winter so hard for Indian immigrants?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In India, even winters are social — people gather outside, evenings are lively, the streets stay busy. Canadian winters are the opposite: dark by 4 PM, temperatures that keep people indoors for months, and a social culture that does not compensate for the isolation. For newcomers without an established network, the first winter can feel like a completely different kind of hard.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Seasonal Affective Disorder (SAD) common for Indians in Canada?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. SAD is more common in Canada than in India simply because of the dramatic reduction in daylight during winter months. People from South Asia, who are used to year-round sunshine, can be particularly affected. If you think you may have SAD, please speak with a doctor — but peer support can also help you feel less alone through it.',
      },
    },
    {
      '@type': 'Question',
      name: 'What can I do when I feel completely isolated during a Canadian winter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Reaching out is the most important thing — even when it feels impossible. LeanOn listeners are available any time of day or night, including in the middle of a winter evening when everything feels too heavy. You do not need a specific reason to start a conversation. Just starting is enough.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a LeanOn session cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Your first 5 minutes are free. After that: CA$14 for 15 min, CA$21 for 30 min, CA$28 for 45 min.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does it get better after the first winter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For most people, yes — the first winter is the hardest because you have no reference point for how long it lasts or what helps. By the second year, most people have strategies and connections that make it more manageable. The first one is just genuinely difficult, and it is okay to say that.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Winter Loneliness Canada', item: 'https://www.leanon.app/canada-winter-loneliness' },
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

export default function CanadaWinterLonelinessPage() {
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
          <a href="/">Home</a><span>›</span>Winter Loneliness Canada
        </div>

        <h1>Nobody Warned You That Winter<br />in Canada Would Feel Like This.</h1>
        <p className="lead">
          Dark at 4 PM. Minus 20 outside. Your apartment is warm but the silence is deafening.
          You know people are out there somewhere, but getting to them feels impossible. The first
          winter in Canada hits Indian newcomers harder than almost anything else about the move.
        </p>

        <a href="/browse" className="cta-hero">Talk to someone now — first 5 min free →</a>

        <div className="card">
          <h2>What the first Canadian winter actually feels like</h2>
          <p>In India, winters are social. People gather, evenings are lively, the streets stay busy.
            Canadian winters are the opposite — and if you arrived without a support network, it can feel
            like the world has simply stopped:</p>
          <ul className="checklist">
            <li>Staying indoors for weeks at a stretch because going out is physically difficult</li>
            <li>Watching sunset at 4:15 PM and wondering what to do with the rest of the evening</li>
            <li>The silence of a snowstorm at night — beautiful and somehow crushing</li>
            <li>Not being able to just step outside and find life the way you could back home</li>
            <li>Feeling homesick in a way the cold seems to intensify</li>
            <li>Wondering how Canadians do this every single year and seem fine</li>
          </ul>
        </div>

        <div className="night-box">
          <h2>❄️ The dark evenings are the hardest part</h2>
          <p>It is 6 PM and already pitch black outside. You have been alone since you got home from work.
            The hours between dinner and sleep stretch out endlessly. This is when the loneliness peaks —
            and this is exactly when LeanOn listeners are available.</p>
          <p>You do not have to wait until morning. You can talk to a real person right now.</p>
          <a href="/browse" className="cta-night">Find a listener online now →</a>
        </div>

        <div className="card">
          <h2>This is not a personal failing. It is seasonal reality.</h2>
          <p>Seasonal Affective Disorder affects more people in Canada than almost anywhere else on earth —
            because the winters are genuinely hard on human beings. Add to that the isolation of being new
            to a country, and you have a situation that tests even the most resilient person.</p>
          <p>You are not weak for struggling through it. You are human. And reaching out is one of the
            bravest and most practical things you can do.</p>
        </div>

        <div className="card">
          <h2>Session details</h2>
          <ul className="checklist">
            <li>First 5 minutes completely free — try it tonight</li>
            <li>CA$14 for 15 min &nbsp;·&nbsp; CA$21 for 30 min &nbsp;·&nbsp; CA$28 for 45 min</li>
            <li>Real human listeners — not AI</li>
            <li>Anonymous and confidential</li>
            <li>Available at any hour — including those long winter evenings</li>
          </ul>
        </div>

        <div className="cta">
          <h2>Someone is ready to listen right now</h2>
          <p>The winter outside may be long. The wait does not have to be.</p>
          <a href="/browse" className="btn-white">Browse listeners →</a><br />
          <a href="/auth" className="btn-orange">Join free</a>
        </div>

        <div className="card">
          <h2>Frequently asked questions</h2>
          <div className="faq-item">
            <h3>Why is the first Canadian winter so hard for Indian immigrants?</h3>
            <p>In India, winters are social and lively. Canadian winters keep people indoors for months,
              with darkness by 4 PM. For newcomers without a network, it can be profoundly isolating.</p>
          </div>
          <div className="faq-item">
            <h3>Is Seasonal Affective Disorder common for Indians in Canada?</h3>
            <p>Yes. SAD is common in Canada because of the dramatic reduction in daylight. People from
              South Asia, used to year-round sunshine, can be particularly affected. Please also speak
              with a doctor if you think you may have SAD.</p>
          </div>
          <div className="faq-item">
            <h3>What can I do when I feel completely isolated during winter?</h3>
            <p>Reaching out is the most important thing. LeanOn listeners are available any time — including
              winter evenings. You do not need a specific reason. Just starting is enough.</p>
          </div>
          <div className="faq-item">
            <h3>How much does a session cost?</h3>
            <p>First 5 minutes free. Then CA$14 for 15 min, CA$21 for 30 min, CA$28 for 45 min.</p>
          </div>
          <div className="faq-item">
            <h3>Does it get better after the first winter?</h3>
            <p>For most people, yes. The first is the hardest because you have no reference point. By the
              second year, most people have strategies and connections that make it more manageable.</p>
          </div>
        </div>

        <div className="related">
          <a href="/canada-loneliness">Loneliness in Canada →</a>
          <a href="/toronto-loneliness">Lonely in Toronto →</a>
          <a href="/canada-nri-support">NRI emotional support →</a>
          <a href="/canada-talk-to-someone">Someone to talk to →</a>
          <a href="/canada-immigration-stress">Immigration anxiety →</a>
          <a href="/desi-canada-support">Desi community support →</a>
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
