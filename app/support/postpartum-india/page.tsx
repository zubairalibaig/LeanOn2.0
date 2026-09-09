import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Postpartum Loneliness and Exhaustion in India — You Don\'t Have to Feel This Way Alone | LeanOn',
  description: 'New motherhood in India can be isolating in ways nobody warns you about — judgment, expectations, lost identity, and exhaustion you cannot admit. Talk to someone who won\'t judge you.',
  keywords: [
    'postpartum support India', 'new mother India emotional support', 'postpartum loneliness India',
    'new mom India mental health', 'postpartum depression India', 'motherhood exhaustion India',
    'new baby stress India', 'feeling overwhelmed new mother India', 'postpartum anxiety India',
    'new mother support India', 'baby blues India', 'motherhood identity India',
    'new baby mental health India', 'postpartum help India',
  ],
  alternates: { canonical: 'https://www.leanon.app/support/postpartum-india', languages: { 'en-IN': 'https://www.leanon.app/support/postpartum-india' } },
  openGraph: {
    title: 'Postpartum Loneliness and Exhaustion in India — You Don\'t Have to Feel This Way Alone | LeanOn',
    description: 'New motherhood in India can be isolating in ways nobody warns you about. Talk to someone who won\'t judge you.',
    url: 'https://www.leanon.app/support/postpartum-india',
    siteName: 'LeanOn',
    type: 'article',
    images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn — Postpartum Support for New Mothers in India' }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is postpartum depression different from baby blues?',
      acceptedAnswer: { '@type': 'Answer', text: 'Baby blues are very common — tearfulness, irritability, and emotional swings in the first one to two weeks after birth, caused by the hormonal shift after delivery. Postpartum depression is more intense, lasts longer, and can include persistent low mood, anxiety, difficulty bonding with the baby, or feeling hopeless. If you are unsure which you are experiencing, it is worth speaking to a doctor — and a LeanOn session can be a supportive space alongside that, not a substitute for medical help.' },
    },
    {
      '@type': 'Question',
      name: 'What if I feel guilty about my feelings?',
      acceptedAnswer: { '@type': 'Answer', text: 'Guilt about postpartum feelings is almost universal. The cultural message is that new motherhood should be purely joyful, so anything other than joy feels like a failure — or like something is wrong with you. It is not. The full range of what you feel is a legitimate response to a profound physical and life change. A listener will not be surprised by the ambivalence, the grief, or the exhaustion — and will not judge you for any of it.' },
    },
    {
      '@type': 'Question',
      name: 'Can I talk about my in-laws in these sessions?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Family dynamics — including the specific pressures of a joint family or in-law involvement after a baby — are things people bring to LeanOn sessions. You can speak about the criticism, the unsolicited advice, the loss of autonomy, or any other dimension of the family situation without the listener taking sides or making judgements about anyone in your life.' },
    },
    {
      '@type': 'Question',
      name: 'What if my husband does not understand what I am going through?',
      acceptedAnswer: { '@type': 'Answer', text: 'This is one of the most common things new mothers describe — feeling alone in the experience even when a partner is present and trying. A LeanOn session is a space where you do not have to manage your husband\'s feelings or explain yourself in a way he can accept. You can say what you are actually experiencing, without softening it.' },
    },
    {
      '@type': 'Question',
      name: 'Is peer support appropriate for postpartum depression or do I need a professional?',
      acceptedAnswer: { '@type': 'Answer', text: 'Postpartum depression is a medical condition and a doctor or therapist is the right primary support. LeanOn is peer support — it is not therapy and does not replace professional care. But if access to a therapist is limited or you are on a waitlist, or if you want a space to talk between professional appointments, peer support can provide genuine relief and reduce isolation. If you are in distress, please reach out to NIMHANS (080-46110007) or Tele-MANAS (14416).' },
    },
    {
      '@type': 'Question',
      name: 'How soon after birth can I use LeanOn?',
      acceptedAnswer: { '@type': 'Answer', text: 'Any time. There is no waiting period. The earliest weeks and months of new motherhood — when you are most sleep-deprived and overwhelmed, and the support has often already gone home — are exactly when many people most need someone to talk to. You can book a session at any point, including the first week home from hospital.' },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Support', item: 'https://www.leanon.app/support' },
    { '@type': 'ListItem', position: 3, name: 'Postpartum Support India', item: 'https://www.leanon.app/support/postpartum-india' },
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
  .hero{margin-bottom:48px;}
  .badge{display:inline-block;background:var(--light);border:1.5px solid var(--border);color:var(--teal);font-size:12px;font-weight:800;padding:6px 14px;border-radius:50px;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:16px;}
  h1{font-size:clamp(28px,6vw,44px);font-weight:900;color:var(--navy);line-height:1.15;margin-bottom:16px;}
  h1 em{color:var(--orange);font-style:normal;}
  .lead{font-size:17px;color:var(--gray);line-height:1.78;font-weight:500;max-width:640px;margin-bottom:28px;}
  .cta-hero{display:inline-block;background:var(--orange);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:16px;padding:14px 32px;border-radius:50px;box-shadow:0 4px 20px rgba(255,153,51,0.35);}
  .section{background:white;border-radius:24px;padding:32px;margin-bottom:24px;border:1.5px solid var(--border);}
  .section h2{font-size:22px;font-weight:800;color:var(--navy);margin-bottom:16px;}
  .section h3{font-size:17px;font-weight:800;color:var(--navy);margin-bottom:8px;margin-top:20px;}
  .section h3:first-of-type{margin-top:0;}
  .section p{font-size:15px;color:#3A6070;line-height:1.80;margin-bottom:14px;}
  .section p:last-child{margin-bottom:0;}
  .section ul{padding-left:20px;margin-bottom:14px;}
  .section ul li{font-size:15px;color:#3A6070;line-height:1.80;margin-bottom:6px;}
  .how-steps{display:flex;flex-direction:column;gap:16px;}
  .step{display:flex;gap:16px;align-items:flex-start;}
  .step-num{width:36px;height:36px;border-radius:50%;background:var(--teal);color:white;font-weight:900;font-size:16px;display:flex;align-items:center;justify-content:center;flex-shrink:0;}
  .step-body h3{font-size:16px;font-weight:800;color:var(--navy);margin-bottom:4px;}
  .step-body p{font-size:14px;color:var(--gray);line-height:1.7;font-weight:500;margin:0;}
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
`

export default function PostpartumIndiaPage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>

      <nav className="nav">
        <a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a>
        <a href="/browse"><button className="btn-nav">Find a listener</button></a>
      </nav>

      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a><span>›</span>
          <a href="/support">Support</a><span>›</span>
          <span style={{color:'var(--navy)'}}>Postpartum Support India</span>
        </nav>

        <div style={{background:'#EBF5FB',borderLeft:'4px solid #1A8FA0',borderRadius:'0 12px 12px 0',padding:'14px 18px',marginBottom:28,fontSize:14,color:'#0F4867',fontWeight:600,lineHeight:1.65}}>
          🆘 In crisis? Call <a href="tel:08046110007" style={{color:'#1A8FA0',fontWeight:800}}>NIMHANS 080-46110007</a> or <a href="tel:14416" style={{color:'#1A8FA0',fontWeight:800}}>Tele-MANAS 14416</a> (free · 24/7 · Govt of India)
        </div>

        <div className="hero">
          <p className="badge">New Motherhood · Postpartum · Peer Support</p>
          <h1>Postpartum Loneliness and Exhaustion in India — <em>You Don&apos;t Have to Feel This Way Alone</em></h1>
          <p className="lead">New motherhood in India can be isolating in ways nobody warns you about — the judgment, the expectations, the loss of your identity, and the exhaustion you cannot admit. A LeanOn listener will not judge you for what you actually feel.</p>
          <a href="/browse" className="cta-hero">Talk to someone who won&apos;t judge you →</a>
        </div>

        <div className="section">
          <h2>The Postpartum Reality Nobody Warned You About</h2>
          <p>Everyone told you it would be hard. Sleepless nights, feeding difficulties, the adjustment. But the specific emotional reality of new motherhood in India is rarely described honestly — and so many new mothers find themselves experiencing something they were not prepared for and have no words for.</p>
          <p>The first weeks after birth can feel like a kind of disappearance. The baby is the centre of everything — every conversation, every visit, every concern. Your body is recovering from something enormous. Your sleep is fractured. Your old life — the work, the social life, the version of yourself that moved through the world with autonomy — has paused or changed shape in ways that feel irreversible.</p>
          <p>And yet the cultural script is: you should be happy. You have a healthy baby. This is what you wanted. Saying anything else feels ungrateful, or wrong, or like a failure. So many new mothers perform gratitude while carrying something much more complicated underneath.</p>
          <p>What is underneath is not a failure of love for your baby. It is the shock of a profound transition, the grief for a life that has changed, the physical depletion, and the emotional weight of a role that is entirely new and utterly relentless. These feelings can coexist with real love for your child. They are not evidence that something is wrong with you. But they need somewhere to go.</p>
        </div>

        <div className="section">
          <h2>The Judgment That Makes It Harder to Say Anything</h2>
          <p>New mothers in India face a particular intensity of scrutiny and opinion that can make the emotional reality even harder to name. Family members, neighbours, and near-strangers feel entitled to comment on how you are feeding, sleeping, holding, dressing your baby — and by extension, how you are performing motherhood.</p>
          <p>The judgment often comes from people who mean well. A mother-in-law insisting on a practice you are uncertain about is not trying to undermine you — she is doing what she believes is best. But the cumulative effect of being watched, corrected, and second-guessed in one of the most vulnerable periods of your life is exhausting and isolating.</p>
          <p>It is also hard to push back against, because the people doing it are people you love, people you depend on, people who are in some cases providing real help. You are not in a position to create conflict. So the feelings — the resentment, the loss of autonomy, the grief for the privacy you used to have — get swallowed. And there is nowhere for them to go.</p>
          <p>Talking about your experience of new motherhood to someone outside the family — someone with no stake in the domestic dynamics, no relationship to protect — can be an enormous relief. Not to solve anything. Just to say it.</p>
        </div>

        <div className="section">
          <h2>Joint Family vs Alone — Two Different Kinds of Hard</h2>
          <p>The postpartum experience in India splits along a particular line: those in nuclear families, and those in or near joint families. The emotional difficulties are real in both — but they look different.</p>

          <h3>In a nuclear family</h3>
          <p>The nuclear family new mother often has more autonomy — she makes the decisions about her baby, her household, her daily life. But she also has less support. The physical load falls almost entirely on her and her partner. After the initial visits from family, she is often alone with a baby for long stretches. The loneliness can be acute: days that blur together, very little adult conversation, the feeling of the walls coming in.</p>

          <h3>In or near a joint family</h3>
          <p>The joint family new mother has help — but the help comes with conditions. Opinions about how to raise the baby. Presence she did not ask for. A loss of the small private space she had before. She may have less loneliness in the physical sense, but a different kind of isolation: the feeling of being surrounded by people while unable to say what she actually thinks or feels. The performance of gratitude for help she did not choose. The erosion of autonomy at exactly the moment she is most vulnerable.</p>
          <p>Both of these are genuinely hard. Neither should be minimised. And in both cases, there is often no neutral party to talk to who is not also part of the situation.</p>
        </div>

        <div className="section">
          <h2>Why It Is Not Weakness to Need to Talk About This</h2>
          <p>There is a particular shame attached to postpartum emotional distress in India — partly because of the cultural message about how motherhood should feel, and partly because so many previous generations navigated it without naming it. "My mother-in-law had five children and no one asked how she was feeling." "Women have always done this." "My own mother never complained."</p>
          <p>This comparison is not fair to you, and it is not accurate about what previous generations experienced. The silence did not mean the feeling was not there — it meant it was not allowed. Women who were not permitted to name their postpartum distress still experienced it. The silence did not make them stronger; it made them alone with something heavy.</p>
          <p>Needing to talk about how you feel after having a baby is not weakness. It is what human beings need — to process their experience with another person, to feel heard, to not carry it entirely alone. The fact that you want to say something out loud does not mean you are not coping. It means you are human.</p>
          <p>You do not have to earn the right to need support by demonstrating that you are struggling enough. You can be functioning, loving your baby, and still need somewhere to say the complicated truth of what the past weeks or months have been like.</p>
        </div>

        <div className="section">
          <h2>A Space Where You Can Say the Real Thing</h2>
          <p>A LeanOn session is not a substitute for medical care. If you are experiencing symptoms of postpartum depression — persistent low mood, difficulty bonding, intrusive thoughts, or thoughts of harming yourself or your baby — please talk to a doctor. The helplines NIMHANS (080-46110007) and Tele-MANAS (14416) are free and available 24/7.</p>
          <p>But for the vast territory between clinical crisis and performing-fine — the exhaustion, the ambivalence, the grief, the loneliness, the anger you cannot show, the feelings you have not named to anyone yet — peer support offers something that therapy and helplines do not always provide: a real person who has been through something similar, listening without agenda, without judgment, and without needing anything from you in return.</p>
          <p>You can start a session with "I just had a baby and I do not know how I feel" or "I am not okay and I do not know how to say it to anyone in my life." That is enough. A listener will meet you there.</p>
          <div className="how-steps" style={{marginTop:20}}>
            <div className="step">
              <div className="step-num">1</div>
              <div className="step-body">
                <h3>Browse listeners — many are parents themselves</h3>
                <p>Look for someone whose experience feels relevant to yours. Many listeners have navigated new motherhood or the specific pressures of family dynamics in India.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">2</div>
              <div className="step-body">
                <h3>Book when you have a moment</h3>
                <p>Even 15 minutes matters. Sessions from ₹160. No appointment needed — whenever the baby is asleep or with someone else.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">3</div>
              <div className="step-body">
                <h3>Say what you have not been able to say</h3>
                <p>The listener will not judge you, will not report back to your family, and will not tell you how you should feel. Just listen.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="section">
          <h2>Frequently Asked Questions</h2>
          {faqs.map((f, i) => (
            <div className="faq-item" key={i}>
              <p className="faq-q">{f.name}</p>
              <p className="faq-a">{f.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>

        <div className="cta-card">
          <h2>You do not have to feel this way alone</h2>
          <p>Anonymous. No judgment. A real person who will hear the complicated truth of what new motherhood has been like — without telling you how you should feel.</p>
          <a href="/browse" className="btn-cta">Find a listener now →</a>
        </div>

        <div className="section">
          <h2>You Might Also Find This Helpful</h2>
          <div className="related">
            <a href="/i-need-someone-to-talk-to">Need to talk →</a>
            <a href="/support/anxiety">Anxiety →</a>
            <a href="/support/loneliness">Loneliness →</a>
            <a href="/support/need-to-vent">Need to vent →</a>
            <a href="/support/relationship-anxiety">Relationship anxiety →</a>
            <a href="/support/someone-to-talk-to">Someone to talk to →</a>
          </div>
        </div>
      </div>
    </>
  )
}
