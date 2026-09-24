import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'NRI Dating in Canada | The Complexity of Finding Love as an Indian Abroad | LeanOn',
  description: 'Dating as an Indian in Canada — Brampton, Toronto, Vancouver — comes with layers no dating app can solve. Talk to a listener who understands the desi dating world.',
  keywords: ['nri dating canada', 'indian dating canada', 'desi dating canada', 'indian single canada', 'nri relationships canada', 'indian dating toronto', 'nri dating toronto'],
  alternates: { canonical: 'https://www.leanon.app/nri-dating-canada' },
  openGraph: { title: 'NRI Dating in Canada | The Complexity of Finding Love as an Indian Abroad | LeanOn', description: 'Dating as an Indian in Canada — Brampton, Toronto, Vancouver — comes with layers no dating app can solve. Talk to a listener who understands the desi dating world.', url: 'https://www.leanon.app/nri-dating-canada', siteName: 'LeanOn', type: 'article', images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn' }] },
}

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
  { '@type': 'Question', name: 'Is this about dating apps or actual conversation support?', acceptedAnswer: { '@type': 'Answer', text: 'This is about having a real conversation with a peer listener who understands the NRI dating experience — not tips on which apps to use. Talking through what you are navigating with someone who gets the desi dating context is very different from reading advice online.' } },
  { '@type': 'Question', name: 'Can I talk about family pressure around dating as well as the dating itself?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The family pressure, the community dynamics, the arranged marriage alternative hovering in the background — all of this is part of the NRI dating experience and can be part of the conversation.' } },
  { '@type': 'Question', name: 'Is this confidential from my community in Canada?', acceptedAnswer: { '@type': 'Answer', text: 'Completely. Sessions are private — phone number and first name only. Nothing goes anywhere near your community, your family, or anyone in Canada or India.' } },
  { '@type': 'Question', name: 'Are listeners based in India or Canada?', acceptedAnswer: { '@type': 'Answer', text: 'Listeners are based in India but understand the NRI experience — many have direct experience with family abroad or with life in the diaspora. They understand the Brampton community dynamics, the Canadian dating culture, the desi dating pressures without needing it explained.' } },
  { '@type': 'Question', name: 'How much does a session cost?', acceptedAnswer: { '@type': 'Answer', text: 'First 5 minutes are free. Sessions continue from US$10 for 15 minutes. No subscription.' } },
] }

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
  { '@type': 'ListItem', position: 2, name: 'NRI Support', item: 'https://www.leanon.app/nri-support' },
  { '@type': 'ListItem', position: 3, name: 'NRI Dating Canada', item: 'https://www.leanon.app/nri-dating-canada' },
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

export default function NriDatingCanadaPage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>
      <nav className="nav"><a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a><a href="https://www.leanon.app/browse"><button className="btn-nav">Find a listener</button></a></nav>
      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>&#x203A;</span><a href="/nri-support">NRI Support</a><span>&#x203A;</span><span style={{ color: 'var(--navy)' }}>NRI Dating Canada</span></nav>
        <div className="hero">
          <p className="badge">NRI Dating Canada &middot; Desi Dating &middot; Indian Abroad</p>
          <h1>NRI Dating in Canada — <em>Love, But Complicated</em></h1>
          <p className="lead">Dating as an Indian in Canada comes with layers no dating app was designed for. The Brampton community where everyone knows everyone. Parents in India still wanting to arrange a match. The question of dating someone outside the community. The loneliness of being single in a new country where the rules are different. Talk to a listener who already understands the desi dating world. First 5 minutes free.</p>
          <a href="https://www.leanon.app/browse" className="cta-hero">Talk to someone now &rarr;</a>
        </div>

        <div className="section">
          <h2>The Specific Context of Dating Indian in Canada</h2>
          <p>Canada has one of the largest Indian diasporas in the world, concentrated in the Greater Toronto Area — Brampton, Mississauga, Scarborough. The community is large enough to feel like home in some ways and small enough to feel like a fishbowl in others. Who you are dating, whether you are dating at all, whether you are dating someone outside the community — in the desi community these are not private matters. News travels through the grapevine faster than you would want.</p>
          <p>Meanwhile, your parents in India have their own timeline. They are forwarding profiles. They want to know when you are getting married. They may or may not know the person you are dating. The gap between your actual dating life and the version that exists in your family&rsquo;s mind creates a specific kind of stress.</p>
        </div>

        <div className="section">
          <h2>The Tensions That Don&rsquo;t Have Easy Answers</h2>
          <p>Dating someone outside the Indian community brings its own set of pressures — family disapproval from India, community side-eyes in Canada, your own uncertainty about how to navigate the cultural gap. Dating within the community has its own pressures — the fishbowl effect, the speed at which your dating life becomes community property, the way marriages are evaluated not just between two people but between two families and sometimes two postcodes.</p>
          <p>Being single in Canada as an Indian carries its own weight — the loneliness of navigating dating culture in a country where the norms are different, the pressure of the arranged marriage alternative always in the background, the feeling that time is passing in ways that your family is tracking even if you are not.</p>
        </div>

        <div className="section">
          <h2>What Talking to a Peer Listener Gives You</h2>
          <p>Not dating advice. Not a decision handed to you. Just a space to say what you are actually experiencing — the confusion, the loneliness, the pressure, the conflict between what you want and what your family wants — to someone who already understands the Indian Canadian dating world without needing it explained. Private, anonymous, no community overlap.</p>
        </div>

        <div className="section"><h2>Frequently Asked Questions</h2>{faqs.map((f, i) => (<div className="faq-item" key={i}><p className="faq-q">{f.name}</p><p className="faq-a">{f.acceptedAnswer.text}</p></div>))}</div>
        <div className="cta-card"><h2>The dating life you can&rsquo;t explain to your parents.</h2><p>Real peer listener. Understands desi dating in Canada. First 5 minutes free, from US$10.</p><a href="https://www.leanon.app/browse" className="btn-cta">Find a listener &rarr;</a></div>
        <div className="section"><h2>You Might Also Find This Helpful</h2><div className="related">
          <a href="/nri-loneliness-canada">NRI loneliness Canada &rarr;</a>
          <a href="/nri-relationship-problems">NRI relationship problems &rarr;</a>
          <a href="/arranged-marriage-nri">Arranged marriage NRI &rarr;</a>
          <a href="/nri-relationship-advice">NRI relationship advice &rarr;</a>
          <a href="/indians-in-toronto">Indians in Toronto &rarr;</a>
          <a href="/nri-support">NRI support &rarr;</a>
          <a href="/nri-loneliness-usa">NRI loneliness USA &rarr;</a>
          <a href="/nri-identity-crisis">NRI identity crisis &rarr;</a>
        </div></div>
        <div className="crisis"><strong>In a crisis?</strong> NIMHANS: 080-46110007 &nbsp;&middot;&nbsp; Tele-MANAS: 14416 &nbsp;&middot;&nbsp; Both free, 24/7.</div>
      </div>
    </>
  )
}
