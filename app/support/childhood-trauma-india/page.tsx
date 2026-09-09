import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Growing Up Hard in India — Emotional Support for Childhood Trauma | LeanOn',
  description: 'A difficult teenage years — absent parent, bad company, early responsibilities — leaves marks that show up decades later. You don\'t have to understand it to talk about it.',
  keywords: [
    'childhood trauma India', 'teenage trauma India', 'absent father India',
    'difficult childhood India', 'emotional neglect India', 'growing up hard India',
    'childhood trauma support India', 'teen years trauma India', 'childhood wounds India adult',
    'dysfunctional family India', 'emotional neglect childhood India', 'processing childhood India',
    'family trauma India', 'adolescent trauma India support',
  ],
  alternates: { canonical: 'https://www.leanon.app/support/childhood-trauma-india', languages: { 'en-IN': 'https://www.leanon.app/support/childhood-trauma-india' } },
  openGraph: {
    title: 'Growing Up Hard in India — Emotional Support for Childhood Trauma | LeanOn',
    description: 'Difficult teenage years leave marks that show up decades later. You don\'t need a diagnosis to deserve support.',
    url: 'https://www.leanon.app/support/childhood-trauma-india',
    siteName: 'LeanOn',
    type: 'article',
    images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn — Childhood Trauma Support India' }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do I need a therapist for childhood trauma or can peer support help?',
      acceptedAnswer: { '@type': 'Answer', text: 'Both can be valuable, and they serve different purposes. A therapist — particularly one trained in trauma-informed care — can help you process what happened at a deeper structural level over time. Peer support through LeanOn is different: it is a real person who has also carried difficult experiences, listening without judgment, helping you feel less alone in what you are carrying. For many people, peer support is the first place they have ever spoken these things out loud — and that first speaking matters enormously. If professional therapy is accessible to you, pursue it alongside peer support. If it is not currently accessible, peer support is not nothing.' },
    },
    {
      '@type': 'Question',
      name: 'What if I\'m not sure my childhood was "bad enough" to be called trauma?',
      acceptedAnswer: { '@type': 'Answer', text: 'The threshold for trauma is not how dramatic the events were. Trauma is about how the experience affected your nervous system and your sense of safety — not a checklist of what happened. Emotional neglect, an absent or inconsistent parent, financial instability, early exposure to substance abuse, having to parent yourself — these do not always look like "trauma" from the outside but they leave real marks. If something from your childhood or teenage years is showing up in your adult life — in your relationships, your sense of self, your capacity to feel safe or connected — it is worth taking seriously, regardless of whether it meets some external standard of "bad enough".' },
    },
    {
      '@type': 'Question',
      name: 'I love my family — can I still talk about what happened?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Loving your family and naming what was hard about growing up are not mutually exclusive. In fact, the coexistence of love and grief about a family is one of the most common and least-discussed experiences people carry. You can love a parent who was absent and also grieve the absence. You can be grateful for what your family provided and also hold the pain of what was missing. You do not have to resolve this contradiction before you are allowed to talk about it. A LeanOn listener will not ask you to choose between love and honesty.' },
    },
    {
      '@type': 'Question',
      name: 'What if I don\'t remember much of my childhood?',
      acceptedAnswer: { '@type': 'Answer', text: 'This is more common than people realise, particularly when the childhood contained things the mind needed to protect itself from. Memory gaps are not evidence that nothing happened — they are sometimes evidence of the opposite. You can talk about what you do remember, about what you notice in your current life that feels unexplained, about the shape of what is missing even if you cannot name the specific contents. You do not need a complete narrative to begin. Starting with "I don\'t remember much but I know something was off" is a real and valid beginning.' },
    },
    {
      '@type': 'Question',
      name: 'Is it normal to only start feeling the effects of childhood things in my 20s?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes — this is extremely common and there are clear reasons for it. During your teens and early 20s, there is often a survival mode at work: you are managing the immediate reality, getting through school, establishing yourself. There is neither the safety nor the bandwidth to process what happened earlier. It is often only when some of that immediate pressure eases — or when the first serious relationship, the first major loss, the first moment of real safety arrives — that earlier material begins to surface. The 20s are a time when a lot of people begin to feel the weight of things that happened at 15 or 17.' },
    },
    {
      '@type': 'Question',
      name: 'What if I feel guilty for being affected by my past?',
      acceptedAnswer: { '@type': 'Answer', text: 'Guilt about being affected by your past is itself one of the effects of certain kinds of upbringing — particularly ones where you were implicitly or explicitly taught that your needs and feelings were less important than the family\'s stability or reputation. Feeling like you should be over it, like others had it worse, like you are being dramatic — these are not accurate assessments. They are learned responses that often came from the same environment that created the difficulty in the first place. Being affected by what happened to you is not weakness. It is honesty.' },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Support', item: 'https://www.leanon.app/support' },
    { '@type': 'ListItem', position: 3, name: 'Childhood Trauma India', item: 'https://www.leanon.app/support/childhood-trauma-india' },
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

export default function ChildhoodTraumaIndiaPage() {
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
          <span style={{color:'var(--navy)'}}>Childhood Trauma India</span>
        </nav>

        <div style={{background:'#EBF5FB',borderLeft:'4px solid #1A8FA0',borderRadius:'0 12px 12px 0',padding:'14px 18px',marginBottom:28,fontSize:14,color:'#0F4867',fontWeight:600,lineHeight:1.65}}>
          🆘 In crisis? Call <a href="tel:08046110007" style={{color:'#1A8FA0',fontWeight:800}}>NIMHANS 080-46110007</a> or <a href="tel:14416" style={{color:'#1A8FA0',fontWeight:800}}>Tele-MANAS 14416</a> (free · 24/7 · Govt of India)
        </div>

        <div className="hero">
          <p className="badge">Peer Support · Anonymous · India</p>
          <h1>The Things That Happened at 17 That Are <em>Still With You</em> at 25</h1>
          <p className="lead">A difficult childhood does not always look like what people call trauma. It can be an absent father, bad company at the wrong age, being the adult in the room before you were ready, a home where love was complicated or conditional. These experiences do not announce themselves. They show up later — in how you trust, how you feel, how you move through relationships and through yourself.</p>
          <a href="/browse" className="cta-hero">Talk to someone who understands →</a>
        </div>

        <div className="section">
          <h2>The Things That Happen at 17 That Show Up at 25</h2>
          <p>There is a particular kind of wound that does not bleed at the time. You survive it. You move through it. You become, by many measures, functional and capable — good at taking care of yourself, at reading situations, at managing. But somewhere in your mid-20s, something starts to surface. A persistent numbness. Difficulty trusting. Relationships that feel unsafe in ways you cannot explain. A sense that something is fundamentally wrong with you that you cannot trace to any specific event.</p>
          <p>What is happening is not a breakdown. It is what psychologists call deferred processing — the material that the teenage self did not have the safety or the tools to work through, finally becoming available for processing now that there is slightly more stability. The pain did not disappear. It went into storage.</p>
          <p>For many people growing up in India — in families shaped by financial pressure, by absent or emotionally unavailable parents, by contexts where survival took precedence over emotional attunement — the teenage years were a period of significant experience without any framework for processing it. You were told to study, to not bring problems home, to not burden the family. You learned, very effectively, to suppress.</p>
          <p>Now, years later, you are beginning to feel the weight of what was suppressed. That is not weakness. That is a delayed reckoning that was always going to arrive.</p>
        </div>

        <div className="section">
          <h2>Why Indian Childhood Experiences Are Hard to Name as Trauma</h2>
          <p>In India, &quot;trauma&quot; is a word that conjures dramatic events — violence, disasters, catastrophic loss. It does not easily apply to the experience of a father who was physically present but emotionally absent. Or a mother who was loving but completely overwhelmed. Or a home where financial stress created a low-grade terror that was never named. Or years of being the most responsible person in your family before you had the language or the resources to understand that role.</p>
          <p>The cultural vocabulary for these experiences is thin. We have words for grief, for loss, for bereavement. We do not have good words for the slow, chronic injury of emotional neglect — of growing up in a house where love was real but attunement was missing. Or the particular wound of a parent who could not be relied upon. Or the early exposure to adult pain — substance abuse, financial desperation, marital conflict — that a teenager absorbs and carries without any adult helping them process it.</p>
          <p>And then there is family loyalty. Many Indians who had difficult childhoods also deeply love their families. The coexistence of these two truths — love and hurt — is itself something that rarely gets spoken because it feels disloyal. We are not supposed to name what was hard. We are supposed to be grateful for what was given.</p>
          <p>Both can be true simultaneously. You can love your parents and grieve the things that were missing. You can be grateful for your upbringing and still need to process what it cost you. These truths do not cancel each other out.</p>
        </div>

        <div className="section">
          <h2>What Unprocessed Childhood Experience Does in Adulthood</h2>
          <p>It does not disappear. That is the central fact. Unprocessed experience from childhood and adolescence tends to show up in adult life in predictable ways:</p>
          <ul>
            <li><strong>Emotional numbness</strong> — a protective shutdown that was useful at 15 but limits your ability to feel and connect at 25</li>
            <li><strong>Difficulty in relationships</strong> — patterns of anxious attachment, avoidance, or an intensity of need that confuses you and the people you are close to</li>
            <li><strong>A persistent sense that something is wrong</strong> — with you, with life, without a clear reason</li>
            <li><strong>Disproportionate responses</strong> — being triggered by things that seem small, in ways that feel out of proportion and are hard to explain</li>
            <li><strong>Substance use or other numbing behaviours</strong> — a pattern that often starts in the teenage years as a way of managing unbearable feelings</li>
            <li><strong>Difficulty asking for help or trusting that support will be available</strong> — because it was not, reliably, when you needed it most</li>
          </ul>
          <p>None of these are character flaws. They are the natural, logical adaptations of a person who had to manage something difficult without adequate support. Understanding them as adaptations — reasonable responses to unreasonable circumstances — is the beginning of being able to work with them rather than against yourself.</p>
        </div>

        <div className="section">
          <h2>You Don&apos;t Need a Diagnosis to Deserve Support</h2>
          <p>Mental health support in India is still largely framed around acute illness — depression, anxiety disorders, serious psychiatric conditions. The idea that you might need support simply because you had a difficult adolescence that you have never had space to process is not well understood culturally, and many people find themselves unable to justify seeking help because they do not have a diagnosis, because things are not &quot;bad enough,&quot; because they are functioning.</p>
          <p>But support is not for crises only. Support is for the ordinary, invisible weight of having grown up hard — of having had experiences that shaped you in ways you are still discovering. You do not need to be falling apart to deserve someone to talk to. The threshold is simply: something in your history is affecting your present, and you have never had space to say it out loud.</p>
          <p>LeanOn listeners are not therapists. But they are people who have navigated their own difficult histories — who understand from the inside what it means to carry something from your past that you have never fully named. That understanding is not nothing. It is often the first thing that makes speaking possible.</p>
        </div>

        <div className="section">
          <h2>A Space to Say the Real Version</h2>
          <p>Most of us have never told the real version of our childhood to another person. We have the official version — the one we give when asked, that focuses on what was good, that protects the family, that does not invite too many follow-up questions. And then there is the real version — the texture of what it actually felt like, the specific moments, the things we absorbed and never said, the grief we are still carrying for the child we were.</p>
          <p>The real version deserves to be spoken. Not because speaking it fixes everything — it does not — but because carrying an untold story in silence, for years, is its own kind of weight. Language changes things. Being heard changes things. The experience of saying &quot;this is what it was actually like&quot; to someone who does not need you to protect their feelings, who does not have a stake in the family narrative, who simply receives it — that is different from anything most people have had access to.</p>
          <p>A session on LeanOn is anonymous. The listener has no connection to your family. You can say the real version, and they will hold it carefully and with respect.</p>
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
          <h2>The real version deserves to be spoken</h2>
          <p>Anonymous, no judgment, no family connections. Just a real person who will hear what it was actually like.</p>
          <a href="/browse" className="btn-cta">Find a listener →</a>
        </div>

        <div className="section">
          <h2>You Might Also Find This Helpful</h2>
          <div className="related">
            <a href="/support/emotional-numbness">Emotional numbness →</a>
            <a href="/support/dont-want-to-get-out-of-bed">Morning heaviness →</a>
            <a href="/i-need-professional-help-india">Need professional help →</a>
            <a href="/i-need-someone-to-talk-to">Need someone to talk to →</a>
            <a href="/support/loneliness">Loneliness →</a>
            <a href="/browse">Browse listeners →</a>
          </div>
        </div>
      </div>
    </>
  )
}
