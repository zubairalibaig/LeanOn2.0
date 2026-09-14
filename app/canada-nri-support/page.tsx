import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Emotional Support for NRIs in Canada — Missing Home, Rebuilding Life | LeanOn',
  description: 'Being an NRI in Canada means carrying a weight most people around you cannot see. LeanOn connects you with peer listeners who understand what it means to rebuild from scratch abroad.',
  keywords: [
    'nri support canada', 'emotional support nri canada', 'indian abroad canada support',
    'nri missing india canada', 'nri mental health canada', 'nri loneliness canada',
    'indian diaspora support canada', 'missing india canada', 'nri homesick canada',
  ],
  alternates: {
    canonical: 'https://www.leanon.app/canada-nri-support',
    languages: { 'en-CA': 'https://www.leanon.app/canada-nri-support' },
  },
  openGraph: {
    title: 'Emotional Support for NRIs in Canada | LeanOn',
    description: 'Missing home is not weakness. Rebuilding everything from scratch is exhausting. LeanOn peer listeners are here for the hard parts of the NRI journey.',
    url: 'https://www.leanon.app/canada-nri-support',
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
      name: 'Is it okay to grieve the life I left behind in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not only okay — it is healthy. You gave up a home, relationships, familiarity, and the version of yourself that existed within all of that. Grieving what you left behind is a natural and necessary part of building something new. You do not have to pretend it does not hurt.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I deal with guilt about leaving my parents in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Guilt is one of the most common emotions NRIs carry — and one of the least talked about. There is no simple fix for it, but talking about it honestly with someone who truly understands can help you carry it with more compassion for yourself. LeanOn listeners are familiar with this particular kind of pain.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if I feel like I made the wrong decision coming to Canada?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'That doubt is more common than anyone admits publicly. It does not mean you did make the wrong decision — but the feeling is real and deserves space. A LeanOn listener will hear you out without pushing you toward any conclusion. Just honest, caring presence.',
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
      name: 'Is LeanOn available for NRIs in other parts of Canada — not just Toronto?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. LeanOn is fully online and available across all of Canada — Vancouver, Calgary, Ottawa, Montreal, and everywhere in between. Timezone does not matter — listeners are available day and night.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'NRI Support Canada', item: 'https://www.leanon.app/canada-nri-support' },
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

export default function CanadaNriSupportPage() {
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
          <a href="/">Home</a><span>›</span>NRI Support Canada
        </div>

        <h1>You Are Building a New Life.<br />Nobody Said It Would Not Hurt.</h1>
        <p className="lead">
          Being an NRI in Canada means carrying invisible weight every single day — the homesickness,
          the guilt, the longing for something you cannot quite name. The Canadian dream is real, but so
          is the cost of it. LeanOn is here for the honest parts.
        </p>

        <a href="/browse" className="cta-hero">Talk to someone now — first 5 min free →</a>

        <div className="card">
          <h2>The hidden emotional cost of being an NRI in Canada</h2>
          <ul className="checklist">
            <li>Missing India in a way that goes beyond food and festivals</li>
            <li>Guilt every time your parents call and you cannot give them what they need</li>
            <li>The particular loneliness of a Sunday evening when you have nothing to do and no one to call</li>
            <li>Feeling like you are living half a life in two countries</li>
            <li>Nobody here fully understands what you left behind</li>
            <li>Constantly performing &quot;I am fine&quot; because nobody wants to hear otherwise</li>
          </ul>
        </div>

        <div className="night-box">
          <h2>🏠 Missing India is not weakness</h2>
          <p>The people who tell you to &quot;just focus on the future&quot; have not left behind everything
            they know and love. Missing home is a completely human response to an extraordinary sacrifice.
            You are allowed to feel it.</p>
          <p>LeanOn listeners do not rush you past the grief. They sit with you in it — and sometimes
            that is exactly what you need before you can move forward.</p>
          <a href="/browse" className="cta-night">Find a listener online now →</a>
        </div>

        <div className="card">
          <h2>Things that are harder to say out loud</h2>
          <p>Many NRIs carry thoughts they feel they cannot share — because it might worry family, or seem
            ungrateful, or make people think they cannot handle it:</p>
          <ul className="checklist">
            <li>I wonder if I made the right decision</li>
            <li>I am so tired of starting from scratch every time</li>
            <li>I worry about my parents getting older and me not being there</li>
            <li>I miss being known — where people understand me without explanation</li>
            <li>Success here does not feel like I thought it would</li>
          </ul>
          <p style={{ marginTop: '12px' }}>These thoughts are safe here. A LeanOn listener will hold them with care.</p>
        </div>

        <div className="card">
          <h2>Session details</h2>
          <ul className="checklist">
            <li>First 5 minutes completely free</li>
            <li>CA$14 for 15 min &nbsp;·&nbsp; CA$21 for 30 min &nbsp;·&nbsp; CA$28 for 45 min</li>
            <li>Real human listeners — not AI</li>
            <li>Anonymous and confidential</li>
            <li>Available across all of Canada, any time of day or night</li>
          </ul>
        </div>

        <div className="cta">
          <h2>Someone is ready to listen right now</h2>
          <p>The NRI journey is hard. You do not have to carry it alone.</p>
          <a href="/browse" className="btn-white">Browse listeners →</a><br />
          <a href="/auth" className="btn-orange">Join free</a>
        </div>

        <div className="card">
          <h2>Frequently asked questions</h2>
          <div className="faq-item">
            <h3>Is it okay to grieve the life I left behind in India?</h3>
            <p>Not only okay — it is healthy. You gave up a home, relationships, and familiarity. Grieving
              what you left is natural and necessary. You do not have to pretend it does not hurt.</p>
          </div>
          <div className="faq-item">
            <h3>How do I deal with guilt about leaving my parents in India?</h3>
            <p>Guilt is one of the most common emotions NRIs carry. Talking about it honestly with someone
              who truly understands can help you carry it with more compassion for yourself.</p>
          </div>
          <div className="faq-item">
            <h3>What if I feel like I made the wrong decision coming to Canada?</h3>
            <p>That doubt is more common than anyone admits publicly. A LeanOn listener will hear you
              out without pushing you toward any conclusion. Just honest, caring presence.</p>
          </div>
          <div className="faq-item">
            <h3>How much does a session cost?</h3>
            <p>First 5 minutes free. Then CA$14 for 15 min, CA$21 for 30 min, CA$28 for 45 min.</p>
          </div>
          <div className="faq-item">
            <h3>Is LeanOn available across all of Canada?</h3>
            <p>Yes — fully online, available everywhere in Canada — Vancouver, Calgary, Ottawa, Montreal,
              and beyond. Listeners are available day and night.</p>
          </div>
        </div>

        <div className="related">
          <a href="/canada-loneliness">Loneliness in Canada →</a>
          <a href="/canada-winter-loneliness">First winter in Canada →</a>
          <a href="/canada-immigration-stress">Immigration anxiety →</a>
          <a href="/desi-canada-support">Desi community support →</a>
          <a href="/canada-empathy-listener">Empathy listener →</a>
          <a href="/canada-talk-to-someone">Someone to talk to →</a>
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
