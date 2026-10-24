import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Anonymous Emotional Support India | LeanOn Peer Listeners',
  description: 'Private emotional support from screened peer listeners — they never see your number. No appointment needed.',
  alternates: { canonical: 'https://www.leanon.app/support/anonymous-support', languages: { 'en-IN': 'https://www.leanon.app/support/anonymous-support' } },
  openGraph: {
    title: 'Anonymous Emotional Support India | LeanOn Peer Listeners',
    description: 'Private emotional support from screened peer listeners — they never see your number. No appointment needed.',
    url: 'https://www.leanon.app/support/anonymous-support',
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
      name: 'Is LeanOn anonymous?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Anonymous to your listener, not to LeanOn. You sign in with a verified phone number, but the listener sees only the name you choose — never your number. Voice calls are not recorded. Text messages are stored securely and may be reviewed by authorised LeanOn administrators if a session is reported or flagged for safety. You can use a pseudonym.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why do people seek anonymous support in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In India especially, the stigma around emotional struggles is real and can carry social, professional, and family consequences. People fear being judged by family, colleagues, or their community. Talking to someone outside your circle, who never sees your number, makes it easier to be honest.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does anonymous support actually help?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For many people, yes. Research on peer support suggests that feeling heard by someone who understands can help with everyday distress, and some people find it easier to open up when the listener does not know them. This is general research, not a measured outcome of LeanOn, and peer support is not a replacement for professional care.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does my listener know in a voice call?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'They hear your voice, but they do not see your phone number or contact details, and voice calls are not recorded. If you would rather not use your voice, choose text.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does LeanOn protect my data?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LeanOn keeps your phone number (for sign-in), session details, wallet records and text messages. Voice calls are not recorded. Text messages are stored securely and may be reviewed by authorised LeanOn administrators if a session is reported or flagged for safety. Full details are in our Privacy Policy at leanon.app/privacy.',
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
    { '@type': 'ListItem', position: 3, name: 'Anonymous Support', item: 'https://www.leanon.app/support/anonymous-support' },
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
  .disclaimer{background:#FFF8F0;border:1.5px solid #FFD9A8;border-radius:20px;padding:24px;margin-bottom:24px;}
  .disclaimer p{font-size:13px;color:#7A5020;line-height:1.75;font-weight:500;margin-bottom:8px;}
  .disclaimer p:last-child{margin-bottom:0;}
  .disclaimer strong{color:#5A3800;}
  .privacy-badge{display:inline-flex;align-items:center;gap:8px;background:#F0FDF4;border:1.5px solid #86EFAC;border-radius:50px;padding:8px 18px;font-size:13px;font-weight:700;color:#166534;margin-bottom:20px;}
`

export default function AnonymousSupportPage() {
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
          <span style={{color:'var(--navy)'}}>Anonymous Support</span>
        </nav>

        {/* Hero */}
        <div className="hero">
          <div className="privacy-badge">Your identity stays private — always</div>
          <p className="tag">Peer Support · Anonymous Emotional Support India</p>
          <h1>Anonymous Emotional Support in India — Be Heard <em>Without Fear</em></h1>
          <p className="lead">You should not have to choose between getting support and protecting your privacy. On LeanOn, you connect with real peer listeners using only the name you choose — no last name, no photo, no personal details shared.</p>
        </div>

        {/* What Anonymous Support Means */}
        <div className="section">
          <h2>What Anonymous Support Means</h2>
          <p>Anonymous support means you can open up fully without fear of judgment, social consequences, or your information reaching the wrong people. When you use LeanOn, listeners know you by your first name only — or by a pseudonym if you prefer. Your phone number, your identity, and your conversation content are never shared or disclosed.</p>

          <h3>Not Hiding — Creating Safety</h3>
          <p>Anonymity in peer support is not about secrecy for its own sake. It is about creating the conditions for genuine honesty. Many people find they can speak far more truthfully — and receive far more from a conversation — when they are not managing how they are perceived by someone who knows them in real life. That freedom is the point.</p>

          <h3>Being Fully Honest for the First Time</h3>
          <p>For many LeanOn users, an anonymous session is the first time they have ever said out loud what they have been carrying inside. The things you cannot tell your partner, your parents, or your closest friends — the shame, the fear, the confusion — can finally be spoken, heard, and acknowledged. That experience alone is often profoundly relieving.</p>

          <h3>No Permanent Record That Can Be Used Against You</h3>
          <p>In Indian social contexts, vulnerability can be weaponised — used to challenge someone&apos;s competence, their fitness as a partner, or their standing in a family. Anonymous support removes that risk. What you share stays between you and your listener — it is not shared with anyone in your life. Text is stored securely and only opened by authorised LeanOn staff if a session is reported.</p>
        </div>

        {/* Why Anonymity Matters in India */}
        <div className="section">
          <h2>Why Anonymity Matters in India</h2>
          <p>India&apos;s social fabric is tightly woven. Family expectations, community opinions, and professional reputation all intersect in ways that make emotional vulnerability feel genuinely dangerous for many people. This is not paranoia — it is a reasonable response to real social dynamics.</p>

          <h3>The Stigma Around Mental Health</h3>
          <p>Despite significant progress in recent years, mental health struggles in India still carry stigma in many communities and families. Admitting that you are struggling — even with something as universal as anxiety or grief — can be interpreted as weakness, instability, or cause for concern about your prospects, your relationships, or your reliability. This stigma keeps enormous numbers of people suffering in silence when they could be getting real support.</p>

          <h3>Family Dynamics and the Pressure to Appear Fine</h3>
          <p>In Indian families, there is often an implicit pressure to present as capable, settled, and untroubled — especially to parents who have sacrificed for you, or to a spouse and their family who have certain expectations. The idea of a family member finding out that you have been seeking emotional support can feel more frightening than the original problem. Anonymous support sidesteps this entirely.</p>

          <h3>Professional Contexts</h3>
          <p>Many professionals in India worry about what colleagues or employers might think if they learned they were seeking mental health support. This concern is particularly acute in high-pressure industries — tech, finance, consulting, startups — where the culture often demands constant resilience. Anonymous peer support means you can seek help without any professional consequences.</p>
        </div>

        {/* How LeanOn Protects Your Privacy */}
        <div className="section">
          <h2>How LeanOn Protects Your Privacy</h2>
          <p>LeanOn was built with privacy as a design principle, not an afterthought. Here is exactly what your listener sees, and what LeanOn keeps:</p>

          <h3>First Name Only</h3>
          <p>When you create an account and join a session, only the name you choose to use is visible to your listener. No last name, no profile photo, no location, no workplace — nothing that identifies you beyond what you choose to share yourself.</p>

          <h3>Phone Number Authentication Without Exposure</h3>
          <p>LeanOn uses phone number OTP for authentication — a necessary step to maintain platform integrity. Your phone number is never shown to listeners.</p>

          <h3>What Is Stored</h3>
          <p>Voice calls are not recorded. Text messages are stored securely so a session can be reviewed if it is reported or flagged for safety; only authorised LeanOn administrators can open them, and they are not shared with third parties. For full details, see our <a href="/privacy" style={{color:'var(--teal)',fontWeight:700}}>privacy policy</a>.</p>

          <h3>Voice Calls</h3>
          <p>In a voice session your listener hears you but does not see your phone number or contact details, and calls are not recorded. If you would rather not use your voice, choose text.</p>
        </div>

        {/* What You Can Talk About */}
        <div className="section">
          <h2>What You Can Talk About</h2>
          <p>Because the space is anonymous, people feel safe bringing their most sensitive and difficult topics. This is where the real value of anonymous support shows up — you can talk about the things you have never been able to say to anyone who knows you:</p>
          <ul>
            <li>Family conflicts you cannot discuss at home without making things worse</li>
            <li>Relationship problems you are ashamed of or that feel too private to share</li>
            <li>Work struggles you fear will affect your professional reputation</li>
            <li>Mental health experiences you have hidden from everyone in your life</li>
            <li>Feelings of shame, inadequacy, or failure that you cannot admit to people who know you</li>
            <li>Identity questions or life choices that go against family or community expectations</li>
            <li>A feeling of general emptiness or meaninglessness that you cannot explain</li>
          </ul>
          <p>There is no topic too sensitive, too shameful, or too complicated. Privacy from your listener is designed to make space for exactly these conversations.</p>
        </div>

        {/* Is Anonymous Support Effective? */}
        <div className="section">
          <h2>Is Anonymous Support Effective?</h2>
          <p>This is a fair and important question. For many people, talking to someone who does not know them makes it easier to open up. General research on peer support is encouraging, but it is not a measured outcome of LeanOn, and peer support does not replace professional care.</p>

          <h3>Anonymity Increases Honest Disclosure</h3>
          <p>Research in psychology and online communication suggests that people often disclose more when they feel less exposed. When people feel genuinely safe — not managing how they are perceived — they share more fully and more accurately. That honesty is the raw material that makes emotional support work.</p>

          <h3>The Mechanism Is the Same</h3>
          <p>What makes emotional support effective is feeling genuinely heard and understood by another person. For some people that is easier when the listener is outside their circle.</p>

          <h3>People Who Would Not Seek Help Otherwise</h3>
          <p>Private peer support can also reach people who would otherwise talk to no one. For someone who would rather suffer in silence than risk judgment from people who know them, private peer support may be the first step they are willing to take.</p>
        </div>

        {/* Listener cards */}
        <h2 style={{fontSize:'20px',fontWeight:800,color:'var(--navy)',marginBottom:'16px'}}>Listeners Who Understand the Need for Privacy</h2>
        <div className="listeners-grid">
          {[
            {
              emoji: '🔒',
              name: 'Meena',
              tag: 'Family Pressure',
              bio: 'Carried family struggles alone for years because I couldn\'t tell anyone who knew me. I understand completely why privacy matters when you seek support.'
            },
            {
              emoji: '🌿',
              name: 'Siddharth',
              tag: 'Mental Health Stigma',
              bio: 'Hid my anxiety from everyone for years due to the stigma. I know what it costs to suffer in silence — and what it means to finally be heard.'
            },
            {
              emoji: '💙',
              name: 'Aarti',
              tag: 'Work & Identity',
              bio: 'Navigated career struggles and identity questions I couldn\'t share with colleagues or family. Here to create the safe space I needed myself.'
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

        {/* CTA */}
        <div className="cta-card">
          <h2>Talk Anonymously — Your Identity Stays Yours</h2>
          <p>Any name you like. No judgment. Voice calls never recorded. No appointment needed.</p>
          <div className="cta-btns">
            <a href="/talk?src=seo"><button className="btn-primary">Start privately — use any name →</button></a>
            <a href="/browse"><button className="btn-secondary">Browse Listeners First</button></a>
          </div>
        </div>

        {/* FAQ */}
        <div className="section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <div className="faq-q">Is LeanOn anonymous?</div>
            <div className="faq-a">Anonymous to your listener, not to LeanOn. You sign in with a verified phone number, but the listener sees only the name you choose — never your number. Voice calls are not recorded. Text messages are stored securely and may be reviewed by authorised LeanOn administrators if a session is reported or flagged for safety. You can use a pseudonym.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Why do people seek anonymous support in India?</div>
            <div className="faq-a">In India especially, the stigma around emotional struggles can carry real social, professional, and family consequences. People fear being judged by family, colleagues, or their community. Talking to someone outside your circle, who never sees your number, makes it easier to be honest.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Does anonymous support actually help?</div>
            <div className="faq-a">For many people, yes. Research on peer support suggests that feeling heard by someone who understands can help with everyday distress, and some people find it easier to open up when the listener does not know them. This is general research, not a measured outcome of LeanOn, and peer support is not a replacement for professional care.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">What does my listener know in a voice call?</div>
            <div className="faq-a">They hear your voice, but they do not see your phone number or contact details, and voice calls are not recorded. If you would rather not use your voice, choose text.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">How does LeanOn protect my data?</div>
            <div className="faq-a">LeanOn keeps your phone number (for sign-in), session details, wallet records and text messages. Voice calls are not recorded. Text messages are stored securely and may be reviewed by authorised LeanOn administrators if a session is reported or flagged for safety. Full details are in our Privacy Policy at leanon.app/privacy.</div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="disclaimer">
          <p><strong>Peer support is not a substitute for professional mental health care.</strong> LeanOn listeners are screened peers, not licensed therapists or counsellors. If you are in crisis or experiencing thoughts of self-harm, please contact a professional immediately.</p>
          <p><strong>Crisis helplines in India:</strong> NIMHANS — <a href="tel:08046110007" style={{color:'#7A5020',fontWeight:700}}>080-46110007</a> &nbsp;|&nbsp; Tele-MANAS — <a href="tel:14416" style={{color:'#7A5020',fontWeight:700}}>14416</a> (free · 24/7 · Govt of India)</p>
        </div>

        {/* Related pages */}
        <div className="section">
          <h2>Related Support Topics</h2>
          <p>Explore more peer support options on LeanOn:</p>
          <div className="related">
            <a href="/support/someone-to-talk-to" className="related-link">Someone to Talk To</a>
            <a href="/support/emotional-support" className="related-link">Emotional Support</a>
            <a href="/support/loneliness" className="related-link">Loneliness Support</a>
            <a href="/support/anxiety" className="related-link">Anxiety Support</a>
            <a href="/support/relationship-stress" className="related-link">Relationship Stress</a>
            <a href="/support/founder-burnout" className="related-link">Founder Burnout</a>
            <a href="/privacy" className="related-link">Privacy Policy</a>
            <a href="/browse" className="related-link">Browse All Listeners</a>
          </div>
        </div>

        {/* People Also Search For */}
        <div className="section">
          <h2>People Also Search For</h2>
          <p>If you&apos;re looking for anonymous emotional support, these pages may also help:</p>
          <div className="related">
            <a href="/blog/anonymous-emotional-support-india" className="related-link">Anonymous support in India</a>
            <a href="/blog/what-does-lean-on-mean" className="related-link">What does &quot;lean on&quot; mean?</a>
            <a href="/blog/peer-support-vs-therapy-india" className="related-link">Peer support vs therapy</a>
            <a href="/blog/how-peer-support-works" className="related-link">How peer support works</a>
            <a href="/blog/affordable-alternatives-to-therapy-in-india" className="related-link">Affordable alternatives to therapy</a>
            <a href="/blog/loneliness-in-india" className="related-link">Loneliness in India</a>
            <a href="/bengaluru" className="related-link">Peer support Bengaluru</a>
            <a href="/mumbai" className="related-link">Peer support Mumbai</a>
            <a href="/delhi" className="related-link">Peer support Delhi</a>
          </div>
        </div>

        {/* City availability */}
        <p style={{textAlign:'center',fontSize:'13px',color:'var(--gray)',fontWeight:600,marginBottom:'40px'}}>
          Available across India: <a href="/bengaluru" style={{color:'var(--teal)'}}>Bengaluru</a> · <a href="/mumbai" style={{color:'var(--teal)'}}>Mumbai</a> · <a href="/delhi" style={{color:'var(--teal)'}}>Delhi</a> · <a href="/chennai" style={{color:'var(--teal)'}}>Chennai</a> · <a href="/hyderabad" style={{color:'var(--teal)'}}>Hyderabad</a> · <a href="/pune" style={{color:'var(--teal)'}}>Pune</a> · <a href="/kolkata" style={{color:'var(--teal)'}}>Kolkata</a>
        </p>
      </div>
    </>
  )
}
