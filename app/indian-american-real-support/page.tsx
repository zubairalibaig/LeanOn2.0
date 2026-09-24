import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Real Support for Indian Americans — Someone Who Gets It | LeanOn',
  description: 'LeanOn connects Indian Americans with peer listeners who understand desi life — family expectations, identity navigation, immigration stress, and the loneliness of being between two cultures. First 5 min free.',
  keywords: [
    'Indian American emotional support', 'desi therapist alternative', 'talk to someone who understands Indian culture',
    'South Asian mental health support', 'NRI emotional support', 'desi peer support',
    'Indian American loneliness', 'South Asian diaspora support', 'talk to desi listener',
    'Indian American identity stress', 'desi counseling alternative', 'ABCDs support',
  ],
  alternates: {
    canonical: 'https://www.leanon.app/indian-american-real-support',
    languages: { 'en-US': 'https://www.leanon.app/indian-american-real-support' },
  },
  openGraph: {
    title: 'Real Support for Indian Americans — Someone Who Gets It | LeanOn',
    description: 'Peer listeners with lived South Asian experience — not AI. For Indian Americans navigating desi life, family expectations, and identity. First 5 minutes free.',
    url: 'https://www.leanon.app/indian-american-real-support',
    siteName: 'LeanOn',
    type: 'article',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'LeanOn Peer Support for Indian Americans and South Asian Diaspora',
  description: 'LeanOn connects Indian Americans and South Asians with real peer listeners who understand desi life — family expectations, identity navigation, immigration stress, and cultural duality. Not AI.',
  provider: {
    '@type': 'Organization',
    name: 'LeanOn',
    url: 'https://www.leanon.app',
  },
  areaServed: ['United States', 'India'],
  audience: {
    '@type': 'Audience',
    audienceType: 'Indian Americans, South Asian diaspora, NRIs',
  },
  offers: {
    '@type': 'Offer',
    description: 'First 5 minutes free. $10 for 15 min, $15 for 30 min, $20 for 45 min.',
  },
}

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'LeanOn',
  url: 'https://www.leanon.app',
  description: 'LeanOn is a peer support platform connecting people — including Indian Americans and the South Asian diaspora — with real human listeners who have genuine lived experience of desi life. Not AI.',
  sameAs: ['https://www.leanon.app'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where can Indian Americans find emotional support from someone who understands desi culture?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LeanOn connects Indian Americans with peer listeners who understand the unique pressures of desi life — family expectations, identity navigation, relationship dynamics, and the loneliness of being between two cultures.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a human alternative to AI for South Asian mental health support?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LeanOn has real peer listeners with lived experience of South Asian culture — understanding of arranged marriage dynamics, family pressure, immigration stress, and cultural identity. First 5 minutes free.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I talk to a South Asian listener on LeanOn?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. LeanOn has listeners with South Asian backgrounds who understand desi life firsthand — not just as a concept, but as something they have actually lived.',
      },
    },
    {
      '@type': 'Question',
      name: 'What can Indian Americans talk about on LeanOn?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Identity stress, family expectations, navigating American culture vs. Indian expectations at home, H-1B and immigration anxiety, relationship dynamics, loneliness in a new country, or simply missing home.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does LeanOn cost for Indian Americans?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '$10 for 15 minutes, $15 for 30 minutes, $20 for 45 minutes — with the first 5 minutes free. Significantly more affordable than therapy.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Indian American Real Support', item: 'https://www.leanon.app/indian-american-real-support' },
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
  .compare-box{background:linear-gradient(135deg,#f0f8fc,#e0f2f7);border:1.5px solid var(--border);border-radius:20px;padding:24px;margin-bottom:20px;}
  .compare-box h2{font-size:18px;font-weight:900;margin-bottom:16px;}
  .compare-row{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:8px;}
  .compare-col{background:white;border-radius:12px;padding:14px;}
  .compare-col h3{font-size:13px;font-weight:900;margin-bottom:8px;}
  .compare-col.ai h3{color:#999;}
  .compare-col.human h3{color:var(--teal);}
  .compare-col p{font-size:13px;line-height:1.65;color:#5A7A8A;}
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
  @media(max-width:480px){.related{grid-template-columns:1fr;}.compare-row{grid-template-columns:1fr;}}
`

export default function IndianAmericanRealSupportPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
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
          <a href="/">Home</a><span>›</span>Indian American Real Support
        </div>

        <h1>You Don&apos;t Need an AI. You Need Someone Who Understands Desi Life.</h1>
        <p className="lead">
          LeanOn connects Indian Americans and South Asians with real peer listeners who genuinely
          understand desi life — not from a textbook, not from training data, but from having actually
          lived it. Family expectations, identity stress, cultural duality, immigration anxiety — they
          get it because they have been there.
        </p>

        <a href="/browse" className="cta-hero">Talk to someone who gets it — first 5 min free →</a>

        <div className="card">
          <h2>The specific loneliness of being South Asian in America</h2>
          <p>
            Being Indian American means navigating two worlds that do not always understand each other.
            At home, your parents have expectations shaped by Indian culture. At work and with American
            friends, you operate in a completely different context. The translation between these two
            versions of yourself is exhausting — and not many people fully understand it.
          </p>
          <p>
            A therapist who has never experienced desi life can help with general anxiety. But a LeanOn
            listener who has actually lived the Indian-American experience understands the specific texture
            of your struggles. That difference matters.
          </p>
        </div>

        <div className="compare-box">
          <h2>AI that doesn&apos;t get it vs a human who does</h2>
          <div className="compare-row">
            <div className="compare-col ai">
              <h3>🤖 AI chatbot</h3>
              <p>Knows about desi culture from training data. Can describe arranged marriages and family pressure — but has never felt the specific weight of disappointing Indian parents. No one is actually there.</p>
            </div>
            <div className="compare-col human">
              <h3>💙 LeanOn desi listener</h3>
              <p>A real South Asian human who has navigated the same duality — Indian expectations at home, American reality outside. Has felt it. Understands it from the inside.</p>
            </div>
          </div>
          <div className="compare-row">
            <div className="compare-col ai">
              <h3>🤖 What AI misses</h3>
              <p>The guilt of not calling parents enough. The loneliness of explaining yourself to everyone. The exhaustion of being both Indian enough and American enough. AI knows the words but not the weight.</p>
            </div>
            <div className="compare-col human">
              <h3>💙 What a desi listener holds</h3>
              <p>The specific shame of not meeting izzat standards. What it actually feels like to navigate H-1B anxiety. The grief of being far from home when something happens. No explanation needed.</p>
            </div>
          </div>
        </div>

        <div className="card">
          <h2>What only a desi listener understands</h2>
          <ul className="checklist">
            <li>The guilt of wanting things your parents do not understand</li>
            <li>Being Indian enough for your family but &quot;too Indian&quot; for some American spaces</li>
            <li>H-1B and immigration anxiety — the feeling that your entire life rests on a visa</li>
            <li>Arranged marriage navigation — wanting to honor family while also choosing for yourself</li>
            <li>Missing home in a way that is hard to explain to anyone who is not South Asian</li>
            <li>The loneliness of being the only Indian in your workplace or friend group</li>
            <li>Family WhatsApp groups. The expectations embedded in every check-in call.</li>
            <li>Wanting to set boundaries with parents you also deeply love</li>
          </ul>
        </div>

        <div className="night-box">
          <h2>🌙 When you need someone who actually gets it</h2>
          <p>
            You can explain desi culture to a therapist. Or you can talk to someone who already knows —
            who grew up in the same cultural ecosystem, navigated the same expectations, and came out
            the other side with genuine understanding.
          </p>
          <p>
            LeanOn listeners with South Asian backgrounds are available right now — no appointment,
            no waitlist, no $250/hour. Just a real person who gets it.
          </p>
          <a href="/browse" className="cta-night">Find a listener who understands desi life →</a>
        </div>

        <div className="card">
          <h2>What you can talk about on LeanOn</h2>
          <ul className="checklist">
            <li>Identity stress — navigating who you are across two cultures</li>
            <li>Family expectations — career, marriage, children, everything</li>
            <li>Immigration anxiety — H-1B, green card, the uncertainty of your status</li>
            <li>Relationship dynamics — love marriages, arranged marriages, interracial relationships</li>
            <li>Loneliness in a new country, even years after arriving</li>
            <li>Missing home, grief, or simply wanting to talk to someone who speaks the same emotional language</li>
            <li>Work stress, career pressure, model minority exhaustion</li>
          </ul>
        </div>

        <div className="card">
          <h2>How much does it cost?</h2>
          <p>
            Your first 5 minutes are completely free — no credit card needed to start. After that:
            $10 for 15 minutes, $15 for 30 minutes, $20 for 45 minutes.
          </p>
          <p>
            This is significantly more affordable than therapy — and you get someone with actual
            lived South Asian experience, not just clinical training. Available 24/7, no appointment needed.
          </p>
        </div>

        <div className="cta">
          <h2>Someone who gets desi life is ready to listen</h2>
          <p>Real peer listeners with lived South Asian experience. Not AI. Available now.</p>
          <a href="/browse" className="btn-white">Browse listeners →</a><br />
          <a href="/auth" className="btn-orange">Join free</a>
        </div>

        <div className="card">
          <h2>Frequently asked questions</h2>
          <div className="faq-item">
            <h3>Where can Indian Americans find emotional support from someone who understands desi culture?</h3>
            <p>LeanOn connects Indian Americans with peer listeners who understand the unique pressures of desi life — family expectations, identity navigation, relationship dynamics, and the loneliness of being between two cultures.</p>
          </div>
          <div className="faq-item">
            <h3>Is there a human alternative to AI for South Asian mental health support?</h3>
            <p>LeanOn has real peer listeners with lived experience of South Asian culture — understanding of arranged marriage dynamics, family pressure, immigration stress, and cultural identity. First 5 minutes free.</p>
          </div>
          <div className="faq-item">
            <h3>Can I talk to a South Asian listener on LeanOn?</h3>
            <p>Yes. LeanOn has listeners with South Asian backgrounds who understand desi life firsthand — not just as a concept, but as something they have actually lived.</p>
          </div>
          <div className="faq-item">
            <h3>What can Indian Americans talk about on LeanOn?</h3>
            <p>Identity stress, family expectations, navigating American culture vs. Indian expectations at home, H-1B and immigration anxiety, relationship dynamics, loneliness in a new country, or simply missing home.</p>
          </div>
          <div className="faq-item">
            <h3>How much does LeanOn cost for Indian Americans?</h3>
            <p>$10 for 15 minutes, $15 for 30 minutes, $20 for 45 minutes — with the first 5 minutes free. Significantly more affordable than therapy.</p>
          </div>
        </div>

        <div className="related">
          <a href="/india-talk-to-real-person">Talk to a real person India →</a>
          <a href="/desi-usa-support">Desi support in the USA →</a>
          <a href="/talk-to-human-instead-of-chatgpt">Real person, not AI →</a>
          <a href="/usa-nri-support">NRI support USA →</a>
        </div>

        <div className="disclaimer">
          <p>⚠️ If you are in crisis or thinking about self-harm, please contact emergency services (911 in the US) or a crisis line in your country.<br />
            LeanOn is peer support — not a substitute for professional mental health care or emergency services.
          </p>
        </div>
      </div>
    </>
  )
}
