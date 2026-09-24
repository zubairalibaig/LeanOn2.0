import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'NRI Intercultural Marriage | When Your Partner Doesn\'t Share Your Cultural World | LeanOn',
  description: 'Married to someone outside your culture when you\'re an NRI? The gaps — festivals, food, family expectations, values — are real and often unspoken. Talk to a listener who understands.',
  keywords: ['nri intercultural marriage', 'indian married to foreigner', 'nri cross cultural marriage', 'indian partner abroad', 'nri mixed marriage', 'indian interracial marriage'],
  alternates: { canonical: 'https://www.leanon.app/nri-intercultural-marriage' },
  openGraph: { title: 'NRI Intercultural Marriage | When Your Partner Doesn\'t Share Your Cultural World | LeanOn', description: 'Married to someone outside your culture when you\'re an NRI? The gaps — festivals, food, family expectations, values — are real and often unspoken. Talk to a listener who understands.', url: 'https://www.leanon.app/nri-intercultural-marriage', siteName: 'LeanOn', type: 'article', images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn' }] },
}

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
  { '@type': 'Question', name: 'Do listeners understand intercultural marriage dynamics?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. LeanOn listeners are Indian and many understand the specific weight of navigating an intercultural marriage — the gap between what your partner experiences and what you carry from your cultural background, the family disapproval, the identity questions. You don\'t need to explain the context from scratch.' } },
  { '@type': 'Question', name: 'My partner doesn\'t know I\'m talking to someone — is that okay?', acceptedAnswer: { '@type': 'Answer', text: 'Completely. Sessions are private. You do not need your partner\'s knowledge or permission to talk to a peer listener. Many people find that having space to process their own feelings first helps them have better conversations with their partner afterward.' } },
  { '@type': 'Question', name: 'Can I talk in Hindi or other Indian languages?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Many listeners are comfortable in Hindi and other Indian languages. Check individual listener profiles for languages.' } },
  { '@type': 'Question', name: 'Is this different from couples support?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. This is individual peer listening — one person talking to one listener. It is not couples support, not mediation, not joint sessions. It is space for you to work through what you are experiencing.' } },
  { '@type': 'Question', name: 'How much does a session cost?', acceptedAnswer: { '@type': 'Answer', text: 'First 5 minutes are free. Sessions continue from US$10 for 15 minutes. No subscription.' } },
] }

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
  { '@type': 'ListItem', position: 2, name: 'NRI Support', item: 'https://www.leanon.app/nri-support' },
  { '@type': 'ListItem', position: 3, name: 'NRI Intercultural Marriage', item: 'https://www.leanon.app/nri-intercultural-marriage' },
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

export default function NriInterculturalMarriagePage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>
      <nav className="nav"><a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a><a href="https://www.leanon.app/browse"><button className="btn-nav">Find a listener</button></a></nav>
      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>&#x203A;</span><a href="/nri-support">NRI Support</a><span>&#x203A;</span><span style={{ color: 'var(--navy)' }}>NRI Intercultural Marriage</span></nav>
        <div className="hero">
          <p className="badge">NRI Intercultural Marriage &middot; Indian Abroad &middot; Cross-Cultural Relationship</p>
          <h1>NRI Intercultural Marriage — <em>The Love Is Real. The Gaps Are Too.</em></h1>
          <p className="lead">Your partner loves you. But they don&rsquo;t feel the weight of Diwali away from home. They don&rsquo;t understand why you can&rsquo;t just &ldquo;move on&rdquo; from India. There is a loneliness in loving someone who can&rsquo;t quite enter your whole world — and it deserves to be said out loud. First 5 minutes free.</p>
          <a href="https://www.leanon.app/browse" className="cta-hero">Talk to someone now &rarr;</a>
        </div>

        <div className="section">
          <h2>What Intercultural Marriage Means for an NRI</h2>
          <p>When you are an NRI married to someone from outside your culture, you navigate two kinds of foreign territory simultaneously. Your partner&rsquo;s culture, which you have been learning since you got together. And the immigrant experience itself, which your partner watches from the outside but cannot enter from the inside.</p>
          <p>There is a specific loneliness in this. Your partner tries — they try Diwali, they try the food, they try to understand the family calls. But trying and knowing are not the same thing. The weight of the extended family expectation in India, the specific flavour of the immigrant homesickness, the cultural identity that is always a little bit fragile when you are abroad — these are hard to share across a cultural gap, no matter how much love exists on both sides.</p>
        </div>

        <div className="section">
          <h2>Common Pressure Points</h2>
          <p>Family visits that feel like two separate events happening in the same house. Religious practices — how much you keep, whether your children learn them — becoming a negotiation rather than a given. Extended family disapproval from India reaching your home in subtle and not-so-subtle ways. The question of raising children with two cultural identities and what that means for belonging. The moments where your partner&rsquo;s instincts and yours are simply pointed in different directions because you grew up in different worlds.</p>
          <p>These are not failures. They are the texture of an intercultural marriage. They require more words and more patience than a same-culture relationship. And they sometimes require a space outside the relationship to process them.</p>
        </div>

        <div className="section">
          <h2>You Don&rsquo;t Need Advice. You Need to Be Heard.</h2>
          <p>Not someone to tell you how to bridge the gap or what to do about your family in India. Just someone who understands the Indian side of this — the cultural weight, the identity complexity, the specific loneliness of having a part of yourself that your partner loves but cannot fully enter. A peer listener at LeanOn already carries that context. They will not need it translated.</p>
        </div>

        <div className="section"><h2>Frequently Asked Questions</h2>{faqs.map((f, i) => (<div className="faq-item" key={i}><p className="faq-q">{f.name}</p><p className="faq-a">{f.acceptedAnswer.text}</p></div>))}</div>
        <div className="cta-card"><h2>The part of you your partner loves but can&rsquo;t quite reach.</h2><p>Real peer listener. Understands the Indian cultural weight from the inside. First 5 minutes free, from US$10.</p><a href="https://www.leanon.app/browse" className="btn-cta">Find a listener &rarr;</a></div>
        <div className="section"><h2>You Might Also Find This Helpful</h2><div className="related">
          <a href="/nri-marriage-usa">NRI marriage USA &rarr;</a>
          <a href="/nri-marriage-uk">NRI marriage UK &rarr;</a>
          <a href="/nri-relationship-problems">NRI relationship problems &rarr;</a>
          <a href="/nri-identity-crisis">NRI identity crisis &rarr;</a>
          <a href="/nri-support">NRI support &rarr;</a>
          <a href="/nri-loneliness-usa">NRI loneliness USA &rarr;</a>
          <a href="/indians-in-uk">Indians in UK &rarr;</a>
          <a href="/indians-in-toronto">Indians in Toronto &rarr;</a>
        </div></div>
        <div className="crisis"><strong>In a crisis?</strong> NIMHANS: 080-46110007 &nbsp;&middot;&nbsp; Tele-MANAS: 14416 &nbsp;&middot;&nbsp; Both free, 24/7.</div>
      </div>
    </>
  )
}
