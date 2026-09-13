import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Feeling Trapped — In Your Marriage, Job, or Family | LeanOn India',
  description: 'Can\'t leave, can\'t stay. Feeling trapped is one of the most suffocating feelings there is. Talk to someone anonymously from ₹160.',
  keywords: [
    'feeling trapped India', 'trapped in marriage India', 'trapped in job India',
    'feel stuck India', 'no way out feeling India', 'trapped in relationship India',
    'feel stuck in life India',
  ],
  alternates: { canonical: 'https://www.leanon.app/feeling-trapped-india', languages: { 'en-IN': 'https://www.leanon.app/feeling-trapped-india' } },
  openGraph: {
    title: 'Feeling Trapped — In Your Marriage, Job, or Family | LeanOn India',
    description: 'Can\'t leave, can\'t stay. Feeling trapped is one of the most suffocating feelings there is. Talk to someone anonymously from ₹160.',
    url: 'https://www.leanon.app/feeling-trapped-india',
    siteName: 'LeanOn',
    type: 'article',
    images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn — Feeling Trapped India' }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why do people feel trapped even when they technically have choices?',
      acceptedAnswer: { '@type': 'Answer', text: 'Because choices exist on paper but not in practice. You can leave a marriage, but you cannot leave the social consequences, the financial dependency, the family fallout, the children involved. You can quit a job, but not when your family depends on your income. The feeling of being trapped is not irrational — it is an accurate assessment of a situation where all the realistic exits have real costs that you are not yet willing or able to pay.' },
    },
    {
      '@type': 'Question',
      name: 'Is feeling trapped related to depression?',
      acceptedAnswer: { '@type': 'Answer', text: 'Often, yes. Persistent feeling of entrapment is one of the most common contributors to depression and anxiety. When you cannot see any exit from a situation that is making you miserable, the mind begins to collapse inward. This is different from laziness or weakness — it is a rational response to an impossible situation. Talking about it does not solve the situation, but it reduces the pressure and often creates space for solutions that were not visible before.' },
    },
    {
      '@type': 'Question',
      name: 'Can talking to someone actually help if the situation itself has not changed?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. The feeling of being trapped is partly a function of how much space you have to think. When everything is crowded with obligation, expectation, and the weight of what you are carrying unsaid, there is no room to see options. A conversation that gives you room to say what you are carrying often creates enough internal space to think more clearly about what options actually exist.' },
    },
    {
      '@type': 'Question',
      name: 'What kind of situations does LeanOn help with?',
      acceptedAnswer: { '@type': 'Answer', text: 'Any situation where you are carrying something you cannot say out loud to the people in your life. Trapped in a marriage but cannot leave because of family pressure, finances, or children. Trapped in a job you hate but cannot quit. Trapped in a family dynamic that is slowly eroding you. Trapped in expectations you never agreed to. These are all conversations LeanOn listeners are trained to hold.' },
    },
    {
      '@type': 'Question',
      name: 'How much does it cost?',
      acceptedAnswer: { '@type': 'Answer', text: 'Sessions start at ₹160. The first 5 minutes are free. No subscription, no appointment.' },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Feeling Trapped India', item: 'https://www.leanon.app/feeling-trapped-india' },
  ],
}

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
  .section ul{padding-left:20px;margin-bottom:14px;}
  .section ul li{font-size:15px;color:#3A6070;line-height:1.80;margin-bottom:6px;}
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

export default function FeelingTrappedIndiaPage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>
      <nav className="nav">
        <a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a>
        <a href="/browse"><button className="btn-nav">Find a listener</button></a>
      </nav>
      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a><span>&#x203A;</span>
          <span style={{color:'var(--navy)'}}>Feeling Trapped India</span>
        </nav>
        <div className="hero">
          <p className="badge">Feeling Trapped &middot; Stuck &middot; Anonymous Support India</p>
          <h1>You can&apos;t leave. You can&apos;t stay. <em>You feel like the walls are closing in.</em></h1>
          <p className="lead">Trapped in a marriage, a job, a family dynamic. You can see the cage but not the exit. Talk to someone anonymously from &#x20b9;160 &mdash; someone who will listen without pushing you toward a decision.</p>
          <a href="/browse" className="cta-hero">Talk to someone now &rarr;</a>
        </div>
        <div className="section">
          <h2>What Feeling Trapped Actually Means</h2>
          <p>Feeling trapped is not the same as being trapped. It is the experience of being in a situation where every exit has a cost you cannot yet afford &mdash; emotionally, financially, socially. You can see a way out in theory, but in practice every option leads somewhere that is also painful or impossible.</p>
          <p>In India, this experience is intensified by the weight of family expectation, social reputation, financial interdependence, and the specific demands of joint family living. The pressure to stay in difficult situations &mdash; a loveless marriage, a draining job, a family dynamic that is eroding you &mdash; is enormous. And there is often no one to say this to, because saying it out loud would trigger a cascade of consequences.</p>
        </div>
        <div className="section">
          <h2>Common Situations</h2>
          <ul>
            <li>In a marriage that is not working but you cannot leave because of children, finances, or family pressure</li>
            <li>In a job you dread but cannot quit because your family depends on you</li>
            <li>In a family dynamic &mdash; joint family, domineering parents &mdash; that is slowly diminishing you</li>
            <li>Carrying expectations you never agreed to but feel unable to step back from</li>
            <li>Wanting a different life but seeing no realistic path to it</li>
          </ul>
        </div>
        <div className="section">
          <h2>What Talking Does</h2>
          <p>It does not solve the situation. But it reduces the pressure. When you are carrying something this heavy entirely internally, there is no room to think. The weight fills every available space. When you say it to someone who is genuinely listening, something shifts. Not the external reality &mdash; but your internal capacity to think about it.</p>
          <p>Sometimes that is all you need to begin to see options that were not visible before. Not because they were not there &mdash; but because you could not see past the weight.</p>
        </div>
        <div className="section">
          <h2>Frequently Asked Questions</h2>
          {faqs.map((f, i) => (
            <div className="faq-item" key={i}>
              <p className="faq-q">{f.name}</p>
              <p className="faq-a">{f.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>
        <div className="cta-card">
          <h2>There is room to breathe. Let someone help you find it.</h2>
          <p>Anonymous peer support. No judgment. From &#x20b9;160. First 5 minutes free.</p>
          <a href="/browse" className="btn-cta">Find a listener &rarr;</a>
        </div>
        <div className="section">
          <h2>You Might Also Find This Helpful</h2>
          <div className="related">
            <a href="/toxic-relationship-india">Toxic relationship &rarr;</a>
            <a href="/emotional-abuse-india">Emotional abuse &rarr;</a>
            <a href="/joint-family-stress-india">Joint family stress &rarr;</a>
            <a href="/support/feeling-lost">Feeling lost &rarr;</a>
            <a href="/cant-tell-anyone-india">Can&apos;t tell anyone &rarr;</a>
          </div>
        </div>
      </div>
    </>
  )
}
