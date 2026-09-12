import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Rant Online India — Say It Without Anyone Judging You | LeanOn',
  description: 'Need to rant — really rant — without someone telling you to calm down or look on the bright side? Real peer listener in India. Anonymous. From ₹160.',
  keywords: [
    'rant online india', 'rant to someone india', 'rant about relationship india',
    'rant about life india', 'rant about work india', 'online rant india',
    'no one to rant to india', 'emotional release india', 'verbal processing india',
    'let it out india',
  ],
  alternates: { canonical: 'https://www.leanon.app/rant-online-india', languages: { 'en-IN': 'https://www.leanon.app/rant-online-india' } },
  openGraph: {
    title: 'Rant Online India — Say It Without Anyone Judging You | LeanOn',
    description: 'Need to rant — really rant — without someone telling you to calm down or look on the bright side? Real peer listener in India. Anonymous. From ₹160.',
    url: 'https://www.leanon.app/rant-online-india',
    siteName: 'LeanOn',
    type: 'article',
    images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn — Rant Online India' }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Will the listener judge me for ranting?',
      acceptedAnswer: { '@type': 'Answer', text: 'No. LeanOn listeners are specifically trained not to judge. They know that a rant is a pressure release, not a statement of character. Whatever comes out &mdash; anger, frustration, unfairness, even things that are not entirely rational &mdash; they will receive it without evaluation. You are not being assessed. You are being heard.' },
    },
    {
      '@type': 'Question',
      name: 'Can I just rant without explaining the background?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. You can start mid-stream. You do not need to set up the context before getting to the thing. If a listener needs context to follow along, they will ask a gentle question. But you are not required to structure the session like a presentation. You can start with "I need to rant" and go from there.' },
    },
    {
      '@type': 'Question',
      name: 'Is it anonymous?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Your first name is all the listener knows. What you say in the session stays there. The listener is bound by confidentiality. Nothing reaches your social circle, your family, your colleagues.' },
    },
    {
      '@type': 'Question',
      name: 'How long can I rant?',
      acceptedAnswer: { '@type': 'Answer', text: 'Sessions come in 15, 30, or 45 minutes. Most people find that 15 minutes is enough to release the immediate pressure. If you need longer, 30 minutes gives room to go deeper after the initial release.' },
    },
    {
      '@type': 'Question',
      name: 'What if I say something awful?',
      acceptedAnswer: { '@type': 'Answer', text: 'Ranting sometimes produces things you would not say in calmer circumstances. The listener understands this. They know the difference between what someone says in a moment of extreme frustration and who they actually are. You will not be judged for venting in extreme terms. The session is a container for exactly this.' },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Rant Online India', item: 'https://www.leanon.app/rant-online-india' },
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

export default function RantOnlineIndiaPage() {
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
          <span style={{color:'var(--navy)'}}>Rant Online India</span>
        </nav>

        <div className="hero">
          <p className="badge">No Judgment &middot; Anonymous &middot; Real Person</p>
          <h1>Some days you just need to rant. <em>No silver linings. No advice. Just say it.</em></h1>
          <p className="lead">You&apos;re not looking for perspective right now. You know things could be worse. You just need to say everything that&apos;s been building up &mdash; to a real person who won&apos;t tell you to calm down.</p>
          <a href="/browse" className="cta-hero">Rant to someone now &rarr;</a>
        </div>

        <div className="section">
          <h2>Why Ranting Is Healthy (When You Have the Right Outlet)</h2>
          <p>Emotional suppression has a cost. Research consistently shows that holding in intense feelings &mdash; rather than expressing them &mdash; maintains physiological arousal, keeps the stress response active, and depletes the cognitive resources available for everything else in your day.</p>
          <p>Ranting &mdash; intense emotional expression to a safe, non-reactive listener &mdash; works like a pressure valve. The activation that has been building gets a channel out. The loop that has been running in the background gets to resolve. You feel lighter. You can think again.</p>
          <p>The key is the outlet. Ranting to someone who responds defensively, gives advice, minimises, or takes sides makes things worse. Ranting to someone trained to receive it without reacting &mdash; that is the healthy version.</p>
        </div>

        <div className="section">
          <h2>Why You Can&apos;t Rant to Most People in Your Life</h2>
          <p>Think through who you would normally rant to:</p>
          <ul>
            <li>Your partner &mdash; if they are the subject of the rant, this is not possible. Even if they are not, they often get defensive or try to fix it.</li>
            <li>Your best friend &mdash; they might take sides, they will remember it, and they have limited bandwidth for your rants alongside their own problems.</li>
            <li>Your family &mdash; they will worry, they will form opinions, and they will bring this up years later.</li>
            <li>Your colleagues &mdash; professional risk. You edit yourself severely.</li>
          </ul>
          <p>The result: most people have no clean outlet. The things that need to come out stay in, building pressure, shaping their mood and their behaviour in ways that affect everything around them.</p>
        </div>

        <div className="section">
          <h2>What a Rant Session on LeanOn Looks Like</h2>
          <p>You start the session. You say &ldquo;I just need to rant.&rdquo; The listener says okay. You go.</p>
          <p>No interruptions, no steering, no &ldquo;have you tried talking to them?&rdquo; The listener receives everything. They reflect back enough to show they are tracking &mdash; not to redirect, just to confirm they are there. They make room for more if there is more.</p>
          <p>At the end of 15 minutes, something usually has changed. Not the situation. But the pressure is lower. The loop is quieter. You can breathe. That is the session. That is the point.</p>
        </div>

        <div className="section">
          <h2>The Difference Between Ranting and Complaining</h2>
          <p>Ranting is temporary, intense pressure release. It is acute &mdash; something happened and you need to say it. It ends, and you feel better. Complaining is sustained, chronic, usually without a specific trigger, and typically does not reduce pressure over time &mdash; it can actually amplify it by keeping you focused on what is wrong.</p>
          <p>LeanOn supports both ranting and processing, but what most people need after a difficult day is the rant. A clean, full, uninterrupted expression of what happened and how you feel about it &mdash; to someone who will not flinch, and will not make it about anything other than what you need to say.</p>
        </div>

        <div className="section">
          <h2>Common Rant Topics People Bring</h2>
          <ul>
            <li>Work: a meeting that was infuriating, a manager who is impossible, a colleague who took credit for something, a decision that makes no sense</li>
            <li>Relationship: a fight, something that was said, a pattern that keeps repeating, the feeling of not being heard</li>
            <li>Family: expectations, interference, something said at dinner, the specific weight of Indian family dynamics</li>
            <li>Life: the general feeling that things are not going to plan, that the gap between what was supposed to happen and what is happening is too wide</li>
          </ul>
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
          <h2>Say it. All of it. No judgment.</h2>
          <p>A real listener. No advice unless you ask. Anonymous. From ₹160.</p>
          <a href="/browse" className="btn-cta">Find a listener &rarr;</a>
        </div>

        <div className="section">
          <h2>You Might Also Find This Helpful</h2>
          <div className="related">
            <a href="/get-it-off-your-chest-india">Get it off your chest &rarr;</a>
            <a href="/cant-tell-anyone-india">Can&apos;t tell anyone &rarr;</a>
            <a href="/just-had-a-fight">Just had a fight &rarr;</a>
            <a href="/vent-about-relationship-india">Vent about relationship &rarr;</a>
            <a href="/empathy-india">Empathy India &rarr;</a>
          </div>
        </div>
      </div>
    </>
  )
}
