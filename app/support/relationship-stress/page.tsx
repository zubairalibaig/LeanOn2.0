import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Relationship Stress Peer Support India | LeanOn',
  description: 'Dealing with relationship stress? Talk to a peer listener anonymously on LeanOn. Free first session. Available across India.',
  alternates: { canonical: 'https://www.leanon.app/support/relationship-stress', languages: { 'en-IN': 'https://www.leanon.app/support/relationship-stress' } },
  openGraph: {
    title: 'Relationship Stress Peer Support India | LeanOn',
    description: 'Dealing with relationship stress? Talk to a peer listener anonymously on LeanOn. Free first session. Available across India.',
    url: 'https://www.leanon.app/support/relationship-stress',
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
      name: 'What counts as relationship stress?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Relationship stress covers any emotional strain arising from your connections with a romantic partner, family members, friends, or colleagues. It includes conflict, trust issues, communication breakdowns, feeling unheard, navigating expectations from parents, and the anxiety that comes from not knowing where a relationship stands. You do not need to be in a crisis to seek support — ongoing tension and confusion count too.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can a peer listener really help with relationship problems?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Peer listeners on LeanOn have personally navigated difficult relationships — including family pressure, toxic dynamics, long-distance stress, and painful breakups. They are not therapists and will not give prescriptions, but they will listen without judgment, help you feel less alone, and often offer genuine perspective that friends or family cannot, because they have no stake in your situation.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does relationship stress affect mental health in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In India, relationship stress is one of the leading contributors to anxiety, sleep problems, and low self-esteem — particularly because cultural expectations around family, marriage, and loyalty make it hard to set boundaries or talk openly. Many people suffer in silence, which compounds the mental health impact. Getting even one safe space to process these feelings can significantly reduce that burden.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I talk about family relationship stress, not just romantic relationships?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. Relationship stress on LeanOn covers all kinds of relationships — parents, in-laws, siblings, friends, and romantic partners. Many Indians carry enormous stress from family dynamics they cannot discuss openly at home. LeanOn is a safe, private space to talk about any relationship that is weighing on you.',
      },
    },
    {
      '@type': 'Question',
      name: 'When should relationship stress become a reason to see a therapist?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If relationship stress is causing persistent depression, anxiety that disrupts daily functioning, thoughts of self-harm, or if the relationship involves abuse or coercion, please seek a qualified mental health professional. LeanOn peer support is a helpful complement — and a lower-barrier first step — but it is not a replacement for clinical therapy when those signs are present.',
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
    { '@type': 'ListItem', position: 3, name: 'Relationship Stress', item: 'https://www.leanon.app/support/relationship-stress' },
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

export default function RelationshipStressSupportPage() {
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
          <span style={{color:'var(--navy)'}}>Relationship Stress</span>
        </nav>

        {/* Hero */}
        <div className="hero">
          <p className="tag">Peer Support · Relationship Stress</p>
          <h1>Getting Through Relationship Stress — You Don&apos;t Have to <em>Face It Alone</em></h1>
          <p className="lead">Relationship stress is one of the heaviest burdens to carry — especially when you feel you cannot talk to anyone about it. LeanOn connects you with peer listeners in India who have navigated the same complicated feelings and come out the other side.</p>
        </div>

        {/* What Is Relationship Stress */}
        <div className="section">
          <h2>What Is Relationship Stress?</h2>
          <p>Relationship stress is the emotional and psychological strain that comes from conflict, uncertainty, or disconnection in your personal connections. It is not limited to romantic partnerships — it can arise in marriages, friendships, family dynamics, or even professional relationships. In India, where relationships are deeply tied to identity, duty, and social standing, the pressure can feel especially overwhelming and hard to escape.</p>

          <h3>Romantic Relationship Stress</h3>
          <p>Whether you are navigating disagreements with a partner, struggling with jealousy or insecurity, coping with a long-distance situation, or simply wondering whether the relationship is right for you — romantic relationship stress is exhausting. The uncertainty alone can keep you awake at night and make it difficult to focus on anything else.</p>

          <h3>Family Pressure and Conflict</h3>
          <p>In many Indian families, boundaries between individual needs and family expectations are blurry by design. Parents weighing in on career, marriage prospects, and lifestyle choices; sibling rivalries; expectations from in-laws — all of these create persistent stress that accumulates over time. Saying &quot;my family is the source of my stress&quot; often feels disloyal, which keeps the burden locked inside.</p>

          <h3>Friendship Breakdowns</h3>
          <p>Losing a close friend, feeling left out of a social group, or sensing that a friendship has become one-sided are sources of genuine grief that rarely get acknowledged. These losses are often dismissed with &quot;just find new friends&quot; — but meaningful adult friendships are genuinely hard to build and deeply painful to lose.</p>

          <h3>Toxic and Difficult Relationship Patterns</h3>
          <p>Some relationships leave you feeling smaller, more anxious, or more confused after every interaction. Recognising these patterns — and deciding what to do about them — takes real courage and clarity. Talking through your experience with someone who has been there can make that process significantly easier.</p>
        </div>

        {/* How Relationship Problems Affect Mental Health */}
        <div className="section">
          <h2>How Relationship Problems Affect Mental Health</h2>
          <p>The connection between relationships and mental health is bidirectional: relationship stress causes mental health problems, and mental health struggles put strain on relationships. Understanding this cycle is the first step to breaking it.</p>

          <h3>Anxiety and Overthinking</h3>
          <p>When a relationship is unstable or uncertain, the mind goes into overdrive — analysing messages, replaying conversations, imagining worst-case scenarios. This hyper-vigilance is exhausting and spills over into every other area of life including work, sleep, and physical health.</p>

          <h3>Loss of Self-Worth</h3>
          <p>Persistent conflict, criticism, or feeling unappreciated in a relationship erodes self-esteem over time. Many people in stressful relationships begin to question their own perceptions, needs, and even their right to feel upset — a pattern that compounds the original stress significantly.</p>

          <h3>Sleep Disruption and Physical Symptoms</h3>
          <p>Relationship stress is one of the most common causes of chronic sleep disruption. The emotional activation that comes from unresolved conflict makes it hard for the nervous system to settle at night. Over time, poor sleep compounds anxiety, reduces emotional resilience, and makes difficult situations feel even harder to navigate.</p>
        </div>

        {/* When to Seek Support */}
        <div className="section">
          <h2>When to Seek Support for Relationship Stress</h2>
          <p>You do not need to reach a crisis point before you deserve support. Consider reaching out when:</p>
          <ul>
            <li>You find yourself replaying the same conversation or conflict again and again without resolution</li>
            <li>Relationship stress is affecting your work, sleep, appetite, or ability to enjoy things you normally love</li>
            <li>You feel like you have no one safe to talk to — not because your life is bad, but because the situation feels too complicated or sensitive to share</li>
            <li>You are unsure whether your feelings and reactions are reasonable and simply need a sounding board</li>
            <li>You want perspective from someone with no stake in the outcome — not a mutual friend, not a parent, not a colleague</li>
          </ul>
          <p>Reaching out early, before a situation becomes a full crisis, is always a sound decision. Peer support is low-stakes — you are just having a conversation, not committing to any particular course of action.</p>
        </div>

        {/* How Peer Support Helps */}
        <div className="section">
          <h2>How Peer Support Helps With Relationship Stress</h2>
          <p>Peer support works differently from therapy, advice from friends, or venting to family. Here is what makes it distinctively useful for relationship stress:</p>

          <h3>No Conflicting Interests</h3>
          <p>Friends and family are invested in the story. A peer listener has no prior relationship with you, no loyalty to the other person, and no social consequence if you tell the truth about what is happening. That neutrality is genuinely rare and valuable when you are in the middle of a charged situation.</p>

          <h3>Lived Experience, Not Theory</h3>
          <p>LeanOn listeners have personally navigated difficult relationships — they have been through painful family dynamics, trust issues, and the confusion of troubled partnerships. They speak from experience, not from a framework, which makes their understanding feel real rather than clinical.</p>

          <h3>A Space to Think Out Loud</h3>
          <p>Often what people need most is not advice but a chance to hear themselves think. Peer listeners are present to listen actively, ask gentle questions, and reflect back what they hear — helping you gain clarity from your own words rather than from someone else&apos;s prescriptions.</p>
        </div>

        {/* What LeanOn Listeners Offer */}
        <div className="section">
          <h2>What LeanOn Listeners Offer</h2>
          <p>LeanOn peer listeners are real people — not bots, not professionals reading scripts — who have applied to support others because they have been through something difficult themselves. Here is what you can expect from a session focused on relationship stress:</p>
          <ul>
            <li>A private, non-judgmental space to describe exactly what is happening without fear of being told you are overreacting</li>
            <li>Empathetic listening from someone who has personally experienced relationship challenges in an Indian context</li>
            <li>Gentle reflection and questions to help you understand your own feelings and needs more clearly</li>
            <li>Perspective from someone who has no stake in the relationship — no allegiances, no agenda, no judgment</li>
            <li>Availability any time, including late nights when relationship worries tend to be loudest</li>
          </ul>
          <p>LeanOn listeners do not provide therapy, couples counselling, or legal advice. If your situation involves safety concerns, abuse, or serious mental health issues, please reach out to a qualified professional.</p>
        </div>

        {/* Listener cards */}
        <h2 style={{fontSize:'20px',fontWeight:800,color:'var(--navy)',marginBottom:'16px'}}>Listeners Who Understand Relationship Stress</h2>
        <div className="listeners-grid">
          {[
            {
              emoji: '💛',
              name: 'Kavya',
              tag: 'Family Pressure & Marriage',
              bio: 'Navigated intense family expectations around marriage for years. I understand the exhaustion of being caught between your own heart and everyone else\'s opinions.'
            },
            {
              emoji: '🔄',
              name: 'Rohan',
              tag: 'Long-Distance Relationships',
              bio: 'Spent three years in a long-distance relationship through a job migration. I know the specific strain of distance on love and communication.'
            },
            {
              emoji: '🤝',
              name: 'Divya',
              tag: 'Trust & Communication',
              bio: 'Worked through serious trust issues and rebuilt a relationship from the ground up. I can help you think through what you are feeling and what you actually need.'
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
          <h2>Talk to Someone Who Gets It</h2>
          <p>Find a peer listener who understands relationship stress. First 5 minutes free — no appointments, no waitlists.</p>
          <div className="cta-btns">
            <a href="/browse?topic=relationships"><button className="btn-primary">Browse Relationship Listeners</button></a>
            <a href="/auth"><button className="btn-secondary">Create Free Account</button></a>
          </div>
        </div>

        {/* FAQ */}
        <div className="section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <div className="faq-q">What counts as relationship stress?</div>
            <div className="faq-a">Relationship stress covers any emotional strain arising from your connections with a romantic partner, family members, friends, or colleagues. It includes conflict, trust issues, communication breakdowns, feeling unheard, and the anxiety of not knowing where a relationship stands. You do not need to be in a crisis to seek support.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Can a peer listener really help with relationship problems?</div>
            <div className="faq-a">Peer listeners on LeanOn have personally navigated difficult relationships — including family pressure, toxic dynamics, long-distance stress, and painful breakups. They offer a non-judgmental space and genuine perspective that friends or family often cannot, because they have no stake in your situation.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">How does relationship stress affect mental health in India?</div>
            <div className="faq-a">In India, relationship stress is one of the leading contributors to anxiety, sleep problems, and low self-esteem — particularly because cultural expectations around family, marriage, and loyalty make it hard to set boundaries or talk openly. Getting even one safe space to process these feelings can significantly reduce that burden.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Can I talk about family relationship stress, not just romantic relationships?</div>
            <div className="faq-a">Absolutely. Relationship stress on LeanOn covers all kinds of relationships — parents, in-laws, siblings, friends, and romantic partners. LeanOn is a safe, private space to talk about any relationship that is weighing on you.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">When should relationship stress become a reason to see a therapist?</div>
            <div className="faq-a">If relationship stress is causing persistent depression, anxiety that disrupts daily functioning, thoughts of self-harm, or if the relationship involves abuse or coercion, please seek a qualified mental health professional. LeanOn peer support is a helpful first step, but not a replacement for clinical therapy when those signs are present.</div>
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
          <p>Relationship stress often overlaps with other emotional challenges. Explore more peer support on LeanOn:</p>
          <div className="related">
            <a href="/support/breakup" className="related-link">Breakup &amp; Heartbreak</a>
            <a href="/support/anxiety" className="related-link">Anxiety Support</a>
            <a href="/support/loneliness" className="related-link">Loneliness Support</a>
            <a href="/support/grief" className="related-link">Grief Support</a>
            <a href="/support/emotional-support" className="related-link">Emotional Support</a>
            <a href="/support/anonymous-support" className="related-link">Anonymous Support</a>
            <a href="/browse?topic=relationships" className="related-link">Relationship Listeners</a>
            <a href="/browse" className="related-link">Browse All Listeners</a>
          </div>
        </div>

        {/* People Also Search For */}
        <div className="section">
          <h2>People Also Search For</h2>
          <p>If you&apos;re looking for relationship stress support, these pages may also help:</p>
          <div className="related">
            <a href="/blog/peer-support-vs-therapy-india" className="related-link">Peer support vs therapy</a>
            <a href="/blog/what-does-lean-on-mean" className="related-link">What does &quot;lean on&quot; mean?</a>
            <a href="/blog/joint-family-emotional-support" className="related-link">Joint family support</a>
            <a href="/blog/women-loneliness-india-peer-support" className="related-link">Women&apos;s loneliness</a>
            <a href="/blog/anonymous-emotional-support-india" className="related-link">Anonymous support</a>
            <a href="/blog/how-peer-support-works" className="related-link">How peer support works</a>
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
