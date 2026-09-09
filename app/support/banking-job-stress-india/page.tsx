import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Banking Job Stress India — The Pressure That Comes Home With You | LeanOn',
  description: 'Bank jobs in India come with targets, long hours, branch pressure, and the specific exhaustion of working in a high-accountability environment every day. Talk to someone who gets what that weight feels like.',
  keywords: [
    'banking job stress India', 'bank employee burnout India', 'bank job pressure India',
    'bank work stress India', 'PSU bank stress India', 'private bank burnout India',
    'banking sector mental health India', 'bank targets pressure India', 'bank employee mental health',
    'corporate job stress India', 'office job burnout India', 'high pressure job India',
    'job stress and loneliness India', 'banking career burnout India', 'bank job exhausting India',
  ],
  alternates: { canonical: 'https://www.leanon.app/support/banking-job-stress-india', languages: { 'en-IN': 'https://www.leanon.app/support/banking-job-stress-india' } },
  openGraph: {
    title: 'Banking Job Stress India — The Pressure That Comes Home With You | LeanOn',
    description: 'Targets, long hours, accountability pressure. The specific exhaustion of a bank job in India. Talk to someone who gets it.',
    url: 'https://www.leanon.app/support/banking-job-stress-india',
    siteName: 'LeanOn',
    type: 'article',
    images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn — Banking Job Stress India' }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why is banking so stressful in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Banking in India — whether PSU or private sector — typically involves aggressive targets (loan disbursals, account openings, insurance cross-selling), hierarchical pressure, customer-facing accountability, and long hours that extend well beyond official timings. Branch staff often face pressure from multiple directions simultaneously: regional management pushing numbers, customers demanding resolution, and colleagues navigating the same stress. Private sector banks often add performance-linked compensation, which means financial anxiety compounds the work anxiety. The result is a specific, sustained high-accountability pressure that is difficult to leave at the office.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it normal to feel exhausted after a bank job every day?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — and more than in many other professions. Banking combines cognitive demand (financial decisions, regulatory compliance), emotional labour (customer interactions, often including distressed customers), and performance pressure (targets, audits) every single day. The combination is draining in a way that does not always feel proportionate to "just sitting at a desk." Coming home exhausted from a bank job is the accurate response to what the job actually asks of you.',
      },
    },
    {
      '@type': 'Question',
      name: 'I feel lonely even though I interact with people all day at work. Is that normal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Completely. Customer-facing and colleague interactions at work are professional interactions — they are not the same as genuine human connection. You can spend eight hours talking to people and still feel that nobody actually knows how you are doing. The loneliness that accompanies high-pressure jobs is often this specific: the sense that all your social energy goes into the job, leaving nothing for the deeper connections that actually help. And there is rarely space in banking environments to admit struggle — the culture requires appearing on top of things.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I deal with banking stress without quitting?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most useful things tend to be: having somewhere to put the stress (talking about it, not just sitting with it), building some boundary between work and non-work time (even imperfect ones), and finding what gives you some sense of control or identity outside the job. The specific difficulty with banking stress is that targets and accountability follow you — they are hard to put down even when you leave the branch. Talking to someone who will just listen — without advice, without fixing — tends to reduce the weight enough to see it more clearly.',
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
    { '@type': 'ListItem', position: 3, name: 'Banking Job Stress India', item: 'https://www.leanon.app/support/banking-job-stress-india' },
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
  h1{font-size:clamp(26px,5vw,42px);font-weight:900;color:var(--navy);line-height:1.13;margin-bottom:18px;}
  h1 em{color:var(--orange);font-style:normal;}
  .lead{font-size:17px;color:var(--gray);line-height:1.78;font-weight:500;margin-bottom:36px;max-width:620px;}
  h2{font-size:20px;font-weight:800;color:var(--navy);margin-top:38px;margin-bottom:14px;}
  p{font-size:15px;color:#3A6070;line-height:1.82;font-weight:500;margin-bottom:16px;}
  .stressors{display:grid;gap:10px;margin:20px 0;}
  .stressor{display:flex;gap:12px;align-items:flex-start;background:white;border-radius:14px;padding:16px 20px;border:1.5px solid var(--border);}
  .stressor-dot{width:8px;height:8px;border-radius:50%;background:var(--orange);margin-top:7px;flex-shrink:0;}
  .stressor p{font-size:14px;font-weight:600;color:var(--navy);margin:0;line-height:1.6;}
  .faq{margin-top:44px;}
  .faq-item{border-bottom:1.5px solid var(--border);padding:18px 0;}
  .faq-item:last-child{border-bottom:none;}
  .faq-q{font-size:15px;font-weight:800;color:var(--navy);margin-bottom:8px;}
  .faq-a{font-size:14px;color:#3A6070;line-height:1.72;font-weight:500;}
  .cta-card{background:var(--navy);border-radius:24px;padding:42px 32px;text-align:center;margin-top:52px;}
  .cta-card h2{font-size:22px;font-weight:900;color:white;margin-bottom:12px;}
  .cta-card p{font-size:14px;color:rgba(201,231,244,0.85);font-weight:500;margin-bottom:26px;line-height:1.72;}
  .cta-btns{display:flex;gap:12px;justify-content:center;flex-wrap:wrap;}
  .btn-primary{background:var(--orange);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:15px;padding:14px 28px;border-radius:50px;border:none;cursor:pointer;box-shadow:0 4px 20px rgba(255,153,51,0.35);}
  .btn-secondary{background:rgba(255,255,255,0.12);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:14px;padding:13px 24px;border-radius:50px;border:1.5px solid rgba(255,255,255,0.3);cursor:pointer;}
`

const stressors = [
  'Aggressive monthly targets for loans, accounts, insurance — that do not reset when you have a hard month',
  'Branch-level pressure from regional managers and zonal heads who push regardless of market conditions',
  'Customer interactions that require patience, compliance, and emotional regulation — all day, every day',
  'Regulatory and audit pressure — the consequence of a mistake is disproportionate to the mistake',
  'Long hours that extend well past official timings, especially during quarter-end',
  'The specific weight of being responsible for other people\'s money — customer grievances, fraud cases',
  'Coming home exhausted but still thinking about tomorrow\'s targets',
]

export default function BankingJobStressIndiaPage() {
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
          <span style={{color:'var(--navy)'}}>Banking Job Stress India</span>
        </nav>

        <p className="hero-tag">Banking · Job Stress · Burnout · India</p>
        <h1>The Pressure Doesn&apos;t Stay at the Branch. <em>It Comes Home With You.</em></h1>
        <p className="lead">
          Targets. Audits. Customer complaints. Regional pressure. Insurance cross-selling quotas.
          A bank job in India asks a lot — and it asks it every single day, in a high-accountability
          environment where showing struggle is not really an option. This is for when you need
          somewhere to put that weight.
        </p>

        <h2>What Banking Stress Actually Feels Like</h2>
        <div className="stressors">
          {stressors.map((s, i) => (
            <div key={i} className="stressor">
              <div className="stressor-dot" />
              <p>{s}</p>
            </div>
          ))}
        </div>

        <h2>The Loneliness Inside the Job Pressure</h2>
        <p>
          Banking culture in India tends to reward resilience and punish visible struggle.
          You perform, you manage, you hit the targets or explain why you did not.
          You do not say "I am exhausted" or "this is too much" — because that is not how
          the environment works.
        </p>
        <p>
          The result is that a lot of banking professionals are carrying a significant amount
          while appearing to be fine. They talk to colleagues about work. They talk to family
          about the job. But there is no space for the actual internal experience — the stress,
          the loneliness, the question of whether this is the life they want.
        </p>
        <p>
          LeanOn peer listeners are not career coaches. They will not tell you what to do about your job.
          They will just listen — to the weight of it, to what it actually feels like — without judgment,
          without advice, without making it about themselves.
        </p>

        <div className="faq">
          <h2>Questions</h2>
          {faqSchema.mainEntity.map((item, i) => (
            <div key={i} className="faq-item">
              <div className="faq-q">{item.name}</div>
              <div className="faq-a">{item.acceptedAnswer.text}</div>
            </div>
          ))}
        </div>

        <div className="cta-card">
          <h2>Just Wanted to Talk?</h2>
          <p>Real person. No advice, no judgment. Anonymous. First 5 minutes free, sessions from ₹85.</p>
          <div className="cta-btns">
            <a href="/browse?topic=stress"><button className="btn-primary">Someone is listening — start free now →</button></a>
            <a href="/support/adulting-india"><button className="btn-secondary">Adulting pressure</button></a>
          </div>
        </div>
      </div>
    </>
  )
}
