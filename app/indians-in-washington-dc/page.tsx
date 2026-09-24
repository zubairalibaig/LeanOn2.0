import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Indians in Washington DC | Peer Support for the DMV Indian Community | LeanOn',
  description: 'The DC metro area — Fairfax, Ashburn, Bethesda — has a dense Indian community. But working in policy, tech, or government doesn\'t mean you\'re not lonely.',
  keywords: ['indians in washington dc', 'indian community dc', 'fairfax indians', 'ashburn indian community', 'dmv indians', 'nri washington', 'south asian dc'],
  alternates: { canonical: 'https://www.leanon.app/indians-in-washington-dc' },
  openGraph: { title: 'Indians in Washington DC | Peer Support for the DMV Indian Community | LeanOn', description: 'The DC metro area — Fairfax, Ashburn, Bethesda — has a dense Indian community. But working in policy, tech, or government doesn\'t mean you\'re not lonely.', url: 'https://www.leanon.app/indians-in-washington-dc', siteName: 'LeanOn', type: 'article', images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn' }] },
}

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
  { '@type': 'Question', name: 'Do listeners understand the DC area Indian professional experience?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. LeanOn listeners understand the NRI experience including the specific pressures of the DMV Indian community — government contractor work, H1B complexities in the policy world, the diplomatic distance of living near power, and the particular emotional suppression that comes with high-achieving, high-visibility careers.' } },
  { '@type': 'Question', name: 'What time can I connect from the DC area?', acceptedAnswer: { '@type': 'Answer', text: 'Washington DC (EST) is 10.5 hours behind IST. 8am DC = 6:30pm India. Before your morning commute on the Silver Line, Indian listeners are in their evening and available. Early mornings work well.' } },
  { '@type': 'Question', name: 'Is this completely private from my professional network?', acceptedAnswer: { '@type': 'Answer', text: 'Completely. LeanOn is anonymous — phone number and first name only. Nothing is shared with your employer, colleagues, government contacts, or anyone in the Northern Virginia or DC Indian community.' } },
  { '@type': 'Question', name: 'How much does a session cost?', acceptedAnswer: { '@type': 'Answer', text: 'Your first session is free (5 minutes). After that, sessions start at US$10 for 15 minutes. No subscription.' } },
  { '@type': 'Question', name: 'I work in a field where showing vulnerability feels professionally risky. Will this stay private?', acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. LeanOn was built specifically for people who cannot easily show vulnerability in their professional world. Sessions are anonymous, private, and outside your professional network entirely.' } },
] }

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
  { '@type': 'ListItem', position: 2, name: 'NRI Support', item: 'https://www.leanon.app/nri-support' },
  { '@type': 'ListItem', position: 3, name: 'Indians in Washington DC', item: 'https://www.leanon.app/indians-in-washington-dc' },
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

