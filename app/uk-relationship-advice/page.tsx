import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Relationship Support for Indians in the UK | LeanOn',
  description: 'Cultural mismatch, family pressure, long-distance heartbreak, arranged marriage struggles — relationship stress for Indians in the UK is real. Talk to someone who understands.',
  keywords: [
    'relationship advice indians uk', 'south asian relationship support uk', 'arranged marriage uk',
    'relationship problems nri uk', 'indian couple problems uk', 'family pressure relationship uk',
    'long distance relationship india uk', 'cultural mismatch relationship uk', 'desi relationship support',
  ],
  alternates: {
    canonical: 'https://www.leanon.app/uk-relationship-advice',
    languages: { 'en-GB': 'https://www.leanon.app/uk-relationship-advice' },
  },
  openGraph: {
    title: 'Relationship Support for Indians in the UK — Talk to Someone Who Gets It',
    description: 'Cultural mismatch, family pressure, arranged marriage stress — relationship struggles for South Asians in the UK are unique. LeanOn listeners understand.',
    url: 'https://www.leanon.app/uk-relationship-advice',
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
      name: 'Why are relationships so complicated for Indians living in the UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Indians in the UK often navigate two very different relationship cultures simultaneously. British dating norms can clash with family expectations around arranged marriage, timelines, and commitment. Add to that the distance from family who want to weigh in, and the pressure to "have it all sorted", and it becomes genuinely complex in a way that neither your British friends nor your family back home may fully understand.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it okay to talk to a peer listener about relationship problems?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. Peer listeners are not therapists — they are not there to diagnose or fix your relationship. But they are trained to listen without judgment, help you process your feelings, and simply be present with you when you need to think out loud. Sometimes just saying it all out loud to someone who is not involved helps enormously.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if my family would never approve of who I am with?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'This is one of the most painful and common struggles for South Asians in the UK. The fear of disappointing your family, combined with a genuine connection with someone they might not accept, creates a weight that is hard to carry alone. LeanOn listeners will not tell you what to do — but they will make sure you do not have to carry that weight in silence.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I talk about an arranged marriage situation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Many LeanOn users navigate arranged marriage situations — from family pressure to get married, to conflict with a proposed match, to already being in an arranged marriage and feeling unseen. Listeners understand this context and will never impose a particular view on your choices.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a session cost from the UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Your first 5 minutes are free. After that, sessions are £8 for 15 minutes, £12 for 30 minutes, or £16 for 45 minutes. No subscription required.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Relationship Support UK', item: 'https://www.leanon.app/uk-relationship-advice' },
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

export default function UkRelationshipAdvicePage() {
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
          <a href="/">Home</a><span>›</span>Relationship Support UK
        </div>

        <h1>Love, Family Pressure, and Two Cultures Pulling in Different Directions.</h1>
        <p className="lead">
          Relationships are complicated anywhere. But as an Indian in the UK, there is a whole other layer —
          family expectations back home, cultural norms that do not match where you live, and a longing
          to be understood by both sides. LeanOn listeners have heard it all, and they will not judge any of it.
        </p>

        <a href="/browse" className="cta-hero">Talk to someone now — first 5 min free →</a>

        <div className="card">
          <h2>The relationship struggles no one talks about</h2>
          <p>South Asian relationships in the UK carry a unique kind of weight:</p>
          <ul className="checklist">
            <li>Hiding a relationship because your family would never approve</li>
            <li>Being pushed towards an arranged marriage you are not sure about</li>
            <li>A long-distance relationship with someone back in India slowly fraying</li>
            <li>Feeling like your partner — even a loving one — cannot understand the NRI pressure you carry</li>
            <li>Cultural mismatch: what you grew up believing love should look like vs. what you actually want</li>
            <li>Breakups that your family see as failure, adding guilt on top of grief</li>
          </ul>
          <p style={{ marginTop: '12px' }}>You do not need to navigate any of this alone.</p>
        </div>

        <div className="night-box">
          <h2>💬 You don&apos;t need advice. You need to be heard.</h2>
          <p>Sometimes the most helpful thing is not someone telling you what to do. It is someone
            listening without an agenda — who is not your mum, your friend who knows your ex,
            or someone with a strong opinion about what you should do next.</p>
          <p>LeanOn listeners are trained to give you space to think out loud without steering you anywhere.</p>
          <a href="/browse" className="cta-night">Find a listener now →</a>
        </div>

        <div className="card">
          <h2>This is not couples counselling — it is a real conversation</h2>
          <p>LeanOn listeners are peer-trained Indians who understand the South Asian relationship context.
            They are not therapists or relationship coaches. They are people who will sit with you,
            hear your side, and make you feel less alone in whatever you are working through.</p>
          <p>Sessions are private. No one from your community will know you spoke to anyone.</p>
        </div>

        <div className="card">
          <h2>Session pricing in GBP</h2>
          <ul className="checklist">
            <li>First 5 minutes — completely free</li>
            <li>15 minutes — £8</li>
            <li>30 minutes — £12</li>
            <li>45 minutes — £16</li>
          </ul>
          <p style={{ marginTop: '12px' }}>Pay only for the time you use. No subscription. No commitment.</p>
        </div>

        <div className="cta">
          <h2>Someone is ready to listen right now</h2>
          <p>Real humans. Indian listeners. No judgment, ever.</p>
          <a href="/browse" className="btn-white">Browse listeners →</a><br />
          <a href="/auth" className="btn-orange">Join free</a>
        </div>

        <div className="card">
          <h2>Frequently asked questions</h2>
          <div className="faq-item">
            <h3>Why are relationships so complicated for Indians in the UK?</h3>
            <p>Indians in the UK often navigate two very different relationship cultures at once. British dating
              norms can clash with family expectations around arranged marriage, timelines, and commitment —
              in a way that neither your British friends nor your family back home may fully understand.</p>
          </div>
          <div className="faq-item">
            <h3>Is it okay to talk to a peer listener about relationship problems?</h3>
            <p>Absolutely. Listeners are trained to listen without judgment and help you process your feelings.
              Sometimes just saying it all out loud to someone who is not involved helps enormously.</p>
          </div>
          <div className="faq-item">
            <h3>What if my family would never approve of who I am with?</h3>
            <p>This is one of the most painful struggles for South Asians in the UK. LeanOn listeners will not
              tell you what to do — but they will make sure you do not carry that weight in silence.</p>
          </div>
          <div className="faq-item">
            <h3>Can I talk about an arranged marriage situation?</h3>
            <p>Yes. Many users navigate arranged marriage situations. Listeners understand this context and will
              never impose a particular view on your choices.</p>
          </div>
          <div className="faq-item">
            <h3>How much does a session cost?</h3>
            <p>First 5 minutes are free. Then £8 for 15 min, £12 for 30 min, £16 for 45 min.</p>
          </div>
        </div>

        <div className="related">
          <a href="/uk-loneliness">Loneliness support UK →</a>
          <a href="/british-indian-support">British Indian identity →</a>
          <a href="/uk-nri-support">NRI support UK →</a>
          <a href="/uk-empathy-listener">Empathy listening UK →</a>
          <a href="/uk-talk-to-someone">Talk to someone UK →</a>
          <a href="/uk-mental-health-south-asian">South Asian mental health →</a>
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
