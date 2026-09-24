import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'LeanOn — Talk to a Real Person Online | Peer Support India & NRI Support',
  description: 'Need someone to talk to? LeanOn connects Indians in India and Indians abroad with real people for private one-to-one peer support by text or voice. Start free, then paid conversations from ₹160 for 15 minutes.',
  alternates: { canonical: 'https://www.leanon.app', languages: { 'en-IN': 'https://www.leanon.app', 'en-US': 'https://www.leanon.app', 'en-GB': 'https://www.leanon.app' } },
  keywords: [
    'leanon', 'lean on', 'LeanOn', 'lean on app',
    'someone to talk to', 'talk to someone online', 'talk to a real person online',
    'real person to talk to India', 'someone to talk to India',
    'peer support India', 'peer emotional support India', 'paid peer support India',
    'emotional support India', 'online emotional support India',
    'anonymous emotional support India', 'private emotional support India',
    'talk to someone right now', 'no one to talk to', 'someone to listen to me',
    'need to vent India', 'relationship support India', 'work stress support India',
    'loneliness support India', 'grief support India', 'family pressure support India',
    'AI chatbot alternative India', 'talk to real human not AI',
    'tired of talking to AI', 'ChatGPT alternative India',
    'paid support online India', 'paid human conversation India', 'pay to talk to someone India', 'affordable peer support India',
    '15 minute peer support India', 'online peer support cost India',
    'NRI emotional support', 'Indian diaspora emotional support',
    'Indian NRI someone to talk to', 'Indian expat loneliness',
    'peer support for Indians abroad', 'talk to Indian listener online',
    'Indian emotional support USA', 'Indian emotional support UK',
    'Indian emotional support Canada', 'Indian emotional support Australia',
    'Indian emotional support UAE', 'Indian homesickness support',
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is LeanOn?', acceptedAnswer: { '@type': 'Answer', text: 'LeanOn is a peer support platform built on empathy — someone to lean on anytime you need it. You talk to real people in India who have lived through what you\'re facing: loneliness, burnout, anxiety, grief, relationships, and more. Every listener brings genuine empathy from lived experience, not a script. It is not therapy, but real human connection through one-to-one peer conversations.' } },
    { '@type': 'Question', name: 'What makes LeanOn listeners empathetic?', acceptedAnswer: { '@type': 'Answer', text: 'Every LeanOn listener has personally lived through what they support others with — loneliness, anxiety, burnout, grief, or relationship pain. That lived experience is what makes their empathy real rather than rehearsed. They are trained in active listening and empathetic communication, so you are heard without being judged, fixed, or rushed.' } },
    { '@type': 'Question', name: 'What does "lean on" mean in LeanOn?', acceptedAnswer: { '@type': 'Answer', text: '"Lean on" means having someone you can rely on emotionally — someone who supports you without judgment when you\'re going through something hard. LeanOn (the platform) gives everyone access to that kind of support through verified peer listeners who have lived experience.' } },
    { '@type': 'Question', name: 'How does pricing work?', acceptedAnswer: { '@type': 'Answer', text: 'LeanOn charges a flat fee per session. 15-minute sessions start at ₹160. Your first session with each new listener is free (5 minutes) — no wallet top-up needed.' } },
    { '@type': 'Question', name: 'How much does a paid LeanOn session cost?', acceptedAnswer: { '@type': 'Answer', text: 'A 15-minute paid session starts at ₹160. You can start with one free 5-minute introductory session with each new listener, then continue only if you want to. There are no subscriptions; you pay for the conversation time you choose.' } },
    { '@type': 'Question', name: 'How is LeanOn different from therapy?', acceptedAnswer: { '@type': 'Answer', text: 'LeanOn listeners are real people with lived experience, not licensed therapists. They offer empathy and peer support, not clinical diagnosis or treatment. LeanOn is ideal when you need someone to lean on — not a diagnosis.' } },
    { '@type': 'Question', name: 'Is LeanOn related to the song "Lean On" by Major Lazer?', acceptedAnswer: { '@type': 'Answer', text: 'No. LeanOn (one word, at leanon.app) is an Indian peer emotional support platform where you talk to verified human listeners. It has no connection to the 2015 song "Lean On" by Major Lazer and DJ Snake. The name comes from the phrase "someone to lean on" — having a person you can rely on emotionally.' } },
    { '@type': 'Question', name: 'Is LeanOn confidential?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. All sessions are private and confidential. LeanOn never shares your personal information or conversation content with anyone.' } },
    { '@type': 'Question', name: 'How do I start a paid LeanOn session?', acceptedAnswer: { '@type': 'Answer', text: 'Browse listener profiles, choose someone who feels relevant, and start with the free 5-minute introduction. If you want to continue, the paid session price is shown before you start.' } },
    { '@type': 'Question', name: 'Which cities does LeanOn serve?', acceptedAnswer: { '@type': 'Answer', text: 'LeanOn is available across all of India — Bengaluru, Mumbai, Delhi, Chennai, Hyderabad, Pune, Kolkata, Jaipur, Ahmedabad, and everywhere else. It is fully online — accessible from anywhere.' } },
    { '@type': 'Question', name: 'What topics can I talk about on LeanOn?', acceptedAnswer: { '@type': 'Answer', text: 'Listeners on LeanOn specialise in loneliness, work stress, career confusion, relationships, grief and loss, student pressure, startup journey, breakups, anxiety, and more. If you just need someone to lean on with no specific topic, that\'s fine too.' } },
    { '@type': 'Question', name: 'Is LeanOn an AI or are the listeners real people?', acceptedAnswer: { '@type': 'Answer', text: 'Every listener on LeanOn is a real, verified human being — no bots, no AI-generated responses, no scripts. Listeners apply to join, go through background verification, and complete active listening training before their first session. When you talk to someone on LeanOn, there is a real person on the other side of the conversation.' } },
    { '@type': 'Question', name: 'Can ChatGPT or AI chatbots replace talking to a real person?', acceptedAnswer: { '@type': 'Answer', text: 'AI assistants can be useful for information, reflection and conversation. LeanOn serves a different need: talking with another human being. A peer listener can bring their own lived experience and respond as a person in a two-way conversation.' } },
    { '@type': 'Question', name: 'Can Indians living abroad use LeanOn?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. LeanOn has dedicated support for Indians and South Asians living abroad, including the USA, UK, Canada, Australia, UAE and other countries. You can talk privately with a real peer listener by text or voice.' } },
    { '@type': 'Question', name: 'Where can I talk to a real person online when I feel lonely?', acceptedAnswer: { '@type': 'Answer', text: 'LeanOn (leanon.app) connects you with real human peer listeners for private one-to-one conversations by text or voice. You can browse listener profiles, start with a free 5-minute introduction, and choose someone who has lived experience with what you are going through. Paid sessions start at ₹160 for 15 minutes.' } },
    { '@type': 'Question', name: 'What is an affordable alternative to therapy in India?', acceptedAnswer: { '@type': 'Answer', text: 'While therapy in India typically costs ₹1,500 to ₹5,000 per session, peer support through LeanOn starts at ₹160 for 15 minutes. Peer support is not a replacement for therapy — it is a complementary option for everyday emotional needs like loneliness, relationship stress, work pressure, and difficult days. For clinical needs, consult a qualified mental health professional.' } },
    { '@type': 'Question', name: 'How is LeanOn different from talking to ChatGPT or an AI?', acceptedAnswer: { '@type': 'Answer', text: 'LeanOn provides conversations with real human beings who bring their own lived experience. AI assistants provide generated responses. Both have valid uses: AI is useful for information, brainstorming, and reflection. LeanOn is useful when the person specifically wants another human being to listen — for emotional connection rather than information.' } },
    { '@type': 'Question', name: 'How is LeanOn different from companionship apps like GetCompanion?', acceptedAnswer: { '@type': 'Answer', text: 'Companionship apps connect you with trained companions for pleasant conversation and activities. LeanOn connects you with peer listeners who have personally lived through the same challenge you are facing — loneliness, burnout, a breakup, grief. The empathy comes from shared lived experience, not just training. LeanOn is fully online (text and voice), available across India and 10 countries, with a free 5-minute trial per listener.' } },
  ],
}
const orgSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://www.leanon.app/#organization',
      name: 'LeanOn',
      alternateName: ['Lean On', 'leanon'],
      url: 'https://www.leanon.app',
      logo: { '@type': 'ImageObject', url: 'https://www.leanon.app/logo.png', width: 512, height: 512 },
      description: "India-origin peer support platform connecting people with real human peer listeners for private one-to-one conversations by text or voice. Not therapy or clinical care.",
      areaServed: [
        { '@type': 'Country', name: 'India' },
        { '@type': 'Country', name: 'United States' },
        { '@type': 'Country', name: 'United Kingdom' },
        { '@type': 'Country', name: 'Canada' },
        { '@type': 'Country', name: 'United Arab Emirates' },
        { '@type': 'Country', name: 'Australia' },
        { '@type': 'Country', name: 'Singapore' },
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.leanon.app/#website',
      url: 'https://www.leanon.app',
      name: 'LeanOn',
      publisher: { '@id': 'https://www.leanon.app/#organization' },
      potentialAction: {
        '@type': 'SearchAction',
        target: { '@type': 'EntryPoint', urlTemplate: 'https://www.leanon.app/browse?query={search_term_string}' },
        'query-input': 'required name=search_term_string',
      },
    },
  ],
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to use LeanOn for peer support',
  description: 'Start talking to a real human peer listener on LeanOn in under 60 seconds — no appointment needed.',
  totalTime: 'PT1M',
  tool: [{ '@type': 'HowToTool', name: 'Smartphone or computer with internet access' }],
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Sign up to LeanOn', text: 'Enter your phone number and verify with OTP. Takes 30 seconds, no email or full name required.' },
    { '@type': 'HowToStep', position: 2, name: 'Browse peer listeners', text: 'Filter listeners by topic (loneliness, relationships, work stress, grief, etc.). Read their bios, ratings, and lived experience.' },
    { '@type': 'HowToStep', position: 3, name: 'Start a free 5-minute trial', text: 'Your first session with each new listener is a free 5-minute text or voice conversation. No wallet or payment needed.' },
    { '@type': 'HowToStep', position: 4, name: 'Continue with a paid session', text: 'If you want more time, recharge your wallet via UPI, cards, or net banking. Choose 15, 30, or 45 minutes. Paid sessions start at ₹160.' },
    { '@type': 'HowToStep', position: 5, name: 'Talk by text or voice', text: 'Choose text chat for privacy or voice call for warmth. Your session begins immediately — no appointment.' },
    { '@type': 'HowToStep', position: 6, name: 'Rate and return', text: 'Rate your listener after the session. Book again anytime. Unused wallet balance is fully refundable.' },
  ],
}

