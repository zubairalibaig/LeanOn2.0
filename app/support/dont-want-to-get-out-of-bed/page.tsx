import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Don\'t Want to Get Out of Bed — When Every Day Feels Like Too Much | LeanOn',
  description: 'When getting out of bed feels impossible — not laziness, not weakness — it is the weight of everything you are carrying. Talk to someone who understands what that morning dread feels like.',
  keywords: [
    'don\'t want to get out of bed India', 'can\'t get out of bed depression India',
    'morning dread India', 'no motivation to get up India', 'bed feels safe India',
    'too exhausted to face the day India', 'dreading mornings India', 'depression mornings India',
    'functional depression India', 'hidden depression India', 'going through the motions India',
    'exhausted but can\'t sleep India', 'heavy body morning India', 'waking up dreading day India',
  ],
  alternates: { canonical: 'https://www.leanon.app/support/dont-want-to-get-out-of-bed', languages: { 'en-IN': 'https://www.leanon.app/support/dont-want-to-get-out-of-bed' } },
  openGraph: {
    title: 'Don\'t Want to Get Out of Bed | LeanOn',
    description: 'Not laziness. Not weakness. The weight of everything you are carrying. Talk to someone who understands.',
    url: 'https://www.leanon.app/support/dont-want-to-get-out-of-bed',
    siteName: 'LeanOn',
    type: 'article',
    images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn — Morning Dread Support' }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is not wanting to get out of bed a sign of depression?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It can be — but it is not always clinical depression. It can also be chronic stress, burnout, emotional exhaustion, or the cumulative weight of too many hard months. When getting out of bed feels like lifting something heavy every single day, that is your mind and body telling you something needs attention, not that you are failing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why do I dread mornings even when nothing specific is wrong?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Because dread is not always about a specific thing. It can be the general accumulation — the job you are exhausted by, the relationship that is draining you, the pressure that never lifts, the sense that you are running on empty. When everything feels heavy, mornings feel like the moment you remember the weight.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can talking to someone help when I can\'t get out of bed?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Often, yes — and more than you might expect. Sometimes the hardest part of morning dread is the isolation of it. You lie there, everyone else seems to be getting on with their day, and you feel alone with the weight. Talking to a real person who understands — not to fix you, just to listen — can ease that isolation enough to make moving feel possible.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is LeanOn peer support or therapy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LeanOn is peer support — not therapy. Our listeners are trained real people with lived experience, available 24/7 from ₹99. They listen without judgment. For clinical treatment, a therapist or psychiatrist is the right path. For being heard and feeling less alone right now, LeanOn is here.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if I feel like this every morning?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If morning dread has become daily, that is important information — not about your character, but about what you are carrying. Talking to someone regularly, even a peer listener, can help you start to understand what is underneath it. If it is affecting your ability to function, consider speaking to a doctor or mental health professional as well.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Support', item: 'https://www.leanon.app/browse' },
    { '@type': 'ListItem', position: 3, name: 'Don\'t Want to Get Out of Bed', item: 'https://www.leanon.app/support/dont-want-to-get-out-of-bed' },
  ],
}

