import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Need to Rant? Someone to Listen in Singapore | LeanOn',
  description: 'Work stress, toxic boss, impossible deadlines, no one to vent to in Singapore — LeanOn gives you a real Indian listener who will hear you out completely, without judgment or unsolicited advice.',
  keywords: [
    'need to rant singapore', 'someone to vent to singapore', 'vent frustration singapore',
    'talk about work stress singapore', 'no one to talk to singapore', 'need to vent indian singapore',
    'rant about work singapore expat', 'frustrated in singapore', 'someone to listen singapore',
    'emotional release singapore', 'venting support singapore indian',
  ],
  alternates: {
    canonical: 'https://www.leanon.app/singapore-rant',
    languages: { 'en-SG': 'https://www.leanon.app/singapore-rant' },
  },
  openGraph: {
    title: 'Need to Rant? Someone to Listen in Singapore — LeanOn',
    description: 'Work stress and frustration build up fast in Singapore. LeanOn gives you a real Indian listener who will hear you out fully — no advice, no judgment, just a proper listening ear.',
    url: 'https://www.leanon.app/singapore-rant',
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
      name: 'Is it okay to just rant to a LeanOn listener?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. You do not need a mental health crisis to talk to a listener. Sometimes you just need to get it out — the frustrating meeting, the boss who never gives credit, the day that would not end. LeanOn listeners are trained to hold space while you vent, without interrupting or redirecting.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why do I need to rant to a stranger instead of a friend?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Friends are great, but they have limits — they get tired of hearing the same story, they offer advice when you just want to be heard, or they are connected to the people you are ranting about. A LeanOn listener is a complete outsider with no stake in your life — just undivided attention.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if I just want to talk about work stress without being told to quit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'That is exactly what LeanOn is for. Our listeners are trained to NOT give unsolicited advice. They will ask what you need at the start — just to vent, or also to think through options — and then follow your lead.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I rant in Hindi or another Indian language from Singapore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. LeanOn listeners speak Hindi, Tamil, Telugu, Malayalam, Kannada, Bengali, and English. Sometimes venting feels more natural in your first language — choose a listener who speaks yours.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a session cost from Singapore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'S$14 for 15 minutes, S$20 for 30 minutes, or S$27 for 45 minutes. The first 5 minutes of your first session are free — just to try it out and see if you feel comfortable.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Someone to Listen Singapore', item: 'https://www.leanon.app/singapore-rant' },
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

export default function SingaporeRantPage() {
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
          <a href="/">Home</a><span>›</span>Someone to Listen Singapore
        </div>

        <h1>Singapore Work Life Is Stressful.<br />You Need Someone to Just Listen.</h1>
        <p className="lead">
          High expectations, long hours, a boss who does not understand the pressure, colleagues who do not
          get it — the frustration piles up and you have nowhere to put it. LeanOn gives you a real Indian
          listener who will hear you out completely, without interrupting, without advising, without judging.
        </p>

        <a href="/browse" className="cta-hero">Rant to a listener now — first 5 min free →</a>

        <div className="card">
          <h2>What you probably want to say right now</h2>
          <ul className="checklist">
            <li>&ldquo;My manager took credit for everything I did again.&rdquo;</li>
            <li>&ldquo;I have been working non-stop and nobody notices.&rdquo;</li>
            <li>&ldquo;I can&apos;t complain to my family — they think Singapore means everything is perfect.&rdquo;</li>
            <li>&ldquo;My friends here are fine but I can&apos;t be fully honest with them.&rdquo;</li>
            <li>&ldquo;I just need to say all of this out loud to someone who isn&apos;t going to panic.&rdquo;</li>
            <li>&ldquo;I don&apos;t want advice. I just want to be heard.&rdquo;</li>
          </ul>
          <p style={{ marginTop: '12px' }}>A LeanOn listener will let you say all of it.</p>
        </div>

        <div className="night-box">
          <h2>🔥 The frustration that builds all day</h2>
          <p>By the time you leave the office, you are carrying the weight of a hundred small irritations —
            the dismissive comment, the unrealistic deadline, the meeting that should have been an email.
            You go home and there is no one to just dump it all on.</p>
          <p>LeanOn listeners are available right now. Start talking, get it out, feel lighter.</p>
          <a href="/browse" className="cta-night">Talk to a listener now →</a>
        </div>

        <div className="card">
          <h2>Why a stranger is sometimes the best listener</h2>
          <p>Your friends and family back home worry about you. Your friends in Singapore are connected to
            your work world. Every rant has a cost when the person you are talking to knows the players.</p>
          <p>A LeanOn listener knows nobody in your life. They have no stake in your situation. They are
            there only to listen — and that freedom changes how honestly you can speak.</p>
        </div>

        <div className="card">
          <h2>Session pricing for Singapore</h2>
          <p>Pay in Singapore dollars. First 5 minutes are always free.</p>
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
          <p>No subscription. No commitment. Talk when you need to, stop when you feel better.</p>
        </div>

        <div className="cta">
          <h2>Get it all out — right now</h2>
          <p>Real Indian listeners. No judgment. 24/7 availability.</p>
          <a href="/browse" className="btn-white">Browse listeners →</a><br />
          <a href="/auth" className="btn-orange">Join free</a>
        </div>

        <div className="card">
          <h2>Frequently asked questions</h2>
          <div className="faq-item">
            <h3>Is it okay to just rant to a LeanOn listener?</h3>
            <p>Absolutely. You do not need a crisis to talk. Sometimes you just need to get it all out.
              LeanOn listeners are trained to hold space while you vent, without interrupting or redirecting.</p>
          </div>
          <div className="faq-item">
            <h3>Why talk to a stranger instead of a friend?</h3>
            <p>Friends get tired of hearing the same story, offer advice when you just want to be heard, or
              are connected to the people you are ranting about. A LeanOn listener is a complete outsider
              with no stake in your life — just undivided attention.</p>
          </div>
          <div className="faq-item">
            <h3>What if I just want to vent without being told to quit?</h3>
            <p>That is exactly what LeanOn is for. Listeners are trained to not give unsolicited advice.
              They will ask what you need at the start and then follow your lead.</p>
          </div>
          <div className="faq-item">
            <h3>Can I rant in Hindi or another Indian language from Singapore?</h3>
            <p>Yes. LeanOn listeners speak Hindi, Tamil, Telugu, Malayalam, Kannada, Bengali, and English.
              Venting often feels more natural in your first language.</p>
          </div>
          <div className="faq-item">
            <h3>How much does a session cost from Singapore?</h3>
            <p>S$14 for 15 minutes, S$20 for 30 minutes, or S$27 for 45 minutes. The first 5 minutes of
              your first session are free to try.</p>
          </div>
        </div>

        <div className="related">
          <a href="/singapore-loneliness">Loneliness support Singapore →</a>
          <a href="/singapore-empathy-listener">Empathy listener Singapore →</a>
          <a href="/singapore-talk-to-someone">Talk to someone Singapore →</a>
          <a href="/malaysia-rant">Need to rant in Malaysia →</a>
          <a href="/singapore-relationship-advice">Relationship support Singapore →</a>
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
