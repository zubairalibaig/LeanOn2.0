import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Emotional Support for Indians in Seattle | Bellevue, Redmond | LeanOn',
  description: 'Bellevue, Redmond, Sammamish — Seattle\'s Indian tech community is booming. But Microsoft and Amazon salaries don\'t solve the Seattle Freeze. Talk to someone who gets it.',
  keywords: ['indians in seattle', 'bellevue indian community', 'redmond indian support', 'seattle indian mental health', 'microsoft amazon indian', 'desi support seattle', 'seattle freeze indian'],
  alternates: { canonical: 'https://www.leanon.app/indians-in-seattle' },
  openGraph: { title: 'Emotional Support for Indians in Seattle | Bellevue, Redmond | LeanOn', description: 'Bellevue, Redmond, Sammamish — Seattle\'s Indian tech community is booming. But Microsoft and Amazon salaries don\'t solve the Seattle Freeze. Talk to someone who gets it.', url: 'https://www.leanon.app/indians-in-seattle', siteName: 'LeanOn', type: 'article', images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn' }] },
}

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
  { '@type': 'Question', name: 'Do listeners understand Seattle Indian tech worker life?', acceptedAnswer: { '@type': 'Answer', text: 'LeanOn listeners are based in India and understand the NRI tech worker experience — including the specific isolation of Seattle, the Microsoft and Amazon culture, the H-1B dependency, and the grey winters that compound everything. No explanation needed.' } },
  { '@type': 'Question', name: 'When can I connect from Seattle?', acceptedAnswer: { '@type': 'Answer', text: 'Seattle (PST/PDT) is 13.5 hours behind IST. 8am Seattle = 9:30pm India. Early mornings in Seattle align with late Indian evenings — listeners are often still available. 6am Seattle = 7:30pm India, a strong window.' } },
  { '@type': 'Question', name: 'Is this confidential from my Microsoft or Amazon colleagues?', acceptedAnswer: { '@type': 'Answer', text: 'Completely. Sessions are anonymous. Only a phone number and first name required. Nothing reaches your employer, your Bellevue or Redmond community, or family back in India.' } },
  { '@type': 'Question', name: 'How much does it cost?', acceptedAnswer: { '@type': 'Answer', text: 'Your first session with each new listener is free (5 minutes). After that, sessions start at ₹160 for 15 minutes. No subscription.' } },
] }

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
  { '@type': 'ListItem', position: 2, name: 'NRI Support', item: 'https://www.leanon.app/nri-support' },
  { '@type': 'ListItem', position: 3, name: 'Indians in Seattle', item: 'https://www.leanon.app/indians-in-seattle' },
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

export default function IndiansInSeattlePage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>
      <nav className="nav"><a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a><a href="/browse"><button className="btn-nav">Find a listener</button></a></nav>
      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>&#x203A;</span><a href="/nri-support">NRI Support</a><span>&#x203A;</span><span style={{ color: 'var(--navy)' }}>Indians in Seattle</span></nav>
        <div className="hero">
          <p className="badge">Indians in Seattle &middot; Bellevue &middot; Redmond</p>
          <h1>The Seattle Freeze is real. <em>Especially for Indians here.</em></h1>
          <p className="lead">Bellevue and Redmond have tens of thousands of Indian tech workers. The &ldquo;Seattle Freeze&rdquo; is a real phenomenon — Seattleites are polite but don&rsquo;t warm up easily. Add to that the grey winters, the H-1B dependency on your job, and the community bubble that can feel both supportive and suffocating. Talk to a real listener in India. First 5 minutes free.</p>
          <a href="/browse" className="cta-hero">Talk to someone now &rarr;</a>
        </div>

        <div className="section">
          <h2>Bellevue, Redmond, Sammamish: The Indian Tech Corridor</h2>
          <p>The Eastside of Seattle — Bellevue, Redmond, Sammamish, Issaquah — has become one of the largest Indian tech worker concentrations in America, driven by Microsoft&rsquo;s headquarters in Redmond and Amazon&rsquo;s massive expansion in Bellevue. The Bellevue BAPS temple and the Redmond Shiva-Vishnu temple serve a large and growing community. Grocery stores, restaurants, community organisations — the infrastructure is here.</p>
          <p>And yet: the Seattle Freeze is real. Seattle is famous among newcomers for the difficulty of forming genuine friendships. Locals are polite and then closed. The Indian community offers warmth — but that warmth comes with the usual community dynamics: gossip, comparison, the performance of success. And underneath it all: nine months of grey sky every year, a work culture of 60-hour weeks, and the anxiety of a life entirely dependent on your employer&rsquo;s goodwill.</p>
          <p>LeanOn is for exactly this. A real Indian peer listener in India — outside your Eastside bubble, inside your culture. First 5 minutes free.</p>
        </div>

        <div className="section">
          <h2>Grey Sky, Real Conversation</h2>
          <p>Seattle&rsquo;s weather is a psychological factor that is often underestimated. The overcast skies from October through May are genuinely affecting for people from sunny parts of India — Karnataka, Tamil Nadu, Andhra Pradesh, Punjab. The vitamin D deficiency is real. The seasonal weight accumulates. Combined with the isolation of a new city that doesn&rsquo;t warm up easily, and the pressure of a career that your visa depends on — it creates a specific kind of quiet overwhelm.</p>
          <p>Seattle (PST/PDT) is 13.5 hours behind IST. 6am in Seattle is 7:30pm India — a prime window. Your early morning run by the Bellevue waterfront or your quiet coffee before the stand-up call is India&rsquo;s evening. Listeners are available, no appointment needed. Sessions are anonymous and completely private. The first 5 minutes free — once per listener.</p>
        </div>

        <div className="section"><h2>Frequently Asked Questions</h2>{faqs.map((f, i) => (<div className="faq-item" key={i}><p className="faq-q">{f.name}</p><p className="faq-a">{f.acceptedAnswer.text}</p></div>))}</div>
        <div className="cta-card"><h2>Someone warm, when Seattle is grey.</h2><p>Real Indian peer listener. Understands Seattle NRI life. First 5 minutes free. From ₹160.</p><a href="/browse" className="btn-cta">Find a listener &rarr;</a></div>
        <div className="section"><h2>You Might Also Find This Helpful</h2><div className="related">
          <a href="/desi-support-usa">Desi support USA &rarr;</a>
          <a href="/nri-support">NRI support &rarr;</a>
          <a href="/indians-in-bay-area">Indians in Bay Area &rarr;</a>
          <a href="/nri-loneliness-usa">NRI loneliness USA &rarr;</a>
        </div></div>
        <div className="crisis"><strong>In a crisis?</strong> NIMHANS: 080-46110007 &nbsp;&middot;&nbsp; Tele-MANAS: 14416 &nbsp;&middot;&nbsp; Both free, 24/7.</div>
      </div>
    </>
  )
}
