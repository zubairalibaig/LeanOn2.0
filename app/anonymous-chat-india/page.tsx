import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Anonymous Chat India — Talk to a Real Person, No Name Needed | LeanOn',
  description: 'Anonymous chat with a real peer listener in India — no account name, no face, no history. Just talk. ₹160/session, first 5 min free.',
  keywords: 'anonymous chat india, anonymous chat with real person india, anonymous online chat india, talk to stranger anonymously india, anonymous peer support india, private chat india no name, anonymous emotional support india, talk anonymously online india, anonymous listener india, private anonymous chat app india',
  alternates: { canonical: 'https://www.leanon.app/anonymous-chat-india', languages: { 'en-IN': 'https://www.leanon.app/anonymous-chat-india' } },
  openGraph: {
    title: 'Anonymous Chat India — Talk to a Real Person, No Name Needed | LeanOn',
    description: 'Anonymous chat with a real peer listener in India — no account name, no face, no history. Just talk. ₹160/session, first 5 min free.',
    url: 'https://www.leanon.app/anonymous-chat-india',
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
      name: 'Do I need to use my real name on LeanOn?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. You can use any first name or alias you choose. LeanOn only needs your phone number for account security — your listener never sees it. Your profile on the platform shows only the name you provide, and you are free to make that anything you like. There is no verification of identity for seekers.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will the listener know who I am?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Listeners see only the name or alias you enter when you start a session — nothing else. Your phone number, city, and any account details are not visible to them. Sessions are contained within the platform; your listener has no way to connect your session to your real-world identity.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is anonymous chat on LeanOn safe?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. LeanOn\'s listeners are screened, trained in active listening, and reviewed by the platform before going live. They sign confidentiality agreements and are held to strict conduct standards. Unlike random chat apps where you have no idea who you are speaking to, every listener on LeanOn is a verified real person. Your anonymity is protected, and the person on the other end has been vetted.',
      },
    },
    {
      '@type': 'Question',
      name: 'What can I talk about anonymously?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Anything that is weighing on you — relationship tension you cannot discuss with your partner, family conflicts, work stress, loneliness, anxiety, grief, self-doubt, or things you have never told anyone. Anonymous chat is particularly useful for topics you cannot bring up with people in your life because of the social consequences. The session ends when the call does. What you share stays there.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Anonymous Chat India', item: 'https://www.leanon.app/anonymous-chat-india' },
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
  .badge{display:inline-block;background:var(--light);border:1.5px solid var(--border);color:var(--teal);font-size:12px;font-weight:800;padding:5px 14px;border-radius:20px;letter-spacing:0.05em;margin-bottom:16px;}
  .lead{font-size:17px;color:var(--gray);line-height:1.78;font-weight:500;max-width:640px;}
  .section{background:white;border-radius:24px;padding:32px;margin-bottom:24px;border:1.5px solid var(--border);}
  .section h2{font-size:22px;font-weight:800;color:var(--navy);margin-bottom:16px;}
  .section h3{font-size:17px;font-weight:800;color:var(--navy);margin-bottom:8px;margin-top:20px;}
  .section h3:first-of-type{margin-top:0;}
  .section p{font-size:15px;color:#3A6070;line-height:1.80;margin-bottom:14px;}
  .section p:last-child{margin-bottom:0;}
  .section ul{padding-left:20px;margin-bottom:14px;}
  .section ul li{font-size:15px;color:#3A6070;line-height:1.80;margin-bottom:6px;}
  .cards-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:16px;margin-bottom:24px;}
  .card{background:white;border:1.5px solid var(--border);border-radius:20px;padding:24px;}
  .card-icon{font-size:28px;margin-bottom:12px;}
  .card-title{font-size:15px;font-weight:800;color:var(--navy);margin-bottom:6px;}
  .card-body{font-size:13px;color:var(--gray);line-height:1.65;font-weight:500;}
  .scenario-list{display:flex;flex-direction:column;gap:12px;margin-bottom:0;}
  .scenario{background:var(--light);border-left:4px solid var(--teal);border-radius:0 12px 12px 0;padding:14px 18px;font-size:15px;color:var(--navy);font-weight:600;line-height:1.55;}
  .privacy-list{display:flex;flex-direction:column;gap:10px;margin-top:4px;}
  .privacy-item{display:flex;align-items:flex-start;gap:12px;background:var(--light);border-radius:14px;padding:14px 18px;}
  .privacy-check{font-size:18px;flex-shrink:0;margin-top:2px;}
  .privacy-text{font-size:14px;color:#3A6070;line-height:1.65;font-weight:600;}
  .compare-table{width:100%;border-collapse:collapse;font-size:14px;margin-top:4px;}
  .compare-table th{text-align:left;padding:10px 14px;font-weight:800;font-size:13px;color:var(--gray);text-transform:uppercase;letter-spacing:0.06em;border-bottom:2px solid var(--border);}
  .compare-table td{padding:12px 14px;border-bottom:1.5px solid var(--border);color:#3A6070;font-weight:500;line-height:1.55;vertical-align:top;}
  .compare-table tr:last-child td{border-bottom:none;}
  .compare-table td:first-child{font-weight:700;color:var(--navy);}
  .good{color:#1A8FA0;font-weight:700;}
  .bad{color:#C06030;font-weight:700;}
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
  .hero-cta{margin-top:28px;display:flex;gap:12px;flex-wrap:wrap;}
`

export default function AnonymousChatIndiaPage() {
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
          <span style={{color:'var(--navy)'}}>Anonymous Chat India</span>
        </nav>

        <div style={{background:'#EBF5FB',borderLeft:'4px solid #1A8FA0',borderRadius:'0 12px 12px 0',padding:'14px 18px',marginBottom:28,fontSize:14,color:'#0F4867',fontWeight:600,lineHeight:1.65}}>
          🆘 In crisis? Call <a href="tel:08046110007" style={{color:'#1A8FA0',fontWeight:800}}>NIMHANS 080-46110007</a> or <a href="tel:14416" style={{color:'#1A8FA0',fontWeight:800}}>Tele-MANAS 14416</a> (free · 24/7 · Govt of India)
        </div>

        {/* Hero */}
        <div className="hero">
          <p className="tag">Anonymous · Private · Real People</p>
          <div className="badge">No Name. No Face. No History.</div>
          <h1>Say What You Can&apos;t Say to <em>Anyone You Know</em></h1>
          <p className="lead">Some things can&apos;t go to your partner, your best friend, or your parents. On LeanOn, you talk to a real peer listener who has no connection to your life — and what you say stays in the session. Anonymous chat with a trained human, not a stranger from the internet.</p>
          <div className="hero-cta">
            <a href="/auth"><button className="btn-primary" style={{fontFamily:'Nunito,sans-serif'}}>Chat anonymously — first 5 min free →</button></a>
            <a href="/browse"><button className="btn-secondary" style={{fontFamily:'Nunito,sans-serif',background:'var(--teal)',border:'none',boxShadow:'0 4px 16px rgba(26,143,160,0.25)'}}>Browse listeners →</button></a>
          </div>
        </div>

        {/* The relief of anonymity */}
        <div className="section">
          <h2>When You Cannot Tell Anyone You Know</h2>
          <p>There is a specific kind of tension that comes with having something you cannot say out loud — not to your partner because it involves them, not to your best friend because they will tell other people, not to your parents because they will panic or judge. The thought sits inside you, getting heavier.</p>
          <p>This is exactly what anonymous chat is for. The relief of saying it to someone who has no stake in your life, no shared history with the people you are talking about, and no way to carry it back into your world. The session ends. The conversation does not follow you.</p>
          <p>LeanOn is not a random chat app. The anonymity here is intentional — the platform is built around it. You are anonymous to your listener. What makes it different is that your listener is verified, trained, and real. You get the freedom of anonymity with the quality of a screened human being on the other end.</p>
        </div>

        {/* Why anonymity matters */}
        <div className="cards-grid">
          {[
            {
              icon: '🫥',
              title: 'No fear of being judged by people who know you',
              body: 'When you talk to someone who has no connection to your life, there are no social consequences. You can say the thing you have been holding back without worrying how it changes how someone sees you.',
            },
            {
              icon: '🔓',
              title: 'Freedom to say the hard stuff',
              body: 'Anonymity removes the self-censorship. The things you soften, qualify, or leave out entirely when talking to friends — you can say them here. Unfiltered, uncurated, exactly as they are.',
            },
            {
              icon: '🌐',
              title: 'No social consequences',
              body: 'Your words do not travel. Your listener will not run into your mother. They do not know your colleague. What you say on LeanOn has no path back into your social world.',
            },
            {
              icon: '📁',
              title: 'Stays in the session',
              body: 'Session content is not stored, shared, or used for any purpose outside the conversation. When the call ends, it ends. There is no record that gets forwarded, no notes that get filed.',
            },
          ].map((c, i) => (
            <div key={i} className="card">
              <div className="card-icon">{c.icon}</div>
              <div className="card-title">{c.title}</div>
              <p className="card-body">{c.body}</p>
            </div>
          ))}
        </div>

        {/* Anonymous doesn't mean low quality */}
        <div className="section">
          <h2>Anonymous Does Not Mean Low Quality</h2>

          <h3>Screened and Trained Listeners</h3>
          <p>Every listener on LeanOn goes through an application process, a background check, and training in active listening before they are approved. They are reviewed by the platform. You are not speaking to a random person from the internet — you are speaking to someone who has been vetted and is here because they want to support people, not for entertainment.</p>

          <h3>Reviewed, With Real Profiles</h3>
          <p>Listeners have real profiles with their lived experience, the topics they support, and their listener ratings from past sessions. Before you start a session, you can read about who you are going to speak to. Anonymity does not mean you are stepping into the unknown — you can make an informed choice about who to talk to.</p>

          <h3>Peer Experience, Not Random Opinion</h3>
          <p>LeanOn listeners are peer listeners — real people who have personally navigated the kinds of experiences seekers bring to sessions. When someone has lived through anxiety, grief, relationship difficulty, or loneliness themselves, their support carries a quality that random conversation cannot offer. This is what separates LeanOn from Omegle or any other &ldquo;talk to strangers&rdquo; product.</p>
        </div>

        {/* Comparison to random chat apps */}
        <div className="section">
          <h2>LeanOn vs Random Chat Apps</h2>
          <p>Omegle, Shagle, and their alternatives are built for entertainment. LeanOn is built for emotional support. Here is what the difference looks like in practice.</p>

          <table className="compare-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Random chat apps</th>
                <th>LeanOn</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Who you are speaking to</td>
                <td className="bad">Completely unknown — anyone</td>
                <td className="good">Screened, trained peer listener</td>
              </tr>
              <tr>
                <td>Purpose</td>
                <td className="bad">Entertainment, killing time</td>
                <td className="good">Emotional support, being heard</td>
              </tr>
              <tr>
                <td>Listener quality</td>
                <td className="bad">No vetting, no training</td>
                <td className="good">Active listening training + lived experience</td>
              </tr>
              <tr>
                <td>Your anonymity</td>
                <td className="bad">Anonymous to strangers — but no safety</td>
                <td className="good">Anonymous by design, with a safe platform</td>
              </tr>
              <tr>
                <td>Appropriate for</td>
                <td className="bad">Boredom, casual chat</td>
                <td className="good">Real emotional conversations, hard topics</td>
              </tr>
              <tr>
                <td>Safety and conduct</td>
                <td className="bad">Minimal moderation, frequent abuse</td>
                <td className="good">Conduct standards, listener accountability</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* What stays private */}
        <div className="section">
          <h2>What Stays Private on LeanOn</h2>
          <p>Here is exactly what your listener sees — and does not see — when you start a session.</p>

          <div className="privacy-list">
            <div className="privacy-item">
              <span className="privacy-check">✅</span>
              <span className="privacy-text"><strong>No real name required.</strong> You enter whatever first name or alias you like at signup. Your listener sees only that.</span>
            </div>
            <div className="privacy-item">
              <span className="privacy-check">✅</span>
              <span className="privacy-text"><strong>Phone number not shown to listener.</strong> Your phone is used for account security only — it is never visible to the person you speak to.</span>
            </div>
            <div className="privacy-item">
              <span className="privacy-check">✅</span>
              <span className="privacy-text"><strong>No profile photo required.</strong> Seekers do not have public-facing profiles. You are a name and a voice or text — nothing more.</span>
            </div>
            <div className="privacy-item">
              <span className="privacy-check">✅</span>
              <span className="privacy-text"><strong>Session content not shared.</strong> Conversations are private to the session. There is no record sent anywhere, no notes shared with third parties.</span>
            </div>
            <div className="privacy-item">
              <span className="privacy-check">✅</span>
              <span className="privacy-text"><strong>No social or professional consequences.</strong> Your listener is a stranger with no connection to your social world. What you say has no path back to the people in your life.</span>
            </div>
          </div>
        </div>

        {/* Scenarios */}
        <div className="section">
          <h2>What People Say Anonymously on LeanOn</h2>
          <p>These are the kinds of things that are hardest to say to anyone you know — and easiest to say to someone you will never meet in your real life.</p>
          <div className="scenario-list">
            <div className="scenario">&ldquo;I am unhappy in my marriage and I have never said that to anyone out loud.&rdquo;</div>
            <div className="scenario">&ldquo;I resent my parents and I feel so guilty about it. I can&apos;t tell anyone in my family.&rdquo;</div>
            <div className="scenario">&ldquo;I have been pretending to be fine at work for months. I am completely falling apart inside.&rdquo;</div>
            <div className="scenario">&ldquo;I made a mistake I am ashamed of and I need to say it to someone — anyone — without it affecting how they see me.&rdquo;</div>
            <div className="scenario">&ldquo;I feel lonely even though I have people around me, and I can&apos;t admit that to my friends.&rdquo;</div>
          </div>
        </div>

        {/* CTA */}
        <div className="cta-card">
          <h2>Say It to Someone Who Will Never Tell</h2>
          <p>Your first 5 minutes are free. Use a name, use an alias — it does not matter. A real, trained listener is on the other side. What you say stays in the session.</p>
          <div className="cta-btns">
            <a href="/auth"><button className="btn-primary">Chat anonymously — first 5 min free →</button></a>
            <a href="/browse"><button className="btn-secondary">Browse listeners →</button></a>
          </div>
        </div>

        {/* FAQ */}
        <div className="section">
          <h2>Frequently Asked Questions</h2>
          {faqSchema.mainEntity.map((item, i) => (
            <div key={i} className="faq-item">
              <div className="faq-q">{item.name}</div>
              <div className="faq-a">{item.acceptedAnswer.text}</div>
            </div>
          ))}
        </div>

        {/* Related */}
        <div className="section">
          <h2>Related Pages</h2>
          <p>More ways to find the right kind of support on LeanOn.</p>
          <div className="related">
            <a href="/chat-with-real-person" className="related-link">Chat with Real Person</a>
            <a href="/talk-about-my-problems-online" className="related-link">Talk About My Problems</a>
            <a href="/need-to-vent-right-now" className="related-link">Need to Vent</a>
            <a href="/is-leanon-safe" className="related-link">Is LeanOn Safe?</a>
            <a href="/browse" className="related-link">Browse All Listeners</a>
            <a href="/how-leanon-works" className="related-link">How LeanOn Works</a>
          </div>
        </div>

        <p style={{textAlign:'center',fontSize:'13px',color:'var(--gray)',fontWeight:600,marginBottom:'40px'}}>
          Available across India: <a href="/bengaluru" style={{color:'var(--teal)'}}>Bengaluru</a> · <a href="/mumbai" style={{color:'var(--teal)'}}>Mumbai</a> · <a href="/delhi" style={{color:'var(--teal)'}}>Delhi</a> · <a href="/chennai" style={{color:'var(--teal)'}}>Chennai</a> · <a href="/hyderabad" style={{color:'var(--teal)'}}>Hyderabad</a> · <a href="/pune" style={{color:'var(--teal)'}}>Pune</a> · <a href="/kolkata" style={{color:'var(--teal)'}}>Kolkata</a>
        </p>
      </div>
    </>
  )
}
