import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Feeling Lonely in Your Marriage? Talk to Someone | LeanOn India',
  description: 'Lonely in your marriage? Talk anonymously to a peer listener who has felt it too. Private, judgment-free emotional support in India. First 5 minutes free.',
  keywords: 'lonely in marriage, emotional loneliness marriage India, feeling alone in relationship, married but lonely, talk to someone about marriage, marriage loneliness support India, anonymous emotional support for married people',
  alternates: { canonical: 'https://www.leanon.app/support/marriage-loneliness', languages: { 'en-IN': 'https://www.leanon.app/support/marriage-loneliness' } },
  openGraph: {
    title: 'Feeling Lonely in Your Marriage? Talk to Someone | LeanOn India',
    description: 'Lonely in your marriage? Talk anonymously to a peer listener who has felt it too. Private, judgment-free emotional support in India. First 5 minutes free.',
    url: 'https://www.leanon.app/support/marriage-loneliness',
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
      name: 'Is it normal to feel lonely even in a good marriage?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, and it is far more common than most people realise. You can have a kind, dependable partner and a household that runs smoothly, and still feel unseen inside it. Emotional loneliness is not a verdict on your marriage or on your partner. It usually means a particular kind of connection is missing right now, and that feeling deserves to be heard rather than argued away.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between marriage problems and emotional loneliness?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Marriage problems are usually about specific conflicts: money, in-laws, decisions, disagreements you can name. Emotional loneliness is quieter. Nothing is obviously wrong, there may be no fights at all, and yet you feel like nobody really knows what your days feel like from the inside. Many people carry this for years precisely because there is no incident to point to.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is it so hard to talk about this in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Marriage in India is rarely private. Parents, siblings, in-laws and mutual friends are all part of the picture, so anything you say can travel. There is the constant weight of log kya kahenge, the fear that a passing confession becomes family gossip, and the worry that speaking honestly will be read as a complaint against your partner. Most people stay silent to protect everyone else, and end up alone with it.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does talking to a stranger actually help?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Often it helps precisely because they are a stranger. A LeanOn listener has no stake in your marriage, no relationship with your family, and nothing to gain from any outcome. That makes it possible to say the sentence you have never said out loud, without managing how anyone else feels or worrying who will hear about it later. Being heard by someone empathetic does not fix a marriage, but it can lift a great deal of the weight you have been carrying alone.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does LeanOn peer support cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LeanOn starts at ₹160 for a 15-minute session, with the first 5 minutes free so you can find the right listener before committing. There is no subscription and no appointment. LeanOn is peer support, not couples counselling or marriage therapy, and it is available any time, including late at night.',
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
    { '@type': 'ListItem', position: 3, name: 'Marriage Loneliness', item: 'https://www.leanon.app/support/marriage-loneliness' },
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

export default function MarriageLonelinessSupportPage() {
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
          <span style={{color:'var(--navy)'}}>Marriage Loneliness</span>
        </nav>

        <div style={{background:'#EBF5FB',borderLeft:'4px solid #1A8FA0',borderRadius:'0 12px 12px 0',padding:'14px 18px',marginBottom:28,fontSize:14,color:'#0F4867',fontWeight:600,lineHeight:1.65}}>
          🆘 In crisis? Call <a href="tel:08046110007" style={{color:'#1A8FA0',fontWeight:800}}>NIMHANS 080-46110007</a> or <a href="tel:14416" style={{color:'#1A8FA0',fontWeight:800}}>Tele-MANAS 14416</a> (free · 24/7 · Govt of India)
        </div>

        {/* Hero */}
        <div className="hero">
          <p className="tag">Peer Support · Loneliness in Marriage</p>
          <h1>You Can Be Married and Still Feel <em>Alone</em></h1>
          <p className="lead">Some of the deepest loneliness happens inside a marriage, not outside one. If you have been carrying a quiet ache that you cannot explain to family or mutual friends, LeanOn gives you a completely private space to say it out loud — to a peer listener who has felt something similar and will simply listen.</p>
        </div>

        {/* Understanding */}
        <div className="section">
          <h2>Understanding Loneliness Inside a Marriage</h2>
          <p>This is one of the least-discussed forms of loneliness in India, and one of the heaviest. There may be nothing dramatic to report — no crisis, no cruelty, often no fights at all. Just a persistent sense that the person closest to you does not quite know what your days feel like from the inside, and that you have nowhere to put that feeling.</p>

          <h3>The Specific Ache of Being Lonely Next to Someone</h3>
          <p>Loneliness when you live alone at least makes sense to people. Loneliness while sharing a home, a bed, and a life with someone is harder to explain and harder to admit. You can be sitting a foot apart and feel a distance you have no words for. That does not make you ungrateful, and it does not mean your partner has failed you. It means a particular kind of emotional connection is missing right now, and the missing is real.</p>

          <h3>When Conversation Becomes Logistics</h3>
          <p>Many couples do not stop talking — they stop connecting. The conversation quietly narrows to school pickups, EMIs, the maid, the electricity bill, whose parents are visiting, what to cook. All of it necessary, none of it nourishing. Months pass and you realise nobody has asked how you actually are, and you have not asked either, because the day never seems to leave room for it.</p>

          <h3>Arranged Marriage and Early Adjustment Loneliness</h3>
          <p>In the first year or two of a marriage, especially an arranged one, you are often building intimacy with someone you are still learning. You may have moved cities, joined a new household, and left behind the friends who knew you best — all at once. Everyone around you assumes you are settling in beautifully. Saying you feel lonely can feel like an accusation against a partner who has done nothing wrong, so most people simply do not say it.</p>

          <h3>Loneliness After Children Arrive</h3>
          <p>Children can bring enormous joy and, at the same time, a kind of loneliness that surprises people. Days become shifts. You and your partner start operating as an efficient team rather than as two people who choose each other. Mothers often describe being touched all day and emotionally unmet all day; fathers often describe feeling peripheral and unsure how to say so. Both are lonely, and neither finds it easy to admit.</p>

          <h3>Why Indian Couples Rarely Speak About This Openly</h3>
          <p>Marriage here is rarely private. Parents, siblings and in-laws are woven into it, and mutual friends belong to both of you. A sentence said in confidence can reach a family WhatsApp group by evening. Add log kya kahenge, the fear of being seen as ungrateful, and the worry that being honest is disloyal, and most people conclude that silence is the safest option. The silence protects everyone else, and leaves you alone with it.</p>
        </div>

        {/* How LeanOn helps */}
        <div className="section">
          <h2>How LeanOn Helps</h2>
          <p>LeanOn is peer support — real people who have lived through hard things, listening to other real people. Here is what that looks like when the thing you are carrying is loneliness inside your marriage:</p>

          <h3>A Space Completely Outside Your Social and Family Circle</h3>
          <p>Your listener does not know your spouse, your parents, your in-laws, your colleagues or your neighbours, and never will. Nothing you say travels. There is no one to run into at a wedding, no risk of a well-meaning relative bringing it up later. For many people, this is the first place where the words can leave their body safely.</p>

          <h3>Anonymity Means Honesty Without Consequences</h3>
          <p>When you have to protect a marriage, a family reputation and other people&apos;s feelings all at once, honesty becomes expensive. Anonymity removes that cost. You can describe the loneliness exactly as it is, without softening it, without building a case, and without worrying that saying it out loud makes it permanent.</p>

          <h3>Listeners Who Have Lived This Themselves</h3>
          <p>Our listeners are not reading from a script. Many have sat with this same quiet distance in their own marriages, through early adjustment years, through the exhaustion of small children, through seasons where the conversation shrank to logistics. That lived experience is what makes their empathy feel real rather than performed.</p>

          <h3>Being Heard Without Anyone Taking Sides</h3>
          <p>Friends and family, however loving, tend to take a position. They defend your partner, or they turn against them, and either way you end up managing their reaction instead of your own feelings. A LeanOn listener does neither. They do not judge your spouse, they do not tell you what your marriage should look like, and they do not hand you a plan. They stay with you while you say the true thing, which is often exactly what has been missing.</p>
        </div>

        {/* Boundaries */}
        <div className="section">
          <h2>What LeanOn Is Not</h2>
          <p>We want to be completely honest with you about this, because your marriage matters too much for vague promises.</p>

          <h3>LeanOn Is Not Couples Counselling or Marriage Therapy</h3>
          <p>We do not do joint sessions, mediation, or structured marital work. Our listeners are trained peers, not licensed therapists or marriage counsellors, and a LeanOn session is not a substitute for either. What we offer is one hour of the week where you are the one being listened to.</p>

          <h3>Our Listeners Do Not Give Relationship Advice or Take Sides</h3>
          <p>No listener will tell you to stay, to leave, to confront, or to compromise. They will not diagnose your partner from one side of the story, and they will never suggest what you should do about your marriage. Those decisions are yours, and they deserve far more context than any stranger has. What a listener offers is empathetic attention while you think out loud.</p>

          <h3>When Something More Is the Right Step</h3>
          <p>If you and your partner want to work on the relationship together, couples counselling or marital therapy is genuinely the right tool, and we would encourage you to seek it. The same is true if you are experiencing persistent depression, anxiety, or any situation where you feel unsafe — please reach out to a qualified mental health professional, or to NIMHANS on 080-46110007 or Tele-MANAS on 14416. Talking to a peer listener can sit alongside that support; it is not meant to replace it.</p>
        </div>

        {/* Listener cards */}
        <h2 style={{fontSize:'20px',fontWeight:800,color:'var(--navy)',marginBottom:'16px'}}>Listeners Who Understand This Kind of Loneliness</h2>
        <div className="listeners-grid">
          {[
            {
              emoji: '🌿',
              name: 'Anjali',
              tag: 'Married 9 years',
              bio: 'Went through years where our talk was only about school runs and bills. I know that quiet distance well, and I will not judge yours.'
            },
            {
              emoji: '☕',
              name: 'Rohan',
              tag: 'New marriage adjustment',
              bio: 'The first two years after my wedding were lonelier than I expected, and I had nobody to say that to. Now I listen for a living.'
            },
            {
              emoji: '🌾',
              name: 'Sneha',
              tag: 'Loneliness after kids',
              bio: 'After my second child I felt unseen even in a full house. Nothing was wrong, and everything felt far away. I understand that feeling.'
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
          <h2>Ready to Be Heard?</h2>
          <p>Talk to a peer listener who understands loneliness inside a marriage. Completely anonymous, outside your circle. First 5 minutes free — no appointments, no waitlists.</p>
          <div className="cta-btns">
            <a href="/browse?topic=marriage-loneliness"><button className="btn-primary">Browse Listeners</button></a>
            <a href="/auth"><button className="btn-secondary">Create Free Account</button></a>
          </div>
        </div>

        {/* FAQ */}
        <div className="section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <div className="faq-q">Is it normal to feel lonely even in a good marriage?</div>
            <div className="faq-a">Yes, and it is far more common than most people realise. You can have a kind, dependable partner and a household that runs smoothly, and still feel unseen inside it. Emotional loneliness is not a verdict on your marriage or on your partner. It usually means a particular kind of connection is missing right now, and that feeling deserves to be heard rather than argued away.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">What is the difference between marriage problems and emotional loneliness?</div>
            <div className="faq-a">Marriage problems are usually about specific conflicts: money, in-laws, decisions, disagreements you can name. Emotional loneliness is quieter. Nothing is obviously wrong, there may be no fights at all, and yet you feel like nobody really knows what your days feel like from the inside. Many people carry this for years precisely because there is no incident to point to.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Why is it so hard to talk about this in India?</div>
            <div className="faq-a">Marriage in India is rarely private. Parents, siblings, in-laws and mutual friends are all part of the picture, so anything you say can travel. There is the constant weight of log kya kahenge, the fear that a passing confession becomes family gossip, and the worry that speaking honestly will be read as a complaint against your partner. Most people stay silent to protect everyone else, and end up alone with it.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Does talking to a stranger actually help?</div>
            <div className="faq-a">Often it helps precisely because they are a stranger. A LeanOn listener has no stake in your marriage, no relationship with your family, and nothing to gain from any outcome. That makes it possible to say the sentence you have never said out loud, without managing how anyone else feels or worrying who will hear about it later. Being heard by someone empathetic does not fix a marriage, but it can lift a great deal of the weight you have been carrying alone.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">How much does LeanOn peer support cost?</div>
            <div className="faq-a">LeanOn starts at ₹160 for a 15-minute session, with the first 5 minutes free so you can find the right listener before committing. There is no subscription and no appointment. LeanOn is peer support, not couples counselling or marriage therapy, and it is available any time, including late at night.</div>
          </div>
        </div>

        {/* Related pages */}
        <div className="section">
          <h2>Related Support Topics</h2>
          <p>Loneliness inside a marriage rarely travels alone. Explore more peer support on LeanOn:</p>
          <div className="related">
            <a href="/support/loneliness" className="related-link">Loneliness Support</a>
            <a href="/support/relationship-stress" className="related-link">Relationship Stress</a>
            <a href="/support/anonymous-support" className="related-link">Anonymous Support</a>
            <a href="/support/someone-to-talk-to" className="related-link">Someone to Talk To</a>
            <a href="/support/emotional-support" className="related-link">Emotional Support</a>
            <a href="/browse" className="related-link">Browse All Listeners</a>
          </div>
        </div>

        {/* People Also Search For */}
        <div className="section">
          <h2>People Also Search For</h2>
          <p>If you&apos;re looking for support with loneliness in your marriage, these pages may also help:</p>
          <div className="related">
            <a href="/blog/women-loneliness-india-peer-support" className="related-link">Women&apos;s loneliness</a>
            <a href="/blog/joint-family-emotional-support" className="related-link">Joint family support</a>
            <a href="/blog/empathy-in-peer-support" className="related-link">Empathy in peer support</a>
            <a href="/delhi" className="related-link">Peer support Delhi</a>
            <a href="/mumbai" className="related-link">Peer support Mumbai</a>
            <a href="/bengaluru" className="related-link">Peer support Bengaluru</a>
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
