import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Founder Burnout Support India | Talk to Someone Who Gets Startup Stress | LeanOn',
  description: 'Startup stress, fundraising rejection, imposter syndrome as a founder? Connect with peer listeners who have lived through founder burnout. First 5 minutes free.',
  alternates: { canonical: 'https://www.leanon.app/support/founder-burnout' },
  openGraph: {
    title: 'Founder Burnout Support — LeanOn',
    description: 'Peer support for founders navigating startup stress, team conflicts, fundraising rejection, and imposter syndrome. Real conversations, real relief.',
    url: 'https://www.leanon.app/support/founder-burnout',
    siteName: 'LeanOn',
    type: 'article',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is founder burnout and how do I know if I have it?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Founder burnout is a state of physical and emotional exhaustion caused by prolonged startup stress. Signs include chronic fatigue even after rest, loss of passion for what you built, cynicism about your work and team, declining decision-making ability, neglected personal relationships, and difficulty experiencing positive emotions. If building your company feels joyless and you feel depleted rather than energised, burnout is likely.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why do founders in India find it hard to talk about mental health?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Several factors make this particularly difficult: the culture of projecting confidence to investors, teams, and the ecosystem; social media that glorifies hustle and hides struggle; the belief that vulnerability signals weakness or that admitting difficulties will affect fundraising; and the isolation of the founder role itself. LeanOn offers a private space outside the startup ecosystem where founders can be completely honest.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I deal with fundraising rejection without losing my mind?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Fundraising rejection is one of the most demoralising experiences a founder faces — especially when it comes after months of pitching. The key is to separate rejection of the pitch from rejection of you as a person, maintain perspective through relationships outside the startup world, and have at least one person you can vent to honestly. LeanOn listeners who have been through fundraising rounds can help you process rejection without the pressure of maintaining a front.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is imposter syndrome normal for founders?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Extremely normal. Research consistently shows that imposter syndrome is particularly prevalent among high-achievers, entrepreneurs, and first-time founders. The combination of high stakes, uncertainty, and performing confidence for investors and team while privately doubting yourself creates fertile ground for imposter feelings. You are not alone in this.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can peer support replace founder therapy or coaching?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No — peer support is a complement, not a replacement. A good founder therapist or executive coach can provide structured clinical or professional support. LeanOn peer support offers something different: on-demand conversations with people who have lived through founder burnout themselves, available when you need to vent at 11 PM after a bad board call, not just in your next scheduled session.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Support', item: 'https://www.leanon.app/support' },
    { '@type': 'ListItem', position: 3, name: 'Founder Burnout', item: 'https://www.leanon.app/support/founder-burnout' },
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
  .stat-row{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:16px;margin-bottom:16px;}
  .stat-box{background:var(--light);border:1.5px solid var(--border);border-radius:16px;padding:18px;text-align:center;}
  .stat-num{font-size:28px;font-weight:900;color:var(--teal);margin-bottom:4px;}
  .stat-label{font-size:12px;font-weight:700;color:var(--gray);line-height:1.4;}
  .listeners-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:16px;margin-bottom:24px;}
  .listener-card{background:white;border:1.5px solid var(--border);border-radius:20px;padding:20px;text-align:center;}
  .listener-avatar{width:60px;height:60px;border-radius:50%;background:var(--light);display:flex;align-items:center;justify-content:center;font-size:28px;margin:0 auto 12px;}
  .listener-name{font-size:15px;font-weight:800;color:var(--navy);margin-bottom:4px;}
  .listener-tag{font-size:12px;font-weight:700;color:var(--teal);background:var(--light);padding:4px 10px;border-radius:20px;display:inline-block;margin-bottom:8px;}
  .listener-bio{font-size:13px;color:var(--gray);line-height:1.6;font-weight:500;}
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

