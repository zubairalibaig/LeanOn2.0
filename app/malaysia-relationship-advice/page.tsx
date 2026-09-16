import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Relationship Support for Indians in Malaysia | LeanOn',
  description: 'Relationship struggles as an Indian in Malaysia — long-distance, cultural expectations, partner conflicts abroad. Talk to an Indian listener who understands your world.',
  keywords: [
    'relationship advice malaysia indian', 'relationship support malaysia',
    'indian expat relationship problems malaysia', 'long distance relationship malaysia',
    'cultural differences relationship malaysia', 'partner conflict malaysia nri',
    'marriage struggles malaysia expat', 'talk about relationship problems malaysia',
    'tamil relationship advice malaysia', 'south asian relationship support malaysia',
  ],
  alternates: {
    canonical: 'https://www.leanon.app/malaysia-relationship-advice',
    languages: { 'en-MY': 'https://www.leanon.app/malaysia-relationship-advice' },
  },
  openGraph: {
    title: 'Relationship Support for Indians in Malaysia — Talk It Through | LeanOn',
    description: 'Relationship pain is heavier when you are far from home. LeanOn connects Indians in Malaysia with peer listeners who understand the cultural and expat context without you having to explain it.',
    url: 'https://www.leanon.app/malaysia-relationship-advice',
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
      name: 'What relationship challenges do Indians in Malaysia face?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Indians in Malaysia often navigate multiple layers of complexity: the expectations of the established Malaysian Indian community, pressure from family in India, and the personal realities of a relationship under the strain of expat life. Long-distance, cultural gaps, and differing adaptation speeds all create friction that is hard to discuss with people who have skin in the game.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I talk about my relationship problems in Tamil or Hindi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. LeanOn has listeners who speak Tamil, Hindi, Telugu, Malayalam, Kannada, Bengali, and English. Relationship issues are often easier to process in your first language — many nuances simply do not translate.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it okay to talk about my family\'s pressure on my relationship?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. Family pressure on relationships is one of the most common things people bring to LeanOn. Your listener will not judge your family or tell you what to do — they will help you untangle your own feelings so you can decide what YOU want.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does a peer listener actually do in a relationship support session?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'They listen. Fully. They ask questions that help you think more clearly. They do not take sides. They do not tell you to break up or stay together. They help you hear your own voice more clearly — which is often all you need to see what you need to do next.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does a session cost from Malaysia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sessions are RM 45 for 15 minutes, RM 67 for 30 minutes, and RM 89 for 45 minutes. Your first session begins with 5 free minutes. No subscription required.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Relationship Advice Malaysia', item: 'https://www.leanon.app/malaysia-relationship-advice' },
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

export default function MalaysiaRelationshipAdvicePage() {
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
          <a href="/">Home</a><span>›</span>Relationship Advice Malaysia
        </div>

        <h1>Relationship Struggles Are Harder<br />When You&apos;re Far from Home.</h1>
        <p className="lead">
          Being in a relationship as an Indian in Malaysia means carrying the weight of two worlds —
          the expectations from back home, the pressures of expat life, and a partner who may be
          navigating all of it differently than you. LeanOn is a safe space to talk it through without
          judgment.
        </p>

        <a href="/browse" className="cta-hero">Talk to an Indian listener — first 5 min free →</a>

        <div className="card">
          <h2>What relationship struggles look like for Indians in Malaysia</h2>
          <ul className="checklist">
            <li>A long-distance relationship where the gap keeps growing despite video calls.</li>
            <li>Cultural pressure from the Malaysian Indian community about how your relationship should look.</li>
            <li>Family in India weighing in on your decisions from thousands of kilometres away.</li>
            <li>You and your partner adapting to Malaysia at different speeds and growing apart.</li>
            <li>Arguments that seem to be about small things but are really about larger unspoken tensions.</li>
            <li>Feeling like you cannot confide in friends because they know your partner too.</li>
          </ul>
        </div>

        <div className="night-box">
          <h2>💬 A space with no stake in the outcome</h2>
          <p>The hardest thing about processing relationship problems is finding someone with no agenda.
            Your friends have opinions. Your family has expectations. Your partner is the subject.</p>
          <p>A LeanOn listener is completely outside your circle. They hear your side fully, without
            judgment, without picking a side, without telling anyone else. That changes what you
            are willing to say.</p>
          <a href="/browse" className="cta-night">Talk it through now →</a>
        </div>

        <div className="card">
          <h2>Talk in your language — Tamil, Hindi, or more</h2>
          <p>Many Indians in Malaysia speak Tamil as their primary emotional language. LeanOn has
            Tamil-speaking listeners available at all hours. You can also talk in Hindi, Telugu,
            Malayalam, Kannada, Bengali, or English.</p>
          <p>Some things are just easier to say in the language you first learned to feel in.</p>
        </div>

        <div className="card">
          <h2>Session pricing for Malaysia</h2>
          <p>Pay in Malaysian ringgit. Your first 5 minutes free — once per listener.</p>
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
          <p>No subscription. Pay only when you need to talk.</p>
        </div>

        <div className="cta">
          <h2>Talk it out — in your language</h2>
          <p>Real Indian listeners. Tamil, Hindi, Telugu, and more. Available 24/7.</p>
          <a href="/browse" className="btn-white">Browse listeners →</a><br />
          <a href="/auth" className="btn-orange">Join free</a>
        </div>

        <div className="card">
          <h2>Frequently asked questions</h2>
          <div className="faq-item">
            <h3>What relationship challenges do Indians in Malaysia face?</h3>
            <p>Indians in Malaysia often navigate multiple layers: expectations from the Malaysian Indian
              community, pressure from family in India, and personal relationship tensions under expat
              stress. Long-distance, cultural gaps, and differing adaptation speeds all create friction
              that is hard to discuss with people who have skin in the game.</p>
          </div>
          <div className="faq-item">
            <h3>Can I talk about my relationship problems in Tamil or Hindi?</h3>
            <p>Yes. LeanOn has listeners who speak Tamil, Hindi, Telugu, Malayalam, Kannada, Bengali, and
              English. Relationship issues are often easier to process in your first language.</p>
          </div>
          <div className="faq-item">
            <h3>Is it okay to talk about family pressure on my relationship?</h3>
            <p>Absolutely. Family pressure on relationships is one of the most common things people bring
              to LeanOn. Your listener will not judge your family — they will help you untangle your
              own feelings so you can decide what YOU want.</p>
          </div>
          <div className="faq-item">
            <h3>What does a peer listener do in a relationship support session?</h3>
            <p>They listen fully and ask questions that help you think more clearly. They do not take sides
              or tell you what to do. They help you hear your own voice — which is often all you need to
              see what comes next.</p>
          </div>
          <div className="faq-item">
            <h3>What does a session cost from Malaysia?</h3>
            <p>RM 45 for 15 minutes, RM 67 for 30 minutes, and RM 89 for 45 minutes. Your first session
              begins with 5 free minutes.</p>
          </div>
        </div>

        <div className="related">
          <a href="/malaysia-loneliness">Loneliness support Malaysia →</a>
          <a href="/malaysia-talk-to-someone">Talk to someone Malaysia →</a>
          <a href="/malaysia-rant">Need to rant Malaysia →</a>
          <a href="/singapore-relationship-advice">Relationship support Singapore →</a>
          <a href="/relationship-advice-online-india">Relationship support India →</a>
          <a href="/malaysia-empathy-listener">Empathy listener Malaysia →</a>
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
