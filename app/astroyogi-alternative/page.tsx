import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'AstroYogi Alternative India — Talk Without the Astrology | LeanOn',
  description: 'AstroYogi, AstroSage, AstroTalk — you\'re paying ₹20/min for someone to talk to. LeanOn is ₹160 for 15 minutes of real peer support, no horoscopes.',
  keywords: [
    'AstroYogi alternative', 'AstroSage alternative india', 'AstroTalk alternative india',
    'astrology app alternative india', 'cheap astrologer alternative india',
    'pay astrologer india alternative', 'online astrologer alternative india',
  ],
  alternates: { canonical: 'https://www.leanon.app/astroyogi-alternative', languages: { 'en-IN': 'https://www.leanon.app/astroyogi-alternative' } },
  openGraph: {
    title: 'AstroYogi Alternative India — Talk Without the Astrology | LeanOn',
    description: 'AstroYogi, AstroSage, AstroTalk — you\'re paying ₹20/min for someone to talk to. LeanOn is ₹160 for 15 minutes of real peer support, no horoscopes.',
    url: 'https://www.leanon.app/astroyogi-alternative',
    siteName: 'LeanOn',
    type: 'article',
    images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn — AstroYogi Alternative' }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is LeanOn anti-astrology?',
      acceptedAnswer: { '@type': 'Answer', text: 'Not at all. LeanOn is pro-emotional support. Many people who use LeanOn also consult astrologers. The point is not that astrology is wrong, but that when what you need is to be heard and emotionally supported, a peer listener provides that more directly and more affordably than a ₹20-per-minute astrologer call.' },
    },
    {
      '@type': 'Question',
      name: 'Can I believe in astrology and still use LeanOn?',
      acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. Millions of Indians believe in astrology and many of them also benefit from talking to someone who listens without judgment. These are not contradictory. LeanOn is for the moments when you need to be heard &mdash; astrology is for other purposes.' },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between a peer listener and an astrologer?',
      acceptedAnswer: { '@type': 'Answer', text: 'An astrologer interprets planetary positions and gives guidance through that framework. A peer listener has no framework to impose &mdash; they follow yours. They hear what you are experiencing and reflect it back. They do not predict, advise through a system, or guide the conversation. You drive it entirely.' },
    },
    {
      '@type': 'Question',
      name: 'Is it anonymous?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Your first name only. The session is private. What you say stays there. Unlike many astrology app sessions where you share your full birth details, LeanOn requires only a phone number and first name.' },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'AstroYogi Alternative', item: 'https://www.leanon.app/astroyogi-alternative' },
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
  .compare-table{width:100%;border-collapse:collapse;margin-bottom:14px;font-size:14px;}
  .compare-table th{background:var(--light);color:var(--navy);font-weight:800;padding:12px 14px;text-align:left;border-bottom:2px solid var(--border);}
  .compare-table td{padding:12px 14px;border-bottom:1.5px solid var(--border);color:#3A6070;line-height:1.6;}
  .compare-table tr:last-child td{border-bottom:none;}
  .highlight-row td{background:#F0F8FC;font-weight:700;color:var(--navy);}
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

export default function AstroYogiAlternativePage() {
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
          <span style={{color:'var(--navy)'}}>AstroYogi Alternative</span>
        </nav>

        <div className="hero">
          <p className="badge">Real Support &middot; No Horoscopes &middot; From &#8377;160</p>
          <h1>You&apos;re already paying &#8377;20/min for someone to talk to. <em>LeanOn is &#8377;160 for 15 minutes.</em> No predictions.</h1>
          <p className="lead">India&apos;s astrology apps have 50 million users &mdash; not because Indians want predictions, but because they want someone to talk to and astrologers are cheaper and more accessible than therapists. LeanOn removes the astrology and keeps the human connection.</p>
          <a href="/browse" className="cta-hero">Find a listener &rarr;</a>
        </div>

        <div className="section">
          <h2>What AstroYogi, AstroSage and AstroTalk Actually Provide</h2>
          <p>India&apos;s astrology apps have grown into massive businesses because they deliver something real: a human voice, available now, willing to spend time with your problem, at a price that feels accessible. The astrology is the framework through which the conversation happens. But the value is the conversation.</p>
          <p>Research on why people consult astrologers consistently finds the same thing: people are looking for someone to listen, someone to give them a framework for what they are experiencing, someone to tell them it is going to be okay. The celestial mechanics are almost incidental.</p>
        </div>

        <div className="section">
          <h2>The Real Cost of Astrology Apps vs LeanOn</h2>
          <div style={{overflowX:'auto'}}>
            <table className="compare-table">
              <thead>
                <tr><th>Platform</th><th>Cost per minute</th><th>Cost for 30 min</th><th>What you get</th></tr>
              </thead>
              <tbody>
                <tr><td>AstroYogi</td><td>&#8377;20&ndash;50/min</td><td>&#8377;600&ndash;1,500</td><td>Astrology reading + conversation</td></tr>
                <tr><td>AstroTalk</td><td>&#8377;20&ndash;60/min</td><td>&#8377;600&ndash;1,800</td><td>Astrology reading + conversation</td></tr>
                <tr><td>AstroSage</td><td>&#8377;15&ndash;40/min</td><td>&#8377;450&ndash;1,200</td><td>Astrology reading + conversation</td></tr>
                <tr className="highlight-row"><td>LeanOn</td><td>&#8377;10&ndash;17/min</td><td>&#8377;320 (30 min)</td><td>Real peer support, active listening, empathy</td></tr>
              </tbody>
            </table>
          </div>
          <p>LeanOn is typically 60&ndash;80% less expensive than astrology app consultations, for conversations that are focused entirely on you &mdash; not on a reading.</p>
        </div>

        <div className="section">
          <h2>What LeanOn Does Differently</h2>
          <p>No predictions. No system imposed on your experience. A peer listener is trained to follow your thread, not to interpret it through a framework. The conversation goes where you need it to go.</p>
          <p>And because there are no predictions, there is no false certainty. No &ldquo;your Saturn return will end in November&rdquo; that creates either false hope or false fear. Just an honest conversation about where you are now.</p>
        </div>

        <div className="section">
          <h2>Who Switches from Astrology Apps to LeanOn</h2>
          <p>People who realise, after a few sessions with an astrologer, that the part that helped was not the reading. It was the conversation. The feeling of being heard. The relief of saying their problem to someone outside their life. Once they identify what they actually need, LeanOn is the more direct, more affordable, and more consistently reliable way to get it.</p>
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
          <h2>The conversation you needed. Half the price. No horoscope required.</h2>
          <p>Real peer listener. Anonymous. From ₹160. First 5 minutes free.</p>
          <a href="/browse" className="btn-cta">Browse listeners &rarr;</a>
        </div>

        <div className="section">
          <h2>You Might Also Find This Helpful</h2>
          <div className="related">
            <a href="/tarot-alternative-india">Tarot alternative &rarr;</a>
            <a href="/paid-friend-india">Paid friend India &rarr;</a>
            <a href="/talk-therapy-india">Talk therapy India &rarr;</a>
            <a href="/someone-who-gets-it-india">Someone who gets it &rarr;</a>
            <a href="/empathy-india">Empathy India &rarr;</a>
          </div>
        </div>
      </div>
    </>
  )
}
