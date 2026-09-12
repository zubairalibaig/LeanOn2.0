import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Teen Mental Health India — You Don\'t Have to Figure It Out Alone | LeanOn',
  description: 'Class 12 pressure. Parent expectations. Social anxiety. It\'s a lot. Talk to someone who gets it — anonymous peer support from ₹160.',
  keywords: ['teen mental health india', 'adolescent mental health india', 'teenager anxiety india', 'teen depression india', 'student mental health india class 12', 'board exam stress india', 'teen peer support india'],
  alternates: { canonical: 'https://www.leanon.app/teen-mental-health-india', languages: { 'en-IN': 'https://www.leanon.app/teen-mental-health-india' } },
  openGraph: {
    title: 'Teen Mental Health India — You Don\'t Have to Figure It Out Alone | LeanOn',
    description: 'Class 12 pressure. Parent expectations. Social anxiety. It\'s a lot. Talk to someone who gets it — anonymous peer support from ₹160.',
    url: 'https://www.leanon.app/teen-mental-health-india',
    siteName: 'LeanOn',
    type: 'website',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is LeanOn safe for teenagers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. LeanOn is designed to be safe and anonymous. Listeners are trained, sessions are confidential, and there is no sharing of information with parents or schools. For anyone in crisis, LeanOn always refers to professional helplines: NIMHANS (080-46110007) and Tele-MANAS (14416).',
      },
    },
    {
      '@type': 'Question',
      name: 'Will my parents know?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. LeanOn requires only a phone number and a first name. Sessions are private and confidential. No notifications are sent to parents or guardians. What you share stays between you and your listener.',
      },
    },
    {
      '@type': 'Question',
      name: 'What can I talk about?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Anything that is weighing on you. Exam pressure, parents not understanding, feeling like a failure, first heartbreak, social anxiety, not knowing who you want to be, comparing yourself to classmates, feeling lost. All of it is welcome.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is this like therapy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. LeanOn is peer support — a real human conversation with someone who has been through something similar. It is not clinical therapy. For clinical mental health needs, please see a professional. For the everyday pressure and confusion of being a teenager in India, peer support is often exactly what helps.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I talk about feeling like a failure?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — this is one of the most common things students come to LeanOn to talk about. The feeling that you are not enough, that you are letting your parents down, that everyone else has it together. You are not alone in this, and you do not have to carry it alone.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Teen Mental Health India', item: 'https://www.leanon.app/teen-mental-health-india' },
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
  .parent-note{background:var(--light);border-radius:16px;padding:20px 24px;margin-bottom:16px;}
  .parent-note h3{font-size:15px;font-weight:800;color:var(--teal);margin-bottom:8px;}
  .parent-note p{font-size:14px;color:var(--gray);line-height:1.7;margin-bottom:0;font-weight:500;}
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
`

export default function TeenMentalHealthIndiaPage() {
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
          <span style={{color:'var(--navy)'}}>Teen Mental Health India</span>
        </nav>

        <div className="hero">
          <p className="tag">Teen Support · India · From ₹160</p>
          <h1>Nobody told you adulting would feel like <em>drowning before it even started.</em></h1>
          <p className="lead">Board exams. JEE/NEET pressure. Parent expectations. Social media. First heartbreak. Identity confusion. The pressure on Indian teenagers is enormous — and most of it is carried completely alone.</p>
        </div>

        <div className="section">
          <h2>What Indian Teenagers Are Carrying</h2>
          <ul>
            <li><strong>Board exam pressure</strong> — Class 10, Class 12, the weight of results that feel permanent</li>
            <li><strong>JEE / NEET / competitive exams</strong> — the specific pressure of a system that narrows futures to a single number</li>
            <li><strong>Parent expectations</strong> — the pressure of wanting to make them proud while not knowing what you actually want</li>
            <li><strong>Comparison with classmates</strong> — the person who got 95% when you got 78%, the ranker, the one who seems to have it figured out</li>
            <li><strong>Social media</strong> — everyone else's highlight reel against your own private struggles</li>
            <li><strong>First heartbreak</strong> — which adults often dismiss but which hurts exactly as much as it hurts</li>
            <li><strong>Identity confusion</strong> — who are you? what do you want? what if you do not want what everyone expects?</li>
          </ul>
        </div>

        <div className="section">
          <h2>Why Parents Are Not Always the Answer</h2>
          <p>Parents love you. But talking to them sometimes adds pressure rather than releasing it. They worry. They react. Their anxiety becomes your anxiety. They might give advice when you just needed to be heard. None of that is wrong — they care. But sometimes you need a space where care does not come with pressure attached.</p>
          <p>LeanOn is that space. Anonymous, confidential, no one in your family knows you are here.</p>
        </div>

        <div className="parent-note">
          <h3>A Note to Parents</h3>
          <p>If you are a parent reading this for your teen — peer support gives teenagers a safe space to process without feeling judged. That is healthy. The goal is not to replace your relationship; it is to give them somewhere to put the things they are not yet ready to bring to you. That often makes them more able to talk to you, not less.</p>
        </div>

        <div className="cta-card">
          <h2>You Don&apos;t Have to Figure It All Out Alone</h2>
          <p>Anonymous peer support from ₹160. No parents notified, no records, just someone who listens.</p>
          <div className="cta-btns">
            <a href="/browse"><button className="btn-primary">Browse listeners →</button></a>
            <a href="/auth"><button className="btn-secondary">Join LeanOn →</button></a>
          </div>
        </div>

        <div className="section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <div className="faq-q">Is LeanOn safe for teenagers?</div>
            <div className="faq-a">Yes. LeanOn is anonymous and confidential. Listeners are trained, sessions are private, and no information is shared with parents or schools. For anyone in crisis, LeanOn always refers to NIMHANS (080-46110007) and Tele-MANAS (14416).</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Will my parents know?</div>
            <div className="faq-a">No. LeanOn requires only a phone number and a first name. Sessions are private. No notifications are sent to parents or guardians. What you share stays between you and your listener.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">What can I talk about?</div>
            <div className="faq-a">Anything. Exam pressure, parents not understanding, feeling like a failure, first heartbreak, social anxiety, not knowing who you want to be, comparing yourself to classmates. All of it is welcome.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Is this like therapy?</div>
            <div className="faq-a">No. LeanOn is peer support — a real human conversation with someone who has been through something similar. Not clinical therapy. For clinical mental health needs, please see a professional.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Can I talk about feeling like a failure?</div>
            <div className="faq-a">Yes — this is one of the most common things students come to LeanOn to talk about. The feeling that you are not enough, that you are letting your parents down. You are not alone in this.</div>
          </div>
        </div>

        <div className="section">
          <h2>Related Pages</h2>
          <div className="related">
            <a href="/browse" className="related-link">Browse Listeners</a>
            <a href="/support/student-stress" className="related-link">Student Stress</a>
            <a href="/support/family-pressure-india" className="related-link">Family Pressure</a>
            <a href="/support/feeling-like-a-failure" className="related-link">Feeling Like a Failure</a>
            <a href="/blog/feel-like-a-failure-india" className="related-link">Feel Like a Failure</a>
            <a href="/stress-management-india" className="related-link">Stress Management</a>
          </div>
        </div>
      </div>
    </>
  )
}
