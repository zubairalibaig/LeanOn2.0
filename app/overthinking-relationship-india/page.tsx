import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Overthinking Your Relationship? Talk It Out Anonymously | LeanOn India',
  description: 'Analysing every text, every tone, every silence. Relationship overthinking is exhausting. A 15-minute conversation can break the loop. From ₹160.',
  keywords: ['overthinking relationship India', 'relationship anxiety India', 'overanalysing relationship India', 'obsessive thoughts about relationship India', 'relationship overthinking India'],
  alternates: { canonical: 'https://www.leanon.app/overthinking-relationship-india', languages: { 'en-IN': 'https://www.leanon.app/overthinking-relationship-india' } },
  openGraph: {
    title: 'Overthinking Your Relationship? Talk It Out Anonymously | LeanOn India',
    description: 'Analysing every text, every tone, every silence. Relationship overthinking is exhausting. A 15-minute conversation can break the loop. From ₹160.',
    url: 'https://www.leanon.app/overthinking-relationship-india',
    siteName: 'LeanOn',
    type: 'article',
    images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn' }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is relationship overthinking normal?',
      acceptedAnswer: { '@type': 'Answer', text: 'Extremely common. Most people who overthink relationships are not doing so because they are irrational or insecure — they are doing so because something is genuinely ambiguous and their mind is trying to resolve it. The problem is that overthinking is not an effective resolution strategy. It tends to generate more scenarios rather than clarity.' },
    },
    {
      '@type': 'Question',
      name: 'How does talking to a stranger help with overthinking?',
      acceptedAnswer: { '@type': 'Answer', text: 'A neutral listener has no stake in the outcome, no history with you or your partner, and no agenda. When you describe the loop to them, they can often identify what you are actually worried about underneath the analysis — which is usually something simpler and more honest than the specific texts and tones you have been examining.' },
    },
    {
      '@type': 'Question',
      name: 'Can peer support help with relationship anxiety generally?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Relationship anxiety — the persistent worry that something is wrong, that you will be abandoned, that you are not enough — is one of the most common topics on LeanOn. Listeners are trained to hold this kind of conversation without either dismissing the anxiety or amplifying it.' },
    },
    {
      '@type': 'Question',
      name: 'How much does it cost?',
      acceptedAnswer: { '@type': 'Answer', text: 'Sessions start at ₹160. First 5 minutes free. No subscription needed.' },
    }
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Overthinking Your Relationship? Talk It Out Anonymously', item: 'https://www.leanon.app/overthinking-relationship-india' },
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

export default function OverthinkinRelationshipIndiaPage() {
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
          <a href="/">Home</a><span>&#x203A;</span>
          <span style={{color:'var(--navy)'}}>Overthinking Your Relationship? Talk It Out Anonymously</span>
        </nav>
        <div className="hero">
          <p className="badge">Relationship Overthinking · Anxiety · India</p>
          <h1>You've been in your head for three hours. <em>You need someone to think out loud with.</em></h1>
          <p className="lead">Analysing every text, every tone, every silence. Relationship overthinking is exhausting and isolating. A 15-minute conversation can break the loop. Anonymous peer support from ₹160.</p>
          <a href="/browse" className="cta-hero">Talk to someone now &rarr;</a>
        </div>
        <div className="section">
          <h2>What Relationship Overthinking Feels Like</h2>
          <p>You check your phone again. You replay the last conversation. You analyse a tone of voice. You rehearse things you should have said. You construct hypothetical scenarios. You interpret silence as a sign. This loop runs on its own power, regardless of what you try to do to stop it.</p>
          <p>Relationship overthinking is not the same as being insecure or needy. It is usually a response to ambiguity or anxiety — a genuine uncertainty that your mind is trying to resolve by thinking about it more. The problem is that thinking about it more does not resolve ambiguity. It usually increases it.</p>
        </div>
        <div className="section">
          <h2>Why Talking Helps</h2>
          <p>When you say something out loud to someone who is listening carefully, you hear it differently. The loop that runs internally at high speed slows down when it is externalised. The listener reflects back what they are hearing. You catch yourself. "Actually, I think what I'm really worried about is..." The clarity that was not available internally becomes available in conversation.</p>
          <p>A 15-minute conversation can do what hours of internal analysis cannot: create enough distance from the loop to see it.</p>
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
          <h2>Break the loop. Talk to someone.</h2>
          <p>Anonymous peer support. A real person. From ₹160. First 5 minutes free.</p>
          <a href="/browse" className="btn-cta">Find a listener &rarr;</a>
        </div>
        <div className="section">
          <h2>You Might Also Find This Helpful</h2>
          <div className="related">
            <a href="/support/relationship-anxiety">Relationship anxiety &rarr;</a>
            <a href="/support/relationship-stress">Relationship stress &rarr;</a>
            <a href="/heartbreak-india">Heartbreak India &rarr;</a>
            <a href="/gaslighting-india">Gaslighting India &rarr;</a>
            <a href="/empathy-india">Empathy India &rarr;</a>
          </div>
        </div>
      </div>
    </>
  )
}
