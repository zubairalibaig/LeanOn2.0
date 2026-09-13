import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Sasural Problems — In-Law Conflict India | LeanOn',
  description: 'Saas, devar, nand — navigating sasural dynamics is exhausting. Talk to someone anonymously who understands Indian family structures. From ₹160.',
  keywords: ['sasural problems India', 'saas bahu conflict India', 'in-law problems India', 'husband\'s family problems India', 'joint family conflict India'],
  alternates: { canonical: 'https://www.leanon.app/sasural-problems-india', languages: { 'en-IN': 'https://www.leanon.app/sasural-problems-india' } },
  openGraph: { title: 'Sasural Problems — In-Law Conflict India | LeanOn', description: 'Saas, devar, nand — navigating sasural dynamics is exhausting. Talk to someone anonymously who understands Indian family structures. From ₹160.', url: 'https://www.leanon.app/sasural-problems-india', siteName: 'LeanOn', type: 'article', images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn' }] },
}

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
    {'@type': 'Question', name: 'How is sasural stress different from general in-law stress?', acceptedAnswer: {'@type': 'Answer', text: 'Sasural stress in India has a specific cultural texture: the saas-bahu dynamic, the expectation that the bahu will adjust, the public performance of family harmony, and the social cost of appearing to struggle. These are specific enough that the person you talk to benefits from understanding this context.'}},
    {'@type': 'Question', name: 'Can a peer listener understand sasural dynamics?', acceptedAnswer: {'@type': 'Answer', text: 'Yes. LeanOn listeners come from backgrounds that include this experience, and are trained to listen to it without either dismissing it or amplifying it. They understand the cultural context without requiring you to explain it from scratch.'}},
    {'@type': 'Question', name: 'How much does it cost?', acceptedAnswer: {'@type': 'Answer', text: 'Sessions start at ₹160. First 5 minutes free.'}}
] }

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
  { '@type': 'ListItem', position: 2, name: 'Sasural Problems', item: 'https://www.leanon.app/sasural-problems-india' },
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
`

export default function SasuralProblemsIndiaPage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>
      <nav className="nav"><a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a><a href="/browse"><button className="btn-nav">Find a listener</button></a></nav>
      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>&#x203A;</span><span style={{color:'var(--navy)'}}>Sasural Problems</span></nav>
        <div className="hero">
          <p className="badge">Sasural · In-Laws · Family Dynamics · India</p>
          <h1>You moved into their world. You're still trying to find <em>your place in it.</em></h1>
          <p className="lead">Navigating saas, devar, nand, and all the politics that come with them. Talk anonymously from ₹160 to someone who understands.</p>
          <a href="/browse" className="cta-hero">Talk to someone now &rarr;</a>
        </div>
        <div className="section">
          <h2>The Complexity of Sasural Dynamics</h2>
          <p>Moving into a new family is one of the most demanding social transitions there is. It is not just adjusting to new people &mdash; it is adjusting to an already-established set of relationships, hierarchies, dynamics, and expectations. You arrive as an outsider and are immediately evaluated for fit.</p>
          <p>Every person in the sasural has a different relationship with your husband and a different set of expectations about you. The saas has her own needs and her own model of what a bahu should be. Devar and nand may have loyalties that complicate your position. Navigating all of it, without any neutral support, is genuinely hard.</p>
        </div>
        <div className="section">
          <h2>Why You Cannot Talk to Your Husband About Everything</h2>
          <p>He loves both you and his family. When you describe a problem with them, he is not hearing it the way a neutral person would hear it. He is hearing it through his relationship with those people, through his loyalty, through his guilt about putting you in this situation. That makes genuinely open conversation very difficult.</p>
          <p>A LeanOn listener has no relationship with any of the people you are describing. They hear only what you tell them, with no overlay of prior relationship.</p>
        </div>
        <div className="section"><h2>Frequently Asked Questions</h2>{faqs.map((f, i) => (<div className="faq-item" key={i}><p className="faq-q">{f.name}</p><p className="faq-a">{f.acceptedAnswer.text}</p></div>))}</div>
        <div className="cta-card"><h2>You deserve a space that is yours.</h2><p>Anonymous peer support. No judgment. From ₹160. First 5 minutes free.</p><a href="/browse" className="btn-cta">Find a listener &rarr;</a></div>
        <div className="section"><h2>You Might Also Find This Helpful</h2><div className="related"><a href="/mother-in-law-stress-india">Mother-in-law stress &rarr;</a>
            <a href="/joint-family-stress-india">Joint family stress &rarr;</a>
            <a href="/toxic-relationship-india">Toxic relationship &rarr;</a>
            <a href="/support/married-but-lonely">Married but lonely &rarr;</a>
            <a href="/for-women">Support for women &rarr;</a></div></div>
      </div>
    </>
  )
}
