import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'LeanOn FAQ: Pricing, First Session & Peer Support | India',
  description: 'How LeanOn works, what a session costs, the free 5-minute introduction, privacy and safety. Compare peer support with therapy and see prices before starting.',
  alternates: { canonical: 'https://www.leanon.app/faq', languages: { 'en-IN': 'https://www.leanon.app/faq' } },
  keywords: [
    'lean on app FAQ', 'leanon FAQ', 'what is leanon', 'lean on meaning', 'lean on someone',
    'peer support India FAQ', 'LeanOn how it works', 'leanon pricing', 'leanon privacy',
  ],
}

const faqs = [
  {
    category: 'About LeanOn',
    items: [
      {
        q: 'Who can use LeanOn?',
        a: 'Adults aged 18 and over, in India or abroad. LeanOn is not for under-18s. If you are under 18 and need to talk, please reach out to a trusted adult, or call Tele-MANAS on 14416 (free).',
      },
      {
        q: 'What is LeanOn?',
        a: 'LeanOn is an online peer-support platform where people can browse screened human listeners for one-to-one text or voice conversations about everyday challenges such as loneliness, work stress, relationship difficulties, grief and overthinking. It is not therapy or a crisis service. A conversation can start when a listener is available; availability varies.',
      },
      {
        q: 'What does "lean on" mean?',
        a: '"Lean on" means having someone you can emotionally rely on — someone in your corner who listens without judgment and supports you through hard times. The phrase comes from the idea of physically leaning on someone for support. LeanOn (the app) is built on that idea: everyone deserves someone to lean on.',
      },
      {
        q: 'How is LeanOn different from therapy or counselling?',
        a: 'Listeners on LeanOn are not licensed therapists or clinical counsellors. They are real people with lived experience — people who have navigated the same challenges and found their way through. Peer support is different from therapy, and valuable in its own right: it offers empathy, understanding, and connection. LeanOn is ideal when you need someone who truly gets it, not a clinical diagnosis.',
      },
      {
        q: 'Is LeanOn available across India?',
        a: 'LeanOn is online, so people can browse from anywhere in India, including Bengaluru, Mumbai, Delhi, Chennai, Hyderabad and smaller towns. Whether a conversation can start immediately depends on which listeners are online and available.',
      },
      {
        q: 'What topics can I talk about?',
        a: 'Listeners on LeanOn specialise in loneliness, work stress, career confusion, relationships, grief and loss, student pressure, startup journey, breakups, anxiety, and general emotional support. If you just need someone to lean on with no specific topic, that\'s perfectly fine too.',
      },
      {
        q: 'How is LeanOn different from companionship apps like GetCompanion?',
        a: 'LeanOn is built around peer support: one-to-one conversations with screened listeners who bring relevant lived experience. It is not therapy or a clinical service. The first 5-minute introductory session is free once per account; after that, paid session prices are shown before you start. See the pricing page for the current India and international rates.',
      },
    ],
  },
  {
    category: 'Getting Started',
    items: [
      {
        q: 'How do I start using LeanOn?',
        a: 'The quickest way is Talk now at leanon.app/talk: choose text or voice, tap what is on your mind, confirm your phone number with a one-time code, and LeanOn connects you with a screened listener who is online. One introductory session of up to 5 minutes is free per account. You can also browse listener profiles at leanon.app/browse and choose someone yourself.',
      },
      {
        q: 'Is there a LeanOn app on the Play Store or App Store?',
        a: 'You do not need to download anything: LeanOn works in any phone or computer browser at www.leanon.app. On Android, open it in Chrome and tap "Add to Home screen" to get an app icon; on iPhone, use Safari\'s Share → "Add to Home Screen". An older Play Store app called "LeanOn" (a 2024 therapist-booking app) is a different, retired product.',
      },
      {
        q: 'How does pricing work?',
        a: 'One 5-minute introductory session is free per account. In India, paid sessions are priced at the listener’s rate per minute × session length, plus a flat ₹10 platform fee; for example, 15 minutes with a ₹10/min listener costs ₹160. Voice calls cost ₹5/min more than text when voice pricing is enabled. Your exact price is shown before you start. See /pricing for details.',
      },
      {
        q: 'Do I need to book in advance?',
        a: 'You do not need to book an appointment in advance. Browse listeners who are shown as available and send a session request; the conversation starts when the listener accepts. Availability changes, so an immediate start cannot be guaranteed.',
      },
      {
        q: 'Can I browse listeners before signing up?',
        a: 'Yes — you can browse listener profiles and read their bios, topics, and ratings before creating an account.',
      },
    ],
  },
  {
    category: 'Pricing & Wallet',
    items: [
      {
        q: 'How much does LeanOn cost?',
        a: 'One introductory session of up to 5 minutes is free per account. In India, the total is the selected listener\'s per-minute rate × session length, plus a flat ₹10 platform fee; for example, 15 minutes at ₹10/min costs ₹160 and 30 minutes costs ₹310. Voice calls are ₹5/min more than text when voice pricing is enabled. Outside India, sessions start at US$10 for 15 minutes, US$15 for 30 and US$20 for 45. See leanon.app/pricing for details.',
      },
      {
        q: 'How does the wallet work?',
        a: 'You top up your LeanOn wallet with ₹200, ₹500, ₹1,000, or ₹2,000. The session amount is held from your wallet when you start a session and released to the listener when it ends. Unused balance is fully refundable at any time.',
      },
      {
        q: 'Can I get a refund?',
        a: 'Yes — unused wallet balance is fully refundable, no questions asked. Submit a refund request from your wallet page and we will process it within 3–5 business days.',
      },
      {
        q: 'Are there any subscriptions?',
        a: 'No subscriptions. Pay only for what you use. Recharge your wallet whenever you want and use it at your own pace.',
      },
    ],
  },
  {
    category: 'Privacy & Safety',
    items: [
      {
        q: 'Are my conversations private?',
        a: 'LeanOn uses your phone number for OTP sign-in, but it is not shown to listeners; you can use a display name. Voice calls are not recorded. Text messages are stored securely and only authorised LeanOn administrators can open them, for example to review a reported or safety-flagged session. Read the Privacy Policy for details, and avoid sharing identifying information you do not want to disclose.',
      },
      {
        q: 'Is LeanOn safe?',
        a: 'Crisis helplines are shown in every session; if words linked to self-harm appear in a chat, LeanOn shows them prominently, alerts the listener and flags the session for the LeanOn team. You can report a listener from any session, and every report is reviewed by a person. All listeners are screened and approved by LeanOn before they can take sessions.',
      },
      {
        q: 'What if I\'m in a mental health crisis?',
        a: 'LeanOn is peer support, not a crisis service. If you are in crisis or having thoughts of self-harm, please call NIMHANS at <a href="tel:08046110007">080-46110007</a> or Tele-MANAS at <a href="tel:14416">14416</a> (free, 24/7, Govt of India).',
      },
    ],
  },
  {
    category: 'Indians Abroad (NRI)',
    items: [
      {
        q: 'Can Indians living in the USA, UK, Canada or Australia use LeanOn?',
        a: 'Yes. LeanOn has dedicated support for Indians and South Asians living abroad. Whether you are in the USA, UK, Canada, Australia, UAE, Singapore, or anywhere else, you can connect with peer listeners who understand the cultural context — family expectations, homesickness, H-1B visa stress, cultural adjustment, or simply wanting to talk to someone who gets it.',
      },
      {
        q: 'How much does LeanOn cost for NRIs outside India?',
        a: 'For people using LeanOn outside India, sessions are priced in US dollars, from US$10 for 15 minutes, US$15 for 30 minutes and US$20 for 45 minutes — text or voice. A listener with a higher own rate costs that rate; the exact price is shown before you book. Your first 5-minute session is always free. Full pricing: leanon.app/pricing.',
      },
      {
        q: 'What can NRIs talk about on LeanOn?',
        a: 'NRIs on LeanOn most commonly talk about homesickness and missing family, immigration stress (H-1B, visa uncertainty, work permit anxiety), cultural isolation ("fitting in" between two worlds), marriage pressure from family back home, career confusion abroad, loneliness in a new country, and relationship difficulties across distances.',
      },
      {
        q: 'Do LeanOn listeners understand NRI cultural experiences?',
        a: 'Many LeanOn listeners have lived abroad themselves or have close experience with NRI life — immigration stress, being caught between Indian and local culture, long-distance family dynamics. You can read listener bios and filter by topic to find someone whose experience matches yours.',
      },
    ],
  },
  {
    category: 'Listening on LeanOn',
    items: [
      {
        q: 'Is LeanOn a job or a way to earn money?',
        a: 'No. LeanOn is a peer support service for people who need someone to talk to. It is not a job, a side income or a work-from-home opportunity, and it should not be joined for the money.',
      },
      {
        q: 'Who are the listeners?',
        a: 'Adults (18+) with lived experience of what they talk about, who want to support others. Every listener applies, passes a screening quiz on boundaries, crisis referral and empathetic listening, completes a live selfie check and is reviewed by LeanOn before taking any session. They are peers, not therapists.',
      },
    ],
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.flatMap(cat =>
    cat.items.map(item => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    }))
  ),
}

