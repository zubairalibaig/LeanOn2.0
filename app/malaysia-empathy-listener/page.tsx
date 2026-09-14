import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Empathy Listener for Indians in Malaysia | LeanOn',
  description: 'Feeling unheard in Malaysia? LeanOn connects Indian expats with trained empathy listeners who speak Tamil, Hindi, and more — and understand your cultural world from the inside.',
  keywords: [
    'empathy listener malaysia', 'feel heard malaysia', 'someone who understands malaysia indian',
    'active listener malaysia', 'emotional support malaysia expat', 'feeling unheard malaysia',
    'indian listener malaysia', 'non-judgmental listener malaysia', 'empathetic support malaysia',
    'tamil empathy listener malaysia', 'south asian empathy listener malaysia',
    'talk to someone who understands malaysia',
  ],
  alternates: {
    canonical: 'https://www.leanon.app/malaysia-empathy-listener',
    languages: { 'en-MY': 'https://www.leanon.app/malaysia-empathy-listener' },
  },
  openGraph: {
    title: 'Empathy Listener for Indians in Malaysia — Feel Truly Heard | LeanOn',
    description: 'Feeling unheard is exhausting. LeanOn connects Indian expats in Malaysia with trained peer listeners who give you their full, undivided attention — in Tamil, Hindi, or your language.',
    url: 'https://www.leanon.app/malaysia-empathy-listener',
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
      name: 'What makes an empathy listener different from a regular conversation partner?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An empathy listener\'s entire purpose is to understand your experience — not to respond, not to advise, not to share their own perspective. LeanOn listeners are trained in active listening, reflective questioning, and validating your emotions without judgment. You feel heard at a depth that most conversations never reach.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is it hard to feel truly understood in Malaysia as an Indian?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Malaysia has a significant Indian community, but that does not automatically mean deep mutual understanding. The Malaysian Indian experience and the experience of someone who grew up in India are different in important ways. And within the Indian community, social hierarchies and tight networks can make honest vulnerability difficult. LeanOn listeners are outside all of that.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I talk to a Tamil-speaking empathy listener?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. LeanOn has Tamil-speaking empathy listeners available 24/7. You can also find listeners who speak Hindi, Telugu, Malayalam, Kannada, Bengali, and English. Browse listener profiles to find the right match.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if I am not sure what I want to talk about?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'That is perfectly fine. You can start a session with nothing more than "I have been feeling off lately and I need to talk." Your listener will gently help you find what is weighing on you. You do not need to arrive with a clear topic.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a session cost from Malaysia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'RM 45 for 15 minutes, RM 67 for 30 minutes, and RM 89 for 45 minutes. Your first session begins with 5 free minutes. No subscription, no recurring charges.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Empathy Listener Malaysia', item: 'https://www.leanon.app/malaysia-empathy-listener' },
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

