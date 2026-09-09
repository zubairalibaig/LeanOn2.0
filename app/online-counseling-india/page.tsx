import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Online Counseling India — Affordable Emotional Support Without a Therapist | LeanOn',
  description: 'Looking for online counseling in India? LeanOn connects you with peer listeners for ₹99–₹299 — trained, confidential, available now. No appointment, no therapist fees.',
  keywords: [
    'online counseling India', 'online counselling India', 'affordable online counseling India',
    'emotional support online India', 'talk to someone online India', 'online therapy India cheap',
    'counselor online India', 'online mental health support India', 'peer counseling India',
    'affordable mental health India', 'cheap online therapy India', 'online emotional counseling India',
    'counseling without therapist India', 'online support India mental health',
  ],
  alternates: {
    canonical: 'https://www.leanon.app/online-counseling-india',
    languages: { 'en-IN': 'https://www.leanon.app/online-counseling-india' },
  },
  openGraph: {
    title: 'Online Counseling India — Affordable Emotional Support Without a Therapist | LeanOn',
    description: 'Looking for online counseling in India? LeanOn connects you with peer listeners for ₹99–₹299 — trained, confidential, available now. No appointment, no therapist fees.',
    url: 'https://www.leanon.app/online-counseling-india',
    siteName: 'LeanOn',
    type: 'article',
    images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn — Affordable Online Counseling India' }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is LeanOn a substitute for therapy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, and we are honest about that. LeanOn is peer support — real humans with lived experience, trained to listen. It is not therapy, does not involve diagnosis, and does not replace professional mental health treatment. If you are dealing with a clinical condition like severe depression, OCD, or trauma, please see a licensed therapist. LeanOn fills the large gap between "I need to talk to someone" and "I need clinical intervention" — a gap that most people fall into most of the time.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a session cost on LeanOn?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sessions on LeanOn start at ₹160 for 15 minutes. Longer sessions are ₹249 for 30 minutes and ₹329 for 45 minutes. New users get a free 5-minute trial. Compare this to ₹1,500–₹5,000 for a single therapy session, and you start to see why thousands of people have chosen LeanOn as their first step toward getting emotional support.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is peer support effective for emotional problems?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Research consistently shows that feeling heard by another person — peer or professional — is one of the most effective ways to process difficult emotions. Peer support has been used extensively in mental health contexts globally, including for grief, addiction recovery, and everyday stress. For the majority of people dealing with everyday emotional weight (not clinical conditions), peer support is genuinely effective and often more accessible than therapy.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will anyone know I used LeanOn?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. You can use LeanOn without sharing your real name. There is no formal record of your sessions, no diagnosis, no file that follows you. Listeners sign confidentiality agreements and are trained not to share what they hear. Your privacy is treated seriously — LeanOn is designed from the ground up to be a space where you can speak freely without any social or professional consequences.',
      },
    },
    {
      '@type': 'Question',
      name: 'What kinds of issues can I talk about?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Almost anything. The most common topics are: relationship stress (family, romantic, friendship), work and career pressure, loneliness and feeling disconnected, grief and loss, anxiety and overthinking, low self-worth, life transitions, and just feeling stuck or heavy without knowing why. You do not need to have a clean, well-defined problem. "I just feel off and I need to say it out loud" is a perfectly valid reason to book a session.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a minimum session length?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'New users get a free 5-minute trial. Paid sessions start at 15 minutes. Most people find that 30 minutes is the sweet spot — enough to really get into a topic without feeling rushed. But if you just need to vent for 15 minutes and feel lighter, that works too. You choose based on what you need.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Online Counseling India', item: 'https://www.leanon.app/online-counseling-india' },
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

export default function OnlineCounselingIndiaPage() {
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
          <span style={{color:'var(--navy)'}}>Online Counseling India</span>
        </nav>

        <div style={{background:'#EBF5FB',borderLeft:'4px solid #1A8FA0',borderRadius:'0 12px 12px 0',padding:'14px 18px',marginBottom:28,fontSize:14,color:'#0F4867',fontWeight:600,lineHeight:1.65}}>
          🆘 In crisis? Call <a href="tel:08046110007" style={{color:'#1A8FA0',fontWeight:800}}>NIMHANS 080-46110007</a> or <a href="tel:14416" style={{color:'#1A8FA0',fontWeight:800}}>Tele-MANAS 14416</a> (free · 24/7 · Govt of India)
        </div>

        <div className="hero">
          <p className="badge">Peer Support · Available Now · Anonymous</p>
          <h1>Online Counseling India — <em>Without the ₹5,000 Fee</em></h1>
          <p className="lead">Most people searching for online counseling in India are not looking for a diagnosis. They need someone to talk to — real, trained, confidential, and affordable. LeanOn is that: peer listeners available now, from ₹160 for 15 minutes.</p>
          <a href="/browse" className="cta-hero">Browse listeners now →</a>
        </div>

        <div className="section">
          <h2>What Most People Actually Need When They Search &quot;Online Counseling&quot;</h2>
          <p>The phrase &quot;online counseling&quot; has become shorthand in India for something much simpler than what clinical therapy provides: a person to talk to about a problem that feels too heavy to carry alone. Not a diagnosis. Not a prescription. Not a structured treatment plan. Just someone who will listen, understand, and not judge.</p>
          <p>This is the gap that most people are trying to fill when they type that search. They have a relationship situation they cannot discuss with anyone in their life. Or a career pressure that is building quietly. Or a general feeling of being stuck that they cannot quite articulate. They are looking for a space to say it out loud to a real person.</p>
          <p>Formal therapy — even online — often does not match this need. It is structured around clinical frameworks, regular appointments, and treatment goals. It is excellent for clinical conditions. But most people most of the time are not dealing with clinical conditions. They are dealing with the ordinary but overwhelming weight of being human.</p>
          <ul>
            <li>Feeling misunderstood at home but not knowing how to say it</li>
            <li>Career anxiety that will not turn off when you try to sleep</li>
            <li>A friendship or relationship that is quietly deteriorating</li>
            <li>The particular loneliness of not having anyone to talk to about any of this</li>
          </ul>
          <p>LeanOn is built for exactly this. Not instead of therapy — alongside it, or as a first step toward it, or as the thing that fills the space where therapy is not accessible or appropriate.</p>
        </div>

        <div className="section">
          <h2>The Cost Problem With Therapy in India</h2>
          <p>A session with a licensed therapist in India costs between ₹1,500 and ₹5,000 per hour. In major cities like Mumbai and Delhi, established therapists routinely charge more. The recommended minimum for therapy to be effective is one session per week. Do the math: meaningful therapy costs ₹6,000–₹20,000 a month.</p>
          <p>For the vast majority of Indians — including people working salaried jobs in tier-1 cities — this is genuinely unaffordable as a regular expense. Mental health is consistently deprioritised because the cost feels impossible to justify when rent, food, EMIs, and family obligations take precedence.</p>

          <h3>Health Insurance Does Not Help</h3>
          <p>Even those with health insurance in India find that mental health coverage is either non-existent or capped at amounts that cover only a handful of sessions per year. The Mental Healthcare Act of 2017 mandates parity, but implementation has been slow, and most insurers still have significant exclusions.</p>

          <h3>Wait Times Make It Worse</h3>
          <p>The therapist-to-population ratio in India is approximately 1 per 100,000 people — one of the lowest in the world. Good therapists have waitlists. The idea of getting help &quot;now&quot; — when you actually need it — is largely theoretical in the public mental health system. Private therapists are faster but expensive.</p>

          <h3>What LeanOn Costs Instead</h3>
          <p>A 15-minute peer support session on LeanOn costs ₹160. A 30-minute session is ₹249. A 45-minute session is ₹329. New users get a free 5-minute trial. You do not need insurance, a referral, a prescription, or an appointment. You open the app, browse who is online right now, and start talking.</p>
        </div>

        <div className="section">
          <h2>What a Peer Listener Is (And Is Not)</h2>
          <p>Peer support is a specific and well-researched form of emotional support. A peer listener is someone who has personal lived experience with emotional difficulty — not a therapist reading from a textbook, but a person who has actually navigated hard things and been trained to support others doing the same.</p>

          <h3>What a Peer Listener Does</h3>
          <ul>
            <li>Listens actively without judgment or agenda</li>
            <li>Reflects back what you are saying so you feel genuinely heard</li>
            <li>Helps you process what you are feeling through conversation</li>
            <li>Draws on their own relevant lived experience when it helps</li>
            <li>Maintains complete confidentiality</li>
          </ul>

          <h3>What a Peer Listener Does Not Do</h3>
          <ul>
            <li>Diagnose any mental health condition</li>
            <li>Prescribe or recommend medications</li>
            <li>Provide therapy or clinical treatment</li>
            <li>Keep a formal record or case file</li>
            <li>Contact anyone else about what you share</li>
          </ul>

          <p>The distinction matters because it clarifies what LeanOn is for: the vast middle ground where most people live most of the time — not in crisis, not needing clinical intervention, but carrying something heavy and needing someone to share the weight with.</p>
        </div>

        <div className="section">
          <h2>Who Uses LeanOn Instead of Traditional Counseling</h2>
          <p>LeanOn users are not a narrow demographic. They are engineers and homemakers, students and managers, people in metros and people in smaller cities. What they share is a need that traditional counseling either cannot reach or does not fit.</p>

          <h3>People Who Cannot Afford Regular Therapy</h3>
          <p>For many users, LeanOn is the only form of emotional support they have access to. At ₹160 for a session, it is within reach for someone earning a modest salary. For people who genuinely cannot afford therapy, this is not a compromise — it is the option that actually exists.</p>

          <h3>People Who Do Not Want a Formal Record</h3>
          <p>In India, seeking mental health support still carries stigma in many contexts. People worry about records that could affect employment, relationships, or family dynamics. LeanOn is anonymous, generates no formal records, and requires no identification that links your real identity to what you share.</p>

          <h3>People Between Therapy Sessions</h3>
          <p>Some users see a therapist monthly but need support in between. LeanOn fills the gap — a place to process what has come up between sessions without waiting for the next appointment.</p>

          <h3>People Who Are Not Sure If They Need Therapy</h3>
          <p>Many people come to LeanOn because they are not sure if what they are experiencing warrants therapy. Talking to a peer listener often helps clarify this. Sometimes you leave feeling like you just needed to vent. Other times, the conversation reveals something deeper that a professional should help with. Either outcome is useful.</p>
        </div>

        <div className="section">
          <h2>How a Session Works</h2>
          <div className="how-steps">
            <div className="step">
              <div className="step-num">1</div>
              <div className="step-body">
                <h3>Browse listeners who are online now</h3>
                <p>See profiles with their lived experience, topics they support, and availability. Pick someone whose background feels relevant to what you are carrying.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">2</div>
              <div className="step-body">
                <h3>Book instantly — no appointment</h3>
                <p>New users start with a free 5-minute trial. Paid sessions begin at ₹160 for 15 minutes. No insurance, no referral, no waiting period.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">3</div>
              <div className="step-body">
                <h3>Start with wherever you are</h3>
                <p>You do not need to have it figured out. &quot;I don&apos;t know where to start&quot; is a perfectly fine opening. Your listener will meet you there.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">4</div>
              <div className="step-body">
                <h3>Talk. Your listener follows your lead</h3>
                <p>No scripts, no agendas, no advice unless you want it. A real person, listening, for as long as your session lasts.</p>
              </div>
            </div>
          </div>
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
          <h2>You do not need a reason to get support</h2>
          <p>Browse listeners who are online right now. No appointment, no referral, no waiting. Just someone who will hear you.</p>
          <a href="/browse" className="btn-cta">Browse listeners →</a>
        </div>

        <div className="section">
          <h2>You Might Also Find This Helpful</h2>
          <div className="related">
            <a href="/cant-afford-therapy-india">Can&apos;t afford therapy →</a>
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
