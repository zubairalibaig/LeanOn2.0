import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Support for Indians in Leicester | Melton Road, Belgrave | LeanOn',
  description: 'Leicester has the highest proportion of Indians outside India. Melton Road, Belgrave — a community that built this city. And still needs somewhere safe to talk.',
  keywords: ['indians in leicester', 'leicester indian community', 'belgrave road leicester', 'melton road indian', 'desi support leicester', 'leicester gujarati support', 'indian loneliness leicester'],
  alternates: { canonical: 'https://www.leanon.app/indians-in-leicester' },
  openGraph: { title: 'Support for Indians in Leicester | Melton Road, Belgrave | LeanOn', description: 'Leicester has the highest proportion of Indians outside India. Melton Road, Belgrave — a community that built this city. And still needs somewhere safe to talk.', url: 'https://www.leanon.app/indians-in-leicester', siteName: 'LeanOn', type: 'article', images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn' }] },
}

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
  { '@type': 'Question', name: 'Do listeners understand the Leicester Gujarati and Indian community?', acceptedAnswer: { '@type': 'Answer', text: 'LeanOn listeners are based in India and understand the British Indian diaspora experience — including the unique Leicester context of a community with roots going back to the East African Indian migration of the 1970s, and the specific Gujarati cultural pressures. No explanation needed.' } },
  { '@type': 'Question', name: 'When is a good time to connect from Leicester?', acceptedAnswer: { '@type': 'Answer', text: 'Leicester (GMT/BST) is 5.5 hours behind IST in winter and 4.5 hours in summer. Indian evenings (6–10pm IST) are Leicester afternoons (1:30–5:30pm BST in summer). Afternoons in Leicester map well to Indian evening availability.' } },
  { '@type': 'Question', name: 'Is this private from the Belgrave Road community?', acceptedAnswer: { '@type': 'Answer', text: 'Completely. Sessions are anonymous — phone number and first name only. Listeners are in India with no connection to the Leicester Indian community. Nothing is shared with anyone.' } },
  { '@type': 'Question', name: 'How much does it cost?', acceptedAnswer: { '@type': 'Answer', text: 'Your first session is free (5 minutes). After that, sessions start at US$10 for 15 minutes. No subscription.' } },
] }

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
  { '@type': 'ListItem', position: 2, name: 'NRI Support', item: 'https://www.leanon.app/nri-support' },
  { '@type': 'ListItem', position: 3, name: 'Indians in Leicester', item: 'https://www.leanon.app/indians-in-leicester' },
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

export default function IndiansInLeicesterPage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>
      <nav className="nav"><a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a><a href="/browse"><button className="btn-nav">Find a listener</button></a></nav>
      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>&#x203A;</span><a href="/nri-support">NRI Support</a><span>&#x203A;</span><span style={{ color: 'var(--navy)' }}>Indians in Leicester</span></nav>
        <div className="hero">
          <p className="badge">Indians in Leicester &middot; Belgrave &middot; Golden Mile</p>
          <h1>Leicester. More Indian than almost anywhere. <em>And still, some things stay unsaid.</em></h1>
          <p className="lead">Leicester is remarkable — Belgrave Road, Melton Road, the Golden Mile — a city where Indians didn&rsquo;t just settle but transformed the landscape. Third generation. Fourth generation. And still, the loneliness of identity, the pressure to honour the sacrifice of grandparents who came here in the 1960s and 70s, the feeling of not fitting neatly into British or Indian. Talk to someone who understands. First 5 minutes free.</p>
          <a href="/browse" className="cta-hero">Talk to someone now &rarr;</a>
        </div>

        <div className="section">
          <h2>The Golden Mile and the Weight of History</h2>
          <p>Leicester has the highest concentration of Indian-heritage people of any city outside the Indian subcontinent. The Belgrave Road Golden Mile is famous — Diwali celebrations here are among the biggest in the world outside India. Melton Road&rsquo;s shops and restaurants, the Shree Sanatan Mandir, the gurdwaras and cultural centres — Leicester&rsquo;s Indian community has built something remarkable.</p>
          <p>Much of Leicester&rsquo;s Indian community has roots in East Africa — Gujarati families who came via Uganda, Kenya, and Tanzania in the 1960s and 70s. This is a community that has survived displacement twice: first from India to East Africa, then from East Africa to Britain. The resilience is extraordinary. The expectation of resilience — of just getting on with it — is also extraordinarily high.</p>
          <p>Third and fourth generation Leicesterians of Indian descent carry a complex inheritance. The identity question — too British to feel fully Indian, too Indian to feel fully British — is not unique to Leicester but is particularly acute in a city where the community is so large and so well-established. Talk to a real Indian peer listener who understands both sides. First 5 minutes free.</p>
        </div>

        <div className="section">
          <h2>When the Community Is Everywhere and Yet</h2>
          <p>The Leicester Indian community&rsquo;s density creates the same paradox that all tight-knit diaspora communities know: you are surrounded by your people and yet there are things you cannot say among them. The community gossip network is real. The expectation to be fine — to honour the sacrifice of your grandparents who built this from nothing — is heavy. Mental health is not something discussed openly.</p>
          <p>Leicester (GMT/BST) is 5.5 hours behind IST in winter and 4.5 hours in summer. Indian evenings (6–10pm IST) fall in Leicester afternoons (1:30–5:30pm BST in summer). Your lunch break, or early afternoon before school pickup — that window is India&rsquo;s evening. A real Indian listener is available. No appointment needed. Anonymous. The first 5-minute session free.</p>
        </div>

        <div className="section"><h2>Frequently Asked Questions</h2>{faqs.map((f, i) => (<div className="faq-item" key={i}><p className="faq-q">{f.name}</p><p className="faq-a">{f.acceptedAnswer.text}</p></div>))}</div>
        <div className="cta-card"><h2>The city built by your community. A space that&rsquo;s just for you.</h2><p>Real Indian peer listener. Understands Leicester Indian community history and pressures. First 5 minutes free. From US$10.</p><a href="/browse" className="btn-cta">Find a listener &rarr;</a></div>
        <div className="section"><h2>You Might Also Find This Helpful</h2><div className="related">
          <a href="/indians-in-uk">Indians in UK &rarr;</a>
          <a href="/indians-in-birmingham">Indians in Birmingham &rarr;</a>
          <a href="/nri-support">NRI support &rarr;</a>
          <a href="/nri-identity-crisis">NRI identity &rarr;</a>
        </div></div>
        <div className="crisis"><strong>In a crisis?</strong> NIMHANS: 080-46110007 &nbsp;&middot;&nbsp; Tele-MANAS: 14416 &nbsp;&middot;&nbsp; Both free, 24/7.</div>
      </div>
    </>
  )
}
