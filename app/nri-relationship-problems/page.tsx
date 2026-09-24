import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'NRI Relationship Problems | When Cultural Expectations Collide | LeanOn',
  description: 'NRI relationships carry unique weight — family pressure, cross-cultural mismatch, identity conflicts. Talk to a peer listener who understands the Indian relationship context.',
  keywords: ['nri relationship problems', 'indian relationship issues abroad', 'desi relationship problems', 'nri couple problems', 'cultural mismatch nri', 'nri family expectations relationships'],
  alternates: { canonical: 'https://www.leanon.app/nri-relationship-problems' },
  openGraph: { title: 'NRI Relationship Problems | When Cultural Expectations Collide | LeanOn', description: 'NRI relationships carry unique weight — family pressure, cross-cultural mismatch, identity conflicts. Talk to a peer listener who understands the Indian relationship context.', url: 'https://www.leanon.app/nri-relationship-problems', siteName: 'LeanOn', type: 'article', images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn' }] },
}

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
  { '@type': 'Question', name: 'What kinds of NRI relationship problems come up most often?', acceptedAnswer: { '@type': 'Answer', text: 'The most common: family disapproval of the partner, cross-cultural misunderstanding between partners from different backgrounds, the weight of expectations brought from India into an NRI relationship, long-distance strain, the drift that happens when one partner has adapted more to the new country than the other, and the question of what kind of home you build when you come from two different ideas of home.' } },
  { '@type': 'Question', name: 'Is peer support the right thing when my relationship is really struggling?', acceptedAnswer: { '@type': 'Answer', text: 'Peer support is not a substitute for other kinds of help when things are serious. But it is often the first and most accessible step — being heard by someone who truly understands the cultural context, before you decide what else you need.' } },
  { '@type': 'Question', name: 'What if my problem involves my partner\'s family as much as my partner?', acceptedAnswer: { '@type': 'Answer', text: 'NRI relationship problems almost always involve families, not just couples. Listeners understand Indian family dynamics — joint family expectations, parental involvement in couples\' decisions, the weight of family honour — and won\'t need that context explained.' } },
  { '@type': 'Question', name: 'Is this confidential from my partner and family?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Sessions are completely anonymous. Only a phone number and first name. Nothing is shared with your partner, family, or community.' } },
  { '@type': 'Question', name: 'How much does it cost?', acceptedAnswer: { '@type': 'Answer', text: 'Your first session is free (5 minutes). After that, sessions start at US$10 for 15 minutes. No subscription.' } },
] }

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
  { '@type': 'ListItem', position: 2, name: 'NRI Support', item: 'https://www.leanon.app/nri-support' },
  { '@type': 'ListItem', position: 3, name: 'NRI Relationship Problems', item: 'https://www.leanon.app/nri-relationship-problems' },
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

export default function NriRelationshipProblemsPage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>
      <nav className="nav"><a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a><a href="/browse"><button className="btn-nav">Find a listener</button></a></nav>
      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>&#x203A;</span><a href="/nri-support">NRI Support</a><span>&#x203A;</span><span style={{ color: 'var(--navy)' }}>NRI Relationship Problems</span></nav>
        <div className="hero">
          <p className="badge">NRI Relationships &middot; Cultural Mismatch &middot; Desi Abroad</p>
          <h1>Two people. Two cultures. <em>The gap nobody warned you about.</em></h1>
          <p className="lead">NRI relationships aren&rsquo;t just about two people — they&rsquo;re about two families, two cultures, and two different ideas of what a relationship should look like. Whether you&rsquo;re navigating a cross-cultural relationship, family disapproval, the gap between your values and your partner&rsquo;s, or the loneliness of a marriage that started under pressure — talk to someone who has heard it all. First 5 minutes free.</p>
          <a href="/browse" className="cta-hero">Talk to someone now &rarr;</a>
        </div>

        <div className="section">
          <h2>The Cultural Weight That Comes Into Every NRI Relationship</h2>
          <p>Indian relationships abroad carry weight that is different from Indian relationships in India and different from local relationships in the country you live in. You are navigating the expectations you absorbed growing up — about what a partner should be, what a family should look like, what obligations you have to your parents, what success in a relationship means — and all of this has to interact with another person who may have absorbed different expectations entirely.</p>
          <p>If you are with someone from a different cultural background, you are managing the constant work of translation — explaining your family to them, explaining their family to yourself, finding the common ground in two sets of inherited ideas about love, commitment, money, gender roles, children, and what it means to be part of a family. This is exhausting and meaningful and sometimes overwhelming.</p>
          <p>If you are with someone Indian, the cultural match may be closer — but it is never simple. Different regions, different castes, different family dynamics, different expectations formed in very different homes. And then the NRI overlay: two people trying to figure out what kind of Indian life to build in a non-Indian country, with parents watching from India and community watching from the diaspora. LeanOn offers a space for all of this. First 5 minutes free.</p>
        </div>

        <div className="section">
          <h2>When There Is Nobody Safe to Talk To</h2>
          <p>One of the loneliest aspects of NRI relationship problems is having no one safe to talk to. You cannot tell your parents — they have opinions that would make things worse, or they would worry, or they would tell other family members. You cannot tell your Indian community friends — it goes in the gossip circuit. You cannot tell your non-Indian friends — they don&rsquo;t have the cultural framework to understand. You are alone with the weight of it.</p>
          <p>LeanOn is built for exactly this gap. A real Indian peer listener in India — outside your social network entirely, inside the cultural context completely — who can hear what you are actually carrying. Anonymous. Private. No appointment. First 5 minutes free — once per listener.</p>
        </div>

        <div className="section"><h2>Frequently Asked Questions</h2>{faqs.map((f, i) => (<div className="faq-item" key={i}><p className="faq-q">{f.name}</p><p className="faq-a">{f.acceptedAnswer.text}</p></div>))}</div>
        <div className="cta-card"><h2>Cultural context without explanation.</h2><p>Real Indian peer listener. Understands NRI relationship complexity. First 5 minutes free. From US$10.</p><a href="/browse" className="btn-cta">Find a listener &rarr;</a></div>
        <div className="section"><h2>You Might Also Find This Helpful</h2><div className="related">
          <a href="/nri-marriage-usa">NRI marriage USA &rarr;</a>
          <a href="/nri-dating-usa">NRI dating USA &rarr;</a>
          <a href="/nri-support">NRI support &rarr;</a>
          <a href="/indian-diaspora-mental-health">Indian diaspora support &rarr;</a>
        </div></div>
        <div className="crisis"><strong>In a crisis?</strong> NIMHANS: 080-46110007 &nbsp;&middot;&nbsp; Tele-MANAS: 14416 &nbsp;&middot;&nbsp; Both free, 24/7.</div>
      </div>
    </>
  )
}
