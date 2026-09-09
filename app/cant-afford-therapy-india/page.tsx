import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: "Can't Afford Therapy in India? Here Are Real Alternatives That Actually Help | LeanOn",
  description: 'Therapy costs ₹1,500–₹5,000 per session in India. If that is out of reach, here are affordable alternatives — including LeanOn peer support from ₹99.',
  keywords: [
    'cant afford therapy India', 'therapy too expensive India', 'affordable mental health India',
    'cheap therapy India', 'therapy alternative India', 'free mental health support India',
    'low cost counseling India', 'mental health on a budget India', 'peer support India',
    'affordable emotional support India', 'therapy cost India', 'counseling cost India',
    'mental health affordable India',
  ],
  alternates: {
    canonical: 'https://www.leanon.app/cant-afford-therapy-india',
    languages: { 'en-IN': 'https://www.leanon.app/cant-afford-therapy-india' },
  },
  openGraph: {
    title: "Can't Afford Therapy in India? Here Are Real Alternatives That Actually Help | LeanOn",
    description: 'Therapy costs ₹1,500–₹5,000 per session in India. If that is out of reach, here are affordable alternatives — including LeanOn peer support from ₹99.',
    url: 'https://www.leanon.app/cant-afford-therapy-india',
    siteName: 'LeanOn',
    type: 'article',
    images: [{ url: '/icon-512.png', width: 512, height: 512, alt: "LeanOn — Affordable Therapy Alternatives India" }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does peer support cost on LeanOn vs therapy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A session with a licensed therapist in India costs ₹1,500–₹5,000. A peer support session on LeanOn costs ₹160 for 15 minutes, ₹249 for 30 minutes, or ₹329 for 45 minutes. New users get a free 5-minute trial. The difference is significant: what you would spend on a single therapy session buys you several months of regular peer support on LeanOn.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is peer support as effective as therapy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For everyday emotional difficulties — stress, loneliness, relationship problems, career anxiety, grief — peer support is highly effective. Research shows that feeling genuinely heard by another human is one of the most reliably useful interventions for emotional pain. For clinical conditions like severe depression, OCD, PTSD, or psychosis, licensed therapy is necessary and peer support is supplementary. The key is knowing which category your situation falls into.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if I need actual therapy, not just support?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If you are experiencing symptoms of a serious mental health condition — persistent depression that impairs daily function, panic attacks, trauma responses, or thoughts of self-harm — please seek a licensed mental health professional. Government hospitals across India provide psychiatric services at subsidised or no cost. NIMHANS in Bengaluru and IHBAS in Delhi are examples. Many state mental health departments also run outpatient services. If you are in immediate crisis, call NIMHANS (080-46110007) or Tele-MANAS (14416).',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use peer support while also seeing a therapist?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. Many LeanOn users see a therapist monthly and use peer support in between sessions — when something comes up that they do not want to wait weeks to process. Peer support and therapy serve different but complementary functions. Your therapist works on patterns and clinical frameworks; a LeanOn listener helps you process what is happening right now.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is LeanOn covered by insurance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not currently. LeanOn is peer support, not a clinical service, and is not covered by health insurance. However, because sessions start at ₹160, most people find that LeanOn is affordable without insurance coverage — unlike therapy, where the absence of coverage is the barrier.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a free option on LeanOn?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'New users receive a free 5-minute trial session to experience the platform before committing to a paid session. This is enough time to find out if the format and the specific listener feel right for you. Beyond that, paid sessions start at ₹160 for 15 minutes.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: "Can't Afford Therapy India", item: 'https://www.leanon.app/cant-afford-therapy-india' },
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
  .hero{margin-bottom:48px;}
  .badge{display:inline-block;background:var(--light);border:1.5px solid var(--border);color:var(--teal);font-size:12px;font-weight:800;padding:6px 14px;border-radius:50px;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:16px;}
  h1{font-size:clamp(28px,6vw,44px);font-weight:900;color:var(--navy);line-height:1.15;margin-bottom:16px;}
  h1 em{color:var(--orange);font-style:normal;}
  .lead{font-size:17px;color:var(--gray);line-height:1.78;font-weight:500;max-width:640px;margin-bottom:28px;}
  .cta-hero{display:inline-block;background:var(--orange);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:16px;padding:14px 32px;border-radius:50px;box-shadow:0 4px 20px rgba(255,153,51,0.35);}
  .section{background:white;border-radius:24px;padding:32px;margin-bottom:24px;border:1.5px solid var(--border);}
  .section h2{font-size:22px;font-weight:800;color:var(--navy);margin-bottom:16px;}
  .section h3{font-size:17px;font-weight:800;color:var(--navy);margin-bottom:8px;margin-top:20px;}
  .section h3:first-of-type{margin-top:0;}
  .section p{font-size:15px;color:#3A6070;line-height:1.80;margin-bottom:14px;}
  .section p:last-child{margin-bottom:0;}
  .section ul{padding-left:20px;margin-bottom:14px;}
  .section ul li{font-size:15px;color:#3A6070;line-height:1.80;margin-bottom:6px;}
  .how-steps{display:flex;flex-direction:column;gap:16px;}
  .step{display:flex;gap:16px;align-items:flex-start;}
  .step-num{width:36px;height:36px;border-radius:50%;background:var(--teal);color:white;font-weight:900;font-size:16px;display:flex;align-items:center;justify-content:center;flex-shrink:0;}
  .step-body h3{font-size:16px;font-weight:800;color:var(--navy);margin-bottom:4px;}
  .step-body p{font-size:14px;color:var(--gray);line-height:1.7;font-weight:500;margin:0;}
  .faq-item{border-bottom:1.5px solid var(--border);padding:20px 0;}
  .faq-item:first-of-type{padding-top:0;}
  .faq-item:last-of-type{border-bottom:none;padding-bottom:0;}
  .faq-q{font-size:16px;font-weight:800;color:var(--navy);margin-bottom:10px;}
  .faq-a{font-size:14px;color:var(--gray);line-height:1.75;font-weight:500;}
  .cta-card{background:var(--navy);border-radius:24px;padding:40px 32px;text-align:center;margin-bottom:24px;}
  .cta-card h2{font-size:24px;font-weight:900;color:white;margin-bottom:12px;}
  .cta-card p{font-size:15px;color:rgba(201,231,244,0.85);font-weight:500;margin-bottom:28px;line-height:1.7;}
  .btn-cta{display:inline-block;background:var(--orange);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:15px;padding:14px 28px;border-radius:50px;box-shadow:0 4px 20px rgba(255,153,51,0.35);}
  .related{display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:12px;}
  .related a{background:var(--light);border:1.5px solid var(--border);border-radius:16px;padding:14px 16px;font-size:14px;font-weight:700;color:var(--navy);display:block;}
  .related a:hover{border-color:var(--teal);color:var(--teal);}
`

export default function CantAffordTherapyIndiaPage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>

      <nav className="nav">
        <a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a>
        <a href="/browse"><button className="btn-nav">Find a listener</button></a>
      </nav>

      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a><span>›</span>
          <span style={{color:'var(--navy)'}}>Can&apos;t Afford Therapy India</span>
        </nav>

        <div style={{background:'#EBF5FB',borderLeft:'4px solid #1A8FA0',borderRadius:'0 12px 12px 0',padding:'14px 18px',marginBottom:28,fontSize:14,color:'#0F4867',fontWeight:600,lineHeight:1.65}}>
          🆘 In crisis? Call <a href="tel:08046110007" style={{color:'#1A8FA0',fontWeight:800}}>NIMHANS 080-46110007</a> or <a href="tel:14416" style={{color:'#1A8FA0',fontWeight:800}}>Tele-MANAS 14416</a> (free · 24/7 · Govt of India)
        </div>

        <div className="hero">
          <p className="badge">Honest Guide · Affordable Options · India</p>
          <h1>Can&apos;t Afford Therapy? <em>Here Is What Actually Helps</em></h1>
          <p className="lead">Therapy in India costs ₹1,500–₹5,000 per session. For most people, that is genuinely unaffordable as a regular expense. This is not a judgment — it is just true. Here is an honest look at what actually exists at lower price points, including peer support from ₹160.</p>
          <a href="/browse" className="cta-hero">See peer support options →</a>
        </div>

        <div className="section">
          <h2>The Honest Price of Therapy in India Right Now</h2>
          <p>Let us put actual numbers on this. In major Indian cities, a 50-minute session with a licensed psychologist or therapist typically costs:</p>
          <ul>
            <li>₹1,500–₹2,500 for a newer therapist or one working through a platform</li>
            <li>₹2,500–₹4,000 for a mid-career therapist with 5–10 years of experience</li>
            <li>₹4,000–₹6,000 or more for established practitioners in Mumbai and Delhi</li>
          </ul>
          <p>The professional consensus is that therapy needs to happen at least weekly to be effective — especially in the beginning. That is ₹6,000–₹24,000 a month. Per month. Every month, indefinitely, until you stop needing it.</p>
          <p>For context: the median monthly salary in urban India is roughly ₹25,000–₹35,000 for salaried workers. Regular therapy would consume 20–80% of a median income. This is not a small barrier. It is a wall for most people.</p>
          <p>Even at the lower end — ₹1,500 per session — two sessions a month adds ₹3,000 to a budget that likely already feels tight. Against rent, EMI payments, food, travel, and family obligations, mental health support is almost always the first thing to cut.</p>
        </div>

        <div className="section">
          <h2>Why &quot;Just See a Therapist&quot; Is Harder Than It Sounds</h2>
          <p>The cost is the most visible barrier, but it is not the only one. Even people who can afford therapy often struggle to access it for reasons that are rarely discussed honestly.</p>

          <h3>Finding the Right Therapist Takes Time</h3>
          <p>Therapy is a relationship. The research on what makes therapy work consistently identifies the quality of the relationship between client and therapist as the most important factor — more than the specific method used. Finding a therapist who you actually feel comfortable with can take multiple attempts, each costing ₹1,500–₹4,000 per session. The &quot;shopping&quot; process itself is expensive.</p>

          <h3>Stigma Makes Starting Hard</h3>
          <p>In many Indian families and social contexts, seeing a therapist is still interpreted as a sign of serious mental illness rather than proactive self-care. The fear of being perceived as &quot;mad&quot; or &quot;weak&quot; keeps many people from taking the first step, even when they can afford it.</p>

          <h3>Availability Is a Real Problem</h3>
          <p>India has fewer than 0.3 psychiatrists and psychologists per 100,000 people. Good therapists in most Indian cities have waitlists. The experience of finally deciding to seek help and being told &quot;the earliest appointment is in six weeks&quot; is demoralising in a way that is hard to overstate.</p>

          <h3>Online Therapy Platforms Have Hidden Costs</h3>
          <p>Several online therapy platforms in India promise affordable rates, but the subscription model, session minimums, and add-on charges often bring the effective cost close to in-person rates. And you are still on the hook for the clinical context — diagnosis, treatment plans, weekly sessions — even if your needs are simpler.</p>
        </div>

        <div className="section">
          <h2>What Actually Fills the Gap</h2>
          <p>This is meant to be honest and practical, not a sales pitch. Here is a real accounting of what exists:</p>

          <h3>Friends and Family — Good but Limited</h3>
          <p>The people in your life are often the first place you turn, and for good reason. But they come with real limitations: they have their own emotional states and limits, they are involved in your situation in ways that complicate objectivity, and the social cost of repeatedly burdening them with your problems is real. Many people stop sharing with friends because they do not want to be seen as &quot;a lot.&quot;</p>

          <h3>Free Government Helplines — Crisis-Only</h3>
          <p>NIMHANS (080-46110007) and Tele-MANAS (14416) are run by the Government of India and are free, 24/7, and staffed by trained counsellors. They are genuinely useful in a crisis. But they are not designed for ongoing support or for the kind of regular processing that most people need — they are triaged for acute situations.</p>

          <h3>Journaling and Apps — Useful, But One-Sided</h3>
          <p>Writing, breathwork apps, and self-help tools can be genuinely useful as supplements. But they do not do the one thing that matters most: make you feel heard by another person. Research consistently shows that the felt experience of being understood by another human is qualitatively different from self-reflection, however rigorous.</p>

          <h3>Peer Support — The Real Middle Ground</h3>
          <p>Peer support sits between talking to friends (free, limited) and therapy (expensive, clinical). A trained peer listener is not a friend — they are an objective outside presence without a stake in your situation. And they are not a therapist — no diagnosis, no treatment framework, no clinical record. They are a person who has navigated hard things and been trained to support others doing the same.</p>
        </div>

        <div className="section">
          <h2>What Peer Support Is and What It Costs</h2>
          <p>LeanOn connects you with peer listeners — real people with lived experience of emotional difficulty, trained in active listening and peer support frameworks. They are not therapists. They are also not just someone who is willing to talk to you. The training and vetting process matters.</p>

          <h3>What You Get in a Session</h3>
          <ul>
            <li>A real person who is fully present and listening to you</li>
            <li>No agenda, no judgment, no advice unless you specifically ask</li>
            <li>Complete confidentiality — nothing leaves the conversation</li>
            <li>Flexibility to talk about whatever is actually on your mind</li>
            <li>Availability at any hour, including late at night</li>
          </ul>

          <h3>What It Costs</h3>
          <ul>
            <li>Free 5-minute trial for new users</li>
            <li>₹160 for a 15-minute session</li>
            <li>₹249 for a 30-minute session</li>
            <li>₹329 for a 45-minute session</li>
          </ul>

          <p>There is no subscription, no minimum commitment, no recurring charge. You book when you need it and pay only for what you use. If one session a week costs ₹249, that is roughly ₹1,000 a month — a fraction of what therapy costs and more accessible than almost any other structured emotional support option available in India.</p>
        </div>

        <div className="section">
          <h2>Who Peer Support Is Right For</h2>
          <p>Peer support is not the right fit for everyone in every situation. Here is an honest guide to when it helps and when it does not.</p>

          <h3>Peer Support Works Well For</h3>
          <ul>
            <li>Everyday emotional weight — stress, anxiety, loneliness, relationship difficulties</li>
            <li>Processing a difficult situation you have no one to talk to about</li>
            <li>Feeling stuck without knowing exactly why</li>
            <li>Needing regular emotional maintenance — a recurring check-in with someone objective</li>
            <li>Supplementing therapy between sessions</li>
            <li>People who are not yet sure if they need therapy</li>
          </ul>

          <h3>When You Need Something More</h3>
          <p>If you are experiencing severe depression that prevents you from functioning, panic attacks, intrusive thoughts about harming yourself, trauma responses, or symptoms that have been present for months and are worsening — please seek a licensed mental health professional. Government psychiatric services at district and state hospitals provide free or low-cost care. LeanOn is not a substitute for clinical treatment in these cases.</p>

          <p>For most people, most of the time, the issue is not that severe — but it is real, and it deserves support. That is the gap peer support fills.</p>
        </div>

        <div className="section">
          <h2>Frequently Asked Questions</h2>
          {faqs.map((f, i) => (
            <div className="faq-item" key={i}>
              <p className="faq-q">{f.name}</p>
              <p className="faq-a">{f.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>

        <div className="cta-card">
          <h2>Start with a free trial</h2>
          <p>Browse listeners online right now. New users get a free 5-minute trial. No appointment, no subscription, no explanation needed.</p>
          <a href="/browse" className="btn-cta">Browse listeners →</a>
        </div>

        <div className="section">
          <h2>You Might Also Find This Helpful</h2>
          <div className="related">
            <a href="/online-counseling-india">Online counseling India →</a>
            <a href="/i-need-someone-to-talk-to">Need to talk →</a>
            <a href="/support/loneliness">Loneliness support →</a>
            <a href="/support/anxiety">Anxiety support →</a>
            <a href="/support/family-pressure-india">Family pressure →</a>
            <a href="/support/career-pressure-india">Career pressure →</a>
            <a href="/talk-to-someone-right-now">Talk right now →</a>
            <a href="/browse">Browse all listeners →</a>
          </div>
        </div>
      </div>
    </>
  )
}
