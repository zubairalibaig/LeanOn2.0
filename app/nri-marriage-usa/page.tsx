import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'NRI Marriage Problems in the USA | Talk to Someone | LeanOn',
  description: 'Arranged marriage pressure, long-distance spouse, or marriage problems as an Indian in America? Talk to a peer listener who understands the NRI marriage experience.',
  keywords: ['nri marriage usa', 'nri marriage problems america', 'arranged marriage nri usa', 'indian marriage issues usa', 'nri spouse problems', 'nri marriage stress', 'desi marriage usa'],
  alternates: { canonical: 'https://www.leanon.app/nri-marriage-usa' },
  openGraph: { title: 'NRI Marriage Problems in the USA | Talk to Someone | LeanOn', description: 'Arranged marriage pressure, long-distance spouse, or marriage problems as an Indian in America? Talk to a peer listener who understands the NRI marriage experience.', url: 'https://www.leanon.app/nri-marriage-usa', siteName: 'LeanOn', type: 'article', images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn' }] },
}

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
  { '@type': 'Question', name: 'What kinds of NRI marriage issues do people talk about?', acceptedAnswer: { '@type': 'Answer', text: 'Everything: the arranged match you agreed to under pressure and are now questioning. The long-distance marriage with a spouse still waiting for their visa. The marriage to someone your parents disapprove of. The marriage that looks fine from the outside but feels lonely from the inside. The exhaustion of navigating two families with different expectations across an ocean.' } },
  { '@type': 'Question', name: 'Is LeanOn the right place for marriage problems?', acceptedAnswer: { '@type': 'Answer', text: 'LeanOn is peer support, not mediation or professional advice. But peer listeners are real Indians who have heard many of these stories. Sometimes what you need before anything else is to be heard — by someone who truly understands the cultural complexity, without judgement.' } },
  { '@type': 'Question', name: 'What if I\'m not sure my marriage is a problem — just that something feels off?', acceptedAnswer: { '@type': 'Answer', text: 'That is exactly what peer support is for. You don\'t need a crisis or a clear problem to talk to someone. "Something feels off and I can\'t name it" is a completely valid reason to reach out.' } },
  { '@type': 'Question', name: 'Is this confidential from my family?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Sessions are completely anonymous. Only a phone number and first name. Nothing is shared with your family in India or the US, your community, or anyone else.' } },
  { '@type': 'Question', name: 'How much does it cost?', acceptedAnswer: { '@type': 'Answer', text: 'First 5 minutes free every session. Sessions from ₹160 for 15 minutes. No subscription.' } },
] }

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
  { '@type': 'ListItem', position: 2, name: 'NRI Support', item: 'https://www.leanon.app/nri-support' },
  { '@type': 'ListItem', position: 3, name: 'NRI Marriage USA', item: 'https://www.leanon.app/nri-marriage-usa' },
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

export default function NriMarriageUsaPage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>
      <nav className="nav"><a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a><a href="/browse"><button className="btn-nav">Find a listener</button></a></nav>
      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>&#x203A;</span><a href="/nri-support">NRI Support</a><span>&#x203A;</span><span style={{ color: 'var(--navy)' }}>NRI Marriage USA</span></nav>
        <div className="hero">
          <p className="badge">NRI Marriage &middot; USA &middot; Indian Relationships</p>
          <h1>NRI marriage. The pressure is different here. <em>So is the loneliness of it.</em></h1>
          <p className="lead">Whether it&rsquo;s the arranged marriage you agreed to under pressure, the long-distance marriage with your spouse still in India, the American-born partner your parents disapprove of, or the marriage that looked right on paper but feels wrong in practice — NRI marriage in America carries its own unique weight. Talk to a real Indian peer listener. First 5 minutes free.</p>
          <a href="/browse" className="cta-hero">Talk to someone now &rarr;</a>
        </div>

        <div className="section">
          <h2>NRI Marriage in America: The Pressures Nobody Names</h2>
          <p>NRI marriage in America is not just about two people — it involves two families, two cultural scripts, two sets of expectations, and often an ocean between them. The couple living in Plano or Sugar Land has to navigate the parents in India watching every decision, the aunties and uncles in the Indian community in America watching every move, and the American-born or raised children who will grow up in a completely different world than either parent knew.</p>
          <p>There are many forms this takes. The arranged marriage where both parties knew each other for six months before the wedding and are now living together in a suburb, discovering each other under significant pressure to make it work. The love marriage to someone of a different background that the family has grudgingly accepted but never fully welcomed. The marriage to an Indian-American — a different cultural identity entirely — where the expectations around Indian womanhood or manhood create friction. The marriage that started well and has drifted.</p>
          <p>Whatever the form, the common thread is that there is often no one to talk to about it — the community watches, the family has opinions, and the stakes of saying the wrong thing to the wrong person are high. LeanOn offers a real Indian peer listener in India — outside your social network entirely — who understands all of this. First 5 minutes free.</p>
        </div>

        <div className="section">
          <h2>What a Peer Listener Can Offer</h2>
          <p>LeanOn is peer support, not professional advice. A peer listener will not tell you what to do about your marriage. What they will do is listen — deeply and without judgement — while you say the things you have not been able to say out loud. They have cultural fluency. They understand what it means to be told "just adjust" or "log kya kahenge." They understand the weight of family honour and what it costs to carry it.</p>
          <p>Sometimes being heard — really heard, by someone who truly gets the cultural context — is the thing that creates movement when everything has felt stuck. Talk to someone. First 5 minutes free. From ₹160 for a full 15-minute session.</p>
        </div>

        <div className="section"><h2>Frequently Asked Questions</h2>{faqs.map((f, i) => (<div className="faq-item" key={i}><p className="faq-q">{f.name}</p><p className="faq-a">{f.acceptedAnswer.text}</p></div>))}</div>
        <div className="cta-card"><h2>You don&rsquo;t have to carry this alone.</h2><p>Real Indian peer listener. Understands NRI marriage complexity. First 5 minutes free. From ₹160.</p><a href="/browse" className="btn-cta">Find a listener &rarr;</a></div>
        <div className="section"><h2>You Might Also Find This Helpful</h2><div className="related">
          <a href="/nri-relationship-problems">NRI relationship problems &rarr;</a>
          <a href="/nri-dating-usa">NRI dating USA &rarr;</a>
          <a href="/nri-support">NRI support &rarr;</a>
          <a href="/desi-support-usa">Desi support USA &rarr;</a>
        </div></div>
        <div className="crisis"><strong>In a crisis?</strong> NIMHANS: 080-46110007 &nbsp;&middot;&nbsp; Tele-MANAS: 14416 &nbsp;&middot;&nbsp; Both free, 24/7.</div>
      </div>
    </>
  )
}
