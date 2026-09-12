import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Walk-In Counselling India — No Appointment, Talk Now | LeanOn',
  description: 'No waiting list. No appointment. No scheduling. LeanOn peer support is available right now — like walk-in counselling but from your phone. From ₹160.',
  keywords: [
    'walk-in counselling india', 'counselling without appointment india',
    'counselling without waiting list india', 'same day counselling india',
    'instant counselling india', '24 hour counselling india',
    'immediate emotional support india', 'counselling now india',
  ],
  alternates: { canonical: 'https://www.leanon.app/walk-in-counselling-india', languages: { 'en-IN': 'https://www.leanon.app/walk-in-counselling-india' } },
  openGraph: {
    title: 'Walk-In Counselling India — No Appointment, Talk Now | LeanOn',
    description: 'No waiting list. No appointment. No scheduling. LeanOn peer support is available right now — like walk-in counselling but from your phone. From ₹160.',
    url: 'https://www.leanon.app/walk-in-counselling-india',
    siteName: 'LeanOn',
    type: 'article',
    images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn — Walk-In Counselling India' }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is this walk-in counselling?',
      acceptedAnswer: { '@type': 'Answer', text: 'LeanOn is peer support, not clinical counselling. But it offers the same core quality that makes walk-in counselling valuable: immediate access, no prior appointment, available when you need it. The support comes from trained peer listeners rather than licensed counsellors &mdash; which makes it appropriate for processing everyday emotional weight, not for clinical assessment or treatment.' },
    },
    {
      '@type': 'Question',
      name: 'How fast can I get a session?',
      acceptedAnswer: { '@type': 'Answer', text: 'Most people are in a session within 3 minutes of deciding to start. Browse available listeners at leanon.app/browse, choose one, and start. There is no scheduling, no intake form, no waiting room. The listener is available now.' },
    },
    {
      '@type': 'Question',
      name: 'Is it the same as seeing a professional?',
      acceptedAnswer: { '@type': 'Answer', text: 'No. LeanOn listeners are trained peers, not licensed professionals. They listen, empathise, and support &mdash; they do not assess, diagnose, or treat. For clinical mental health conditions, please see a qualified professional. For the day-to-day emotional weight that most people carry, peer support is often exactly what is needed.' },
    },
    {
      '@type': 'Question',
      name: 'Is it anonymous?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Your first name only. No records shared with anyone. The session is private.' },
    },
    {
      '@type': 'Question',
      name: 'What if no listener is online?',
      acceptedAnswer: { '@type': 'Answer', text: 'LeanOn has listeners available across different time slots, including late nights and early mornings. If no listener is available at the exact moment you need one, you can browse and book for the next available slot, which is typically within a few hours.' },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Walk-In Counselling India', item: 'https://www.leanon.app/walk-in-counselling-india' },
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
  .steps{display:flex;flex-direction:column;gap:16px;}
  .step{display:flex;gap:16px;align-items:flex-start;}
  .step-num{min-width:36px;height:36px;border-radius:50%;background:var(--teal);color:white;font-weight:900;font-size:16px;display:flex;align-items:center;justify-content:center;}
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

export default function WalkInCounsellingIndiaPage() {
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
          <span style={{color:'var(--navy)'}}>Walk-In Counselling India</span>
        </nav>

        <div style={{background:'#EBF5FB',borderLeft:'4px solid #1A8FA0',borderRadius:'0 12px 12px 0',padding:'14px 18px',marginBottom:28,fontSize:14,color:'#0F4867',fontWeight:600,lineHeight:1.65}}>
          In crisis? Call <a href="tel:08046110007" style={{color:'#1A8FA0',fontWeight:800}}>NIMHANS 080-46110007</a> or <a href="tel:14416" style={{color:'#1A8FA0',fontWeight:800}}>Tele-MANAS 14416</a> (free, 24/7)
        </div>

        <div className="hero">
          <p className="badge">Available Now &middot; No Appointment &middot; India</p>
          <h1>Walk-in counselling. <em>Except you don&apos;t even have to walk anywhere.</em></h1>
          <p className="lead">Traditional counselling has waiting lists of weeks. Walk-in clinics have queues. LeanOn is instant &mdash; browse listeners, start a session, talk now. No appointment, no waiting, available across India.</p>
          <a href="/browse" className="cta-hero">Talk now &rarr;</a>
        </div>

        <div className="section">
          <h2>The Counselling Access Problem in India</h2>
          <p>India has approximately 0.3 psychiatrists and 0.07 psychologists per 100,000 people &mdash; compared to a global average of 1.7 psychiatrists per 100,000. The gap between need and availability is enormous.</p>
          <p>Private therapy in India typically involves a wait of 2&ndash;6 weeks for an initial appointment, costs ₹1,500&ndash;5,000 per session, and is available only in major cities. Government mental health services have even longer wait times.</p>
          <p>The result: millions of people who need support right now have nowhere to turn. The crisis or the difficult moment arrives on a Tuesday morning and the next available appointment is in three weeks.</p>
        </div>

        <div className="section">
          <h2>What Walk-In Support Actually Means</h2>
          <p>Walk-in counselling means immediate access. No prior booking. No waiting list. You arrive (or log in) when you need it, and support is available. The value is the immediacy &mdash; meeting the need at the moment it arises, rather than scheduling it for a later date when the moment has passed.</p>
          <p>Emotional moments do not schedule themselves conveniently. A fight happens at 7am. Anxiety peaks during a commute. A wave of grief arrives in the middle of a workday. The support system needs to be available at the moment of need &mdash; not three weeks later.</p>
        </div>

        <div className="section">
          <h2>How LeanOn Works as Walk-In Support</h2>
          <div className="steps">
            <div className="step">
              <div className="step-num">1</div>
              <div className="step-body">
                <h3>Browse</h3>
                <p>Go to leanon.app/browse. See which listeners are available right now. Read their profiles in 60 seconds.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">2</div>
              <div className="step-body">
                <h3>Select</h3>
                <p>Choose someone whose background resonates. First 5 minutes of every session are free.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">3</div>
              <div className="step-body">
                <h3>Talk</h3>
                <p>Start the voice call. Say what you need to say. No intake form, no history to give, no preparation needed.</p>
              </div>
            </div>
          </div>
          <p style={{marginTop:20}}>Most people are talking to a listener within 3 minutes of deciding to reach out.</p>
        </div>

        <div className="section">
          <h2>Who Uses LeanOn as Walk-In Support</h2>
          <p>The situations that send people to LeanOn at unexpected hours:</p>
          <ul>
            <li>A fight with a partner or family member before the workday starts</li>
            <li>Anxiety that peaks on the commute to work</li>
            <li>A difficult workplace interaction during the lunch break</li>
            <li>An acute wave of grief, loneliness, or overwhelm in the late evening</li>
            <li>Something that happened that cannot wait three weeks for a scheduled appointment</li>
          </ul>
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
          <h2>The support you need, available now.</h2>
          <p>No appointment. No waiting list. From ₹160. First 5 minutes free.</p>
          <a href="/browse" className="btn-cta">Browse available listeners &rarr;</a>
        </div>

        <div className="section">
          <h2>You Might Also Find This Helpful</h2>
          <div className="related">
            <a href="/talk-therapy-india">Talk therapy India &rarr;</a>
            <a href="/paid-counselling-india">Paid counselling &rarr;</a>
            <a href="/empathy-india">Empathy India &rarr;</a>
            <a href="/rant-online-india">Rant online &rarr;</a>
            <a href="/get-it-off-your-chest-india">Get it off your chest &rarr;</a>
          </div>
        </div>
      </div>
    </>
  )
}
