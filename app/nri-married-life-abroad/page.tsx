import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'NRI Married Life Abroad | The Hidden Weight of Building a Life Together Far from Home | LeanOn',
  description: 'NRI married life abroad looks perfect from outside. Inside, it\'s two people trying to hold a marriage together in a foreign country, often without family support. Talk to someone.',
  keywords: ['nri married life', 'nri couple abroad', 'nri married couple', 'indian married life abroad', 'nri family life', 'nri couple support'],
  alternates: { canonical: 'https://www.leanon.app/nri-married-life-abroad' },
  openGraph: { title: 'NRI Married Life Abroad | The Hidden Weight of Building a Life Together Far from Home | LeanOn', description: 'NRI married life abroad looks perfect from outside. Inside, it\'s two people trying to hold a marriage together in a foreign country, often without family support. Talk to someone.', url: 'https://www.leanon.app/nri-married-life-abroad', siteName: 'LeanOn', type: 'article', images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn' }] },
}

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
  { '@type': 'Question', name: 'Can peer listening help with the loneliness of NRI married life?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Peer listeners are not there to fix your marriage — they are there to hear what you are carrying. The loneliness of being married and still feeling alone, the distance between the life you show people and the life you actually feel, the things you can\'t say inside the marriage — these are exactly what peer listening is for.' } },
  { '@type': 'Question', name: 'Do I need my partner\'s permission to talk to a listener?', acceptedAnswer: { '@type': 'Answer', text: 'No. Sessions are individual and private. You do not need your partner\'s knowledge or permission. Many people find that having their own space to process helps them show up better in their marriage.' } },
  { '@type': 'Question', name: 'What if my partner and I both want to talk separately?', acceptedAnswer: { '@type': 'Answer', text: 'Each person can have their own session with a listener. Sessions are private between you and the listener you choose.' } },
  { '@type': 'Question', name: 'Are listeners available at different times, given time zones?', acceptedAnswer: { '@type': 'Answer', text: 'Listeners are available across different times of day. Browse the available listeners to find someone who is online when you need to talk.' } },
  { '@type': 'Question', name: 'How much does a session cost?', acceptedAnswer: { '@type': 'Answer', text: 'First 5 minutes are free. Sessions continue from US$10 for 15 minutes. No subscription, no commitment.' } },
] }

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
  { '@type': 'ListItem', position: 2, name: 'NRI Support', item: 'https://www.leanon.app/nri-support' },
  { '@type': 'ListItem', position: 3, name: 'NRI Married Life Abroad', item: 'https://www.leanon.app/nri-married-life-abroad' },
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

export default function NriMarriedLifeAbroadPage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>
      <nav className="nav"><a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a><a href="https://www.leanon.app/browse"><button className="btn-nav">Find a listener</button></a></nav>
      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>&#x203A;</span><a href="/nri-support">NRI Support</a><span>&#x203A;</span><span style={{ color: 'var(--navy)' }}>NRI Married Life Abroad</span></nav>
        <div className="hero">
          <p className="badge">NRI Married Life &middot; Indian Couple Abroad &middot; Peer Support</p>
          <h1>NRI Married Life Abroad — <em>Beautiful from Outside. Heavy Inside.</em></h1>
          <p className="lead">Both working. No grandparents for childcare. Two people carrying each other&rsquo;s immigration anxiety. The Instagram life and the Sunday evening silence. NRI married life is not the version in the family WhatsApp group — it is two people trying to hold everything together without a support network within reach. Talk to someone who understands. First 5 minutes free.</p>
          <a href="https://www.leanon.app/browse" className="cta-hero">Talk to someone now &rarr;</a>
        </div>

        <div className="section">
          <h2>What NRI Married Life Actually Looks Like</h2>
          <p>The photos at festivals look good. The LinkedIn updates are impressive. From the outside, NRI married life looks like the goal — two professionals building a life in a first-world country, the family&rsquo;s pride realised. Inside it is often two people doing everything on their own: managing a household, both working demanding jobs, raising children without the grandparents and extended family who would have been there in India, carrying each other&rsquo;s visa anxieties and career pressures without a break.</p>
          <p>The things that would have been distributed across a joint family in India — childcare, cooking, emotional support, financial backup — are compressed into two people. And those two people are also trying to navigate the strains of immigrant life individually, while appearing fine to their parents, their community, and each other.</p>
        </div>

        <div className="section">
          <h2>The Things NRI Couples Don&rsquo;t Say to Each Other</h2>
          <p>&ldquo;I am lonely even with you.&rdquo; &ldquo;I miss home more than I admit.&rdquo; &ldquo;I wonder if we made the right choice coming here.&rdquo; &ldquo;I feel like we are managing a project together, not living a life.&rdquo; These are the sentences that do not get said because saying them feels like a failure, or a burden, or a betrayal of the choice you both made.</p>
          <p>So they sit unexpressed. And they accumulate. And they make the Sunday evenings heavier than they need to be.</p>
        </div>

        <div className="section">
          <h2>Why Talking to a Peer Helps</h2>
          <p>Not couples coaching. Not mediation. Just someone who has navigated the same terrain — the NRI marriage, the immigrant life, the weight of building everything from scratch without a family net — and who can listen to what you are carrying without needing it justified or explained. A space to say the unsaid things, privately, before they become something harder to talk about.</p>
        </div>

        <div className="section"><h2>Frequently Asked Questions</h2>{faqs.map((f, i) => (<div className="faq-item" key={i}><p className="faq-q">{f.name}</p><p className="faq-a">{f.acceptedAnswer.text}</p></div>))}</div>
        <div className="cta-card"><h2>The heaviness that doesn&rsquo;t show on the outside.</h2><p>Real peer listener. Understands NRI married life from the inside. First 5 minutes free, from US$10.</p><a href="https://www.leanon.app/browse" className="btn-cta">Find a listener &rarr;</a></div>
        <div className="section"><h2>You Might Also Find This Helpful</h2><div className="related">
          <a href="/nri-marriage-usa">NRI marriage USA &rarr;</a>
          <a href="/nri-marriage-uk">NRI marriage UK &rarr;</a>
          <a href="/nri-marriage-problems">NRI marriage problems &rarr;</a>
          <a href="/nri-relationship-problems">NRI relationship problems &rarr;</a>
          <a href="/nri-support">NRI support &rarr;</a>
          <a href="/nri-loneliness-usa">NRI loneliness USA &rarr;</a>
          <a href="/nri-loneliness-uk">NRI loneliness UK &rarr;</a>
          <a href="/nri-homesick">NRI homesick &rarr;</a>
        </div></div>
        <div className="crisis"><strong>In a crisis?</strong> NIMHANS: 080-46110007 &nbsp;&middot;&nbsp; Tele-MANAS: 14416 &nbsp;&middot;&nbsp; Both free, 24/7.</div>
      </div>
    </>
  )
}
