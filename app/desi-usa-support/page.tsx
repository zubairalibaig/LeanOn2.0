import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Support for the Desi Community in the USA — When No One Understands | LeanOn',
  description: 'The desi experience in America has a specific emotional weight. Community pressure, identity tensions, work culture shock, homesickness — LeanOn peer listeners are desi and they get it.',
  keywords: [
    'desi support usa', 'desi community usa emotional support', 'south asian support usa',
    'desi american mental health', 'desi usa loneliness', 'desi peer support america',
    'south asian american support', 'desi identity usa support', 'brown community usa support',
    'desi emotional health usa', 'desi american talk to someone',
  ],
  alternates: {
    canonical: 'https://www.leanon.app/desi-usa-support',
    languages: { 'en-US': 'https://www.leanon.app/desi-usa-support' },
  },
  openGraph: {
    title: 'Support for the Desi Community in the USA — When No One Understands',
    description: 'The desi emotional experience in America is specific. LeanOn peer listeners are from the community — no explaining, no blank looks, just warmth and understanding.',
    url: 'https://www.leanon.app/desi-usa-support',
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
      name: 'What makes emotional support for desis in the USA different?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The desi community in America navigates pressures that most mainstream mental health support does not understand: the model minority expectation, family honour, the guilt of leaving India, the community judgment about life choices, the pressure to succeed visibly. LeanOn listeners know this context because many of them live it.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I talk to a desi listener who speaks Hindi or my regional language?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Many LeanOn listeners speak Hindi, Telugu, Tamil, Kannada, Malayalam, Punjabi, Bengali, and other South Asian languages. Filter by language when you browse.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if I feel pressure from the desi community itself?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Community can be a source of belonging and a source of pressure — sometimes both at once. If you are feeling judged, compared, or suffocated by community expectations, that is completely valid and worth talking about. A LeanOn listener is outside your community and completely confidential.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it okay to talk about things my family would not understand?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'That is precisely what LeanOn is for. Career doubts. Identity questions. Relationship choices that your family would disapprove of. Feelings about religion, culture, marriage. Whatever it is that you cannot say at the family dinner table — you can say it here.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a LeanOn session cost from the USA?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sessions are $10 for 15 minutes, $15 for 30 minutes, and $20 for 45 minutes. Your first 5 minutes are always free. No subscription required.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Desi Support USA', item: 'https://www.leanon.app/desi-usa-support' },
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

export default function DesiUsaSupportPage() {
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
          <a href="/">Home</a><span>›</span>Desi Support USA
        </div>

        <h1>The Desi Experience in America Has a Specific Weight.<br />Someone Who Knows It Is Here.</h1>
        <p className="lead">
          You live between two worlds — the America you navigated your way into and the India that shaped
          everything about you. The pressures are specific. The loneliness is specific. The cultural weight
          is something that most mainstream support simply does not understand. LeanOn listeners are from
          the community. No explaining needed.
        </p>

        <a href="/browse" className="cta-hero">Talk to someone desi now — first 5 min free →</a>

        <div className="card">
          <h2>What the desi community in America quietly deals with</h2>
          <ul className="checklist">
            <li>The model minority expectation — always succeeding, never visibly struggling.</li>
            <li>Community comparisons: whose kid got into which college, whose spouse earns more.</li>
            <li>Navigating American work culture that feels transactional and cold after the warmth of Indian workplaces.</li>
            <li>Guilt about assimilating — eating differently, dating differently, living differently than your parents imagined.</li>
            <li>Being in big desi hubs like the Bay Area, New Jersey, or Seattle — and somehow still feeling profoundly alone.</li>
            <li>The emotional labour of being the cultural bridge between your parents and the country you live in.</li>
          </ul>
        </div>

        <div className="night-box">
          <h2>🫶 Community can also be pressure</h2>
          <p>Being surrounded by desis is not always the same as being supported by them. Community events,
            WhatsApp aunty groups, the constant awareness of what people will say — sometimes the community
            itself is a source of stress, not relief.</p>
          <p>A LeanOn listener is outside your community. Completely confidential. A space to say the
            things you cannot say in the community without it getting back to someone.</p>
          <a href="/browse" className="cta-night">Find a listener now →</a>
        </div>

        <div className="card">
          <h2>For South Asians — not just Indians</h2>
          <p>LeanOn serves the broader South Asian community in the USA — Indians, Pakistanis, Bangladeshis,
            Sri Lankans, Nepalis. The specific pressures of migration, family, identity, and the in-between
            are shared across the community. You will find listeners who understand your specific background.</p>
        </div>

        <div className="card">
          <h2>Things you can say here that you cannot say at home</h2>
          <ul className="checklist">
            <li>That you are not sure this career your parents pushed you into actually makes you happy.</li>
            <li>That you are questioning something about your marriage, your identity, your faith.</li>
            <li>That you are tired of performing success while quietly struggling.</li>
            <li>That you feel like a stranger in your own community sometimes.</li>
            <li>That the American Dream has a side nobody talks about — and you are living it.</li>
          </ul>
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
            <h3>What makes emotional support for desis in the USA different?</h3>
            <p>The desi community navigates pressures mainstream mental health support often misses — model
              minority expectations, family honour, community judgment. LeanOn listeners know this context
              because many of them live it.</p>
          </div>
          <div className="faq-item">
            <h3>Can I talk to a desi listener who speaks my language?</h3>
            <p>Yes. Many LeanOn listeners speak Hindi, Telugu, Tamil, Kannada, Malayalam, Punjabi, Bengali,
              and other South Asian languages. Filter by language when you browse.</p>
          </div>
          <div className="faq-item">
            <h3>What if I feel pressure from the desi community itself?</h3>
            <p>Community can be both belonging and pressure. A LeanOn listener is outside your community
              and completely confidential — a space to say what you cannot say inside it.</p>
          </div>
          <div className="faq-item">
            <h3>Is it okay to talk about things my family would not understand?</h3>
            <p>That is precisely what LeanOn is for. Whatever you cannot say at the family dinner table —
              career doubts, identity questions, relationship choices — you can say it here.</p>
          </div>
          <div className="faq-item">
            <h3>How much does a LeanOn session cost from the USA?</h3>
            <p>Sessions are $10 for 15 minutes, $15 for 30 minutes, and $20 for 45 minutes. First 5
              minutes are always free. No subscription required.</p>
          </div>
        </div>

        <div className="related">
          <a href="/indian-american-loneliness">Indian-American loneliness →</a>
          <a href="/usa-loneliness">Feeling lonely in the USA →</a>
          <a href="/usa-empathy-listener">Empathy listener →</a>
          <a href="/usa-nri-support">NRI emotional support →</a>
          <a href="/usa-rant-to-someone">Need to rant? →</a>
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