export default function MalaysiaEmpathyListenerPage() {
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
          <a href="/">Home</a><span>›</span>Empathy Listener Malaysia
        </div>

        <h1>You Want Someone<br />Who Truly Understands You.</h1>
        <p className="lead">
          Not someone who hears you and immediately pivots to advice. Not someone who relates everything
          back to themselves. Someone who sits with you in your experience and makes you feel that your
          feelings make complete sense. LeanOn empathy listeners are exactly that — trained Indian
          peers who are here only to understand you.
        </p>

        <a href="/browse" className="cta-hero">Find an empathy listener — first 5 min free →</a>

        <div className="card">
          <h2>What empathy listening actually means</h2>
          <p>Most conversations are about exchange — you share something, they share something back.
            Empathy listening breaks that pattern entirely:</p>
          <ul className="checklist">
            <li>The listener&apos;s full attention is on understanding your experience, not their response.</li>
            <li>They reflect back what they hear so you feel understood, not just acknowledged.</li>
            <li>They ask questions to go deeper into your experience, not to redirect it.</li>
            <li>They validate your feelings without immediately trying to fix them.</li>
            <li>They hold space for the hard things you have been afraid to say out loud.</li>
            <li>They stay with you in the discomfort instead of rushing past it.</li>
          </ul>
        </div>

        <div className="night-box">
          <h2>🫂 When being understood changes everything</h2>
          <p>There is a particular relief that comes from feeling truly understood. Not just heard.
            Understood. Your listener reflects back what you said and something in you relaxes —
            because finally, someone gets it.</p>
          <p>LeanOn empathy listeners are trained to create exactly this experience. One conversation
            can shift how you carry something that has felt heavy for a long time.</p>
          <a href="/browse" className="cta-night">Find a listener now →</a>
        </div>

        <div className="card">
          <h2>An Indian listener who already gets your context</h2>
          <p>As an Indian in Malaysia, part of feeling unheard is the constant need to explain your
            context — the family dynamics, the cultural expectations, the particular weight of being
            the one who left India.</p>
          <p>LeanOn listeners are from India. They grew up with the same context. You will not need
            to explain why something is hard — they will already know.</p>
        </div>

        <div className="card">
          <h2>Session pricing for Malaysia</h2>
          <p>Pay in Malaysian ringgit. The first 5 minutes are always free.</p>
          <div className="pricing-grid">
            <div className="price-card">
              <div className="dur">15 min</div>
              <div className="amt">RM 45</div>
            </div>
            <div className="price-card">
              <div className="dur">30 min</div>
              <div className="amt">RM 67</div>
            </div>
            <div className="price-card">
              <div className="dur">45 min</div>
              <div className="amt">RM 89</div>
            </div>
          </div>
          <p>No subscription. No long-term commitment. Talk when you need to feel understood.</p>
        </div>

        <div className="cta">
          <h2>Feel truly heard — maybe for the first time in a while</h2>
          <p>Real Indian listeners. Tamil, Hindi, and more. Full attention. 24/7.</p>
          <a href="/browse" className="btn-white">Browse listeners →</a><br />
          <a href="/auth" className="btn-orange">Join free</a>
        </div>

        <div className="card">
          <h2>Frequently asked questions</h2>
          <div className="faq-item">
            <h3>What makes an empathy listener different from a regular conversation partner?</h3>
            <p>An empathy listener&apos;s entire purpose is to understand your experience — not to respond
              or advise. LeanOn listeners are trained in active listening and reflective questioning.
              You feel heard at a depth that most conversations never reach.</p>
          </div>
          <div className="faq-item">
            <h3>Why is it hard to feel truly understood in Malaysia as an Indian?</h3>
            <p>Malaysia has a significant Indian community, but that does not automatically mean deep
              mutual understanding. Within tight networks, honest vulnerability can be difficult.
              LeanOn listeners are outside all of that — completely safe.</p>
          </div>
          <div className="faq-item">
            <h3>Can I talk to a Tamil-speaking empathy listener?</h3>
            <p>Yes. LeanOn has Tamil-speaking empathy listeners available 24/7. You can also find
              listeners who speak Hindi, Telugu, Malayalam, Kannada, Bengali, and English.</p>
          </div>
          <div className="faq-item">
            <h3>What if I am not sure what I want to talk about?</h3>
            <p>That is perfectly fine. You can start with &ldquo;I have been feeling off and I need to
              talk.&rdquo; Your listener will gently help you find what is weighing on you. No clear
              topic needed.</p>
          </div>
          <div className="faq-item">
            <h3>How much does a session cost from Malaysia?</h3>
            <p>RM 45 for 15 minutes, RM 67 for 30 minutes, and RM 89 for 45 minutes. Your first session
              begins with 5 free minutes. No subscription required.</p>
          </div>
        </div>

        <div className="related">
          <a href="/malaysia-loneliness">Loneliness support Malaysia →</a>
          <a href="/malaysia-talk-to-someone">Talk to someone Malaysia →</a>
          <a href="/malaysia-rant">Need to rant Malaysia →</a>
          <a href="/singapore-empathy-listener">Empathy listener Singapore →</a>
          <a href="/malaysia-relationship-advice">Relationship support Malaysia →</a>
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
