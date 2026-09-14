import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Relationship Support for Indians in Canada | LeanOn',
  description: 'Long-distance relationships, cultural clashes, new vs old values — Indian relationships in Canada carry unique pressures. Talk to someone who understands.',
  keywords: [
    'relationship advice indians canada', 'indian relationship support canada', 'long distance relationship india canada',
    'cultural conflict relationship canada', 'south asian relationship advice canada', 'desi relationship problems canada',
    'indian couple problems canada', 'relationship stress nri canada',
  ],
  alternates: {
    canonical: 'https://www.leanon.app/canada-relationship-advice',
    languages: { 'en-CA': 'https://www.leanon.app/canada-relationship-advice' },
  },
  openGraph: {
    title: 'Relationship Support for Indians in Canada | LeanOn',
    description: 'Indian relationships in Canada are complicated by distance, cultural friction, and the pressure of building a new life. LeanOn listeners understand the full picture.',
    url: 'https://www.leanon.app/canada-relationship-advice',
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
      name: 'Why are relationships harder for Indians living in Canada?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Living far from your home country adds unique stresses to relationships: long-distance separations, different cultural adaptation speeds between partners, family pressure from India, financial strain, and the tension between Indian values and the individualistic culture around you. These are real challenges, not personal failures.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can a peer listener help with relationship issues?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A listener will not tell you what to do — but having someone hear you out fully, without judgment, helps you think more clearly. Sometimes you just need to say things out loud to someone who is not in the middle of the situation with you.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if I am in a long-distance relationship between India and Canada?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Long-distance between India and Canada is one of the hardest — different time zones, uncertain immigration timelines, the loneliness of being in a new country alone. LeanOn listeners understand this specific situation and can hold space for everything it brings up.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a session cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Your first 5 minutes are free. After that, sessions are CA$14 for 15 minutes, CA$21 for 30 minutes, and CA$28 for 45 minutes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is what I share kept private?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. LeanOn sessions are anonymous and confidential. You can share openly without worrying about your community or family finding out.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Relationship Support Canada', item: 'https://www.leanon.app/canada-relationship-advice' },
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

export default function CanadaRelationshipPage() {
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
          <a href="/">Home</a><span>›</span>Relationship Support Canada
        </div>

        <h1>Indian Relationships in Canada<br />Come with Extra Weight.</h1>
        <p className="lead">
          Long distance. Cultural friction. Family expectations from 12,000 km away. A partner adapting
          differently than you. Relationships are already hard — immigration makes them harder in ways
          nobody quite prepares you for. Talk to someone who gets the full picture.
        </p>

        <a href="/browse" className="cta-hero">Talk to someone now — first 5 min free →</a>

        <div className="card">
          <h2>Relationship challenges unique to Indians in Canada</h2>
          <ul className="checklist">
            <li>Long-distance with a partner still waiting for PR or a visa</li>
            <li>One partner adapting faster to Canadian life, creating a cultural divide at home</li>
            <li>Family pressure from India — marriage timelines, visits, expectations</li>
            <li>Navigating Indian values (family, duty, sacrifice) in a very individualistic culture</li>
            <li>Financial stress straining a partnership that used to feel safe</li>
            <li>Loneliness within a relationship — you are together, but still somehow alone</li>
          </ul>
        </div>

        <div className="night-box">
          <h2>💬 You can&apos;t always talk to your partner about your partner</h2>
          <p>Sometimes the person you most need to process things with is the person you cannot process
            things with right now. That is where a LeanOn listener comes in — someone completely outside
            your situation, with no stakes and no agenda.</p>
          <p>You can say the thing you have been holding back. Out loud. To someone who will just listen.</p>
          <a href="/browse" className="cta-night">Find a listener online now →</a>
        </div>

        <div className="card">
          <h2>What people talk about</h2>
          <p>You do not need a crisis to reach out. People come to LeanOn with things like:</p>
          <ul className="checklist">
            <li>Feeling disconnected from their partner after a hard week</li>
            <li>Uncertainty about a relationship that used to feel certain</li>
            <li>The exhaustion of maintaining a long-distance relationship across time zones</li>
            <li>Cultural clashes about how to handle in-laws or money</li>
            <li>Grief over a relationship that ended — and not knowing how to start over in a new country</li>
          </ul>
        </div>

        <div className="card">
          <h2>Session details</h2>
          <ul className="checklist">
            <li>First 5 minutes completely free — no commitment</li>
            <li>CA$14 for 15 min &nbsp;·&nbsp; CA$21 for 30 min &nbsp;·&nbsp; CA$28 for 45 min</li>
            <li>Real human listeners — not AI, not bots</li>
            <li>Anonymous — your story stays between you and your listener</li>
            <li>Available anytime, including evenings and weekends</li>
          </ul>
        </div>

        <div className="cta">
          <h2>Someone is ready to listen right now</h2>
          <p>No judgment. No advice you did not ask for. Just a real conversation.</p>
          <a href="/browse" className="btn-white">Browse listeners →</a><br />
          <a href="/auth" className="btn-orange">Join free</a>
        </div>

        <div className="card">
          <h2>Frequently asked questions</h2>
          <div className="faq-item">
            <h3>Why are relationships harder for Indians living in Canada?</h3>
            <p>Distance, cultural friction, different adaptation speeds between partners, and family pressure
              from India all add layers of complexity. These are real challenges, not personal failures.</p>
          </div>
          <div className="faq-item">
            <h3>Can a peer listener help with relationship issues?</h3>
            <p>A listener will not tell you what to do — but being heard fully, without judgment, helps you
              think more clearly. Sometimes saying things out loud to someone neutral is exactly what you need.</p>
          </div>
          <div className="faq-item">
            <h3>What if I am in a long-distance relationship between India and Canada?</h3>
            <p>Long-distance between India and Canada is one of the hardest — different time zones, uncertain
              immigration timelines, loneliness. LeanOn listeners understand this specific situation.</p>
          </div>
          <div className="faq-item">
            <h3>How much does a session cost?</h3>
            <p>Your first 5 minutes are free. After that: CA$14 for 15 min, CA$21 for 30 min, CA$28 for 45 min.</p>
          </div>
          <div className="faq-item">
            <h3>Is what I share kept private?</h3>
            <p>Yes. LeanOn sessions are anonymous and confidential. You can share openly without worrying about
              your community or family finding out.</p>
          </div>
        </div>

        <div className="related">
          <a href="/canada-loneliness">Loneliness in Canada →</a>
          <a href="/canada-nri-support">NRI emotional support →</a>
          <a href="/desi-canada-support">Desi community support →</a>
          <a href="/canada-talk-to-someone">Someone to talk to →</a>
          <a href="/canada-rant-to-someone">Need to rant? →</a>
          <a href="/canada-empathy-listener">Empathy listener →</a>
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