export default function IndiansInWashingtonDCPage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>
      <nav className="nav"><a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a><a href="https://www.leanon.app/browse"><button className="btn-nav">Find a listener</button></a></nav>
      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>&#x203A;</span><a href="/nri-support">NRI Support</a><span>&#x203A;</span><span style={{ color: 'var(--navy)' }}>Indians in Washington DC</span></nav>
        <div className="hero">
          <p className="badge">Indians in DC &middot; Fairfax &middot; Ashburn &middot; Northern Virginia</p>
          <h1>Fairfax, Ashburn, Herndon. <em>Little India. Big silence.</em></h1>
          <p className="lead">The Northern Virginia corridor — Fairfax, Ashburn, Herndon, Reston — is sometimes called &ldquo;Little India.&rdquo; Bethesda, Rockville, and Silver Spring hold some of the most accomplished Indian families in America. Living near power shapes you. The diplomatic distance, the high-stakes careers, the community that is too visible to be vulnerable in. Talk to someone outside all of it. First 5 minutes free.</p>
          <a href="https://www.leanon.app/browse" className="cta-hero">Talk to someone now &rarr;</a>
        </div>

        <div className="section">
          <h2>Fairfax, Ashburn, Herndon: The Indian DMV</h2>
          <p>No Indian community in America is more concentrated in a single corridor than Northern Virginia. Fairfax County alone has one of the largest Indian populations of any county in the country. Ashburn and Herndon — where data centres sit alongside Indian grocery stores — are places where you can go days without speaking to anyone who isn&rsquo;t Indian or working in tech. The Silver Line was practically built for the Indian commuter.</p>
          <p>On the Maryland side, Rockville and Bethesda carry a significant Indian professional and medical community — the NIH, FEMA, and government contractor world has drawn Indian professionals for decades. Gaithersburg, Germantown, and the I-270 corridor have large Indian family communities. The DMV Indian community is one of the most established, credentialed, and quietly burdened in America.</p>
          <p>LeanOn listeners are based in India, understand the NRI experience deeply, and are available without appointment. First 5 minutes free. From US$10.</p>
        </div>

        <div className="section">
          <h2>The Diplomatic Distance: Living Near Power, Feeling Far from Yourself</h2>
          <p>Working in or around government — policy, defence contracting, the World Bank, the IMF, embassy work, Capitol Hill staffing — has a particular effect on people. You become practiced at discretion. You learn to separate your professional face from your personal one. Vulnerability becomes professionally dangerous. And after years of this, the ability to simply say what you feel to another person atrophies.</p>
          <p>The DC Indian community carries this in a concentrated form. High-achieving, high-visibility, often in careers where the wrong thing said to the wrong person has real consequences. The Indian parent who is a senior official at a federal agency and has not told anyone — not even their spouse — how much they dread Monday mornings. The government contractor on a security clearance who has been managing a low-grade anxiety for three years and has told no one.</p>
          <p>LeanOn is outside your professional network entirely. Anonymous. No notes that can be subpoenaed. A real Indian peer listener who understands the weight of the DMV Indian professional world.</p>
        </div>

        <div className="section">
          <h2>The Community That Sees Everything</h2>
          <p>The Northern Virginia Indian community is famously tight-knit. The temple committees, the cultural associations, the Diwali galas at the Marriott, the school parent networks where the Indian parents all know each other — it is a warm and supportive community, and it is one where news travels fast. You can be surrounded by hundreds of Indians every weekend and have no one you can actually talk to, because everyone knows your family, your career, your parents back in India.</p>
          <p>This is why LeanOn exists. Not a replacement for community — but a space outside it. A trained Indian peer listener who knows nothing about your career, your family, or your standing in the Fairfax Indian community. Someone who will just listen. Washington DC (EST) is 10.5 hours behind IST. 8am in DC is 6:30pm in India — before the commute, listeners are available.</p>
        </div>

        <div className="section"><h2>Frequently Asked Questions</h2>{faqs.map((f, i) => (<div className="faq-item" key={i}><p className="faq-q">{f.name}</p><p className="faq-a">{f.acceptedAnswer.text}</p></div>))}</div>
        <div className="cta-card"><h2>Living near power doesn&rsquo;t mean you have someone to talk to.</h2><p>Real Indian peer listener. Understands the DMV Indian experience. Completely anonymous. First 5 minutes free. From US$10.</p><a href="https://www.leanon.app/browse" className="btn-cta">Find a listener &rarr;</a></div>
        <div className="section"><h2>You Might Also Find This Helpful</h2><div className="related">
          <a href="/nri-support">NRI support &rarr;</a>
          <a href="/nri-loneliness-usa">NRI loneliness USA &rarr;</a>
          <a href="/nri-anxiety-abroad">NRI anxiety abroad &rarr;</a>
          <a href="/nri-mental-health">NRI mental health &rarr;</a>
        </div></div>
        <div className="crisis"><strong>In a crisis?</strong> NIMHANS: 080-46110007 &nbsp;&middot;&nbsp; Tele-MANAS: 14416 &nbsp;&middot;&nbsp; Both free, 24/7.</div>
      </div>
    </>
  )
}
