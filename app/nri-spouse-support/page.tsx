import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'NRI Spouse Abroad | When You Moved for Love and Feel Lost | LeanOn',
  description: "You came to a new country for your partner's visa or career. Now you're isolated, dependent, and searching for identity. Talk to a listener who understands.",
  keywords: ['nri spouse support', 'dependent visa spouse', 'h4 visa support', 'nri wife abroad', 'nri husband abroad', 'spouse visa nri', 'indian spouse abroad'],
  alternates: { canonical: 'https://www.leanon.app/nri-spouse-support' },
  openGraph: { title: 'NRI Spouse Abroad | When You Moved for Love and Feel Lost | LeanOn', description: "You came to a new country for your partner's visa or career. Now you're isolated, dependent, and searching for identity. Talk to a listener who understands.", url: 'https://www.leanon.app/nri-spouse-support', siteName: 'LeanOn', type: 'article', images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn' }] },
}

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
  { '@type': 'Question', name: 'Do LeanOn listeners understand the dependent spouse experience?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Listeners are trained to understand the NRI experience, including the specific weight of being a dependent visa spouse — the identity loss, the career disruption, the isolation of a new country with no independent network, and the complex emotional dynamic of being entirely dependent on one person.' } },
  { '@type': 'Question', name: 'I feel resentful toward my partner even though I love them. Can I talk about this?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, and this is one of the most common experiences listeners hear from dependent spouses. Love and resentment can coexist — the resentment of having given up your career, your city, your friends for someone else\'s opportunity, even when you made the choice willingly. Listeners hold this without judgment.' } },
  { '@type': 'Question', name: 'I don\'t have work authorisation in this country. Does that affect what I can talk about?', acceptedAnswer: { '@type': 'Answer', text: 'No — you can talk about anything. The specific anxiety of not having work authorisation, of having your identity tied to your partner\'s visa status, of waiting for an EAD card or a work permit, is something listeners understand and can hold.' } },
  { '@type': 'Question', name: 'How much does it cost?', acceptedAnswer: { '@type': 'Answer', text: 'Your first session with each new listener is free (5 minutes). After that, sessions start at ₹160 for 15 minutes. No subscription.' } },
  { '@type': 'Question', name: 'My partner doesn\'t understand why I\'m struggling — they think I should be grateful to be here. Can listeners help?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The mismatch between your partner\'s experience of immigration (opportunity, success, adventure) and yours (dependency, isolation, identity loss) is a real and painful gap. Listeners can hold your experience without requiring your partner\'s frame.' } },
] }

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
  { '@type': 'ListItem', position: 2, name: 'NRI Support', item: 'https://www.leanon.app/nri-support' },
  { '@type': 'ListItem', position: 3, name: 'NRI Spouse Support', item: 'https://www.leanon.app/nri-spouse-support' },
] }

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
  .section p{font-size:15px;color:#3A6070;line-height:1.80;margin-bottom:14px;}
  .section p:last-child{margin-bottom:0;}
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
  .crisis{background:var(--light);border:1.5px solid var(--border);border-radius:16px;padding:20px 24px;font-size:13px;color:var(--gray);line-height:1.7;text-align:center;}
  .crisis strong{color:var(--navy);}
`

export default function NriSpouseSupportPage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>
      <nav className="nav"><a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a><a href="https://www.leanon.app/browse"><button className="btn-nav">Find a listener</button></a></nav>
      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>&#x203A;</span><a href="/nri-support">NRI Support</a><span>&#x203A;</span><span style={{ color: 'var(--navy)' }}>NRI Spouse Support</span></nav>
        <div className="hero">
          <p className="badge">NRI Spouse &middot; Dependent Visa &middot; H4 &middot; Identity Abroad</p>
          <h1>You moved for love. <em>Now you&rsquo;re not sure who you are.</em></h1>
          <p className="lead">The dependent visa spouse experience is one of the most isolating in the NRI world — and one of the least talked about. You didn&rsquo;t come for your own opportunity. You came because you love someone who did. And now you are in a foreign country with no career, no independent social network, and an identity that used to be yours and now feels borrowed. Talk to someone who understands. First 5 minutes free.</p>
          <a href="https://www.leanon.app/browse" className="cta-hero">Talk to someone now &rarr;</a>
        </div>

        <div className="section">
          <h2>The H4 Visa, UK Dependent, Canada Spouse: What the Papers Don&rsquo;t Say</h2>
          <p>The H4 visa — the dependent visa for H1B spouses — is one of the most personally costly immigration statuses in the world. You are authorised to live in America. You are not, for most H4 holders, authorised to work. The EAD (Employment Authorisation Document) for H4 holders is available only under specific conditions, takes months to process, and is subject to policy changes that can leave you with work one year and without it the next. Your entire professional identity — your career, your qualifications, your sense of what you contribute — is placed on hold by a document you did not apply for.</p>
          <p>The UK dependent visa and Canadian spousal open work permit have their own variations, but the emotional structure is similar: you are in this country because of someone else&rsquo;s visa, someone else&rsquo;s job, someone else&rsquo;s decision to stay. Even when you agreed to the move, even when you were excited about it, the downstream reality — the loneliness, the dependence, the loss of professional identity — is different from what you imagined. LeanOn is for exactly this space. First 5 minutes free.</p>
        </div>

        <div className="section">
          <h2>Identity Without a Career: Who Are You When You Can&rsquo;t Work?</h2>
          <p>For educated Indian women and men who built their identity around their career, the dependent visa experience is a specific kind of identity crisis. You were an engineer. A doctor. A marketing manager. A lawyer who passed the bar. And now you are &ldquo;on H4&rdquo; — a status that, in the Indian immigrant community, carries an unspoken social meaning. The Indian in Sunnyvale who spent three years building a career in India, moved for their spouse&rsquo;s H1B, and is now applying for jobs they are overqualified for just to have something, anything, that is theirs.</p>
          <p>The identity loss is real, and it is compounded by the social isolation of not having colleagues — the colleagues who form the first layer of social life in a new country. You are home, or at English classes, or volunteering, or doing anything to fill the days that your partner fills with purpose at their job. The loneliness of the dependent spouse is not about not loving your partner — it is about not knowing where you fit in a world that was built around someone else&rsquo;s trajectory.</p>
        </div>

        <div className="section">
          <h2>The Hidden Resentment That Lives Next to Love</h2>
          <p>The hardest part of the dependent spouse experience to admit is the resentment. You love your partner. You are proud of what they have achieved. And there is also, sitting right next to that love, a quiet resentment at the life you gave up for their opportunity. The city you left. The career you paused or abandoned. The friends you no longer see. The version of yourself that existed before this move, who feels increasingly like a stranger.</p>
          <p>This resentment is not the same as wanting to leave. It is not a sign that the marriage is failing. It is the natural response to a structural imbalance — one person&rsquo;s life was built around, and the other person&rsquo;s life was given over. Indian culture is not particularly good at naming this honestly. LeanOn is a space to name it. A listener who understands the structure, who will not tell you to be grateful, who can hold both the love and the resentment simultaneously. From ₹160.</p>
        </div>

        <div className="section"><h2>Frequently Asked Questions</h2>{faqs.map((f, i) => (<div className="faq-item" key={i}><p className="faq-q">{f.name}</p><p className="faq-a">{f.acceptedAnswer.text}</p></div>))}</div>
        <div className="cta-card"><h2>You moved for love. Your feelings matter too.</h2><p>Real Indian peer listener. Understands the dependent spouse experience. Anonymous. First 5 minutes free. From ₹160.</p><a href="https://www.leanon.app/browse" className="btn-cta">Find a listener &rarr;</a></div>
        <div className="section"><h2>You Might Also Find This Helpful</h2><div className="related">
          <a href="/nri-marriage-usa">NRI marriage USA &rarr;</a>
          <a href="/nri-marriage-uk">NRI marriage UK &rarr;</a>
          <a href="/nri-loneliness-usa">NRI loneliness USA &rarr;</a>
          <a href="/nri-identity-crisis">NRI identity crisis &rarr;</a>
        </div></div>
        <div className="crisis"><strong>In a crisis?</strong> NIMHANS: 080-46110007 &nbsp;&middot;&nbsp; Tele-MANAS: 14416 &nbsp;&middot;&nbsp; Both free, 24/7.</div>
      </div>
    </>
  )
}
