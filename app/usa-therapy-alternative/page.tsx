import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Affordable Therapy Alternative for Indians in the USA — LeanOn Peer Listeners',
  description: 'Therapy in the USA costs $200/hr with a 6-week waitlist. LeanOn peer listeners are $10 for 15 minutes, available right now, and understand the Indian cultural context without explanation.',
  keywords: [
    'therapy alternative indians usa', 'affordable therapy usa indian', 'cheap therapy alternative usa',
    'therapy too expensive usa', 'peer support instead of therapy usa', 'mental health support indians usa',
    'affordable emotional support usa nri', 'therapy waitlist usa alternative', 'nri therapy cost usa',
    'cheap emotional support indian usa', 'low cost therapy alternative usa',
  ],
  alternates: {
    canonical: 'https://www.leanon.app/usa-therapy-alternative',
    languages: { 'en-US': 'https://www.leanon.app/usa-therapy-alternative' },
  },
  openGraph: {
    title: 'Affordable Therapy Alternative for Indians in the USA — LeanOn Peer Listeners',
    description: 'Therapy is $200/hr with a 6-week wait. LeanOn is $10 for 15 minutes, available now, with listeners who understand the Indian experience without needing it explained.',
    url: 'https://www.leanon.app/usa-therapy-alternative',
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
      name: 'Why is therapy so expensive and hard to access in the USA?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Therapy costs $150-$250 per session in most US cities, often not covered by insurance, and good therapists typically have waiting lists of weeks or months. For people who need support now — not in six weeks — this is a genuine barrier.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is LeanOn a replacement for therapy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LeanOn is peer support, not professional therapy. Peer listeners are not licensed clinicians and do not diagnose or treat mental health conditions. However, for many people dealing with loneliness, relationship stress, work anxiety, cultural identity issues, or just needing to vent — peer support is genuinely helpful and accessible.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between a peer listener and a therapist?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A therapist is a licensed professional who provides clinical treatment. A peer listener is a trained, empathetic person who listens without judgment, holds space, and helps you feel heard. Peer support is well-documented to help with loneliness, emotional regulation, and general wellbeing — especially when formal therapy is unavailable or too expensive.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does LeanOn cost compared to therapy in the USA?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A single therapy session in the USA can cost $150-$250. LeanOn sessions are $10 for 15 minutes, $15 for 30 minutes, and $20 for 45 minutes. Your first 5 minutes are always free. That is over 10 times more affordable per minute than most therapy options.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why should Indians in the USA use LeanOn specifically?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Many LeanOn listeners are Indian and understand the NRI experience — H-1B stress, family expectations, cultural displacement, homesickness — without needing it explained. American therapists, however well-meaning, often lack this cultural fluency. With LeanOn you spend your session on your feelings, not explaining the background.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Therapy Alternative USA', item: 'https://www.leanon.app/usa-therapy-alternative' },
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

