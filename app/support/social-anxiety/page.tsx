import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Peer Support for Social Anxiety in India | LeanOn',
  description: 'Struggling with social anxiety? Talk to a peer listener who gets it. Available 24/7. LeanOn listeners are empathetic and available 24/7.',
  alternates: { canonical: 'https://www.leanon.app/support/social-anxiety', languages: { 'en-IN': 'https://www.leanon.app/support/social-anxiety' } },
  openGraph: {
    title: 'Peer Support for Social Anxiety in India | LeanOn',
    description: 'Struggling with social anxiety? Talk to a peer listener who gets it. Available 24/7. LeanOn listeners are empathetic and available 24/7.',
    url: 'https://www.leanon.app/support/social-anxiety',
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
      name: 'What is the difference between social anxiety and normal shyness or introversion?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Shyness and introversion are personality traits, a preference for smaller groups or quieter environments. Social anxiety is a persistent fear of being judged, embarrassed, or humiliated in social situations, often with physical symptoms like a racing heart or shaky hands. Someone can be an extrovert who craves connection and still struggle with intense social anxiety.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why does social anxiety feel worse at Indian weddings, family gatherings, and at work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Indian collectivist culture means personal choices such as career, marriage, and appearance are openly discussed and evaluated by extended family and colleagues. This constant social scrutiny, combined with workplace hierarchy where speaking up in front of seniors can feel risky, intensifies social anxiety far beyond what a quiet gathering elsewhere might trigger.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it normal to have racing thoughts and panic before a meeting, interview, or public speaking?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. A racing heart, shaky hands, and rehearsing sentences over and over before a meeting or interview are extremely common symptoms of social anxiety, not signs of weakness. Many high-performing students and professionals in India privately experience intense anticipatory anxiety before any situation where they feel evaluated.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can a peer listener help with social anxiety if they are not a therapist?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Peer listeners on LeanOn have personally lived through social anxiety, public speaking fear, avoided gatherings, or interview panic, and offer empathy instead of clinical advice. Simply being heard without judgment, in a low-pressure format, can help you practice opening up and build confidence for real-world conversations.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does LeanOn peer support cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LeanOn starts at ₹160 for a 15-minute session, with a trial session available for new users. It is significantly more affordable than therapy and available any time, including right before a high-anxiety moment like an interview or a wedding.',
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
    { '@type': 'ListItem', position: 3, name: 'Social Anxiety', item: 'https://www.leanon.app/support/social-anxiety' },
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

export default function SocialAnxietySupportPage() {
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
          <span style={{color:'var(--navy)'}}>Social Anxiety</span>
        </nav>

        <div style={{background:'#EBF5FB',borderLeft:'4px solid #1A8FA0',borderRadius:'0 12px 12px 0',padding:'14px 18px',marginBottom:28,fontSize:14,color:'#0F4867',fontWeight:600,lineHeight:1.65}}>
          🆘 In crisis? Call <a href="tel:08046110007" style={{color:'#1A8FA0',fontWeight:800}}>NIMHANS 080-46110007</a> or <a href="tel:14416" style={{color:'#1A8FA0',fontWeight:800}}>Tele-MANAS 14416</a> (free · 24/7 · Govt of India)
        </div>

        {/* Hero */}
        <div className="hero">
          <p className="tag">Peer Support · Social Anxiety</p>
          <h1>You Are Not <em>Broken</em> — Social Anxiety Is Common and Treatable</h1>
          <p className="lead">Racing heart before a meeting. Rehearsing a sentence five times before you say it out loud. Avoiding weddings and family functions because being watched and judged feels unbearable — social anxiety touches millions of people in India, even though it is rarely called by its name. LeanOn connects you with peer listeners who have lived through social anxiety themselves, in a space with zero pressure to perform.</p>
        </div>

        {/* Understanding social anxiety */}
        <div className="section">
          <h2>Understanding Social Anxiety in India</h2>
          <p>Social anxiety is far more than nervousness before a big event — it is a persistent, exhausting fear of being watched, judged, or embarrassed in front of others. In India, where social life is deeply woven into family, community, and career, social anxiety can feel especially isolating because so much of daily life happens in groups.</p>

          <h3>Shyness, Introversion, or Social Anxiety?</h3>
          <p>It is easy to dismiss social anxiety as &quot;just being shy&quot; or introverted, but they are not the same. Introverts often enjoy social interaction in smaller doses and recharge alone by choice. Someone with social anxiety, on the other hand, may desperately want connection but be gripped by an intense fear of judgment, humiliation, or saying the wrong thing — often with racing thoughts, a pounding heart, and physical discomfort well before the situation even begins.</p>

          <h3>The Weight of Constant Social Scrutiny</h3>
          <p>India&apos;s collectivist culture means that relationships, reputation, and approval are constantly on display — at weddings, family gatherings, and community festivals, everyone seems to have an opinion about your choices, your career, your marriage, your weight, your life. For someone with social anxiety, this near-constant scrutiny can turn a joyful family function into a source of dread weeks in advance, and workplace hierarchy adds another layer, where junior employees often fear speaking freely in front of seniors.</p>

          <h3>In the Classroom and the Interview Chair</h3>
          <p>Many students in India describe a specific kind of fear tied to raising a hand in class, presenting a project, or being cold-called by a teacher — the fear is rarely the material, it is being seen and judged while answering. That same fear resurfaces powerfully during job interviews, when a single evaluative conversation can feel like your entire future hinges on not stumbling over your words.</p>

          <h3>When the Meeting Room Feels Like a Stage</h3>
          <p>In professional settings, social anxiety often shows up as dread before meetings, avoidance of public speaking, and a constant, exhausting fear of being silently judged by colleagues. You might rehearse a two-line update for an hour, or say nothing in a meeting even when you know the right answer, because the fear of being wrong in front of others outweighs the value of speaking up.</p>

          <h3>Social Media&apos;s Comparison Trap</h3>
          <p>Scrolling through curated highlight reels of other people&apos;s confidence, achievements, and social lives can quietly deepen social anxiety. It becomes easy to believe that everyone else finds social situations effortless, which only intensifies the shame and self-consciousness around your own struggle — when in reality, far more people feel this way than ever post about it.</p>
        </div>

        {/* How LeanOn helps */}
        <div className="section">
          <h2>How LeanOn Helps With Social Anxiety</h2>
          <p>LeanOn is not therapy, and we are honest about that. We are peer support — real people who understand social anxiety from the inside, offering empathy instead of advice you didn&apos;t ask for. Here is how we help:</p>

          <h3>Listeners Who Have Lived It</h3>
          <p>Our listeners have personally navigated social anxiety — the racing thoughts before a meeting, the dread of a wedding invitation, the interview that felt like a trial. They bring genuine empathy, not textbook responses, because they have sat exactly where you are sitting now.</p>

          <h3>A Pressure-Free Way to Be Heard</h3>
          <p>For many people with social anxiety, even reaching out feels like a social risk. LeanOn offers a text-based option alongside calls, so you can open up at your own pace without the in-person pressure of eye contact, tone, or being watched. It is an empathetic space designed to feel safe, not performative.</p>

          <h3>Practicing Connection Before It Counts</h3>
          <p>Talking to a listener who won&apos;t judge you is a low-stakes way to practice being heard. Many users find that after a few sessions, expressing themselves in real-world conversations — with a colleague, a friend, a family member — starts to feel a little less terrifying.</p>

          <h3>Support Before the Moment That Scares You</h3>
          <p>Social anxiety often peaks in anticipation — the night before an interview, the morning of a wedding, an hour before a big presentation. LeanOn listeners are available around the clock, so you can talk through your nerves right before the moment that scares you, not days later in a scheduled appointment.</p>

          <h3>Privacy That Removes the Fear of Judgment</h3>
          <p>The fear of being judged is at the core of social anxiety, so privacy matters enormously. LeanOn conversations are anonymous and confidential — no one from your family, college, or workplace will ever know you reached out, which makes it far easier to be completely honest.</p>
        </div>

        {/* Listener cards */}
        <h2 style={{fontSize:'20px',fontWeight:800,color:'var(--navy)',marginBottom:'16px'}}>Listeners Who Understand Social Anxiety</h2>
        <div className="listeners-grid">
          {[
            {
              emoji: '🎤',
              name: 'Rohan',
              tag: 'Overcame Public Speaking Fear',
              bio: 'Used to go blank and shaky at every presentation for a decade. Learned to manage the panic and now speak on stages I once avoided entirely.'
            },
            {
              emoji: '🎉',
              name: 'Ananya',
              tag: 'Used to Avoid Every Gathering',
              bio: 'Skipped weddings, reunions, and parties for years to escape the anxiety of being watched. Slowly learned to show up — and stay.'
            },
            {
              emoji: '💼',
              name: 'Kabir',
              tag: 'Interview Anxiety Survivor',
              bio: 'Blanked in job interviews for years despite knowing the answers. Worked through the fear and now help others walk in steadier.'
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
          <h2>Ready to Feel More at Ease?</h2>
          <p>Talk to a peer listener who truly understands social anxiety. Available 24/7, no appointments, no waitlists.</p>
          <div className="cta-btns">
            <a href="/browse?topic=social-anxiety"><button className="btn-primary">Browse Social Anxiety Listeners</button></a>
            <a href="/auth"><button className="btn-secondary">Join LeanOn</button></a>
          </div>
        </div>

        {/* FAQ */}
        <div className="section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <div className="faq-q">What is the difference between social anxiety and normal shyness or introversion?</div>
            <div className="faq-a">Shyness and introversion are personality traits, a preference for smaller groups or quieter environments. Social anxiety is a persistent fear of being judged, embarrassed, or humiliated in social situations, often with physical symptoms like a racing heart or shaky hands. Someone can be an extrovert who craves connection and still struggle with intense social anxiety.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Why does social anxiety feel worse at Indian weddings, family gatherings, and at work?</div>
            <div className="faq-a">Indian collectivist culture means personal choices such as career, marriage, and appearance are openly discussed and evaluated by extended family and colleagues. This constant social scrutiny, combined with workplace hierarchy where speaking up in front of seniors can feel risky, intensifies social anxiety far beyond what a quiet gathering elsewhere might trigger.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Is it normal to have racing thoughts and panic before a meeting, interview, or public speaking?</div>
            <div className="faq-a">Yes. A racing heart, shaky hands, and rehearsing sentences over and over before a meeting or interview are extremely common symptoms of social anxiety, not signs of weakness. Many high-performing students and professionals in India privately experience intense anticipatory anxiety before any situation where they feel evaluated.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">How can a peer listener help with social anxiety if they are not a therapist?</div>
            <div className="faq-a">Peer listeners on LeanOn have personally lived through social anxiety, public speaking fear, avoided gatherings, or interview panic, and offer empathy instead of clinical advice. Simply being heard without judgment, in a low-pressure format, can help you practice opening up and build confidence for real-world conversations.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">How much does LeanOn peer support cost?</div>
            <div className="faq-a">LeanOn starts at ₹160 for a 15-minute session, with a trial session available for new users. It is significantly more affordable than therapy and available any time, including right before a high-anxiety moment like an interview or a wedding.</div>
          </div>
        </div>

        {/* Related pages */}
        <div className="section">
          <h2>Related Support Topics</h2>
          <p>Social anxiety often travels with other challenges. Explore more peer support on LeanOn:</p>
          <div className="related">
            <a href="/support/loneliness" className="related-link">Loneliness Support</a>
            <a href="/support/anxiety" className="related-link">Anxiety Support</a>
            <a href="/support/imposter-syndrome" className="related-link">Imposter Syndrome</a>
            <a href="/support/someone-to-talk-to" className="related-link">Someone to Talk To</a>
            <a href="/support/emotional-support" className="related-link">Emotional Support</a>
            <a href="/browse" className="related-link">Browse All Listeners</a>
          </div>
        </div>

        {/* People Also Search For */}
        <div className="section">
          <h2>People Also Search For</h2>
          <p>If you&apos;re looking for social anxiety support, these pages may also help:</p>
          <div className="related">
            <a href="/blog/empathy-in-peer-support" className="related-link">Empathy in peer support</a>
            <a href="/blog/what-is-peer-support-india" className="related-link">What is peer support?</a>
            <a href="/blog/peer-support-vs-therapy-india" className="related-link">Peer support vs therapy</a>
            <a href="/blog/loneliness-in-india" className="related-link">Loneliness in India</a>
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
