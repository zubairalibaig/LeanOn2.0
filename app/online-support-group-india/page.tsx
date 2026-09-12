import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Online Support Group India — 1:1 Peer Support That Actually Connects | LeanOn',
  description: 'Online support groups can feel performative. LeanOn offers 1:1 peer conversations — private, focused, real. From ₹160.',
  keywords: ['online support group india', 'peer support group india', 'community support india', 'support group mental health india', 'group therapy alternative india', 'online community support india'],
  alternates: { canonical: 'https://www.leanon.app/online-support-group-india', languages: { 'en-IN': 'https://www.leanon.app/online-support-group-india' } },
  openGraph: {
    title: 'Online Support Group India — 1:1 Peer Support That Actually Connects | LeanOn',
    description: 'Online support groups can feel performative. LeanOn offers 1:1 peer conversations — private, focused, real. From ₹160.',
    url: 'https://www.leanon.app/online-support-group-india',
    siteName: 'LeanOn',
    type: 'website',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a peer support group?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A peer support group is a group of people who come together around a shared experience — grief, addiction recovery, anxiety, loneliness — to support each other through conversation. They can be helpful for reducing isolation and building community, but they also have limitations: unequal airtime, group dynamics, performance anxiety, and the challenge of finding the right group for your specific experience.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is LeanOn a support group?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. LeanOn is 1:1 peer support — a private conversation between you and one listener. It is not a group format. This means the session is entirely focused on you, without the group dynamics or the social performance that can make group support feel uncomfortable.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why 1:1 instead of group?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For many people, 1:1 support is more effective than group support because it is focused, private, and does not require managing group dynamics while also managing your own emotional state. You get the full session — not a fraction of it. And you can say things you would not say in a room of strangers.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it anonymous?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. First name only, no photo, no social profile. Unlike a support group where multiple people know your story, a LeanOn session is between you and one listener only — who signs a confidentiality agreement.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is this different from group therapy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Group therapy is a structured clinical intervention led by a licensed therapist for a group of people. LeanOn is 1:1 peer support — not therapy, not group, not clinical. It is a private human conversation with someone who has relevant lived experience.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Online Support Group India', item: 'https://www.leanon.app/online-support-group-india' },
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
  .breadcrumb a:hover{color:var(--teal);}
  .hero{margin-bottom:48px;}
  .tag{font-size:12px;font-weight:800;color:var(--teal);text-transform:uppercase;letter-spacing:0.1em;margin-bottom:12px;}
  h1{font-size:clamp(28px,6vw,44px);font-weight:900;color:var(--navy);line-height:1.15;margin-bottom:16px;}
  h1 em{color:var(--orange);font-style:normal;}
  .lead{font-size:17px;color:var(--gray);line-height:1.78;font-weight:500;max-width:640px;}
  .section{background:white;border-radius:24px;padding:32px;margin-bottom:24px;border:1.5px solid var(--border);}
  .section h2{font-size:22px;font-weight:800;color:var(--navy);margin-bottom:16px;}
  .section h3{font-size:17px;font-weight:800;color:var(--navy);margin-bottom:8px;margin-top:20px;}
  .section h3:first-of-type{margin-top:0;}
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
  .cta-btns{display:flex;gap:12px;justify-content:center;flex-wrap:wrap;}
  .btn-primary{background:var(--orange);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:15px;padding:14px 28px;border-radius:50px;border:none;cursor:pointer;box-shadow:0 4px 20px rgba(255,153,51,0.35);}
  .btn-secondary{background:rgba(255,255,255,0.12);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:15px;padding:14px 28px;border-radius:50px;border:1.5px solid rgba(255,255,255,0.3);cursor:pointer;}
  .related{display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:12px;margin-top:8px;}
  .related-link{background:var(--light);border:1.5px solid var(--border);border-radius:16px;padding:14px 16px;font-size:14px;font-weight:700;color:var(--navy);transition:border-color 0.2s;}
  .related-link:hover{border-color:var(--teal);color:var(--teal);}
`

export default function OnlineSupportGroupIndiaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>

      <nav className="nav">
        <a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a>
        <a href="/auth"><button className="btn-nav">Open app</button></a>
      </nav>

      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a><span>›</span>
          <span style={{color:'var(--navy)'}}>Online Support Group India</span>
        </nav>

        <div className="hero">
          <p className="tag">1:1 Peer Support · India · From ₹160</p>
          <h1>Support groups have waiting lists, awkward silences, and strangers you&apos;ll see again. <em>LeanOn is different.</em></h1>
          <p className="lead">1:1 peer support — private, focused, just you and one listener. No group dynamics, no performance, no waiting your turn. Your full session, yours entirely.</p>
        </div>

        <div className="section">
          <h2>The Problem with Group Support</h2>
          <ul>
            <li><strong>Performance anxiety</strong> — the pressure to say the right thing in front of multiple people</li>
            <li><strong>Fear of judgment</strong> — you cannot be fully honest when you will see these people again</li>
            <li><strong>Unequal airtime</strong> — you might get 5 minutes of a 60-minute session</li>
            <li><strong>Group dynamics</strong> — managing other people&apos;s reactions while managing your own</li>
          </ul>
          <p>For many people, 1:1 support is more effective because none of these constraints apply.</p>
        </div>

        <div className="section">
          <h2>Why 1:1 Peer Support Works</h2>
          <ul>
            <li><strong>Focused entirely on you</strong> — the full session is yours</li>
            <li><strong>Anonymous</strong> — the listener does not know your last name, your employer, or your social circle</li>
            <li><strong>Deeper conversation</strong> — no group dynamics to navigate, just honest dialogue</li>
            <li><strong>Your choice of listener</strong> — you pick someone whose background feels relevant, not whoever shows up</li>
          </ul>
        </div>

        <div className="section">
          <h2>The Community Aspect</h2>
          <p>LeanOn is not a group — but it is a community. Many thousands of people using LeanOn are going through similar things. You are not alone in what you are carrying. Your session is private, but the experience of being heard by a peer who has been there connects you to something larger.</p>
          <p>That sense of &quot;I am not the only one&quot; is the core of what support groups offer — and it is available through 1:1 peer connection as well as through group formats.</p>
        </div>

        <div className="cta-card">
          <h2>Your Session. Your Listener. Your Space.</h2>
          <p>1:1 peer support from ₹160. Private, anonymous, available now.</p>
          <div className="cta-btns">
            <a href="/browse"><button className="btn-primary">Browse listeners →</button></a>
            <a href="/auth"><button className="btn-secondary">Join LeanOn →</button></a>
          </div>
        </div>

        <div className="section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <div className="faq-q">What is a peer support group?</div>
            <div className="faq-a">A peer support group is a group of people who come together around a shared experience to support each other. They can be helpful but have limitations: unequal airtime, group dynamics, and performance anxiety.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Is LeanOn a support group?</div>
            <div className="faq-a">No. LeanOn is 1:1 peer support — a private conversation between you and one listener. It is not a group format. The session is entirely focused on you.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Why 1:1 instead of group?</div>
            <div className="faq-a">For many people, 1:1 support is more effective because it is focused, private, and does not require managing group dynamics. You get the full session — not a fraction of it. And you can say things you would not say in a room of strangers.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Is it anonymous?</div>
            <div className="faq-a">Yes. First name only, no photo, no social profile. Unlike a support group where multiple people know your story, a LeanOn session is between you and one listener only.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">How is this different from group therapy?</div>
            <div className="faq-a">Group therapy is a structured clinical intervention led by a licensed therapist. LeanOn is 1:1 peer support — not therapy, not group, not clinical. A private human conversation with someone who has relevant lived experience.</div>
          </div>
        </div>

        <div className="section">
          <h2>Related Pages</h2>
          <div className="related">
            <a href="/browse" className="related-link">Browse Listeners</a>
            <a href="/peer-support" className="related-link">What Is Peer Support</a>
            <a href="/peer-support-online-india" className="related-link">Peer Support Online</a>
            <a href="/empathy-friend-india" className="related-link">Empathy Friend India</a>
            <a href="/loneliness-support-india" className="related-link">Loneliness Support</a>
            <a href="/online-emotional-support-india" className="related-link">Online Emotional Support</a>
          </div>
        </div>
      </div>
    </>
  )
}
