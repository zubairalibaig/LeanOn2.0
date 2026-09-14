import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Immigration Anxiety for Indians in Canada — Talk to Someone | LeanOn',
  description: 'PR stress, Express Entry uncertainty, PGWP worries, visa delays — immigration anxiety is real and heavy. LeanOn connects you with someone who will actually listen.',
  keywords: [
    'immigration stress indians canada', 'pr anxiety canada', 'express entry stress', 'pgwp anxiety canada',
    'visa stress india canada', 'immigration mental health canada', 'immigration anxiety support canada',
    'pr waiting canada stress', 'canadian immigration depression', 'nri visa worry canada',
  ],
  alternates: {
    canonical: 'https://www.leanon.app/canada-immigration-stress',
    languages: { 'en-CA': 'https://www.leanon.app/canada-immigration-stress' },
  },
  openGraph: {
    title: 'Immigration Anxiety for Indians in Canada | LeanOn',
    description: 'Waiting for PR. Watching Express Entry rounds. Wondering if the sacrifice is worth it. LeanOn listeners are here when the uncertainty gets too heavy to carry alone.',
    url: 'https://www.leanon.app/canada-immigration-stress',
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
      name: 'Is it normal to feel anxious about PR and immigration status?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Completely normal — and far more common than people admit. Your entire ability to stay in the country you have built your life in rests on a process you cannot fully control. The anxiety that produces is not irrational. It is a rational response to a genuinely stressful situation.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can talking to someone help with immigration stress?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Talking does not change your immigration file — but it changes how you carry the weight of it. Being heard by someone who takes your stress seriously, without minimising it, can significantly reduce the anxiety of waiting. You feel less alone in it, and that matters.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can a LeanOn listener help me with immigration paperwork or legal questions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LeanOn listeners are not immigration lawyers or consultants and cannot advise you on your immigration case. They are trained peer listeners — people who will hear your fears, frustrations, and uncertainty without judgment. For legal questions, please consult a registered RCIC or immigration lawyer.',
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
      name: 'What if I want to talk about leaving Canada — giving up on the dream?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'That is a completely valid thing to talk about. Many people reach a point where they question whether all of this is worth it. A LeanOn listener will not push you toward any particular decision — they will just listen and help you think through what you actually feel.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Immigration Stress Canada', item: 'https://www.leanon.app/canada-immigration-stress' },
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

export default function CanadaImmigrationStressPage() {
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
          <a href="/">Home</a><span>›</span>Immigration Stress Canada
        </div>

        <h1>Waiting for PR Is Not Just Stressful.<br />It Is Consuming.</h1>
        <p className="lead">
          Refreshing the IRCC portal. Watching Express Entry CRS scores. Wondering if your PGWP will
          outlast the wait. Immigration anxiety is not a weakness — it is what happens when your entire
          future rests on a process you cannot fully control. You are allowed to find that hard.
        </p>

        <a href="/browse" className="cta-hero">Talk to someone now — first 5 min free →</a>

        <div className="card">
          <h2>What immigration stress actually feels like</h2>
          <ul className="checklist">
            <li>Checking the IRCC portal more times a day than you want to admit</li>
            <li>Every Express Entry draw that passes without your name in it</li>
            <li>Calculating how many months left on your permit, over and over</li>
            <li>Not making big life decisions — apartment, car, relationship — because the future is uncertain</li>
            <li>Telling people back home &quot;it is going well&quot; when the anxiety never really stops</li>
            <li>The exhaustion of being strong for everyone while carrying all of this alone</li>
          </ul>
        </div>

        <div className="night-box">
          <h2>📋 Your stress is valid. Your situation is genuinely hard.</h2>
          <p>Canadian immigration is not fast, not transparent, and not gentle. It asks you to put your
            life on hold for years, sometimes, while the system moves at its own pace. The mental toll
            of that is real.</p>
          <p>Talking about it — to someone who will not minimise it or give you generic advice — can make
            the wait more bearable. LeanOn listeners have heard this story before. They understand.</p>
          <a href="/browse" className="cta-night">Find a listener online now →</a>
        </div>

        <div className="card">
          <h2>The weight nobody talks about</h2>
          <p>You left India for a reason. You sacrificed — relationships, comfort, proximity to family.
            And now you are in a holding pattern, not fully settled, not fully free, not fully sure
            it was the right call.</p>
          <p>That ambivalence is painful and it is also completely understandable. LeanOn is the space
            where you can say it — the doubt, the fear, the grief — without it affecting your visa
            application or your reputation back home.</p>
        </div>

        <div className="card">
          <h2>Session details</h2>
          <ul className="checklist">
            <li>First 5 minutes completely free — no commitment</li>
            <li>CA$14 for 15 min &nbsp;·&nbsp; CA$21 for 30 min &nbsp;·&nbsp; CA$28 for 45 min</li>
            <li>Anonymous — nothing you say goes anywhere</li>
            <li>Real human listeners, not AI or bots</li>
            <li>Available any time — including nights and weekends</li>
          </ul>
        </div>

        <div className="cta">
          <h2>Someone is ready to listen right now</h2>
          <p>The process is out of your hands. The conversation is not.</p>
          <a href="/browse" className="btn-white">Browse listeners →</a><br />
          <a href="/auth" className="btn-orange">Join free</a>
        </div>

        <div className="card">
          <h2>Frequently asked questions</h2>
          <div className="faq-item">
            <h3>Is it normal to feel anxious about PR and immigration status?</h3>
            <p>Completely normal. Your ability to stay in the country you have built your life in rests on
              a process you cannot fully control. That anxiety is rational, not a weakness.</p>
          </div>
          <div className="faq-item">
            <h3>How can talking to someone help with immigration stress?</h3>
            <p>Talking does not change your file — but it changes how you carry the weight of it. Being
              heard by someone who takes your stress seriously, without minimising it, reduces the anxiety
              of waiting significantly.</p>
          </div>
          <div className="faq-item">
            <h3>Can a LeanOn listener help with immigration paperwork?</h3>
            <p>No — LeanOn listeners are trained peer listeners, not immigration consultants or lawyers.
              For legal questions, please consult a registered RCIC or immigration lawyer.</p>
          </div>
          <div className="faq-item">
            <h3>How much does a session cost?</h3>
            <p>First 5 minutes free. Then CA$14 for 15 min, CA$21 for 30 min, CA$28 for 45 min.</p>
          </div>
          <div className="faq-item">
            <h3>What if I want to talk about leaving Canada?</h3>
            <p>That is a valid thing to talk about. A LeanOn listener will not push you toward any
              particular decision — they will just hear what you actually feel.</p>
          </div>
        </div>

        <div className="related">
          <a href="/canada-loneliness">Loneliness in Canada →</a>
          <a href="/canada-nri-support">NRI emotional support →</a>
          <a href="/canada-rant-to-someone">Need to rant? →</a>
          <a href="/canada-talk-to-someone">Someone to talk to →</a>
          <a href="/toronto-loneliness">Lonely in Toronto →</a>
          <a href="/desi-canada-support">Desi community support →</a>
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
