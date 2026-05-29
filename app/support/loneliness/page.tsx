import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Free Peer Support for Loneliness in India | LeanOn',
  description: 'Feeling lonely? Talk to a peer listener anonymously. Free first session. LeanOn connects you with empathetic listeners in India, available 24/7.',
  alternates: { canonical: 'https://www.leanon.app/support/loneliness', languages: { 'en-IN': 'https://www.leanon.app/support/loneliness' } },
  openGraph: {
    title: 'Free Peer Support for Loneliness in India | LeanOn',
    description: 'Feeling lonely? Talk to a peer listener anonymously. Free first session. LeanOn connects you with empathetic listeners in India, available 24/7.',
    url: 'https://www.leanon.app/support/loneliness',
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
      name: 'Is feeling lonely normal in India even when surrounded by people?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. Loneliness is about connection quality, not just physical proximity. Many Indians feel deeply lonely in joint families, crowded offices, or busy cities — because they have no one to truly talk to without judgment. This is extremely common and nothing to be ashamed of.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can a peer listener help with loneliness?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Peer listeners on LeanOn have personally experienced loneliness — whether from relocating to a new city, remote work isolation, or feeling like an outsider in social situations. They offer a non-judgmental space to be heard and understood, which itself is one of the most powerful antidotes to loneliness.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between loneliness and social anxiety?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Loneliness is the distressing feeling of lacking meaningful connection. Social anxiety is fear or nervousness about social situations. They often co-exist — social anxiety can prevent you from forming connections, which leads to loneliness. Both are real and deserve support.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is WFH loneliness a real problem in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Since 2020, millions of Indians working from home have reported increased loneliness, especially those living alone or far from family. The loss of casual office interactions and commute conversations has had a surprisingly large impact on mental wellbeing.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does LeanOn peer support cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LeanOn starts at ₹165 for a 15-minute session, with the first 5 minutes free so you can find the right listener before committing. It is significantly more affordable than therapy and available any time — including late nights when loneliness tends to peak.',
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
    { '@type': 'ListItem', position: 3, name: 'Loneliness', item: 'https://www.leanon.app/support/loneliness' },
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

export default function LonelinessSupportPage() {
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
          <span style={{color:'var(--navy)'}}>Loneliness</span>
        </nav>

        <div style={{background:'#EBF5FB',borderLeft:'4px solid #1A8FA0',borderRadius:'0 12px 12px 0',padding:'14px 18px',marginBottom:28,fontSize:14,color:'#0F4867',fontWeight:600,lineHeight:1.65}}>
          🆘 In crisis? Call <a href="tel:08046110007" style={{color:'#1A8FA0',fontWeight:800}}>NIMHANS 080-46110007</a> or <a href="tel:14416" style={{color:'#1A8FA0',fontWeight:800}}>Tele-MANAS 14416</a> (free · 24/7 · Govt of India)
        </div>

        {/* Hero */}
        <div className="hero">
          <p className="tag">Peer Support · Loneliness</p>
          <h1>You Are Not Alone in Feeling <em>Alone</em></h1>
          <p className="lead">Millions of people across India feel disconnected — in crowded cities, busy offices, even in their own homes. LeanOn connects you with peer listeners who have personally navigated deep loneliness and found their way through.</p>
        </div>

        {/* What is loneliness */}
        <div className="section">
          <h2>Understanding Loneliness in India</h2>
          <p>Loneliness is one of the most painful and least-talked-about experiences in India. Our culture puts a premium on community — which makes it even harder to admit that you feel profoundly disconnected, even when you are surrounded by family, colleagues, and neighbours.</p>

          <h3>The 2 AM Feeling Has a Name</h3>
          <p>It hits hardest at night — that hollow ache when everyone else seems to have someone and you are staring at your phone hoping someone will text. This is not weakness. It is a deeply human response to unmet connection needs. And it is far more common than social media makes it seem.</p>

          <h3>WFH Loneliness Is Real</h3>
          <p>Since the shift to remote work, millions of young Indians have lost the casual office interactions that served as invisible social scaffolding — the coffee conversations, the lunch runs, the shoulder taps. Working from home in a one-BHK in Bangalore or Gurgaon can be profoundly isolating, especially if you have moved away from family for work.</p>

          <h3>Moving to a New City</h3>
          <p>India&apos;s migration patterns mean that millions of people are navigating new cities every year — Chennai, Pune, Hyderabad, Mumbai. Building a social life from scratch as an adult is genuinely hard. The friendships that used to form naturally in college take much more deliberate effort to cultivate at 25 or 30.</p>

          <h3>Social Anxiety and Loneliness</h3>
          <p>For many people, loneliness and social anxiety are intertwined. You want connection, but social situations feel overwhelming, exhausting, or unsafe. The result is a painful loop: isolation reinforces anxiety, which makes social engagement harder, which deepens isolation.</p>

          <h3>Loneliness in Joint Families</h3>
          <p>A quieter but equally real form of loneliness comes from living in a joint family where you can&apos;t speak openly. When your emotions and struggles must stay hidden for the sake of family harmony, you can feel utterly alone even in a house of ten people.</p>
        </div>

        {/* How LeanOn helps */}
        <div className="section">
          <h2>How LeanOn Helps With Loneliness</h2>
          <p>LeanOn is not therapy, and we are honest about that. We are peer support — real humans talking to real humans. Here is how we help:</p>

          <h3>Someone Who Has Actually Been There</h3>
          <p>Our listeners have personally experienced loneliness — many of them have relocated to new cities, navigated WFH isolation, or gone through years of feeling misunderstood. They are not reading from a script. They know what it feels like.</p>

          <h3>Available When Loneliness Peaks</h3>
          <p>Loneliness tends to be worst at night and on weekends. LeanOn listeners are available 24/7, including at 2 AM on a Sunday when you most need someone to talk to and feel like there is no one.</p>

          <h3>Private and Judgment-Free</h3>
          <p>In Indian social contexts, admitting loneliness is often seen as shameful — a sign that you are unlikeable or socially deficient. LeanOn offers complete privacy. No one in your life needs to know. You can be honest about exactly how you feel without any social consequences.</p>

          <h3>A First Step Towards Connection</h3>
          <p>For many users, talking to a LeanOn listener is the first time they have ever said out loud how lonely they feel. That act of honesty itself is profoundly healing — and it can open the door to making other changes in your social life.</p>
        </div>

        {/* Listener cards */}
        <h2 style={{fontSize:'20px',fontWeight:800,color:'var(--navy)',marginBottom:'16px'}}>Listeners Who Understand Loneliness</h2>
        <div className="listeners-grid">
          {[
            {
              emoji: '🌙',
              name: 'Priya',
              tag: 'Relocated to Bangalore',
              bio: 'Moved from Kolkata at 24, spent two years building a life from scratch. I know the specific loneliness of a new city.'
            },
            {
              emoji: '💻',
              name: 'Arjun',
              tag: 'WFH Isolation',
              bio: 'Worked remotely for 3 years in a city where I knew nobody. Found my way through and want to help others do the same.'
            },
            {
              emoji: '🤍',
              name: 'Meera',
              tag: 'Social Anxiety',
              bio: 'Struggled with social anxiety for years — the kind that makes you want connection but terrified of people. Recovery is real.'
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
          <h2>Ready to Feel Less Alone?</h2>
          <p>Talk to a peer listener who truly understands loneliness. First 5 minutes free — no appointments, no waitlists.</p>
          <div className="cta-btns">
            <a href="/browse?topic=loneliness"><button className="btn-primary">Browse Loneliness Listeners</button></a>
            <a href="/auth"><button className="btn-secondary">Create Free Account</button></a>
          </div>
        </div>

        {/* FAQ */}
        <div className="section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <div className="faq-q">Is feeling lonely normal in India even when surrounded by people?</div>
            <div className="faq-a">Absolutely. Loneliness is about connection quality, not just physical proximity. Many Indians feel deeply lonely in joint families, crowded offices, or busy cities — because they have no one to truly talk to without judgment. This is extremely common and nothing to be ashamed of.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">How can a peer listener help with loneliness?</div>
            <div className="faq-a">Peer listeners on LeanOn have personally experienced loneliness — whether from relocating to a new city, remote work isolation, or feeling like an outsider in social situations. They offer a non-judgmental space to be heard and understood, which itself is one of the most powerful antidotes to loneliness.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">What is the difference between loneliness and social anxiety?</div>
            <div className="faq-a">Loneliness is the distressing feeling of lacking meaningful connection. Social anxiety is fear or nervousness about social situations. They often co-exist — social anxiety can prevent you from forming connections, which leads to loneliness. Both are real and deserve support.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Is WFH loneliness a real problem in India?</div>
            <div className="faq-a">Yes. Millions of Indians working from home have reported increased loneliness, especially those living alone or far from family. The loss of casual office interactions has had a surprisingly large impact on mental wellbeing.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">How much does LeanOn peer support cost?</div>
            <div className="faq-a">LeanOn starts at ₹165 for a 15-minute session, with the first 5 minutes free. It is significantly more affordable than therapy and available any time — including late nights when loneliness tends to peak.</div>
          </div>
        </div>

        {/* Related pages */}
        <div className="section">
          <h2>Related Support Topics</h2>
          <p>Loneliness often travels with other challenges. Explore more peer support on LeanOn:</p>
          <div className="related">
            <a href="/support/anxiety" className="related-link">Anxiety Support</a>
            <a href="/support/breakup" className="related-link">Breakup & Heartbreak</a>
            <a href="/support/grief" className="related-link">Grief Support</a>
            <a href="/support/student-stress" className="related-link">Student Stress</a>
            <a href="/support/career-confusion" className="related-link">Career Confusion</a>
            <a href="/support/emotional-support" className="related-link">Emotional Support</a>
            <a href="/support/someone-to-talk-to" className="related-link">Someone to Talk To</a>
            <a href="/browse" className="related-link">Browse All Listeners</a>
          </div>
        </div>

        {/* People Also Search For */}
        <div className="section">
          <h2>People Also Search For</h2>
          <p>If you&apos;re looking for loneliness support, these pages may also help:</p>
          <div className="related">
            <a href="/blog/loneliness-in-india" className="related-link">Loneliness in India</a>
            <a href="/blog/loneliness-at-night" className="related-link">Loneliness at night</a>
            <a href="/blog/what-does-lean-on-mean" className="related-link">What does &quot;lean on&quot; mean?</a>
            <a href="/blog/peer-support-vs-therapy-india" className="related-link">Peer support vs therapy</a>
            <a href="/blog/women-loneliness-india-peer-support" className="related-link">Women&apos;s loneliness</a>
            <a href="/blog/joint-family-emotional-support" className="related-link">Joint family support</a>
            <a href="/blog/anonymous-emotional-support-india" className="related-link">Anonymous support</a>
            <a href="/bengaluru" className="related-link">Peer support Bengaluru</a>
            <a href="/mumbai" className="related-link">Peer support Mumbai</a>
            <a href="/delhi" className="related-link">Peer support Delhi</a>
          </div>
        </div>

        {/* City availability */}
        <p style={{textAlign:'center',fontSize:'13px',color:'var(--gray)',fontWeight:600,marginBottom:'40px'}}>
          Available across India: <a href="/bengaluru" style={{color:'var(--teal)'}}>Bengaluru</a> · <a href="/mumbai" style={{color:'var(--teal)'}}>Mumbai</a> · <a href="/delhi" style={{color:'var(--teal)'}}>Delhi</a> · Chennai · <a href="/hyderabad" style={{color:'var(--teal)'}}>Hyderabad</a> · Pune · Kolkata
        </p>
      </div>
    </>
  )
}
