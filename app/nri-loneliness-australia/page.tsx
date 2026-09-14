import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'NRI Loneliness in Australia | When Sydney and Melbourne Still Feel Lonely | LeanOn',
  description: 'Australia has a growing Indian diaspora but the distances, the cultural gap, and the isolation of immigrant life are real. Talk to a peer listener who understands.',
  keywords: ['nri loneliness australia', 'indian loneliness australia', 'lonely indian australia', 'nri australia', 'desi australia loneliness', 'indian in australia lonely'],
  alternates: { canonical: 'https://www.leanon.app/nri-loneliness-australia' },
  openGraph: { title: 'NRI Loneliness in Australia | When Sydney and Melbourne Still Feel Lonely | LeanOn', description: 'Australia has a growing Indian diaspora but the distances, the cultural gap, and the isolation of immigrant life are real. Talk to a peer listener who understands.', url: 'https://www.leanon.app/nri-loneliness-australia', siteName: 'LeanOn', type: 'article', images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn' }] },
}

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
  { '@type': 'Question', name: 'Is NRI loneliness in Australia different from other countries?', acceptedAnswer: { '@type': 'Answer', text: 'There are specific factors that shape the Australian NRI experience: the enormous distance from India (5,000+ km further than the UK), the cost of flights home, the time zone gap that makes calls to India awkward, and the particular isolation of cities that are themselves spread out. The Indian community in Australia is growing but still smaller than in the UK or USA. These factors are real and specific.' } },
  { '@type': 'Question', name: 'Will a listener understand the Australian context?', acceptedAnswer: { '@type': 'Answer', text: 'LeanOn listeners are Indian and understand the NRI experience broadly. You do not need to explain the immigrant context from scratch. The Australian specifics — the distance, the community dynamics, the student-to-PR pathway — will make sense to them even if they are not based in Australia.' } },
  { '@type': 'Question', name: 'I am on a student visa — is this relevant for me too?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The loneliness and isolation of being a student abroad is a distinct and very real experience. The visa stress of the student-to-PR pathway, the loneliness of being far from family, the financial pressure — all of this is part of the Indian-in-Australia experience and can be talked about.' } },
  { '@type': 'Question', name: 'Is this confidential?', acceptedAnswer: { '@type': 'Answer', text: 'Completely. Sessions are private — phone number and first name only. Nothing goes to your family, your community, or anyone else.' } },
  { '@type': 'Question', name: 'How much does a session cost?', acceptedAnswer: { '@type': 'Answer', text: 'First 5 minutes are free. Sessions continue from ₹160 for 15 minutes. No subscription.' } },
] }

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
  { '@type': 'ListItem', position: 2, name: 'NRI Support', item: 'https://www.leanon.app/nri-support' },
  { '@type': 'ListItem', position: 3, name: 'NRI Loneliness Australia', item: 'https://www.leanon.app/nri-loneliness-australia' },
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

export default function NriLonelinessAustraliaPage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>
      <nav className="nav"><a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a><a href="https://www.leanon.app/browse"><button className="btn-nav">Find a listener</button></a></nav>
      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>&#x203A;</span><a href="/nri-support">NRI Support</a><span>&#x203A;</span><span style={{ color: 'var(--navy)' }}>NRI Loneliness Australia</span></nav>
        <div className="hero">
          <p className="badge">NRI Loneliness &middot; Australia &middot; Indian Immigrant Life</p>
          <h1>NRI Loneliness in Australia — <em>A Long Way from Home in Every Direction</em></h1>
          <p className="lead">Sydney and Melbourne have growing Indian communities. There are temples, Indian grocery stores, cricket clubs. And you can still feel profoundly alone. Australia is further from India than almost anywhere else. The flights are expensive. The time zones make calls home awkward. The immigrant weight does not lift because there is a biryani place nearby. Talk to someone who understands. First 5 minutes free.</p>
          <a href="https://www.leanon.app/browse" className="cta-hero">Talk to someone now &rarr;</a>
        </div>

        <div className="section">
          <h2>The Specific Isolation of Indian Life in Australia</h2>
          <p>Australia is geographically isolated from everything — including India. It is not a short flight home for a festival or a family emergency. The cost of the trip, the distance, and the time away from work make spontaneous visits to India almost impossible. You are further from your family than Indians in the UK or USA are from theirs, and that extra distance is felt.</p>
          <p>The time zone gap between Australia and India — 4.5 to 5.5 hours depending on the season and your city — means calls home happen at inconvenient times for both parties. Late evenings in India, early mornings in Australia. The calls that would be easy and natural from London or New York require scheduling and effort from Sydney or Melbourne.</p>
          <p>The Indian community in Australia is growing but is still smaller and more dispersed than in comparable cities in other countries. The critical mass of familiar culture that makes some NRI cities feel almost like a second home is not yet fully present everywhere in Australia.</p>
        </div>

        <div className="section">
          <h2>The Student-to-PR Pathway and the Loneliness It Carries</h2>
          <p>A significant proportion of Indians in Australia came on student visas and are navigating the pathway to permanent residency. That pathway brings its own specific stress — the pressure to maintain enrollment, the right to work restrictions, the uncertainty of whether the PR application will be approved, the years spent in an uncertain immigration status that prevents you from fully committing to either staying or leaving.</p>
          <p>That uncertainty, combined with the distance from family, and the financial pressure of studying abroad without the right to work full-time, creates a particular version of NRI loneliness. It is the loneliness of the person who does not yet fully belong here and cannot fully go back there.</p>
        </div>

        <div className="section">
          <h2>LeanOn for Indians in Australia</h2>
          <p>A peer listener who already understands the immigrant experience. You do not need to explain why you are lonely in Australia or justify it against the visible success of being there. First 5 minutes free, sessions from ₹160. Private, anonymous. Available when the time zones make it hard to talk to anyone in India.</p>
        </div>

        <div className="section"><h2>Frequently Asked Questions</h2>{faqs.map((f, i) => (<div className="faq-item" key={i}><p className="faq-q">{f.name}</p><p className="faq-a">{f.acceptedAnswer.text}</p></div>))}</div>
        <div className="cta-card"><h2>Far from home in every direction.</h2><p>Real peer listener. Understands Indian immigrant loneliness. First 5 minutes free, from ₹160.</p><a href="https://www.leanon.app/browse" className="btn-cta">Find a listener &rarr;</a></div>
        <div className="section"><h2>You Might Also Find This Helpful</h2><div className="related">
          <a href="/nri-loneliness-usa">NRI loneliness USA &rarr;</a>
          <a href="/nri-loneliness-uk">NRI loneliness UK &rarr;</a>
          <a href="/nri-loneliness-canada">NRI loneliness Canada &rarr;</a>
          <a href="/nri-support">NRI support &rarr;</a>
          <a href="/nri-mental-health">NRI mental health &rarr;</a>
          <a href="/nri-homesick">NRI homesick &rarr;</a>
          <a href="/nri-anxiety-abroad">NRI anxiety abroad &rarr;</a>
          <a href="/nri-identity-crisis">NRI identity crisis &rarr;</a>
        </div></div>
        <div className="crisis"><strong>In a crisis?</strong> NIMHANS: 080-46110007 &nbsp;&middot;&nbsp; Tele-MANAS: 14416 &nbsp;&middot;&nbsp; Both free, 24/7.</div>
      </div>
    </>
  )
}
