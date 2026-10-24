import type { Metadata } from 'next'
import QuickAnswer from '@/app/components/QuickAnswer'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'A Safe Online Service for Women in India Who Just Need Someone to Listen | LeanOn',
  description: 'A safe, private place for women in India to talk about marriage, relationships, in-laws, motherhood and stress. Choose a woman listener, use any name, text or voice. Listeners never see your number. First 5 minutes free.',
  keywords: [
    'emotional support for women India', 'women mental health India', 'support for women India',
    'working women stress India', 'women emotional health India', 'Indian women mental health',
    'support for mothers India', 'women who need to talk India', 'lonely married women India',
    'women burnout India', 'women carrying everything India', 'support group women India',
    'married women mental health India', 'women emotional support online India',
    'women peer support India', 'strong women who need support India',
    'talk to a woman listener', 'female listener India', 'safe app for women to talk India',
    'women relationship problems India', 'married women talk to someone India',
  ],
  alternates: { canonical: 'https://www.leanon.app/for-women', languages: { 'en-IN': 'https://www.leanon.app/for-women' } },
  openGraph: {
    title: 'Emotional Support for Women India | LeanOn',
    description: 'For women who carry everything and still feel like they are not doing enough. Talk to someone who understands.',
    url: 'https://www.leanon.app/for-women',
    siteName: 'LeanOn',
    type: 'website',
    images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn — Emotional Support for Women India' }],
  },
}

