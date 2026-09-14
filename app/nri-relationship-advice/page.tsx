import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'NRI Relationship Advice | When You Need to Talk, Not Just Read Tips | LeanOn',
  description: 'NRI relationship advice from a peer who gets it — not top-10 lists, not generic guidance. A real conversation with someone who understands the immigrant relationship experience.',
  keywords: ['nri relationship advice', 'nri relationship help', 'indian relationship advice abroad', 'nri couple advice', 'desi relationship advice', 'nri relationship support'],
  alternates: { canonical: 'https://www.leanon.app/nri-relationship-advice' },
  openGraph: { title: 'NRI Relationship Advice | When You Need to Talk, Not Just Read Tips | LeanOn', description: 'NRI relationship advice from a peer who gets it — not top-10 lists, not generic guidance. A real conversation with someone who understands the immigrant relationship experience.', url: 'https://www.leanon.app/nri-relationship-advice', siteName: 'LeanOn', type: 'article', images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn' }] },
}

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
  { '@type': 'Question', name: 'Will the listener actually give me advice on my relationship?', acceptedAnswer: { '@type': 'Answer', text: 'Peer listeners do not give advice unless you specifically ask for it. What they do is listen — helping you think out loud, ask the questions that help you understand what you actually want, and make you feel less alone in navigating it. You will likely leave with more clarity than a list of tips could give you.' } },
  { '@type': 'Question', name: 'What kinds of NRI relationship situations can I talk about?', acceptedAnswer: { '@type': 'Answer', text: 'Any situation that is weighing on you — arranged marriage pressure, long-distance with a partner in India, marriage strain abroad, dating as an NRI, breakup in a foreign country, relationship with parents from abroad. Nothing is too specific or too complex.' } },
  { '@type': 'Question', name: 'Is this session confidential?', acceptedAnswer: { '@type': 'Answer', text: 'Completely. Sessions are private — only your phone number and first name are used. Nothing goes back to your partner, your family, or anyone else in your life.' } },
  { '@type': 'Question', name: 'Do listeners understand the NRI relationship context?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. LeanOn listeners are Indian and many have direct experience with the relationship dynamics NRIs navigate — the cultural expectations, the immigration pressures, the family involvement. You will not need to explain the basics.' } },
  { '@type': 'Question', name: 'How much does a session cost?', acceptedAnswer: { '@type': 'Answer', text: 'First 5 minutes are free every session. Sessions continue from ₹160 for 15 minutes. No subscription.' } },
] }

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
  { '@type': 'ListItem', position: 2, name: 'NRI Support', item: 'https://www.leanon.app/nri-support' },
  { '@type': 'ListItem', position: 3, name: 'NRI Relationship Advice', item: 'https://www.leanon.app/nri-relationship-advice' },
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

export default function NriRelationshipAdvicePage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>
      <nav className="nav"><a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a><a href="https://www.leanon.app/browse"><button className="btn-nav">Find a listener</button></a></nav>
      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>&#x203A;</span><a href="/nri-support">NRI Support</a><span>&#x203A;</span><span style={{ color: 'var(--navy)' }}>NRI Relationship Advice</span></nav>
        <div className="hero">
          <p className="badge">NRI Relationship &middot; Indian Abroad &middot; Peer Support</p>
          <h1>NRI Relationship Advice — From a <em>Real Peer, Not a List</em></h1>
          <p className="lead">You have read the articles. You know the generic tips. What you actually need is to think it through out loud with someone who understands the NRI relationship context from the inside — the immigration pressure, the cultural expectations, the family across time zones. We don&rsquo;t give you a list of things to do. We give you someone to think out loud with. First 5 minutes free.</p>
          <a href="https://www.leanon.app/browse" className="cta-hero">Talk it through now &rarr;</a>
        </div>

        <div className="section">
          <h2>Why NRI Relationships Have Distinct Pressures</h2>
          <p>NRI relationships carry layers that generic relationship content does not account for. Arranged marriage expectations reaching you from India. The complexity of dating in a diaspora community where gossip travels fast. Long-distance situations where one person is still in India and the other is abroad, waiting for a visa. Immigration decisions that affect both partners differently. Cultural clashes when one person has adapted more to the new country. In-law dynamics operating across continents.</p>
          <p>None of this is in the typical relationship advice. It is specific to the immigrant experience, and the advice that works for it has to start from understanding that experience rather than adding it as an afterthought.</p>
        </div>

        <div className="section">
          <h2>Why Talking It Through Helps More Than Reading</h2>
          <p>Reading about relationships gives you frameworks. Talking about your specific situation with someone who genuinely listens gives you clarity about what you actually think and feel. The two are not the same. A framework tells you what people in your situation generally do. A real conversation helps you hear what you want.</p>
          <p>That is what peer listeners at LeanOn offer — not a script, not a protocol, not a list of things to try. A real person who already understands the NRI context, asking the questions that help you find your own answer. The clarity comes from the conversation, not from the listener&rsquo;s opinion about what you should do.</p>
        </div>

        <div className="section">
          <h2>What Peer Listeners Actually Do</h2>
          <p>They listen. They ask the questions that help you see your situation more clearly. They do not tell you what to do unless you specifically ask. They do not judge your choices. They do not report back to anyone in your life. They bring the lived experience of the Indian immigrant world, so you do not have to explain the basic context before getting to what actually matters.</p>
          <p>The result is not a decision handed to you — it is a clearer sense of what you already know and want. That is more useful than any top-10 list.</p>
        </div>

        <div className="section"><h2>Frequently Asked Questions</h2>{faqs.map((f, i) => (<div className="faq-item" key={i}><p className="faq-q">{f.name}</p><p className="faq-a">{f.acceptedAnswer.text}</p></div>))}</div>
        <div className="cta-card"><h2>Clarity, not a list. Someone to think out loud with.</h2><p>Real NRI peer listener. Understands the immigrant relationship world. First 5 minutes free, from ₹160.</p><a href="https://www.leanon.app/browse" className="btn-cta">Find a listener &rarr;</a></div>
        <div className="section"><h2>You Might Also Find This Helpful</h2><div className="related">
          <a href="/nri-relationship-problems">NRI relationship problems &rarr;</a>
          <a href="/nri-long-distance-relationship">NRI long distance &rarr;</a>
          <a href="/arranged-marriage-nri">Arranged marriage NRI &rarr;</a>
          <a href="/nri-marriage-usa">NRI marriage USA &rarr;</a>
          <a href="/nri-marriage-uk">NRI marriage UK &rarr;</a>
          <a href="/nri-support">NRI support &rarr;</a>
          <a href="/nri-loneliness-usa">NRI loneliness USA &rarr;</a>
          <a href="/nri-identity-crisis">NRI identity crisis &rarr;</a>
        </div></div>
        <div className="crisis"><strong>In a crisis?</strong> NIMHANS: 080-46110007 &nbsp;&middot;&nbsp; Tele-MANAS: 14416 &nbsp;&middot;&nbsp; Both free, 24/7.</div>
      </div>
    </>
  )
}