export default function UsaTherapyAlternativePage() {
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
          <a href="/">Home</a><span>›</span>Therapy Alternative USA
        </div>

        <h1>Therapy is $200 an Hour and Six Weeks Away.<br />LeanOn Is $10 and Available Right Now.</h1>
        <p className="lead">
          You know you need to talk to someone. You looked into therapy — $200 a session, three-week waitlist,
          and a therapist who has never heard of an H-1B and will need the whole cultural backstory before
          you can get to how you actually feel. LeanOn peer listeners are Indian, available now, and a fraction
          of the cost.
        </p>

        <a href="/browse" className="cta-hero">Talk to someone now — first 5 min free →</a>

        <div className="card">
          <h2>Why accessing mental health support in the USA is so hard</h2>
          <ul className="checklist">
            <li>A single therapy session costs $150-$250 — even with insurance, copays add up fast.</li>
            <li>Good therapists in cities like San Francisco, Seattle, and New York have months-long waitlists.</li>
            <li>Culturally informed therapists who understand the South Asian experience are even rarer.</li>
            <li>The stigma around mental health in many Indian families means you cannot talk to family about seeking help.</li>
            <li>American mental health apps feel generic and transactional — not designed for the Indian experience.</li>
          </ul>
        </div>

        <div className="night-box">
          <h2>💡 Peer support is real support</h2>
          <p>Peer support is not a lesser option — it is a well-evidenced form of emotional care. Being
            genuinely heard by another human being reduces loneliness, helps regulate emotions, and provides
            perspective in a way that no app or algorithm can.</p>
          <p>For many people, a good peer listener is exactly what they need — not clinical treatment,
            just real human connection and warmth.</p>
          <a href="/browse" className="cta-night">Find a listener now →</a>
        </div>

        <div className="card">
          <h2>What LeanOn offers that therapy often cannot</h2>
          <p>LeanOn listeners are available <strong>right now</strong> — not in six weeks.
            Many are Indian and understand the NRI experience without needing it explained.
            Sessions are <strong>$10 for 15 minutes</strong>, <strong>$15 for 30 minutes</strong>,
            and <strong>$20 for 45 minutes</strong> — with your first 5 minutes always free.</p>
          <p>You do not spend your session explaining what an H-1B is, what it means to miss Diwali,
            or why your parents&apos; expectations feel so heavy. You get straight to the feelings.
            That is a different kind of accessibility.</p>
        </div>

        <div className="card">
          <h2>When LeanOn is the right choice</h2>
          <ul className="checklist">
            <li>You need to talk to someone today, not in six weeks.</li>
            <li>You want a listener who understands Indian culture without a 10-minute explanation.</li>
            <li>You are dealing with loneliness, work stress, relationship strain, or general overwhelm — not a clinical condition.</li>
            <li>You want an affordable option that does not require insurance or a referral.</li>
            <li>You want to try talking to someone before committing to formal therapy.</li>
          </ul>
          <p style={{ marginTop: '12px' }}>If you are in crisis or need clinical mental health treatment, please reach out to a licensed professional. LeanOn is here for the vast space of human struggle that falls short of that threshold.</p>
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
            <h3>Why is therapy so expensive and hard to access in the USA?</h3>
            <p>Therapy costs $150-$250 per session in most US cities, often not fully covered by insurance,
              and good therapists have waiting lists of weeks or months. For people who need support now,
              this is a genuine barrier.</p>
          </div>
          <div className="faq-item">
            <h3>Is LeanOn a replacement for therapy?</h3>
            <p>LeanOn is peer support, not professional therapy. Peer listeners are not licensed clinicians.
              However, for loneliness, relationship stress, work anxiety, and cultural identity issues —
              peer support is genuinely helpful and accessible.</p>
          </div>
          <div className="faq-item">
            <h3>What is the difference between a peer listener and a therapist?</h3>
            <p>A therapist provides clinical treatment. A peer listener is a trained, empathetic person who
              listens without judgment and helps you feel heard. Peer support is well-documented to help
              with loneliness, emotional regulation, and general wellbeing.</p>
          </div>
          <div className="faq-item">
            <h3>How much does LeanOn cost compared to therapy in the USA?</h3>
            <p>A therapy session costs $150-$250. LeanOn sessions are $10 for 15 minutes, $15 for 30 minutes,
              and $20 for 45 minutes — with the first 5 minutes always free.</p>
          </div>
          <div className="faq-item">
            <h3>Why should Indians in the USA use LeanOn specifically?</h3>
            <p>Many LeanOn listeners are Indian and understand the NRI experience without it being explained.
              You spend your session on your feelings, not explaining the cultural background.</p>
          </div>
        </div>

        <div className="related">
          <a href="/usa-loneliness">Feeling lonely in the USA →</a>
          <a href="/usa-empathy-listener">Empathy listener →</a>
          <a href="/usa-nri-support">NRI emotional support →</a>
          <a href="/usa-talk-to-someone">Someone to talk to →</a>
          <a href="/usa-h1b-visa-stress">H-1B visa stress →</a>
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
