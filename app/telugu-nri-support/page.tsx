import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Telugu NRI Support | Talk to Someone from Andhra or Telangana | LeanOn',
  description: 'Telugu NRIs dominate Silicon Valley, New Jersey, and the UK. But success doesn\'t cure loneliness. LeanOn connects you with Telugu listeners who understand your world.',
  keywords: ['telugu nri support', 'telugu diaspora', 'nri telugu usa', 'telugu people abroad', 'talk to telugu person online', 'andhra nri support', 'telangana nri'],
  alternates: { canonical: 'https://www.leanon.app/telugu-nri-support' },
  openGraph: { title: 'Telugu NRI Support | Talk to Someone from Andhra or Telangana | LeanOn', description: 'Telugu NRIs dominate Silicon Valley, New Jersey, and the UK. But success doesn\'t cure loneliness. LeanOn connects you with Telugu listeners who understand your world.', url: 'https://www.leanon.app/telugu-nri-support', siteName: 'LeanOn', type: 'article', images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn' }] },
}

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
  { '@type': 'Question', name: 'Can I talk in Telugu?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Several LeanOn listeners speak Telugu. When browsing, you can find Telugu-speaking listeners and mention your language preference at the beginning of your session.' } },
  { '@type': 'Question', name: 'Do you have listeners from both Andhra Pradesh and Telangana?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Listeners come from different Telugu-speaking regions and understand the cultural distinctions — whether your family is from Hyderabad, Vijayawada, Guntur, or Warangal. You do not need to explain the context.' } },
  { '@type': 'Question', name: 'I am on an H1B. Do listeners understand visa stress?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. H1B anxiety — the employer dependency, the lottery fear, the decade-long green card wait, the layoff terror — is something Telugu listeners understand well, both from personal knowledge and from the many seekers who have shared this with them.' } },
  { '@type': 'Question', name: 'How much does it cost and when can I call from the US?', acceptedAnswer: { '@type': 'Answer', text: 'Sessions start from US$10 for 15 minutes, with the first 5 minutes free. India listeners are active 6pm–11pm IST. From the US East Coast, that is 8:30am–1:30pm EDT. From the Bay Area, 5:30am–10:30am PDT.' } },
  { '@type': 'Question', name: 'Is this confidential?', acceptedAnswer: { '@type': 'Answer', text: 'Completely. Your Telugu community in New Jersey or Fremont will never know. Sessions are anonymous — phone number and first name only. Nothing is shared beyond the session.' } },
] }

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
  { '@type': 'ListItem', position: 2, name: 'NRI Support', item: 'https://www.leanon.app/nri-support' },
  { '@type': 'ListItem', position: 3, name: 'Telugu NRI Support', item: 'https://www.leanon.app/telugu-nri-support' },
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

export default function TeluguNriSupportPage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>
      <nav className="nav"><a href="/"><img src="/logo.png" className="nav-logo" alt="LeanOn" /></a><a href="https://www.leanon.app/browse"><button className="btn-nav">Find a listener</button></a></nav>
      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>&#x203A;</span><a href="/nri-support">NRI Support</a><span>&#x203A;</span><span style={{ color: 'var(--navy)' }}>Telugu NRI Support</span></nav>
        <div className="hero">
          <p className="badge">Telugu NRI &middot; Silicon Valley &middot; Andhra &amp; Telangana</p>
          <h1>The Bay Area Telugu community is everywhere. <em>You can still feel alone in it.</em></h1>
          <p className="lead">Telugu NRIs make up one of the largest Indian communities in the US — in Silicon Valley, New Jersey, Seattle, and beyond. You are surrounded by your own people. And yet the specific loneliness of H1B life, dependent visa isolation, family pressure from Hyderabad, and the relentless performance of being &ldquo;doing well&rdquo; — that is a weight nobody talks about. Talk to a Telugu peer listener who understands it. First 5 minutes free.</p>
          <a href="https://www.leanon.app/browse" className="cta-hero">Talk to someone now &rarr;</a>
        </div>

        <div className="section">
          <h2>The Telugu NRI Specific Weight</h2>
          <p>Telugu families have built the largest Indian professional diaspora in American tech. The pattern is well-worn: engineering degree from Hyderabad or Vizag, master&rsquo;s in the US, H1B, years of green card wait, eventual citizenship. This path is so common it has its own cultural shorthand — and yet each person walking it carries the pressure alone.</p>
          <p>The H1B experience is a particular kind of quiet anxiety. Your entire ability to stay — your career, your spouse&rsquo;s ability to work, your children&rsquo;s schooling stability — is tethered to an employer. The thought of a layoff is not just financial; it is existential. Telugu NRIs live with this in the background of every work meeting, every performance review, every corporate restructuring announcement. And it is not something you explain to a non-Indian colleague.</p>
          <p>Family in Hyderabad or Vijayawada is also a particular kind of pressure — the relatives who need sponsoring, the parents who want you to visit but whose health is declining between visits, the siblings who measure success against yours. LeanOn listeners understand these layers without needing them spelled out.</p>
        </div>

        <div className="section">
          <h2>The Spouse on a Dependent Visa</h2>
          <p>One of the most invisible hardships in the Telugu NRI experience is the partner on a dependent visa — typically an H4 visa — who cannot work, cannot build their own professional identity, and is entirely financially dependent in a foreign country far from their own support network. This is a specific, acute loneliness that often goes unseen even within Telugu couples.</p>
          <p>The partner who holds the H1B is under career pressure. The partner on the dependent visa is isolated and professionally sidelined. Both are struggling in different ways. Both often feel they cannot say so, because the move was &ldquo;a good opportunity&rdquo; and the struggle seems ungrateful. LeanOn is a space where you can say it without the guilt calculation.</p>
        </div>

        <div className="section">
          <h2>Andhra vs. Telangana: The Listeners Understand the Distinction</h2>
          <p>Telugu is one language, but the cultural experience of being from Andhra Pradesh versus Telangana is different — different food, different sensibilities, different regional pride, and sometimes real interpersonal friction even within the Telugu diaspora. LeanOn listeners understand this. You do not have to explain that your family being from Vijayawada and your colleague&rsquo;s family being from Warangal is not a trivial distinction.</p>
          <p>Whatever part of Telugu culture you carry, and whatever part of the NRI experience is weighing on you right now, there is a listener who can hear it. No judgment. No advice. Just a real conversation with someone who gets it. First 5 minutes free.</p>
        </div>

        <div className="section"><h2>Frequently Asked Questions</h2>{faqs.map((f, i) => (<div className="faq-item" key={i}><p className="faq-q">{f.name}</p><p className="faq-a">{f.acceptedAnswer.text}</p></div>))}</div>
        <div className="cta-card"><h2>Telugu manishi ki Telugu listener.</h2><p>Someone who understands your world without the explanation. First 5 minutes free. Sessions from US$10.</p><a href="https://www.leanon.app/browse" className="btn-cta">Find a listener &rarr;</a></div>
        <div className="section"><h2>You Might Also Find This Helpful</h2><div className="related">
          <a href="/nri-support">NRI support &rarr;</a>
          <a href="/nri-loneliness-usa">NRI loneliness USA &rarr;</a>
          <a href="/nri-h1b-visa-stress">H1B visa stress &rarr;</a>
          <a href="/nri-burnout">NRI burnout &rarr;</a>
        </div></div>
        <div className="crisis"><strong>In a crisis?</strong> NIMHANS: 080-46110007 &nbsp;&middot;&nbsp; Tele-MANAS: 14416 &nbsp;&middot;&nbsp; Both free, 24/7.</div>
      </div>
    </>
  )
}
