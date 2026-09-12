import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Tarot Card Reader Alternative India — Real Human Support Instead | LeanOn',
  description: 'Thinking of calling a tarot reader for emotional support? You need a real human peer listener — not predictions. Anonymous, from ₹160.',
  keywords: [
    'tarot reader alternative india', 'tarot card reader india emotional support',
    'astrology for emotional support india', 'call astrologer to talk india',
    'online pandit alternative india', 'jyotish alternative india',
    'vedic astrologer alternative india', 'tarot alternative india',
  ],
  alternates: { canonical: 'https://www.leanon.app/tarot-alternative-india', languages: { 'en-IN': 'https://www.leanon.app/tarot-alternative-india' } },
  openGraph: {
    title: 'Tarot Card Reader Alternative India — Real Human Support Instead | LeanOn',
    description: 'Thinking of calling a tarot reader for emotional support? You need a real human peer listener — not predictions. Anonymous, from ₹160.',
    url: 'https://www.leanon.app/tarot-alternative-india',
    siteName: 'LeanOn',
    type: 'article',
    images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn — Tarot Alternative India' }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is LeanOn like a tarot reader?',
      acceptedAnswer: { '@type': 'Answer', text: 'No. LeanOn listeners do not give predictions, read cards, or interpret signs. They listen to what you are going through, reflect it back, and support you in processing it. The experience is similar to a good conversation with someone who understands &mdash; not a reading session.' },
    },
    {
      '@type': 'Question',
      name: 'Does it give predictions?',
      acceptedAnswer: { '@type': 'Answer', text: 'No. LeanOn does not make predictions about your future. What it does offer is a real human who is fully present with your present &mdash; what you are carrying now, how you are feeling now, what you need right now. That is often more useful than a prediction.' },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between a peer listener and an astrologer?',
      acceptedAnswer: { '@type': 'Answer', text: 'An astrologer or tarot reader interprets signs and offers a framework (whether you believe in astrology or not, the conversation follows their framework). A peer listener has no framework to impose. They follow yours. They hear what you say, not what a system tells them to see. The conversation is yours entirely.' },
    },
    {
      '@type': 'Question',
      name: 'Is it anonymous?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Only your first name. No social connection, no profile visible to others. What you say stays in the session.' },
    },
    {
      '@type': 'Question',
      name: 'What if I believe in astrology?',
      acceptedAnswer: { '@type': 'Answer', text: 'LeanOn is not anti-astrology. Many people who use LeanOn also consult astrologers. The point is simply that when you need emotional support &mdash; to be heard, to process something heavy, to feel understood &mdash; a peer listener provides that more directly than a reading. You can believe in both.' },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Tarot Alternative India', item: 'https://www.leanon.app/tarot-alternative-india' },
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

export default function TarotAlternativeIndiaPage() {
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
          <span style={{color:'var(--navy)'}}>Tarot Alternative India</span>
        </nav>

        <div className="hero">
          <p className="badge">Real Support &middot; No Predictions &middot; From &#8377;160</p>
          <h1>You&apos;re not really looking for a tarot reading. <em>You&apos;re looking for someone to talk to.</em></h1>
          <p className="lead">Most people who call tarot readers or astrologers aren&apos;t looking for predictions. They&apos;re carrying something heavy and want to say it to someone &mdash; anyone &mdash; who will listen and not judge. That&apos;s exactly what LeanOn does, without the mysticism.</p>
          <a href="/browse" className="cta-hero">Find a listener &rarr;</a>
        </div>

        <div className="section">
          <h2>Why Indians Turn to Tarot and Astrology for Emotional Support</h2>
          <p>India has a deep cultural relationship with astrologers and jyotishis as advice-givers. Historically, the astrologer&apos;s role was not just to read planetary positions but to provide counsel &mdash; about marriage, about business, about major life decisions. They were the accessible, affordable version of the wise elder who could be consulted without shame.</p>
          <p>Tarot arrived more recently in India, but it filled a similar role: someone accessible, affordable, and non-judgmental to talk to about what is weighing on you. The reading itself provides a structure for the conversation &mdash; it is easier to say &ldquo;the cards showed conflict at home&rdquo; than &ldquo;I am struggling in my marriage&rdquo; to someone you just met.</p>
          <p>The emotional support function of these consultations is real and legitimate. What does not always serve is the predictions layer &mdash; which can create false hope, false fear, or a false sense that your future is determined by something outside your agency.</p>
        </div>

        <div className="section">
          <h2>What You&apos;re Actually Looking for When You Call a Tarot Reader</h2>
          <p>When people reflect on what actually helped in a tarot or astrology consultation, it is rarely the prediction itself. It is:</p>
          <ul>
            <li>Being heard by someone who was fully present with them</li>
            <li>Having a framework that made their confusion feel less chaotic</li>
            <li>The relief of saying difficult things to someone with no stake in the outcome</li>
            <li>The comfort of someone saying &ldquo;this makes sense, you are not crazy&rdquo;</li>
          </ul>
          <p>A peer listener on LeanOn provides all of this, without the prediction layer. The conversation is yours entirely. No framework is imposed. The listener hears what you say and reflects it back &mdash; giving you a clearer picture of your own situation through the process of being genuinely heard.</p>
        </div>

        <div className="section">
          <h2>Comparison: Tarot Reader vs LeanOn</h2>
          <div style={{overflowX:'auto'}}>
            <table className="compare-table">
              <thead>
                <tr><th>Dimension</th><th>Tarot Reader</th><th>LeanOn Peer Listener</th></tr>
              </thead>
              <tbody>
                <tr><td>Cost</td><td>&#8377;500&ndash;2,000 per session</td><td>From &#8377;160 for 15 minutes</td></tr>
                <tr><td>Approach</td><td>Card-based, prediction-focused</td><td>Active listening, empathy</td></tr>
                <tr><td>Training</td><td>Tarot reading; varies widely</td><td>Trained in active listening</td></tr>
                <tr><td>Predictions</td><td>Yes</td><td>No</td></tr>
                <tr className="highlight-row"><td>Emotional support</td><td>Incidental</td><td>Primary purpose</td></tr>
                <tr><td>Anonymous</td><td>Often not</td><td>Yes &mdash; first name only</td></tr>
              </tbody>
            </table>
          </div>
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
          <h2>The support you were looking for. No predictions needed.</h2>
          <p>Real human listener. Trained. Anonymous. From ₹160. First 5 minutes free.</p>
          <a href="/browse" className="btn-cta">Browse listeners &rarr;</a>
        </div>

        <div className="section">
          <h2>You Might Also Find This Helpful</h2>
          <div className="related">
            <a href="/astroyogi-alternative">AstroYogi alternative &rarr;</a>
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
