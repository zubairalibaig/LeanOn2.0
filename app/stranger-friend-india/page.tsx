import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Talk to a Friendly Stranger in India — Someone Outside Your Circle | LeanOn',
  description: 'Sometimes a stranger is easier to talk to than anyone you know. Anonymous, judgment-free, real conversations in India from ₹160.',
  keywords: [
    'stranger friend india', 'friendly stranger india', 'talk to stranger india',
    'talk to someone anonymous india', 'anonymous conversation india',
    'talk to stranger online india', 'friendly stranger online india',
  ],
  alternates: { canonical: 'https://www.leanon.app/stranger-friend-india', languages: { 'en-IN': 'https://www.leanon.app/stranger-friend-india' } },
  openGraph: {
    title: 'Talk to a Friendly Stranger in India — Someone Outside Your Circle | LeanOn',
    description: 'Sometimes a stranger is easier to talk to than anyone you know. Anonymous, judgment-free, real conversations in India from ₹160.',
    url: 'https://www.leanon.app/stranger-friend-india',
    siteName: 'LeanOn',
    type: 'article',
    images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn — Stranger Friend India' }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is this safe?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. LeanOn listeners are vetted, trained, and bound by confidentiality. Sessions are private &mdash; 1:1 voice calls that nobody else can hear. Your information is protected. You share only your first name and nothing else unless you choose to.' },
    },
    {
      '@type': 'Question',
      name: 'How is this different from Omegle or random chat apps?',
      acceptedAnswer: { '@type': 'Answer', text: 'Completely different. On Omegle or random chat apps, you are matched with a truly random person with no vetting, no training, and no accountability. On LeanOn, every listener has been specifically selected, trained in active listening, and is bound by confidentiality. You can read their profile before choosing them. It is the difference between talking to a random person on the street and talking to a trained, accountable human being.' },
    },
    {
      '@type': 'Question',
      name: 'Is it anonymous?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Your first name is all the listener knows. There is no social media connection, no profile visible to others, nothing that links to your offline identity. The listener is also anonymous to your social circle.' },
    },
    {
      '@type': 'Question',
      name: 'Can I choose a listener?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. You browse listener profiles and choose based on their background and what you need. You are not matched randomly. You select who you want to talk to, based on real information about their lived experience.' },
    },
    {
      '@type': 'Question',
      name: 'What happens after the session?',
      acceptedAnswer: { '@type': 'Answer', text: 'Nothing, unless you choose to return. The session ends, and that is it. There is no ongoing obligation, no follow-up you did not ask for, no relationship that continues unless you want it to. If you found a listener you connected with, you can return to them. If not, each session is self-contained.' },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Stranger Friend India', item: 'https://www.leanon.app/stranger-friend-india' },
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
  .hero{margin-bottom:48px;}
  .badge{display:inline-block;background:var(--light);border:1.5px solid var(--border);color:var(--teal);font-size:12px;font-weight:800;padding:6px 14px;border-radius:50px;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:16px;}
  h1{font-size:clamp(28px,6vw,44px);font-weight:900;color:var(--navy);line-height:1.15;margin-bottom:16px;}
  h1 em{color:var(--orange);font-style:normal;}
  .lead{font-size:17px;color:var(--gray);line-height:1.78;font-weight:500;max-width:640px;margin-bottom:28px;}
  .cta-hero{display:inline-block;background:var(--orange);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:16px;padding:14px 32px;border-radius:50px;box-shadow:0 4px 20px rgba(255,153,51,0.35);}
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
  .btn-cta{display:inline-block;background:var(--orange);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:15px;padding:14px 28px;border-radius:50px;box-shadow:0 4px 20px rgba(255,153,51,0.35);}
  .related{display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:12px;}
  .related a{background:var(--light);border:1.5px solid var(--border);border-radius:16px;padding:14px 16px;font-size:14px;font-weight:700;color:var(--navy);display:block;}
  .related a:hover{border-color:var(--teal);color:var(--teal);}
`

export default function StrangerFriendIndiaPage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>

      <nav className="nav">
        <a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a>
        <a href="/browse"><button className="btn-nav">Find a listener</button></a>
      </nav>

      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a><span>›</span>
          <span style={{color:'var(--navy)'}}>Stranger Friend India</span>
        </nav>

        <div className="hero">
          <p className="badge">Anonymous &middot; Safe &middot; No Social Cost</p>
          <h1>A stranger you can <em>actually talk to</em> &mdash; without the social cost.</h1>
          <p className="lead">The best part about talking to a stranger: they have no stake in your story. They won&apos;t gossip. They won&apos;t judge you at the next family dinner. They just listen.</p>
          <a href="/browse" className="cta-hero">Talk to someone now &rarr;</a>
        </div>

        <div className="section">
          <h2>Why Strangers Are Sometimes Better Than Friends for Hard Conversations</h2>
          <p>Think about what makes honest conversation so difficult with the people you know. They have opinions about the person you&apos;re talking about. They will remember what you said. They might tell someone. They have their own feelings about your situation, which colour everything they hear.</p>
          <p>The most honest conversations of people&apos;s lives often happen with someone they will never see again &mdash; a fellow passenger on a long train journey, someone at a bus stop, a chance encounter. The reason is simple: there is no social cost. Nothing you say will change how someone treats you tomorrow.</p>
          <p>A LeanOn listener gives you this without the randomness. They are real, trained, accountable &mdash; and completely outside your social circle.</p>
        </div>

        <div className="section">
          <h2>The Difference Between a Random Stranger and a LeanOn Listener</h2>
          <p>A random stranger is unvetted, untrained, and could respond in any way. They might judge you. They might give terrible advice. They might not know how to hold difficult things.</p>
          <p>A LeanOn listener is:</p>
          <ul>
            <li>Selected by you, based on their real background and areas of experience</li>
            <li>Trained specifically in active listening and empathetic support</li>
            <li>Bound by confidentiality &mdash; what you say stays in the session</li>
            <li>Indian &mdash; they understand your cultural context, your family dynamics, your pressures</li>
            <li>Accountable to the platform</li>
          </ul>
          <p>You get the freedom of a stranger conversation with the safety of a structured, trained, accountable listener.</p>
        </div>

        <div className="section">
          <h2>What People Talk About With Their LeanOn Listener</h2>
          <p>The things that are too personal for family, too complicated for friends, too much context for a casual conversation:</p>
          <ul>
            <li>Something that happened at work that they cannot tell colleagues or HR</li>
            <li>A relationship problem they cannot discuss with anyone who knows both parties</li>
            <li>A secret they have been carrying &mdash; sometimes for years</li>
            <li>A feeling of emptiness or pointlessness they cannot explain to the people around them</li>
            <li>The loneliness of living a life that looks fine from the outside</li>
            <li>Anger, grief, fear &mdash; the emotions that are too large for most social spaces</li>
          </ul>
        </div>

        <div className="section">
          <h2>Anonymity on LeanOn</h2>
          <p>Your first name. That&apos;s all. No last name, no photo, no social media link, no email. The listener knows nothing about you except what you choose to share in the session.</p>
          <p>Sessions are private 1:1 voice calls. Nobody else can hear them. There is no recording shared with anyone. What you say stays between you and the listener.</p>
        </div>

        <div className="section">
          <h2>Frequently Asked Questions</h2>
          {faqs.map((f, i) => (
            <div className="faq-item" key={i}>
              <p className="faq-q">{f.name}</p>
              <p className="faq-a">{f.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>

        <div className="cta-card">
          <h2>Say it to someone with no stake in how it turns out.</h2>
          <p>Anonymous. Trained. Real. From ₹160. First 5 minutes free.</p>
          <a href="/browse" className="btn-cta">Browse listeners &rarr;</a>
        </div>

        <div className="section">
          <h2>You Might Also Find This Helpful</h2>
          <div className="related">
            <a href="/cant-tell-anyone-india">Can&apos;t tell anyone &rarr;</a>
            <a href="/rant-online-india">Rant online &rarr;</a>
            <a href="/get-it-off-your-chest-india">Get it off your chest &rarr;</a>
            <a href="/online-friend-india">Online friend India &rarr;</a>
            <a href="/paid-friend-india">Paid friend India &rarr;</a>
          </div>
        </div>
      </div>
    </>
  )
}
