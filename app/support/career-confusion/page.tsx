import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Career Confusion Support India | Job Change Layoff Burnout Help | LeanOn',
  description: 'Facing a layoff, career switch, or mid-career crisis in India? Talk to peer listeners who have navigated career confusion and found clarity. First 5 minutes free.',
  alternates: { canonical: 'https://leanon.app/support/career-confusion' },
  openGraph: {
    title: 'Career Confusion Support — LeanOn',
    description: 'Peer support for career confusion, layoffs, career switches, and mid-career crises in India. Real conversations with people who have been there.',
    url: 'https://leanon.app/support/career-confusion',
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
      name: 'How do I cope with being laid off in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Layoffs in India are particularly stressful because of financial obligations, family expectations, and the social identity tied to employment. The immediate aftermath involves practical concerns (income replacement, job search) and emotional ones (shock, shame, anger, loss of routine). Allow yourself to process the emotional response before jumping into the job search. Talk to people who have been through layoffs — they can normalize the experience and share what actually helps.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it too late to change careers at 30 or 35 in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Career switches at 30, 35, or even 40 are increasingly common in India as industries evolve and people find that the career they trained for is not fulfilling. The path is not always linear and involves real sacrifices — often a pay cut in the short term. But many people who have made mid-career switches report significantly better life satisfaction. The "too late" fear is real but rarely accurate.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a mid-career crisis and how do I know if I am having one?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A mid-career crisis typically occurs in your 30s or 40s when you realise that the career path you have been pursuing does not bring the meaning or satisfaction you expected. Signs include dreading work, feeling trapped, questioning whether your work matters, comparing yourself to peers and feeling behind or wrong, and a vague sense that you have been living someone else\'s definition of success.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I handle salary negotiation stress?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Salary negotiation anxiety is extremely common, especially in India where discussing money openly is often culturally taboo. Many people end up accepting below-market offers because of discomfort with negotiation. Peer listeners who have navigated salary conversations can share what worked for them, help you practice, and support you in approaching these conversations with more confidence.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can peer support help with career decisions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Peer support is not career counselling and will not tell you what job to take. But it offers something different and often more valuable: the experience of talking to someone who has been through similar crossroads, who can share what it actually felt like to make a career switch or survive a layoff, and who can help you articulate what you actually want rather than what you think you should want.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Support', item: 'https://leanon.app/support' },
    { '@type': 'ListItem', position: 3, name: 'Career Confusion', item: 'https://leanon.app/support/career-confusion' },
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
  .scenarios{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:12px;margin-bottom:16px;}
  .scenario{background:var(--light);border:1.5px solid var(--border);border-radius:16px;padding:16px;font-size:14px;font-weight:700;color:var(--navy);}
  .scenario-desc{font-size:13px;font-weight:500;color:var(--gray);margin-top:6px;line-height:1.5;}
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
`

export default function CareerConfusionSupportPage() {
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
          <a href="/support">Support</a><span>›</span>
          <span style={{color:'var(--navy)'}}>Career Confusion</span>
        </nav>

        <div className="hero">
          <p className="tag">Peer Support · Career Confusion</p>
          <h1>Career Crossroads Are <em>Hard. You Don&apos;t Have to Navigate Them Alone.</em></h1>
          <p className="lead">A layoff, a career switch decision, a mid-career crisis — these moments are some of the most disorienting and isolating a working adult faces. LeanOn connects you with peer listeners who have been through career upheaval and found their footing on the other side.</p>
        </div>

        <div className="section">
          <h2>Career Confusion Is More Common Than You Think</h2>
          <p>In a country where career choices are heavily influenced by family expectations, social status, and financial security — and where admitting you hate your job feels like ingratitude — career confusion carries a particular weight in India.</p>

          <div className="scenarios">
            {[
              {label:'Getting Laid Off',desc:'The shock, shame, and practical scramble after losing a job'},
              {label:'Career Switch',desc:'Leaving a stable field for something that actually excites you'},
              {label:'Mid-Career Crisis',desc:'Questioning everything at 35 after a decade in the wrong direction'},
              {label:'Job Offer Paralysis',desc:'Frozen by the fear of making the wrong career decision'},
              {label:'Toxic Work Culture',desc:'Burned out by a workplace that is destroying your mental health'},
              {label:'Salary Negotiation',desc:'Anxiety around asking for what you are worth'},
            ].map((s,i) => (
              <div key={i} className="scenario">{s.label}<div className="scenario-desc">{s.desc}</div></div>
            ))}
          </div>

          <h3>The Emotional Weight of Career Identity</h3>
          <p>In India, &quot;What do you do?&quot; is often the second question after &quot;What is your name?&quot; Our careers are deeply woven into our identity, our social standing, and our sense of worth. When a career feels wrong — or is forcibly disrupted by a layoff — it affects much more than income. It affects who you feel you are.</p>

          <h3>Layoffs in India&apos;s Tech Sector</h3>
          <p>The global tech layoffs of 2022–2024 hit India particularly hard, affecting hundreds of thousands of workers at companies from startups to MNCs. Many of these workers had built their entire financial plans around high-paying tech salaries. The combination of financial shock, bruised identity, and sudden uncertainty is a unique and brutal experience.</p>

          <h3>Engineering to Something Else</h3>
          <p>Millions of Indians studied engineering because it was the expected path — not because they loved it. Realising in your late 20s or 30s that you want to leave engineering for a creative field, a startup, or a completely different profession is a legitimate and increasingly common crossroads that comes with genuine grief and fear.</p>

          <h3>Mid-Career Crisis</h3>
          <p>The mid-career crisis is real and often arrives quietly in your late 30s — a growing sense of disconnection from your work, questioning whether the sacrifices you made were worth it, watching colleagues get promoted while you feel stagnant, and the creeping anxiety that you have been spending your best years building someone else&apos;s dream.</p>

          <h3>Salary Negotiation Stress</h3>
          <p>Many Indians, particularly women, leave significant money on the table because of anxiety around salary negotiation. In a culture where discussing money feels taboo and assertiveness is sometimes perceived as aggression, advocating for your own compensation can feel deeply uncomfortable. This is learnable — and talking to someone who has done it helps enormously.</p>
        </div>

        <div className="section">
          <h2>How LeanOn Helps With Career Confusion</h2>

          <h3>Not Advice — Perspective</h3>
          <p>Career coaches and counsellors give advice. LeanOn listeners share perspective — what it actually felt like to leave a stable job, survive a layoff, or make a career pivot. This lived experience is different and often more useful than professional guidance when you are in the thick of the confusion.</p>

          <h3>A Space to Say What You Cannot Say Elsewhere</h3>
          <p>You cannot tell your parents you hate your engineering career. You cannot tell colleagues you are thinking of quitting. You cannot admit to your spouse the extent of the financial fear. LeanOn is the private space where you can say all of it without consequences.</p>

          <h3>Normalising Career Non-Linearity</h3>
          <p>One of the most helpful things a peer listener can do is simply confirm that career confusion, pivots, and setbacks are normal — not signs of failure. Hearing this from someone who has been through it, not just read about it, lands differently.</p>

          <h3>Support Through the Transition</h3>
          <p>Career transitions are not events — they are processes that take months or years. LeanOn provides ongoing support through each phase: the shock, the grief, the uncertainty, the tentative exploration, and the rebuilding.</p>
        </div>

        <h2 style={{fontSize:'20px',fontWeight:800,color:'var(--navy)',marginBottom:'16px'}}>Listeners Who Understand Career Confusion</h2>
        <div className="listeners-grid">
          {[
            {
              emoji: '🔄',
              name: 'Tanvi',
              tag: 'Career Switch',
              bio: 'Left a decade-long corporate career for something completely different. Knows the fear, the family pressure, and the relief on the other side.'
            },
            {
              emoji: '📉',
              name: 'Amit',
              tag: 'Tech Layoff Survivor',
              bio: 'Laid off from a top tech company. Rebuilt from zero. Understands the specific shame spiral and what actually helps you move forward.'
            },
            {
              emoji: '🧭',
              name: 'Smita',
              tag: 'Mid-Career Clarity',
              bio: 'Navigated a mid-career crisis at 38 and found work that actually matters to her. Helps others find their own version of that clarity.'
            },
          ].map((l, i) => (
            <div key={i} className="listener-card">
              <div className="listener-avatar">{l.emoji}</div>
              <div className="listener-name">{l.name}</div>
              <div className="listener-tag">{l.tag}</div>
              <p className="listener-bio">{l.bio}</p>
            </div>
          ))}
        </div>

        <div className="cta-card">
          <h2>You Are Allowed to Want Something Different</h2>
          <p>Talk to someone who has been through career confusion and found their way. First 5 minutes free — no judgment, no scripts.</p>
          <div className="cta-btns">
            <a href="/browse?topic=career-confusion"><button className="btn-primary">Find a Career Listener</button></a>
            <a href="/auth"><button className="btn-secondary">Create Free Account</button></a>
          </div>
        </div>

        <div className="section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <div className="faq-q">How do I cope with being laid off in India?</div>
            <div className="faq-a">Layoffs in India are particularly stressful because of financial obligations, family expectations, and the social identity tied to employment. Allow yourself to process the emotional response before jumping into the job search. Talk to people who have been through layoffs — they can normalise the experience and share what actually helps.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Is it too late to change careers at 30 or 35 in India?</div>
            <div className="faq-a">No. Career switches at 30, 35, or even 40 are increasingly common as industries evolve and people find that the career they trained for is not fulfilling. Many people who have made mid-career switches report significantly better life satisfaction. The &quot;too late&quot; fear is real but rarely accurate.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">What is a mid-career crisis and how do I know if I am having one?</div>
            <div className="faq-a">A mid-career crisis typically occurs in your 30s or 40s when you realise that the career path you have been pursuing does not bring the meaning or satisfaction you expected. Signs include dreading work, feeling trapped, questioning whether your work matters, and a vague sense that you have been living someone else&apos;s definition of success.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">How do I handle salary negotiation stress?</div>
            <div className="faq-a">Salary negotiation anxiety is extremely common, especially in India where discussing money openly is often culturally taboo. Peer listeners who have navigated salary conversations can share what worked for them, help you practice, and support you in approaching these conversations with more confidence.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Can peer support help with career decisions?</div>
            <div className="faq-a">Peer support is not career counselling and will not tell you what job to take. But it offers something often more valuable: the experience of talking to someone who has been through similar crossroads — who can help you articulate what you actually want rather than what you think you should want.</div>
          </div>
        </div>

        <div className="section">
          <h2>Related Support Topics</h2>
          <p>Career confusion often connects with other challenges. Explore more peer support on LeanOn:</p>
          <div className="related">
            <a href="/support/anxiety" className="related-link">Anxiety</a>
            <a href="/support/founder-burnout" className="related-link">Founder Burnout</a>
            <a href="/support/loneliness" className="related-link">Loneliness</a>
            <a href="/support/student-stress" className="related-link">Student Stress</a>
            <a href="/support/grief" className="related-link">Grief</a>
            <a href="/browse" className="related-link">Browse All Listeners</a>
          </div>
        </div>
      </div>
    </>
  )
}
