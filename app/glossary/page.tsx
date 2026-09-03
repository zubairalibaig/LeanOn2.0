import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Glossary — Peer Support Terms | LeanOn',
  description: 'Definitions of peer support terms used on LeanOn: lean on, peer support, peer listener, emotional support, peer counselling, and more. Your guide to understanding emotional wellness.',
  alternates: { canonical: 'https://www.leanon.app/glossary' },
  keywords: ['lean on meaning', 'peer support definition', 'what is peer support', 'peer listener meaning', 'emotional support definition'],
}

const definedTermSchema = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTermSet',
  name: 'LeanOn Peer Support Glossary',
  url: 'https://www.leanon.app/glossary',
  hasDefinedTerm: [
    {
      '@type': 'DefinedTerm',
      name: 'Lean On',
      description: 'To "lean on" someone means to rely on them emotionally — to draw support, comfort, or strength from another person during a difficult time. LeanOn (the platform) is named after this concept: giving everyone access to someone to lean on.',
      url: 'https://www.leanon.app/glossary#lean-on',
      inDefinedTermSet: 'https://www.leanon.app/glossary',
    },
    {
      '@type': 'DefinedTerm',
      name: 'Peer Support',
      description: 'Peer support is emotional and social support given by a person who has lived experience of a similar challenge. Unlike professional therapy, peer support is based on shared experience, empathy, and mutual understanding rather than clinical expertise.',
      url: 'https://www.leanon.app/glossary#peer-support',
      inDefinedTermSet: 'https://www.leanon.app/glossary',
    },
    {
      '@type': 'DefinedTerm',
      name: 'Peer Listener',
      description: 'A peer listener is a trained individual who provides emotional support based on their own lived experience. On LeanOn, peer listeners are verified real people who have personally navigated challenges like loneliness, burnout, grief, or anxiety.',
      url: 'https://www.leanon.app/glossary#peer-listener',
      inDefinedTermSet: 'https://www.leanon.app/glossary',
    },
    {
      '@type': 'DefinedTerm',
      name: 'Emotional Support',
      description: 'Emotional support is the provision of empathy, caring, and understanding to someone experiencing stress or difficulty. It focuses on the person\'s feelings rather than problem-solving, and helps them feel less alone.',
      url: 'https://www.leanon.app/glossary#emotional-support',
      inDefinedTermSet: 'https://www.leanon.app/glossary',
    },
    {
      '@type': 'DefinedTerm',
      name: 'Peer Counselling',
      description: 'Peer counselling is a form of support where individuals with similar life experiences provide guidance, support, and understanding to one another. It is distinct from professional counselling — peer counsellors are not licensed clinicians.',
      url: 'https://www.leanon.app/glossary#peer-counselling',
      inDefinedTermSet: 'https://www.leanon.app/glossary',
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Glossary', item: 'https://www.leanon.app/glossary' },
  ],
}

const terms = [
  {
    id: 'lean-on',
    term: 'Lean On',
    partOfSpeech: 'verb / phrase',
    definition: 'To "lean on" someone means to rely on them emotionally — to draw support, comfort, or strength from another person during a difficult time. The phrase comes from the physical act of leaning on someone for balance or rest.',
    example: '"I don\'t know what I would have done without her. She was always someone I could lean on."',
    related: 'emotional support, peer support, LeanOn',
    detail: 'The concept of leaning on others is central to human resilience. Research consistently shows that social support — having people to lean on — is one of the strongest predictors of wellbeing and recovery from adversity. LeanOn (the platform) is named after this idea: making it possible for anyone to find someone to lean on, at any time.',
  },
  {
    id: 'peer-support',
    term: 'Peer Support',
    partOfSpeech: 'noun',
    definition: 'Emotional and social support given by a person who has lived experience of a similar challenge. Peer support is based on shared experience, empathy, and mutual understanding rather than clinical expertise.',
    example: '"Talking to someone who had been through their own burnout was more helpful than any book I read."',
    related: 'peer counselling, peer listener, lived experience',
    detail: 'Peer support has a well-established evidence base. Studies show that people with lived experience of a challenge are often uniquely effective at supporting others going through the same thing — because they understand from the inside, not just theoretically. Peer support is not a replacement for clinical care, but it fills an important gap that therapy alone cannot.',
  },
  {
    id: 'peer-listener',
    term: 'Peer Listener',
    partOfSpeech: 'noun',
    definition: 'A person who provides emotional support through active listening, based on their own lived experience of challenges similar to the person they are supporting. On LeanOn, peer listeners are verified real people, not bots or therapists.',
    example: '"My peer listener had been through a difficult divorce too. She didn\'t give me advice — she just listened and understood."',
    related: 'peer support, active listening, lived experience',
    detail: 'Active listening — giving full attention, withholding judgment, and reflecting what the person is saying — is the core skill of peer listening. It is more than just hearing words; it is understanding the emotion and experience behind them.',
  },
  {
    id: 'emotional-support',
    term: 'Emotional Support',
    partOfSpeech: 'noun',
    definition: 'The provision of empathy, care, and understanding to someone experiencing stress, difficulty, or emotional pain. Emotional support focuses on acknowledging and validating a person\'s feelings, rather than solving their problems.',
    example: '"I didn\'t need advice. I just needed someone to tell me that what I was feeling made sense."',
    related: 'peer support, active listening, social support',
    detail: 'Research distinguishes between instrumental support (practical help), informational support (advice), and emotional support. Emotional support — simply being heard and understood — is often the most valuable, particularly in the acute phase of distress.',
  },
  {
    id: 'peer-counselling',
    term: 'Peer Counselling',
    partOfSpeech: 'noun',
    definition: 'A form of support in which individuals with similar life experiences provide guidance, encouragement, and understanding to one another. Peer counselling is distinct from licensed professional counselling.',
    example: '"The peer counselling programme connected students who had experienced exam anxiety with juniors going through the same thing."',
    related: 'peer support, peer listener, counselling',
    detail: 'Peer counselling is widely used in schools, universities, and community settings. It is particularly effective in cultures where professional mental health support carries stigma, as the informal nature of peer relationships can make it easier to open up.',
  },
]