export default function FounderBurnoutSupportPage() {
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
          <a href="/support">Support</a><span>›</span>
          <span style={{color:'var(--navy)'}}>Founder Burnout</span>
        </nav>

        <div className="hero">
          <p className="tag">Peer Support · Founder Burnout</p>
          <h1>Building a Startup Is Hard. <em>Burning Out Is Harder.</em></h1>
          <p className="lead">Behind every founder story shared on LinkedIn is a human being who is often exhausted, scared, and carrying far more than they let on. LeanOn connects you with peer listeners who have been through startup stress — and are honest about what it actually felt like.</p>
        </div>

        <div className="section">
          <h2>The Hidden Mental Health Crisis in India&apos;s Startup Ecosystem</h2>

          <div className="stat-row">
            <div className="stat-box"><div className="stat-num">72%</div><div className="stat-label">of founders report mental health challenges</div></div>
            <div className="stat-box"><div className="stat-num">30%</div><div className="stat-label">experience depression during the founder journey</div></div>
            <div className="stat-box"><div className="stat-num">1 in 3</div><div className="stat-label">founders have experienced anxiety disorders</div></div>
          </div>

          <p>India&apos;s startup ecosystem has produced extraordinary companies. It has also produced an epidemic of founder burnout that nobody talks about publicly. The pressure to project confidence to investors, radiate energy to teams, and maintain a polished public narrative leaves founders with no safe outlet for honest conversation.</p>

          <h3>Startup Stress: The Daily Reality</h3>
          <p>Running a startup means living in permanent uncertainty. Runway that could end in months, a product that is not quite there yet, a team that depends on you, investors who need updates, and competitors who keep moving. The stress is not occasional — it is structural, constant, and exhausting in a way that is hard to explain to anyone who has not been there.</p>

          <h3>Fundraising Rejection</h3>
          <p>Getting rejected by 40 investors in a row, each one with a slightly different reason, is a particular form of psychological torture. The founders who stay standing through fundraising season develop a kind of armour — which also prevents them from processing the genuine toll that rejection takes. Every &quot;no&quot; is a small grief, and they accumulate.</p>

          <h3>Team Conflicts</h3>
          <p>Managing a team while being their biggest cheerleader, holding people accountable, making hard calls about performance, and maintaining culture — all while being the most stressed person in the room — is an enormous emotional labour that founders rarely acknowledge needing support with.</p>

          <h3>Co-Founder Conflict</h3>
          <p>Co-founder relationships are among the most intense professional relationships that exist. When they go wrong — through misaligned visions, unequal effort, communication breakdown, or simply growing apart — the impact is devastating both professionally and personally. Many co-founder splits feel like divorces.</p>

          <h3>Imposter Syndrome at Scale</h3>
          <p>As your startup grows, imposter syndrome often grows with it. The gap between how you present yourself to the world and how uncertain you feel internally can become unbearable. Many founders describe feeling like they are one bad board meeting away from being &quot;found out.&quot;</p>
        </div>

        <div className="section">
          <h2>How LeanOn Helps Founders</h2>

          <h3>Completely Outside Your Ecosystem</h3>
          <p>LeanOn listeners are not investors, advisors, or ecosystem contacts. There is no reputational risk. No version of what you say will reach your investors or team. You can be completely honest about your fear, your doubt, your exhaustion — without any professional consequences.</p>

          <h3>Founders Who Have Been Through It</h3>
          <p>Some of our listeners have been through the specific experience of running a startup — the failed fundraise, the key hire who quit, the product pivot that felt like starting over. They understand the context without needing it explained.</p>

          <h3>Available During Startup Hours</h3>
          <p>Founder stress peaks at unusual times — Sunday evenings before a Monday board call, 11 PM after a difficult investor meeting, the hour after you let someone go. LeanOn is available whenever you need to talk.</p>

          <h3>Not Advice — Presence</h3>
          <p>Founders get unsolicited advice constantly. LeanOn listeners know the difference between helping someone think through a problem and the far more valuable work of simply being fully present while someone else articulates what they are actually feeling.</p>
        </div>

        <h2 style={{fontSize:'20px',fontWeight:800,color:'var(--navy)',marginBottom:'16px'}}>Listeners Who Understand Startup Stress</h2>
        <div className="listeners-grid">
          {[
            {
              emoji: '🚀',
              name: 'Kiran',
              tag: 'Startup Burnout',
              bio: 'Built and shut down a startup after 3 years. Knows what burnout and failure feel like from the inside — and what recovery looks like.'
            },
            {
              emoji: '💰',
              name: 'Rohan',
              tag: 'Fundraising Rejection',
              bio: 'Got 55 investor rejections before closing a round. Understands the psychological grind and how to stay mentally intact.'
            },
            {
              emoji: '🧠',
              name: 'Divya',
              tag: 'Imposter Syndrome',
              bio: 'Led a high-growth team while privately struggling with imposter syndrome. Found effective ways through — and wants to help other founders.'
            },
          ].map((l, i) => (
            <div key={i} className="listener-card">
              <div className="listener-avatar">{l.emoji}</div>
              <div className="listener-name">{l.name}</div>
              <div className="listener-tag">{l.tag}</div>
              <p className="listener-bio">{l.bio}</p>
            </div>
          ))}
        </div>

        <div className="cta-card">
          <h2>You Are Allowed to Not Be Okay</h2>
          <p>Talk to someone who has been in the trenches of building a startup and came out the other side. First 5 minutes free.</p>
          <div className="cta-btns">
            <a href="/browse?topic=founder-burnout"><button className="btn-primary">Find a Founder Listener</button></a>
            <a href="/auth"><button className="btn-secondary">Create Free Account</button></a>
          </div>
        </div>

        <div className="section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <div className="faq-q">What is founder burnout and how do I know if I have it?</div>
            <div className="faq-a">Founder burnout is a state of physical and emotional exhaustion caused by prolonged startup stress. Signs include chronic fatigue, loss of passion for your work, cynicism about your team, declining decision-making ability, neglected personal relationships, and difficulty experiencing positive emotions. If building feels joyless and you feel depleted, burnout is likely.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Why do founders in India find it hard to talk about mental health?</div>
            <div className="faq-a">The culture of projecting confidence to investors, teams, and the ecosystem makes this particularly difficult. Social media glorifies hustle and hides struggle. Many founders believe vulnerability signals weakness. LeanOn offers a private space outside the startup ecosystem where founders can be completely honest.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">How do I deal with fundraising rejection without losing my mind?</div>
            <div className="faq-a">The key is to separate rejection of the pitch from rejection of you as a person, maintain perspective through relationships outside the startup world, and have at least one person you can vent to honestly. LeanOn listeners who have been through fundraising rounds can help you process rejection without maintaining a front.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Is imposter syndrome normal for founders?</div>
            <div className="faq-a">Extremely normal. Research consistently shows that imposter syndrome is particularly prevalent among high-achievers and first-time founders. The combination of high stakes, uncertainty, and performing confidence while privately doubting yourself creates fertile ground for imposter feelings. You are not alone in this.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Can peer support replace founder therapy or coaching?</div>
            <div className="faq-a">No — peer support is a complement, not a replacement. LeanOn offers something different: on-demand conversations with people who have lived through founder burnout themselves, available when you need to vent after a bad board call, not just in your next scheduled session.</div>
          </div>
        </div>

        <div className="section">
          <h2>Related Support Topics</h2>
          <p>Founder burnout often overlaps with other challenges. Explore more peer support on LeanOn:</p>
          <div className="related">
            <a href="/support/anxiety" className="related-link">Anxiety</a>
            <a href="/support/loneliness" className="related-link">Loneliness</a>
            <a href="/support/career-confusion" className="related-link">Career Confusion</a>
            <a href="/support/grief" className="related-link">Grief</a>
            <a href="/support/emotional-support" className="related-link">Emotional Support</a>
            <a href="/support/anonymous-support" className="related-link">Anonymous Support</a>
            <a href="/browse" className="related-link">Browse All Listeners</a>
          </div>
        </div>

        {/* People Also Search For */}
        <div className="section">
          <h2>People Also Search For</h2>
          <p>If you&apos;re looking for founder burnout support, these pages may also help:</p>
          <div className="related">
            <a href="/blog/burnout-recovery-india" className="related-link">Burnout recovery</a>
            <a href="/blog/emotional-burnout" className="related-link">Emotional burnout</a>
            <a href="/blog/startup-founder-burnout-stories-and-recovery" className="related-link">Founder burnout stories</a>
            <a href="/blog/peer-support-vs-therapy-india" className="related-link">Peer support vs therapy</a>
            <a href="/blog/what-does-lean-on-mean" className="related-link">What does &quot;lean on&quot; mean?</a>
            <a href="/blog/mens-mental-health-talking-is-strength" className="related-link">Men&apos;s mental health</a>
            <a href="/bengaluru" className="related-link">Peer support Bengaluru</a>
            <a href="/mumbai" className="related-link">Peer support Mumbai</a>
            <a href="/delhi" className="related-link">Peer support Delhi</a>
          </div>
        </div>

        {/* City availability */}
        <p style={{textAlign:'center',fontSize:'13px',color:'var(--gray)',fontWeight:600,marginBottom:'40px'}}>
          Available across India: <a href="/bengaluru" style={{color:'var(--teal)'}}>Bengaluru</a> · <a href="/mumbai" style={{color:'var(--teal)'}}>Mumbai</a> · <a href="/delhi" style={{color:'var(--teal)'}}>Delhi</a> · Chennai · <a href="/hyderabad" style={{color:'var(--teal)'}}>Hyderabad</a> · Pune · Kolkata
        </p>
      </div>
    </>
  )
}
