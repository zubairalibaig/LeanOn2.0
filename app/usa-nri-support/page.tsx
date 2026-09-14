import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Emotional Support for NRIs in the USA — Talk to Someone Indian | LeanOn',
  description: 'Being an NRI in the USA means carrying a unique emotional weight — homesickness, guilt, expectations, isolation. LeanOn connects you with Indian peer listeners who truly understand.',
  keywords: [
    'nri emotional support usa', 'nri support america', 'indian nri usa talk to someone',
    'nri homesickness support', 'nri mental health usa', 'nri loneliness america',
    'talk to someone indian usa', 'nri peer support', 'indian abroad support usa',
    'nri feeling alone usa', 'emotional support indian community usa',
  ],
  alternates: {
    canonical: 'https://www.leanon.app/usa-nri-support',
    languages: { 'en-US': 'https://www.leanon.app/usa-nri-support' },
  },
  openGraph: {
    title: 'Emotional Support for NRIs in the USA — Talk to Someone Indian',
    description: 'The NRI emotional experience is specific and heavy. LeanOn peer listeners are Indian, they understand the context, and they are available whenever you need to talk.',
    url: 'https://www.leanon.app/usa-nri-support',
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
      name: 'What emotional challenges are unique to NRIs in the USA?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'NRIs carry a specific emotional load: the guilt of being far from ageing parents, the pressure to justify the sacrifice of leaving India, homesickness during festivals and family events, isolation in car-dependent suburbs, cultural identity stress, and the weight of being the family member who "made it abroad." Standard therapy often misses this cultural specificity.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is talking to an Indian listener different from talking to an American therapist?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An Indian listener already understands the context — what it means to be the first in your family to go abroad, why missing Diwali feels like grief, what the pressure of being an NRI "success story" costs you emotionally. You do not spend half your session explaining the background. You get straight to how you actually feel.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I talk about missing India and feeling homesick?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. Homesickness is one of the most underacknowledged forms of grief. Missing the food, the festivals, the spontaneous family visits, the warmth of Indian social life — these are real losses. A LeanOn listener will hear them as the genuine sadness they are, not minimise them as "you chose to go."',
      },
    },
    {
      '@type': 'Question',
      name: 'Is LeanOn available 24 hours a day for NRIs in different US time zones?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. LeanOn listeners are available 24/7 — whether you are on the East Coast, West Coast, or anywhere in between. The late-night hours when India is sleeping and you are alone with your thoughts are exactly when LeanOn is there.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a LeanOn session cost in the USA?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sessions are $10 for 15 minutes, $15 for 30 minutes, and $20 for 45 minutes. Your first 5 minutes are always free — far more accessible than $200/hour therapy sessions.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'NRI Support USA', item: 'https://www.leanon.app/usa-nri-support' },
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

export default function UsaNriSupportPage() {
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
          <a href="/">Home</a><span>›</span>NRI Support USA
        </div>

        <h1>Being an NRI Was Supposed to Feel Like Success.<br />Why Does It Sometimes Feel Like Loss?</h1>
        <p className="lead">
          The NRI experience is full of things nobody warned you about: missing your parents growing old,
          the guilt of every festival you miss, the isolation of suburbs where nobody just drops by, the
          pressure to be the family&apos;s shining success story. LeanOn is the space where you can say all of this
          to someone who actually understands.
        </p>

        <a href="/browse" className="cta-hero">Talk to someone Indian now — first 5 min free →</a>

        <div className="card">
          <h2>What NRIs in the USA quietly carry</h2>
          <ul className="checklist">
            <li>Parents growing older in India and the guilt of not being there.</li>
            <li>Missing weddings, funerals, Diwali, Holi — the milestones that build belonging.</li>
            <li>Being the &quot;success story&quot; that the whole family references — and the pressure that comes with that.</li>
            <li>Suburbs where you can go days without a genuine human conversation.</li>
            <li>A WhatsApp call home that ends and leaves you more hollow than before.</li>
            <li>The loneliness of being the first in your family to live abroad — no map, no template.</li>
          </ul>
        </div>

        <div className="night-box">
          <h2>🌙 When India is sleeping and the quiet gets too loud</h2>
          <p>It is 11 PM in California. India is in the morning rush. You cannot call home right now.
            Your American friends are asleep. You are alone with everything you are feeling.</p>
          <p>LeanOn listeners are available around the clock — including 11 PM on the West Coast
            or 2 AM on the East Coast. You do not have to wait until morning.</p>
          <a href="/browse" className="cta-night">Find a listener now →</a>
        </div>

        <div className="card">
          <h2>Why standard American therapy often misses the NRI experience</h2>
          <p>A therapist in San Jose or New Jersey might be compassionate and highly qualified —
            but they will spend a significant portion of your session trying to understand what
            it means to have left India, what an H-1B actually is, why missing a cousin&apos;s wedding
            is not just &quot;FOMO.&quot;</p>
          <p>LeanOn listeners are Indian. Many are NRIs themselves or have family abroad. You skip
            the explanations and go straight to what you actually feel. Sessions start at
            <strong> $10 for 15 minutes</strong>, with your first 5 minutes always free.</p>
        </div>

        <div className="card">
          <h2>Homesickness is grief</h2>
          <p>Missing India is not a sign that you made the wrong decision or that you are ungrateful.
            It is grief — the grief of a whole life, a whole country, a whole version of yourself
            that you left behind. That grief is legitimate and it deserves to be held gently, not dismissed.</p>
          <p>Talk to a LeanOn listener who will not tell you to &quot;focus on the good things here.&quot;
            They will just let you miss India for a little while, out loud, with someone who gets it.</p>
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
            <h3>What emotional challenges are unique to NRIs in the USA?</h3>
            <p>NRIs carry specific emotional loads: guilt about ageing parents, pressure to justify the
              sacrifice of leaving, homesickness during festivals, isolation in suburbs, and the weight
              of being the family&apos;s &quot;success story.&quot; Standard therapy often misses this.</p>
          </div>
          <div className="faq-item">
            <h3>Why is talking to an Indian listener different from an American therapist?</h3>
            <p>An Indian listener already understands the context. You do not spend half your session
              explaining the background. You get straight to how you actually feel.</p>
          </div>
          <div className="faq-item">
            <h3>Can I talk about missing India and feeling homesick?</h3>
            <p>Absolutely. Homesickness is an underacknowledged form of grief. A LeanOn listener will
              hear it as the genuine sadness it is — not minimise it as &quot;you chose to go.&quot;</p>
          </div>
          <div className="faq-item">
            <h3>Is LeanOn available 24 hours a day for NRIs in different US time zones?</h3>
            <p>Yes. LeanOn listeners are available 24/7 — East Coast, West Coast, any time of day or night.
              The late-night hours when India is sleeping are exactly when LeanOn is there.</p>
          </div>
          <div className="faq-item">
            <h3>How much does a LeanOn session cost in the USA?</h3>
            <p>Sessions are $10 for 15 minutes, $15 for 30 minutes, and $20 for 45 minutes. Your first
              5 minutes are always free.</p>
          </div>
        </div>

        <div className="related">
          <a href="/usa-loneliness">Feeling lonely in the USA →</a>
          <a href="/usa-h1b-visa-stress">H-1B visa stress →</a>
          <a href="/usa-empathy-listener">Empathy listener →</a>
          <a href="/desi-usa-support">Desi community support →</a>
          <a href="/usa-talk-to-someone">Someone to talk to →</a>
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
