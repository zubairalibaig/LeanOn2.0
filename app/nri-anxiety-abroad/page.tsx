import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'NRI Anxiety | The Stress of Being Indian Abroad | LeanOn',
  description: 'Visa anxiety, performance pressure, family expectations — NRI anxiety has its own specific flavour. Talk to a peer listener who understands.',
  keywords: ['nri anxiety', 'indian anxiety abroad', 'visa anxiety nri', 'h1b anxiety', 'nri work stress', 'nri performance pressure', 'indian immigrant anxiety usa uk canada'],
  alternates: { canonical: 'https://www.leanon.app/nri-anxiety-abroad' },
  openGraph: { title: 'NRI Anxiety | The Stress of Being Indian Abroad | LeanOn', description: 'Visa anxiety, performance pressure, family expectations — NRI anxiety has its own specific flavour. Talk to a peer listener who understands.', url: 'https://www.leanon.app/nri-anxiety-abroad', siteName: 'LeanOn', type: 'article', images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn' }] },
}

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
  { '@type': 'Question', name: 'What is NRI anxiety and how is it different from regular anxiety?', acceptedAnswer: { '@type': 'Answer', text: 'NRI anxiety is regular anxiety layered with specific immigrant stressors: visa status tied to employment, the weight of family expectations from afar, the performance of success for a community watching from India, the fear of returning without having "made it," and the constant background calculation of when and whether to come back.' } },
  { '@type': 'Question', name: 'Is H-1B anxiety common among Indians in America?', acceptedAnswer: { '@type': 'Answer', text: 'Extremely common. The H-1B tethers your entire life to your employer\'s goodwill. You cannot speak up at work, cannot leave a bad situation, cannot take a gap to breathe. This structural dependency creates anxiety that is not pathological — it is a rational response to a genuinely precarious situation.' } },
  { '@type': 'Question', name: 'Will a listener understand immigration-related stress?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. LeanOn listeners are Indian and understand the H-1B and visa situation, the immigration-career dependency, and the specific way these create anxiety. Many have close family members living with this. No explanation needed.' } },
  { '@type': 'Question', name: 'How much does it cost?', acceptedAnswer: { '@type': 'Answer', text: 'First 5 minutes free every session. Sessions from ₹160 for 15 minutes. No subscription.' } },
] }

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
  { '@type': 'ListItem', position: 2, name: 'NRI Support', item: 'https://www.leanon.app/nri-support' },
  { '@type': 'ListItem', position: 3, name: 'NRI Anxiety Abroad', item: 'https://www.leanon.app/nri-anxiety-abroad' },
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

export default function NriAnxietyAbroadPage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>
      <nav className="nav"><a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a><a href="/browse"><button className="btn-nav">Find a listener</button></a></nav>
      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>&#x203A;</span><a href="/nri-support">NRI Support</a><span>&#x203A;</span><span style={{ color: 'var(--navy)' }}>NRI Anxiety Abroad</span></nav>
        <div className="hero">
          <p className="badge">NRI Anxiety &middot; Immigration Stress &middot; Desi Abroad</p>
          <h1>The H-1B. The performance. The family back home watching. <em>No wonder you&rsquo;re anxious.</em></h1>
          <p className="lead">NRI anxiety isn&rsquo;t ordinary anxiety — it&rsquo;s layered. The visa tied to your job. The family who invested everything in your success. The community watching. The pressure to make the sacrifice &ldquo;worth it.&rdquo; And underneath all of it, a quiet question: is this the life I actually wanted? Talk to a real Indian peer listener. First 5 minutes free.</p>
          <a href="/browse" className="cta-hero">Talk to someone now &rarr;</a>
        </div>

        <div className="section">
          <h2>What Makes NRI Anxiety Different</h2>
          <p>Anxiety is a feature of many people&rsquo;s lives. But NRI anxiety has specific layers that make it different from the anxiety of someone who stayed in India, or someone who grew up in the country they now live in. The H-1B or work visa tethers your entire presence in the country to a single employer&rsquo;s goodwill. You cannot speak up when your manager is wrong. You cannot leave for a better job without risk. You cannot afford to seem anything less than excellent, because the alternative is not a bad performance review — it is deportation.</p>
          <p>This structural dependency creates a particular kind of anxiety that is not a personal pathology. It is a rational response to a genuinely precarious situation. The anxiety about layoffs is not irrational when your visa is tied to your employment. The anxiety about performance reviews is not irrational when your right to be in the country is at stake.</p>
          <p>On top of this: the family in India who have invested hope and sometimes money in your success. The community who is watching. The internal question — underneath all the performance — of whether this is the life you actually wanted. LeanOn is for exactly this specific, layered, under-acknowledged weight. First 5 minutes free.</p>
        </div>

        <div className="section">
          <h2>What You Need Is to Be Heard</h2>
          <p>There are very few places where NRI anxiety can be voiced honestly. Your manager cannot hear it — your job depends on seeming fine. Your parents cannot hear it — they would worry or feel responsible. Your Indian community friends are performing the same fine-ness. The result is a private anxiety carried alone.</p>
          <p>A real Indian peer listener at LeanOn can hear all of this — the visa fear, the performance pressure, the family expectation, the quiet question underneath — without judgment, without advice you didn&rsquo;t ask for, and without telling you to be grateful. Listeners are available when India is in the evening (morning US time, afternoon UK time). Anonymous. First 5 minutes always free.</p>
        </div>

        <div className="section"><h2>Frequently Asked Questions</h2>{faqs.map((f, i) => (<div className="faq-item" key={i}><p className="faq-q">{f.name}</p><p className="faq-a">{f.acceptedAnswer.text}</p></div>))}</div>
        <div className="cta-card"><h2>The NRI anxiety, finally heard.</h2><p>Real Indian peer listener. Understands visa, performance, and family pressure. First 5 minutes free. From ₹160.</p><a href="/browse" className="btn-cta">Find a listener &rarr;</a></div>
        <div className="section"><h2>You Might Also Find This Helpful</h2><div className="related">
          <a href="/nri-support">NRI support &rarr;</a>
          <a href="/nri-loneliness-usa">NRI loneliness USA &rarr;</a>
          <a href="/desi-support-usa">Desi support USA &rarr;</a>
          <a href="/nri-identity-crisis">NRI identity &rarr;</a>
        </div></div>
        <div className="crisis"><strong>In a crisis?</strong> NIMHANS: 080-46110007 &nbsp;&middot;&nbsp; Tele-MANAS: 14416 &nbsp;&middot;&nbsp; Both free, 24/7.</div>
      </div>
    </>
  )
}