import AuthRedirect from '@/app/components/AuthRedirect'
import { VOICE_PRICING_ENABLED, VOICE_RATE_PREMIUM } from '@/lib/constants'

// Homepage price cards assume the ₹10/min base text rate.
const voiceFrom = (mins: number, textPrice: number) =>
  VOICE_PRICING_ENABLED ? ` · Voice from ₹${textPrice + VOICE_RATE_PREMIUM * mins}` : ' or voice'

export default function Home() {
  return (
    <>
      <AuthRedirect />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
        :root{
          --navy:#0F4867;
          --teal:#1A8FA0;
          --orange:#FF9933;
          --white:#FFFFFF;
          --card:#FFFFFF;
          --light:#F0F8FC;
          --border:#D5EEF6;
          --gray:#5A7A8A;
          --muted:#8AAAB8;
        }
        html{scroll-behavior:smooth;}

        /* THE KEY FIX: seamless radial gradient from top-left, white everywhere else */
        body{
          font-family:'Nunito',sans-serif;
          color:var(--navy);
          -webkit-font-smoothing:antialiased;
          background: radial-gradient(ellipse 90% 55% at 0% 0%, #C2E4F2 0%, #DAEEF8 22%, #FFFFFF 58%);
          background-attachment: fixed;
          min-height:100vh;
        }
        a{text-decoration:none;color:inherit;}
        img{max-width:100%;display:block;}

        /* NAV — transparent so gradient shows through seamlessly */
        .nav{
          background:transparent;
          padding:0 28px;
          height:100px;
          display:flex;
          align-items:center;
          justify-content:space-between;
          max-width:1100px;
          margin:0 auto;
        }
        .nav-logo{height:90px;width:auto;}
        .nav-right{display:flex;align-items:center;gap:12px;}
        .btn-nav{background:var(--teal);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:14px;padding:11px 24px;border-radius:50px;border:none;cursor:pointer;transition:all 0.2s;box-shadow:0 2px 12px rgba(26,143,160,0.35);}
        .btn-nav:hover{background:#167a8a;transform:translateY(-1px);}
        .btn-listener{background:transparent;color:var(--navy);font-family:'Nunito',sans-serif;font-weight:700;font-size:13px;padding:9px 16px;border-radius:50px;border:1.5px solid var(--border);cursor:pointer;transition:all 0.2s;display:none;white-space:nowrap;}
        .btn-listener:hover{border-color:var(--teal);color:var(--teal);}
        @media(min-width:480px){.btn-listener{display:block;}}

        /* HERO — no background, flows with body gradient */
        .hero{padding:48px 28px 64px;max-width:600px;margin:0 auto;text-align:left;}
        @media(min-width:700px){.hero{padding:56px 28px 72px;}}
        .hero-badge{display:inline-flex;align-items:center;gap:8px;background:rgba(26,143,160,0.1);color:var(--teal);font-weight:700;font-size:13px;padding:7px 18px;border-radius:50px;margin-bottom:28px;border:1.5px solid rgba(26,143,160,0.25);}
        .hero h1{font-size:clamp(30px,7vw,48px);font-weight:900;line-height:1.12;color:var(--navy);margin-bottom:20px;letter-spacing:-0.5px;}
        .hero h1 .o{color:var(--orange);}
        .hero p{font-size:17px;color:var(--gray);line-height:1.72;margin-bottom:36px;max-width:400px;}
        .hero-btns{display:flex;flex-wrap:wrap;gap:12px;margin-bottom:16px;}
        .btn-primary{background:var(--orange);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:16px;padding:16px 32px;border-radius:50px;border:none;cursor:pointer;display:inline-block;text-align:center;transition:all 0.2s;box-shadow:0 4px 20px rgba(255,153,51,0.35);}
        .btn-primary:hover{background:#e8861a;transform:translateY(-2px);}
        .btn-outline{background:transparent;color:var(--teal);font-family:'Nunito',sans-serif;font-weight:700;font-size:16px;padding:14px 30px;border-radius:50px;border:2px solid var(--teal);cursor:pointer;display:inline-block;text-align:center;transition:all 0.2s;}
        .btn-outline:hover{background:var(--teal);color:white;}
        .hero-note{font-size:12px;color:var(--muted);font-weight:600;}

        /* WHITE section divider */
        .white-section{background:var(--white);}
        .inner{max-width:600px;margin:0 auto;padding:52px 28px;}
        .sh{font-size:22px;font-weight:800;color:var(--navy);margin-bottom:6px;}
        .ss{font-size:14px;color:var(--gray);margin-bottom:24px;font-weight:500;}

        /* TOPICS */
        .topic-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;}
        .tc{background:var(--white);border:1.5px solid var(--border);border-radius:16px;padding:15px 16px;display:flex;align-items:flex-start;gap:12px;transition:all 0.2s;cursor:pointer;box-shadow:0 1px 4px rgba(15,72,103,0.04);}
        .tc:hover{border-color:var(--teal);background:var(--light);transform:translateY(-2px);box-shadow:0 4px 16px rgba(15,72,103,0.08);}
        .tc-ico{font-size:22px;flex-shrink:0;line-height:1.2;}
        .tc-body{display:flex;flex-direction:column;gap:3px;min-width:0;}
        .tc-label{font-weight:800;font-size:14px;color:var(--navy);line-height:1.2;}
        .tc-sub{font-weight:600;font-size:11.5px;color:var(--gray);line-height:1.4;}

        /* ABOUT */
        .al{font-size:12px;font-weight:800;color:var(--teal);text-transform:uppercase;letter-spacing:0.1em;margin-bottom:10px;}
        .at{font-size:clamp(20px,5vw,28px);font-weight:900;color:var(--navy);margin-bottom:20px;line-height:1.25;}
        .at .o{color:var(--orange);}
        .ab p{font-size:15px;color:#3A6070;line-height:1.78;margin-bottom:14px;}

        /* FEATURES */
        .fl{display:flex;flex-direction:column;gap:12px;margin-top:24px;}
        .fi{display:flex;gap:16px;align-items:flex-start;background:var(--white);border:1.5px solid var(--border);border-radius:18px;padding:18px;box-shadow:0 1px 4px rgba(15,72,103,0.04);}
        .fw{width:44px;height:44px;border-radius:12px;background:rgba(26,143,160,0.1);display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0;}
        .ft{font-size:15px;font-weight:800;color:var(--navy);margin-bottom:4px;}
        .fd{font-size:13px;color:var(--gray);line-height:1.6;font-weight:500;}

        /* MADE FOR INDIA */
        .india{background:var(--light);border-top:1px solid var(--border);border-bottom:1px solid var(--border);}
        .india-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:20px;}
        .ig{background:white;border:1.5px solid var(--border);border-radius:16px;padding:16px;display:flex;gap:12px;align-items:flex-start;}
        .ig-icon{font-size:24px;flex-shrink:0;}
        .ig-t{font-size:13px;font-weight:800;color:var(--navy);margin-bottom:3px;}
        .ig-d{font-size:12px;color:var(--gray);font-weight:500;line-height:1.5;}
        .city-row{display:flex;flex-wrap:wrap;gap:8px;margin-top:14px;}
        .city-chip{background:white;border:1.5px solid var(--border);border-radius:50px;padding:5px 14px;font-size:12px;font-weight:700;color:var(--navy);}

        /* HOW IT WORKS — navy dark section */
        .how{background:var(--navy);padding:56px 28px;}
        .hi{max-width:600px;margin:0 auto;}
        .ht{font-size:24px;font-weight:900;color:white;text-align:center;margin-bottom:36px;}
        .sl{display:flex;flex-direction:column;}
        .si{display:flex;gap:16px;align-items:flex-start;padding:16px 0;border-bottom:1px solid rgba(255,255,255,0.08);}
        .si:last-child{border-bottom:none;}
        .sn{width:36px;height:36px;border-radius:50%;background:var(--orange);display:flex;align-items:center;justify-content:center;font-weight:900;font-size:15px;color:white;flex-shrink:0;margin-top:2px;}
        .stit{font-size:15px;font-weight:800;color:white;margin-bottom:3px;}
        .sd{font-size:13px;color:rgba(213,238,246,0.75);line-height:1.5;font-weight:500;}

        /* PRICING */
        .pc{display:flex;flex-direction:column;gap:12px;margin-top:24px;}
        .pcard{background:var(--white);border:1.5px solid var(--border);border-radius:18px;padding:18px 22px;display:flex;justify-content:space-between;align-items:center;box-shadow:0 1px 4px rgba(15,72,103,0.04);}
        .pcard.feat{border:2.5px solid var(--orange);background:#FFFDF8;}
        .pl{font-size:16px;font-weight:800;color:var(--navy);margin-bottom:3px;}
        .pd{font-size:13px;color:var(--gray);font-weight:500;}
        .pb{background:rgba(255,153,51,0.12);color:var(--orange);font-size:11px;font-weight:800;padding:3px 10px;border-radius:50px;display:inline-block;margin-top:5px;}
        .pa{font-size:28px;font-weight:900;color:var(--navy);flex-shrink:0;}
        .fee-note{background:rgba(26,143,160,0.06);border:1px solid rgba(26,143,160,0.18);border-radius:14px;padding:14px 16px;display:flex;gap:12px;align-items:flex-start;margin-top:14px;}
        .fee-note span{font-size:13px;color:#1A5F6A;line-height:1.6;font-weight:600;}

        /* TESTIMONIALS */
        .tlist{display:flex;flex-direction:column;gap:12px;margin-top:24px;}
        .tcard{background:var(--light);border:1.5px solid var(--border);border-radius:18px;padding:20px;}
        .tst{font-size:14px;color:var(--orange);margin-bottom:10px;letter-spacing:2px;}
        .ttx{font-size:14px;color:#2A4F60;line-height:1.68;font-weight:500;margin-bottom:14px;font-style:italic;}
        .tau{display:flex;align-items:center;gap:10px;}
        .tav{width:32px;height:32px;border-radius:50%;background:var(--teal);display:flex;align-items:center;justify-content:center;font-weight:800;font-size:13px;color:white;flex-shrink:0;}
        .tnm{font-size:13px;font-weight:700;color:var(--navy);}
        .tcy{font-size:12px;color:var(--gray);font-weight:500;}

        /* TRUST GRID */
        .tg{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;text-align:center;}
        .ti{display:flex;flex-direction:column;align-items:center;gap:10px;}
        .tic{width:52px;height:52px;border-radius:18px;background:var(--white);border:1.5px solid var(--border);display:flex;align-items:center;justify-content:center;font-size:24px;box-shadow:0 1px 4px rgba(15,72,103,0.04);}
        .tl{font-size:12px;color:var(--gray);font-weight:700;line-height:1.3;}

        /* DISCLAIMER */
        .db{background:rgba(26,143,160,0.05);border:1.5px solid rgba(26,143,160,0.18);border-radius:20px;padding:20px;}
        .db h3{font-size:14px;font-weight:800;color:var(--navy);margin-bottom:10px;}
        .db p{font-size:13px;color:#2A4F60;line-height:1.68;font-weight:500;margin-bottom:8px;}
        .cb{background:#FFF0F0;border:1.5px solid #FFCDD2;border-radius:14px;padding:14px 16px;margin-top:8px;}
        .cb p{font-size:12px;color:#7A2020;font-weight:700;line-height:1.7;}

        /* FAQ */
        .faq-section{max-width:700px;margin:0 auto 0;padding:0 28px;}
        .faq-section h2{font-size:clamp(20px,4vw,26px);font-weight:900;color:var(--navy);margin-bottom:24px;text-align:center;}
        .faq-item{border-bottom:1px solid var(--border);padding:16px 0;}
        .faq-item:last-child{border-bottom:none;}
        .faq-q{font-size:15px;font-weight:800;color:var(--navy);margin-bottom:8px;cursor:pointer;display:flex;justify-content:space-between;align-items:center;}
        .faq-a{font-size:14px;color:var(--gray);font-weight:500;line-height:1.7;}

        /* BREATHE — quiet pause moment */
        .breathe{max-width:600px;margin:0 auto;padding:8px 28px 28px;}
        .breathe-card{background:radial-gradient(ellipse 120% 100% at 50% 0%, #EAF6FB 0%, #F6FBFD 60%, #FFFFFF 100%);border:1.5px solid var(--border);border-radius:24px;padding:38px 28px;text-align:center;}
        .breathe-eyebrow{font-size:12px;font-weight:800;color:var(--teal);text-transform:uppercase;letter-spacing:0.14em;margin-bottom:14px;}
        .breathe-dot{width:52px;height:52px;border-radius:50%;background:rgba(26,143,160,0.12);margin:0 auto 18px;display:flex;align-items:center;justify-content:center;font-size:24px;animation:breathePulse 5s ease-in-out infinite;}
        @keyframes breathePulse{0%,100%{transform:scale(1);opacity:0.85;}50%{transform:scale(1.14);opacity:1;}}
        .breathe-quote{font-size:clamp(19px,4.6vw,24px);font-weight:900;color:var(--navy);line-height:1.35;margin-bottom:12px;}
        .breathe-sub{font-size:14px;color:var(--gray);font-weight:600;line-height:1.65;max-width:360px;margin:0 auto;}

        /* BOTTOM CTA */
        .cta-c{background:var(--navy);border-radius:28px;padding:48px 28px;text-align:center;}
        .cta-c h2{font-size:clamp(20px,5vw,28px);font-weight:900;color:white;margin-bottom:12px;line-height:1.25;}
        .cta-c p{font-size:15px;color:rgba(213,238,246,0.8);margin-bottom:28px;font-weight:500;}
        .btn-cta{background:var(--orange);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:17px;padding:18px 40px;border-radius:50px;border:none;cursor:pointer;display:inline-block;transition:all 0.2s;box-shadow:0 6px 24px rgba(255,153,51,0.4);}
        .btn-cta:hover{background:#e8861a;transform:translateY(-2px);}

        /* FOOTER */
        .footer{background:var(--white);border-top:1px solid var(--border);padding:36px 28px 52px;}
        .fi2{max-width:600px;margin:0 auto;}
        .fli{display:flex;flex-wrap:wrap;gap:8px 20px;margin-bottom:18px;}
        .fli a{font-size:13px;color:var(--gray);font-weight:600;}
        .fli a:hover{color:var(--navy);}
        .fcp{font-size:12px;color:var(--muted);font-weight:600;margin-top:20px;}
      `}</style>

      {/* NAV — transparent, sits on gradient */}
      <nav className="nav">
        <a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a>
        <div className="nav-right">
          {/* Recruitment ("Become a listener") deliberately does NOT live here.
              Above-the-fold it competed with the seeker CTA and converted
              help-seekers into applicants; it now sits in the footer only.
              "Listener login" stays — that's access for people who already
              signed up, not a pitch. */}
          <a href="/auth" className="btn-nav">Sign in</a>
          <a href="/auth?mode=listener" className="btn-listener">Listener login</a>
        </div>
      </nav>

      {/* HERO — flows with same gradient background */}
      <section className="hero">
        <div className="hero-badge"><span>🤝</span><span>Real people · Real conversations · In minutes</span></div>
        <h1>Someone to<br /><span className="o">lean on,</span><br />right now.</h1>
        <p>Had a fight. Going through something. Need to vent before you explode. Talk to a real peer listener in India — trained, anonymous, no appointment needed. Available now.</p>
        <div className="hero-btns">
          <a href="/auth" className="btn-primary">Start your 5-min chat</a>
          <a href="/browse" className="btn-outline">Browse peer listeners</a>
        </div>
        <p className="hero-note">No appointment needed · Anonymous · Paid sessions from ₹160</p>
      </section>

      {/* TOPICS */}
      <div className="white-section">
        <div className="inner">
          <h2 className="sh">What&apos;s weighing on you?</h2>
          <p className="ss">Pick what feels closest — and find someone who gets it.</p>
          <div className="topic-grid">
            {[
              {id:'loneliness',   i:'😔', l:'Loneliness',                    s:"when you feel alone even with people around"},
              {id:'relationships',i:'💕', l:'Love & relationship problems',   s:"what you can't say to them, say here",  href:'/love-problems-india'},
              {id:'stress',       i:'💼', l:'Work & money stress',            s:"when the day just won't switch off"},
              {id:'relationships',i:'💍', l:'Marriage & family',              s:'the weight you carry alone at home',    href:'/marriage-problems-india'},
              {id:'grief',        i:'🌿', l:'Grief & loss',                   s:'carrying someone no longer here'},
              {id:'students',     i:'📚', l:'Student pressure',               s:"the weight of everyone's expectations"},
              {id:'career',       i:'🧭', l:'Career confusion',               s:'not sure which way is forward'},
              {id:'general',      i:'☕', l:'Just need to talk',              s:'no reason needed — just talk'},
            ].map(t=>(
              <a key={t.l} href={'href' in t ? (t as {href:string}).href : `/browse?topic=${t.id}`} className="tc">
                <span className="tc-ico">{t.i}</span>
                <span className="tc-body">
                  <span className="tc-label">{t.l}</span>
                  <span className="tc-sub">{t.s}</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <div className="inner">
        <p className="al">Our mission</p>
        <h2 className="at">Let&apos;s change the conversation on <span className="o">emotional wellness</span></h2>
        <div className="ab">
          <p>We believe solving emotional challenges should be no different from solving any other health challenge. When you&apos;re struggling, you deserve someone who truly understands — not just a stranger, but someone who has been there and found their way through.</p>
          <p>Stigma still holds people back. LeanOn is here to change that — making human connection instant, affordable, and free of judgment. You don&apos;t need a diagnosis or an appointment. You just need someone to lean on.</p>
        </div>
      </div>


      {/* GEO / ENTITY CLARITY */}
      <section className="white-section" aria-labelledby="leanon-at-a-glance">
        <div className="inner">
          <h2 id="leanon-at-a-glance" className="sh">What is LeanOn?</h2>
          <p className="ss">A clear answer for people — and for search systems — looking for the right kind of support.</p>
          <div className="india-grid">
            {[
              {i:'🤝',t:'Human peer support',d:'LeanOn connects you with a real person for a one-to-one conversation. It is not an AI chatbot.'},
              {i:'🧭',t:'Peer, not clinical care',d:'Listeners provide peer support based on lived experience. LeanOn does not provide therapy, counselling, diagnosis or clinical treatment.'},
              {i:'💬',t:'Text or voice',d:'Choose a private text or voice conversation depending on how you want to communicate.'},
              {i:'🎯',t:'For everyday emotional needs',d:'People use LeanOn when they want someone to listen through loneliness, relationship difficulties, work stress, homesickness, grief or simply a difficult day.'},
              {i:'🇮🇳',t:'India-origin platform',d:'LeanOn was built in India and serves people in India and supported international markets, including members of the Indian diaspora.'},
              {i:'💳',t:'Pay for conversation time',d:'LeanOn is a transaction-based platform: listeners set rates and seekers pay for the conversation time they choose.'},
            ].map((item,i)=>(
              <div key={i} className="ig"><div className="ig-icon">{item.i}</div><div><div className="ig-t">{item.t}</div><div className="ig-d">{item.d}</div></div></div>
            ))}
          </div>
          <div className="db" style={{marginTop:24}}>
            <h3>Which kind of support is right for you?</h3>
            <p><strong>Want information, ideas or an AI conversation?</strong> An AI assistant may fit. <strong>Want another human being to listen?</strong> LeanOn is designed for peer support. <strong>Need diagnosis or clinical treatment?</strong> Speak with an appropriately qualified mental-health professional. <strong>In immediate danger or crisis?</strong> Use the appropriate emergency or crisis service where you are.</p>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <div className="white-section">
        <div className="inner">
          <h2 className="sh">Why choose LeanOn?</h2>
          <p className="ss">Built around what actually helps people feel better.</p>
          <div className="fl">
            {[
              {i:'🔍',t:'Open listener directory',d:'Browse peer listeners by topic. Read their stories and ratings before you pay anything.'},
              {i:'⚡',t:'Instant, no-appointment access',d:'No booking. No waiting. Someone is available right now. Start a session in under 60 seconds.'},
              {i:'💳',t:'Pay-per-session flexibility',d:'No subscriptions. Recharge your wallet and use it whenever. Unused balance refunded anytime.'},
              {i:'💬',t:'Text or voice — your choice',d:'Type for privacy in a joint home. Talk for the warmth of a real voice. Always your call.'},
              {i:'🤝',t:'Lived-experience listeners',d:'Our listeners have been through it — breakups, burnout, grief, startup failure. They get it.'},
              {i:'🔒',t:'Safe & private by design',d:'Sessions are private. No personal info shared. AI moderation keeps every conversation safe.'},
            ].map((f,i)=>(
              <div key={i} className="fi"><div className="fw">{f.i}</div><div><div className="ft">{f.t}</div><div className="fd">{f.d}</div></div></div>
            ))}
          </div>
        </div>
      </div>

      {/* MADE FOR INDIA */}
      <div className="india">
        <div className="inner">
          <h2 className="sh">Built for India 🇮🇳</h2>
          <p className="ss">Designed around how India actually lives — joint families, late nights, privacy needs, and UPI.</p>
          <div className="india-grid">
            {[
              {i:'📱',t:'Phone OTP sign-up',d:'No email. No full name. Sign up in 30 seconds with just your number.'},
              {i:'🔒',t:'Private & anonymous',d:'Your first name only. No last name, no profile photo required. Safe in joint families.'},
              {i:'💸',t:'UPI & wallet payments',d:'Recharge with UPI, cards, or net banking. Refundable, no subscription lock-in.'},
              {i:'⚡',t:'Available right now',d:'Someone is online right now — no appointment, no wait. Start talking in under a minute.'},
              {i:'🗣️',t:'Text or voice in Hindi',d:'Chat in English or Hindi. Voice call when you need a real voice.'},
              {i:'🤝',t:'Lived-experience listeners',d:'Listeners from Bengaluru, Mumbai, Delhi, Chennai, Hyderabad and across India.'},
            ].map((item,i)=>(
              <div key={i} className="ig"><div className="ig-icon">{item.i}</div><div><div className="ig-t">{item.t}</div><div className="ig-d">{item.d}</div></div></div>
            ))}
          </div>
          <div className="city-row">
            {['Bengaluru','Mumbai','Delhi','Chennai','Hyderabad','Pune','Kolkata','Jaipur','Ahmedabad','Chandigarh'].map(c=>(
              <span key={c} className="city-chip">📍 {c}</span>
            ))}
          </div>
        </div>
      </div>

      {/* INDIAN DIASPORA */}
      <section className="white-section" aria-labelledby="indians-abroad">
        <div className="inner">
          <p className="al">For Indians abroad</p>
          <h2 id="indians-abroad" className="at">Far from India. <span className="o">Still someone to talk to.</span></h2>
          <div className="ab">
            <p>Living abroad can make some conversations harder — homesickness, family expectations, marriage or relationship pressure, work stress, immigration uncertainty, or simply having a difficult day when you do not want to call home.</p>
            <p>LeanOn gives Indians and South Asians abroad a private one-to-one conversation with a real peer listener. Start with one free 5-minute introduction, then continue with paid text or voice time only if you want to.</p>
          </div>
          <div className="city-row" style={{marginTop:20}}>
            {['USA','UK','Canada','Australia','UAE','Singapore'].map(c=>(
              <a key={c} href={c==='USA'?'/usa':c==='UK'?'/uk':c==='Canada'?'/canada':c==='Australia'?'/australia':c==='UAE'?'/uae':'/singapore'} className="city-chip">🇮🇳 Indians in {c} →</a>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <div className="how">
        <div className="hi">
          <h2 className="ht">Start your journey with LeanOn</h2>
          <div className="sl">
            {[
              {t:'Sign up to LeanOn',d:'Just your phone number. OTP verified. 30 seconds.'},
              {t:'Browse peer listeners',d:'Filter by topic. Read bios and ratings. Browse anonymously.'},
              {t:'Pick your session length',d:'5-min trial, or choose 15 or 30 minutes.'},
              {t:'Recharge your wallet',d:'Top up ₹200, ₹500 or ₹1000. Refundable anytime.'},
              {t:'Start instantly',d:'Text chat or voice call — your session begins immediately.'},
              {t:'Get the support you need',d:'Rate your listener. Book again anytime. You are not alone.'},
            ].map((s,i)=>(
              <div key={i} className="si"><div className="sn">{i+1}</div><div><div className="stit">{s.t}</div><div className="sd">{s.d}</div></div></div>
            ))}
          </div>
        </div>
      </div>

      {/* PRICING — seeker pays listener's rate + flat ₹10 (PLATFORM_FEE). Listener
          side of the ledger (LISTENER_SERVICE_FEE_RATE) is not this page's
          concern — never claim "100% to listener" here, it's no longer true. */}
      <div className="inner">
        <h2 className="sh">Simple, honest pricing</h2>
        <p className="ss">No subscriptions. Pay only for the time you use — refundable anytime.</p>
        {/* Card copy is deliberately seeker-side ("what you get"), not
            "listener earns ₹X · you pay ₹Y". The old split framing showed a
            visitor the earnings arithmetic at the exact moment they were
            deciding whether to pay, which read as an earning opportunity.
            Full fee transparency is preserved in the explainer below —
            PROJECT.md §10.4 requires the ₹10 fee be honest, and also says
            not to over-advertise it in marketing copy. */}
        <div className="pc">
          {[
            {l:'Trial session',d:'5 minutes · Text or voice · No wallet needed · Free once per listener',p:'₹0',b:'Trial',feat:false},
            {l:'Quick chat',d:`15 minutes · One-on-one · Text${voiceFrom(15, 160)}`,p:'₹160',b:'',feat:false},
            {l:'Deep dive',d:`30 minutes · One-on-one · Text${voiceFrom(30, 310)}`,p:'₹310',b:'Most popular',feat:true},
          ].map((item,i)=>(
            <div key={i} className={`pcard${item.feat?' feat':''}`}>
              <div><div className="pl">{item.l}</div><div className="pd">{item.d}</div>{item.b&&<div className="pb">{item.b}</div>}</div>
              <div className="pa">{item.p}</div>
            </div>
          ))}
        </div>
        <div className="fee-note">
          <span>💡</span>
          <span><strong>Where your money goes:</strong> You pay your listener&apos;s rate plus a flat ₹10 per session — that&apos;s the only fee you see, and it&apos;s how we keep the lights on. Unused wallet balance is fully refundable, anytime.</span>
        </div>
      </div>

      {/* TESTIMONIALS */}
      <div className="white-section">
        <div className="inner">
          <h2 className="sh">What people are saying</h2>
          <p className="ss">Real sessions. Real relief.</p>
          <div className="tlist">
            {[
              {tx:"Had a fight with my husband before he left for work. I was sitting at my desk, unable to focus. Opened LeanOn, talked for 15 minutes, and I could actually breathe again.",nm:'Priya M.',cy:'Bengaluru',ini:'P'},
              {tx:"As a founder going through a hard patch I felt completely alone. Talking to someone who survived their own startup failure was exactly what I needed.",nm:'Arjun K.',cy:'Mumbai',ini:'A'},
              {tx:"More affordable and more honest than anything else I've tried. I've booked 4 sessions now and each one helped.",nm:'Sneha R.',cy:'Hyderabad',ini:'S'},
            ].map((r,i)=>(
              <div key={i} className="tcard">
                <div className="tst">★★★★★</div>
                <p className="ttx">&ldquo;{r.tx}&rdquo;</p>
                <div className="tau"><div className="tav">{r.ini}</div><div><div className="tnm">{r.nm}</div><div className="tcy">{r.cy}</div></div></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TRUST */}
      <div className="inner">
        <div className="tg">
          {[{i:'🔒',l:'Safe & private'},{i:'💬',l:'Text or voice'},{i:'🔄',l:'Refund anytime'},{i:'⚡',l:'Instant access'},{i:'🤝',l:'Lived experience'},{i:'⏱️',l:'Available now'}].map((t,i)=>(
            <div key={i} className="ti"><div className="tic">{t.i}</div><span className="tl">{t.l}</span></div>
          ))}
        </div>
      </div>

      {/* DISCLAIMER */}
      <div className="inner" style={{paddingTop:0}}>
        <div className="db">
          <h3>ℹ️ LeanOn is peer support — not therapy</h3>
          <p><strong>Our listeners are real people with lived experience — not licensed therapists or counselors.</strong> Peer support is legitimate and valuable. It is different from, and not a replacement for, professional mental health treatment.</p>
          <p>If you need clinical mental health support, please consult a qualified professional.</p>
          <div className="cb"><p>🆘 <strong>In crisis?</strong> Call <strong><a href="tel:08046110007" style={{color:'inherit'}}>NIMHANS 080-46110007</a></strong> or <strong><a href="tel:14416" style={{color:'inherit'}}>Tele-MANAS 14416</a></strong> (free · 24/7 · Govt of India)</p></div>
        </div>
      </div>

      {/* FAQ — drives rich snippets in Google */}
      <div className="inner" style={{paddingBottom:0}}>
        <div className="faq-section">
          <h2>Frequently asked questions</h2>
          {[
            { q: 'What is LeanOn?', a: 'LeanOn is a peer support platform built on empathy — you talk to real people who have lived through what you\'re facing: loneliness, burnout, anxiety, grief, relationships, and more. It\'s not therapy, but real human connection through one-to-one peer conversations.' },
            { q: 'What makes LeanOn listeners empathetic?', a: 'Every listener has personally lived through what they support others with. That lived experience is what makes their empathy real, not rehearsed — you\'re heard without being judged, fixed, or rushed.' },
            { q: 'How does pricing work?', a: 'LeanOn charges a flat fee per session. 15-minute sessions start at ₹160. Your first session with each new listener is free (5 minutes) — no wallet top-up needed. After that, sessions cost ₹8–25 per minute depending on the listener, billed in 15-minute slots.' },
            { q: 'How much is a paid session, and is it worth it?', a: 'A 15-minute paid session starts at ₹160. You can start with the free 5-minute introduction and decide whether you want to continue. LeanOn is a peer-support service, not a therapy substitute.' },
            { q: 'How is this different from therapy or counselling?', a: 'Listeners on LeanOn are real people with lived experience, not licensed therapists. They offer peer support, not clinical diagnosis or treatment. LeanOn is for people who want human conversation and everyday emotional support.' },
            { q: 'Is my conversation private?', a: 'Yes. Sessions are intended to be private. See LeanOn\'s Privacy and Trust pages for the specific information practices that apply.' },
                    { q: 'Is LeanOn related to the song "Lean On"?', a: 'No. LeanOn (one word, at leanon.app) is an Indian peer emotional support platform — no connection to the Major Lazer song. The name comes from the phrase "someone to lean on": having a person you can rely on emotionally, anytime you need it.' },
            { q: 'Where can I talk to a real person when I feel lonely?', a: 'LeanOn connects you with real human peer listeners for private conversations by text or voice. Browse listener profiles, start with a free 5-minute introduction, and choose someone who has lived experience with what you are going through. Paid sessions start at ₹160 for 15 minutes.' },
            { q: 'How is LeanOn different from talking to ChatGPT or AI?', a: 'LeanOn provides conversations with real human beings who bring their own lived experience. AI assistants provide generated responses. Both have valid uses: AI for information and reflection, LeanOn for when you specifically want another human being to listen.' },
            { q: 'What is an affordable alternative to therapy in India?', a: 'Therapy in India typically costs ₹1,500–5,000 per session. Peer support through LeanOn starts at ₹160 for 15 minutes. Peer support is not a replacement for therapy — it is a complementary option for everyday emotional needs like loneliness, relationship stress, and difficult days.' },
          ].map((f,i) => (
            <div key={i} className="faq-item">
              <div className="faq-q">{f.q}</div>
              <div className="faq-a">{f.a}</div>
            </div>
          ))}
        </div>
      </div>


      {/* READY-TO-TALK INTENT HUB — routes high-volume homepage traffic into seeker pages */}
      <div className="white-section">
        <div className="inner">
          <div className="al">Not sure where to start?</div>
          <h2 className="at">Start with the situation you&apos;re actually in.</h2>
          <div className="topic-grid">
            <a className="tc" href="/talk-to-a-real-person-online"><div className="tc-ico">🧑</div><div className="tc-body"><div className="tc-label">I want a real person</div><div className="tc-sub">Talk to a human online</div></div></a>
            <a className="tc" href="/someone-to-talk-to-when-lonely"><div className="tc-ico">💙</div><div className="tc-body"><div className="tc-label">I feel lonely</div><div className="tc-sub">Find someone to talk to</div></div></a>
            <a className="tc" href="/need-someone-to-talk-to-but-dont-need-therapy"><div className="tc-ico">💬</div><div className="tc-body"><div className="tc-label">I need support, not therapy</div><div className="tc-sub">Understand peer support</div></div></a>
            <a className="tc" href="/talk-to-someone-after-relationship-fight"><div className="tc-ico">❤️</div><div className="tc-body"><div className="tc-label">I had a relationship fight</div><div className="tc-sub">Talk it through privately</div></div></a>
            <a className="tc" href="/talk-to-human-instead-of-chatgpt"><div className="tc-ico">🤝</div><div className="tc-body"><div className="tc-label">I want a human, not AI</div><div className="tc-sub">Human conversation vs AI</div></div></a>
            <a className="tc" href="/indian-emotional-support-abroad"><div className="tc-ico">🌍</div><div className="tc-body"><div className="tc-label">I&apos;m Indian and live abroad</div><div className="tc-sub">Diaspora peer support</div></div></a>
          </div>
        </div>
      </div>

      {/* BREATHE — a quiet pause before the final ask */}
      <div className="breathe">
        <div className="breathe-card">
          <div className="breathe-eyebrow">A small pause</div>
          <div className="breathe-dot">🫧</div>
          <p className="breathe-quote">Take one slow breath in.<br />Hold. And gently let it out.</p>
          <p className="breathe-sub">Whatever you&apos;re carrying tonight, you don&apos;t have to carry it alone.</p>
        </div>
      </div>

      {/* CTA */}
      <div className="inner">
        <div className="cta-c">
          <h2>Tonight doesn&apos;t have to feel this heavy.</h2>
          <p>One breath, then one small step. A listener who gets it is a tap away — right now, no appointment.</p>
          <a href="/auth" className="btn-cta">Start now →</a>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="footer">
        <div className="fi2">
          <div style={{marginBottom:18}}><img src="/logo.png" alt="LeanOn — Someone to Lean On" style={{height:48}} /></div>
          <div className="fli">
            <a href="/about">About LeanOn</a>
            <a href="/browse">Find a listener</a>
            <a href="/blog">Blog</a>
            <a href="/faq">FAQ</a>
            <a href="/contact">Contact</a>
            <a href="/privacy">Privacy</a>
            <a href="/terms">Terms</a>
          </div>
          <div className="fli" style={{marginTop:4,fontSize:12,opacity:0.75}}>
            <a href="/support/loneliness">Loneliness support India</a>
            <a href="/support/anxiety">Anxiety support India</a>
            <a href="/support/breakup">Breakup support</a>
            <a href="/support/grief">Grief support</a>
            <a href="/support/founder-burnout">Startup burnout support</a>
            <a href="/support/student-stress">Student stress help</a>
            <a href="/support/emotional-support">Emotional support online</a>
            <a href="/support/someone-to-talk-to">Someone to talk to</a>
            <a href="/support/anonymous-support">Anonymous support India</a>
            <a href="/support/relationship-stress">Relationship stress</a>
            <a href="/support/social-anxiety">Social anxiety support</a>
            <a href="/support/imposter-syndrome">Imposter syndrome help</a>
            <a href="/support/work-from-home-loneliness">WFH loneliness support</a>
            <a href="/support/overthinking">Overthinking help</a>
            <a href="/support/marriage-loneliness">Lonely in marriage</a>
            <a href="/support/job-loss">Job loss support</a>
            <a href="/support/sunday-night-loneliness">Sunday night loneliness</a>
            <a href="/support/long-distance-relationship">Long-distance relationship</a>
          </div>
          <div className="fli" style={{marginTop:4,fontSize:12,opacity:0.75}}>
            <a href="/talk-to-someone-online">Talk to someone online</a>
            <a href="/someone-to-lean-on">Someone to lean on</a>
            <a href="/daily-check-in">Daily check-in — how do you feel today?</a>
            <a href="/talk-to-someone-not-astrologer">Not a prediction — just someone to talk to</a>
            <a href="/online-counselling-india-cost">Online counselling cost India</a>
            <a href="/blog/therapy-cost-india">What therapy costs in India</a>
            <a href="/blog/no-one-to-talk-to">No one to talk to?</a>
            <a href="/blog/how-to-stop-overthinking-at-night">Stop overthinking at night</a>
            <a href="/blog/why-people-call-astrologers-to-talk">Why people call astrologers just to talk</a>
            <a href="/love-problems-india">Love problems India</a>
            <a href="/marriage-problems-india">Marriage problems India</a>
            <a href="/pay-to-talk-online-india">Pay to talk online India</a>
            <a href="/anonymous-chat-india">Anonymous chat India</a>
            <a href="/late-night-support-india">Late night support India</a>
            <a href="/astrotalk-alternative">AstroTalk alternative</a>
            <a href="/yourdost-alternative">YourDOST alternative</a>
            <a href="/wysa-alternative">Wysa alternative</a>
            <a href="/peer-support-online-india">Peer support online India</a>
            <a href="/depression-support-india">Depression support India</a>
            <a href="/talk-about-my-problems-online">Talk about my problems online</a>
            <a href="/feeling-overwhelmed-india">Feeling overwhelmed India</a>
            <a href="/blog/astrotalk-expensive-alternative">Is AstroTalk worth the cost?</a>
            <a href="/blog/talk-to-real-person-not-astrologer">Talk to a real person, not an astrologer</a>
          </div>
          <div className="fli" style={{marginTop:4,fontSize:12,opacity:0.75}}>
            <a href="/blog/what-does-lean-on-mean">What does lean on mean</a>
            <a href="/blog/peer-support-vs-therapy-india">Peer support vs therapy</a>
            <a href="/blog/loneliness-at-night">Loneliness at night</a>
            <a href="/blog/joint-family-emotional-support">Joint family support</a>
            <a href="/blog/empathy-in-peer-support">What is empathy?</a>
            <a href="/blog/what-is-peer-support-india">What is peer support?</a>
            <a href="/blog/online-emotional-support-india-guide">Online emotional support guide</a>
            <a href="/glossary">Peer support glossary</a>
          </div>
          <div className="fli" style={{marginTop:4,fontSize:12,opacity:0.75}}>
            <a href="/jaipur">Peer support Jaipur</a>
            <a href="/ahmedabad">Peer support Ahmedabad</a>
          </div>
          {/* Listener recruitment lives here and nowhere else on this page:
              discoverable for anyone genuinely looking, with no earnings hook
              competing against the seeker funnel above. */}
          <div className="fli" style={{marginTop:4,fontSize:12,opacity:0.75}}>
            
          </div>
          <p className="fcp">© 2026 LeanOn (Lean On) · leanon.app · Peer support platform · Made in India 🇮🇳</p>
        </div>
      </footer>
    </>
  )
}
