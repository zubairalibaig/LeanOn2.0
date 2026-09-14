import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Indian Student in Canada | Surviving the Cold and the Loneliness | LeanOn',
  description: 'Thousands of Indian students arrive in Canada every year. Many are lonely, stressed, and homesick in ways they can\'t admit. LeanOn is for those moments.',
  keywords: ['indian student canada', 'desi student canada', 'indian in canada university', 'nri student toronto', 'indian studying canada', 'south asian student canada'],
  alternates: { canonical: 'https://www.leanon.app/indian-student-canada' },
  openGraph: { title: 'Indian Student in Canada | Surviving the Cold and the Loneliness | LeanOn', description: 'Thousands of Indian students arrive in Canada every year. Many are lonely, stressed, and homesick in ways they can\'t admit. LeanOn is for those moments.', url: 'https://www.leanon.app/indian-student-canada', siteName: 'LeanOn', type: 'article', images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn' }] },
}

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
  { '@type': 'Question', name: 'I arrived recently and I am struggling a lot. Is this for new students?', acceptedAnswer: { '@type': 'Answer', text: 'Especially for new students. The first few months in Canada are often the hardest — the cold, the culture gap, the loneliness of orientation before real friendships form. LeanOn is available immediately, no waiting list, no appointment needed. First 5 minutes free.' } },
  { '@type': 'Question', name: 'I am worried about my post-study work permit. Do listeners understand that anxiety?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Canadian immigration policy, post-study work permit rules, and the anxiety of building a life on an uncertain legal foundation are well understood by listeners. You can speak about the immigration anxiety alongside the personal and emotional weight.' } },
  { '@type': 'Question', name: 'There are so many Indian students in my program that it almost creates its own pressure. Is that a real thing?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. When a program has a very high concentration of Indian students, it can create a competitive, performance-based atmosphere that differs from the supportive community you hoped for. Comparison, hierarchy, and the pressure to not appear to be struggling in front of peers — all of these are real and nameable.' } },
  { '@type': 'Question', name: 'Is this confidential?', acceptedAnswer: { '@type': 'Answer', text: 'Completely. Sessions are anonymous — phone number and first name only. Your family, your university, and your Indian student community in Canada will never know.' } },
  { '@type': 'Question', name: 'How much does it cost?', acceptedAnswer: { '@type': 'Answer', text: 'First 5 minutes free every session. Sessions from ₹160 for 15 minutes — roughly $2-3 CAD. No subscription required.' } },
] }

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
  { '@type': 'ListItem', position: 2, name: 'NRI Support', item: 'https://www.leanon.app/nri-support' },
  { '@type': 'ListItem', position: 3, name: 'Indian Student Canada', item: 'https://www.leanon.app/indian-student-canada' },
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

export default function IndianStudentCanadaPage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>
      <nav className="nav"><a href="/"><img src="/logo.png" className="nav-logo" alt="LeanOn" /></a><a href="https://www.leanon.app/browse"><button className="btn-nav">Find a listener</button></a></nav>
      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>&#x203A;</span><a href="/nri-support">NRI Support</a><span>&#x203A;</span><span style={{ color: 'var(--navy)' }}>Indian Student Canada</span></nav>
        <div className="hero">
          <p className="badge">Indian Student &middot; Canada &middot; Toronto &amp; Vancouver</p>
          <h1>Canada looked like the answer. <em>The winter didn&rsquo;t come up in the brochure.</em></h1>
          <p className="lead">Hundreds of thousands of Indian students come to Canada every year — to Toronto, Vancouver, Brampton, smaller cities they had to look up on a map. Many arrive with enormous hope and find themselves, within months, dealing with a cold they had underestimated, a loneliness they had not anticipated, and a financial pressure nobody told them about. LeanOn is for those moments. First 5 minutes free.</p>
          <a href="https://www.leanon.app/browse" className="cta-hero">Talk to someone now &rarr;</a>
        </div>

        <div className="section">
          <h2>The Canadian Winter — and It Is Not Just the Weather</h2>
          <p>The Canadian winter is something most Indian students from warmer parts of India are genuinely not prepared for — not just the temperature, but the way the cold changes everything about daily life. Going outside becomes an event. The city gets quieter. The days get shorter. You spend more time inside, alone with your thoughts, and the homesickness that was manageable in autumn becomes acute in January.</p>
          <p>This is physiological as well as emotional — reduced sunlight affects mood in ways that are well-documented and well-known in Canada, but rarely mentioned in the orientation materials for international students. If you find yourself unusually low in January or February with no obvious explanation, you are not weak. You are experiencing something most people around you also experience and rarely discuss.</p>
          <p>LeanOn listeners understand the winter depression of the Indian student in Canada. You can speak about it — the cold, the isolation, the homesickness, all of it — without being told to exercise more or join more clubs. First 5 minutes free.</p>
        </div>

        <div className="section">
          <h2>Post-Study Work Permit Anxiety</h2>
          <p>Canada has been an attractive destination partly because of post-study work permit pathways. But these rules change, the PR points system is opaque and stressful, and the anxiety of building your life on a foundation that might shift is significant. Many Indian students in Canada are simultaneously managing academic pressure, financial pressure, and an immigration anxiety that runs as background noise through every major decision.</p>
          <p>The specific fear — what if I do all of this and I still cannot stay? — is real and deserves to be spoken. LeanOn listeners understand the Canadian immigration landscape and the emotional weight it creates for Indian students, without needing a detailed explanation of the points system to understand why you are anxious.</p>
        </div>

        <div className="section">
          <h2>The Indian Student Community Dynamic in Canada</h2>
          <p>Canada&rsquo;s Indian student community is enormous — in some programs at some universities, Indian students make up a significant majority. This creates a ready-made community, which can be comforting. It can also create its own pressures — comparison, competitive anxiety, the sense that you cannot show struggle to other Indian students because everyone is performing the same fine-ness for the same reasons.</p>
          <p>The Tim Hortons culture gap — the daily small interactions that Canadian students navigate automatically and that you have to consciously learn — is real. The social scripts are different. The friendships take longer to form. The loneliness exists even in the middle of the Indian student crowd. LeanOn is a space to say that honestly to someone who will not tell you to try harder at socialising.</p>
        </div>

        <div className="section"><h2>Frequently Asked Questions</h2>{faqs.map((f, i) => (<div className="faq-item" key={i}><p className="faq-q">{f.name}</p><p className="faq-a">{f.acceptedAnswer.text}</p></div>))}</div>
        <div className="cta-card"><h2>The Canada experience nobody puts in the prospectus.</h2><p>A peer listener who understands India, Canada, and the gap. First 5 minutes free. Sessions from ₹160.</p><a href="https://www.leanon.app/browse" className="btn-cta">Find a listener &rarr;</a></div>
        <div className="section"><h2>You Might Also Find This Helpful</h2><div className="related">
          <a href="/nri-student-support">Indian student abroad &rarr;</a>
          <a href="/punjabi-support-canada">Punjabi support Canada &rarr;</a>
          <a href="/nri-loneliness-usa">NRI loneliness &rarr;</a>
          <a href="/indian-student-uk">Indian student UK &rarr;</a>
        </div></div>
        <div className="crisis"><strong>In a crisis?</strong> NIMHANS: 080-46110007 &nbsp;&middot;&nbsp; Tele-MANAS: 14416 &nbsp;&middot;&nbsp; Both free, 24/7.</div>
      </div>
    </>
  )
}
