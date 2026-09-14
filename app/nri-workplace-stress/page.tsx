import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'NRI Workplace Stress in the West | When the Office Feels Like a Foreign Country | LeanOn',
  description: 'NRI workplace stress is different — navigating Western office culture, accents, promotions, and the immigrant chip on your shoulder. Talk to someone who gets it.',
  keywords: ['nri workplace stress', 'indian immigrant work stress', 'h1b work pressure', 'nri career anxiety', 'indian professional abroad', 'minority stress at work'],
  alternates: { canonical: 'https://www.leanon.app/nri-workplace-stress' },
  openGraph: { title: 'NRI Workplace Stress in the West | When the Office Feels Like a Foreign Country | LeanOn', description: 'NRI workplace stress is different — navigating Western office culture, accents, promotions, and the immigrant chip on your shoulder. Talk to someone who gets it.', url: 'https://www.leanon.app/nri-workplace-stress', siteName: 'LeanOn', type: 'article', images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn' }] },
}

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
  { '@type': 'Question', name: 'Is this different from regular workplace stress?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. NRI workplace stress carries layers that non-immigrants do not experience — accent insecurity, the immigrant need to prove yourself twice, H1B employer dependency, the model minority pressure that makes your achievements invisible, and the specific exhaustion of code-switching every single day. These are real and distinct stressors.' } },
  { '@type': 'Question', name: 'I was passed over for a promotion and I think it is partly because I am Indian. Can listeners understand this?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. This is one of the most common and most painful NRI work experiences — working harder than your peers, delivering more, and still being passed over for leadership while less-qualified colleagues advance. Listeners understand the complexity of naming race in the workplace, and the specific helplessness of not being able to address it directly.' } },
  { '@type': 'Question', name: 'I feel I cannot leave my job because of my H1B. Do listeners get this?', acceptedAnswer: { '@type': 'Answer', text: 'Completely. The H1B employer tether — staying in a toxic job because leaving would jeopardise your visa, your family\'s status, and your green card timeline — is a specific kind of trapped that listeners understand well. You can talk about it honestly.' } },
  { '@type': 'Question', name: 'Is this confidential from my employer?', acceptedAnswer: { '@type': 'Answer', text: 'Completely. Sessions are anonymous — phone number and first name only. Your employer, your HR department, and your colleagues will never know. Nothing leaves the session.' } },
  { '@type': 'Question', name: 'How much does it cost?', acceptedAnswer: { '@type': 'Answer', text: 'First 5 minutes free every session. Sessions from ₹160 for 15 minutes. No subscription.' } },
] }

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
  { '@type': 'ListItem', position: 2, name: 'NRI Support', item: 'https://www.leanon.app/nri-support' },
  { '@type': 'ListItem', position: 3, name: 'NRI Workplace Stress', item: 'https://www.leanon.app/nri-workplace-stress' },
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

export default function NriWorkplaceStressPage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>
      <nav className="nav"><a href="/"><img src="/logo.png" className="nav-logo" alt="LeanOn" /></a><a href="https://www.leanon.app/browse"><button className="btn-nav">Find a listener</button></a></nav>
      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>&#x203A;</span><a href="/nri-support">NRI Support</a><span>&#x203A;</span><span style={{ color: 'var(--navy)' }}>NRI Workplace Stress</span></nav>
        <div className="hero">
          <p className="badge">NRI Work Stress &middot; Indian Professional Abroad &middot; Immigrant Burnout</p>
          <h1>You work harder than everyone. <em>And somehow it still doesn&rsquo;t feel like enough.</em></h1>
          <p className="lead">NRI workplace stress is not regular work stress. It is navigating Western office culture while carrying an accent, a visa, and the immigrant need to prove yourself twice. The model minority pressure. The promotions that go to people who did less. The daily code-switching that nobody acknowledges. Talk to someone who understands the full picture. First 5 minutes free.</p>
          <a href="https://www.leanon.app/browse" className="cta-hero">Talk to someone now &rarr;</a>
        </div>

        <div className="section">
          <h2>The Immigrant Chip on Your Shoulder — and Why It Is Entirely Justified</h2>
          <p>If you are an Indian professional in a Western workplace, you carry a specific cognitive load that your non-immigrant colleagues simply do not. You are monitoring your accent in every meeting. You are managing the impression of being the foreign one. You are working harder than your peers because you know that a mistake by you is read differently than a mistake by a native-born colleague. You are performing competence at a higher threshold just to be seen as equal.</p>
          <p>This is not paranoia. It is an accurate read of a real dynamic. And the exhaustion of it — the constant vigilance, the energy spent on impression management that non-immigrants can use on actual work — is a real cost that rarely gets named. You cannot complain about it to your manager. You cannot fully explain it to non-immigrant friends. LeanOn listeners are Indian, understand this dynamic from the inside, and will hear it without making you justify the feeling.</p>
        </div>

        <div className="section">
          <h2>The H1B Trap — When You Cannot Leave a Bad Job</h2>
          <p>One of the most specific and painful NRI work experiences is being in a toxic, unfair, or simply miserable job and not being able to leave because your H1B is sponsored by that employer. The green card timeline that resets if you change jobs. The dependent visa that depends on your visa status. The career years you have already invested in the green card queue.</p>
          <p>This trap is real and its emotional cost is enormous. You spend every working day in a situation you would leave immediately if you were a citizen. And the resentment of that — the feeling of being owned, of having your options systematically reduced — accumulates over time in ways that show up in your health, your relationships, and your sense of self. A listener will hear this without judgment and without telling you what you should do.</p>
        </div>

        <div className="section">
          <h2>Success That Still Feels Empty</h2>
          <p>Sometimes the work stress is not about being held back — it is about succeeding and finding that the success does not feel the way you expected. You got the job title. You got the salary. You are, by every external measure, doing well. And there is a persistent hollowness that you cannot quite name.</p>
          <p>The Indian overachiever burnout is real. The drive that brought you abroad, that got you the degree and the visa and the career, does not simply turn off when you achieve the goal. It finds a new goal. And at some point, usually when you are exhausted and far from home, you notice that you are running a treadmill that does not seem to have an end point. LeanOn is a space to speak that exhaustion honestly to someone who understands why the dream does not automatically deliver the peace.</p>
        </div>

        <div className="section"><h2>Frequently Asked Questions</h2>{faqs.map((f, i) => (<div className="faq-item" key={i}><p className="faq-q">{f.name}</p><p className="faq-a">{f.acceptedAnswer.text}</p></div>))}</div>
        <div className="cta-card"><h2>The immigrant work weight deserves to be heard.</h2><p>No performance, no justification. Just a real listener who gets it. First 5 minutes free. Sessions from ₹160.</p><a href="https://www.leanon.app/browse" className="btn-cta">Find a listener &rarr;</a></div>
        <div className="section"><h2>You Might Also Find This Helpful</h2><div className="related">
          <a href="/nri-burnout">NRI burnout &rarr;</a>
          <a href="/nri-h1b-visa-stress">H1B visa stress &rarr;</a>
          <a href="/nri-loneliness-usa">NRI loneliness USA &rarr;</a>
          <a href="/nri-support">NRI support &rarr;</a>
        </div></div>
        <div className="crisis"><strong>In a crisis?</strong> NIMHANS: 080-46110007 &nbsp;&middot;&nbsp; Tele-MANAS: 14416 &nbsp;&middot;&nbsp; Both free, 24/7.</div>
      </div>
    </>
  )
}
