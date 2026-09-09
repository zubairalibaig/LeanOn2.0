import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'I Need Professional Help But Can\'t Access It — What to Do in India | LeanOn',
  description: 'You know you need professional help. But therapy costs ₹1,500–₹5,000 a session, waitlists are long, and you don\'t know where to start. Here is what is actually available in India right now.',
  keywords: [
    'I need professional help India', 'can\'t access therapy India', 'therapy too expensive India',
    'mental health help India affordable', 'I need help but can\'t afford therapy India',
    'where to get mental health help India', 'free mental health India', 'affordable mental health India',
    'need therapist India can\'t afford', 'mental health support India options',
    'online therapy India cheap', 'peer support vs therapy India', 'mental health resources India',
    'I know I need help India', 'can\'t find therapist India',
  ],
  alternates: { canonical: 'https://www.leanon.app/i-need-professional-help-india', languages: { 'en-IN': 'https://www.leanon.app/i-need-professional-help-india' } },
  openGraph: {
    title: 'I Need Professional Help But Can\'t Access It | LeanOn India',
    description: 'You know you need help. Therapy is ₹1,500–₹5,000. Here is what is actually available in India right now.',
    url: 'https://www.leanon.app/i-need-professional-help-india',
    siteName: 'LeanOn',
    type: 'article',
    images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn — Mental Health Help India' }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What should I do if I need therapy but can\'t afford it in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Several options exist. Government hospitals (NIMHANS, AIIMS, PGI Chandigarh) offer free or subsidised psychiatric and psychological services, though waits can be long. NGOs like iCall (Tata Institute of Social Sciences) offer sliding-scale therapy. Online platforms offer lower rates than in-person. Peer support platforms like LeanOn offer a non-clinical but human alternative for emotional support at ₹99–₹299. The path depends on how acute your need is — if you are in crisis, go to a government hospital or call a helpline today.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is peer support the same as professional mental health care?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No — and honest platforms will tell you that directly. Peer support is not therapy. Peer listeners are not clinicians. What peer support provides is a trained, empathetic human to talk to — someone who can listen actively, validate your experience, and help you feel less alone. For clinical needs — diagnosis, medication, trauma treatment — a professional is the right resource. For being heard right now, peer support can be genuinely helpful.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long do government mental health waitlists take in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It varies significantly. In major cities like Bengaluru (NIMHANS) or Delhi (AIIMS), psychology outpatient waits can range from days to months depending on the presenting issue and current demand. Psychiatry is often faster than psychology. If you cannot wait, private practitioners at lower fee points (₹500–₹1,000 range) and NGO services are worth exploring.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use LeanOn as a first step while I wait for therapy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — many people do exactly this. If you are on a waitlist, or in the process of finding a therapist, having someone to talk to in the meantime can reduce the emotional weight of waiting. LeanOn peer listeners are not a substitute for clinical care, but they can provide human connection and a listening ear while you navigate the system.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between a psychiatrist, psychologist, and peer supporter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A psychiatrist is a medical doctor who can diagnose and prescribe medication for mental health conditions. A psychologist holds a psychology degree and provides talk therapy (assessment, CBT, etc.) — they cannot prescribe in India. A peer supporter is a trained layperson with lived experience who offers emotional support conversations — not clinical assessment or treatment. Each fills a different need.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'I Need Professional Help India', item: 'https://www.leanon.app/i-need-professional-help-india' },
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
  .options-grid{display:grid;gap:16px;margin:24px 0;}
  .option{background:white;border-radius:20px;padding:24px 28px;border:1.5px solid var(--border);}
  .option-badge{font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:0.1em;padding:3px 10px;border-radius:50px;display:inline-block;margin-bottom:10px;}
  .badge-free{background:#E6F9F0;color:#16A34A;}
  .badge-low{background:#FFF7E6;color:#B45309;}
  .badge-mid{background:#EEF2FF;color:#4338CA;}
  .option h3{font-size:16px;font-weight:800;color:var(--navy);margin-bottom:6px;}
  .option p{font-size:14px;margin-bottom:6px;}
  .option .detail{font-size:12px;color:var(--gray);font-weight:600;}
  .table-wrap{overflow-x:auto;margin:24px 0;}
  table{width:100%;border-collapse:collapse;font-size:14px;}
  th{background:var(--navy);color:white;padding:12px 16px;text-align:left;font-weight:800;}
  td{padding:12px 16px;border-bottom:1.5px solid var(--border);color:#3A6070;font-weight:500;}
  tr:last-child td{border-bottom:none;}
  tr:nth-child(even) td{background:#FAFCFD;}
  .highlight td{background:rgba(26,143,160,0.07)!important;font-weight:700;}
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

export default function INeedProfessionalHelpIndiaPage() {
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
          <span style={{color:'var(--navy)'}}>I Need Professional Help India</span>
        </nav>

        <p className="hero-tag">Mental Health Access · India · Real Options</p>
        <h1>You Know You Need Help. <em>Here Is What Actually Exists.</em></h1>
        <p className="lead">
          You have reached the point where you know — you need more than willpower, more than distraction,
          more than a good day to shake it. You need to talk to someone. Properly. But therapists cost
          ₹1,500 to ₹5,000 per session, waitlists are long, and the whole system is confusing.
          This is a clear-eyed guide to what is actually available in India right now.
        </p>

        <div className="crisis">
          <strong>If you are in crisis right now — not tomorrow, right now</strong>
          NIMHANS: <a href="tel:08046110007">080-46110007</a> · Tele-MANAS: <a href="tel:14416">14416</a> (free, 24/7, government of India)
        </div>

        <h2>The Honest Reality of Mental Health Access in India</h2>
        <p>
          India has approximately 0.3 psychiatrists per 100,000 people. The WHO recommends 3.
          There are fewer than 10,000 clinical psychologists serving 1.4 billion people.
          Private therapy in metros costs ₹1,500–₹5,000 per session — more per hour than most
          people earn in a day.
        </p>
        <p>
          This is not a personal failure if you cannot access it. It is a structural gap.
          And there are options within it.
        </p>

        <h2>Your Real Options, From Free to Paid</h2>
        <div className="options-grid">
          <div className="option">
            <span className="option-badge badge-free">Free</span>
            <h3>Government hospitals</h3>
            <p>NIMHANS (Bengaluru), AIIMS (Delhi), PGI (Chandigarh), and district mental health facilities. Psychiatrists and some psychology services at no cost or minimal charges.</p>
            <p className="detail">Wait times: variable. Often long for psychology, faster for psychiatry. Best for acute or clinical needs.</p>
          </div>
          <div className="option">
            <span className="option-badge badge-free">Free / Low Cost</span>
            <h3>Tele-MANAS (Government of India)</h3>
            <p>Call 14416. Free mental health counselling by trained counsellors. Available in multiple languages. Not for crisis only — also for ongoing support.</p>
            <p className="detail">Available 24/7. Completely free. National coverage.</p>
          </div>
          <div className="option">
            <span className="option-badge badge-low">₹0–₹500</span>
            <h3>iCall (TISS) — Sliding Scale</h3>
            <p>Run by the Tata Institute of Social Sciences. Sliding-scale counselling by trained interns and professionals. Online available.</p>
            <p className="detail">Quality varies. Usually has a waitlist. Good entry point for structured counselling.</p>
          </div>
          <div className="option">
            <span className="option-badge badge-low">₹99–₹299</span>
            <h3>LeanOn peer support</h3>
            <p>Not therapy — but a real trained human to talk to. Available 24/7. First 5 minutes free. No appointment. For when you need to be heard right now, or while you wait for a therapist.</p>
            <p className="detail">Best for: loneliness, venting, emotional support, feeling heard. Not for: clinical diagnosis or treatment.</p>
          </div>
          <div className="option">
            <span className="option-badge badge-mid">₹500–₹1,500</span>
            <h3>Online therapy platforms</h3>
            <p>Several platforms offer therapy via video or chat at lower rates than in-person. Quality varies significantly — look for licensed practitioners (RCI, MCI).</p>
            <p className="detail">Convenience: high. Verify credentials before committing.</p>
          </div>
          <div className="option">
            <span className="option-badge badge-mid">₹1,500+</span>
            <h3>Private therapist / psychiatrist</h3>
            <p>The gold standard for clinical care. A licensed professional who can diagnose, treat, and (for psychiatrists) prescribe. Essential for serious mental health conditions.</p>
            <p className="detail">Cost: ₹1,500–₹5,000 per session in metros. Worth every rupee for the right issue.</p>
          </div>
        </div>

        <h2>How to Decide What You Need</h2>
        <div className="table-wrap">
          <table>
            <thead>
              <tr><th>If you are...</th><th>Start with</th></tr>
            </thead>
            <tbody>
              <tr><td>In immediate danger to yourself or others</td><td>NIMHANS 080-46110007 or Tele-MANAS 14416, or A&E</td></tr>
              <tr><td>Hearing voices, very confused, unable to function</td><td>Psychiatrist or government hospital today</td></tr>
              <tr><td>Depressed, anxious, struggling to function</td><td>Psychiatrist or psychologist (online or government)</td></tr>
              <tr><td>Carrying something heavy, need to talk to someone</td><td>LeanOn peer support, then therapist if needed</td></tr>
              <tr className="highlight"><td>Overwhelmed, lonely, can't afford therapy, need to vent</td><td>LeanOn — first 5 minutes free, ₹99 for 15 minutes</td></tr>
              <tr><td>Processing past trauma or a difficult childhood</td><td>Psychologist or therapist specialising in trauma</td></tr>
              <tr><td>On a long waitlist, need support in the meantime</td><td>LeanOn peer support while you wait</td></tr>
            </tbody>
          </table>
        </div>

        <h2>What LeanOn Is and Is Not</h2>
        <p>
          LeanOn is peer support. Our listeners are trained, empathetic real people — not clinicians.
          We are honest about this because we think the distinction matters.
        </p>
        <p>
          LeanOn is for: being heard, feeling less alone, processing what you are going through in words,
          getting through a hard day or hard week.
        </p>
        <p>
          LeanOn is not for: clinical diagnosis, medication, crisis intervention, or treating mental health conditions.
        </p>
        <p>
          A lot of people find that talking to a peer listener is a useful first step — it helps them understand
          what they are carrying well enough to communicate it to a professional later.
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
          <h2>Start With Being Heard</h2>
          <p>Talk to a real trained peer listener while you figure out the next step. Anonymous. No appointment. First 5 minutes free.</p>
          <div className="cta-btns">
            <a href="/browse"><button className="btn-primary">Browse Listeners</button></a>
            <a href="/cant-afford-therapy-india"><button className="btn-secondary">Read: Affordable Alternatives</button></a>
          </div>
        </div>
      </div>
    </>
  )
}
