import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Emotional Support for Indians in Toronto | Mississauga, Brampton | LeanOn',
  description: 'Toronto has Canada\'s largest South Asian population. Mississauga, Brampton, Scarborough — community everywhere. And still the loneliness finds a way in.',
  keywords: ['indians in toronto', 'mississauga indian support', 'brampton indian toronto', 'scarborough indian community', 'toronto indian mental health', 'desi support toronto', 'south asian support toronto'],
  alternates: { canonical: 'https://www.leanon.app/indians-in-toronto' },
  openGraph: { title: 'Emotional Support for Indians in Toronto | Mississauga, Brampton | LeanOn', description: 'Toronto has Canada\'s largest South Asian population. Mississauga, Brampton, Scarborough — community everywhere. And still the loneliness finds a way in.', url: 'https://www.leanon.app/indians-in-toronto', siteName: 'LeanOn', type: 'article', images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn' }] },
}

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
  { '@type': 'Question', name: 'Do listeners understand the Toronto Indian community experience?', acceptedAnswer: { '@type': 'Answer', text: 'LeanOn listeners are based in India and understand the NRI experience — including the Brampton and Mississauga Punjabi community, the Scarborough Tamil and Gujarati communities, and the specific weight of Canadian immigrant life. No explanation needed.' } },
  { '@type': 'Question', name: 'When can I connect from Toronto?', acceptedAnswer: { '@type': 'Answer', text: 'Toronto (EST) is 10.5 hours behind IST. 8am Toronto = 6:30pm India. Your morning before work is India\'s evening — a reliable window for listeners. No appointment needed.' } },
  { '@type': 'Question', name: 'Is this private from my Brampton or Mississauga community?', acceptedAnswer: { '@type': 'Answer', text: 'Completely. Sessions are anonymous — phone number and first name only. Listeners are in India with no connection to the GTA Indian community. Nothing is shared with anyone.' } },
  { '@type': 'Question', name: 'How much does it cost?', acceptedAnswer: { '@type': 'Answer', text: 'First 5 minutes free every session. Sessions from ₹160 for 15 minutes. No subscription.' } },
] }

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
  { '@type': 'ListItem', position: 2, name: 'NRI Support', item: 'https://www.leanon.app/nri-support' },
  { '@type': 'ListItem', position: 3, name: 'Indians in Toronto', item: 'https://www.leanon.app/indians-in-toronto' },
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

export default function IndiansInTorontoPage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>
      <nav className="nav"><a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a><a href="/browse"><button className="btn-nav">Find a listener</button></a></nav>
      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>&#x203A;</span><a href="/nri-support">NRI Support</a><span>&#x203A;</span><span style={{ color: 'var(--navy)' }}>Indians in Toronto</span></nav>
        <div className="hero">
          <p className="badge">Indians in Toronto &middot; Mississauga &middot; Brampton</p>
          <h1>Brampton. Mississauga. Scarborough. <em>And still, some nights feel very far from home.</em></h1>
          <p className="lead">The Greater Toronto Area is home to more than half a million South Asians. The temples, the restaurants, the community networks — all there. And still — the Canadian winters hit hard. The immigrant weight. The family back home who think you&rsquo;re thriving. Talk to a real peer listener in India. First 5 minutes free.</p>
          <a href="/browse" className="cta-hero">Talk to someone now &rarr;</a>
        </div>

        <div className="section">
          <h2>Brampton, Mississauga, Scarborough: The GTA&rsquo;s Indian World</h2>
          <p>The Greater Toronto Area has the largest South Asian population in Canada — and one of the largest in the world outside South Asia. Brampton has become one of the most recognisably South Asian cities anywhere in the world outside the subcontinent. Mississauga&rsquo;s Square One area has an enormous Punjabi and Gujarati community. Scarborough has a large Tamil and South Indian presence. The Sikh gurdwaras of Brampton draw thousands on weekends. The mandirs of Mississauga are packed for Navratri.</p>
          <p>The community is real, warm, and enveloping. And like all dense diaspora communities, it brings its own pressures. Brampton&rsquo;s Punjabi community is famously tight-knit — and tight-knit means everyone knows your business. The social comparison. The rishta pressure on the unmarried. The expectations on the new immigrant still finding their feet in a Canadian job market that doesn&rsquo;t always recognise their credentials from India.</p>
          <p>LeanOn gives you a real Indian peer listener in India — completely outside the GTA community network — to say the things the community network doesn&rsquo;t have space for. First 5 minutes free.</p>
        </div>

        <div className="section">
          <h2>Canadian Winters and the Quiet Weight</h2>
          <p>Toronto winters are long and genuinely hard — November through March can be dark, cold, and isolating in ways that newcomers from India underestimate. The snow. The short days. The indoor life. The isolation of a suburban house when you haven&rsquo;t yet built your Canadian friendships. The family calls from India where you say everything is fine.</p>
          <p>Toronto (EST) is 10.5 hours behind IST. 8am Toronto is 6:30pm India. Your morning — whether you&rsquo;re in Brampton commuting on the 410, or in Mississauga walking to the GO station — is India&rsquo;s evening. A real Indian listener is available, no appointment needed. Anonymous and completely private. The first 5 minutes are always free.</p>
        </div>

        <div className="section"><h2>Frequently Asked Questions</h2>{faqs.map((f, i) => (<div className="faq-item" key={i}><p className="faq-q">{f.name}</p><p className="faq-a">{f.acceptedAnswer.text}</p></div>))}</div>
        <div className="cta-card"><h2>Community everywhere. Real conversation here.</h2><p>Real Indian peer listener. Understands GTA Indian community life. First 5 minutes free. From ₹160.</p><a href="/browse" className="btn-cta">Find a listener &rarr;</a></div>
        <div className="section"><h2>You Might Also Find This Helpful</h2><div className="related">
          <a href="/punjabi-support-canada">Punjabi support Canada &rarr;</a>
          <a href="/nri-loneliness-canada">NRI loneliness Canada &rarr;</a>
          <a href="/nri-support">NRI support &rarr;</a>
          <a href="/indians-in-vancouver">Indians in Vancouver &rarr;</a>
        </div></div>
        <div className="crisis"><strong>In a crisis?</strong> NIMHANS: 080-46110007 &nbsp;&middot;&nbsp; Tele-MANAS: 14416 &nbsp;&middot;&nbsp; Both free, 24/7.</div>
      </div>
    </>
  )
}
