import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Get It Off Your Chest India — Say What\'s Been Building Up | LeanOn',
  description: 'That thing you\'ve been carrying. The thing you haven\'t told anyone. Say it to someone real — anonymous, no judgment, from ₹160.',
  keywords: [
    'get it off your chest india', 'say what I cant say india', 'speak your mind india',
    'let it out india', 'no one to confide in india', 'too personal to share india',
    'emotional release india', 'private problem india',
  ],
  alternates: { canonical: 'https://www.leanon.app/get-it-off-your-chest-india', languages: { 'en-IN': 'https://www.leanon.app/get-it-off-your-chest-india' } },
  openGraph: {
    title: 'Get It Off Your Chest India — Say What\'s Been Building Up | LeanOn',
    description: 'That thing you\'ve been carrying. The thing you haven\'t told anyone. Say it to someone real — anonymous, no judgment, from ₹160.',
    url: 'https://www.leanon.app/get-it-off-your-chest-india',
    siteName: 'LeanOn',
    type: 'article',
    images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn — Get It Off Your Chest India' }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What if I don\'t know where to start?',
      acceptedAnswer: { '@type': 'Answer', text: 'Start with that. "I have something I need to say and I don\'t know where to begin." A good listener will gently help you find the thread. You do not need to have it organised or know what the conversation is going to be. The beginning can be as unformed as it actually is.' },
    },
    {
      '@type': 'Question',
      name: 'Can I say anything?',
      acceptedAnswer: { '@type': 'Answer', text: 'Within reason, yes. You can say things that are unfair, that are angry, that are confused, that you are not proud of, that you have been too ashamed to say out loud before. LeanOn listeners are trained to receive these without judgment. If something you say raises a concern about your safety, the listener will gently mention professional resources, but they will not otherwise react with alarm or judgment.' },
    },
    {
      '@type': 'Question',
      name: 'Is it totally anonymous?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Your first name is all the listener knows. The session is private. What you say does not leave that conversation. The listener is bound by confidentiality and has no connection to your social or professional life.' },
    },
    {
      '@type': 'Question',
      name: 'What if I start crying?',
      acceptedAnswer: { '@type': 'Answer', text: 'That is completely fine. You do not need to compose yourself. Crying is part of the release. A LeanOn listener will not be alarmed, will not rush you through it, will not try to stop it. They will hold the space for as long as you need.' },
    },
    {
      '@type': 'Question',
      name: 'What if what I\'m carrying sounds trivial?',
      acceptedAnswer: { '@type': 'Answer', text: 'Nothing that has been building inside you is trivial. The weight you feel is real regardless of how the situation would look to an outside observer. LeanOn listeners understand that the significance of something is measured by its effect on you, not by any external standard of what is "worth" feeling bad about.' },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Get It Off Your Chest India', item: 'https://www.leanon.app/get-it-off-your-chest-india' },
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

export default function GetItOffYourChestIndiaPage() {
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
          <span style={{color:'var(--navy)'}}>Get It Off Your Chest India</span>
        </nav>

        <div className="hero">
          <p className="badge">Say It &middot; Anonymous &middot; No Judgment</p>
          <h1>That thing you&apos;ve been carrying around. <em>Say it.</em></h1>
          <p className="lead">You&apos;ve been holding something. Maybe for a day, maybe for months. You haven&apos;t found the right person to say it to &mdash; too complicated, too personal, too much history. Say it here.</p>
          <a href="/browse" className="cta-hero">Talk to someone now &rarr;</a>
        </div>

        <div className="section">
          <h2>What &ldquo;Getting It Off Your Chest&rdquo; Does</h2>
          <p>There is a weight to unsaid things. Not metaphorically &mdash; physiologically. Things you are holding in stay in your system as activation. They require ongoing effort to contain. They bleed into how you sleep, how you respond to people, how much patience you have, how clearly you can think.</p>
          <p>When you say the thing &mdash; when you move it from inside to outside, to a real person who receives it &mdash; something shifts. The weight redistributes. The pressure reduces. You can breathe. You can think. The thing that was occupying background processing in your mind finally has somewhere to go.</p>
          <p>This is not a theory. It is what people consistently describe after a LeanOn session: relief. A physical sensation of something lifting. Clarity about what they actually feel, separate from the pressure of holding it.</p>
        </div>

        <div className="section">
          <h2>Things People Have Not Been Able to Say to Anyone</h2>
          <p>Not a list of crises &mdash; a list of ordinary human situations that are nonetheless impossible to say in most relationships:</p>
          <ul>
            <li>The feeling that you are in the wrong marriage but cannot say it because the consequences are too large</li>
            <li>The resentment toward someone you also love &mdash; because resentment feels disloyal</li>
            <li>The secret relief at a difficult event that you know you are not supposed to feel</li>
            <li>The fear that you have made the wrong choices and your life is going in a direction you do not want</li>
            <li>The loneliness inside a relationship, inside a family, inside a full social life</li>
            <li>Something someone did to you that you have never said out loud</li>
            <li>A failure you have been hiding from everyone who knows you</li>
          </ul>
          <p>These are not small things. They are the weight that people carry for years sometimes, in the absence of a safe enough space to say them.</p>
        </div>

        <div className="section">
          <h2>The Anonymity That Makes It Possible</h2>
          <p>In most conversations, you are editing yourself before you speak. You are calculating the impact on the relationship, the risk of being judged, the way the person might use what you say later. This calculation happens automatically, usually below the surface &mdash; but it shapes what you actually say, often dramatically.</p>
          <p>When there is no social cost &mdash; when the person you are talking to has no connection to your life, and what you say stays completely within the session &mdash; the editing stops. The true version comes out. The thing you have been holding finally has a shape that is not constrained by who is listening.</p>
          <p>That is the anonymity of LeanOn. Not just a technical feature &mdash; a condition that makes honesty possible.</p>
        </div>

        <div className="section">
          <h2>What Happens After You Say It</h2>
          <p>Most people describe the same sequence. First, the strangeness of saying it out loud to another person for the first time. Then, during the session, a gradual release. By the end: lighter. Clearer. Sometimes surprised at how they actually feel about it, now that they have said it.</p>
          <p>Not a solution. Not a resolution. The situation is still there. But you are no longer alone inside it. The thing has been witnessed. You can breathe.</p>
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
          <h2>The right person to say it to is waiting.</h2>
          <p>Anonymous. No judgment. Real person. From ₹160. First 5 minutes free.</p>
          <a href="/browse" className="btn-cta">Browse listeners &rarr;</a>
        </div>

        <div className="section">
          <h2>You Might Also Find This Helpful</h2>
          <div className="related">
            <a href="/cant-tell-anyone-india">Can&apos;t tell anyone &rarr;</a>
            <a href="/rant-online-india">Rant online &rarr;</a>
            <a href="/stranger-friend-india">Talk to a stranger &rarr;</a>
            <a href="/empathy-india">Empathy India &rarr;</a>
            <a href="/talk-therapy-india">Talk therapy &rarr;</a>
          </div>
        </div>
      </div>
    </>
  )
}
