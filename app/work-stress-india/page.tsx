import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Work Stress India — Talk to Someone Who Gets IT Burnout | LeanOn',
  description: 'Work stress eating you alive? Talk to a real person — not an HR bot. Peer support for corporate burnout, IT pressure, office politics. From ₹160.',
  keywords: ['work stress india', 'IT burnout india', 'corporate burnout india', 'office politics stress india', 'layoff stress india', 'professional burnout india', 'tech job stress india', 'software engineer burnout india'],
  alternates: { canonical: 'https://www.leanon.app/work-stress-india', languages: { 'en-IN': 'https://www.leanon.app/work-stress-india' } },
  openGraph: {
    title: 'Work Stress India — Talk to Someone Who Gets IT Burnout | LeanOn',
    description: 'Work stress eating you alive? Talk to a real person — not an HR bot. Peer support for corporate burnout, IT pressure, office politics. From ₹160.',
    url: 'https://www.leanon.app/work-stress-india',
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
      name: 'What is IT burnout?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'IT burnout is the result of prolonged work stress in the technology sector — chronic exhaustion that goes beyond normal tiredness, detachment from work you used to care about, and a growing sense that nothing you do is ever enough. It is caused by long hours, high pressure, constant change, and a culture that rewards hustle and penalises rest.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I talk about work stress without it affecting my job?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LeanOn is completely anonymous and confidential. Your real name, employer, and personal details are never required. What you say in a session stays between you and your listener. No HR involvement, no professional risk.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is this anonymous?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. You sign up with a phone number and a first name only. No employer, no last name, no photo. Sessions are confidential. Nothing you say reaches your company.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I talk during lunch break?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Sessions start within minutes of browsing. A 15-minute session at ₹160 fits into a lunch break or commute. Many people use LeanOn between meetings when they need to decompress.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if I am afraid I will get fired?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Fear of losing your job is one of the most common things people come to LeanOn to talk about — layoff anxiety, PIP pressure, manager relationships, wondering if you will be next. It is one of the heaviest things to carry alone because you cannot talk about it openly at work.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Work Stress India', item: 'https://www.leanon.app/work-stress-india' },
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

export default function WorkStressIndiaPage() {
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
          <span style={{color:'var(--navy)'}}>Work Stress India</span>
        </nav>

        <div className="hero">
          <p className="tag">IT Burnout · Corporate Burnout · India · From ₹160</p>
          <h1>IT job. Late nights. Toxic manager. <em>You can&apos;t talk to your team. You can talk here.</em></h1>
          <p className="lead">Performance review anxiety. Midnight deployments. 12-hour days. FAANG rejection. The pressure of India&apos;s corporate and tech world is specific, relentless, and almost impossible to talk about with anyone at work. That is what LeanOn is for.</p>
        </div>

        <div className="section">
          <h2>What Indian Professionals Talk About on LeanOn</h2>
          <ul>
            <li><strong>IT burnout</strong> — the slow hollowing out of a job that used to mean something</li>
            <li><strong>Software engineering pressure</strong> — sprint deadlines, performance reviews, the constant feeling of not being senior enough, fast enough, impressive enough</li>
            <li><strong>Corporate politics</strong> — managers who take credit, colleagues who undermine, organisations that reward appearance over substance</li>
            <li><strong>Layoff fear</strong> — watching colleagues get let go and waiting for your name to come up</li>
            <li><strong>Growth anxiety</strong> — am I in the right field? should I switch? is everyone else moving faster than me?</li>
            <li><strong>Startup grind</strong> — the exhaustion of building something when the culture forbids admitting it is exhausting</li>
          </ul>
        </div>

        <div className="section">
          <h2>Why HR Is Not the Answer</h2>
          <p>HR exists to protect the company, not you. Telling HR about your stress is a professional risk, not a support mechanism.</p>
          <h3>Why Friends Do Not Always Get It</h3>
          <p>Friends outside the industry do not understand the specific texture of tech work. Friends inside the industry are often competing with you.</p>
          <h3>Why Therapy Feels Like Too Much</h3>
          <p>Booking a therapist, going on a waitlist, explaining Indian corporate culture from scratch — it is a lot of friction for what is, honestly, work stress. Sometimes you just need to talk to someone who has been in a similar situation and actually gets it.</p>
          <h3>Why Peer Support Works</h3>
          <p>LeanOn listeners have been in the corporate world. They are Indian. They understand the pressures. They listen without professional risk, without advice-pushing, and without the social consequences of admitting you are struggling to someone in your network. From ₹160, in a 15-minute window, during your commute or lunch break.</p>
        </div>

        <div className="cta-card">
          <h2>Talk to Someone Who Gets the Corporate World</h2>
          <p>Anonymous peer support for work stress and IT burnout. From ₹160. No appointment, available now.</p>
          <div className="cta-btns">
            <a href="/browse"><button className="btn-primary">Browse listeners →</button></a>
            <a href="/auth"><button className="btn-secondary">Join LeanOn →</button></a>
          </div>
        </div>

        <div className="section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <div className="faq-q">What is IT burnout?</div>
            <div className="faq-a">IT burnout is the result of prolonged work stress — chronic exhaustion beyond tiredness, detachment from work you used to care about, and a growing sense that nothing you do is ever enough. Caused by long hours, high pressure, and a culture that rewards hustle and penalises rest.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">How do I talk about work stress without it affecting my job?</div>
            <div className="faq-a">LeanOn is completely anonymous and confidential. Your real name, employer, and personal details are never required. What you say in a session stays between you and your listener. No HR involvement, no professional risk.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Is this anonymous?</div>
            <div className="faq-a">Yes. You sign up with a phone number and a first name only. No employer, no last name, no photo. Sessions are confidential. Nothing you say reaches your company.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Can I talk during lunch break?</div>
            <div className="faq-a">Yes. Sessions start within minutes of browsing. A 15-minute session at ₹160 fits into a lunch break or commute. Many people use LeanOn between meetings when they need to decompress.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">What if I am afraid I will get fired?</div>
            <div className="faq-a">Fear of losing your job is one of the most common things people come to LeanOn to talk about — layoff anxiety, PIP pressure, manager relationships. It is one of the heaviest things to carry alone because you cannot talk about it openly at work.</div>
          </div>
        </div>

        <div className="section">
          <h2>Related Pages</h2>
          <div className="related">
            <a href="/browse" className="related-link">Browse Listeners</a>
            <a href="/stress-management-india" className="related-link">Stress Management India</a>
            <a href="/support/banking-job-stress-india" className="related-link">Banking Job Stress</a>
            <a href="/support/founder-burnout" className="related-link">Founder Burnout</a>
            <a href="/support/career-confusion" className="related-link">Career Confusion</a>
            <a href="/blog/it-burnout-india-how-to-cope" className="related-link">IT Burnout Guide</a>
          </div>
        </div>
      </div>
    </>
  )
}
