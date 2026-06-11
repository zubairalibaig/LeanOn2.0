import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Peer Support for Anxiety in India | Talk Anonymously | LeanOn',
  description: 'Manage anxiety with peer support. Talk to a trained listener anonymously on LeanOn. Free first session. Available across India.',
  alternates: { canonical: 'https://www.leanon.app/support/anxiety', languages: { 'en-IN': 'https://www.leanon.app/support/anxiety' } },
  openGraph: {
    title: 'Peer Support for Anxiety in India | Talk Anonymously | LeanOn',
    description: 'Manage anxiety with peer support. Talk to a trained listener anonymously on LeanOn. Free first session. Available across India.',
    url: 'https://www.leanon.app/support/anxiety',
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
      name: 'What types of anxiety can peer support help with?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Peer support on LeanOn can help with work anxiety, exam anxiety, health anxiety, relationship anxiety, social anxiety, and general worry and racing thoughts. Our listeners are not therapists but have personal lived experience with anxiety and offer a non-judgmental space to talk through what you are feeling.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is anxiety common among young Indians?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Studies indicate that anxiety disorders affect a significant portion of India\'s population, with young people and urban professionals particularly affected. Work pressure, competitive exams, financial insecurity, and social expectations all contribute to high anxiety levels in India.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is peer support different from therapy for anxiety?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Therapy involves trained mental health professionals using clinical techniques to treat anxiety. Peer support involves people with lived experience of anxiety offering empathy, understanding, and practical coping insights. Both have value — peer support is often more accessible, affordable, and available immediately.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can talking about anxiety make it worse?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In a safe, non-judgmental environment, talking about anxiety generally helps rather than hurts. Putting feelings into words (a process psychologists call "affect labelling") can reduce the intensity of anxious feelings. LeanOn listeners are trained to hold space without feeding spirals or catastrophising.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if my anxiety is severe — should I use LeanOn?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LeanOn is peer support, not a substitute for clinical care. If you are experiencing severe anxiety, panic attacks, or anxiety that significantly impairs your daily functioning, we encourage you to also consult a mental health professional. LeanOn can complement professional care but is not a replacement for it.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Support', item: 'https://www.leanon.app/support' },
    { '@type': 'ListItem', position: 3, name: 'Anxiety', item: 'https://www.leanon.app/support/anxiety' },
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
  .notice{background:#FFF8F0;border:1.5px solid #FFD9A0;border-radius:16px;padding:16px 20px;margin-bottom:24px;font-size:14px;color:#7A5020;font-weight:600;line-height:1.6;}
`

export default function AnxietySupportPage() {
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
          <span style={{color:'var(--navy)'}}>Anxiety</span>
        </nav>

        <div className="hero">
          <p className="tag">Peer Support · Anxiety</p>
          <h1>Your <em>Anxious Mind</em> Deserves to Be Heard</h1>
          <p className="lead">Anxiety affects millions of people in India — from work pressure and exam stress to racing thoughts that won&apos;t quit at 3 AM. LeanOn connects you with peer listeners who have managed their own anxiety and truly understand what you are going through.</p>
        </div>

        <div style={{background:'#EBF5FB',borderLeft:'4px solid #1A8FA0',borderRadius:'0 12px 12px 0',padding:'14px 18px',marginBottom:28,fontSize:14,color:'#0F4867',fontWeight:600,lineHeight:1.65}}>
          🆘 In crisis? Call <strong><a href="tel:08046110007" style={{color:'#0F4867',fontWeight:800}}>NIMHANS 080-46110007</a></strong> or <strong><a href="tel:14416" style={{color:'#0F4867',fontWeight:800}}>Tele-MANAS 14416</a></strong> (free · 24/7 · Govt of India)
        </div>

        <div className="section">
          <h2>Understanding Anxiety in Modern India</h2>
          <p>Anxiety is not just feeling nervous before a presentation. It is a persistent, often exhausting experience of worry, physical tension, and mental restlessness that can significantly impact your quality of life. And in today&apos;s India, the triggers are everywhere.</p>

          <h3>Work Anxiety</h3>
          <p>The pressure of India&apos;s competitive job market — layoffs, performance reviews, toxic managers, always-on culture — creates a specific kind of work anxiety that is hard to escape. When your livelihood feels perpetually at risk, the nervous system stays in near-constant alert.</p>

          <h3>Exam Anxiety</h3>
          <p>From board exams to JEE, NEET, CAT, UPSC, and professional certifications, India&apos;s exam culture places enormous pressure on students. Exam anxiety is not about being weak — it is the predictable result of extremely high stakes combined with enormous family and social expectations.</p>

          <h3>Health Anxiety</h3>
          <p>Health anxiety (sometimes called hypochondria) involves excessive worry about having or developing a serious illness. In the era of Google-diagnosed symptoms and medical misinformation, health anxiety has become increasingly common — and deeply isolating, because it is often dismissed by others.</p>

          <h3>Relationship Anxiety</h3>
          <p>Anxiety in relationships — fear of abandonment, overthinking every text, feeling like you are &quot;too much&quot; — is one of the most painful and least understood forms of anxiety. It can derail otherwise healthy relationships and leave you feeling broken.</p>

          <h3>Racing Thoughts at Night</h3>
          <p>Many people with anxiety describe their worst moments as nighttime — lying in bed with a mind that will not slow down, replaying conversations, catastrophising about the future, unable to sleep. This mental chatter is a hallmark of anxiety, and it is treatable.</p>
        </div>

        <div className="section">
          <h2>How LeanOn Helps With Anxiety</h2>

          <h3>Listeners Who Have Been There</h3>
          <p>Every LeanOn listener with anxiety expertise has personally navigated it. They know what a panic attack feels like from the inside. They know the specific misery of health anxiety. They know how hard it is to explain to someone who has never experienced it why you just cannot &quot;calm down.&quot;</p>

          <h3>A Non-Judgmental Ear</h3>
          <p>One of the most painful parts of anxiety is feeling like you cannot talk about it — friends get impatient, family minimises it, colleagues would think less of you. LeanOn gives you a private space to say everything without editing yourself.</p>

          <h3>Grounding and Coping Insights</h3>
          <p>Our listeners share what has actually worked for them — breathing techniques, grounding practices, ways of reframing anxious thoughts — not as prescriptions, but as peer insights from people who have tried these things in real life.</p>

          <h3>Available During Anxiety Peaks</h3>
          <p>Anxiety does not respect business hours. LeanOn is available 24/7, so when the spiral hits at midnight or your chest tightens before a Monday morning meeting, you have someone to reach out to immediately.</p>
        </div>

        <h2 style={{fontSize:'20px',fontWeight:800,color:'var(--navy)',marginBottom:'16px'}}>Listeners Who Understand Anxiety</h2>
        <div className="listeners-grid">
          {[
            {
              emoji: '🫁',
              name: 'Rahul',
              tag: 'Work & Career Anxiety',
              bio: 'Navigated severe work anxiety during a corporate career. Now helps others find calm amid professional pressure.'
            },
            {
              emoji: '📚',
              name: 'Sneha',
              tag: 'Exam Anxiety',
              bio: 'Overcame crippling NEET anxiety. Understands exactly what exam season feels like from the inside.'
            },
            {
              emoji: '💙',
              name: 'Vikram',
              tag: 'Health Anxiety',
              bio: 'Spent years with health anxiety before finding what helped. Offers real insights, not platitudes.'
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
          <h2>Your Anxiety Doesn&apos;t Have to Be This Loud</h2>
          <p>Connect with a peer listener who truly understands. First 5 minutes free — no appointment needed.</p>
          <div className="cta-btns">
            <a href="/browse?topic=anxiety"><button className="btn-primary">Find an Anxiety Listener</button></a>
            <a href="/auth"><button className="btn-secondary">Create Free Account</button></a>
          </div>
        </div>

        <div className="section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <div className="faq-q">What types of anxiety can peer support help with?</div>
            <div className="faq-a">Peer support on LeanOn can help with work anxiety, exam anxiety, health anxiety, relationship anxiety, social anxiety, and general worry and racing thoughts. Our listeners are not therapists but have personal lived experience with anxiety and offer a non-judgmental space to talk through what you are feeling.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Is anxiety common among young Indians?</div>
            <div className="faq-a">Yes. Studies indicate that anxiety disorders affect a significant portion of India&apos;s population, with young people and urban professionals particularly affected. Work pressure, competitive exams, financial insecurity, and social expectations all contribute to high anxiety levels in India.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">How is peer support different from therapy for anxiety?</div>
            <div className="faq-a">Therapy involves trained mental health professionals using clinical techniques to treat anxiety. Peer support involves people with lived experience of anxiety offering empathy, understanding, and practical coping insights. Both have value — peer support is often more accessible, affordable, and available immediately.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Can talking about anxiety make it worse?</div>
            <div className="faq-a">In a safe, non-judgmental environment, talking about anxiety generally helps rather than hurts. Putting feelings into words can reduce the intensity of anxious feelings. LeanOn listeners are trained to hold space without feeding spirals or catastrophising.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">What if my anxiety is severe — should I use LeanOn?</div>
            <div className="faq-a">LeanOn is peer support, not a substitute for clinical care. If you are experiencing severe anxiety, panic attacks, or anxiety that significantly impairs your daily functioning, we encourage you to also consult a mental health professional. LeanOn can complement professional care but is not a replacement for it.</div>
          </div>
        </div>

        <div className="section">
          <h2>Related Support Topics</h2>
          <p>Anxiety often connects with other challenges. Explore more peer support on LeanOn:</p>
          <div className="related">
            <a href="/support/loneliness" className="related-link">Loneliness</a>
            <a href="/support/student-stress" className="related-link">Student Stress</a>
            <a href="/support/breakup" className="related-link">Breakup & Heartbreak</a>
            <a href="/support/career-confusion" className="related-link">Career Confusion</a>
            <a href="/support/founder-burnout" className="related-link">Founder Burnout</a>
            <a href="/support/relationship-stress" className="related-link">Relationship Stress</a>
            <a href="/support/emotional-support" className="related-link">Emotional Support</a>
            <a href="/browse" className="related-link">Browse All Listeners</a>
          </div>
        </div>

        {/* People Also Search For */}
        <div className="section">
          <h2>People Also Search For</h2>
          <p>If you&apos;re looking for anxiety support, these pages may also help:</p>
          <div className="related">
            <a href="/blog/peer-support-vs-therapy-india" className="related-link">Peer support vs therapy</a>
            <a href="/blog/what-does-lean-on-mean" className="related-link">What does &quot;lean on&quot; mean?</a>
            <a href="/blog/how-peer-support-works" className="related-link">How peer support works</a>
            <a href="/blog/affordable-alternatives-to-therapy-in-india" className="related-link">Affordable alternatives to therapy</a>
            <a href="/blog/anonymous-emotional-support-india" className="related-link">Anonymous support</a>
            <a href="/blog/mens-mental-health-talking-is-strength" className="related-link">Men&apos;s mental health</a>
            <a href="/bengaluru" className="related-link">Peer support Bengaluru</a>
            <a href="/mumbai" className="related-link">Peer support Mumbai</a>
            <a href="/delhi" className="related-link">Peer support Delhi</a>
          </div>
        </div>

        {/* City availability */}
        <p style={{textAlign:'center',fontSize:'13px',color:'var(--gray)',fontWeight:600,marginBottom:'40px'}}>
          Available across India: <a href="/bengaluru" style={{color:'var(--teal)'}}>Bengaluru</a> · <a href="/mumbai" style={{color:'var(--teal)'}}>Mumbai</a> · <a href="/delhi" style={{color:'var(--teal)'}}>Delhi</a> · <a href="/chennai" style={{color:'var(--teal)'}}>Chennai</a> · <a href="/hyderabad" style={{color:'var(--teal)'}}>Hyderabad</a> · <a href="/pune" style={{color:'var(--teal)'}}>Pune</a> · <a href="/kolkata" style={{color:'var(--teal)'}}>Kolkata</a>
        </p>
      </div>
    </>
  )
}
