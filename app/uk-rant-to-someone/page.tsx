import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Need to Rant? Talk to Someone in the UK — No Judgment | LeanOn',
  description: 'Work stress, microaggressions, NHS exhaustion, finance burnout — sometimes you just need to let it all out. LeanOn gives you a real human to rant to, 24/7, no judgment.',
  keywords: [
    'rant to someone uk', 'vent to someone uk', 'need to rant uk', 'talk about work stress uk',
    'venting support uk indians', 'microaggressions uk talk', 'nhs work stress talk',
    'uk work burnout support', 'south asian vent support', 'someone to listen uk',
  ],
  alternates: {
    canonical: 'https://www.leanon.app/uk-rant-to-someone',
    languages: { 'en-GB': 'https://www.leanon.app/uk-rant-to-someone' },
  },
  openGraph: {
    title: 'Need to Rant? Someone in the UK Will Listen — No Judgment',
    description: 'Work stress, microaggressions, burnout — sometimes you just need to let it out. LeanOn peer listeners are available 24/7.',
    url: 'https://www.leanon.app/uk-rant-to-someone',
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
      name: 'Is it okay to just rant to a LeanOn listener?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, completely. You do not need a structured problem or a neat question. You can just start talking — let it all out, as messy and frustrated as it actually is. Listeners are trained to receive that without shutting it down, steering you, or making you feel silly for being upset.',
      },
    },
    {
      '@type': 'Question',
      name: 'I want to vent but I do not want advice. Is that okay?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. You can tell your listener upfront: "I just need to vent — I am not looking for solutions right now." Good listeners will follow your lead entirely. Their job is to hold space for you, not to fix you.',
      },
    },
    {
      '@type': 'Question',
      name: 'What kind of things do people rant about on LeanOn?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Everything. A manager who keeps giving credit to someone else. A microaggression at work that nobody else noticed. The exhaustion of working in the NHS while holding everything together. A commute that broke you. A comment from a relative that stung more than it should have. No topic is too small or too big.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why might ranting to a stranger be better than to a friend?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Friends can be wonderful, but they also have history with you, opinions, and their own limits. A stranger who is trained to listen will not get bored, will not try to one-up your problems, will not tell your other friends, and will not secretly judge you. That kind of safety makes it easier to say what you actually mean.',
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
    { '@type': 'ListItem', position: 2, name: 'Rant to Someone UK', item: 'https://www.leanon.app/uk-rant-to-someone' },
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

export default function UkRantToSomeonePage() {
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
          <a href="/">Home</a><span>›</span>Rant to Someone UK
        </div>

        <h1>You Don&apos;t Need a Plan.<br />You Just Need to Let It Out.</h1>
        <p className="lead">
          The work thing. The comment from that colleague. The microaggression you swallowed because it was
          easier. The exhaustion of doing everything right and still feeling unseen. Sometimes you just
          need to say it all out loud — to someone who will actually listen.
        </p>

        <a href="/browse" className="cta-hero">Rant to someone now — first 5 min free →</a>

        <div className="card">
          <h2>What are you carrying right now?</h2>
          <p>You might be here because of one of these — or all of them:</p>
          <ul className="checklist">
            <li>A colleague got the credit for your idea. Again.</li>
            <li>Someone at work made a comment about your accent or your food. You smiled. You are furious.</li>
            <li>You work in the NHS and you are running on empty. There is no one to say that to.</li>
            <li>Finance or tech burnout — you are good at your job and you hate it</li>
            <li>A family member called from India and made you feel like you are never doing enough</li>
            <li>You held it together all day and now you need somewhere for it to go</li>
          </ul>
          <p style={{ marginTop: '12px' }}>All of it is valid. All of it deserves to be heard.</p>
        </div>

        <div className="night-box">
          <h2>🗣️ Just start talking. No structure needed.</h2>
          <p>You do not need to explain yourself neatly. You do not need to justify why you are upset.
            LeanOn listeners will follow you wherever the conversation goes — whether that is anger,
            tears, or just exhaustion you cannot quite name.</p>
          <p>No judgment. No advice unless you want it. No one in your life will know.</p>
          <a href="/browse" className="cta-night">Find a listener right now →</a>
        </div>

        <div className="card">
          <h2>Why venting to a stranger actually works</h2>
          <p>Your friends love you — but they also have opinions, histories, and limits. A LeanOn listener
            is different. They are not involved in your life. They will not get bored or one-up your problems.
            They will not tell anyone. And they will not secretly judge you for feeling the way you feel.</p>
          <p>That kind of safety makes it possible to say things you have been holding in for weeks.</p>
        </div>

        <div className="card">
          <h2>Session pricing in GBP</h2>
          <ul className="checklist">
            <li>First 5 minutes — completely free</li>
            <li>15 minutes — £8</li>
            <li>30 minutes — £12</li>
            <li>45 minutes — £16</li>
          </ul>
          <p style={{ marginTop: '12px' }}>No subscription. Pay only for the time you use.</p>
        </div>

        <div className="cta">
          <h2>Say what you actually mean, to someone who will actually hear it</h2>
          <p>Real Indian listeners. 24/7. No judgment, ever.</p>
          <a href="/browse" className="btn-white">Browse listeners →</a><br />
          <a href="/auth" className="btn-orange">Join free</a>
        </div>

        <div className="card">
          <h2>Frequently asked questions</h2>
          <div className="faq-item">
            <h3>Is it okay to just rant to a LeanOn listener?</h3>
            <p>Yes, completely. You can just start talking — let it all out, as messy and frustrated as it
              actually is. Listeners are trained to receive that without shutting it down or making you feel
              silly for being upset.</p>
          </div>
          <div className="faq-item">
            <h3>I want to vent but I do not want advice. Is that okay?</h3>
            <p>Absolutely. Tell your listener upfront: "I just need to vent." Good listeners will follow your
              lead entirely. Their job is to hold space for you, not to fix you.</p>
          </div>
          <div className="faq-item">
            <h3>What kind of things do people rant about?</h3>
            <p>Everything. A manager who keeps giving credit to someone else. A microaggression nobody noticed.
              NHS exhaustion. A comment from a relative. No topic is too small or too big.</p>
          </div>
          <div className="faq-item">
            <h3>Why might ranting to a stranger be better than to a friend?</h3>
            <p>A stranger who is trained to listen will not get bored, will not try to one-up your problems,
              will not tell your other friends, and will not secretly judge you. That kind of safety makes it
              easier to say what you actually mean.</p>
          </div>
          <div className="faq-item">
            <h3>How much does a session cost?</h3>
            <p>First 5 minutes are free. Then £8 for 15 min, £12 for 30 min, £16 for 45 min.</p>
          </div>
        </div>

        <div className="related">
          <a href="/uk-talk-to-someone">Someone to talk to UK →</a>
          <a href="/uk-empathy-listener">Empathy listener UK →</a>
          <a href="/uk-loneliness">Loneliness support UK →</a>
          <a href="/uk-mental-health-south-asian">South Asian mental health →</a>
          <a href="/uk-nri-support">NRI support UK →</a>
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
