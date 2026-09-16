import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Need to Vent? Someone to Listen in Malaysia | LeanOn',
  description: 'Frustrated, stressed, nowhere to vent in Malaysia? LeanOn gives you a real Indian listener who will hear you out completely — in Tamil, Hindi, or any Indian language. First 5 min free.',
  keywords: [
    'need to vent malaysia', 'someone to vent to malaysia', 'rant to someone malaysia',
    'talk about stress malaysia', 'frustrated in malaysia expat', 'no one to talk to malaysia indian',
    'vent frustration malaysia', 'emotional release malaysia', 'someone to listen malaysia',
    'work stress malaysia indian', 'venting support malaysia tamil',
  ],
  alternates: {
    canonical: 'https://www.leanon.app/malaysia-rant',
    languages: { 'en-MY': 'https://www.leanon.app/malaysia-rant' },
  },
  openGraph: {
    title: 'Need to Vent? Someone to Listen in Malaysia — LeanOn',
    description: 'Work stress, frustration, nowhere to let it out in Malaysia. LeanOn gives you a real Indian listener — in Tamil, Hindi, or your language — who will hear you out completely.',
    url: 'https://www.leanon.app/malaysia-rant',
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
      name: 'Can I just vent to a LeanOn listener without wanting advice?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'That is exactly what LeanOn is built for. Listeners are trained to follow your lead — if you want to vent without advice, they will listen without redirecting. They will ask what you need at the start and then hold that space for you.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why do I feel like I cannot fully vent to the people around me in Malaysia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When the people you might vent to are connected to your workplace, community, or social circle, you self-censor. Everything you say could get back to someone. A LeanOn listener knows nobody in your life, has no stake in the outcome, and will never tell anyone what you said. That freedom makes honest venting possible.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I vent in Tamil or Hindi from Malaysia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. LeanOn listeners speak Tamil, Hindi, Telugu, Malayalam, Kannada, Bengali, and English. Many people find that frustration and stress pour out more naturally in their mother tongue — choose the listener who matches yours.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if my frustration is about work in Malaysia specifically?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Your listener will understand the context. Many LeanOn listeners understand the dynamics of working in Southeast Asia as an Indian — the cultural friction, the invisible barriers, the exhaustion of navigating a work culture that is different from what you grew up with.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does it cost to vent to a listener from Malaysia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'RM 45 for 15 minutes, RM 67 for 30 minutes, or RM 89 for 45 minutes. Your first session starts with 5 free minutes. No subscription, no ongoing commitment.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Someone to Listen Malaysia', item: 'https://www.leanon.app/malaysia-rant' },
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

export default function MalaysiaRantPage() {
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
          <a href="/">Home</a><span>›</span>Someone to Listen Malaysia
        </div>

        <h1>Fed Up and Nowhere to Put It?<br />Let It All Out Here.</h1>
        <p className="lead">
          Work that does not recognise you. A system that does not make sense. Being far from the
          people you can be completely honest with. The frustration builds — and there is nowhere
          safe to let it out. LeanOn gives you a real Indian listener who will hear every word without
          flinching.
        </p>

        <a href="/browse" className="cta-hero">Rant to a listener now — first 5 min free →</a>

        <div className="card">
          <h2>Things you probably need to say right now</h2>
          <ul className="checklist">
            <li>&ldquo;I&apos;m doing excellent work and nobody here sees it.&rdquo;</li>
            <li>&ldquo;I can&apos;t call home with this — they&apos;ll worry or they won&apos;t get it.&rdquo;</li>
            <li>&ldquo;The people here are fine but there&apos;s nobody I can be really real with.&rdquo;</li>
            <li>&ldquo;I&apos;m so tired of code-switching and translating myself all day.&rdquo;</li>
            <li>&ldquo;I just need to say all of this out loud without being judged.&rdquo;</li>
            <li>&ldquo;I don&apos;t want to be fixed. I just want to be heard.&rdquo;</li>
          </ul>
          <p style={{ marginTop: '12px' }}>A LeanOn listener will let you say every last bit of it.</p>
        </div>

        <div className="night-box">
          <h2>🔥 The commute home when the frustration is at its peak</h2>
          <p>You are on the LRT back from the office. The day was frustrating in a hundred small ways.
            You want to tell someone — but who? Your partner is dealing with their own day. Your friends
            back home will not quite get the specifics.</p>
          <p>LeanOn listeners are online now. Indian, trained, and ready to hear you out fully.</p>
          <a href="/browse" className="cta-night">Talk to a listener now →</a>
        </div>

        <div className="card">
          <h2>Why you need someone outside your circle</h2>
          <p>In Malaysia, your social and professional worlds often overlap. The Indian community here
            can be tight-knit in ways that make honesty complicated. When you cannot afford for your
            rant to travel, you end up swallowing it instead.</p>
          <p>A LeanOn listener is completely outside every circle. What you say stays between you two.
            Nobody gets back to you about it. You can say the real thing.</p>
        </div>

        <div className="card">
          <h2>Session pricing for Malaysia</h2>
          <p>Pay in Malaysian ringgit. First 5 minutes free — once per listener.</p>
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
          <p>No subscription. No commitment. Talk when you need to, stop when you feel lighter.</p>
        </div>

        <div className="cta">
          <h2>Get it all out — right now</h2>
          <p>Real Indian listeners. Tamil, Hindi, and more. No judgment. 24/7.</p>
          <a href="/browse" className="btn-white">Browse listeners →</a><br />
          <a href="/auth" className="btn-orange">Join free</a>
        </div>

        <div className="card">
          <h2>Frequently asked questions</h2>
          <div className="faq-item">
            <h3>Can I just vent without wanting advice?</h3>
            <p>That is exactly what LeanOn is built for. Listeners follow your lead — if you want to vent
              without advice, they will hold that space for you from start to finish.</p>
          </div>
          <div className="faq-item">
            <h3>Why can I not fully vent to the people around me in Malaysia?</h3>
            <p>When the people you might vent to are connected to your social circle or workplace, you
              self-censor. A LeanOn listener knows nobody in your life, has no stake in the outcome,
              and will never tell anyone. That freedom changes what you say.</p>
          </div>
          <div className="faq-item">
            <h3>Can I vent in Tamil or Hindi from Malaysia?</h3>
            <p>Yes. LeanOn listeners speak Tamil, Hindi, Telugu, Malayalam, Kannada, Bengali, and English.
              Frustration often pours out more naturally in your mother tongue.</p>
          </div>
          <div className="faq-item">
            <h3>What if my frustration is about work in Malaysia specifically?</h3>
            <p>Your listener will understand the context. Many understand the dynamics of working in
              Southeast Asia as an Indian — the cultural friction, invisible barriers, the exhaustion
              of navigating a work culture different from what you grew up with.</p>
          </div>
          <div className="faq-item">
            <h3>How much does it cost from Malaysia?</h3>
            <p>RM 45 for 15 minutes, RM 67 for 30 minutes, or RM 89 for 45 minutes. First 5 minutes
              of your first session are free.</p>
          </div>
        </div>

        <div className="related">
          <a href="/malaysia-loneliness">Loneliness support Malaysia →</a>
          <a href="/malaysia-empathy-listener">Empathy listener Malaysia →</a>
          <a href="/malaysia-talk-to-someone">Talk to someone Malaysia →</a>
          <a href="/singapore-rant">Need to rant Singapore →</a>
          <a href="/malaysia-relationship-advice">Relationship support Malaysia →</a>
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
