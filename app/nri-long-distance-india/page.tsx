import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'NRI Long Distance Relationship with Partner in India | The Miles Don\'t Make It Easier | LeanOn',
  description: 'One of you is abroad. One is in India. The time zones, the visa wait, the uncertainty — it weighs on both of you in different ways. Talk to a listener who understands.',
  keywords: ['nri long distance india', 'long distance india abroad', 'nri partner in india', 'boyfriend girlfriend india abroad', 'waiting for visa together', 'nri relationship india'],
  alternates: { canonical: 'https://www.leanon.app/nri-long-distance-india' },
  openGraph: { title: 'NRI Long Distance Relationship with Partner in India | The Miles Don\'t Make It Easier | LeanOn', description: 'One of you is abroad. One is in India. The time zones, the visa wait, the uncertainty — it weighs on both of you in different ways. Talk to a listener who understands.', url: 'https://www.leanon.app/nri-long-distance-india', siteName: 'LeanOn', type: 'article', images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn' }] },
}

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
  { '@type': 'Question', name: 'Can I talk about both the relationship and the visa anxiety together?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. In an India-abroad long-distance relationship, the visa situation and the relationship are inseparable — one shapes the other. Peer listeners understand this and do not need you to separate them.' } },
  { '@type': 'Question', name: 'My partner is in India and doesn\'t know I\'m talking to someone — is that okay?', acceptedAnswer: { '@type': 'Answer', text: 'Completely. Sessions are private. You do not need your partner\'s knowledge or permission. Having your own space to process what you are going through is not a betrayal.' } },
  { '@type': 'Question', name: 'Do listeners understand F2/H4/UK spouse visa dynamics?', acceptedAnswer: { '@type': 'Answer', text: 'Listeners are Indian and many understand the reality of dependent visa situations — the wait, the uncertainty, the way it shapes the relationship dynamic. You will not need to explain the immigration basics.' } },
  { '@type': 'Question', name: 'Can I talk in Hindi?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Many listeners are comfortable in Hindi. Check individual listener profiles.' } },
  { '@type': 'Question', name: 'How much does a session cost?', acceptedAnswer: { '@type': 'Answer', text: 'First 5 minutes are free. Sessions continue from ₹160 for 15 minutes. No subscription, no commitment.' } },
] }

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
  { '@type': 'ListItem', position: 2, name: 'NRI Support', item: 'https://www.leanon.app/nri-support' },
  { '@type': 'ListItem', position: 3, name: 'NRI Long Distance India', item: 'https://www.leanon.app/nri-long-distance-india' },
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

export default function NriLongDistanceIndiaPage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>
      <nav className="nav"><a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a><a href="https://www.leanon.app/browse"><button className="btn-nav">Find a listener</button></a></nav>
      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>&#x203A;</span><a href="/nri-support">NRI Support</a><span>&#x203A;</span><span style={{ color: 'var(--navy)' }}>NRI Long Distance India</span></nav>
        <div className="hero">
          <p className="badge">NRI Long Distance &middot; India-Abroad Relationship &middot; Visa Wait</p>
          <h1>NRI Long Distance — <em>One of You Here. One of You There.</em></h1>
          <p className="lead">One of you is building a life abroad. The other is in India, waiting. The time zone calls at midnight. The visa wait that has no guaranteed end date. The uncertainty of &ldquo;when can we be together&rdquo; that hangs over everything. It weighs on both of you, in different but equally real ways. Talk to someone who understands. First 5 minutes free.</p>
          <a href="https://www.leanon.app/browse" className="cta-hero">Talk to someone now &rarr;</a>
        </div>

        <div className="section">
          <h2>The Weight of the India-Abroad Wait</h2>
          <p>India-abroad long-distance relationships have a specific character that generic long-distance advice does not capture. The visa situation shapes everything — F2 visa, H4, UK spouse visa, the dependent category that puts one person on a dependent clock — and the wait times, the processing backlogs, the uncertainty of approval, the way a single administrative decision can determine when you get to be in the same room again, all of this is not just a logistical inconvenience. It becomes a weight the relationship carries.</p>
          <p>The partner in India is often handling family pressure about when they are going to &ldquo;join&rdquo; you. Your family has opinions about the timeline. Meanwhile the partner abroad is managing loneliness and guilt simultaneously — lonely without their person, guilty for being in the better situation geographically. Neither of these things are talked about openly.</p>
        </div>

        <div className="section">
          <h2>What Strains the Relationship</h2>
          <p>Time zone calls scheduled at inconvenient hours that slowly start feeling like obligations. One person&rsquo;s life moving forward visibly while the other is in a holding pattern. The immigration uncertainty that makes it impossible to plan anything — a holiday, a visit, a timeline for being together. The loneliness that is hard to communicate to a partner who is in a different version of the same loneliness. The disagreements that happen because two people are carrying the same stress but feeling it differently.</p>
          <p>None of this means the relationship is failing. It means the relationship is under a kind of structural pressure that most relationships do not face.</p>
        </div>

        <div className="section">
          <h2>Having Someone to Talk To</h2>
          <p>The partner in India can talk to LeanOn too. But for whoever is reading this — the person abroad, carrying the specific weight of being in the better place geographically while the relationship waits — having someone who already understands the immigration context, the dependent visa reality, and the particular shape of the India-abroad long-distance relationship is different from talking to friends who don&rsquo;t know the terrain. First 5 minutes free, anonymous, private.</p>
        </div>

        <div className="section"><h2>Frequently Asked Questions</h2>{faqs.map((f, i) => (<div className="faq-item" key={i}><p className="faq-q">{f.name}</p><p className="faq-a">{f.acceptedAnswer.text}</p></div>))}</div>
        <div className="cta-card"><h2>The wait, the uncertainty, the weight of two different loneliness.</h2><p>Real peer listener. Understands the India-abroad long-distance reality. First 5 minutes free, from ₹160.</p><a href="https://www.leanon.app/browse" className="btn-cta">Find a listener &rarr;</a></div>
        <div className="section"><h2>You Might Also Find This Helpful</h2><div className="related">
          <a href="/nri-long-distance-relationship">NRI long distance &rarr;</a>
          <a href="/nri-relationship-problems">NRI relationship problems &rarr;</a>
          <a href="/nri-relationship-advice">NRI relationship advice &rarr;</a>
          <a href="/nri-marriage-usa">NRI marriage USA &rarr;</a>
          <a href="/nri-marriage-uk">NRI marriage UK &rarr;</a>
          <a href="/nri-support">NRI support &rarr;</a>
          <a href="/nri-loneliness-usa">NRI loneliness USA &rarr;</a>
          <a href="/nri-loneliness-uk">NRI loneliness UK &rarr;</a>
        </div></div>
        <div className="crisis"><strong>In a crisis?</strong> NIMHANS: 080-46110007 &nbsp;&middot;&nbsp; Tele-MANAS: 14416 &nbsp;&middot;&nbsp; Both free, 24/7.</div>
      </div>
    </>
  )
}
