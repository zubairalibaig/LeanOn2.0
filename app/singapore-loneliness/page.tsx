import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Feeling Lonely in Singapore? Talk to an Indian Listener | LeanOn',
  description: 'Loneliness as an Indian expat in Singapore is real — missing home, struggling with cultural distance, working hard but feeling unseen. LeanOn connects you with a real Indian listener who gets it, anytime.',
  keywords: [
    'feeling lonely in singapore', 'loneliness support singapore', 'indian expat lonely singapore',
    'missing home singapore', 'nri lonely singapore', 'isolation singapore expat',
    'no friends in singapore', 'homesick singapore indian', 'talk to someone singapore',
    'emotional support singapore indian', 'south asian loneliness singapore',
  ],
  alternates: {
    canonical: 'https://www.leanon.app/singapore-loneliness',
    languages: { 'en-SG': 'https://www.leanon.app/singapore-loneliness' },
  },
  openGraph: {
    title: 'Feeling Lonely in Singapore? Talk to an Indian Listener — LeanOn',
    description: 'Missing home. Working hard. Feeling unseen. LeanOn connects Indian expats in Singapore with real peer listeners who understand your world — 24/7, in your language.',
    url: 'https://www.leanon.app/singapore-loneliness',
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
      name: 'Is it normal to feel lonely as an Indian expat in Singapore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Very normal. Singapore is efficient, fast-paced, and professional — but its culture can feel emotionally distant if you grew up in India. Most Indians in Singapore work long hours and find it hard to build the kind of warm, casual friendships they had back home. The loneliness is real, and it does not mean something is wrong with you.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I deal with missing home while living in Singapore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Talking about it helps more than suppressing it. LeanOn connects you with Indian peer listeners who have often lived through similar transitions. A 15 or 30 minute conversation — in Hindi, Tamil, Telugu, or English — can ease the ache of missing home significantly.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I talk to an Indian listener from Singapore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. LeanOn listeners are based in India and available 24/7. You can talk in Hindi, Tamil, Telugu, Malayalam, Kannada, Bengali, or English. Sessions start from S$14 for 15 minutes, with the first 5 minutes free to try.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if I feel lonely even though I have colleagues and acquaintances in Singapore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'That is one of the most common forms of expat loneliness — surrounded by people but still feeling deeply alone. Professional relationships rarely go deep. LeanOn gives you a space for real, unfiltered conversation where you do not have to perform or pretend.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is LeanOn safe and confidential?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. LeanOn sessions are anonymous by default. Your listener does not know your real name, employer, or location unless you choose to share. Everything stays between you and your listener.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Loneliness Support Singapore', item: 'https://www.leanon.app/singapore-loneliness' },
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

export default function SingaporeLonelinessPage() {
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
          <a href="/">Home</a><span>›</span>Loneliness Support Singapore
        </div>

        <h1>Singapore is Full of People.<br />But Who Really Gets You?</h1>
        <p className="lead">
          You moved to Singapore for opportunity. You found the MRT, the hawker centres, the work visa —
          but the warmth you left behind in India? That is harder to replace. LeanOn connects you with
          real Indian listeners who understand exactly what this distance feels like.
        </p>

        <a href="/browse" className="cta-hero">Talk to an Indian listener — first 5 min free →</a>

        <div className="card">
          <h2>The loneliness no one talks about in Singapore</h2>
          <p>Indian expat loneliness in Singapore has a particular shape. It is not dramatic — it is quiet.
            It sneaks up on you:</p>
          <ul className="checklist">
            <li>Colleagues are polite but friendships never go deeper than lunch.</li>
            <li>WhatsApp groups back home are buzzing, but you are always the absent one.</li>
            <li>Amma calls and you say &ldquo;everything is fine&rdquo; because explaining feels too hard.</li>
            <li>Weekends feel strangely long when there is no one to just sit and talk with.</li>
            <li>You are doing well — great job, decent pay — but something feels hollow.</li>
            <li>Cultural jokes, festivals, the comfort of your mother tongue — all of it feels out of reach.</li>
          </ul>
          <p style={{ marginTop: '12px' }}>None of this makes you weak. It makes you human.</p>
        </div>

        <div className="night-box">
          <h2>🌙 9 PM in Singapore — 6:30 PM back home</h2>
          <p>Everyone at home is busy with dinner. You are alone in your flat, phone in hand, not quite sure
            who to call. LeanOn listeners are online right now — Indian, warm, non-judgmental — ready to
            give you their full attention.</p>
          <p>You do not need a reason. Feeling disconnected IS the reason.</p>
          <a href="/browse" className="cta-night">Find a listener online now →</a>
        </div>

        <div className="card">
          <h2>Talk to an Indian listener in your language</h2>
          <p>Sometimes the loneliness is not just about missing people — it is missing your language.
            The ease of switching between Hindi and English mid-sentence. The warmth of someone who
            understands &ldquo;ghar ki yaad&rdquo; without you having to translate it.</p>
          <p>LeanOn listeners speak Hindi, Tamil, Telugu, Malayalam, Kannada, Bengali, and more.
            Choose a listener whose language and background matches yours.</p>
        </div>

        <div className="card">
          <h2>Session pricing for Singapore</h2>
          <p>Pay in Singapore dollars. The first 5 minutes of your first session are always free.</p>
          <div className="pricing-grid">
            <div className="price-card">
              <div className="dur">15 min</div>
              <div className="amt">S$14</div>
            </div>
            <div className="price-card">
              <div className="dur">30 min</div>
              <div className="amt">S$20</div>
            </div>
            <div className="price-card">
              <div className="dur">45 min</div>
              <div className="amt">S$27</div>
            </div>
          </div>
          <p>No subscription. No commitment. Talk when you need to.</p>
        </div>

        <div className="cta">
          <h2>Someone who gets it is online right now</h2>
          <p>Real Indian listeners. Your language. Available 24/7.</p>
          <a href="/browse" className="btn-white">Browse listeners →</a><br />
          <a href="/auth" className="btn-orange">Join free</a>
        </div>

        <div className="card">
          <h2>Frequently asked questions</h2>
          <div className="faq-item">
            <h3>Is it normal to feel lonely as an Indian expat in Singapore?</h3>
            <p>Very normal. Singapore is efficient and professional, but its culture can feel emotionally distant
              if you grew up in India. Most Indians in Singapore work long hours and find it hard to build the
              warm, casual friendships they had back home.</p>
          </div>
          <div className="faq-item">
            <h3>How do I deal with missing home while living in Singapore?</h3>
            <p>Talking about it helps more than suppressing it. LeanOn connects you with Indian peer listeners
              who have lived through similar transitions. A 15 or 30-minute conversation in your language can
              ease the ache significantly.</p>
          </div>
          <div className="faq-item">
            <h3>Can I talk to an Indian listener from Singapore?</h3>
            <p>Yes. LeanOn listeners are available 24/7 and speak Hindi, Tamil, Telugu, Malayalam, Kannada,
              Bengali, and English. Sessions start from S$14 for 15 minutes, with the first 5 minutes free.</p>
          </div>
          <div className="faq-item">
            <h3>What if I feel lonely even though I have colleagues in Singapore?</h3>
            <p>That is one of the most common forms of expat loneliness — surrounded by people but still feeling
              deeply alone. Professional relationships rarely go deep. LeanOn gives you space for real,
              unfiltered conversation.</p>
          </div>
          <div className="faq-item">
            <h3>Is LeanOn safe and confidential?</h3>
            <p>Yes. LeanOn sessions are anonymous by default. Your listener does not know your real name,
              employer, or location unless you choose to share. Everything stays between you and your listener.</p>
          </div>
        </div>

        <div className="related">
          <a href="/singapore-talk-to-someone">Talk to someone in Singapore →</a>
          <a href="/singapore-empathy-listener">Empathy listener Singapore →</a>
          <a href="/singapore-rant">Need to rant in Singapore →</a>
          <a href="/singapore-relationship-advice">Relationship support Singapore →</a>
          <a href="/malaysia-loneliness">Loneliness support Malaysia →</a>
          <a href="/support/loneliness">Loneliness support India →</a>
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