const S = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
  body{font-family:'Nunito',sans-serif;color:#0F4867;background:radial-gradient(ellipse 90% 55% at 0% 0%,#C2E4F2 0%,#DAEEF8 22%,#FFFFFF 58%) fixed;}
  a{text-decoration:none;color:inherit;}
  .nav{background:transparent;padding:0 24px;height:72px;display:flex;align-items:center;justify-content:space-between;max-width:900px;margin:0 auto;}
  .nav-logo{height:52px;width:auto;}
  .wrap{max-width:800px;margin:0 auto;padding:32px 24px 80px;}
  .breadcrumb{font-size:13px;color:#5A7A8A;margin-bottom:24px;}
  .breadcrumb a{color:#1A8FA0;font-weight:600;}
  .breadcrumb span{margin:0 6px;opacity:0.5;}
  h1{font-size:clamp(26px,5vw,40px);font-weight:900;color:#0F4867;line-height:1.15;margin-bottom:10px;}
  .subtitle{font-size:16px;color:#5A7A8A;margin-bottom:40px;line-height:1.6;}
  .cat{margin-bottom:40px;}
  .cat-title{font-size:13px;font-weight:800;color:#1A8FA0;text-transform:uppercase;letter-spacing:1px;margin-bottom:16px;padding-bottom:8px;border-bottom:2px solid #D5EEF6;}
  .faq-item{background:#FFFFFF;border:1.5px solid #D5EEF6;border-radius:16px;margin-bottom:10px;overflow:hidden;}
  .faq-q{font-size:16px;font-weight:800;color:#0F4867;padding:18px 20px;cursor:pointer;display:flex;justify-content:space-between;align-items:center;gap:12px;}
  .faq-q::after{content:'+';font-size:22px;font-weight:400;color:#1A8FA0;flex-shrink:0;}
  .faq-a{font-size:15px;color:#5A7A8A;line-height:1.72;padding:0 20px 18px;font-weight:500;}
  .cta-box{background:linear-gradient(135deg,#0F4867 0%,#1A8FA0 100%);border-radius:20px;padding:36px 28px;text-align:center;color:white;margin-top:48px;}
  .cta-box h2{font-size:22px;font-weight:900;margin-bottom:10px;}
  .cta-box p{font-size:15px;opacity:0.85;margin-bottom:24px;line-height:1.6;}
  .btn-cta{background:#FF9933;color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:16px;padding:14px 32px;border-radius:50px;border:none;cursor:pointer;display:inline-block;}
`

export default function FAQPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <style>{S}</style>
      <nav className="nav">
        <a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a>
        <a href="/talk?src=seo" style={{background:'#FF9933',color:'white',fontFamily:'Nunito,sans-serif',fontWeight:800,fontSize:14,padding:'10px 22px',borderRadius:50,border:'none',cursor:'pointer'}}>Get started</a>
      </nav>

      <div className="wrap">
        <div className="breadcrumb">
          <a href="/">Home</a><span>›</span><span>FAQ</span>
        </div>

        <h1>Frequently Asked Questions</h1>
        <p className="subtitle">Everything you need to know about LeanOn — someone to lean on, anytime.</p>

        {faqs.map((cat) => (
          <div key={cat.category} className="cat">
            <div className="cat-title">{cat.category}</div>
            {cat.items.map((item) => (
              <div key={item.q} className="faq-item">
                <div className="faq-q">{item.q}</div>
                <div className="faq-a">{item.a}</div>
              </div>
            ))}
          </div>
        ))}

        <div className="cta-box">
          <h2>Still have questions?</h2>
          <p>We&apos;re here to help. Start a session or reach out to us directly.</p>
          <div style={{display:'flex',gap:12,justifyContent:'center',flexWrap:'wrap'}}>
            <a href="/talk?src=seo"><button className="btn-cta">Start now</button></a>
            <a href="/contact" style={{color:'white',fontWeight:700,fontSize:15,padding:'14px 24px',display:'inline-block',opacity:0.85}}>Contact us →</a>
          </div>
        </div>
      </div>
    </>
  )
}
