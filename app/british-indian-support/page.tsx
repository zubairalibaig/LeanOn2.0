import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Support for British Indians — The In-Between Feeling | LeanOn',
  description: 'Too Indian for Britain, too British for India. The in-between identity of British Indians is real and often lonely. LeanOn offers a space to talk about belonging, identity, and dual culture.',
  keywords: [
    'british indian identity support', 'british indian mental health', 'dual identity british indian',
    'british indian belonging', 'second generation indian uk', 'british desi identity',
    'between two cultures uk', 'british indian struggles', 'south asian british identity',
    'british indian emotional support',
  ],
  alternates: {
    canonical: 'https://www.leanon.app/british-indian-support',
    languages: { 'en-GB': 'https://www.leanon.app/british-indian-support' },
  },
  openGraph: {
    title: 'Support for British Indians — The In-Between Feeling',
    description: 'Too Indian for Britain, too British for India. LeanOn is a space to talk about dual identity, belonging, and the in-between life.',
    url: 'https://www.leanon.app/british-indian-support',
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
      name: 'What does the "in-between" identity feel like for British Indians?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It often feels like never quite fitting anywhere. With British friends, there are cultural references you do not share, family dynamics that seem alien to them, and expectations they simply do not carry. With family or Indian friends, there are choices you have made or values you hold that are questioned or dismissed. The result is a kind of double outsider status that is genuinely exhausting and rarely acknowledged.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it normal to feel conflicted about your Indian identity while living in the UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Completely normal. Identity is not a fixed thing, especially when you live across cultures. You may feel more British in some rooms and more Indian in others. You may feel guilty for enjoying things your parents disapprove of, or frustrated by Indian norms you did not choose but still navigate. This complexity is real and it deserves space.',
      },
    },
    {
      '@type': 'Question',
      name: 'My parents do not understand why I struggle with identity. How do I handle this?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'This is one of the most common tensions for British Indians. Your parents lived a different version of the immigrant experience — often one focused on survival and gratitude. Your experience of growing up between cultures is different, and they may not have the reference points to understand it. A peer listener who has lived this can offer a perspective your parents simply may not be able to.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I talk about racism and microaggressions on LeanOn?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Carrying racial microaggressions alone is exhausting — the constant low-level friction, the comments you are not sure how to respond to, the situations where you question whether what happened was actually what it looked like. Listeners are trained to hold space for this without minimising it or over-dramatising it.',
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
    { '@type': 'ListItem', position: 2, name: 'British Indian Support', item: 'https://www.leanon.app/british-indian-support' },
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

export default function BritishIndianSupportPage() {
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
          <a href="/">Home</a><span>›</span>British Indian Support
        </div>

        <h1>Too Indian for Britain.<br />Too British for India.<br />Where Do You Actually Belong?</h1>
        <p className="lead">
          The in-between life is a real thing. You hold two identities and neither feels fully yours. You
          translate yourself constantly — switching registers, explaining context, adjusting expectations.
          It is exhausting in a way that is hard to put into words, because most people around you do not
          have a reference point for it.
        </p>

        <a href="/browse" className="cta-hero">Talk to someone who understands — first 5 min free →</a>

        <div className="card">
          <h2>The in-between feeling has many faces</h2>
          <p>You might recognise yourself in some of these:</p>
          <ul className="checklist">
            <li>Changing how you speak, dress, or act depending on whether you are with British or Indian friends</li>
            <li>Feeling like you cannot fully be yourself in either world</li>
            <li>Being made to feel &ldquo;not Indian enough&rdquo; by relatives when you visit</li>
            <li>Experiencing microaggressions at work and not being sure what to do with the anger</li>
            <li>Family pressure to follow traditions that feel foreign to the life you have built here</li>
            <li>A quiet grief for an Indian identity you feel you are losing — and guilt about that</li>
          </ul>
        </div>

        <div className="night-box">
          <h2>🪞 You deserve a space that holds all of you</h2>
          <p>LeanOn listeners understand what it means to navigate dual identity. You do not need to
            choose a version of yourself for this conversation. You can be contradictory, confused,
            and honest — all at the same time.</p>
          <p>That is not just allowed here. It is expected.</p>
          <a href="/browse" className="cta-night">Find a listener now →</a>
        </div>

        <div className="card">
          <h2>Carrying microaggressions alone</h2>
          <p>A comment about your name. An assumption about your background. A joke that was &ldquo;not meant
            that way.&rdquo; The exhaustion of constantly assessing whether something was racist, and then the
            secondary exhaustion of deciding whether to say something.</p>
          <p>LeanOn listeners will not minimise it or over-dramatise it. They will simply hold space
            for what it actually cost you.</p>
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
          <h2>You do not have to translate yourself here</h2>
          <p>Indian listeners who understand British Indian life. Anonymous, private, 24/7.</p>
          <a href="/browse" className="btn-white">Browse listeners →</a><br />
          <a href="/auth" className="btn-orange">Join free</a>
        </div>

        <div className="card">
          <h2>Frequently asked questions</h2>
          <div className="faq-item">
            <h3>What does the &ldquo;in-between&rdquo; identity feel like for British Indians?</h3>
            <p>It often feels like never quite fitting anywhere. A kind of double outsider status that is
              genuinely exhausting and rarely acknowledged by people who have not lived it.</p>
          </div>
          <div className="faq-item">
            <h3>Is it normal to feel conflicted about my Indian identity while living in the UK?</h3>
            <p>Completely normal. You may feel more British in some rooms and more Indian in others.
              This complexity is real and it deserves space.</p>
          </div>
          <div className="faq-item">
            <h3>My parents do not understand why I struggle with identity. How do I handle this?</h3>
            <p>Your parents lived a different version of the immigrant experience. A peer listener who has
              lived between cultures can offer a perspective your parents simply may not be able to.</p>
          </div>
          <div className="faq-item">
            <h3>Can I talk about racism and microaggressions?</h3>
            <p>Yes. Carrying microaggressions alone is exhausting. Listeners are trained to hold space for
              this without minimising it or over-dramatising it.</p>
          </div>
          <div className="faq-item">
            <h3>How much does a session cost?</h3>
            <p>First 5 minutes are free. Then £8 for 15 min, £12 for 30 min, £16 for 45 min.</p>
          </div>
        </div>

        <div className="related">
          <a href="/uk-mental-health-south-asian">South Asian mental health →</a>
          <a href="/uk-nri-support">NRI support UK →</a>
          <a href="/uk-loneliness">Loneliness support UK →</a>
          <a href="/uk-relationship-advice">Relationship support UK →</a>
          <a href="/uk-empathy-listener">Empathy listener UK →</a>
          <a href="/london-loneliness">Lonely in London →</a>
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
