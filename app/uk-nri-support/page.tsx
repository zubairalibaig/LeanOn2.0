import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Emotional Support for NRIs in the UK — Talk to Someone Indian | LeanOn',
  description: 'Missing home. Carrying the NRI pressure alone. Video calls not enough. LeanOn connects NRIs in the UK with Indian peer listeners who understand life abroad, available 24/7.',
  keywords: [
    'nri support uk', 'emotional support nri uk', 'indian abroad uk support', 'nri loneliness uk',
    'missing home uk', 'nri mental health uk', 'talk to someone indian uk', 'indian listener uk',
    'nri emotional wellbeing uk', 'overseas indian support',
  ],
  alternates: {
    canonical: 'https://www.leanon.app/uk-nri-support',
    languages: { 'en-GB': 'https://www.leanon.app/uk-nri-support' },
  },
  openGraph: {
    title: 'Emotional Support for NRIs in the UK — Talk to Someone Indian',
    description: 'Missing home, carrying NRI pressure alone, video calls not enough. LeanOn connects you with Indian peer listeners available 24/7.',
    url: 'https://www.leanon.app/uk-nri-support',
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
      name: 'What kind of support does LeanOn offer NRIs in the UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LeanOn connects you with peer-trained Indian listeners who are available 24/7 for real conversations. You can talk about anything — missing home, work stress, relationship pressures, loneliness, identity confusion, or simply the unnamed heaviness that comes with being far from where you grew up. Sessions are private and judgment-free.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why do so many NRIs in the UK struggle emotionally?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The NRI experience in the UK involves a unique set of pressures: the sacrifice that must be worth it, the guilt of being away from aging parents, the loneliness of building a life in a country where the unspoken social codes are different, the weight of holding everything together while everyone back home assumes you have made it. These are real burdens, and they are rarely talked about openly.',
      },
    },
    {
      '@type': 'Question',
      name: 'Video calls with my family help but they also make me feel worse. Why?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'This is very common. Video calls create a strange duality — you can see the faces you miss, but you cannot be there. The calls can end in a bittersweet ache that is sometimes harder than silence. And often you are performing okayness on the call so as not to worry them, which adds its own exhaustion.',
      },
    },
    {
      '@type': 'Question',
      name: 'I came to the UK willingly. Is it okay to feel sad about being here?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. Choosing something does not mean you cannot grieve what you gave up to choose it. You can love your life in the UK and still ache for home. Both things are true at the same time. And both deserve to be acknowledged.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a session cost from the UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Your first 5 minutes are free. After that: £8 for 15 minutes, £12 for 30 minutes, £16 for 45 minutes.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'NRI Support UK', item: 'https://www.leanon.app/uk-nri-support' },
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

export default function UkNriSupportPage() {
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
          <a href="/">Home</a><span>›</span>NRI Support UK
        </div>

        <h1>You Made It Abroad.<br />But Some Days, You Just Miss Home.</h1>
        <p className="lead">
          The UK chapter was supposed to be the good one. And in many ways it is. But nobody told you about
          the particular ache of being an NRI — carrying the weight of distance, of expectation, of a life
          split between two countries that feel further apart than the miles suggest.
        </p>

        <a href="/browse" className="cta-hero">Talk to someone who gets it — first 5 min free →</a>

        <div className="card">
          <h2>What NRI life in the UK actually feels like</h2>
          <p>The parts people do not post on Instagram:</p>
          <ul className="checklist">
            <li>Missing your mum&apos;s cooking so much it physically hurts</li>
            <li>The guilt of not being there when a parent gets sick</li>
            <li>A Diwali that feels hollow because it is just you in a flat</li>
            <li>Doing great at work — and feeling completely empty about it</li>
            <li>The pressure to send money home, even when you are stretched</li>
            <li>Feeling like you cannot show vulnerability to anyone — because you are &ldquo;the one who made it&rdquo;</li>
          </ul>
          <p style={{ marginTop: '12px' }}>All of this deserves space. LeanOn gives you that space.</p>
        </div>

        <div className="night-box">
          <h2>📞 Video calls help — but they are not enough</h2>
          <p>Seeing your family&apos;s faces on a screen is a gift. But it does not replace being there.
            Sometimes after a call you feel worse — the bittersweet ache of proximity without presence.</p>
          <p>A LeanOn listener is not a replacement for home either. But they are a real human who will
            listen to exactly what it feels like to be where you are.</p>
          <a href="/browse" className="cta-night">Find a listener now →</a>
        </div>

        <div className="card">
          <h2>A listener who speaks your NRI language</h2>
          <p>LeanOn listeners are Indians — many are NRIs themselves or understand the NRI context deeply.
            You will not need to explain what it means to be the child your family sacrificed for, or the
            pressure of being abroad, or the loneliness that does not quite fit any word in English.</p>
          <p>They already know. And they are there to listen.</p>
        </div>

        <div className="card">
          <h2>Session pricing in GBP</h2>
          <ul className="checklist">
            <li>First 5 minutes — completely free</li>
            <li>15 minutes — £8</li>
            <li>30 minutes — £12</li>
            <li>45 minutes — £16</li>
          </ul>
        </div>

        <div className="cta">
          <h2>Talk to someone who already understands NRI life</h2>
          <p>Indian peer listeners. Private, anonymous, 24/7.</p>
          <a href="/browse" className="btn-white">Browse listeners →</a><br />
          <a href="/auth" className="btn-orange">Join free</a>
        </div>

        <div className="card">
          <h2>Frequently asked questions</h2>
          <div className="faq-item">
            <h3>What kind of support does LeanOn offer NRIs?</h3>
            <p>You can talk about anything — missing home, work stress, relationship pressures, loneliness,
              identity, or simply the unnamed heaviness that comes with being far from where you grew up.
              Sessions are private and judgment-free.</p>
          </div>
          <div className="faq-item">
            <h3>Why do so many NRIs in the UK struggle emotionally?</h3>
            <p>The NRI experience involves unique pressures: guilt of being away, the sacrifice that must be
              worth it, the loneliness of building a life in a country with different social codes. These are
              real burdens, rarely talked about openly.</p>
          </div>
          <div className="faq-item">
            <h3>Video calls help but also make me feel worse. Why?</h3>
            <p>Very common. Calls create a strange duality — you can see the faces you miss but cannot be there.
              And often you are performing okayness so as not to worry them, which adds its own exhaustion.</p>
          </div>
          <div className="faq-item">
            <h3>I chose to come to the UK. Is it okay to feel sad about being here?</h3>
            <p>Absolutely. Choosing something does not mean you cannot grieve what you gave up. You can love
              your life in the UK and still ache for home. Both things are true at the same time.</p>
          </div>
          <div className="faq-item">
            <h3>How much does a session cost?</h3>
            <p>First 5 minutes are free. Then £8 for 15 min, £12 for 30 min, £16 for 45 min.</p>
          </div>
        </div>

        <div className="related">
          <a href="/uk-loneliness">Loneliness support UK →</a>
          <a href="/london-loneliness">Lonely in London →</a>
          <a href="/british-indian-support">British Indian identity →</a>
          <a href="/uk-mental-health-south-asian">South Asian mental health →</a>
          <a href="/uk-talk-to-someone">Talk to someone UK →</a>
          <a href="/uk-empathy-listener">Empathy listener UK →</a>
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
