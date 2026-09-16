import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Homesick as an NRI | Missing India from Abroad | LeanOn',
  description: 'Missing India isn\'t weakness — it\'s one of the least-talked-about parts of immigrant life. Talk to a peer listener who understands what home means and why its absence hurts.',
  keywords: ['nri homesick', 'missing india from abroad', 'homesickness nri', 'indian homesickness uk usa canada', 'missing home india', 'nri missing family india'],
  alternates: { canonical: 'https://www.leanon.app/nri-homesick' },
  openGraph: { title: 'Homesick as an NRI | Missing India from Abroad | LeanOn', description: 'Missing India isn\'t weakness — it\'s one of the least-talked-about parts of immigrant life. Talk to a peer listener who understands what home means and why its absence hurts.', url: 'https://www.leanon.app/nri-homesick', siteName: 'LeanOn', type: 'article', images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn' }] },
}

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
  { '@type': 'Question', name: 'Is it normal to still miss India after years abroad?', acceptedAnswer: { '@type': 'Answer', text: 'Completely normal. Homesickness for India doesn\'t follow a neat timeline. People who have been abroad for 10 or 20 years still feel it at particular moments — a smell, a festival, a family occasion, a song. The duration of absence doesn\'t make the feeling smaller.' } },
  { '@type': 'Question', name: 'What do people miss most about India?', acceptedAnswer: { '@type': 'Answer', text: 'Different things for different people: the food, the chaos, the extended family, the way people talk, the festivals, the ease of being in a place where you are the default, the everyday things that are invisible until they are gone. Listeners at LeanOn understand all of this without needing it catalogued.' } },
  { '@type': 'Question', name: 'Will talking to someone help with homesickness?', acceptedAnswer: { '@type': 'Answer', text: 'Being heard by someone who truly understands often helps. Not because the homesickness disappears, but because carrying it alone is harder than carrying it with someone who gets it. LeanOn listeners are in India — they are from the place you miss.' } },
  { '@type': 'Question', name: 'How much does it cost?', acceptedAnswer: { '@type': 'Answer', text: 'Your first session with each new listener is free (5 minutes). After that, sessions start at ₹160 for 15 minutes. No subscription.' } },
] }

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
  { '@type': 'ListItem', position: 2, name: 'NRI Support', item: 'https://www.leanon.app/nri-support' },
  { '@type': 'ListItem', position: 3, name: 'NRI Homesick', item: 'https://www.leanon.app/nri-homesick' },
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

export default function NriHomesickPage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>
      <nav className="nav"><a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a><a href="/browse"><button className="btn-nav">Find a listener</button></a></nav>
      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>&#x203A;</span><a href="/nri-support">NRI Support</a><span>&#x203A;</span><span style={{ color: 'var(--navy)' }}>NRI Homesick</span></nav>
        <div className="hero">
          <p className="badge">NRI Homesickness &middot; Missing India &middot; Desi Abroad</p>
          <h1>Home is 5,000 miles away. <em>And some days that distance is everything.</em></h1>
          <p className="lead">The smell of your mother&rsquo;s kitchen. The chai. The chaos you used to complain about. The people who knew you before you became who you are now. Homesickness for India is its own specific pain — one that your non-Indian colleagues don&rsquo;t understand and that you&rsquo;re too embarrassed to admit to your parents because it would just worry them. Talk to a real Indian peer listener. First 5 minutes free.</p>
          <a href="/browse" className="cta-hero">Talk to someone now &rarr;</a>
        </div>

        <div className="section">
          <h2>What Missing India Actually Feels Like</h2>
          <p>Homesickness for India is not always the dramatic, acute missing of early weeks after arriving. More often it is quieter and more persistent — a background ache that surfaces at particular moments. The Diwali weekend when you are in Houston or Fremont and the community event is wonderful but it is not your family&rsquo;s home. The Sunday morning when you would normally have gone to your parents&rsquo; house for breakfast. The smell of rain on dry earth that reminds you of somewhere specific.</p>
          <p>It surfaces at difficult life moments too — when you are unwell and there is no one to bring you chai and sit with you. When something goes wrong and you want comfort that geography makes impossible. When your parents are getting older and you are watching it through a screen. These moments land differently than general loneliness.</p>
          <p>LeanOn listeners are in India. They are from the place you miss. They know what you mean without you having to explain it. The chai, the chaos, the family Sunday — they understand the specific texture of what you are missing. First 5 minutes free.</p>
        </div>

        <div className="section">
          <h2>The Guilt That Comes with Homesickness</h2>
          <p>One of the hardest parts of NRI homesickness is the guilt that comes with it. You chose to come here. You were given the opportunity. Your parents sacrificed. To tell them you are homesick feels ungrateful — and it would worry them. So the homesickness goes underground, carried quietly, felt but not named.</p>
          <p>A real Indian peer listener at LeanOn can receive this without the guilt. They will not tell you that you should be grateful, or that it gets easier, or that you will adjust. They will simply hear what you are missing and why it hurts. Sometimes that is enough. Sessions are anonymous, private, and the first 5 minutes free — once per listener.</p>
        </div>

        <div className="section"><h2>Frequently Asked Questions</h2>{faqs.map((f, i) => (<div className="faq-item" key={i}><p className="faq-q">{f.name}</p><p className="faq-a">{f.acceptedAnswer.text}</p></div>))}</div>
        <div className="cta-card"><h2>Someone from home, to hear you miss it.</h2><p>Real Indian peer listener. In India. Understands what you miss. First 5 minutes free. From ₹160.</p><a href="/browse" className="btn-cta">Find a listener &rarr;</a></div>
        <div className="section"><h2>You Might Also Find This Helpful</h2><div className="related">
          <a href="/nri-support">NRI support &rarr;</a>
          <a href="/nri-loneliness-usa">NRI loneliness USA &rarr;</a>
          <a href="/nri-loneliness-uk">NRI loneliness UK &rarr;</a>
          <a href="/nri-loneliness-canada">NRI loneliness Canada &rarr;</a>
        </div></div>
        <div className="crisis"><strong>In a crisis?</strong> NIMHANS: 080-46110007 &nbsp;&middot;&nbsp; Tele-MANAS: 14416 &nbsp;&middot;&nbsp; Both free, 24/7.</div>
      </div>
    </>
  )
}
