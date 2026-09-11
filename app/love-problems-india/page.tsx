import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Love Problem? Talk to a Real Person Who Actually Listens | LeanOn India',
  description: 'Dealing with a love problem? Talk anonymously to a real peer listener in India. No astrology, no judgment. ₹160/session. First 5 min free.',
  keywords: [
    'love problem solution india', 'love problems help online india', 'relationship problem solution india',
    'love issue talk to someone india', 'love problem solution online india', 'love problem advice india',
    'talk to someone about love problem india', 'love relationship problem india', 'love problem help india',
  ],
  alternates: {
    canonical: 'https://www.leanon.app/love-problems-india',
    languages: { 'en-IN': 'https://www.leanon.app/love-problems-india' },
  },
  openGraph: {
    title: 'Love Problem? Talk to a Real Person Who Actually Listens | LeanOn India',
    description: 'Dealing with a love problem? Talk anonymously to a real peer listener in India. No astrology, no judgment. ₹160/session. First 5 min free.',
    url: 'https://www.leanon.app/love-problems-india',
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
      name: 'Can I talk about love problems anonymously?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — completely. LeanOn does not ask for your name, your partner\'s name, or any identifying details. The listener knows nothing about you except what you choose to share in the session itself. Your conversation is private and never shared.',
      },
    },
    {
      '@type': 'Question',
      name: 'What will the listener tell me to do about my love problem?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nothing — and that is the point. LeanOn listeners are not coaches or advisors. They are trained to ask open questions and help you hear your own thoughts more clearly. By the end of the session, the clarity you feel will have come from you, not from someone else\'s opinion about your relationship.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is peer support better than astrology for relationship problems?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Astrology can feel comforting, but it cannot help you process what you are actually feeling about your relationship, or help you decide what you want to do. A peer listener can. Talking your situation through with a real, non-judgmental person helps you see your own feelings and options more clearly — something a prediction cannot do.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a love problem session cost on LeanOn?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The first 5 minutes of your first session are free. After that, sessions are ₹160 for 15 minutes, ₹300 for 30 minutes, or ₹430 for 45 minutes. There is a flat ₹10 platform fee per paid session. No subscription required.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Love Problems India', item: 'https://www.leanon.app/love-problems-india' },
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
  .pill-list{display:flex;flex-wrap:wrap;gap:10px;margin-top:12px;}
  .pill{background:var(--light);border:1px solid var(--border);border-radius:50px;padding:7px 16px;font-size:13px;font-weight:700;color:var(--navy);}
  .why-list{list-style:none;padding:0;margin-top:8px;}
  .why-list li{display:flex;gap:12px;align-items:flex-start;margin-bottom:16px;}
  .why-list li:last-child{margin-bottom:0;}
  .why-icon{font-size:20px;flex-shrink:0;margin-top:2px;}
  .why-list li div strong{display:block;color:var(--navy);font-weight:800;font-size:15px;margin-bottom:4px;}
  .why-list li div p{font-size:14px;color:#3A6070;line-height:1.68;margin:0;}
  .steps{counter-reset:steps;list-style:none;}
  .steps li{counter-increment:steps;display:flex;gap:14px;margin-bottom:18px;align-items:flex-start;}
  .steps li::before{content:counter(steps);background:var(--teal);color:white;font-weight:900;font-size:14px;min-width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:2px;}
  .steps li p{font-size:15px;color:#3A6070;line-height:1.68;}
  .steps li strong{display:block;color:var(--navy);font-weight:800;margin-bottom:4px;}
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

export default function LoveProblemsIndiaPage() {
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
          <a href="/">Home</a><span>›</span>Love Problems India
        </div>

        <h1>Love Problems Don&apos;t Need a Prediction — They Need Someone to Talk To</h1>
        <p className="lead">
          You know that moment: you&apos;re confused about your relationship, your mind keeps going in
          circles, and you can&apos;t talk to your friends because they know both of you, or to your
          family because they&apos;ll worry. Maybe you&apos;ve even looked up an astrologer. But deep down,
          what you actually need isn&apos;t a prediction — it&apos;s a calm, non-judgmental person who
          will listen while you think it through out loud.
        </p>

        <a href="/auth" className="cta-hero">Talk it through — first 5 min free →</a>

        <div className="card">
          <h2>What kind of love problems people talk about</h2>
          <p>There&apos;s no love problem too small or too complicated to bring here.</p>
          <div className="pill-list">
            <span className="pill">Unrequited love</span>
            <span className="pill">Partner who pulls away</span>
            <span className="pill">Long-distance strain</span>
            <span className="pill">Marriage pressure from family</span>
            <span className="pill">Arranged vs love marriage tension</span>
            <span className="pill">Ex coming back into contact</span>
            <span className="pill">Trust issues after cheating</span>
            <span className="pill">Feeling trapped in a relationship</span>
            <span className="pill">Different values or future goals</span>
            <span className="pill">Afraid to commit</span>
          </div>
        </div>

        <div className="card">
          <h2>Why peer support works better than astrology for love problems</h2>
          <ul className="why-list">
            <li>
              <span className="why-icon">🔮</span>
              <div>
                <strong>No predictions — the future isn&apos;t written</strong>
                <p>An astrologer can tell you what the stars suggest. But your relationship is made up of
                  two real people making real choices. No chart can tell you what you are feeling, what
                  you need, or what decision you want to make.</p>
              </div>
            </li>
            <li>
              <span className="why-icon">💡</span>
              <div>
                <strong>Just clarity — talking helps you see what you already know</strong>
                <p>Most people already know somewhere inside what they feel and what they want. Saying
                  it out loud to a calm, present listener is often all it takes to hear yourself think.
                  Your listener won&apos;t tell you what to do — they&apos;ll help you figure it out yourself.</p>
              </div>
            </li>
            <li>
              <span className="why-icon">🔒</span>
              <div>
                <strong>Actually private — no family, no friends involved</strong>
                <p>LeanOn listeners have no connection to your life. They don&apos;t know your partner,
                  your family, or your friends. Nothing you say will circulate back to anyone. That
                  makes it safe to be completely honest — maybe for the first time.</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="card">
          <h2>How a session works</h2>
          <ul className="steps">
            <li>
              <div>
                <strong>Find a listener with a relationship specialty</strong>
                <p>Browse listeners who are online right now. Each has a short bio — pick someone whose
                  approach feels right for what you&apos;re going through.</p>
              </div>
            </li>
            <li>
              <div>
                <strong>Talk it through</strong>
                <p>Start with whatever is weighing on you most. Your listener will follow your lead,
                  ask gentle questions, and make sure you feel heard at every step — not rushed,
                  not judged, not pushed toward any particular outcome.</p>
              </div>
            </li>
            <li>
              <div>
                <strong>Feel clearer</strong>
                <p>Sessions rarely solve a love problem — but they almost always leave you feeling
                  less tangled about it. Lighter. Able to see the situation more honestly.</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="card">
          <h2>Frequently asked questions</h2>
          <div className="faq-item">
            <h3>Can I talk about love problems anonymously?</h3>
            <p>Yes — completely. LeanOn does not ask for your name, your partner&apos;s name, or any
              identifying details. The listener knows nothing about you except what you choose to
              share in the session. Your conversation is private and never shared.</p>
          </div>
          <div className="faq-item">
            <h3>What will the listener tell me to do about my love problem?</h3>
            <p>Nothing — and that is the point. LeanOn listeners are not coaches or advisors. They
              are trained to ask open questions and help you hear your own thoughts more clearly.
              By the end of the session, the clarity you feel will have come from you, not from
              someone else&apos;s opinion about your relationship.</p>
          </div>
          <div className="faq-item">
            <h3>Is peer support better than astrology for relationship problems?</h3>
            <p>Astrology can feel comforting, but it cannot help you process what you are actually
              feeling, or help you decide what you want to do. Talking your situation through with
              a real, non-judgmental person helps you see your own feelings and options more
              clearly — something a prediction simply cannot do.</p>
          </div>
          <div className="faq-item">
            <h3>How much does a session cost?</h3>
            <p>The first 5 minutes are free. After that: ₹160 for 15 min, ₹300 for 30 min, ₹430
              for 45 min. Flat ₹10 platform fee per paid session. No subscription required.</p>
          </div>
        </div>

        <div className="cta">
          <h2>Ready to talk it through?</h2>
          <p>Anonymous, no judgment, available right now.</p>
          <a href="/auth" className="btn-white">Talk it through — first 5 min free →</a><br />
          <a href="/browse" className="btn-orange">Browse listeners →</a>
        </div>

        <div className="related">
          <a href="/relationship-advice-online-india">Relationship advice online →</a>
          <a href="/astrotalk-alternative">AstroTalk alternative →</a>
          <a href="/support/relationship-anxiety">Relationship anxiety support →</a>
          <a href="/support/arranged-marriage-stress">Arranged marriage stress →</a>
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
