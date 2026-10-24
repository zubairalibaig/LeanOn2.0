import type { Metadata } from 'next'
import QuickAnswer from '@/app/components/QuickAnswer'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Peer Support for Loneliness in India | LeanOn',
  description: "Feeling lonely and looking for someone to talk to? LeanOn offers one-to-one text or voice conversations with screened peer listeners in India. One introductory session up to 5 minutes is free per account; availability varies. Peer support, not therapy.",
  alternates: { canonical: 'https://www.leanon.app/support/loneliness', languages: { 'en-IN': 'https://www.leanon.app/support/loneliness' } },
  openGraph: {
    title: 'Peer Support for Loneliness in India | LeanOn',
    description: "Feeling lonely and looking for someone to talk to? LeanOn offers one-to-one text or voice conversations with screened peer listeners in India. One introductory session up to 5 minutes is free per account; availability varies. Peer support, not therapy.",
    url: 'https://www.leanon.app/support/loneliness',
    siteName: 'LeanOn',
    type: 'article',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: "What can I do when I feel lonely and have no one to talk to?", acceptedAnswer: { '@type': 'Answer', text: "Talking with another person is one way some people seek connection when they feel lonely. LeanOn lets adults in India request a one-to-one text or voice conversation with a screened peer listener. It is non-clinical peer support, not therapy. One introductory session up to 5 minutes is free per account; paid prices vary by listener and mode. Availability varies, so an immediate match is not guaranteed." } },
    {
      '@type': 'Question',
      name: 'Is feeling lonely normal in India even when surrounded by people?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. A person can feel lonely even around family, colleagues or friends. Loneliness is about the connection someone feels, not only how many people are nearby. It is a common human experience and not a personal failure.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can a peer listener help with loneliness?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LeanOn listeners bring varied lived experiences and are screened for listening ability and boundaries. You can review profiles and choose someone whose experience seems relevant. A peer conversation may help some people feel heard, but experiences vary and it is not a treatment for a mental-health condition.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between loneliness and social anxiety?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Loneliness is the distressing feeling of lacking meaningful connection. Social anxiety is fear or nervousness about social situations. They often co-exist — social anxiety can prevent you from forming connections, which leads to loneliness. Both are real and deserve support.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is WFH loneliness a real problem in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Working from home can reduce casual social contact for some people, while others value the flexibility. Whether it contributes to loneliness depends on individual circumstances and available support.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does LeanOn peer support cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'One introductory session up to 5 minutes is free per account. Paid 15-minute text sessions in India start at ₹160 with a listener charging ₹10 per minute; actual price varies by listener and mode and is shown before booking. Availability depends on which listeners are online.',
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
    { '@type': 'ListItem', position: 3, name: 'Loneliness', item: 'https://www.leanon.app/support/loneliness' },
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
`

export default function LonelinessSupportPage() {
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
          <span style={{color:'var(--navy)'}}>Loneliness</span>
        </nav>

        <div style={{background:'#EBF5FB',borderLeft:'4px solid #1A8FA0',borderRadius:'0 12px 12px 0',padding:'14px 18px',marginBottom:28,fontSize:14,color:'#0F4867',fontWeight:600,lineHeight:1.65}}>
          🆘 In crisis? Call <a href="tel:08046110007" style={{color:'#1A8FA0',fontWeight:800}}>NIMHANS 080-46110007</a> or <a href="tel:14416" style={{color:'#1A8FA0',fontWeight:800}}>Tele-MANAS 14416</a> (free · 24/7 · Govt of India)
        </div>

        {/* Hero */}
        <div className="hero">
          <p className="tag">Peer Support · Loneliness</p>
          <h1>You Are Not Alone in Feeling <em>Alone</em></h1>
          <p className="lead">Loneliness can happen in a new city, in a busy workplace, at home or even when surrounded by people. LeanOn offers non-clinical one-to-one conversations with screened peer listeners for adults who want a human conversation. It is not therapy, and availability depends on who is online.</p>
          <QuickAnswer question={"What can I do when I feel lonely and have no one to talk to?"} answer={"Talking with another person is one way some people seek connection when they feel lonely. LeanOn lets adults in India request a one-to-one text or voice conversation with a screened peer listener. It is non-clinical peer support, not therapy. One introductory session up to 5 minutes is free per account; paid prices vary by listener and mode. Availability varies, so an immediate match is not guaranteed."} />
        </div>

        {/* What is loneliness */}
        <div className="section">
          <h2>Understanding Loneliness in India</h2>
          <p>Loneliness is one of the most painful and least-talked-about experiences in India. Our culture puts a premium on community — which makes it even harder to admit that you feel profoundly disconnected, even when you are surrounded by family, colleagues, and neighbours.</p>

          <h3>The 2 AM Feeling Has a Name</h3>
          <p>It hits hardest at night — that hollow ache when everyone else seems to have someone and you are staring at your phone hoping someone will text. This is not weakness. It is a deeply human response to unmet connection needs. And it is far more common than social media makes it seem.</p>

          <h3>WFH Loneliness Is Real</h3>
          <p>Since the shift to remote work, millions of young Indians have lost the casual office interactions that served as invisible social scaffolding — the coffee conversations, the lunch runs, the shoulder taps. Working from home in a one-BHK in Bangalore or Gurgaon can be profoundly isolating, especially if you have moved away from family for work.</p>

          <h3>Moving to a New City</h3>
          <p>India&apos;s migration patterns mean that millions of people are navigating new cities every year — Chennai, Pune, Hyderabad, Mumbai. Building a social life from scratch as an adult is genuinely hard. The friendships that used to form naturally in college take much more deliberate effort to cultivate at 25 or 30.</p>

          <h3>Social Anxiety and Loneliness</h3>
          <p>For many people, loneliness and social anxiety are intertwined. You want connection, but social situations feel overwhelming, exhausting, or unsafe. The result is a painful loop: isolation reinforces anxiety, which makes social engagement harder, which deepens isolation.</p>

          <h3>Loneliness in Joint Families</h3>
          <p>A quieter but equally real form of loneliness comes from living in a joint family where you can&apos;t speak openly. When your emotions and struggles must stay hidden for the sake of family harmony, you can feel utterly alone even in a house of ten people.</p>
        </div>

        {/* How LeanOn helps */}
        <div className="section">
          <h2>How LeanOn Helps With Loneliness</h2>
          <p>LeanOn is not therapy, and we are honest about that. We are peer support — real humans talking to real humans. Here is how we help:</p>

          <h3>Someone Who Has Actually Been There</h3>
          <p>LeanOn listeners bring varied lived experiences and are screened for listening ability and boundaries. Review profiles to see the experiences and topics they mention; listeners are peer supporters, not therapists.</p>

          <h3>Available When Loneliness Peaks</h3>
          <p>Some people notice loneliness more at night or on weekends. LeanOn does not guarantee 24/7 listener availability; check the current list or request a conversation, which starts when a listener accepts.</p>

          <h3>Private and Judgment-Free</h3>
          <p>Some people find it easier to talk outside their usual circle. LeanOn listeners do not see your phone number, and you can choose a display name. Voice calls are not recorded, but text messages are stored and authorised administrators may review reported or safety-flagged sessions. Read the Privacy Policy and share only what feels comfortable.</p>

          <h3>A First Step Towards Connection</h3>
          <p>Talking about loneliness may help some people clarify what they are feeling or what kind of connection they want. Experiences vary; peer support is not treatment and does not replace professional help when it is needed.</p>
        </div>

        {/* Listener cards */}
        <h2 style={{fontSize:'20px',fontWeight:800,color:'var(--navy)',marginBottom:'16px'}}>Topics You Can Talk About</h2>
        <div className="listeners-grid">
          {[
            {
              emoji: '🏙️',
              name: 'Moving to a new city',
              tag: 'Change & adjustment',
              bio: 'Talk about adjusting to a new place, missing familiar people or finding ways to build connection.'
            },
            {
              emoji: '💻',
              name: 'Working from home',
              tag: 'Daily connection',
              bio: 'Talk about the effect of remote work on your routine and social contact, if that is part of your experience.'
            },
            {
              emoji: '🤍',
              name: 'Feeling left out',
              tag: 'Social connection',
              bio: 'Talk about feeling disconnected even when other people are around, and what kind of support you want.'
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
          <h2>Ready to Feel Less Alone?</h2>
          <p>Talk with a screened peer listener about loneliness. No appointment is needed, but availability varies and a session starts when a listener accepts your request.</p>
          <div className="cta-btns">
            <a href="/talk?src=seo"><button className="btn-primary">Request a conversation — first 5 minutes free →</button></a>
            <a href="/how-leanon-works"><button className="btn-secondary">How it works →</button></a>
          </div>
        </div>

        {/* FAQ */}
        <div className="section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <div className="faq-q">Is feeling lonely normal in India even when surrounded by people?</div>
            <div className="faq-a">Yes. A person can feel lonely even around family, colleagues or friends. Loneliness is about the connection someone feels, not only how many people are nearby. It is a common human experience and not a personal failure.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">How can a peer listener help with loneliness?</div>
            <div className="faq-a">LeanOn listeners bring varied lived experiences and are screened for listening ability and boundaries. You can review profiles and choose someone whose experience seems relevant. A peer conversation may help some people feel heard, but experiences vary and it is not a treatment for a mental-health condition.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">What is the difference between loneliness and social anxiety?</div>
            <div className="faq-a">Loneliness is the distressing feeling of lacking meaningful connection. Social anxiety is fear or nervousness about social situations. They often co-exist — social anxiety can prevent you from forming connections, which leads to loneliness. Both are real and deserve support.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Is WFH loneliness a real problem in India?</div>
            <div className="faq-a">Yes. Millions of Indians working from home have reported increased loneliness, especially those living alone or far from family. The loss of casual office interactions has had a surprisingly large impact on mental wellbeing.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">How much does LeanOn peer support cost?</div>
            <div className="faq-a">One introductory session up to 5 minutes is free per account. Paid 15-minute text sessions in India start at ₹160 with a listener charging ₹10 per minute; actual price varies by listener and mode and is shown before booking. Availability depends on which listeners are online.</div>
          </div>
        </div>

        {/* Related pages */}
        <div className="section">
          <h2>Related Support Topics</h2>
          <p>Loneliness often travels with other challenges. Explore more peer support on LeanOn:</p>
          <div className="related">
            <a href="/support/anxiety" className="related-link">Anxiety Support</a>
            <a href="/support/breakup" className="related-link">Breakup & Heartbreak</a>
            <a href="/support/grief" className="related-link">Grief Support</a>
            <a href="/support/student-stress" className="related-link">Student Stress</a>
            <a href="/support/career-confusion" className="related-link">Career Confusion</a>
            <a href="/support/emotional-support" className="related-link">Emotional Support</a>
            <a href="/support/someone-to-talk-to" className="related-link">Someone to Talk To</a>
            <a href="/browse" className="related-link">Browse All Listeners</a>
          </div>
        </div>

        {/* People Also Search For */}
        <div className="section">
          <h2>People Also Search For</h2>
          <p>If you&apos;re looking for loneliness support, these pages may also help:</p>
          <div className="related">
            <a href="/blog/loneliness-in-india" className="related-link">Loneliness in India</a>
            <a href="/blog/loneliness-at-night" className="related-link">Loneliness at night</a>
            <a href="/blog/what-does-lean-on-mean" className="related-link">What does &quot;lean on&quot; mean?</a>
            <a href="/blog/peer-support-vs-therapy-india" className="related-link">Peer support vs therapy</a>
            <a href="/blog/women-loneliness-india-peer-support" className="related-link">Women&apos;s loneliness</a>
            <a href="/blog/joint-family-emotional-support" className="related-link">Joint family support</a>
            <a href="/blog/anonymous-emotional-support-india" className="related-link">Anonymous support</a>
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
