import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Indians in Denver Colorado | Peer Support for the Mile High City | LeanOn',
  description: "Denver's Indian community is smaller but growing — tech, medical, students. The altitude and isolation are both real. Talk to someone who understands.",
  keywords: ['indians in denver', 'indian community colorado', 'nri denver', 'south asian colorado', 'desi denver', 'indian colorado'],
  alternates: { canonical: 'https://www.leanon.app/indians-in-denver' },
  openGraph: { title: 'Indians in Denver Colorado | Peer Support for the Mile High City | LeanOn', description: "Denver's Indian community is smaller but growing — tech, medical, students. The altitude and isolation are both real. Talk to someone who understands.", url: 'https://www.leanon.app/indians-in-denver', siteName: 'LeanOn', type: 'article', images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn' }] },
}

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
  { '@type': 'Question', name: 'Do LeanOn listeners understand the Denver Indian experience?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. LeanOn listeners are based in India and trained to understand the NRI experience, including the specific dynamics of Denver — the smaller Indian community, the outdoor-focused culture that can feel alienating, and the altitude effects that genuinely affect mood and energy, especially in the first year.' } },
  { '@type': 'Question', name: 'What time can I connect from Denver?', acceptedAnswer: { '@type': 'Answer', text: 'Denver (MST) is 12.5 hours behind IST. 7am Denver = 7:30pm India. Early mornings work well — Indian listeners are available in their evening before your day starts.' } },
  { '@type': 'Question', name: 'Is the session confidential?', acceptedAnswer: { '@type': 'Answer', text: 'Completely. LeanOn is anonymous — phone number and first name only. Nothing is shared with your employer, colleagues, or anyone in your Denver network.' } },
  { '@type': 'Question', name: 'How much does it cost?', acceptedAnswer: { '@type': 'Answer', text: 'Your first session with each new listener is free (5 minutes). After that, sessions start at ₹160 for 15 minutes. No subscription.' } },
  { '@type': 'Question', name: 'I feel out of place in Denver\'s outdoor culture. Can listeners understand this?', acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. The cultural mismatch of Indian sensibility in an outdoorsy, hiking-and-skiing city — where the default bonding activity requires equipment you don\'t own and a physical culture you didn\'t grow up with — is something listeners can hold without judgment.' } },
] }

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
  { '@type': 'ListItem', position: 2, name: 'NRI Support', item: 'https://www.leanon.app/nri-support' },
  { '@type': 'ListItem', position: 3, name: 'Indians in Denver', item: 'https://www.leanon.app/indians-in-denver' },
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

