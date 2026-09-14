import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Lonely in Toronto — The Most Isolating City for New Immigrants | LeanOn',
  description: 'Toronto is huge, diverse, and full of Indians — and somehow still one of the loneliest cities for new immigrants. You are not alone in feeling this way. LeanOn is here.',
  keywords: [
    'lonely in toronto', 'toronto loneliness indian', 'new immigrant toronto lonely',
    'south asian loneliness toronto', 'desi toronto isolation', 'toronto social isolation',
    'indian toronto no friends', 'moving to toronto lonely', 'toronto newcomer loneliness',
  ],
  alternates: {
    canonical: 'https://www.leanon.app/toronto-loneliness',
    languages: { 'en-CA': 'https://www.leanon.app/toronto-loneliness' },
  },
  openGraph: {
    title: 'Lonely in Toronto — Why New Immigrants Feel So Isolated | LeanOn',
    description: 'Toronto can make you feel very alone, very fast. LeanOn peer listeners are available anytime — for the evenings, the weekends, the moments when the city feels too big.',
    url: 'https://www.leanon.app/toronto-loneliness',
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
      name: 'Why is Toronto so lonely for Indian immigrants?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Toronto is one of the most multicultural cities in the world, which paradoxically can make it harder to connect deeply. Everyone is busy, social circles are already formed, and the city\'s culture leans toward keeping to yourself. For Indians used to tight community bonds, this can feel shocking and deeply isolating.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it normal to feel lonely in Toronto even if there are many other Indians here?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Very normal. Seeing people who look like you does not automatically mean you feel connected. Many Indians in Toronto — including those in Brampton and Mississauga — describe feeling surrounded by familiar faces but still profoundly alone. Community and connection are not the same thing.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can a LeanOn listener help with Toronto loneliness?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A LeanOn session gives you something Toronto often withholds — someone\'s full, unhurried attention. Talking through what you are feeling with a real person who genuinely listens can break the cycle of isolation, even just for that hour.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a session cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Your first 5 minutes are free. After that: CA$14 for 15 min, CA$21 for 30 min, CA$28 for 45 min.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use LeanOn if I live outside Toronto — like Brampton or Mississauga?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. LeanOn is fully online and available anywhere in Canada. Whether you are in Brampton, Mississauga, Scarborough, or anywhere else in the GTA, you can connect with a listener anytime.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Toronto Loneliness', item: 'https://www.leanon.app/toronto-loneliness' },
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

export default function TorontoLonelinessPage() {
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
          <a href="/">Home</a><span>›</span>Toronto Loneliness
        </div>

        <h1>Toronto Is Full of People.<br />So Why Does It Feel So Lonely?</h1>
        <p className="lead">
          Millions of people. A huge Indian and South Asian community. Brampton. Mississauga. Scarborough.
          And yet, Toronto consistently ranks as one of the loneliest cities for new immigrants. You are
          not imagining it. And you are far from the only one feeling this way.
        </p>

        <a href="/browse" className="cta-hero">Talk to someone now — first 5 min free →</a>

        <div className="card">
          <h2>Why Toronto feels isolating for Indians</h2>
          <p>Toronto is not unfriendly. It is just busy — everyone is surviving. And when you arrive
            without an existing network, this is what it can look like:</p>
          <ul className="checklist">
            <li>Commuting an hour each way on the TTC, surrounded by people, speaking to no one</li>
            <li>Weekends with nothing to do and nowhere to go</li>
            <li>Watching others at work with inside jokes and plans you are not part of</li>
            <li>Living in Brampton among thousands of Indians and still feeling invisible</li>
            <li>Paying Toronto rent while wondering if the sacrifice is worth it</li>
            <li>Calling home and pretending everything is fine when it really is not</li>
          </ul>
        </div>

        <div className="night-box">
          <h2>🌆 The city gives nothing for free</h2>
          <p>Back in India, connection happened naturally — neighbours, chai with colleagues, family dropping
            by. In Toronto, everything is scheduled, everyone is busy, and relationships take months to build.
            For someone new to the city, this can feel profoundly cold.</p>
          <p>LeanOn gives you what the city does not — someone available right now, no scheduling, no awkward
            small talk. Just a real conversation when you need one.</p>
          <a href="/browse" className="cta-night">Find a listener online now →</a>
        </div>

        <div className="card">
          <h2>You are not failing at Canada. Canada is just hard.</h2>
          <p>There is a particular shame that comes with admitting you are lonely in a place you chose to
            come to. You cannot say it back home because your family will worry. You cannot say it to
            Canadian acquaintances because it sounds like a complaint.</p>
          <p>LeanOn is the place where you can say it without any of that. A listener who will not judge,
            will not panic, and will not tell you to look on the bright side. Just someone to be with you
            in it for a little while.</p>
        </div>

        <div className="card">
          <h2>Session details</h2>
          <ul className="checklist">
            <li>First 5 minutes completely free — try it now, no commitment</li>
            <li>CA$14 for 15 min &nbsp;·&nbsp; CA$21 for 30 min &nbsp;·&nbsp; CA$28 for 45 min</li>
            <li>Real human listeners — not AI, not a bot</li>
            <li>Anonymous and confidential</li>
            <li>Available any time — including late evenings and weekends</li>
          </ul>
        </div>

        <div className="cta">
          <h2>Someone is ready to listen right now</h2>
          <p>Toronto may be busy. LeanOn is not.</p>
          <a href="/browse" className="btn-white">Browse listeners →</a><br />
          <a href="/auth" className="btn-orange">Join free</a>
        </div>

        <div className="card">
          <h2>Frequently asked questions</h2>
          <div className="faq-item">
            <h3>Why is Toronto so lonely for Indian immigrants?</h3>
            <p>Toronto is multicultural but its culture leans toward keeping to yourself. Social circles are
              already formed and everyone is busy. For Indians used to tight community bonds, this contrast
              is genuinely shocking.</p>
          </div>
          <div className="faq-item">
            <h3>Is it normal to feel lonely in Toronto even with many other Indians here?</h3>
            <p>Very normal. Seeing people who look like you does not automatically mean you feel connected.
              Many Indians in Brampton and Mississauga describe being surrounded by familiar faces but still
              profoundly alone.</p>
          </div>
          <div className="faq-item">
            <h3>How can a LeanOn listener help?</h3>
            <p>A LeanOn session gives you something Toronto often withholds — someone&apos;s full, unhurried
              attention. Talking through what you are feeling with a real person who genuinely listens can
              break the cycle of isolation.</p>
          </div>
          <div className="faq-item">
            <h3>How much does a session cost?</h3>
            <p>First 5 minutes free. Then CA$14 for 15 min, CA$21 for 30 min, CA$28 for 45 min.</p>
          </div>
          <div className="faq-item">
            <h3>Can I use LeanOn if I live in Brampton or Mississauga?</h3>
            <p>Absolutely. LeanOn is fully online and available anywhere in Canada — Brampton, Mississauga,
              Scarborough, or anywhere else in the GTA or beyond.</p>
          </div>
        </div>

        <div className="related">
          <a href="/canada-loneliness">Loneliness in Canada →</a>
          <a href="/canada-winter-loneliness">First winter in Canada →</a>
          <a href="/canada-nri-support">NRI emotional support →</a>
          <a href="/canada-talk-to-someone">Someone to talk to →</a>
          <a href="/desi-canada-support">Desi community support →</a>
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
