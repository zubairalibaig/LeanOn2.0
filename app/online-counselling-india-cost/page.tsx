import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Online Counselling Cost in India (2026): Full Price Comparison | LeanOn',
  description: 'Online counselling cost in India compared honestly — therapists, psychiatrists, free helplines and affordable peer support. Real price ranges, no sales pitch.',
  alternates: { canonical: 'https://www.leanon.app/online-counselling-india-cost', languages: { 'en-IN': 'https://www.leanon.app/online-counselling-india-cost' } },
  keywords: 'online counselling cost India, therapy price India, how much does therapy cost India, affordable counselling India, cheapest online emotional support India, online therapy cost comparison India, peer support price India, leanon pricing',
  openGraph: {
    title: 'Online Counselling Cost in India (2026): Full Price Comparison | LeanOn',
    description: 'Online counselling cost in India compared honestly — therapists, psychiatrists, free helplines and affordable peer support. Real price ranges, no sales pitch.',
    url: 'https://www.leanon.app/online-counselling-india-cost',
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
      name: 'How much does therapy cost in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In India, a session with a clinical psychologist or qualified therapist typically costs between ₹1,500 and ₹4,000 per session, whether online or in person. A psychiatrist consultation usually costs ₹1,000 to ₹3,000 per visit, with medication as an additional ongoing cost. Established online therapy platforms are broadly in the same range, often ₹1,000 to ₹3,000 per session. Prices vary by city, by the practitioner\'s experience, and by whether the session is 45 or 60 minutes long.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is therapy so expensive in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Therapy is priced the way it is for legitimate reasons. A clinical psychologist or psychiatrist has spent many years in formal education, supervised practice and licensing, and continues to pay for supervision, insurance and professional development. They are qualified to assess and treat clinical conditions — that expertise is genuinely expensive to build and is worth what it costs. The problem in India is not that therapists overcharge; it is that a large number of people carrying ordinary emotional weight cannot afford clinical rates and end up with nothing at all.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there anything cheaper that still involves a real human?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Trained peer support sits between free helplines and clinical therapy. On LeanOn, your first 5 minutes are free, and paid sessions are charged by the minute at a rate of ₹8 to ₹25 per minute set by each listener, plus a flat ₹10 platform fee. A 15-minute conversation starts at around ₹160. You are speaking to a real, verified human being with lived experience of something similar — not a bot and not a script. Peer listeners are not licensed therapists and do not provide clinical treatment.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is free support good enough?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For crisis, free support is not just good enough — it is the correct choice. NIMHANS (080-46110007) and Tele-MANAS (14416) are staffed by trained professionals, cost nothing, and are genuinely excellent for acute distress. Use them without hesitation. Where free options fall short is ongoing, non-urgent emotional weight: helplines are built for crisis rather than for regular conversation, and free AI chatbots, while inexpensive and available, are not human and have no lived experience to offer you. If what you want is to be heard by a person on a Tuesday night, a paid human conversation is a different thing.',
      },
    },
    {
      '@type': 'Question',
      name: 'What exactly does a LeanOn session cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sessions are 15, 30 or 45 minutes and are billed per minute at the listener\'s own rate of ₹8 to ₹25 per minute, plus a flat ₹10 platform fee per paid session. A 15-minute session starts at around ₹160. A short trial session is available for new users. You add money to a wallet before a session, and any unused wallet balance is fully refundable. Listeners keep 100 percent of their rate.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Online Counselling Cost', item: 'https://www.leanon.app/online-counselling-india-cost' },
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
  .page{max-width:780px;margin:0 auto;padding:16px 24px 100px;}
  .breadcrumb{display:flex;gap:6px;align-items:center;font-size:13px;font-weight:600;color:var(--gray);margin-bottom:32px;flex-wrap:wrap;}
  .breadcrumb span{color:var(--border);}
  .breadcrumb a:hover{color:var(--teal);}
  .hero{margin-bottom:48px;}
  .tag{font-size:12px;font-weight:800;color:var(--teal);text-transform:uppercase;letter-spacing:0.1em;margin-bottom:12px;}
  h1{font-size:clamp(28px,6vw,44px);font-weight:900;color:var(--navy);line-height:1.15;margin-bottom:16px;}
  h1 em{color:var(--orange);font-style:normal;}
  .lead{font-size:17px;color:var(--gray);line-height:1.78;font-weight:500;max-width:640px;}
  .section{background:white;border-radius:24px;padding:32px;margin-bottom:24px;border:1.5px solid var(--border);}
  .section h2{font-size:22px;font-weight:800;color:var(--navy);margin-bottom:16px;}
  .section h3{font-size:17px;font-weight:800;color:var(--navy);margin-bottom:8px;margin-top:20px;}
  .section h3:first-of-type{margin-top:0;}
  .section p{font-size:15px;color:#3A6070;line-height:1.80;margin-bottom:14px;}
  .section p:last-child{margin-bottom:0;}
  .section ul{padding-left:20px;margin-bottom:14px;}
  .section ul li{font-size:15px;color:#3A6070;line-height:1.80;margin-bottom:6px;}
  .listeners-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:16px;margin-bottom:24px;}
  .listener-card{background:white;border:1.5px solid var(--border);border-radius:20px;padding:20px;text-align:center;}
  .listener-avatar{width:60px;height:60px;border-radius:50%;background:var(--light);display:flex;align-items:center;justify-content:center;font-size:28px;margin:0 auto 12px;}
  .listener-name{font-size:15px;font-weight:800;color:var(--navy);margin-bottom:4px;}
  .listener-tag{font-size:12px;font-weight:700;color:var(--teal);background:var(--light);padding:4px 10px;border-radius:20px;display:inline-block;margin-bottom:8px;}
  .listener-bio{font-size:13px;color:var(--gray);line-height:1.6;font-weight:500;}
  .faq-item{border-bottom:1.5px solid var(--border);padding:20px 0;}
  .faq-item:first-of-type{padding-top:0;}
  .faq-item:last-of-type{border-bottom:none;padding-bottom:0;}
  .faq-q{font-size:16px;font-weight:800;color:var(--navy);margin-bottom:10px;}
  .faq-a{font-size:14px;color:var(--gray);line-height:1.75;font-weight:500;}
  .cta-card{background:var(--navy);border-radius:24px;padding:40px 32px;text-align:center;margin-bottom:24px;}
  .cta-card h2{font-size:24px;font-weight:900;color:white;margin-bottom:12px;}
  .cta-card p{font-size:15px;color:rgba(201,231,244,0.85);font-weight:500;margin-bottom:28px;line-height:1.7;}
  .cta-btns{display:flex;gap:12px;justify-content:center;flex-wrap:wrap;}
  .btn-primary{background:var(--orange);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:15px;padding:14px 28px;border-radius:50px;border:none;cursor:pointer;box-shadow:0 4px 20px rgba(255,153,51,0.35);}
  .btn-secondary{background:rgba(255,255,255,0.12);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:15px;padding:14px 28px;border-radius:50px;border:1.5px solid rgba(255,255,255,0.3);cursor:pointer;}
  .related{display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:12px;margin-top:8px;}
  .related-link{background:var(--light);border:1.5px solid var(--border);border-radius:16px;padding:14px 16px;font-size:14px;font-weight:700;color:var(--navy);transition:border-color 0.2s;}
  .related-link:hover{border-color:var(--teal);color:var(--teal);}
  .disclaimer{background:var(--light);border:1.5px solid var(--border);border-radius:20px;padding:24px;margin-bottom:24px;}
  .disclaimer p{font-size:13px;color:var(--gray);line-height:1.7;font-weight:500;margin-bottom:8px;}
  .disclaimer p:last-child{margin-bottom:0;}
  .disclaimer strong{color:var(--navy);}
`

export default function OnlineCounsellingCostPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>

      <nav className="nav">
        <a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a>
        <a href="/auth"><button className="btn-nav">Open app</button></a>
      </nav>

      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a><span>›</span>
          <span style={{color:'var(--navy)'}}>Online Counselling Cost</span>
        </nav>

        {/* Hero */}
        <div className="hero">
          <p className="tag">Pricing · India · 2026</p>
          <h1>What Emotional Support Actually <em>Costs</em> in India</h1>
          <p className="lead">If you are comparing prices before you spend money on your own wellbeing, you deserve straight numbers rather than a sales pitch. This page lays out what every option in India actually costs — psychiatrists, therapists, online platforms, free government helplines, AI chatbots, and peer support — and, just as importantly, which one is genuinely right for what you are going through.</p>
        </div>

        {/* Main pricing rundown */}
        <div className="section">
          <h2>The Real Price of Emotional Support in India</h2>
          <p>There is no single price for emotional support in India, because there is no single kind of emotional support. What follows are honest, real-world ranges. Rates vary by city, by practitioner experience, and by session length — so treat these as the bands you will typically encounter rather than fixed quotes.</p>

          <h3>Psychiatrist Consultation — ₹1,000 to ₹3,000 per visit</h3>
          <p>A psychiatrist is a medical doctor who can diagnose conditions and prescribe medication. Consultations in India generally cost ₹1,000 to ₹3,000 per visit, and medication is an additional, usually ongoing, cost on top. Follow-up visits are often shorter and sometimes cheaper than the first consultation. If your difficulty has a medical dimension, this is the person you need, and no other option on this page substitutes for it.</p>

          <h3>Clinical Psychologist or Therapist — ₹1,500 to ₹4,000 per session</h3>
          <p>A licensed clinical psychologist or qualified therapist typically charges ₹1,500 to ₹4,000 for a session, usually 45 to 60 minutes. Senior practitioners in metros sit at the upper end of that band; newer practitioners and those in smaller cities sit lower. Structured therapy usually means weekly or fortnightly sessions over several months, so the honest figure to plan around is the monthly total, not the single session.</p>

          <h3>Online Therapy Platforms — often ₹1,000 to ₹3,000 per session</h3>
          <p>Online therapy in India is broadly comparable to in-person therapy in price, commonly ₹1,000 to ₹3,000 per session. You save on travel and gain flexibility, but you are still paying a licensed clinician for their time, so the underlying economics do not change much. Some platforms sell multi-session packages that reduce the per-session figure; check whether unused sessions expire before you buy one.</p>

          <h3>Government Helplines — Free</h3>
          <p>NIMHANS (<a href="tel:08046110007" style={{color:'var(--teal)',fontWeight:700}}>080-46110007</a>) and Tele-MANAS (<a href="tel:14416" style={{color:'var(--teal)',fontWeight:700}}>14416</a>) cost nothing, run around the clock, and are staffed by trained professionals. These are crisis services, and for crisis they are genuinely excellent — this is not a lesser option, it is the correct option when distress is acute or you are having thoughts of self-harm. Call them without hesitation and without cost. They are built for urgent moments rather than for a standing weekly conversation.</p>

          <h3>AI Wellness Chatbots — low cost</h3>
          <p>AI chat apps are cheap or free, always awake, and never judgemental. They can be a reasonable place to journal or to structure a thought at 3 a.m. But it is worth being plain about the limit: an AI is not a human being. It has never lost a parent, failed an exam, ended a relationship, or moved to a city where it knew nobody. Simulated empathy is not the same as a person who has actually been where you are and says so.</p>

          <h3>LeanOn Peer Support — ₹8 to ₹25 per minute</h3>
          <p>On LeanOn, paid sessions are billed per minute at a rate of ₹8 to ₹25 per minute set by the individual listener, plus a flat ₹10 platform fee per paid session. A 15-minute session starts at around ₹160. A short trial session is available for new users. You top up a wallet before a session, and any unused balance is fully refundable. LeanOn listeners are trained peers with lived experience, not licensed clinicians — which is exactly why the price is different, and also why it is not a replacement for clinical care.</p>
        </div>

        {/* Decision framework */}
        <div className="section">
          <h2>Which One Should You Choose?</h2>
          <p>Price should be the second question. The first is what you actually need. Spending ₹4,000 on the wrong kind of help is expensive; spending ₹160 on the wrong kind of help is still the wrong kind of help. Here is an honest way to decide.</p>

          <h3>If you are in crisis or in danger right now</h3>
          <p>Call a free government helpline immediately — NIMHANS on <a href="tel:08046110007" style={{color:'var(--teal)',fontWeight:700}}>080-46110007</a> or Tele-MANAS on <a href="tel:14416" style={{color:'var(--teal)',fontWeight:700}}>14416</a>. Do not browse, do not compare, do not pay for anything. These lines are free, immediate, and staffed by people trained for exactly this. Cost is not a factor here and should never delay you.</p>

          <h3>If you have clinical symptoms</h3>
          <p>Persistent depression, panic disorder, trauma, disordered eating, thoughts of self-harm, symptoms that have lasted weeks and are affecting sleep, work or your ability to function — these need a licensed therapist or a psychiatrist. That ₹1,500 to ₹4,000 per session is the right spend, and it buys assessment, diagnosis and evidence-based treatment that nothing cheaper can provide. Peer support is not a substitute for clinical care, and we would rather tell you that than take your money. If therapy is out of reach financially, ask practitioners about sliding-scale fees, look at hospital outpatient departments and university training clinics, and use the free helplines in the meantime — many clinicians in India quietly reserve slots at reduced rates.</p>

          <h3>If you are carrying everyday emotional weight</h3>
          <p>Loneliness. Work stress. A breakup you cannot stop replaying. Overthinking at midnight. Homesickness. The specific tiredness of always being the strong one. Feeling unheard by the people closest to you. None of this is a clinical condition, and much of it does not need a diagnosis — it needs an empathetic human being who will actually listen without rushing to fix you. This is where peer support fits: affordable, appropriate, and available without a waitlist.</p>
        </div>

        {/* Why cheaper */}
        <div className="section">
          <h2>Why LeanOn Costs So Much Less</h2>
          <p>A price this far below therapy usually deserves suspicion, so here is the honest explanation of the model rather than a marketing answer.</p>

          <h3>Peers, not clinicians</h3>
          <p>LeanOn listeners are trained peers with lived experience — people who have been through loneliness, heartbreak, career collapse, family pressure, grief — and who have been screened and trained to listen well. They are not licensed psychologists or psychiatrists. There is no decade of clinical training, licensing and supervision to recover in the price, because that training is not what they are offering. They are offering attention, empathy, and the particular credibility of having been there. That is worth a lot, but it does not cost what a clinical qualification costs.</p>

          <h3>Listeners keep 100 percent of their rate</h3>
          <p>Whatever a listener sets as their per-minute rate, they keep all of it. LeanOn charges a flat ₹10 platform fee per paid session — not a percentage cut. The platform does not take a bigger slice as your session gets longer, which means there is no incentive built into the system to keep you talking, and listeners are not pressured to raise rates to absorb a commission.</p>

          <h3>You pay by the minute, not by the hour</h3>
          <p>Therapy is sold in fixed blocks of 45 or 60 minutes because that is how clinical work is structured. Sometimes you do not need an hour. Sometimes you need twelve minutes to say the thing out loud to someone who gets it. Charging by the minute means you pay for what you actually use, and a short honest conversation stays genuinely affordable instead of costing the same as a full clinical hour.</p>
        </div>

        {/* What ₹160 gets you */}
        <div className="section">
          <h2>What You Get for ₹160</h2>
          <p>Around ₹160 is roughly what a 15-minute LeanOn session starts at — about the price of a coffee and a snack in most Indian cities. Concretely, here is what that buys:</p>
          <ul>
            <li>A full 15-minute one-on-one conversation with a verified human being, not a bot and not a script.</li>
            <li>Someone who has lived through something similar to what you are carrying, so the empathy is real rather than performed.</li>
            <li>Availability 24 hours a day — no appointment, no waitlist, no two-week gap before someone can see you.</li>
            <li>Complete anonymity. You choose what you share, and nobody in your life finds out.</li>
            <li>A refundable wallet — any balance you do not use comes back to you in full.</li>
            <li>A short trial session available for new users, so you can find out whether it helps before you commit to a longer session.</li>
          </ul>
          <p>If it turns out that what you need is clinical care, a listener will say so and point you toward it. The goal is that you end up in the right place, not that you spend money here.</p>
        </div>

        {/* CTA */}
        <div className="cta-card">
          <h2>Try It, Then Decide</h2>
          <p>Browse real people, see their rates upfront, and find out whether being heard helps — no appointment, no waitlist.</p>
          <div className="cta-btns">
            <a href="/browse"><button className="btn-primary">Browse Listeners &amp; Rates</button></a>
            <a href="/auth"><button className="btn-secondary">Join LeanOn</button></a>
          </div>
        </div>

        {/* FAQ */}
        <div className="section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <div className="faq-q">How much does therapy cost in India?</div>
            <div className="faq-a">A session with a clinical psychologist or qualified therapist typically costs ₹1,500 to ₹4,000, online or in person. A psychiatrist consultation usually costs ₹1,000 to ₹3,000 per visit, with medication as an additional ongoing cost. Established online therapy platforms are broadly in the same range, often ₹1,000 to ₹3,000 per session. Prices vary by city, practitioner experience, and session length.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Why is therapy so expensive in India?</div>
            <div className="faq-a">For legitimate reasons. A clinical psychologist or psychiatrist has spent years in formal education, supervised practice and licensing, and keeps paying for supervision and professional development. They are qualified to assess and treat clinical conditions, and that expertise is genuinely expensive to build. The real problem is not that therapists overcharge — it is that many people carrying ordinary emotional weight cannot afford clinical rates and end up with nothing at all.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Is there anything cheaper that still involves a real human?</div>
            <div className="faq-a">Yes. Trained peer support sits between free helplines and clinical therapy. On LeanOn, paid sessions are charged by the minute at ₹8 to ₹25 per minute set by each listener, plus a flat ₹10 platform fee. A 15-minute conversation starts at around ₹160, with a real verified human who has lived something similar. A short trial session is available for new users. Peer listeners are not licensed therapists and do not provide clinical treatment.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Is free support good enough?</div>
            <div className="faq-a">For crisis, free support is not just good enough — it is the correct choice. NIMHANS (080-46110007) and Tele-MANAS (14416) are staffed by trained professionals, cost nothing, and are excellent for acute distress. Where free options fall short is ongoing, non-urgent emotional weight: helplines are built for crisis rather than regular conversation, and AI chatbots, while cheap and available, are not human and have no lived experience to offer you.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">What exactly does a LeanOn session cost?</div>
            <div className="faq-a">Sessions are 15, 30 or 45 minutes, billed per minute at the listener's own rate of ₹8 to ₹25 per minute, plus a flat ₹10 platform fee per paid session. A 15-minute session starts at around ₹160. A short trial session is available for new users. You add money to a wallet beforehand, and any unused balance is fully refundable. Listeners keep 100 percent of their rate.</div>
          </div>
        </div>

        {/* Related pages */}
        <div className="section">
          <h2>Related Support Topics</h2>
          <p>Explore more peer support resources on LeanOn:</p>
          <div className="related">
            <a href="/alternatives-to-therapy-india" className="related-link">Alternatives to Therapy</a>
            <a href="/blog/peer-support-vs-therapy-india" className="related-link">Peer Support vs Therapy</a>
            <a href="/blog/affordable-alternatives-to-therapy-in-india" className="related-link">Affordable Alternatives</a>
            <a href="/support/someone-to-talk-to" className="related-link">Someone to Talk To</a>
            <a href="/why-leanon" className="related-link">Why LeanOn</a>
            <a href="/browse" className="related-link">Browse All Listeners</a>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="disclaimer">
          <p><strong>LeanOn is peer support, not a crisis service.</strong> If you are in immediate distress or having thoughts of self-harm, please reach out to a professional helpline immediately.</p>
          <p><strong>NIMHANS:</strong> <a href="tel:08046110007">080-46110007</a> &nbsp;|&nbsp; <strong>Tele-MANAS (Govt. of India):</strong> <a href="tel:14416">14416</a> (free · 24/7)</p>
          <p>LeanOn listeners are trained peers, not licensed therapists or medical professionals. For clinical mental health support, please consult a qualified mental health professional.</p>
        </div>
      </div>
    </>
  )
}
