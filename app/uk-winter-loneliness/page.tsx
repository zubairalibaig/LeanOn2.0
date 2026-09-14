import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Winter Loneliness in the UK — When the Dark Sets In | LeanOn',
  description: 'Short days, grey skies, SAD, and the particular isolation of a UK winter as an Indian far from home. LeanOn peer listeners are available 24/7 — including the long dark evenings of November.',
  keywords: [
    'winter loneliness uk', 'sad seasonal affective disorder uk indians', 'uk winter depression',
    'november blues uk', 'winter isolation uk south asian', 'dark evenings uk loneliness',
    'uk winter mental health', 'seasonal loneliness uk', 'british winter sad indian',
    'winter emotional support uk',
  ],
  alternates: {
    canonical: 'https://www.leanon.app/uk-winter-loneliness',
    languages: { 'en-GB': 'https://www.leanon.app/uk-winter-loneliness' },
  },
  openGraph: {
    title: 'Winter Loneliness in the UK — When the Dark Sets In',
    description: 'Short days, grey skies, and the isolation of a UK winter far from home. LeanOn peer listeners are available 24/7.',
    url: 'https://www.leanon.app/uk-winter-loneliness',
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
      name: 'What is Seasonal Affective Disorder and why does it affect Indians in the UK more?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Seasonal Affective Disorder (SAD) is a form of depression linked to reduced sunlight in autumn and winter. It causes low mood, fatigue, irritability, and social withdrawal. Indians in the UK are particularly affected because they have moved from a country with abundant year-round sunlight to one with very limited daylight in winter — the contrast is much starker than for those who grew up here.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why does UK winter feel especially hard when you are far from family?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Winter in India often means festivals, family gatherings, and warmth — Diwali, weddings, January weddings, family visits. In the UK, winter can feel like a long stretch of grey isolation, especially if your social circle is small. Missing the festive warmth of home during British winter creates a layered kind of loneliness that is hard to shake.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it SAD or just regular sadness?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The distinction matters less than you might think. If you are feeling low, disconnected, or finding it hard to get through the days in winter — that is real and it deserves support, regardless of whether it has a clinical label. LeanOn is not a diagnostic service; it is a space to talk about how you are actually feeling.',
      },
    },
    {
      '@type': 'Question',
      name: 'What helps with winter loneliness in the UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Many things can help — light therapy, vitamin D, exercise, staying connected to people. But one of the most underrated things is simply being heard. Saying out loud that the winter is getting to you, to someone who will not brush it off, can take the edge off the isolation significantly.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a session cost from the UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Your first 5 minutes are free. After that: £8 for 15 minutes, £12 for 30 minutes, £16 for 45 minutes.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Winter Loneliness UK', item: 'https://www.leanon.app/uk-winter-loneliness' },
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

export default function UkWinterLonelinessPage() {
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
          <a href="/">Home</a><span>›</span>Winter Loneliness UK
        </div>

        <h1>Dark by 4 PM.<br />Cold. Quiet.<br />And Missing Home More Than Usual.</h1>
        <p className="lead">
          UK winters are hard for everyone. But when you grew up in India — with its light and warmth and
          festive noise — the British winter feels like a particular kind of grey. And when loneliness
          is already a companion, the short days make it louder.
        </p>

        <a href="/browse" className="cta-hero">Talk to someone now — first 5 min free →</a>

        <div className="card">
          <h2>What UK winter does to your mood — especially when you are far from home</h2>
          <p>This is not weakness. It is biology, distance, and a very specific kind of grief:</p>
          <ul className="checklist">
            <li>Seasonal Affective Disorder (SAD) — less light means lower mood, less energy, more withdrawal</li>
            <li>Missing Diwali, family weddings, and the warmth that winter in India used to mean</li>
            <li>Coming home in the dark every evening, before and after work</li>
            <li>The social slowdown — people hibernate, plans get cancelled, the city goes quiet</li>
            <li>Vitamin D deficiency making everything feel heavier</li>
            <li>The distance from home feeling even larger when British winter settles in</li>
          </ul>
        </div>

        <div className="night-box">
          <h2>🕯️ The long evenings do not have to be so solitary</h2>
          <p>There is something uniquely isolating about a dark Tuesday in November when it has been raining
            for three days and the flat feels too small and too quiet. You do not have to just sit with it.</p>
          <p>LeanOn listeners are available right now — real humans, warm conversations, no waiting.</p>
          <a href="/browse" className="cta-night">Find a listener online now →</a>
        </div>

        <div className="card">
          <h2>Is it SAD or is it something deeper?</h2>
          <p>The distinction matters less than you might think. If you are feeling low, disconnected, or
            struggling to get through the winter days — that is real and it deserves support.</p>
          <p>LeanOn is not a diagnostic service. It is a space to talk about how you are actually feeling,
            with someone who will not brush it off or compare it to something worse.</p>
        </div>

        <div className="card">
          <h2>Session pricing in GBP</h2>
          <ul className="checklist">
            <li>First 5 minutes — completely free</li>
            <li>15 minutes — £8</li>
            <li>30 minutes — £12</li>
            <li>45 minutes — £16</li>
          </ul>
          <p style={{ marginTop: '12px' }}>Available 24/7 — including the long dark evenings when you need it most.</p>
        </div>

        <div className="cta">
          <h2>You do not have to wait for spring</h2>
          <p>Indian peer listeners, available right now. Anonymous and warm.</p>
          <a href="/browse" className="btn-white">Browse listeners →</a><br />
          <a href="/auth" className="btn-orange">Join free</a>
        </div>

        <div className="card">
          <h2>Frequently asked questions</h2>
          <div className="faq-item">
            <h3>What is SAD and why does it affect Indians in the UK more?</h3>
            <p>Seasonal Affective Disorder is linked to reduced sunlight in autumn and winter. Indians in the
              UK moved from a country with abundant sunlight to one with very limited winter daylight — the
              contrast is much starker than for those who grew up here.</p>
          </div>
          <div className="faq-item">
            <h3>Why does UK winter feel especially hard when you are far from family?</h3>
            <p>Winter in India means festivals and warmth. In the UK it can feel like a long stretch of grey
              isolation. Missing that festive warmth creates a layered loneliness that is hard to shake.</p>
          </div>
          <div className="faq-item">
            <h3>Is it SAD or just regular sadness?</h3>
            <p>The distinction matters less than whether you are getting support. If you are feeling low in
              winter, that is real and it deserves space — whatever label fits.</p>
          </div>
          <div className="faq-item">
            <h3>What helps with winter loneliness?</h3>
            <p>Many things help — light therapy, exercise, staying connected. But one of the most underrated
              is simply being heard. Saying out loud that the winter is getting to you, to someone who
              will not brush it off, can take the edge off significantly.</p>
          </div>
          <div className="faq-item">
            <h3>How much does a session cost?</h3>
            <p>First 5 minutes are free. Then £8 for 15 min, £12 for 30 min, £16 for 45 min.</p>
          </div>
        </div>

        <div className="related">
          <a href="/uk-loneliness">Loneliness support UK →</a>
          <a href="/london-loneliness">Lonely in London →</a>
          <a href="/uk-nri-support">NRI support UK →</a>
          <a href="/uk-mental-health-south-asian">South Asian mental health →</a>
          <a href="/uk-talk-to-someone">Talk to someone UK →</a>
          <a href="/british-indian-support">British Indian identity →</a>
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
