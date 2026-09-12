import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Online Friend India — Real Connection, No Strings | LeanOn',
  description: 'Looking for someone to connect with online in India — not a therapist, not a stranger, just someone real to talk to. LeanOn peer listeners, from ₹160.',
  keywords: [
    'online friend india', 'make online friends india', 'find a friend online india',
    'online connection india', 'someone to talk to online india', 'real conversation online india',
    'online peer support india', 'chat with real person india',
  ],
  alternates: { canonical: 'https://www.leanon.app/online-friend-india', languages: { 'en-IN': 'https://www.leanon.app/online-friend-india' } },
  openGraph: {
    title: 'Online Friend India — Real Connection, No Strings | LeanOn',
    description: 'Looking for someone to connect with online in India — not a therapist, not a stranger, just someone real to talk to. LeanOn peer listeners, from ₹160.',
    url: 'https://www.leanon.app/online-friend-india',
    siteName: 'LeanOn',
    type: 'article',
    images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn — Online Friend India' }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is this like making a friend on the internet?',
      acceptedAnswer: { '@type': 'Answer', text: 'It is a real human connection but with a different structure. You are not building a long-term social relationship. You are having a genuine, unfiltered conversation with a real person who is specifically trained to listen without judgment. The connection can be deep without the social baggage that comes with online friendships &mdash; no obligation, no drama, no social dynamics.' },
    },
    {
      '@type': 'Question',
      name: 'Is it anonymous?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. You sign up with your phone number and first name. The listener knows nothing about you except what you choose to share in the session. There is no profile, no social connection, nothing that links back to your offline life.' },
    },
    {
      '@type': 'Question',
      name: 'Can I use LeanOn just to chat with someone?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. You do not need to be in crisis or have a specific problem to start a session. Some people use LeanOn simply because they want a real conversation and their current circumstances &mdash; new city, remote work, limited social circle &mdash; make that hard to find. The listener is there to be present with whatever you bring.' },
    },
    {
      '@type': 'Question',
      name: 'Is there a free option?',
      acceptedAnswer: { '@type': 'Answer', text: 'The first 5 minutes of every session are free. If you decide to continue, sessions start at ₹160 for 15 minutes. There is no subscription and no automatic charge beyond what you select.' },
    },
    {
      '@type': 'Question',
      name: 'What if I want to talk to the same person again?',
      acceptedAnswer: { '@type': 'Answer', text: 'You can. If you find a listener you connect with, you can return to them. You can browse their profile and see when they are available. Many LeanOn users build an ongoing relationship with a listener they trust over time.' },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Online Friend India', item: 'https://www.leanon.app/online-friend-india' },
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

export default function OnlineFriendIndiaPage() {
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
          <span style={{color:'var(--navy)'}}>Online Friend India</span>
        </nav>

        <div className="hero">
          <p className="badge">Real Connection &middot; No Baggage &middot; India</p>
          <h1>An online friend who is <em>just there for you.</em> No history. No baggage. Just a real conversation.</h1>
          <p className="lead">You don&apos;t need someone who knows your whole story. Sometimes you need someone fresh &mdash; someone who hears what you&apos;re saying right now, without all the context that makes it complicated.</p>
          <a href="/browse" className="cta-hero">Find your listener &rarr;</a>
        </div>

        <div className="section">
          <h2>What Online Friendship Looks Like on LeanOn</h2>
          <p>A 1:1 voice call with a real Indian person. Your choice of listener, based on their background and what you need. The first 5 minutes are free, so you know the connection before committing.</p>
          <p>The listener is trained in active listening &mdash; they are not there to talk about themselves, not there to advise, not there to steer. They are there to hear you. Fully. Without the social dynamics that make honest conversation so hard with people you know.</p>
        </div>

        <div className="section">
          <h2>Why Online Connection Matters Now</h2>
          <p>India has a loneliness problem that nobody quite talks about openly. People move cities for work, build lives in places where their roots are shallow, and find that relationships formed in adulthood rarely reach the depth of the ones formed before. Friends drift. Work absorbs everything. Family is often geographically distant or emotionally complicated.</p>
          <p>The result is that many people &mdash; especially in their 20s and 30s in urban India &mdash; have a full-looking life and a quiet, persistent feeling of disconnection. They are surrounded by people and still fundamentally alone in the things that actually matter.</p>
        </div>

        <div className="section">
          <h2>Different From Social Apps</h2>
          <p>Social media creates connection at the surface. You see highlights. You perform a version of yourself. You get likes, which feel like connection but are not. The algorithm optimises for engagement, which means anxiety and comparison, not genuine human warmth.</p>
          <p>Dating apps optimise for romantic potential, which creates a different kind of performance. Networking apps optimise for professional utility. Every existing online social surface has an agenda that makes genuine, unfiltered connection difficult.</p>
          <p>LeanOn removes all of that. No swipes. No algorithms. No profile to perform. Just a real conversation with a real person who is specifically there to listen to you, not to get anything from you.</p>
        </div>

        <div className="section">
          <h2>How to Find the Right Listener for You</h2>
          <p>Browse listener profiles at <a href="/browse" style={{color:'var(--teal)',fontWeight:700}}>leanon.app/browse</a>. Each profile shows the listener&apos;s background, what they have lived through, and what topics they can support. If you are going through something specific &mdash; career confusion, relationship difficulty, loneliness after a move &mdash; look for someone who has navigated something similar.</p>
          <p>The first 5 minutes of every session are free. Use them to assess the connection. If it feels right, continue. If not, there is no penalty for ending the session and trying someone else.</p>
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
          <h2>Real conversation. Real person. No strings.</h2>
          <p>From ₹160. First 5 minutes free. Available now, no appointment needed.</p>
          <a href="/browse" className="btn-cta">Browse listeners &rarr;</a>
        </div>

        <div className="section">
          <h2>You Might Also Find This Helpful</h2>
          <div className="related">
            <a href="/paid-friend-india">Paid friend India &rarr;</a>
            <a href="/stranger-friend-india">Talk to a stranger &rarr;</a>
            <a href="/someone-who-gets-it-india">Someone who gets it &rarr;</a>
            <a href="/empathy-india">Empathy India &rarr;</a>
            <a href="/talk-therapy-india">Talk therapy &rarr;</a>
          </div>
        </div>
      </div>
    </>
  )
}
