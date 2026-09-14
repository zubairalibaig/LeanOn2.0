import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Mental Health Support for South Asians in the UK | LeanOn',
  description: 'Talking about mental health is still taboo in many South Asian families. LeanOn makes it safe — peer listeners who understand your culture, your language, and the pressure to stay strong.',
  keywords: [
    'south asian mental health uk', 'indian mental health uk', 'desi mental health support uk',
    'mental health stigma south asian uk', 'british indian mental health', 'uk nri therapy alternative',
    'cultural mental health support uk', 'south asian therapy uk', 'breaking mental health stigma uk',
  ],
  alternates: {
    canonical: 'https://www.leanon.app/uk-mental-health-south-asian',
    languages: { 'en-GB': 'https://www.leanon.app/uk-mental-health-south-asian' },
  },
  openGraph: {
    title: 'Mental Health Support for South Asians in the UK',
    description: 'Breaking the taboo around mental health in South Asian communities in the UK. Peer listeners who understand your culture, available 24/7.',
    url: 'https://www.leanon.app/uk-mental-health-south-asian',
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
      name: 'Why is mental health so stigmatised in South Asian communities?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In many South Asian families, emotional struggles are seen as weakness — something to push through, not talk about. There is often a strong cultural narrative around resilience and self-sufficiency, and seeking help can be seen as bringing shame on the family. This stigma is slowly changing, but for many it is still a real barrier to getting support.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is LeanOn a substitute for therapy or professional mental health care?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. LeanOn is peer support — real humans who listen without judgment. It is not therapy and listeners are not mental health professionals. Think of it as the kind of support you might get from a wise, caring friend who has time for you. If you need professional help, your GP can refer you to NHS mental health services.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if I am not ready for therapy but I know I need to talk to someone?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LeanOn is often exactly the right first step. It is lower-stakes than therapy — no diagnosis, no clinical framework, no waiting lists. Just a real conversation with a real person who will not judge you. Many people find that talking to a peer listener helps them get clear on what they are actually feeling, and sometimes that is all they needed.',
      },
    },
    {
      '@type': 'Question',
      name: 'My family would be upset if they knew I was seeking mental health support. Will this be private?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. LeanOn sessions are completely private. No one in your family or community will know you used the app. You can also use a nickname if that helps you feel safer.',
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
    { '@type': 'ListItem', position: 2, name: 'South Asian Mental Health UK', item: 'https://www.leanon.app/uk-mental-health-south-asian' },
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

export default function UkMentalHealthSouthAsianPage() {
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
          <a href="/">Home</a><span>›</span>South Asian Mental Health UK
        </div>

        <h1>You Were Taught to Be Strong.<br />But You Are Tired of Carrying This Alone.</h1>
        <p className="lead">
          In many South Asian families, talking about how you really feel is not an option. You push through.
          You do not burden others. You are fine. But being fine all the time takes a toll — and somewhere
          between the British weather, the distance from home, and the pressure to succeed, that toll adds up.
        </p>

        <a href="/browse" className="cta-hero">Talk to someone — first 5 min free →</a>

        <div className="card">
          <h2>The specific weight South Asians carry in the UK</h2>
          <p>This is not about weakness. It is about the accumulated pressure of living in two worlds:</p>
          <ul className="checklist">
            <li>Being the one who moved abroad — the sacrifice that must be worth it</li>
            <li>NHS or finance work stress with no one to talk to about it without seeming ungrateful</li>
            <li>Family expectations that follow you across timezones</li>
            <li>The mental health stigma that makes asking for help feel like failure</li>
            <li>Grey skies and long winters making everything heavier</li>
            <li>Being expected to be fine, always, by everyone</li>
          </ul>
        </div>

        <div className="night-box">
          <h2>🤫 You do not have to pretend here</h2>
          <p>LeanOn gives you a space where you do not need to manage anyone&apos;s reaction to how you feel.
            No parents to worry. No community to judge. No reputation to maintain.</p>
          <p>Just a real conversation with someone who understands where you are coming from — and will not
            tell you to just stay strong.</p>
          <a href="/browse" className="cta-night">Find a listener now →</a>
        </div>

        <div className="card">
          <h2>Peer support — a softer first step than therapy</h2>
          <p>Therapy is valuable — but for many South Asians, it still feels like a big step. The waiting
            lists, the clinical setting, the fear of a diagnosis. LeanOn peer support is different: it is
            just a conversation. Real, warm, and private. No clinical framework, no labels.</p>
          <p>For a lot of people, it is exactly the right first step — and sometimes it is all they needed.</p>
        </div>

        <div className="card">
          <h2>Session pricing in GBP</h2>
          <ul className="checklist">
            <li>First 5 minutes — completely free</li>
            <li>15 minutes — £8</li>
            <li>30 minutes — £12</li>
            <li>45 minutes — £16</li>
          </ul>
          <p style={{ marginTop: '12px' }}>Completely private. No one in your family or community will know.</p>
        </div>

        <div className="cta">
          <h2>You are allowed to ask for support</h2>
          <p>South Asian peer listeners in the UK — available 24/7, completely confidential.</p>
          <a href="/browse" className="btn-white">Browse listeners →</a><br />
          <a href="/auth" className="btn-orange">Join free</a>
        </div>

        <div className="card">
          <h2>Frequently asked questions</h2>
          <div className="faq-item">
            <h3>Why is mental health so stigmatised in South Asian communities?</h3>
            <p>In many South Asian families, emotional struggles are seen as weakness — something to push
              through. Seeking help can feel like bringing shame on the family. This stigma is slowly
              changing, but it is still a real barrier for many people.</p>
          </div>
          <div className="faq-item">
            <h3>Is LeanOn a substitute for therapy?</h3>
            <p>No. LeanOn is peer support — not therapy. Think of it as support from a wise, caring person
              who has time for you. If you need professional help, your GP can refer you to NHS mental health
              services.</p>
          </div>
          <div className="faq-item">
            <h3>I am not ready for therapy but I need to talk to someone. Is LeanOn right for me?</h3>
            <p>Often yes. It is lower-stakes — no diagnosis, no waiting lists, no clinical framework. Many
              people find that a peer conversation helps them get clarity on what they are actually feeling.</p>
          </div>
          <div className="faq-item">
            <h3>Will this be private from my family?</h3>
            <p>Yes. Sessions are completely private. No one in your family or community will know you used
              the app. You can also use a nickname.</p>
          </div>
          <div className="faq-item">
            <h3>How much does a session cost?</h3>
            <p>First 5 minutes are free. Then £8 for 15 min, £12 for 30 min, £16 for 45 min.</p>
          </div>
        </div>

        <div className="related">
          <a href="/uk-loneliness">Loneliness support UK →</a>
          <a href="/uk-empathy-listener">Empathy listener UK →</a>
          <a href="/british-indian-support">British Indian identity →</a>
          <a href="/uk-nri-support">NRI support UK →</a>
          <a href="/uk-talk-to-someone">Talk to someone UK →</a>
          <a href="/uk-rant-to-someone">Need to rant? →</a>
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
