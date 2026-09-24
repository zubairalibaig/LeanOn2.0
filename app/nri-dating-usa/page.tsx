import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'NRI Dating in the USA | Being Indian and Dating in America | LeanOn',
  description: 'Dating as an Indian in America is complicated — family expectations, apps, cultural mismatch. Talk to a peer listener who understands the NRI dating experience.',
  keywords: ['nri dating usa', 'indian dating america', 'desi dating usa', 'dating as indian in usa', 'nri dating apps', 'second generation indian dating', 'abcd dating problems'],
  alternates: { canonical: 'https://www.leanon.app/nri-dating-usa' },
  openGraph: { title: 'NRI Dating in the USA | Being Indian and Dating in America | LeanOn', description: 'Dating as an Indian in America is complicated — family expectations, apps, cultural mismatch. Talk to a peer listener who understands the NRI dating experience.', url: 'https://www.leanon.app/nri-dating-usa', siteName: 'LeanOn', type: 'article', images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn' }] },
}

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
  { '@type': 'Question', name: 'What kinds of NRI dating situations do people talk about?', acceptedAnswer: { '@type': 'Answer', text: 'Many: the exhaustion of dating apps where you constantly have to explain your cultural background. The relationship your parents don\'t know about. The non-Indian partner your family won\'t accept. The Indian-American partner who doesn\'t feel Indian enough for your family. The loneliness of being single in the Indian community where everyone seems paired off.' } },
  { '@type': 'Question', name: 'Will the listener judge me for dating non-Indians or outside my caste?', acceptedAnswer: { '@type': 'Answer', text: 'No. LeanOn listeners are peer listeners, not moral authorities. They will hear you without judgement, whatever your choices or situation. Their role is to understand, not to assess.' } },
  { '@type': 'Question', name: 'Is this confidential from my family and community?', acceptedAnswer: { '@type': 'Answer', text: 'Completely. Sessions are anonymous — phone number and first name only. Nothing is shared with your family, community, or anyone else.' } },
  { '@type': 'Question', name: 'What if I\'m second-generation and my dating life is complicated by identity questions?', acceptedAnswer: { '@type': 'Answer', text: 'LeanOn is particularly well-suited to second-generation Indian-Americans, who often navigate an identity gap between their American life and their Indian family. Listeners understand the ABCD experience without needing extensive explanation.' } },
  { '@type': 'Question', name: 'How much does it cost?', acceptedAnswer: { '@type': 'Answer', text: 'Your first session is free (5 minutes). After that, sessions start at US$10 for 15 minutes. No subscription.' } },
] }

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
  { '@type': 'ListItem', position: 2, name: 'NRI Support', item: 'https://www.leanon.app/nri-support' },
  { '@type': 'ListItem', position: 3, name: 'NRI Dating USA', item: 'https://www.leanon.app/nri-dating-usa' },
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

export default function NriDatingUsaPage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>
      <nav className="nav"><a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a><a href="/browse"><button className="btn-nav">Find a listener</button></a></nav>
      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>&#x203A;</span><a href="/nri-support">NRI Support</a><span>&#x203A;</span><span style={{ color: 'var(--navy)' }}>NRI Dating USA</span></nav>
        <div className="hero">
          <p className="badge">NRI Dating &middot; Indian-American &middot; Desi Love Life</p>
          <h1>Dating apps. Family pressure. <em>Two completely different instructions for your love life.</em></h1>
          <p className="lead">Dating as an Indian in America is navigating two incompatible instruction sets. Your parents want a rishta. Your friends are on Hinge. You&rsquo;re somewhere in between — wanting love but carrying the weight of expectations, the fear of judgment from the community, and the exhaustion of explaining your culture to every date. Talk to a real peer listener who understands this without explanation. First 5 minutes free.</p>
          <a href="/browse" className="cta-hero">Talk to someone now &rarr;</a>
        </div>

        <div className="section">
          <h2>The NRI Dating Double-Bind</h2>
          <p>Dating as an Indian in America puts you in a structural double-bind. American dating culture — apps, casual dating, taking time to find the right person, no rush — is fine in theory and complicated in practice when your family has a different timeline. Indian family culture — rishta, timelines, the community watching, your parents wanting to be involved — doesn&rsquo;t disappear because you live in Houston or Fremont.</p>
          <p>The result is a love life that often has a hidden layer. The relationship your parents don&rsquo;t know about. The non-Indian partner you&rsquo;re afraid to introduce. The Indian match your parents like and you don&rsquo;t. The exhausting Hinge conversations where you have to explain caste, your parents&rsquo; involvement, your timeline for marriage, and what Diwali means before you&rsquo;ve even had a first date. The loneliness of navigating all of this without a community of people who truly get it.</p>
          <p>LeanOn is exactly that place — a real Indian peer listener who understands the double-bind from the inside. No explanation required. First 5 minutes free.</p>
        </div>

        <div className="section">
          <h2>What People Actually Need to Say</h2>
          <p>The things people actually need to say about NRI dating are not the things that fit into a casual conversation with friends. "I&rsquo;m afraid that if I date the person I want, it will destroy my relationship with my parents." "I&rsquo;ve been on the apps for two years and I&rsquo;m starting to feel like something is wrong with me." "I&rsquo;m in a relationship I can&rsquo;t tell anyone about and it&rsquo;s exhausting." "My parents have a shortlist and I don&rsquo;t know how to say no without breaking their hearts."</p>
          <p>These are real. A LeanOn listener will hear them — really hear them — without judgement, without advice you didn&rsquo;t ask for, and without the community gossip risk. Sessions are anonymous and completely private. First 5 minutes free — once per listener.</p>
        </div>

        <div className="section"><h2>Frequently Asked Questions</h2>{faqs.map((f, i) => (<div className="faq-item" key={i}><p className="faq-q">{f.name}</p><p className="faq-a">{f.acceptedAnswer.text}</p></div>))}</div>
        <div className="cta-card"><h2>Someone who understands both instructions.</h2><p>Real Indian peer listener. Gets the NRI dating experience. First 5 minutes free. From US$10.</p><a href="/browse" className="btn-cta">Find a listener &rarr;</a></div>
        <div className="section"><h2>You Might Also Find This Helpful</h2><div className="related">
          <a href="/nri-marriage-usa">NRI marriage USA &rarr;</a>
          <a href="/desi-support-usa">Desi support USA &rarr;</a>
          <a href="/nri-relationship-problems">NRI relationship problems &rarr;</a>
          <a href="/second-generation-indian-usa">Second gen Indian USA &rarr;</a>
        </div></div>
        <div className="crisis"><strong>In a crisis?</strong> NIMHANS: 080-46110007 &nbsp;&middot;&nbsp; Tele-MANAS: 14416 &nbsp;&middot;&nbsp; Both free, 24/7.</div>
      </div>
    </>
  )
}
