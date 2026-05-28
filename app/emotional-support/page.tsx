import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Emotional Support Online India — Complete Guide | LeanOn',
  description: 'The complete guide to emotional support in India. Understand your options, find the right support for loneliness, anxiety, burnout, grief, relationships and more. LeanOn peer support — first 5 minutes free.',
  alternates: { canonical: 'https://leanon.app/emotional-support' },
  keywords: [
    'emotional support India', 'online emotional support India', 'emotional support online',
    'peer support India', 'mental health support India', 'someone to lean on India',
    'leanon', 'lean on', 'talk to someone India', 'anonymous emotional support',
    'emotional wellness India', 'mental health app India', 'peer support platform India',
  ],
  openGraph: {
    title: 'Emotional Support Online India — Complete Guide | LeanOn',
    description: 'Everything you need to know about emotional support in India. Find the right support for your situation.',
    url: 'https://leanon.app/emotional-support',
    siteName: 'LeanOn',
    type: 'website',
  },
}

const hubSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Emotional Support Online India — LeanOn',
  description: 'The complete topical authority hub for emotional support in India. Covers peer support, loneliness, anxiety, burnout, grief, relationships, student stress, and more.',
  url: 'https://leanon.app/emotional-support',
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://leanon.app' },
      { '@type': 'ListItem', position: 2, name: 'Emotional Support', item: 'https://leanon.app/emotional-support' },
    ],
  },
  mainEntity: {
    '@type': 'ItemList',
    name: 'Emotional Support Topics',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Loneliness Support', url: 'https://leanon.app/support/loneliness' },
      { '@type': 'ListItem', position: 2, name: 'Anxiety Support', url: 'https://leanon.app/support/anxiety' },
      { '@type': 'ListItem', position: 3, name: 'Breakup Support', url: 'https://leanon.app/support/breakup' },
      { '@type': 'ListItem', position: 4, name: 'Grief Support', url: 'https://leanon.app/support/grief' },
      { '@type': 'ListItem', position: 5, name: 'Burnout Support', url: 'https://leanon.app/support/founder-burnout' },
      { '@type': 'ListItem', position: 6, name: 'Student Stress', url: 'https://leanon.app/support/student-stress' },
      { '@type': 'ListItem', position: 7, name: 'Career Confusion', url: 'https://leanon.app/support/career-confusion' },
      { '@type': 'ListItem', position: 8, name: 'Relationship Stress', url: 'https://leanon.app/support/relationship-stress' },
      { '@type': 'ListItem', position: 9, name: 'Anonymous Support', url: 'https://leanon.app/support/anonymous-support' },
    ],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is emotional support?',
      acceptedAnswer: { '@type': 'Answer', text: 'Emotional support means having someone listen, understand, and validate your feelings without judgment. It is different from advice or therapy — it is the experience of being genuinely heard and not being alone with your pain. Research shows that emotional support is one of the strongest predictors of mental wellbeing and recovery.' },
    },
    {
      '@type': 'Question',
      name: 'How do I get emotional support online in India?',
      acceptedAnswer: { '@type': 'Answer', text: 'LeanOn is India\'s leading peer emotional support platform. Sign up with your phone number (OTP, 30 seconds), browse verified peer listeners, and start a session instantly. Your first 5 minutes are free. Sessions from ₹165 for 15 minutes.' },
    },
    {
      '@type': 'Question',
      name: 'Is peer emotional support different from therapy?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Therapy is delivered by licensed mental health professionals for clinical diagnosis and treatment. Peer support is delivered by trained individuals with lived experience — real people who have personally navigated the same challenges. Both are valuable, but serve different needs. Peer support is ideal when you need to feel understood by someone who has been there.' },
    },
    {
      '@type': 'Question',
      name: 'What emotional support topics does LeanOn cover?',
      acceptedAnswer: { '@type': 'Answer', text: 'LeanOn covers loneliness, anxiety, burnout, grief and loss, breakups, relationship stress, career confusion, student stress, startup founder challenges, and general emotional support. Listeners specialise in the topics they have personally experienced.' },
    },
    {
      '@type': 'Question',
      name: 'Is online emotional support anonymous in India?',
      acceptedAnswer: { '@type': 'Answer', text: 'On LeanOn, you sign up with your phone number and first name only. Your full name is never shared. Sessions are private and confidential. This makes LeanOn ideal for people in joint families or situations where privacy is essential.' },
    },
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
  .page{max-width:860px;margin:0 auto;padding:16px 24px 100px;}
  .breadcrumb{display:flex;gap:6px;align-items:center;font-size:13px;font-weight:600;color:var(--gray);margin-bottom:32px;}
  .breadcrumb span{color:var(--border);}
  .breadcrumb a:hover{color:var(--teal);}
  .hero{margin-bottom:48px;}
  .tag{font-size:12px;font-weight:800;color:var(--teal);text-transform:uppercase;letter-spacing:0.1em;margin-bottom:12px;}
  h1{font-size:clamp(28px,6vw,44px);font-weight:900;color:var(--navy);line-height:1.15;margin-bottom:16px;}
  h1 em{color:var(--orange);font-style:normal;}
  .lead{font-size:17px;color:var(--gray);line-height:1.78;font-weight:500;max-width:680px;}
  .section{background:white;border-radius:24px;padding:32px;margin-bottom:24px;border:1.5px solid var(--border);}
  .section h2{font-size:22px;font-weight:800;color:var(--navy);margin-bottom:16px;}
  .section p{font-size:15px;color:#3A6070;line-height:1.80;margin-bottom:14px;}
  .section p:last-child{margin-bottom:0;}
  .topic-cluster{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:14px;margin-top:16px;}
  .topic-card{background:var(--light);border:1.5px solid var(--border);border-radius:18px;padding:20px;transition:all 0.2s;}
  .topic-card:hover{border-color:var(--teal);transform:translateY(-2px);box-shadow:0 4px 16px rgba(15,72,103,0.08);}
  .topic-icon{font-size:28px;margin-bottom:10px;}
  .topic-title{font-size:15px;font-weight:800;color:var(--navy);margin-bottom:4px;}
  .topic-desc{font-size:13px;color:var(--gray);font-weight:500;line-height:1.5;}
  .blog-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:14px;margin-top:16px;}
  .blog-card{background:var(--light);border:1.5px solid var(--border);border-radius:18px;padding:20px;transition:all 0.2s;}
  .blog-card:hover{border-color:var(--teal);transform:translateY(-2px);}
  .blog-tag{font-size:11px;font-weight:800;color:var(--teal);text-transform:uppercase;letter-spacing:.06em;margin-bottom:8px;}
  .blog-title{font-size:14px;font-weight:800;color:var(--navy);line-height:1.4;margin-bottom:6px;}
  .blog-desc{font-size:12px;color:var(--gray);font-weight:500;line-height:1.5;}
  .city-grid{display:flex;flex-wrap:wrap;gap:10px;margin-top:14px;}
  .city-link{background:white;border:1.5px solid var(--border);border-radius:50px;padding:8px 18px;font-size:13px;font-weight:700;color:var(--navy);transition:all 0.2s;}
  .city-link:hover{border-color:var(--teal);color:var(--teal);}
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
`

export default function EmotionalSupportHubPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(hubSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <style>{S}</style>

      <nav className="nav">
        <a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a>
        <a href="/auth"><button className="btn-nav">Get started free</button></a>
      </nav>

      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a><span>›</span>
          <span style={{color:'var(--navy)'}}>Emotional Support</span>
        </nav>

        <div className="hero">
          <p className="tag">Authority Hub · Emotional Support India</p>
          <h1>Emotional Support in India — <em>Everything You Need</em></h1>
          <p className="lead">Your complete guide to finding genuine emotional support in India. Browse support topics, read expert articles, find peer listeners across every city, and understand your options — all in one place.</p>
        </div>

        {/* Support Topic Cluster */}
        <div className="section">
          <h2>Emotional Support by Topic</h2>
          <p>LeanOn offers peer support for the most common emotional challenges in India. Each topic has listeners with personal lived experience:</p>
          <div className="topic-cluster">
            {[
              { icon:'🌙', title:'Loneliness', desc:'Feeling disconnected — even in a crowd or joint family.', href:'/support/loneliness' },
              { icon:'😰', title:'Anxiety', desc:'Worry, overthinking, and the constant sense of dread.', href:'/support/anxiety' },
              { icon:'💔', title:'Breakup & Heartbreak', desc:'Grief after a relationship ends — healing at your own pace.', href:'/support/breakup' },
              { icon:'🌿', title:'Grief & Loss', desc:'Processing the loss of someone or something deeply important.', href:'/support/grief' },
              { icon:'🔥', title:'Burnout', desc:'When work, life, or ambition depletes you completely.', href:'/support/founder-burnout' },
              { icon:'📚', title:'Student Stress', desc:'Exam pressure, career fear, and the weight of expectations.', href:'/support/student-stress' },
              { icon:'🧭', title:'Career Confusion', desc:'Lost at a crossroads — not knowing which way to go.', href:'/support/career-confusion' },
              { icon:'💬', title:'Relationship Stress', desc:'When the people closest to you become the source of pain.', href:'/support/relationship-stress' },
              { icon:'🌐', title:'Anonymous Support', desc:'Talk to someone without revealing your identity.', href:'/support/anonymous-support' },
              { icon:'🙋', title:'Someone to Talk To', desc:'No specific topic — just need a real human to listen.', href:'/support/someone-to-talk-to' },
              { icon:'💙', title:'Emotional Support', desc:'Online emotional support — available anytime, anywhere.', href:'/support/emotional-support' },
            ].map((t, i) => (
              <a key={i} href={t.href} className="topic-card">
                <div className="topic-icon">{t.icon}</div>
                <div className="topic-title">{t.title}</div>
                <p className="topic-desc">{t.desc}</p>
              </a>
            ))}
          </div>
        </div>

        {/* Blog Articles */}
        <div className="section">
          <h2>Emotional Support Articles</h2>
          <p>Our in-depth guides on emotional support in India — evidence-based, India-focused, and written to help:</p>
          <div className="blog-grid">
            {[
              { tag:'Peer Support', title:'What Does "Lean On" Mean?', desc:'The emotional significance of leaning on others — and why it\'s so hard in India.', href:'/blog/what-does-lean-on-mean' },
              { tag:'Peer Support', title:'Peer Support vs Therapy', desc:'Understanding the difference — and when to choose each.', href:'/blog/peer-support-vs-therapy-india' },
              { tag:'Loneliness', title:'Loneliness at Night', desc:'Why loneliness peaks after dark, and what actually helps.', href:'/blog/loneliness-at-night' },
              { tag:'Burnout', title:'Emotional Burnout Recovery', desc:'How to recognise burnout and begin the recovery process.', href:'/blog/emotional-burnout' },
              { tag:'India', title:'Joint Family Emotional Support', desc:'Why joint family members still need private support.', href:'/blog/joint-family-emotional-support' },
              { tag:'Startup', title:'Founder Burnout Stories', desc:'Real recovery stories from Indian startup founders.', href:'/blog/startup-founder-burnout-stories-and-recovery' },
              { tag:'Affordable', title:'Alternatives to Therapy in India', desc:'Affordable mental health support options in 2026.', href:'/blog/affordable-alternatives-to-therapy-in-india' },
              { tag:'Men', title:'Men\'s Mental Health', desc:'Why talking is strength — not weakness.', href:'/blog/mens-mental-health-talking-is-strength' },
              { tag:'Women', title:'Women and Loneliness in India', desc:'Why so many women feel unseen — and how to change that.', href:'/blog/women-loneliness-india-peer-support' },
              { tag:'Anonymous', title:'Anonymous Emotional Support', desc:'How to get help without revealing your identity.', href:'/blog/anonymous-emotional-support-india' },
            ].map((b, i) => (
              <a key={i} href={b.href} className="blog-card">
                <div className="blog-tag">{b.tag}</div>
                <div className="blog-title">{b.title}</div>
                <p className="blog-desc">{b.desc}</p>
              </a>
            ))}
          </div>
        </div>

        {/* City coverage */}
        <div className="section">
          <h2>Emotional Support Across India</h2>
          <p>LeanOn is available in every city and town across India — fully online, available 24/7. We have specific guidance for people in India&apos;s major cities:</p>
          <div className="city-grid">
            {[
              { city:'Bengaluru', href:'/bengaluru' },
              { city:'Mumbai', href:'/mumbai' },
              { city:'Delhi', href:'/delhi' },
              { city:'Hyderabad', href:'/hyderabad' },
              { city:'Chennai', href:'/browse' },
              { city:'Pune', href:'/browse' },
              { city:'Kolkata', href:'/browse' },
              { city:'Jaipur', href:'/browse' },
            ].map((c, i) => (
              <a key={i} href={c.href} className="city-link">📍 {c.city}</a>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="cta-card">
          <h2>Ready to Find Your Emotional Support?</h2>
          <p>Browse peer listeners across India. Someone who has been through what you&apos;re facing is available right now. First 5 minutes free.</p>
          <div className="cta-btns">
            <a href="/browse"><button className="btn-primary">Find a peer listener now</button></a>
            <a href="/auth"><button className="btn-secondary">Start free — no card needed</button></a>
          </div>
        </div>

        {/* FAQ */}
        <div className="section">
          <h2>Frequently Asked Questions</h2>
          {[
            { q:'What is emotional support?', a:'Emotional support means having someone listen, understand, and validate your feelings without judgment. Research shows it is one of the strongest predictors of mental wellbeing and recovery.' },
            { q:'How do I get emotional support online in India?', a:'Sign up on LeanOn with your phone number (OTP, 30 seconds), browse verified peer listeners, and start a session instantly. First 5 minutes free. Sessions from ₹165 for 15 minutes.' },
            { q:'Is peer emotional support different from therapy?', a:'Yes. Therapy is clinical — licensed professionals for diagnosis and treatment. Peer support is human — people who have lived through the same challenges. Both valuable, but for different needs.' },
            { q:'What topics does LeanOn cover?', a:'Loneliness, anxiety, burnout, grief, breakups, relationship stress, career confusion, student stress, startup challenges, and general emotional support.' },
            { q:'Is online emotional support anonymous?', a:'On LeanOn, you sign up with your phone and first name only. Full name never shared. Sessions private and confidential — ideal for joint families and privacy-sensitive situations.' },
          ].map((f, i) => (
            <div key={i} className="faq-item">
              <div className="faq-q">{f.q}</div>
              <div className="faq-a">{f.a}</div>
            </div>
          ))}
        </div>

        <p style={{fontSize:12,color:'var(--gray)',textAlign:'center',lineHeight:1.6}}>
          🆘 In crisis? Call <strong>Tele-MANAS 14416</strong> (free · 24/7 · Govt of India) or iCall <strong>9152987821</strong>
        </p>
      </div>
    </>
  )
}
