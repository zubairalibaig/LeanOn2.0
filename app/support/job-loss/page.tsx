import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Laid Off? Talk to Someone Who Has Been There | LeanOn India',
  description: 'Job loss hurts more than the paycheck. Talk anonymously to a peer listener who has been laid off and rebuilt. First session free. Available across India.',
  alternates: { canonical: 'https://www.leanon.app/support/job-loss', languages: { 'en-IN': 'https://www.leanon.app/support/job-loss' } },
  keywords: 'job loss depression India, laid off emotional support, coping with layoff India, lost my job India, talk to someone after layoff, job loss anxiety, unemployment stress India, peer support after being fired',
  openGraph: {
    title: 'Laid Off? Talk to Someone Who Has Been There | LeanOn India',
    description: 'Job loss hurts more than the paycheck. Talk anonymously to a peer listener who has been laid off and rebuilt. First session free. Available across India.',
    url: 'https://www.leanon.app/support/job-loss',
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
      name: 'Why does losing a job hurt so much more than the loss of income?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Because a job carries far more than salary. It holds your daily routine, your sense of being useful, your professional identity, and often most of your adult friendships. When it disappears overnight, all of that goes with it. Many people are surprised by how much grief they feel even when the money is manageable for a few months. That reaction is normal, and it deserves to be taken seriously rather than argued away.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I tell my family I have been laid off?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There is no single right way, and there is no deadline you have failed to meet. Most people find it easier once they have said the words out loud at least once to someone neutral first, so the conversation at home is not also the first time they hear themselves say it. Talking it through with a peer listener lets you rehearse it, decide how much detail you want to share, and work out what you actually need from your family, whether that is practical help or simply less questioning.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it normal to feel ashamed after being laid off?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, and it is one of the most commonly reported feelings after job loss, even among people who know the layoff was a company decision and had nothing to do with their performance. Shame is not evidence that you did something wrong. It is what happens when your sense of worth has quietly been tied to your work for years. Naming it with someone who has felt the same thing takes a surprising amount of its power away.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can peer support help if I cannot afford therapy after losing my income?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Peer support is not therapy and LeanOn is honest about that. What it offers is an empathetic human being who has been through job loss themselves and will listen without judgment, at a fraction of the cost of a therapy session. For many people in the weeks right after a layoff, what they need most is not clinical treatment but someone to talk to who understands. If you are dealing with something that needs professional care, a listener will say so.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does LeanOn cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LeanOn starts at ₹160 for a 15-minute session, and the first 5 minutes are free so you can find the right listener before paying anything. We know you have just lost your income, so we will not pretend cost does not matter. It is a small fraction of what a therapy session costs in India, there is no subscription, and you decide session by session.',
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
    { '@type': 'ListItem', position: 3, name: 'Job Loss', item: 'https://www.leanon.app/support/job-loss' },
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

export default function JobLossSupportPage() {
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
          <span style={{color:'var(--navy)'}}>Job Loss</span>
        </nav>

        <div style={{background:'#EBF5FB',borderLeft:'4px solid #1A8FA0',borderRadius:'0 12px 12px 0',padding:'14px 18px',marginBottom:28,fontSize:14,color:'#0F4867',fontWeight:600,lineHeight:1.65}}>
          🆘 In crisis? Call <a href="tel:08046110007" style={{color:'#1A8FA0',fontWeight:800}}>NIMHANS 080-46110007</a> or <a href="tel:14416" style={{color:'#1A8FA0',fontWeight:800}}>Tele-MANAS 14416</a> (free · 24/7 · Govt of India)
        </div>

        {/* Hero */}
        <div className="hero">
          <p className="tag">Peer Support · Job Loss</p>
          <h1>Losing a Job Isn&apos;t Losing Your <em>Worth</em></h1>
          <p className="lead">A layoff email takes thirty seconds to read and months to absorb. If you&apos;re staring at a laptop you no longer have a login for, wondering how to tell anyone — LeanOn connects you with peer listeners who have been laid off themselves, and rebuilt. First 5 minutes free.</p>
        </div>

        {/* Understanding */}
        <div className="section">
          <h2>Understanding What Job Loss Really Takes</h2>
          <p>Everyone tells you it&apos;s just a job, that the market will turn, that you&apos;ll land somewhere better. Some of that may even be true. None of it touches what you&apos;re actually feeling in the first few weeks — because what you lost was never only the salary.</p>

          <h3>It&apos;s Grief, Not Just Unemployment</h3>
          <p>Job loss follows the shape of grief: the disbelief, the replaying of the last few weeks looking for the signal you missed, the anger at a manager or a founder or a spreadsheet, the flat exhaustion. People are often startled by how heavy it feels. It helps to know that you&apos;re not overreacting — you&apos;re mourning something real. Routine, colleagues, a place to be at 10 AM, and a plan for the next two years all disappeared in the same meeting.</p>

          <h3>When &quot;What Do You Do?&quot; Has No Answer</h3>
          <p>In India, that question shows up within ninety seconds of meeting anyone — at a wedding, in a WhatsApp group, in the lift. For years you had a clean answer with a company name in it. Now you have a pause. That pause is where the identity collapse lives. It isn&apos;t vanity. Most working professionals have quietly built a large part of their self-concept on their designation, and losing it feels like losing a part of yourself, not just a source of income.</p>

          <h3>The Secret Months</h3>
          <p>This is the part almost nobody talks about. Plenty of people don&apos;t tell their family for weeks. They keep waking at the same hour, dressing, packing a laptop bag, and leaving the house — to a café, a co-working space, a library, sometimes just a long drive — because the alternative is a conversation they can&apos;t face yet. If you&apos;re doing this, you&apos;re not being dishonest. You&apos;re buying yourself time to feel steady enough to speak. But carrying it entirely alone is what makes it unbearable, and that is exactly the gap a peer listener can fill.</p>

          <h3>Financial Anxiety Lives in the Body</h3>
          <p>Money worry rarely stays in your head. It shows up as a 4 AM wake-up with your heart already racing, a tight chest when a payment reminder arrives, a stomach that refuses food, weeks of shallow sleep. Watching your runway shorten while you refresh job boards is a specific kind of stress, and it wears down the very energy you need for interviews. Naming it out loud, to someone who has felt the same thing, will not pay a bill — but it does loosen the grip enough to think clearly.</p>

          <h3>The Shame That Is Specific to Us</h3>
          <p>Indian families read employment as status, stability, and a signal about your future. A layoff can quietly reshape how relatives speak to you, stall a marriage conversation, and revive expectations you thought you had outgrown. There is the fear of becoming the cautionary story in a family WhatsApp group. There is the guilt of parents who sacrificed for your education. None of this is rational and all of it is real — and it is far more common than the confident LinkedIn posts suggest.</p>
        </div>

        {/* How LeanOn helps */}
        <div className="section">
          <h2>How LeanOn Helps</h2>
          <p>LeanOn is not therapy and not career coaching, and we are honest about that. It is peer support — one human who has been through this, listening to another. Here is what that looks like after a layoff:</p>

          <h3>Someone Who Has Actually Been Laid Off</h3>
          <p>Our listeners include people who were let go in startup shutdowns, cost-cutting rounds, and abrupt terminations — and who came out the other side. They are not reciting advice from an article. They know the specific silence of the morning after, and the empathy they offer comes from having lived it rather than studied it.</p>

          <h3>A Place Where You Don&apos;t Have to Perform Optimism</h3>
          <p>LinkedIn demands that you be grateful, energised and open to opportunities within days. Family demands that you be reassuring. Friends want you to be fine. Somewhere in all that, nobody asks how you actually are. On LeanOn you can say the ungracious things out loud — that you feel humiliated, that you resent people who kept their jobs, that you are frightened — and be met with empathy instead of a pep talk.</p>

          <h3>Available at the Hours the Anxiety Spikes</h3>
          <p>Job-loss anxiety keeps unsociable hours. It arrives at 2 AM, on Sunday evenings, and in the twenty minutes after a rejection email. LeanOn listeners are available round the clock, so you are not left holding a 3 AM spiral by yourself until the world wakes up.</p>

          <h3>Completely Private</h3>
          <p>Nothing you say here reaches your professional network, your former colleagues, your recruiters, or your family. There is no profile anyone can find, no post anyone can screenshot, no mutual connection who might mention it. You can be fully honest about your situation without a single social consequence — which is often the only condition under which people can finally say the truth.</p>
        </div>

        {/* Listener cards */}
        <h2 style={{fontSize:'20px',fontWeight:800,color:'var(--navy)',marginBottom:'16px'}}>Listeners Who Have Been Through Job Loss</h2>
        <div className="listeners-grid">
          {[
            {
              emoji: '🌅',
              name: 'Rohit',
              tag: 'Laid off in a startup shutdown',
              bio: 'My company shut down with two days of notice. I did not tell my parents for six weeks. I know that particular silence very well.'
            },
            {
              emoji: '🧭',
              name: 'Sneha',
              tag: 'Cost-cutting round',
              bio: 'Let go after four years at a firm I gave everything to. Spent eight months rebuilding. Happy to sit with you in the messy early part.'
            },
            {
              emoji: '🪁',
              name: 'Imran',
              tag: 'Rebuilt after a firing',
              bio: 'Fired at 31 and convinced my career was over. It was not. I listen without judgment, and without telling you to stay positive.'
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
          <h2>You Don&apos;t Have to Carry This Alone</h2>
          <p>Talk to a peer listener who has been laid off and rebuilt. First 5 minutes free — no appointments, no subscription, no one in your life needs to know.</p>
          <div className="cta-btns">
            <a href="/browse?topic=job-loss"><button className="btn-primary">Browse Job Loss Listeners</button></a>
            <a href="/auth"><button className="btn-secondary">Create Free Account</button></a>
          </div>
        </div>

        {/* FAQ */}
        <div className="section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <div className="faq-q">Why does losing a job hurt so much more than the loss of income?</div>
            <div className="faq-a">Because a job carries far more than salary. It holds your daily routine, your sense of being useful, your professional identity, and often most of your adult friendships. When it disappears overnight, all of that goes with it. Many people are surprised by how much grief they feel even when the money is manageable for a few months. That reaction is normal, and it deserves to be taken seriously rather than argued away.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">How do I tell my family I have been laid off?</div>
            <div className="faq-a">There is no single right way, and there is no deadline you have failed to meet. Most people find it easier once they have said the words out loud at least once to someone neutral first, so the conversation at home is not also the first time they hear themselves say it. Talking it through with a peer listener lets you rehearse it, decide how much detail you want to share, and work out what you actually need from your family — practical help, or simply less questioning.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Is it normal to feel ashamed after being laid off?</div>
            <div className="faq-a">Yes, and it is one of the most commonly reported feelings after job loss — even among people who know the layoff was a company decision and had nothing to do with their performance. Shame is not evidence that you did something wrong. It is what happens when your sense of worth has quietly been tied to your work for years. Naming it with someone who has felt the same thing takes a surprising amount of its power away.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">How can peer support help if I can&apos;t afford therapy after losing my income?</div>
            <div className="faq-a">Peer support is not therapy and LeanOn is honest about that. What it offers is an empathetic human being who has been through job loss themselves and will listen without judgment, at a fraction of the cost of a therapy session. For many people in the weeks right after a layoff, what they need most is not clinical treatment but someone to talk to who understands. If you are dealing with something that needs professional care, a listener will say so.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">How much does LeanOn cost?</div>
            <div className="faq-a">LeanOn starts at ₹160 for a 15-minute session, and the first 5 minutes are free so you can find the right listener before paying anything. We know you have just lost your income, so we won&apos;t pretend cost does not matter — it is a small fraction of what a therapy session costs in India, there is no subscription, and you decide session by session.</div>
          </div>
        </div>

        {/* Related pages */}
        <div className="section">
          <h2>Related Support Topics</h2>
          <p>Job loss rarely arrives on its own. Explore more peer support on LeanOn:</p>
          <div className="related">
            <a href="/support/career-confusion" className="related-link">Career Confusion</a>
            <a href="/support/anxiety" className="related-link">Anxiety Support</a>
            <a href="/support/founder-burnout" className="related-link">Founder Burnout</a>
            <a href="/support/imposter-syndrome" className="related-link">Imposter Syndrome</a>
            <a href="/support/someone-to-talk-to" className="related-link">Someone to Talk To</a>
            <a href="/browse" className="related-link">Browse All Listeners</a>
          </div>
        </div>

        {/* People Also Search For */}
        <div className="section">
          <h2>People Also Search For</h2>
          <p>If you&apos;re looking for support after a layoff, these pages may also help:</p>
          <div className="related">
            <a href="/blog/burnout-recovery-india" className="related-link">Burnout recovery</a>
            <a href="/blog/mens-mental-health-talking-is-strength" className="related-link">Men&apos;s mental health</a>
            <a href="/blog/empathy-in-peer-support" className="related-link">Empathy in peer support</a>
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
