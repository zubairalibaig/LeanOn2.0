import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Someone to Talk To in India | LeanOn Peer Listeners',
  description: 'Need someone to talk to? LeanOn connects you with trained peer listeners in India. Anonymous, free first session, available 24/7.',
  alternates: { canonical: 'https://www.leanon.app/support/someone-to-talk-to', languages: { 'en-IN': 'https://www.leanon.app/support/someone-to-talk-to' } },
  openGraph: {
    title: 'Someone to Talk To in India | LeanOn Peer Listeners',
    description: 'Need someone to talk to? LeanOn connects you with trained peer listeners in India. Anonymous, free first session, available 24/7.',
    url: 'https://www.leanon.app/support/someone-to-talk-to',
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
      name: 'Why is it hard to find someone to talk to even when you have people in your life?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Having people in your life and having someone genuinely safe to talk to are two very different things. Friends and family come with history, opinions, and their own reactions. You might worry about burdening them, being judged, or having what you say affect the relationship. These concerns are real — and they are exactly why many people with full social lives still feel like they have no one to truly talk to.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does a peer listener offer that a friend cannot?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A peer listener has no stake in your life, no existing relationship to protect, and no judgment to manage. They are there solely to listen. This creates a rare kind of freedom — you can say exactly what you feel without worrying about how it lands. Combined with lived experience of similar challenges, peer listeners often offer a quality of presence that is genuinely different from what friends or family can provide.',
      },
    },
    {
      '@type': 'Question',
      name: 'What kinds of things can I talk about with a peer listener?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can talk about anything that is weighing on you — relationship problems, work stress, family conflict, loneliness, grief, anxiety, confusion about your future, or simply a rough day you cannot shake. There is no minimum threshold of severity. You do not need to be in crisis to deserve support.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is peer support different from therapy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Therapy is clinical — it involves licensed professionals, diagnosis, and structured treatment. Peer support is human — it involves real people who have been through difficult experiences and are trained to listen without judgment. Peer support is particularly useful when you need to be heard and understood rather than treated or diagnosed, and it is far more accessible and affordable as a first step.',
      },
    },
    {
      '@type': 'Question',
      name: 'How quickly can I talk to someone on LeanOn?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can start a session within minutes. Sign up with your phone number, browse available listeners, and start your first 5-minute free session immediately — no booking, no waiting list, no appointment required. Listeners are available 24/7 across India.',
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
    { '@type': 'ListItem', position: 3, name: 'Someone to Talk To', item: 'https://www.leanon.app/support/someone-to-talk-to' },
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
`

export default function SomeoneToTalkToPage() {
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
          <span style={{color:'var(--navy)'}}>Someone to Talk To</span>
        </nav>

        {/* Hero */}
        <div className="hero">
          <p className="tag">Peer Support · Someone to Talk To India</p>
          <h1>Need Someone to Talk To? <em>Real Listeners</em>, Available Now in India</h1>
          <p className="lead">Sometimes you just need to say it out loud to another human being. LeanOn connects you with peer listeners across India who are available now — anonymous, non-judgmental, and genuinely present. No appointments. No waitlists. First 5 minutes free.</p>
        </div>

        {/* Why It's Hard to Find Someone to Talk To */}
        <div className="section">
          <h2>Why It&apos;s Hard to Find Someone to Talk To</h2>
          <p>Most people in India have phones full of contacts — and yet regularly feel like they have no one to truly talk to. This is not a paradox. It is a very specific and very common problem. Having people in your life and having someone genuinely safe to be fully honest with are two completely different things.</p>

          <h3>The Fear of Burdening Others</h3>
          <p>One of the most common reasons people stay silent is the worry that they will be &quot;too much&quot; for the people they care about. You do not want to worry your parents. You do not want to make your friends uncomfortable. You do not want to seem weak or incapable. So you hold it in — and the holding takes enormous energy that leaves you even more depleted than the original difficulty itself.</p>

          <h3>No One Who Actually Gets It</h3>
          <p>Some experiences are genuinely hard for others to understand unless they have been through something similar. Burnout. Grief. The specific anxiety of being first-generation in your family to navigate something new. The loneliness of being a migrant in a big city. When your friends and family have not been through it, their sympathy — though genuine — can feel like it misses the point entirely.</p>

          <h3>The Risk of Social Judgment</h3>
          <p>In Indian social contexts, what you share with people who know you stays with them — and changes how they see you, sometimes permanently. Admitting that you are struggling, scared, or confused can feel like it carries a real social cost. The concern is not irrational, and it stops millions of people from ever saying out loud what they most need to say.</p>

          <h3>Not Knowing Where to Turn</h3>
          <p>Therapy is often too expensive, too clinical, or too far away. Helplines can feel impersonal. Apps full of breathing exercises miss the point. What you actually want is a real human conversation — and that is exactly what LeanOn provides.</p>
        </div>

        {/* What a Peer Listener Offers */}
        <div className="section">
          <h2>What a Peer Listener Offers</h2>
          <p>A LeanOn peer listener is a real person — not a bot, not a professional following a protocol — who has been through difficult experiences themselves and signed up specifically to be present for others going through hard times.</p>

          <h3>Someone Who Has Actually Been There</h3>
          <p>The difference between being heard by someone who understands from lived experience versus someone who simply has sympathy is profound. LeanOn listeners are selected based on personal experience with the challenges they support. When they say &quot;I understand&quot; — they mean it in the most literal sense possible.</p>

          <h3>Complete Freedom to Be Honest</h3>
          <p>Because the listener has no stake in your life — no shared history, no social consequence, no opinion to protect — you can say exactly what you feel without editing yourself. That level of honesty is rare and genuinely healing. For many people it is the first time they have ever said out loud what they have been carrying inside.</p>

          <h3>Present and Fully Attentive</h3>
          <p>In a LeanOn session, the listener&apos;s sole role is to be present with you. No distractions, no split attention, no rushing to their own thoughts. Just focused, full attention on what you are sharing — which is something most of us rarely experience even from the people closest to us.</p>
        </div>

        {/* Common Topics */}
        <div className="section">
          <h2>Common Topics People Talk About</h2>
          <p>There is no topic too small and no threshold of severity required. People talk to LeanOn listeners about:</p>
          <ul>
            <li>Loneliness and feeling disconnected, even when surrounded by people</li>
            <li>Relationship stress — with partners, parents, siblings, or friends</li>
            <li>Work pressure, burnout, and the constant fear of falling behind</li>
            <li>Grief and loss, including the slow grief of relationships ending or drifting apart</li>
            <li>Anxiety, overthinking, and the inability to switch the mind off at night</li>
            <li>Major life transitions — new cities, new jobs, new roles and identities</li>
            <li>Feeling stuck and not knowing what the right next step should be</li>
            <li>Simply a hard week that you need to decompress from with another human being</li>
          </ul>
          <p>You do not need a diagnosis or a crisis to deserve someone to talk to. Everyday emotional weight is real and valid, and having a safe space to put it down — even briefly — makes a genuine difference to how you feel and function.</p>
        </div>

        {/* How It's Different from Therapy */}
        <div className="section">
          <h2>How It&apos;s Different from Therapy</h2>
          <p>Peer support and therapy are different tools for different needs, and understanding the distinction helps you choose the right support for where you are right now.</p>

          <h3>Therapy Is Clinical, Peer Support Is Human</h3>
          <p>A therapist is a licensed professional who works within a clinical framework — diagnosing conditions, applying evidence-based interventions, and tracking therapeutic progress over time. That structure is exactly right for people who need clinical care. But many people do not need treatment. They need to be heard by someone who has been through something similar and come out the other side.</p>

          <h3>Accessibility and Affordability</h3>
          <p>Therapy in Indian metro cities typically costs ₹1,500–₹3,000 per session, with waiting lists at good practices stretching weeks. LeanOn peer support starts at ₹165 for 15 minutes, with the first 5 minutes free. It is available right now — at midnight, on a Sunday, during a lunch break — whenever you need it most.</p>

          <h3>Complementary, Not Competing</h3>
          <p>Many people use peer support alongside therapy — as a way to process between clinical sessions, access support when a therapist is not available, or take a meaningful first step before they are ready for formal treatment. LeanOn listeners are trained to recognise when someone might benefit from professional care and will gently say so when that appears to be the case.</p>
        </div>

        {/* Getting Started */}
        <div className="section">
          <h2>Getting Started — It Takes Less Than a Minute</h2>
          <p>You are three steps away from having someone to talk to right now:</p>

          <h3>Browse Listeners</h3>
          <p>Go to <a href="/browse" style={{color:'var(--teal)',fontWeight:700}}>Browse Listeners</a> and read through peer profiles. Each listener shares their personal experience, the topics they support, and their availability. Taking a few minutes to find someone whose experience resonates with yours makes a real difference to the quality of the conversation.</p>

          <h3>Start Free</h3>
          <p>The first 5 minutes of your first session are free. No credit card, no commitment. This gives you a genuine chance to feel whether the connection is right before you decide to continue.</p>

          <h3>Say What You Need to Say</h3>
          <p>Once you are in a session, just start wherever feels right. You do not need to explain everything or give context. Your listener will follow you and ask gentle questions to help you feel heard. There is no agenda, no homework, and no follow-up required unless you want it.</p>
        </div>

        {/* Listener cards */}
        <h2 style={{fontSize:'20px',fontWeight:800,color:'var(--navy)',marginBottom:'16px'}}>Real Listeners, Ready Now</h2>
        <div className="listeners-grid">
          {[
            {
              emoji: '🌙',
              name: 'Vikram',
              tag: 'Loneliness & Isolation',
              bio: 'Moved to Mumbai alone at 22 and spent years feeling invisible in a crowd. I know exactly what it means to need someone to talk to and have no one.'
            },
            {
              emoji: '💚',
              name: 'Shreya',
              tag: 'Anxiety & Overthinking',
              bio: 'Lived with anxiety that made everything feel impossible for years. Found my way through and now I help others feel less alone in the spiral.'
            },
            {
              emoji: '🔆',
              name: 'Karthik',
              tag: 'Work Stress & Burnout',
              bio: 'Hit complete burnout at 28 after years of pushing through. I understand what it feels like when everything that used to work stops working.'
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
          <h2>Someone Is Ready to Listen Right Now</h2>
          <p>Anonymous, non-judgmental peer support available 24/7 across India. First 5 minutes free.</p>
          <div className="cta-btns">
            <a href="/auth"><button className="btn-primary">Talk to Someone Now</button></a>
            <a href="/browse"><button className="btn-secondary">Browse Listeners First</button></a>
          </div>
        </div>

        {/* FAQ */}
        <div className="section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <div className="faq-q">Why is it hard to find someone to talk to even when you have people in your life?</div>
            <div className="faq-a">Having people in your life and having someone genuinely safe to talk to are two very different things. Friends and family come with history, opinions, and their own reactions. A peer listener has no stake in your life — creating a rare kind of freedom to be fully honest without social consequence.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">What does a peer listener offer that a friend cannot?</div>
            <div className="faq-a">A peer listener has no stake in your life, no existing relationship to protect, and no judgment to manage. Combined with lived experience of similar challenges, they often offer a quality of presence that is genuinely different from what friends or family can provide.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">What kinds of things can I talk about with a peer listener?</div>
            <div className="faq-a">You can talk about anything that is weighing on you — relationship problems, work stress, family conflict, loneliness, grief, anxiety, or simply a rough day. There is no minimum threshold of severity. You do not need to be in crisis to deserve support.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">How is peer support different from therapy?</div>
            <div className="faq-a">Therapy is clinical — licensed professionals, diagnosis, and structured treatment. Peer support is human — real people with lived experience, trained to listen without judgment. Peer support is especially useful when you need to be heard rather than treated, and it is far more accessible and affordable as a first step.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">How quickly can I talk to someone on LeanOn?</div>
            <div className="faq-a">You can start a session within minutes. Sign up with your phone number, browse available listeners, and start your first 5-minute free session immediately — no booking, no waiting list, no appointment required. Listeners are available 24/7 across India.</div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="disclaimer">
          <p><strong>Peer support is not a substitute for professional mental health care.</strong> LeanOn listeners are trained peers, not licensed therapists or counsellors. If you are in crisis or experiencing thoughts of self-harm, please contact a professional immediately.</p>
          <p><strong>Crisis helplines in India:</strong> NIMHANS — <a href="tel:08046110007" style={{color:'#7A5020',fontWeight:700}}>080-46110007</a> &nbsp;|&nbsp; Tele-MANAS — <a href="tel:14416" style={{color:'#7A5020',fontWeight:700}}>14416</a> (free · 24/7 · Govt of India)</p>
        </div>

        {/* Related pages */}
        <div className="section">
          <h2>Related Support Topics</h2>
          <p>Explore more peer support on LeanOn:</p>
          <div className="related">
            <a href="/support/emotional-support" className="related-link">Emotional Support</a>
            <a href="/support/anonymous-support" className="related-link">Anonymous Support</a>
            <a href="/support/loneliness" className="related-link">Loneliness Support</a>
            <a href="/support/anxiety" className="related-link">Anxiety Support</a>
            <a href="/support/relationship-stress" className="related-link">Relationship Stress</a>
            <a href="/support/grief" className="related-link">Grief Support</a>
            <a href="/faq" className="related-link">FAQ</a>
            <a href="/browse" className="related-link">Browse All Listeners</a>
          </div>
        </div>

        {/* People Also Search For */}
        <div className="section">
          <h2>People Also Search For</h2>
          <p>If you&apos;re looking for someone to talk to, these pages may also help:</p>
          <div className="related">
            <a href="/blog/what-does-lean-on-mean" className="related-link">What does &quot;lean on&quot; mean?</a>
            <a href="/blog/peer-support-vs-therapy-india" className="related-link">Peer support vs therapy</a>
            <a href="/blog/how-peer-support-works" className="related-link">How peer support works</a>
            <a href="/blog/loneliness-at-night" className="related-link">Loneliness at night</a>
            <a href="/blog/anonymous-emotional-support-india" className="related-link">Anonymous support</a>
            <a href="/blog/affordable-alternatives-to-therapy-in-india" className="related-link">Affordable alternatives to therapy</a>
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