const S = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
  :root{--navy:#0F4867;--teal:#1A8FA0;--orange:#FF9933;--gray:#5A7A8A;--border:#D5EEF6;--light:#F0F8FC;}
  body{font-family:'Nunito',sans-serif;color:var(--navy);-webkit-font-smoothing:antialiased;
    background:radial-gradient(ellipse 90% 55% at 0% 0%,#C2E4F2 0%,#DAEEF8 22%,#FFFFFF 58%) fixed;}
  a{text-decoration:none;color:inherit;}
  .nav{padding:0 28px;height:72px;display:flex;align-items:center;justify-content:space-between;max-width:900px;margin:0 auto;}
  .nav-logo{height:56px;width:auto;}
  .btn-nav{background:var(--teal);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:14px;padding:10px 22px;border-radius:50px;border:none;cursor:pointer;}
  .page{max-width:760px;margin:0 auto;padding:16px 24px 100px;}
  .breadcrumb{display:flex;gap:6px;align-items:center;font-size:13px;font-weight:600;color:var(--gray);margin-bottom:32px;flex-wrap:wrap;}
  .breadcrumb span{color:var(--border);}
  .breadcrumb a:hover{color:var(--teal);}
  .hero-tag{font-size:12px;font-weight:800;color:var(--teal);text-transform:uppercase;letter-spacing:0.1em;margin-bottom:12px;}
  h1{font-size:clamp(26px,5vw,40px);font-weight:900;color:var(--navy);line-height:1.15;margin-bottom:18px;}
  h1 em{color:var(--orange);font-style:normal;}
  .lead{font-size:17px;color:var(--gray);line-height:1.78;font-weight:500;margin-bottom:36px;max-width:620px;}
  h2{font-size:20px;font-weight:800;color:var(--navy);margin-top:36px;margin-bottom:14px;}
  p{font-size:15px;color:#3A6070;line-height:1.8;font-weight:500;margin-bottom:16px;}
  .card{background:white;border-radius:20px;padding:28px 32px;border:1.5px solid var(--border);margin-bottom:20px;}
  .card-label{font-size:11px;font-weight:800;color:var(--teal);text-transform:uppercase;letter-spacing:0.1em;margin-bottom:8px;}
  .card h3{font-size:17px;font-weight:800;color:var(--navy);margin-bottom:8px;}
  .card p{font-size:14px;margin-bottom:0;}
  .steps{display:grid;gap:12px;margin:20px 0;}
  .step{display:flex;gap:14px;align-items:flex-start;background:white;border-radius:16px;padding:18px 20px;border:1.5px solid var(--border);}
  .step-num{background:var(--teal);color:white;font-weight:900;font-size:13px;width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0;}
  .step-body h4{font-size:14px;font-weight:800;color:var(--navy);margin-bottom:4px;}
  .step-body p{font-size:13px;color:var(--gray);margin:0;}
  .faq{margin-top:40px;}
  .faq-item{border-bottom:1.5px solid var(--border);padding:18px 0;}
  .faq-item:last-child{border-bottom:none;}
  .faq-q{font-size:15px;font-weight:800;color:var(--navy);margin-bottom:8px;}
  .faq-a{font-size:14px;color:#3A6070;line-height:1.72;font-weight:500;}
  .cta-card{background:var(--navy);border-radius:24px;padding:40px 32px;text-align:center;margin-top:48px;}
  .cta-card h2{font-size:22px;font-weight:900;color:white;margin-bottom:12px;}
  .cta-card p{font-size:14px;color:rgba(201,231,244,0.85);font-weight:500;margin-bottom:24px;line-height:1.7;}
  .cta-btns{display:flex;gap:12px;justify-content:center;flex-wrap:wrap;}
  .btn-primary{background:var(--orange);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:15px;padding:14px 28px;border-radius:50px;border:none;cursor:pointer;box-shadow:0 4px 20px rgba(255,153,51,0.35);}
  .btn-secondary{background:rgba(255,255,255,0.12);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:14px;padding:13px 24px;border-radius:50px;border:1.5px solid rgba(255,255,255,0.3);cursor:pointer;}
  .crisis{background:#FFF8F0;border-left:4px solid var(--orange);border-radius:0 12px 12px 0;padding:16px 20px;margin:32px 0;font-size:13px;color:var(--navy);line-height:1.7;}
  .crisis strong{display:block;margin-bottom:4px;}
  .crisis a{color:var(--teal);font-weight:700;}
`

export default function DontWantToGetOutOfBedPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>

      <nav className="nav">
        <a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a>
        <a href="/browse"><button className="btn-nav">Talk to someone</button></a>
      </nav>

      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a><span>›</span>
          <a href="/browse">Support</a><span>›</span>
          <span style={{color:'var(--navy)'}}>Don't Want to Get Out of Bed</span>
        </nav>

        <p className="hero-tag">Morning Dread · Functional Depression · Exhaustion</p>
        <h1>You Woke Up. That Was Already <em>Hard Enough.</em></h1>
        <p className="lead">
          There is a kind of tired that sleep does not fix. A dread that settles before you even open your eyes.
          Where the thought of facing the day — not anything specific, just the day — feels heavier than you can carry.
          This is not laziness. This is not weakness. This is what it feels like when you have been running on empty for too long.
        </p>

        <div className="crisis">
          <strong>If you are having thoughts of self-harm or suicide</strong>
          NIMHANS helpline: <a href="tel:08046110007">080-46110007</a> · Tele-MANAS: <a href="tel:14416">14416</a> (free, 24/7)
        </div>

        <h2>What Morning Dread Actually Feels Like</h2>
        <p>
          You open your eyes and the first thing is not a thought — it is a weight. A pre-thought heaviness.
          The alarm goes off and instead of getting up, you lie there negotiating with yourself. Five more minutes.
          Then five more. Then the mental calculation: what is the absolute minimum I have to do today?
        </p>
        <p>
          To everyone outside, you are "fine." You make it to work, to class, to whatever you have to do.
          You answer messages. You function. But inside there is this steady low hum of exhaustion,
          this sense of just getting through it rather than living it.
        </p>
        <p>
          In India this particular experience is hard to name. We do not have good language for it.
          It is not dramatic enough to call depression. It is not acute enough to call a crisis.
          It just is — this grey weight that greets you every morning.
        </p>

        <h2>Why Every Morning Feels Like This</h2>
        <div className="steps">
          <div className="step">
            <div className="step-num">1</div>
            <div className="step-body">
              <h4>Accumulated pressure with no release</h4>
              <p>Career pressure, family expectations, financial worry, relationship stress — each one manageable alone, but together they compound. When there is no outlet, the body starts dreading the next round before it starts.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-num">2</div>
            <div className="step-body">
              <h4>Disconnection from what you are doing</h4>
              <p>When your job, your role, your daily life does not feel like yours — when you are doing what was expected rather than what you chose — mornings become a reminder of that gap.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-num">3</div>
            <div className="step-body">
              <h4>Unprocessed grief or loss</h4>
              <p>Something happened — a year ago, five years ago — that was never really dealt with. The body holds it. Morning, when the defences are down, is when it surfaces.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-num">4</div>
            <div className="step-body">
              <h4>Chronic low-grade depression</h4>
              <p>Not the dramatic kind that people recognise. The functional kind — where you get through the day but feel nothing, want nothing, look forward to nothing. This has a name: dysthymia. It is real and it is treatable.</p>
            </div>
          </div>
        </div>

        <h2>The Isolation Makes It Worse</h2>
        <p>
          One of the hardest things about morning dread is the loneliness of it.
          Everyone else seems to be waking up and getting on with things.
          You scroll your phone and see people going to the gym, making chai, posting their good morning.
          And you are lying there wondering what is wrong with you.
        </p>
        <p>
          Nothing is wrong with you. But you are probably carrying something alone that was never meant to be carried alone.
        </p>

        <div className="card">
          <div className="card-label">What helps</div>
          <h3>Being heard before being advised</h3>
          <p>
            The instinct of everyone around you — family, friends, managers — is to tell you what to do.
            Get some exercise. Make a routine. Try gratitude journaling. These might eventually help.
            But first, someone needs to just hear that it is hard. Without immediately trying to fix it.
          </p>
        </div>

        <h2>Who LeanOn Listeners Are</h2>
        <p>
          LeanOn listeners are trained people who have their own lived experience with emotional difficulty.
          Not therapists — but real humans who understand what it is like to dread the morning,
          to go through the motions, to feel like you are the only one carrying this particular weight.
        </p>
        <p>
          Sessions start from ₹99 for 15 minutes. The first 5 minutes of any session are free.
          No appointment. No waiting room. No explaining yourself to a stranger who holds a clipboard.
        </p>

        <div className="faq">
          <h2>Questions People Ask</h2>
          {faqSchema.mainEntity.map((item, i) => (
            <div key={i} className="faq-item">
              <div className="faq-q">{item.name}</div>
              <div className="faq-a">{item.acceptedAnswer.text}</div>
            </div>
          ))}
        </div>

        <div className="cta-card">
          <h2>You Do Not Have to Carry This Morning Alone</h2>
          <p>Talk to a real person who understands. No appointment. No judgment. Available now, from ₹99.</p>
          <div className="cta-btns">
            <a href="/browse"><button className="btn-primary">Find a listener</button></a>
            <a href="/how-leanon-works"><button className="btn-secondary">How it works</button></a>
          </div>
        </div>
      </div>
    </>
  )
}