const S = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
  body{font-family:'Nunito',sans-serif;color:#0F4867;background:radial-gradient(ellipse 90% 55% at 0% 0%,#C2E4F2 0%,#DAEEF8 22%,#FFFFFF 58%) fixed;}
  a{text-decoration:none;color:inherit;}
  .nav{padding:0 24px;height:68px;display:flex;align-items:center;justify-content:space-between;max-width:900px;margin:0 auto;}
  .nav-logo{height:48px;}
  .wrap{max-width:800px;margin:0 auto;padding:32px 24px 80px;}
  .breadcrumb{font-size:13px;color:#5A7A8A;margin-bottom:20px;}
  .breadcrumb a{color:#1A8FA0;font-weight:600;}
  .breadcrumb span{margin:0 5px;opacity:0.5;}
  h1{font-size:clamp(24px,5vw,38px);font-weight:900;color:#0F4867;line-height:1.18;margin-bottom:12px;}
  .subtitle{font-size:16px;color:#5A7A8A;margin-bottom:40px;line-height:1.6;}
  .term-nav{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:40px;}
  .term-nav a{background:#F0F8FC;border:1.5px solid #D5EEF6;border-radius:50px;padding:7px 16px;font-size:13px;font-weight:700;color:#1A8FA0;}
  .term-card{background:#FFFFFF;border:1.5px solid #D5EEF6;border-radius:18px;padding:28px 24px;margin-bottom:20px;}
  .term-header{display:flex;align-items:baseline;gap:12px;margin-bottom:16px;flex-wrap:wrap;}
  .term-word{font-size:24px;font-weight:900;color:#0F4867;}
  .term-pos{font-size:13px;color:#5A7A8A;font-style:italic;font-weight:600;}
  .term-def{font-size:16px;color:#0F4867;line-height:1.65;font-weight:600;margin-bottom:14px;}
  .term-example{background:#F0F8FC;border-left:3px solid #1A8FA0;padding:12px 16px;border-radius:0 10px 10px 0;font-size:14px;color:#5A7A8A;line-height:1.6;margin-bottom:14px;font-style:italic;}
  .term-detail{font-size:14px;color:#5A7A8A;line-height:1.75;}
  .term-related{font-size:12px;color:#8AAAB8;margin-top:12px;font-weight:600;}
  .term-related span{color:#1A8FA0;}
  .cta-box{background:linear-gradient(135deg,#0F4867,#1A8FA0);border-radius:20px;padding:32px 24px;text-align:center;color:#fff;margin-top:40px;}
  .cta-box h2{color:#fff;margin:0 0 8px;font-size:20px;}
  .cta-box p{color:rgba(255,255,255,0.85);margin-bottom:20px;font-size:15px;}
  .btn-cta{background:#FF9933;color:#fff;font-family:'Nunito',sans-serif;font-weight:800;font-size:15px;padding:14px 28px;border-radius:50px;border:none;cursor:pointer;display:inline-block;}
`

export default function GlossaryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>
      <nav className="nav">
        <a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a>
        <a href="/auth" style={{background:'#FF9933',color:'#fff',fontFamily:'Nunito,sans-serif',fontWeight:800,fontSize:14,padding:'10px 22px',borderRadius:50,border:'none',cursor:'pointer'}}>Get started</a>
      </nav>

      <div className="wrap">
        <div className="breadcrumb">
          <a href="/">Home</a><span>›</span><span>Glossary</span>
        </div>
        <h1>Peer Support Glossary</h1>
        <p className="subtitle">Definitions of key terms used in peer support and emotional wellness — including what it means to &ldquo;lean on&rdquo; someone.</p>

        <nav className="term-nav" aria-label="Jump to term">
          {terms.map(t => (
            <a key={t.id} href={`#${t.id}`}>{t.term}</a>
          ))}
        </nav>

        {terms.map(t => (
          <article key={t.id} id={t.id} className="term-card">
            <div className="term-header">
              <span className="term-word">{t.term}</span>
              <span className="term-pos">{t.partOfSpeech}</span>
            </div>
            <p className="term-def">{t.definition}</p>
            <blockquote className="term-example">{t.example}</blockquote>
            <p className="term-detail">{t.detail}</p>
            <p className="term-related">Related: <span>{t.related}</span></p>
          </article>
        ))}

        <div className="cta-box">
          <h2>Experience Peer Support for Yourself</h2>
          <p>Browse real peer listeners in India. Available 24/7, no appointment needed.</p>
          <a href="/browse"><button className="btn-cta">Browse peer listeners →</button></a>
        </div>
      </div>
    </>
  )
}
