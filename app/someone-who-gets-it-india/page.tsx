import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Someone Who Gets It — Talk to a Person Who\'s Been There | LeanOn',
  description: 'You\'re not looking for advice. You want someone who gets it — who\'s been through it. LeanOn listeners bring lived experience, not a script. From ₹160.',
  keywords: [
    'someone who gets it india', 'someone who understands india', 'someone who understands me india',
    'person who gets it india', 'lived experience support india', 'peer who understands india',
    'someone who has been there india', 'real understanding india',
  ],
  alternates: { canonical: 'https://www.leanon.app/someone-who-gets-it-india', languages: { 'en-IN': 'https://www.leanon.app/someone-who-gets-it-india' } },
  openGraph: {
    title: 'Someone Who Gets It — Talk to a Person Who\'s Been There | LeanOn',
    description: 'You\'re not looking for advice. You want someone who gets it — who\'s been through it. LeanOn listeners bring lived experience, not a script. From ₹160.',
    url: 'https://www.leanon.app/someone-who-gets-it-india',
    siteName: 'LeanOn',
    type: 'article',
    images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn — Someone Who Gets It India' }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do listeners have lived experience?',
      acceptedAnswer: { '@type': 'Answer', text: 'LeanOn listeners are real people who have been through the kinds of situations they support. They are not professionals trained from textbooks. They have navigated relationship breakdowns, career confusion, family pressure, loneliness, grief, burnout. Their support comes from personal experience as well as training in active listening &mdash; which is why it feels different from clinical or advice-based support.' },
    },
    {
      '@type': 'Question',
      name: 'What topics do listeners have experience with?',
      acceptedAnswer: { '@type': 'Answer', text: 'Listeners specialise in different areas based on their own life experience. Common areas include: relationship difficulty and heartbreak, loneliness and isolation, career pressure and burnout, family conflict and expectations, life transitions, grief, anxiety. Browse listener profiles to find someone whose experience matches what you are navigating.' },
    },
    {
      '@type': 'Question',
      name: 'Is this different from therapy?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. A therapist is trained in clinical methods and treats diagnosed conditions. A LeanOn peer listener supports through shared experience and trained listening &mdash; not clinical frameworks. The conversation is more human, less structured, and often more immediately useful for the everyday emotional weight that does not rise to the level of clinical care.' },
    },
    {
      '@type': 'Question',
      name: 'Can I choose a listener who has been through the same thing?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Each listener profile describes their lived experience. If you want someone who has navigated a specific situation &mdash; divorce, career change, family estrangement, a particular kind of loss &mdash; you can filter by topic and read profiles to find the right match.' },
    },
    {
      '@type': 'Question',
      name: 'How long are sessions?',
      acceptedAnswer: { '@type': 'Answer', text: 'Sessions come in four lengths: a 5-minute free trial (included at the start of every session), and paid sessions of 15, 30, or 45 minutes. Most people find 15 minutes is enough to process something immediate; longer sessions work well for more complex situations.' },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Someone Who Gets It India', item: 'https://www.leanon.app/someone-who-gets-it-india' },
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

export default function SomeoneWhoGetsItIndiaPage() {
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
          <span style={{color:'var(--navy)'}}>Someone Who Gets It India</span>
        </nav>

        <div className="hero">
          <p className="badge">Lived Experience &middot; Real Understanding &middot; India</p>
          <h1>You don&apos;t want advice. <em>You want someone who&apos;s been there.</em></h1>
          <p className="lead">There&apos;s a difference between someone who says &ldquo;I understand&rdquo; and someone who actually does. LeanOn listeners have lived through what you&apos;re going through &mdash; loneliness, relationship pain, work pressure, family weight. They get it.</p>
          <a href="/browse" className="cta-hero">Find someone who gets it &rarr;</a>
        </div>

        <div className="section">
          <h2>What &ldquo;Someone Who Gets It&rdquo; Means</h2>
          <p>There is textbook knowledge and there is lived knowledge. A therapist can understand grief as a clinical process. Someone who has lost a parent, or a marriage, or a decade of their life to the wrong choices &mdash; they know what it feels like from the inside. That is a different kind of understanding, and it lands differently.</p>
          <p>When someone with lived experience reflects back what you are going through, you feel it immediately. They do not say the wrong things. They do not rush to resolution. They know what needs to be said and what needs to be left alone. They have been there.</p>
        </div>

        <div className="section">
          <h2>Why Platitudes Don&apos;t Help</h2>
          <p>You have heard them. &ldquo;Things will get better.&rdquo; &ldquo;Stay strong.&rdquo; &ldquo;Everything happens for a reason.&rdquo; &ldquo;You&apos;re so resilient.&rdquo; Said with love &mdash; and they land completely wrong. Not because the person saying them doesn&apos;t care. Because these phrases are placeholders for the genuine engagement that is harder to offer.</p>
          <p>A platitude requires nothing. It closes the conversation. It signals that the person is not sure what to do with what you&apos;ve shared, and they are reaching for the nearest available phrase to manage their own discomfort.</p>
          <p>Someone who has been through something similar doesn&apos;t reach for platitudes. They say the specific thing &mdash; the thing that shows they have been in the same place and understand what it is actually like. That is what makes the difference.</p>
        </div>

        <div className="section">
          <h2>How LeanOn Matches Lived Experience to Your Situation</h2>
          <p>Browse listener profiles at <a href="/browse" style={{color:'var(--teal)',fontWeight:700}}>leanon.app/browse</a>. Each profile describes the listener&apos;s background and areas of lived experience. You can see what they have been through, what they know from the inside, and how they approach support.</p>
          <p>If you are going through a divorce, look for someone who has navigated their own. If you are stuck in career confusion in your late 20s, look for someone who has been there and come out the other side. If you are dealing with family pressure around marriage, look for someone who understands that specific weight.</p>
          <p>The first 5 minutes of every session are free. If the connection does not feel right, try someone else. You are choosing until you find the person who actually gets it.</p>
        </div>

        <div className="section">
          <h2>What It Feels Like When Someone Actually Gets It</h2>
          <p>You start talking and you don&apos;t have to over-explain. They fill in the gaps because they have lived something adjacent. They nod in exactly the right places &mdash; not the polite nods of someone trying to seem present, but the genuine recognition of someone who has been there.</p>
          <p>The weight reduces. Not because anything changed, but because you have been understood by someone who has earned that understanding. The isolation breaks. You are no longer the only person who has felt this way. You feel less alone in the specific, particular shape of what you are carrying.</p>
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
          <h2>Find the person who has been there.</h2>
          <p>Real people. Real lived experience. From ₹160. First 5 minutes free.</p>
          <a href="/browse" className="btn-cta">Browse listeners &rarr;</a>
        </div>

        <div className="section">
          <h2>You Might Also Find This Helpful</h2>
          <div className="related">
            <a href="/empathy-india">Empathy India &rarr;</a>
            <a href="/empathy-friend-india">Empathy friend &rarr;</a>
            <a href="/paid-friend-india">Paid friend India &rarr;</a>
            <a href="/cant-tell-anyone-india">Can&apos;t tell anyone &rarr;</a>
            <a href="/talk-therapy-india">Talk therapy India &rarr;</a>
          </div>
        </div>
      </div>
    </>
  )
}
