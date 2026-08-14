import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | LeanOn Peer Support India',
  description: 'Find answers to common questions about LeanOn — India\'s peer emotional support platform. Learn about sessions, pricing, listeners, and more.',
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
        q: 'What is LeanOn?',
        a: 'LeanOn is a peer support platform — your person to lean on, available anytime. We connect people across India with verified peer listeners: real people who have personally been through what you\'re facing, whether that\'s loneliness, burnout, a breakup, grief, anxiety, or startup stress. It\'s not therapy — it\'s genuine human connection, available 24/7.',
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
        a: 'Yes — LeanOn is fully online and available across all of India. Whether you\'re in Bengaluru, Mumbai, Delhi, Chennai, Hyderabad, Pune, Kolkata, Jaipur, Ahmedabad, or a smaller town, you can access peer support anytime.',
      },
      {
        q: 'What topics can I talk about?',
        a: 'Listeners on LeanOn specialise in loneliness, work stress, career confusion, relationships, grief and loss, student pressure, startup journey, breakups, anxiety, and general emotional support. If you just need someone to lean on with no specific topic, that\'s perfectly fine too.',
      },
    ],
  },
  {
    category: 'Getting Started',
    items: [
      {
        q: 'How do I start using LeanOn?',
        a: 'Sign up with your mobile number (OTP verified — 30 seconds). Browse peer listeners for free — read bios, topics, and ratings. When you\'re ready, pick a session length and start immediately. New users get up to 3 free 5-minute sessions to try different listeners.',
      },
      {
        q: 'Is it really free to start?',
        a: 'Yes. New users get up to 3 free 5-minute sessions — one per listener — no credit card or wallet top-up needed. You just need to sign up with your phone number.',
      },
      {
        q: 'Do I need to book in advance?',
        a: 'No appointments needed. Sessions start instantly. Browse available listeners and begin a session in under 60 seconds.',
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
        a: 'After your free trial, sessions cost ₹8–25 per minute depending on the listener. Sessions are billed in 15-minute slots. A 15-minute session costs ₹160 — ₹150 goes to your listener and ₹10 is the flat LeanOn platform fee. A 30-minute session costs ₹310.',
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
        a: 'Yes. All sessions are private and confidential. LeanOn never shares your personal information or conversation content with anyone. Your name is not shown to listeners — just your first name.',
      },
      {
        q: 'Is LeanOn safe?',
        a: 'LeanOn has AI moderation that monitors for unsafe content, a crisis support banner that appears when distressing keywords are detected, and a reporting system for any listener misconduct. All listeners are verified before approval.',
      },
      {
        q: 'What if I\'m in a mental health crisis?',
        a: 'LeanOn is peer support, not a crisis service. If you are in crisis or having thoughts of self-harm, please call NIMHANS at <a href="tel:08046110007">080-46110007</a> or Tele-MANAS at <a href="tel:14416">14416</a> (free, 24/7, Govt of India).',
      },
    ],
  },
  {
    category: 'Becoming a Listener',
    items: [
      {
        q: 'How do I become a listener on LeanOn?',
        a: 'Apply at leanon.app/become-listener. Share your lived experience, the topics you can support, and a brief bio. After verification and approval, you can start accepting sessions on your own schedule.',
      },
      {
        q: 'How much do listeners earn?',
        a: 'Listeners set their own rate — ₹8 to ₹25 per minute. You keep 100% of your rate. LeanOn adds a flat ₹10 platform fee on top, which seekers pay — it never comes out of your earnings.',
      },
      {
        q: 'Do I need professional qualifications to be a listener?',
        a: 'No professional qualifications are required. What matters is lived experience — you\'ve personally been through the challenge you want to support others with, and you\'ve found your way through it.',
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
        <a href="/auth" style={{background:'#FF9933',color:'white',fontFamily:'Nunito,sans-serif',fontWeight:800,fontSize:14,padding:'10px 22px',borderRadius:50,border:'none',cursor:'pointer'}}>Get started free</a>
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
          <p>We&apos;re here to help. Start your free session or reach out to us directly.</p>
          <div style={{display:'flex',gap:12,justifyContent:'center',flexWrap:'wrap'}}>
            <a href="/auth"><button className="btn-cta">Start free — no card needed</button></a>
            <a href="/contact" style={{color:'white',fontWeight:700,fontSize:15,padding:'14px 24px',display:'inline-block',opacity:0.85}}>Contact us →</a>
          </div>
        </div>
      </div>
    </>
  )
}
