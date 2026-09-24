import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Indian Student in the UK | When London Feels Far From Home | LeanOn',
  description: 'Indian students in the UK — Leicester, London, Manchester, Edinburgh — carry more than textbooks. Talk to a peer listener who understands the student NRI experience.',
  keywords: ['indian student uk', 'indian in uk university', 'south asian student uk', 'desi student uk', 'nri student london', 'indian masters uk'],
  alternates: { canonical: 'https://www.leanon.app/indian-student-uk' },
  openGraph: { title: 'Indian Student in the UK | When London Feels Far From Home | LeanOn', description: 'Indian students in the UK — Leicester, London, Manchester, Edinburgh — carry more than textbooks. Talk to a peer listener who understands the student NRI experience.', url: 'https://www.leanon.app/indian-student-uk', siteName: 'LeanOn', type: 'article', images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn' }] },
}

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
  { '@type': 'Question', name: 'My university has a student support service. Why would I use LeanOn?', acceptedAnswer: { '@type': 'Answer', text: 'University services are helpful but typically involve waiting lists, fixed appointment times, and counsellors who may not understand the specific Indian student experience. LeanOn connects you with a peer listener from India, available when you need to talk, who understands the family pressure, the financial sacrifice, the homesickness, and the culture gap without needing it explained.' } },
  { '@type': 'Question', name: 'I had a racist incident at uni and I don\'t know what to do with it. Can I talk about that?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Racist experiences — in halls, in seminars, in social settings — are something listeners hear often from Indian students in the UK. You can speak about it honestly, including the confusion about how to respond and the anger and the sadness, without being told what you should have done.' } },
  { '@type': 'Question', name: 'The UK is very expensive and I am stressed about money. Is this confidential?', acceptedAnswer: { '@type': 'Answer', text: 'Completely. Financial stress — the cost of a UK degree, the guilt of spending family money, the anxiety of making it work — is something you can speak about honestly. Sessions are anonymous. Nothing reaches your family or your university.' } },
  { '@type': 'Question', name: 'I missed Diwali at home for the first time this year and I feel terrible about it. Is that something to talk about?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Festival homesickness — Diwali, Holi, Eid, Christmas — is real grief. Missing the first one is often harder than anyone prepares you for. A listener will hear it as the real thing it is.' } },
  { '@type': 'Question', name: 'How much does it cost? I am a student on a tight budget.', acceptedAnswer: { '@type': 'Answer', text: 'Your first session is free (5 minutes). After that, sessions start at US$10 for 15 minutes-2 GBP. No subscription, no commitment.' } },
] }

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
  { '@type': 'ListItem', position: 2, name: 'NRI Support', item: 'https://www.leanon.app/nri-support' },
  { '@type': 'ListItem', position: 3, name: 'Indian Student UK', item: 'https://www.leanon.app/indian-student-uk' },
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

export default function IndianStudentUkPage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>
      <nav className="nav"><a href="/"><img src="/logo.png" className="nav-logo" alt="LeanOn" /></a><a href="https://www.leanon.app/browse"><button className="btn-nav">Find a listener</button></a></nav>
      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>&#x203A;</span><a href="/nri-support">NRI Support</a><span>&#x203A;</span><span style={{ color: 'var(--navy)' }}>Indian Student UK</span></nav>
        <div className="hero">
          <p className="badge">Indian Student &middot; UK &middot; London &amp; Beyond</p>
          <h1>You came to London for a degree. <em>Nobody prepared you for this weight.</em></h1>
          <p className="lead">Indian students in the UK — in London, Leicester, Manchester, Edinburgh, Birmingham — carry a specific load: a £30,000+ degree, family savings on the line, a student visa that means you cannot easily leave, cold weather culture shock, and a loneliness between the university orientation brochure and the actual reality. Talk to a peer listener who understands the real experience. First 5 minutes free.</p>
          <a href="https://www.leanon.app/browse" className="cta-hero">Talk to someone now &rarr;</a>
        </div>

        <div className="section">
          <h2>The Gap Between the Brochure and the Reality</h2>
          <p>UK university brochures are excellent. The campus looks beautiful. The international student community looks vibrant. The career outcomes look promising. And then you arrive in October, when the weather is already grey and cold in ways you did not fully anticipate, and you find that making real friends is significantly harder than the orientation implied.</p>
          <p>British social culture is different from Indian social culture in ways that are hard to articulate but immediately felt. The reserve, the implicit social codes, the fact that most British students have existing friendship groups from home and are not particularly motivated to integrate a new international student into them — this creates a specific form of isolation that no amount of &ldquo;attend the freshers&rsquo; events&rdquo; advice resolves.</p>
          <p>You might have a good time at the events. You might know plenty of other Indian students. And you might still feel fundamentally alone in a way that you cannot explain to your parents back home, who would be confused and hurt to hear that you are not thriving the way they imagined. LeanOn is where you say that honestly. First 5 minutes free.</p>
        </div>

        <div className="section">
          <h2>The £30,000 Degree Weight</h2>
          <p>A UK postgraduate degree for international students can cost £20,000 to £40,000 in tuition alone, on top of living costs in one of the world&rsquo;s most expensive cities. This money often comes from family savings, loans, or a combination that represents years of sacrifice. The weight of that financial responsibility is enormous and it rarely gets acknowledged in student wellbeing conversations, which tend to focus on academic pressure rather than the specific guilt and fear of spending this much family money.</p>
          <p>The student visa also means that your ability to stay, to work, and to have any path to remaining in the UK after graduation is governed by systems you have limited control over. Post-study work permit anxiety — will the rules change? will you find a job? — runs underneath the academic work. It is a specific NRI student stressor that university counsellors often do not fully understand.</p>
        </div>

        <div className="section">
          <h2>Racist Incidents and the Confusion of How to Respond</h2>
          <p>Indian students in UK universities sometimes experience racist incidents — in halls of residence, in seminars, in social settings. These can range from overt to subtle, from commented-on to internalised. And the response is often complicated: do you report it? to whom? will you be believed? will it make things worse? will it mark you as a problem student?</p>
          <p>The emotional aftermath of a racist incident — the anger, the humiliation, the second-guessing of whether it &ldquo;really counts&rdquo; — is something that deserves to be spoken to someone who will not minimise it or tell you what you should have done. A LeanOn listener will simply hear it. That is often what is most needed.</p>
        </div>

        <div className="section"><h2>Frequently Asked Questions</h2>{faqs.map((f, i) => (<div className="faq-item" key={i}><p className="faq-q">{f.name}</p><p className="faq-a">{f.acceptedAnswer.text}</p></div>))}</div>
        <div className="cta-card"><h2>The real student experience deserves to be heard.</h2><p>A peer listener who understands India, the UK, and the gap between them. First 5 minutes free. Sessions from US$10.</p><a href="https://www.leanon.app/browse" className="btn-cta">Find a listener &rarr;</a></div>
        <div className="section"><h2>You Might Also Find This Helpful</h2><div className="related">
          <a href="/nri-student-support">Indian student abroad &rarr;</a>
          <a href="/indians-in-uk">Indians in UK &rarr;</a>
          <a href="/nri-loneliness-uk">NRI loneliness UK &rarr;</a>
          <a href="/indian-student-canada">Indian student Canada &rarr;</a>
        </div></div>
        <div className="crisis"><strong>In a crisis?</strong> NIMHANS: 080-46110007 &nbsp;&middot;&nbsp; Tele-MANAS: 14416 &nbsp;&middot;&nbsp; Both free, 24/7.</div>
      </div>
    </>
  )
}