const directQuestion = "Is there a safe online service for women in India who just need someone to listen?"
const directAnswer = "LeanOn lets adults in India request one-to-one text or voice conversations with screened peer listeners about marital loneliness, family pressure, parenting and work stress. You can choose a woman listener on Browse, use any name, and listeners never see your phone number. It offers non-clinical peer support, not therapy or couples counselling. One introductory session of up to five minutes is free per account; paid prices and listener availability vary."

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: directQuestion, acceptedAnswer: { '@type': 'Answer', text: directAnswer } },
    {
      '@type': 'Question',
      name: 'Is there a safe app in India where a woman can talk to someone privately?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. LeanOn (www.leanon.app) is a peer support app where you talk one-to-one, by text or voice, with a screened listener in India. You use any first name you like, the listener never sees your phone number, and phone numbers, emails and social media handles are blocked in chat, so nobody can pull you onto WhatsApp or Instagram. The first 5 minutes are free; after that a 15-minute session starts at ₹160.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I choose to talk to a woman?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. On the Browse page every listener shows their real first name, photo, languages and topics, so you can pick a woman listener yourself. Talk now connects you with whoever is online first, so if you would rather talk to a woman, choose from Browse instead.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will my husband, in-laws or family find out?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nobody is told. Your listener sees only the name you choose — not your phone number — and never meets anyone in your life. Voice calls are not recorded. Text chats are stored securely and opened only by authorised LeanOn staff if a report is reviewed. If others use your phone, remember the LeanOn app or browser history shows like any other, so use your own phone if you can.',
      },
    },
    {
      '@type': 'Question',
      name: 'What do women usually talk about on LeanOn?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Feeling alone inside a marriage, a husband who does not listen, in-law pressure, fights that keep repeating, doubts about an arranged marriage, motherhood exhaustion, career breaks, family pressure to marry, and simply having nobody who asks how you are doing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is LeanOn therapy or marriage counselling?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. LeanOn listeners are screened peers, not therapists or counsellors. They listen and help you think things through; they do not diagnose, give legal advice, or tell you to stay or leave. If you need therapy or couples counselling, LeanOn can sit alongside it, not replace it.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if I am not safe at home?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If you are in danger, contact the police or local emergency services first. If you are in emotional crisis or thinking of harming yourself, call Tele-MANAS on 14416 or NIMHANS on 080-46110007 (free). LeanOn is for talking things through, not for emergencies.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'For Women', item: 'https://www.leanon.app/for-women' },
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
  .page{max-width:820px;margin:0 auto;padding:16px 24px 100px;}
  .breadcrumb{display:flex;gap:6px;align-items:center;font-size:13px;font-weight:600;color:var(--gray);margin-bottom:32px;flex-wrap:wrap;}
  .breadcrumb span{color:var(--border);}
  .breadcrumb a:hover{color:var(--teal);}
  .hero-tag{font-size:12px;font-weight:800;color:var(--teal);text-transform:uppercase;letter-spacing:0.1em;margin-bottom:12px;}
  h1{font-size:clamp(28px,5vw,44px);font-weight:900;color:var(--navy);line-height:1.12;margin-bottom:20px;}
  h1 em{color:var(--orange);font-style:normal;}
  .lead{font-size:17px;color:var(--gray);line-height:1.8;font-weight:500;margin-bottom:40px;max-width:640px;}
  h2{font-size:21px;font-weight:800;color:var(--navy);margin-top:40px;margin-bottom:16px;}
  p{font-size:15px;color:#3A6070;line-height:1.82;font-weight:500;margin-bottom:16px;}
  .situations{display:grid;gap:14px;margin:24px 0;}
  .sit{display:flex;gap:14px;align-items:flex-start;background:white;border-radius:18px;padding:20px 22px;border:1.5px solid var(--border);}
  .sit-icon{font-size:22px;flex-shrink:0;line-height:1.3;}
  .sit-body h3{font-size:15px;font-weight:800;color:var(--navy);margin-bottom:4px;}
  .sit-body p{font-size:13px;color:var(--gray);margin:0;line-height:1.65;}
  .topics-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:12px;margin:24px 0;}
  .topic-card{background:white;border-radius:16px;padding:18px 20px;border:1.5px solid var(--border);transition:border-color 0.2s,transform 0.15s;display:block;}
  .topic-card:hover{border-color:var(--teal);transform:translateY(-2px);}
  .topic-card h4{font-size:14px;font-weight:800;color:var(--navy);margin-bottom:4px;}
  .topic-card p{font-size:12px;color:var(--gray);margin:0;line-height:1.55;}
  .quote-box{background:var(--light);border-left:4px solid var(--teal);border-radius:0 16px 16px 0;padding:20px 24px;margin:28px 0;}
  .quote-box p{font-size:15px;color:var(--navy);font-style:italic;margin-bottom:6px;}
  .quote-box span{font-size:12px;color:var(--gray);font-weight:700;}
  .how-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin:24px 0;}
  @media(max-width:600px){.how-grid{grid-template-columns:1fr;}}
  .how-card{background:white;border-radius:18px;padding:22px;border:1.5px solid var(--border);text-align:center;}
  .how-num{font-size:28px;font-weight:900;color:var(--teal);margin-bottom:8px;}
  .how-card h4{font-size:14px;font-weight:800;color:var(--navy);margin-bottom:6px;}
  .how-card p{font-size:12px;color:var(--gray);margin:0;line-height:1.6;}
  .faq{margin-top:44px;}
  .faq-item{border-bottom:1.5px solid var(--border);padding:18px 0;}
  .faq-item:last-child{border-bottom:none;}
  .faq-q{font-size:15px;font-weight:800;color:var(--navy);margin-bottom:8px;}
  .faq-a{font-size:14px;color:#3A6070;line-height:1.72;font-weight:500;}
  .cta-card{background:var(--navy);border-radius:24px;padding:44px 32px;text-align:center;margin-top:52px;}
  .cta-card h2{font-size:24px;font-weight:900;color:white;margin-bottom:12px;}
  .cta-card p{font-size:15px;color:rgba(201,231,244,0.85);font-weight:500;margin-bottom:28px;line-height:1.72;}
  .cta-btns{display:flex;gap:12px;justify-content:center;flex-wrap:wrap;}
  .btn-primary{background:var(--orange);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:15px;padding:14px 30px;border-radius:50px;border:none;cursor:pointer;box-shadow:0 4px 20px rgba(255,153,51,0.35);}
  .btn-secondary{background:rgba(255,255,255,0.12);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:14px;padding:13px 24px;border-radius:50px;border:1.5px solid rgba(255,255,255,0.3);cursor:pointer;}
  .price-note{font-size:13px;color:rgba(201,231,244,0.7);margin-top:12px;margin-bottom:0;}
`

const situations = [
  { icon: '💍', title: 'You are married but feel completely alone', body: 'Your husband is physically present but emotionally checked out. You stopped expecting support a long time ago. You do most things alone — including feeling things.' },
  { icon: '👶', title: 'You are burning out as a mother', body: 'You love your child. You also need a break, and you feel guilty saying that. You are exhausted in a way that sleep does not fix.' },
  { icon: '💼', title: 'You took a career break and lost yourself a little', body: 'You were someone before you became a wife and mother. That person is still there, but buried under other people\'s needs.' },
  { icon: '👨‍👩‍👧', title: 'Your family of origin is a source of pain, not comfort', body: 'Going to your parents\' house does not feel like rest. You leave more drained than when you arrived.' },
  { icon: '💸', title: 'You are dealing with financial stress alone', body: 'Whether your husband has stopped contributing, or you are managing everything solo — the financial weight falls on you while no one acknowledges it.' },
  { icon: '🪞', title: 'You keep wondering if you are the problem', body: 'When multiple people seem to have issues with you, it is easy to conclude that something is wrong with you. It is rarely that simple.' },
]

const topics = [
  { slug: '/support/married-but-lonely', title: 'Married but Lonely', desc: 'The specific ache of being alone inside a marriage' },
  { slug: '/support/mom-burnout-india', title: 'Mom Burnout', desc: 'Exhausted, touched out, no one asking how you are' },
  { slug: '/support/working-woman-india', title: 'Working Woman Stress', desc: 'Career + home + family, all at once' },
  { slug: '/support/husband-not-supportive-india', title: 'Unsupportive Husband', desc: 'Emotional and financial withdrawal in marriage' },
  { slug: '/support/postpartum-india', title: 'Postpartum Isolation', desc: 'New motherhood and feeling completely alone' },
  { slug: '/support/family-pressure-india', title: 'Family Pressure', desc: 'Parents, in-laws, expectations, guilt' },
  { slug: '/support/arranged-marriage-stress', title: 'Arranged Marriage Stress', desc: 'Profile fatigue, age pressure, family timelines' },
  { slug: '/support/feeling-lost', title: 'Feeling Lost', desc: 'When you have no idea who you are anymore' },
]

export default function ForWomenPage() {
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
          <span style={{color:'var(--navy)'}}>For Women</span>
        </nav>

        <p className="hero-tag">Women · Emotional Support · India</p>
        <h1>A Safe Online Service for Women in India Who Just Need <em>Someone to Listen</em></h1>
        <p style={{ fontSize: 20, fontWeight: 800, color: '#FF9933', margin: '-6px 0 14px' }}>You hold everything together. Who holds you?</p>
        <p className="lead">
          You manage the child, the house, the career, the family relationships, the finances, and the emotional labour
          of everyone around you. You do it well. And somewhere in the middle of all of that, you stopped being asked
          how you are doing. LeanOn is a real person who will actually listen — just to you, just about you, for once.
        </p>

        <QuickAnswer question={directQuestion} answer={directAnswer} />
        <p style={{ fontSize: 14, margin: '10px 0 20px', lineHeight: 1.7, color: '#4A6470' }}>Not sure what kind of help fits? <a href="/relationship-emotional-support-guide-india" style={{ fontWeight: 800, color: '#0F7788', textDecoration: 'underline' }}>Read our relationship and emotional support guide</a> for marriage, family pressure, women’s emotional load, and when to choose counselling instead of peer listening.</p>
        <h2>If Any of This Sounds Familiar</h2>
        <div className="situations">
          {situations.map((s, i) => (
            <div key={i} className="sit">
              <div className="sit-icon">{s.icon}</div>
              <div className="sit-body">
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            </div>
          ))}
        </div>

        <h2>Built So You Can Talk Safely</h2>
        <div className="situations">
          <div className="sit"><div className="sit-icon">🙋‍♀️</div><div className="sit-body"><h3>Choose who you talk to</h3><p>Every listener shows a real first name and photo. Pick a woman listener from Browse if that feels easier.</p></div></div>
          <div className="sit"><div className="sit-icon">🔒</div><div className="sit-body"><h3>Your number stays private</h3><p>Use any first name. The listener never sees your phone number, and numbers, emails and Instagram handles are blocked in chat.</p></div></div>
          <div className="sit"><div className="sit-icon">✋</div><div className="sit-body"><h3>You are in control</h3><p>End a session the moment it feels wrong, and report the listener afterwards. Flirting or sexual talk gets a listener banned.</p></div></div>
          <div className="sit"><div className="sit-icon">🎧</div><div className="sit-body"><h3>Text or voice</h3><p>Type if you cannot speak freely at home. Voice calls are never recorded.</p></div></div>
        </div>

        <h2>Practical Answers</h2>
        <div className="situations">
          <div className="sit"><div className="sit-icon">🏠</div><div className="sit-body"><h3>If you are at home all day</h3><p>Many homemakers talk in the quiet hours — after lunch, or once children are asleep. A 15-minute text session works without anyone hearing you, and you can stop at any time.</p></div></div>
          <div className="sit"><div className="sit-icon">💼</div><div className="sit-body"><h3>If you are a working mother</h3><p>There is no appointment, so you can use a lunch break or the commute. Choose 15 minutes if that is all you have; unused minutes go back to your wallet if you end early.</p></div></div>
          <div className="sit"><div className="sit-icon">📱</div><div className="sit-body"><h3>If you share a phone or home</h3><p>Use text if you cannot speak freely. LeanOn appears in your browser history or app list like any other app, so use your own phone if you can. Listeners never see your number, and LeanOn never contacts your family.</p></div></div>
          <div className="sit"><div className="sit-icon">🙋‍♀️</div><div className="sit-body"><h3>How to choose a woman listener</h3><p>Open <a href="/browse" style={{color:'var(--teal)',fontWeight:800}}>Browse</a>, read the profiles (first name, photo, languages, topics) and request the listener you want. Talk now picks whoever is online first, so use Browse if you would prefer a woman. A session starts when she accepts.</p></div></div>
        </div>

        <h2>What Women Talk About on LeanOn</h2>
        <div className="topics-grid">
          {topics.map((t) => (
            <a key={t.slug} href={t.slug} className="topic-card">
              <h4>{t.title}</h4>
              <p>{t.desc}</p>
            </a>
          ))}
        </div>

        <h2>Peer Support and Therapy Serve Different Needs</h2>
        <p>
          Private therapy in India costs ₹1,500–₹5,000 per session. That is a real barrier — especially when
          you are already carrying financial pressure. Even when you can afford it, finding a therapist, making
          an appointment, and then explaining your entire situation from scratch to a stranger takes more energy
          than you have.
        </p>
        <p>
          LeanOn is not therapy. It is screened peer support — real people who have lived through their own hard
          seasons and learned to listen without fixing, without judging, and without making it about themselves.
          Sessions start at ₹160 for 15 minutes. The first 5-minute session free.
        </p>

        <h2>How It Works</h2>
        <div className="how-grid">
          <div className="how-card">
            <div className="how-num">1</div>
            <h4>Browse listeners</h4>
            <p>See each listener&apos;s name, photo, languages and topics. Choose a woman listener if you prefer.</p>
          </div>
          <div className="how-card">
            <div className="how-num">2</div>
            <h4>Start talking</h4>
            <p>Text or voice. First 5 minutes free. No appointment, no commute, no waiting room.</p>
          </div>
          <div className="how-card">
            <div className="how-num">3</div>
            <h4>Be heard</h4>
            <p>Not advised, not fixed, not rushed. Just heard — which is usually what you needed.</p>
          </div>
        </div>

        <div className="faq">
          <h2>Questions Women Ask</h2>
          {faqSchema.mainEntity.map((item, i) => (
            <div key={i} className="faq-item">
              <div className="faq-q">{item.name}</div>
              <div className="faq-a">{item.acceptedAnswer.text}</div>
            </div>
          ))}
        </div>

        <div className="cta-card">
          <h2>You Deserve to Be Heard Too</h2>
          <p>Browse screened peer listeners, choose a woman if you prefer, and talk by text or voice. Your number stays private.</p>
          <div className="cta-btns">
            <a href="/browse"><button className="btn-primary">Browse Listeners</button></a>
            <a href="/how-leanon-works"><button className="btn-secondary">How it works</button></a>
          </div>
          <p className="price-note">First 5 minutes free · Sessions from ₹160 · No appointment needed</p>
        </div>
      </div>
    </>
  )
}
