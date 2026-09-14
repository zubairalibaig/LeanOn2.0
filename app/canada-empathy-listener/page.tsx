import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Empathy Listener for Indians in Canada | LeanOn',
  description: 'Sometimes you need someone who truly gets the Indian experience — the guilt, the pressure, the homesickness. LeanOn empathy listeners understand your world without explanation.',
  keywords: [
    'empathy listener canada indian', 'someone who understands indians canada', 'cultural empathy support canada',
    'indian emotional support canada', 'south asian listener canada', 'understood in canada indian',
    'desi empathy canada', 'peer listener india canada', 'emotional validation canada nri',
  ],
  alternates: {
    canonical: 'https://www.leanon.app/canada-empathy-listener',
    languages: { 'en-CA': 'https://www.leanon.app/canada-empathy-listener' },
  },
  openGraph: {
    title: 'Empathy Listener for Indians in Canada | LeanOn',
    description: 'You should not have to translate your culture before someone can understand your pain. LeanOn listeners get it — the pressure, the guilt, the longing.',
    url: 'https://www.leanon.app/canada-empathy-listener',
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
      name: 'What is an empathy listener?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An empathy listener is a trained peer who gives you their full, undivided attention — not to fix your problem, but to truly hear you. They reflect back what they understand, ask thoughtful questions, and make you feel genuinely seen. The goal is connection, not advice.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is a LeanOn listener different from talking to a friend?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Friends are wonderful, but they have their own worries and their own stake in your story. A LeanOn listener has no agenda, no shared history to protect, and no community to repeat things to. Their only job in that moment is to hear you fully.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will the listener understand Indian culture without me having to explain everything?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Many LeanOn listeners are themselves Indian or South Asian and deeply familiar with the cultural context — the family pressure, the guilt of being far from parents, the concept of putting family before self. You should not have to translate your world before being understood.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a session cost in Canada?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Your first 5 minutes are free. After that: CA$14 for 15 minutes, CA$21 for 30 minutes, CA$28 for 45 minutes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I choose a listener based on their background?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. You can browse listener profiles and choose someone whose background, languages, and experience feels right for you. There is no pressure to pick the first available listener.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Empathy Listener Canada', item: 'https://www.leanon.app/canada-empathy-listener' },
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

export default function CanadaEmpathyListenerPage() {
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
          <a href="/">Home</a><span>›</span>Empathy Listener Canada
        </div>

        <h1>You Deserve to Be Understood<br />Without Having to Explain Your Culture First.</h1>
        <p className="lead">
          Talking to someone who does not share your background means constantly translating yourself —
          your family dynamics, your guilt, your homesickness — before you can even get to the actual thing
          you wanted to talk about. LeanOn listeners get the Indian experience. You can just talk.
        </p>

        <a href="/browse" className="cta-hero">Talk to someone now — first 5 min free →</a>

        <div className="card">
          <h2>Things you should not have to explain</h2>
          <ul className="checklist">
            <li>Why you feel guilty for leaving your parents behind in India</li>
            <li>Why &quot;just make new friends&quot; is not as simple as it sounds at 30</li>
            <li>Why family pressure about marriage or career genuinely weighs on you</li>
            <li>Why you miss India in a way that goes far deeper than food and festivals</li>
            <li>Why you feel caught between two versions of yourself — who you were and who Canada needs you to be</li>
            <li>Why success on paper can still feel hollow when you are this far from home</li>
          </ul>
        </div>

        <div className="night-box">
          <h2>🤝 Being truly heard is rarer than it sounds</h2>
          <p>Most people listen to respond. A LeanOn empathy listener listens to understand. There is a
            real difference — you can feel it within the first minute of a session.</p>
          <p>No advice unless you ask. No rush toward solutions. Just presence, attention, and the
            feeling that someone is actually with you in this moment.</p>
          <a href="/browse" className="cta-night">Find a listener online now →</a>
        </div>

        <div className="card">
          <h2>Why cultural understanding matters in emotional support</h2>
          <p>Emotional pain does not exist in a vacuum — it lives inside a context. The guilt of the
            Indian child who moved abroad. The weight of being the family&apos;s hope. The isolation of
            living in a culture that values independence above all else, when your whole upbringing
            was built around togetherness.</p>
          <p>When your listener already understands this context, you do not have to spend your session
            building up to the real thing. You can just say it.</p>
        </div>

        <div className="card">
          <h2>Session details</h2>
          <ul className="checklist">
            <li>First 5 minutes completely free — no credit card</li>
            <li>CA$14 for 15 min &nbsp;·&nbsp; CA$21 for 30 min &nbsp;·&nbsp; CA$28 for 45 min</li>
            <li>Browse listener profiles and pick someone who feels right</li>
            <li>Anonymous — your conversations stay private</li>
            <li>Available day and night, any day of the week</li>
          </ul>
        </div>

        <div className="cta">
          <h2>Someone who gets it is ready to listen</h2>
          <p>No translation required. Just a real conversation.</p>
          <a href="/browse" className="btn-white">Browse listeners →</a><br />
          <a href="/auth" className="btn-orange">Join free</a>
        </div>

        <div className="card">
          <h2>Frequently asked questions</h2>
          <div className="faq-item">
            <h3>What is an empathy listener?</h3>
            <p>A trained peer who gives you their full attention — not to fix your problem, but to truly hear
              you. They reflect back what they understand, ask thoughtful questions, and make you feel genuinely seen.</p>
          </div>
          <div className="faq-item">
            <h3>How is a LeanOn listener different from talking to a friend?</h3>
            <p>Friends have their own stake in your story. A LeanOn listener has no agenda, no shared history,
              and no community to repeat things to. Their only job is to hear you fully.</p>
          </div>
          <div className="faq-item">
            <h3>Will the listener understand Indian culture?</h3>
            <p>Many LeanOn listeners are themselves Indian or South Asian — familiar with family pressure, guilt
              about being far from parents, and the cultural tightrope of life abroad. No translation needed.</p>
          </div>
          <div className="faq-item">
            <h3>How much does a session cost in Canada?</h3>
            <p>First 5 minutes free. Then CA$14 for 15 min, CA$21 for 30 min, CA$28 for 45 min.</p>
          </div>
          <div className="faq-item">
            <h3>Can I choose a listener based on their background?</h3>
            <p>Yes. Browse listener profiles and choose someone whose background, languages, and experience
              feels right for you. No pressure to pick the first available person.</p>
          </div>
        </div>

        <div className="related">
          <a href="/canada-talk-to-someone">Someone to talk to →</a>
          <a href="/desi-canada-support">Desi community support →</a>
          <a href="/canada-nri-support">NRI emotional support →</a>
          <a href="/canada-loneliness">Loneliness in Canada →</a>
          <a href="/canada-rant-to-someone">Need to rant? →</a>
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
