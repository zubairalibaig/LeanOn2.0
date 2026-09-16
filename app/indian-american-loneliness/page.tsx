import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Indian-American Loneliness — The In-Between Feeling | LeanOn',
  description: 'Too Indian for America, too American for India. The ABCD in-between identity is a unique kind of loneliness that most people around you will never fully understand. LeanOn gets it.',
  keywords: [
    'indian american loneliness', 'abcd identity crisis', 'second generation indian american lonely',
    'too indian for america too american for india', 'desi identity usa', 'indian american belonging',
    'south asian american loneliness', 'first generation indian american stress',
    'desi american feeling lost', 'indian american cultural identity support',
  ],
  alternates: {
    canonical: 'https://www.leanon.app/indian-american-loneliness',
    languages: { 'en-US': 'https://www.leanon.app/indian-american-loneliness' },
  },
  openGraph: {
    title: 'Indian-American Loneliness — The In-Between Feeling',
    description: 'Not fully Indian, not fully American. That in-between space can be profoundly lonely. LeanOn peer listeners understand this identity without needing it explained.',
    url: 'https://www.leanon.app/indian-american-loneliness',
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
      name: 'Why do Indian-Americans feel so lonely even with communities around them?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Indian-American experience involves navigating two cultures simultaneously — and often feeling fully at home in neither. Your American friends do not fully understand your home life. Your Indian relatives do not understand your American experience. That in-between space creates a specific kind of loneliness that is hard to name but very real.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is ABCD identity and why does it cause emotional pain?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ABCD — American Born Confused Desi — is a term that captures the cultural in-between: feeling pressure to be Indian at home and American everywhere else, and never quite succeeding at either. The resulting sense of not fully belonging anywhere can lead to identity confusion, anxiety, and deep loneliness.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can a LeanOn listener help with identity-related stress?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Many LeanOn listeners have navigated the Indian-American experience themselves. They understand the cultural tug-of-war, the family expectations, the feeling of being between two worlds. They will not judge you or tell you how to feel — they will simply listen and make you feel understood.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if my parents do not understand what I am going through?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tiger parenting and high expectations are real pressures that many Indian-American families navigate. A LeanOn listener is a neutral space where you can say things you cannot say at home — without worrying about disappointing anyone.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does LeanOn cost from the USA?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sessions are $10 for 15 minutes, $15 for 30 minutes, and $20 for 45 minutes. Your first 5 minutes free — once per listener. No referral needed, no waitlist.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Indian-American Loneliness', item: 'https://www.leanon.app/indian-american-loneliness' },
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

export default function IndianAmericanLonelinessPage() {
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
          <a href="/">Home</a><span>›</span>Indian-American Loneliness
        </div>

        <h1>Too Indian for America.<br />Too American for India.<br />Belonging Nowhere.</h1>
        <p className="lead">
          The in-between is a real place, and it can be incredibly lonely. You grew up navigating two
          cultures simultaneously — Indian at home, American everywhere else — and somehow never feeling
          fully at home in either. That specific kind of displacement rarely gets talked about honestly.
          LeanOn is a space where it can be.
        </p>

        <a href="/browse" className="cta-hero">Talk to someone now — first 5 min free →</a>

        <div className="card">
          <h2>What the Indian-American in-between feels like</h2>
          <ul className="checklist">
            <li>Your American friends think your family is strict or dramatic. Your Indian relatives think you have &quot;gone Western.&quot;</li>
            <li>You code-switch constantly — different at home, different at school, different at work.</li>
            <li>The pressure to get top grades, top university, top job was never optional for you.</li>
            <li>Success has always been expected. Struggling was never allowed to show on your face.</li>
            <li>You feel guilty for not being &quot;Indian enough&quot; and guilty for not fitting in &quot;American enough.&quot;</li>
            <li>You love both cultures and sometimes feel like you cannot claim either fully.</li>
          </ul>
        </div>

        <div className="night-box">
          <h2>🌉 The loneliness of being between worlds</h2>
          <p>There is a specific ache that comes from not quite belonging anywhere. You can be surrounded
            by Indian-Americans at a community event and still feel unseen. You can be the most successful
            person in the room and still feel completely hollow inside.</p>
          <p>That feeling is real and it deserves to be heard. Not explained away — heard.</p>
          <a href="/browse" className="cta-night">Find a listener who understands →</a>
        </div>

        <div className="card">
          <h2>Tiger parenting and the pressure to never fail</h2>
          <p>Many Indian-American families carried enormous sacrifice across an ocean. Every grade,
            every career decision, every life choice carries the weight of that sacrifice. You grew up
            knowing that failing was not just personal — it would reflect on the whole family.</p>
          <p>The result is often a person who is outwardly very high-achieving and inwardly completely
            exhausted. A LeanOn listener is the one place where you do not have to perform okayness.
            You can just be honest about how you actually feel.</p>
        </div>

        <div className="card">
          <h2>You are allowed to be struggling</h2>
          <p>The model minority myth says Indians in America are always doing fine — succeeding in tech,
            medicine, engineering, law. It leaves no room for depression, anxiety, loneliness, or identity
            crisis. The reality is far more complicated and far more human.</p>
          <p>You do not need to be in a crisis to deserve support. You just need to be a person going
            through something hard. That is enough.</p>
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
            <h3>Why do Indian-Americans feel lonely even with communities around them?</h3>
            <p>Navigating two cultures means rarely feeling fully at home in either. Your American friends
              do not understand your home life and your Indian relatives do not understand your American
              experience. That in-between creates a very specific, hard-to-name loneliness.</p>
          </div>
          <div className="faq-item">
            <h3>What is ABCD identity and why does it cause emotional pain?</h3>
            <p>ABCD — American Born Confused Desi — captures the cultural in-between: pressure to be Indian
              at home and American everywhere else. The resulting sense of not fully belonging anywhere leads
              to identity confusion, anxiety, and deep loneliness.</p>
          </div>
          <div className="faq-item">
            <h3>Can a LeanOn listener help with identity-related stress?</h3>
            <p>Yes. Many LeanOn listeners have navigated the Indian-American experience themselves. They
              understand the cultural tug-of-war and will not judge you — they will simply listen.</p>
          </div>
          <div className="faq-item">
            <h3>What if my parents do not understand what I am going through?</h3>
            <p>A LeanOn listener is a neutral space where you can say things you cannot say at home —
              without worrying about disappointing anyone or explaining the cultural context first.</p>
          </div>
          <div className="faq-item">
            <h3>How much does LeanOn cost from the USA?</h3>
            <p>Sessions are $10 for 15 minutes, $15 for 30 minutes, and $20 for 45 minutes. First 5
              minutes are always free. No referral needed, no waitlist.</p>
          </div>
        </div>

        <div className="related">
          <a href="/usa-loneliness">Feeling lonely in the USA →</a>
          <a href="/desi-usa-support">Desi community support →</a>
          <a href="/usa-empathy-listener">Empathy listener →</a>
          <a href="/usa-nri-support">NRI emotional support →</a>
          <a href="/usa-talk-to-someone">Someone to talk to →</a>
          <a href="/usa-therapy-alternative">Therapy alternative →</a>
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
