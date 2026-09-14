import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Indians Feeling Lonely Abroad | You\'re Not Ungrateful. You\'re Human. | LeanOn',
  description: 'Feeling lonely abroad doesn\'t make you ungrateful for the opportunity you worked for. It makes you human. Talk to someone who won\'t judge you for it.',
  keywords: ['indians feeling lonely abroad', 'indian lonely abroad', 'indian isolation abroad', 'lonely indian in foreign country', 'desi lonely abroad', 'nri feeling lonely'],
  alternates: { canonical: 'https://www.leanon.app/indians-feeling-lonely-abroad' },
  openGraph: { title: 'Indians Feeling Lonely Abroad | You\'re Not Ungrateful. You\'re Human. | LeanOn', description: 'Feeling lonely abroad doesn\'t make you ungrateful for the opportunity you worked for. It makes you human. Talk to someone who won\'t judge you for it.', url: 'https://www.leanon.app/indians-feeling-lonely-abroad', siteName: 'LeanOn', type: 'article', images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn' }] },
}

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
  { '@type': 'Question', name: 'How do I know if what I am feeling is loneliness or something more serious?', acceptedAnswer: { '@type': 'Answer', text: 'If the feeling is persistent and affecting your daily life, talking to a professional might also be helpful alongside peer support. But the loneliness of immigrant life — the specific isolation of being Indian abroad without your support network — is a real and common experience that does not require a clinical label to deserve attention. A peer listener can help you think through what you are experiencing.' } },
  { '@type': 'Question', name: 'Is it normal to feel lonely even if I have Indian friends abroad?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Having Indian friends abroad does not eliminate NRI loneliness. The loneliness is often about the absence of people who knew you before — who have history with you, who don\'t need context. It can coexist with a social life.' } },
  { '@type': 'Question', name: 'My parents think I have everything — will you judge me for being lonely?', acceptedAnswer: { '@type': 'Answer', text: 'No judgment. Peer listeners understand that having a good life abroad and feeling lonely are not incompatible. The feeling does not need to be earned by suffering. It just is, and it deserves to be heard.' } },
  { '@type': 'Question', name: 'Is the session private from my family?', acceptedAnswer: { '@type': 'Answer', text: 'Completely. Sessions are private — phone number and first name only. Nothing is shared with your family, your community, or anyone else.' } },
  { '@type': 'Question', name: 'How much does a session cost?', acceptedAnswer: { '@type': 'Answer', text: 'First 5 minutes are free. Sessions continue from ₹160 for 15 minutes. No subscription, no commitment.' } },
] }

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
  { '@type': 'ListItem', position: 2, name: 'NRI Support', item: 'https://www.leanon.app/nri-support' },
  { '@type': 'ListItem', position: 3, name: 'Indians Feeling Lonely Abroad', item: 'https://www.leanon.app/indians-feeling-lonely-abroad' },
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

export default function IndiansLonelyAbroadPage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>
      <nav className="nav"><a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a><a href="https://www.leanon.app/browse"><button className="btn-nav">Find a listener</button></a></nav>
      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>&#x203A;</span><a href="/nri-support">NRI Support</a><span>&#x203A;</span><span style={{ color: 'var(--navy)' }}>Indians Feeling Lonely Abroad</span></nav>
        <div className="hero">
          <p className="badge">Indian Loneliness Abroad &middot; Immigrant Life &middot; Peer Support</p>
          <h1>Indians Feeling Lonely Abroad — <em>You&rsquo;re Not Ungrateful. You&rsquo;re Human.</em></h1>
          <p className="lead">You fought hard to get here. Your parents sacrificed. So why does feeling lonely feel like an insult to all of that? It doesn&rsquo;t. Feeling lonely abroad doesn&rsquo;t cancel the gratitude. It doesn&rsquo;t erase the achievement. It just means you are human, and being human in a foreign country is genuinely hard. Talk to someone who won&rsquo;t judge you for it. First 5 minutes free.</p>
          <a href="https://www.leanon.app/browse" className="cta-hero">Talk to someone now &rarr;</a>
        </div>

        <div className="section">
          <h2>The Guilt That Comes with NRI Loneliness</h2>
          <p>Indian immigrant culture carries a specific version of this guilt: the calculation of sacrifice. Your parents worked hard so you could have this opportunity. You studied, you prepared, you competed, you got here. The people back home look at your life abroad and see success. The idea that you might be lonely inside that success — that you might be struggling emotionally in the country you worked so hard to reach — feels like a betrayal of all of that work.</p>
          <p>So the loneliness gets suppressed under the gratitude. You remind yourself how lucky you are. You tell yourself it is ungrateful to feel this way. You perform fine on the calls home. The feeling does not go away — it just has nowhere to go.</p>
          <p>The truth is that gratitude and loneliness are not opposites. You can be grateful for the opportunity and still feel the cost of what it requires. You can appreciate the life you have built and still grieve the things you left behind. These are not incompatible.</p>
        </div>

        <div className="section">
          <h2>Who Tells You It&rsquo;s Okay to Feel This</h2>
          <p>Not many people. Your parents want to hear that you are doing well — their happiness, their validation of the sacrifice, is partly tied to your success abroad. Telling them you are lonely feels cruel. Your colleagues do not have the cultural context to understand why you might be lonely inside a comfortable life. Your Indian friends abroad are navigating the same loneliness and performing fine together — the community dynamic of mutual performance does not leave much room for honesty.</p>
          <p>The honest answer is that almost nobody in your life is well-positioned to hear this without it becoming complicated. The person at home worries. The friend abroad gets defensive. The colleague does not understand. The parent feels responsible. There is nowhere for the feeling to go that does not create a consequence you then have to manage.</p>
        </div>

        <div className="section">
          <h2>What LeanOn Offers</h2>
          <p>A listener who already understands the immigrant context and will not need you to justify feeling lonely when your life looks good. No gratitude calculation. No comparison to what people in India face. No performance required. Just the actual thing you are experiencing, heard by someone who already knows the terrain. Private. Anonymous. First 5 minutes free. That is enough. Sometimes it is everything.</p>
        </div>

        <div className="section"><h2>Frequently Asked Questions</h2>{faqs.map((f, i) => (<div className="faq-item" key={i}><p className="faq-q">{f.name}</p><p className="faq-a">{f.acceptedAnswer.text}</p></div>))}</div>
        <div className="cta-card"><h2>The loneliness that doesn&rsquo;t need to be earned by suffering.</h2><p>Real peer listener. No judgment. Already understands the immigrant weight. First 5 minutes free, from ₹160.</p><a href="https://www.leanon.app/browse" className="btn-cta">Find a listener &rarr;</a></div>
        <div className="section"><h2>You Might Also Find This Helpful</h2><div className="related">
          <a href="/nri-loneliness-usa">NRI loneliness USA &rarr;</a>
          <a href="/nri-loneliness-uk">NRI loneliness UK &rarr;</a>
          <a href="/nri-loneliness-canada">NRI loneliness Canada &rarr;</a>
          <a href="/nri-lonely">NRI lonely &rarr;</a>
          <a href="/nri-support">NRI support &rarr;</a>
          <a href="/nri-mental-health">NRI mental health &rarr;</a>
          <a href="/nri-homesick">NRI homesick &rarr;</a>
          <a href="/nri-identity-crisis">NRI identity crisis &rarr;</a>
        </div></div>
        <div className="crisis"><strong>In a crisis?</strong> NIMHANS: 080-46110007 &nbsp;&middot;&nbsp; Tele-MANAS: 14416 &nbsp;&middot;&nbsp; Both free, 24/7.</div>
      </div>
    </>
  )
}
