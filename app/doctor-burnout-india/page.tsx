import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Doctor Burnout India — You Heal Everyone. Who Heals You? | LeanOn',
  description: 'Doctor burnout in India is at crisis levels — long hours, emotional labour, patient deaths, impossible expectations. Talk to someone real, anonymously. From ₹160.',
  keywords: [
    'doctor burnout india', 'healthcare worker mental health india', 'frontline worker india stress',
    'physician burnout india', 'medical professional stress india', 'nurse burnout india',
    'hospital worker stress india', 'medical burnout india',
  ],
  alternates: { canonical: 'https://www.leanon.app/doctor-burnout-india', languages: { 'en-IN': 'https://www.leanon.app/doctor-burnout-india' } },
  openGraph: {
    title: 'Doctor Burnout India — You Heal Everyone. Who Heals You? | LeanOn',
    description: 'Doctor burnout in India is at crisis levels — long hours, emotional labour, patient deaths, impossible expectations. Talk to someone real, anonymously. From ₹160.',
    url: 'https://www.leanon.app/doctor-burnout-india',
    siteName: 'LeanOn',
    type: 'article',
    images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn — Doctor Burnout India' }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is LeanOn confidential?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Sessions are private 1:1 voice calls. Listeners are bound by confidentiality. You sign up with only your phone number and first name. There is no employer connection, no records shared with anyone, no way for your professional life to be affected by what you say. Your session content is completely private.' },
    },
    {
      '@type': 'Question',
      name: 'Will this affect my medical career?',
      acceptedAnswer: { '@type': 'Answer', text: 'No. LeanOn is an anonymous peer support platform. There is no employer, no medical council, no licensing body involved. Nothing you say in a session is connected to your professional identity. Your use of LeanOn is entirely private.' },
    },
    {
      '@type': 'Question',
      name: 'Can I talk about specific cases (anonymised)?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Many doctors use LeanOn specifically to process the weight of what they have witnessed &mdash; patient deaths, difficult diagnoses, impossible situations &mdash; anonymously, without any names. The listener will not encourage you to share identifying information, and what you share stays in the session.' },
    },
    {
      '@type': 'Question',
      name: 'Is it anonymous?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Your first name and phone number. Nothing professional. Nothing that connects to your hospital, your specialty, or your colleagues.' },
    },
    {
      '@type': 'Question',
      name: 'How much time does a session take?',
      acceptedAnswer: { '@type': 'Answer', text: '15 minutes is the shortest paid session. Many doctors find this is enough &mdash; a lunch break, the time between two OPD patients, the gap before a surgery. 30 or 45 minute sessions are also available when you have more time.' },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Doctor Burnout India', item: 'https://www.leanon.app/doctor-burnout-india' },
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

export default function DoctorBurnoutIndiaPage() {
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
          <span style={{color:'var(--navy)'}}>Doctor Burnout India</span>
        </nav>
        <div style={{background:'#EBF5FB',borderLeft:'4px solid #1A8FA0',borderRadius:'0 12px 12px 0',padding:'14px 18px',marginBottom:28,fontSize:14,color:'#0F4867',fontWeight:600,lineHeight:1.65}}>
          In crisis? Call <a href="tel:08046110007" style={{color:'#1A8FA0',fontWeight:800}}>NIMHANS 080-46110007</a> or <a href="tel:14416" style={{color:'#1A8FA0',fontWeight:800}}>Tele-MANAS 14416</a> (free, 24/7)
        </div>
        <div className="hero">
          <p className="badge">Doctor Burnout &middot; India &middot; Anonymous</p>
          <h1>You spend your day carrying other people&apos;s worst moments. <em>Who carries yours?</em></h1>
          <p className="lead">Doctors in India aren&apos;t supposed to struggle. You&apos;re the one people call when everything is falling apart. But you&apos;re human. The weight accumulates. You&apos;re allowed to say it out loud.</p>
          <a href="/browse" className="cta-hero">Talk to someone &rarr;</a>
        </div>
        <div className="section">
          <h2>Doctor Burnout in India: The Scale</h2>
          <p>Studies across Indian hospitals and medical colleges consistently find burnout rates of 60&ndash;80% among resident doctors and a significant proportion of senior physicians. The pathway is well worn: the extreme pressure of NEET, the grind of residency with 36-hour shifts, the transition to consultant practice with its own different pressures, and the permanent weight of working in a healthcare system chronically short of resources and personnel.</p>
          <p>Burnout among Indian doctors manifests as exhaustion that sleep does not resolve, emotional detachment from patients (the survival mechanism that eventually becomes its own problem), and a pervasive sense that the effort is not matched by the outcome or the recognition.</p>
        </div>
        <div className="section">
          <h2>What Doctors Carry That They Cannot Put Down</h2>
          <ul>
            <li>Patient deaths, especially unexpected ones or patients who arrived too late for what was needed</li>
            <li>The grief of families that you absorb every shift</li>
            <li>The impossible expectations &mdash; from patients, from administration, from families who believe that dedication should be without limit</li>
            <li>The guilt when the outcome is bad despite everything you did</li>
            <li>The silence inside the profession about how much this takes &mdash; which means carrying it alone</li>
            <li>The distance from your own family and life, accumulated over years of prioritising the work</li>
          </ul>
        </div>
        <div className="section">
          <h2>Why Doctors Don&apos;t Seek Support</h2>
          <p>There is significant stigma within the medical profession around struggling. The culture of medicine in India valorises endurance and minimises vulnerability. Admitting that the work is taking a toll feels like a professional failing, not a human response to inhuman conditions.</p>
          <p>There is also practical inaccessibility. Therapists who understand the medical context are rare. The appointment waiting times are ironic for people who understand better than anyone how overloaded the system is. And the fear that using mental health services might affect professional standing &mdash; however unfounded &mdash; keeps many away.</p>
        </div>
        <div className="section">
          <h2>Why Anonymous Peer Support Works for Doctors</h2>
          <p>There is no professional risk. Nothing you say is connected to your employer, your hospital, your license. The listener has no knowledge of the medical hierarchy you navigate daily. You can say what you actually feel about what you have witnessed &mdash; without the professional self-censorship that governs everything else.</p>
          <p>And 15 minutes fits. During a lunch break. Between OPD patients. After a night shift, before you sleep. The session does not require a major scheduling commitment in a life that is already oversubscribed.</p>
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
          <h2>You take care of everyone. Take 15 minutes for yourself.</h2>
          <p>Anonymous. Confidential. No professional risk. From ₹160.</p>
          <a href="/browse" className="btn-cta">Browse listeners &rarr;</a>
        </div>
        <div className="section">
          <h2>You Might Also Find This Helpful</h2>
          <div className="related">
            <a href="/work-stress-india">Work stress India &rarr;</a>
            <a href="/cant-tell-anyone-india">Can&apos;t tell anyone &rarr;</a>
            <a href="/get-it-off-your-chest-india">Get it off your chest &rarr;</a>
            <a href="/empathy-india">Empathy India &rarr;</a>
            <a href="/talk-therapy-india">Talk therapy &rarr;</a>
          </div>
        </div>
      </div>
    </>
  )
}
