import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'NRI Marriage Problems | When Your Marriage Is Straining Under the Distance | LeanOn',
  description: 'NRI marriage problems are layered — immigration stress, money across borders, in-law dynamics from afar, identity clashes. Talk to someone who gets the full picture.',
  keywords: ['nri marriage problems', 'nri couple problems', 'indian marriage problems abroad', 'nri marital issues', 'nri husband wife problems', 'nri marriage stress'],
  alternates: { canonical: 'https://www.leanon.app/nri-marriage-problems' },
  openGraph: { title: 'NRI Marriage Problems | When Your Marriage Is Straining Under the Distance | LeanOn', description: 'NRI marriage problems are layered — immigration stress, money across borders, in-law dynamics from afar, identity clashes. Talk to someone who gets the full picture.', url: 'https://www.leanon.app/nri-marriage-problems', siteName: 'LeanOn', type: 'article', images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn' }] },
}

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
  { '@type': 'Question', name: 'Can both partners talk to a listener separately?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Each person can have their own session with a listener. Sessions are individual — a listener speaks to one person at a time. If both partners want to talk separately, that is completely possible.' } },
  { '@type': 'Question', name: 'Are you a mediator or couples support service?', acceptedAnswer: { '@type': 'Answer', text: 'No. LeanOn is peer listening — one person talking to one listener. It is not mediation, not couples sessions, not professional relationship support. It is a space for you to think through what you are experiencing with someone who understands the NRI context.' } },
  { '@type': 'Question', name: 'Is my conversation confidential from my spouse?', acceptedAnswer: { '@type': 'Answer', text: 'Completely. What you say in a session stays between you and the listener. Nothing is shared with anyone, including a partner who might also use LeanOn separately.' } },
  { '@type': 'Question', name: 'Can I talk in Hindi or other Indian languages?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Many listeners are comfortable in Hindi and other Indian languages. Check individual listener profiles.' } },
  { '@type': 'Question', name: 'How much does it cost?', acceptedAnswer: { '@type': 'Answer', text: 'First 5 minutes are free every session. Sessions continue from ₹160 for 15 minutes. No subscription.' } },
] }

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
  { '@type': 'ListItem', position: 2, name: 'NRI Support', item: 'https://www.leanon.app/nri-support' },
  { '@type': 'ListItem', position: 3, name: 'NRI Marriage Problems', item: 'https://www.leanon.app/nri-marriage-problems' },
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

export default function NriMarriageProblemsPage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>
      <nav className="nav"><a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a><a href="https://www.leanon.app/browse"><button className="btn-nav">Find a listener</button></a></nav>
      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>&#x203A;</span><a href="/nri-support">NRI Support</a><span>&#x203A;</span><span style={{ color: 'var(--navy)' }}>NRI Marriage Problems</span></nav>
        <div className="hero">
          <p className="badge">NRI Marriage &middot; Indian Couple Abroad &middot; Peer Support</p>
          <h1>NRI Marriage Problems — <em>More Than Just Couple Issues</em></h1>
          <p className="lead">NRI marriages carry weight that most relationship advice doesn&rsquo;t account for. Immigration decisions. Money across two countries. In-laws influencing from 8,000 miles away. Two people who left India together but changed in different directions once they got there. Talk to someone who understands the full picture. First 5 minutes free.</p>
          <a href="https://www.leanon.app/browse" className="cta-hero">Talk to someone now &rarr;</a>
        </div>

        <div className="section">
          <h2>Why NRI Marriages Face Unique Pressures</h2>
          <p>Moving abroad changes people. It changes them differently depending on how they adapt, how quickly they find their footing, what opportunities they find, what they miss. Two people who left India together can end up in very different emotional places within a few years — one thriving and integrated, one still finding their way. The marriage holds both of them, and the gap between where they are can strain something that nobody planned for.</p>
          <p>Then there is the financial dimension: supporting parents in India while building a life abroad means money is always doing more work than it can comfortably do. There is the in-law dimension: opinions and influence that travel across time zones with surprising ease. There is the immigration dimension: visa situations that make one person dependent on the other in ways that shift the dynamic of the whole relationship.</p>
          <p>None of this is on the generic relationship advice websites. But it is what NRI couples live with.</p>
        </div>

        <div className="section">
          <h2>The Problems That Keep Coming Up</h2>
          <p>Communication breakdown that started when one partner felt the other wasn&rsquo;t listening and it escalated from there. Bedroom distance that nobody names out loud. Disagreements about whether to stay abroad or return to India — with each position carrying deep emotional weight about identity, belonging, and what kind of life you want. One partner building an external life that the other does not share. The loneliness of being married and still feeling alone.</p>
          <p>These are not small problems and they do not resolve themselves with time. But talking about them with someone neutral — someone who understands the NRI context without being inside your relationship — can shift something. Not fix everything. But shift enough to see more clearly.</p>
        </div>

        <div className="section">
          <h2>Talking About It with Someone Neutral</h2>
          <p>LeanOn peer listeners are not mediators. They are not in your relationship and they will not try to be. What they offer is a space to say what you cannot say inside the marriage without it becoming an argument, and what you cannot say outside the marriage without it becoming gossip. Someone who hears the NRI context as a given, not as context they need explained.</p>
          <p>Sometimes what you need before you can talk to your partner is to find out what you actually think. A peer listener helps with that.</p>
        </div>

        <div className="section"><h2>Frequently Asked Questions</h2>{faqs.map((f, i) => (<div className="faq-item" key={i}><p className="faq-q">{f.name}</p><p className="faq-a">{f.acceptedAnswer.text}</p></div>))}</div>
        <div className="cta-card"><h2>The weight that NRI marriages carry in silence.</h2><p>Real peer listener. Understands the full NRI picture. First 5 minutes free, from ₹160.</p><a href="https://www.leanon.app/browse" className="btn-cta">Find a listener &rarr;</a></div>
        <div className="section"><h2>You Might Also Find This Helpful</h2><div className="related">
          <a href="/nri-marriage-usa">NRI marriage USA &rarr;</a>
          <a href="/nri-marriage-uk">NRI marriage UK &rarr;</a>
          <a href="/arranged-marriage-nri">Arranged marriage NRI &rarr;</a>
          <a href="/nri-relationship-problems">NRI relationship problems &rarr;</a>
          <a href="/nri-long-distance-relationship">NRI long distance &rarr;</a>
          <a href="/nri-support">NRI support &rarr;</a>
          <a href="/nri-loneliness-uk">NRI loneliness UK &rarr;</a>
          <a href="/nri-loneliness-canada">NRI loneliness Canada &rarr;</a>
        </div></div>
        <div className="crisis"><strong>In a crisis?</strong> NIMHANS: 080-46110007 &nbsp;&middot;&nbsp; Tele-MANAS: 14416 &nbsp;&middot;&nbsp; Both free, 24/7.</div>
      </div>
    </>
  )
}