export default function IndiansInDenverPage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>
      <nav className="nav"><a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a><a href="https://www.leanon.app/browse"><button className="btn-nav">Find a listener</button></a></nav>
      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>&#x203A;</span><a href="/nri-support">NRI Support</a><span>&#x203A;</span><span style={{ color: 'var(--navy)' }}>Indians in Denver</span></nav>
        <div className="hero">
          <p className="badge">Indians in Denver &middot; Colorado &middot; Mile High City</p>
          <h1>5,280 feet above sea level. <em>Feeling it in more ways than one.</em></h1>
          <p className="lead">Denver&rsquo;s Indian community is growing — tech workers, medical professionals, students at CU Denver and DU. The city is beautiful and the lifestyle is appealing on paper. But the smaller Indian community, the outdoor-focused culture, and the altitude that genuinely affects your mood in the first year all compound the usual NRI loneliness. Talk to someone who gets it. First 5 minutes free.</p>
          <a href="https://www.leanon.app/browse" className="cta-hero">Talk to someone now &rarr;</a>
        </div>

        <div className="section">
          <h2>Denver&rsquo;s Indian Community: Small, Growing, and Spread Out</h2>
          <p>Denver&rsquo;s Indian community is concentrated in the tech sector — Oracle, Lockheed Martin, Arrow Electronics, and a growing startup scene — and the medical world around UCHealth and Children&rsquo;s Hospital Colorado. The suburbs of Aurora and Centennial have the largest Indian residential populations. Greenwood Village and the Denver Tech Center employ thousands of Indian professionals. The University of Denver and CU Denver have modest Indian student communities.</p>
          <p>The Indian community infrastructure in Denver is present but thinner than in larger metros. There are temples and Indian grocery stores and cultural events. But the critical mass that makes Indian community feel effortless — the accidental meetings, the deep bench of people who just understand — is harder to find in Denver than in New Jersey or the Bay Area. You have to work harder to maintain Indian social connection, and many Indians in Denver describe feeling more isolated than they expected in such an outwardly welcoming city.</p>
          <p>LeanOn listeners are based in India, available without appointment, and understand the Denver Indian experience. First 5 minutes free.</p>
        </div>

        <div className="section">
          <h2>The Outdoor Culture Mismatch</h2>
          <p>Denver has a very particular cultural identity built around the outdoors — hiking, skiing, mountain biking, camping. These activities are the social glue of the city. The way Indians in New Jersey bond over cricket and potlucks and Diwali, Denverites bond over 14er hikes and ski passes. For Indian immigrants who didn&rsquo;t grow up with these activities, this creates a real social gap. You are not opposed to nature — you are simply not from a culture that treats REI membership as a personality trait.</p>
          <p>The Indian engineer at a Denver tech company whose colleagues talk about their weekend ski trips, and who spends that energy wondering whether they&rsquo;ll ever feel like they belong here. The Indian medical professional who moved to Colorado for the quality of life and finds that the quality of life requires gear, skills, and a social fluency they don&rsquo;t have. The cultural mismatch is not about personality — it is structural. LeanOn exists for exactly this conversation.</p>
          <p>Denver (MST) is 12.5 hours behind IST. 7am Denver = 7:30pm India. Before your morning, Indian listeners are available. From ₹160.</p>
        </div>

        <div className="section">
          <h2>The Altitude Is Real (And It Affects Your Mood)</h2>
          <p>High altitude genuinely affects mood. Denver at 5,280 feet — and the Front Range at higher elevations — has well-documented effects on newcomers: lower oxygen availability, disrupted sleep in the first months, and a baseline fatigue that takes time to adjust to. Research suggests altitude can affect serotonin regulation, which may worsen low mood in people already predisposed. For Indian immigrants who are already navigating the emotional weight of transplant loneliness, the altitude adds a physiological layer that is often invisible and unacknowledged.</p>
          <p>If you moved to Denver and felt inexplicably flat or anxious for longer than you expected, you are not imagining it — and it is not just homesickness. Talking about it with someone who understands the full picture — the altitude, the transplant experience, the cultural mismatch, the smaller Indian community — is what LeanOn is for. No appointment needed.</p>
        </div>

        <div className="section"><h2>Frequently Asked Questions</h2>{faqs.map((f, i) => (<div className="faq-item" key={i}><p className="faq-q">{f.name}</p><p className="faq-a">{f.acceptedAnswer.text}</p></div>))}</div>
        <div className="cta-card"><h2>Mile High City. The loneliness is real at any altitude.</h2><p>Real Indian peer listener. Understands the Denver Indian experience. Anonymous. First 5 minutes free. From ₹160.</p><a href="https://www.leanon.app/browse" className="btn-cta">Find a listener &rarr;</a></div>
        <div className="section"><h2>You Might Also Find This Helpful</h2><div className="related">
          <a href="/nri-support">NRI support &rarr;</a>
          <a href="/nri-loneliness-usa">NRI loneliness USA &rarr;</a>
          <a href="/nri-homesick">NRI homesickness &rarr;</a>
          <a href="/nri-anxiety-abroad">NRI anxiety abroad &rarr;</a>
        </div></div>
        <div className="crisis"><strong>In a crisis?</strong> NIMHANS: 080-46110007 &nbsp;&middot;&nbsp; Tele-MANAS: 14416 &nbsp;&middot;&nbsp; Both free, 24/7.</div>
      </div>
    </>
  )
}
