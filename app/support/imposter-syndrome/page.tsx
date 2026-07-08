import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Peer Support for Imposter Syndrome in India | LeanOn',
  description: 'Feel like a fraud despite your success? Talk to a peer listener who understands imposter syndrome. Free first session on LeanOn, available 24/7 across India.',
  alternates: { canonical: 'https://www.leanon.app/support/imposter-syndrome', languages: { 'en-IN': 'https://www.leanon.app/support/imposter-syndrome' } },
  openGraph: {
    title: 'Peer Support for Imposter Syndrome in India | LeanOn',
    description: 'Feel like a fraud despite your success? Talk to a peer listener who understands imposter syndrome. Free first session on LeanOn, available 24/7 across India.',
    url: 'https://www.leanon.app/support/imposter-syndrome',
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
      name: 'What is imposter syndrome and why do high-achievers feel like frauds?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Imposter syndrome is the persistent feeling that you do not deserve your success, despite clear evidence of your competence and hard work. It disproportionately affects high-achievers — toppers, IIT and IIM graduates, and fast-tracked professionals — because the more you accomplish, the more pressure you feel to prove it was not luck.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is imposter syndrome especially common among first-generation professionals in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Many first-generation graduates and professionals reach elite colleges and companies through sheer merit, often from small towns with far fewer resources than their peers. Once inside, differences in English fluency, cultural references, or family background can trigger a persistent feeling of not belonging — even when performance says otherwise.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does imposter syndrome show up in Indian workplaces and institutions like the IITs and IIMs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In hyper-competitive environments where rank and pedigree are constantly discussed, imposter syndrome shows up as chronic comparison, reluctance to speak up in meetings or seminars, over-preparing for basic tasks, and dismissing achievements as luck rather than skill. It is common at every level, from first-year students to senior leaders.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can a peer listener help with imposter syndrome?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LeanOn listeners who have personally struggled with imposter syndrome in tech, corporate, and academic settings offer an empathetic, judgment-free space to voice self-doubt out loud — without it affecting your professional reputation the way venting to a colleague or manager might. Hearing from someone who felt exactly the same and moved past it can be deeply reassuring.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does LeanOn peer support cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LeanOn starts at ₹160 for a 15-minute session, with the first 5 minutes free so you can find the right listener before committing. It is significantly more affordable than therapy and available any time — including the night before a big presentation or interview when self-doubt tends to peak.',
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
    { '@type': 'ListItem', position: 3, name: 'Imposter Syndrome', item: 'https://www.leanon.app/support/imposter-syndrome' },
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
`

export default function ImposterSyndromeSupportPage() {
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
          <span style={{color:'var(--navy)'}}>Imposter Syndrome</span>
        </nav>

        <div style={{background:'#EBF5FB',borderLeft:'4px solid #1A8FA0',borderRadius:'0 12px 12px 0',padding:'14px 18px',marginBottom:28,fontSize:14,color:'#0F4867',fontWeight:600,lineHeight:1.65}}>
          🆘 In crisis? Call <a href="tel:08046110007" style={{color:'#1A8FA0',fontWeight:800}}>NIMHANS 080-46110007</a> or <a href="tel:14416" style={{color:'#1A8FA0',fontWeight:800}}>Tele-MANAS 14416</a> (free · 24/7 · Govt of India)
        </div>

        {/* Hero */}
        <div className="hero">
          <p className="tag">Peer Support · Imposter Syndrome</p>
          <h1>You Earned Your Seat at the Table — Imposter Syndrome <em>Lies</em></h1>
          <p className="lead">That nagging feeling that you are a fraud who got lucky — even after years of hard work and real achievement — is one of the most common experiences among high-achieving Indian professionals and students. LeanOn connects you with peer listeners who have personally battled imposter syndrome in top companies, campuses, and careers, and come out the other side.</p>
        </div>

        {/* Understanding imposter syndrome */}
        <div className="section">
          <h2>Understanding Imposter Syndrome in India</h2>
          <p>Imposter syndrome is the quiet, exhausting feeling that you do not really belong — that your achievements are a fluke, and that sooner or later, everyone will find out you are a fraud. In a country that measures worth in ranks, marks, and college brand names, this feeling runs especially deep.</p>

          <h3>What Is Imposter Syndrome, Really?</h3>
          <p>First described by psychologists studying high-achieving women, imposter syndrome is the persistent belief that your success is due to luck, timing, or fooling people — never your own competence. It has nothing to do with actual ability. Some of the most accomplished people in any room are the ones most convinced they do not deserve to be there.</p>

          <h3>Why First-Generation Achievers Feel It Most</h3>
          <p>India produces thousands of first-generation engineers, doctors, and managers every year — people who cracked JEE or NEET or a campus placement from a small town with none of the coaching or exposure their classmates had. Reaching the IIT, the IIM, or the top consulting firm is the hard part. What often follows is a quieter struggle: sitting in a room full of people who seem effortlessly confident, and wondering if you were let in by mistake.</p>

          <h3>Imposter Syndrome Among Women in Tech and Finance</h3>
          <p>Women in male-dominated fields like technology and finance report imposter syndrome at especially high rates. A promotion can trigger doubt instead of pride — the fear that it was a diversity checkbox rather than a reflection of skill. Being the only woman in the room adds a layer of scrutiny that makes ordinary self-doubt feel like proof.</p>

          <h3>The LinkedIn Highlight Reel and &quot;Log Kya Kahenge&quot;</h3>
          <p>Social media has turned career progress into a public performance. Every promotion, every offer letter, every &quot;humbled to announce&quot; post adds to a quiet sense that everyone else is racing ahead effortlessly. Layer on Indian family expectations — the ever-present worry about what relatives and neighbours will think — and self-doubt gets nowhere to breathe.</p>

          <h3>An Education System Built on Ranks</h3>
          <p>From board exam percentages to JEE and NEET All India Ranks, Indian students grow up being reduced to a number and compared constantly — to siblings, cousins, classmates. This wires many people to tie their entire sense of worth to relative ranking, so even after landing a dream job or degree, the habit of chronic self-doubt does not simply switch off.</p>
        </div>

        {/* How LeanOn helps */}
        <div className="section">
          <h2>How LeanOn Helps With Imposter Syndrome</h2>
          <p>LeanOn is not therapy, and we are honest about that. We are peer support — real humans who have faced the same inner critic, talking to real humans. Here is how we help:</p>

          <h3>Listeners Who Have Lived It</h3>
          <p>Our listeners include engineers, product managers, consultants, and graduate students who have personally battled imposter syndrome in top companies and elite campuses. They are not reciting theory — they know exactly what it feels like to sit in a meeting convinced you are about to be exposed.</p>

          <h3>A Space to Voice Self-Doubt Safely</h3>
          <p>Admitting self-doubt to a colleague or manager carries real risk in a competitive workplace — it can shape how you are perceived for years. LeanOn offers a private, empathetic space to say the quiet part out loud, without any impact on your professional reputation.</p>

          <h3>Hope From Someone Who Has Been There</h3>
          <p>Generic advice like &quot;just believe in yourself&quot; rarely helps. What does help is hearing, with empathy, from someone who felt exactly the same fraudulence and found their way past it — because it makes the possibility of moving forward feel real, not theoretical.</p>

          <h3>Before Your Big Moment</h3>
          <p>Performance reviews, promotion interviews, board exams, campus placements — the moments that matter most are often when imposter syndrome is loudest. LeanOn listeners are available for a judgment-free conversation right before those high-stakes moments, when you need steadying the most.</p>
        </div>

        {/* Listener cards */}
        <h2 style={{fontSize:'20px',fontWeight:800,color:'var(--navy)',marginBottom:'16px'}}>Listeners Who Understand Imposter Syndrome</h2>
        <div className="listeners-grid">
          {[
            {
              emoji: '🎓',
              name: 'Rohit',
              tag: 'First-Gen Engineer, Top MNC',
              bio: 'Cracked JEE from a small town, then spent two years at a top tech company convinced I did not belong. Learned to separate feelings from facts.'
            },
            {
              emoji: '💼',
              name: 'Ananya',
              tag: 'Woman in Tech, Doubted Her Promotion',
              bio: 'Got promoted into a leadership role and immediately assumed it was a mistake. Worked through the doubt and now help others do the same.'
            },
            {
              emoji: '📚',
              name: 'Kabir',
              tag: 'Small-Town Achiever',
              bio: 'Walked into a top B-school from a small town and felt like an outsider for a full year. Turns out almost everyone around me felt it too.'
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

        {/* CTA */}
        <div className="cta-card">
          <h2>Ready to Quiet the Inner Critic?</h2>
          <p>Talk to a peer listener who truly understands imposter syndrome. First 5 minutes free — no appointments, no waitlists.</p>
          <div className="cta-btns">
            <a href="/browse?topic=imposter-syndrome"><button className="btn-primary">Browse Imposter Syndrome Listeners</button></a>
            <a href="/auth"><button className="btn-secondary">Create Free Account</button></a>
          </div>
        </div>

        {/* FAQ */}
        <div className="section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <div className="faq-q">What is imposter syndrome and why do high-achievers feel like frauds?</div>
            <div className="faq-a">Imposter syndrome is the persistent feeling that you do not deserve your success, despite clear evidence of your competence and hard work. It disproportionately affects high-achievers because the more you accomplish, the more pressure you feel to prove it was not luck.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Why is imposter syndrome especially common among first-generation professionals in India?</div>
            <div className="faq-a">Many first-generation graduates reach elite colleges and companies through sheer merit, often from small towns with far fewer resources than their peers. Differences in English fluency, cultural references, or family background can trigger a persistent feeling of not belonging — even when performance says otherwise.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">How does imposter syndrome show up in Indian workplaces and institutions like the IITs and IIMs?</div>
            <div className="faq-a">In hyper-competitive environments where rank and pedigree are constantly discussed, imposter syndrome shows up as chronic comparison, reluctance to speak up, over-preparing for basic tasks, and dismissing achievements as luck rather than skill.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">How can a peer listener help with imposter syndrome?</div>
            <div className="faq-a">Listeners who have personally struggled with imposter syndrome in tech, corporate, and academic settings offer an empathetic, judgment-free space to voice self-doubt out loud — without it affecting your professional reputation. Hearing from someone who felt exactly the same and moved past it can be deeply reassuring.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">How much does LeanOn peer support cost?</div>
            <div className="faq-a">LeanOn starts at ₹160 for a 15-minute session, with the first 5 minutes free. It is significantly more affordable than therapy and available any time — including the night before a big presentation or interview.</div>
          </div>
        </div>

        {/* Related pages */}
        <div className="section">
          <h2>Related Support Topics</h2>
          <p>Imposter syndrome often travels with other challenges. Explore more peer support on LeanOn:</p>
          <div className="related">
            <a href="/support/career-confusion" className="related-link">Career Confusion</a>
            <a href="/support/social-anxiety" className="related-link">Social Anxiety</a>
            <a href="/support/founder-burnout" className="related-link">Founder Burnout</a>
            <a href="/support/student-stress" className="related-link">Student Stress</a>
            <a href="/support/someone-to-talk-to" className="related-link">Someone to Talk To</a>
            <a href="/browse" className="related-link">Browse All Listeners</a>
          </div>
        </div>

        {/* People Also Search For */}
        <div className="section">
          <h2>People Also Search For</h2>
          <p>If you&apos;re looking for imposter syndrome support, these pages may also help:</p>
          <div className="related">
            <a href="/blog/empathy-in-peer-support" className="related-link">Empathy in peer support</a>
            <a href="/blog/what-is-peer-support-india" className="related-link">What is peer support?</a>
            <a href="/blog/peer-support-vs-therapy-india" className="related-link">Peer support vs therapy</a>
            <a href="/bengaluru" className="related-link">Peer support Bengaluru</a>
            <a href="/hyderabad" className="related-link">Peer support Hyderabad</a>
            <a href="/pune" className="related-link">Peer support Pune</a>
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
