import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Kannada NRI Support | Talk to a Kannadiga Abroad | LeanOn',
  description: 'Kannadigas abroad — Bangalore\'s IT export to the world — often feel both far from home and oddly disconnected from other Indians. Talk to listeners who understand.',
  keywords: ['kannada nri support', 'kannadiga abroad', 'nri karnataka', 'talk to kannada person online', 'bangalore it nri'],
  alternates: { canonical: 'https://www.leanon.app/kannada-nri-support' },
  openGraph: { title: 'Kannada NRI Support | Talk to a Kannadiga Abroad | LeanOn', description: 'Kannadigas abroad — Bangalore\'s IT export to the world — often feel both far from home and oddly disconnected from other Indians. Talk to listeners who understand.', url: 'https://www.leanon.app/kannada-nri-support', siteName: 'LeanOn', type: 'article', images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn' }] },
}

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
  { '@type': 'Question', name: 'Can I talk in Kannada?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Several LeanOn listeners speak Kannada. Mention your language preference at the start and your listener will communicate in Kannada or Hindi as you prefer.' } },
  { '@type': 'Question', name: 'Do listeners understand Bengaluru culture specifically?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The Bengaluru IT culture — the cosmopolitan city identity, the particular mix of Kannada pride and global ambition — is something listeners understand well. You do not have to explain why losing the Bengaluru identity abroad is its own kind of grief.' } },
  { '@type': 'Question', name: 'I feel invisible in South Indian NRI groups because nobody knows Kannada. Is that a real thing?', acceptedAnswer: { '@type': 'Answer', text: 'It is very real. Kannadigas abroad often get lumped into a generic South Indian identity, and the specific Kannada language and culture gets erased. That erasure is a real loss. A listener who understands Kannada culture will hear it as such.' } },
  { '@type': 'Question', name: 'Is this confidential?', acceptedAnswer: { '@type': 'Answer', text: 'Completely. Your Kannada community abroad and your family in Karnataka will never know. Sessions use only your phone number and first name.' } },
  { '@type': 'Question', name: 'How much does it cost?', acceptedAnswer: { '@type': 'Answer', text: 'Your first session is free (5 minutes). After that, sessions start at US$10 for 15 minutes. No subscription required.' } },
] }

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
  { '@type': 'ListItem', position: 2, name: 'NRI Support', item: 'https://www.leanon.app/nri-support' },
  { '@type': 'ListItem', position: 3, name: 'Kannada NRI Support', item: 'https://www.leanon.app/kannada-nri-support' },
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

export default function KannadaNriSupportPage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>
      <nav className="nav"><a href="/"><img src="/logo.png" className="nav-logo" alt="LeanOn" /></a><a href="https://www.leanon.app/browse"><button className="btn-nav">Find a listener</button></a></nav>
      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>&#x203A;</span><a href="/nri-support">NRI Support</a><span>&#x203A;</span><span style={{ color: 'var(--navy)' }}>Kannada NRI Support</span></nav>
        <div className="hero">
          <p className="badge">Kannada NRI &middot; Karnataka &middot; Bengaluru Diaspora</p>
          <h1>You took Bengaluru&rsquo;s ambition global. <em>But your Kannada identity got lost in the translation.</em></h1>
          <p className="lead">Kannadigas abroad are numerous — the Bengaluru-to-Silicon Valley pipeline is real. But in the diaspora, Kannada identity often gets absorbed into a generic &ldquo;South Indian&rdquo; category. The language, the Rajyotsava pride, the specific Mysore-Bengaluru cultural distinction — all of it becomes invisible. Talk to a Kannada listener who sees it. First 5 minutes free.</p>
          <a href="https://www.leanon.app/browse" className="cta-hero">Talk to someone now &rarr;</a>
        </div>

        <div className="section">
          <h2>The Specific Invisibility of Kannada Identity Abroad</h2>
          <p>In South Asian diaspora communities abroad, there is often a flattening of identity. Tamil, Telugu, Kannada, Malayalam — all get compressed into &ldquo;South Indian.&rdquo; For Tamils and Telugus, the community is large enough that distinct identity survives. For Kannadigas, there is often a real sense of cultural erasure — your language is not spoken widely enough in the diaspora for it to maintain its presence, and you find yourself defaulting to Hindi or English even with other South Indians.</p>
          <p>This is a particular kind of loneliness — the loss of linguistic and cultural specificity. The Rajyotsava feeling — the November 1 Karnataka pride — does not get celebrated in diaspora the way Diwali or Tamil New Year does. The specific humour, the Kannada film culture, the Mysore pak at Dasara — these things require no explanation at home and have no easy equivalent abroad.</p>
          <p>LeanOn listeners from Karnataka understand this without needing it explained. First 5 minutes free.</p>
        </div>

        <div className="section">
          <h2>The Bengaluru-to-Abroad Journey</h2>
          <p>Bengaluru is one of India&rsquo;s greatest exporters of IT talent. The path from Bengaluru engineering colleges to Sunnyvale or Seattle or London is well-worn. And yet each person who walks it carries the specific weight of leaving a city that was already cosmopolitan, already plural, already deeply comfortable — and landing in a new country where they are, once again, the outsider.</p>
          <p>The particular mix of Bengaluru identity — comfortable in multiple cultures, used to a global city, not carrying the small-town weight that some other NRI experiences do — creates its own kind of displacement. You are not easily dazzled by the West. You were already living in a world city. And yet here, you are still the immigrant, still the one explaining where you are from, still the one whose accent gets commented on.</p>
        </div>

        <div className="section">
          <h2>Mysore-Bengaluru Distinctions and the Kannada Culture Abroad</h2>
          <p>Being from Mysore is different from being from Bengaluru — different cultural personality, different pace, different relationship to tradition versus modernity. Being from coastal Karnataka is different again. LeanOn listeners understand that Karnataka is not a monolith, and that your specific regional identity within the state shapes how you experience being abroad.</p>
          <p>Whatever the weight — the Kannada cultural loss, the family back in Karnataka, the specific IT burnout of the Bengaluru diaspora, the Rajyotsava homesickness — a listener will hear it as it is. Real, Kannada-understanding, non-judgmental peer support. First 5 minutes free.</p>
        </div>

        <div className="section"><h2>Frequently Asked Questions</h2>{faqs.map((f, i) => (<div className="faq-item" key={i}><p className="faq-q">{f.name}</p><p className="faq-a">{f.acceptedAnswer.text}</p></div>))}</div>
        <div className="cta-card"><h2>Kannadiganu Kannadige listener.</h2><p>Your culture, seen and heard without explanation. First 5 minutes free. Sessions from US$10.</p><a href="https://www.leanon.app/browse" className="btn-cta">Find a listener &rarr;</a></div>
        <div className="section"><h2>You Might Also Find This Helpful</h2><div className="related">
          <a href="/nri-support">NRI support &rarr;</a>
          <a href="/nri-loneliness-usa">NRI loneliness USA &rarr;</a>
          <a href="/nri-burnout">NRI burnout &rarr;</a>
          <a href="/tamil-nri-support">Tamil NRI support &rarr;</a>
        </div></div>
        <div className="crisis"><strong>In a crisis?</strong> NIMHANS: 080-46110007 &nbsp;&middot;&nbsp; Tele-MANAS: 14416 &nbsp;&middot;&nbsp; Both free, 24/7.</div>
      </div>
    </>
  )
}
