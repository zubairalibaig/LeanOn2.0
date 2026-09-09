import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'I Need Professional Help But Can\'t Access It — What to Do Right Now in India | LeanOn',
  description: 'You know you need professional support. But the cost, the wait, the stigma, or the fear is in the way. Here is what to do right now while you figure out the bigger picture.',
  keywords: [
    'need professional help India', 'can\'t afford therapist India', 'how to get mental health help India',
    'need therapist India', 'mental health access India', 'therapy waitlist India',
    'I need help India mental health', 'can\'t find therapist India',
    'mental health support India affordable', 'professional help India cost',
    'therapy India difficult', 'psychological help India', 'counseling access India',
  ],
  alternates: { canonical: 'https://www.leanon.app/i-need-professional-help-india', languages: { 'en-IN': 'https://www.leanon.app/i-need-professional-help-india' } },
  openGraph: {
    title: 'I Need Professional Help But Can\'t Access It — What to Do Right Now in India | LeanOn',
    description: 'You know you need professional support but it is out of reach. Here is what to do right now in India.',
    url: 'https://www.leanon.app/i-need-professional-help-india',
    siteName: 'LeanOn',
    type: 'article',
    images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn — Mental Health Help India' }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the difference between a psychiatrist, psychologist, and counsellor in India?',
      acceptedAnswer: { '@type': 'Answer', text: 'A psychiatrist is a medical doctor who can diagnose mental health conditions and prescribe medication. They are the right person to see for conditions like severe depression, bipolar disorder, schizophrenia, or when medication is part of the treatment. A psychologist holds a postgraduate degree in psychology and can do psychological assessment and therapy — they cannot prescribe medication. A counsellor is typically trained in counselling or psychotherapy (not always a clinical degree) and focuses on talk therapy for emotional difficulties, life challenges, and mental health support. For most people navigating everyday emotional difficulties — numbness, anxiety, difficult relationships, unprocessed past experiences — a counsellor or psychologist is the right starting point. If something feels more acute or medication might be relevant, a psychiatrist is the path.' },
    },
    {
      '@type': 'Question',
      name: 'How much does therapy actually cost in India?',
      acceptedAnswer: { '@type': 'Answer', text: 'Private therapy in metro cities typically ranges from ₹1,500 to ₹5,000 per session for a qualified psychologist or counsellor. Psychiatrists vary widely — from ₹500 at government hospitals to ₹3,000+ in private practice. Online therapy platforms have made rates more accessible in some cases, with some counsellors offering sessions from ₹500–₹1,000. Government hospitals and medical college OPDs can provide consultation and therapy at very low or no cost, though waiting times can be long and quality varies. The honest answer is that for regular, quality therapy, you are looking at ₹6,000–₹20,000 per month for weekly sessions — genuinely inaccessible for many.' },
    },
    {
      '@type': 'Question',
      name: 'Are there free or subsidized mental health services in India?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Government district mental health programs (DMHP) offer free services at government hospitals. Medical college psychiatry departments often have free or very low-cost OPD clinics. NIMHANS in Bangalore is a government institute where consultation is subsidized. The iCall helpline (011-41198666) and the Vandrevala Foundation helpline offer free telephonic counselling. Some NGOs and community health organizations offer sliding-scale or free therapy — Sangath (Goa and online), The MINDS Foundation, and similar organizations. Online platforms like YourDOST and Wysa offer accessible-cost counselling. These require research and persistence to access, but they exist.' },
    },
    {
      '@type': 'Question',
      name: 'Can I use LeanOn while I\'m looking for a therapist?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes — that is one of the most honest uses of LeanOn. You know you need professional help. You are working on finding and accessing it. In the meantime, you are carrying things alone that feel heavy, and you could use a real person to talk to about how you are feeling. LeanOn is not therapy. It will not do what a therapist does. But it can help you feel less alone, help you clarify what you are experiencing, and provide real human support while you navigate toward professional care. Many people find that talking to a peer listener also helps them figure out what they want to say to a therapist when they finally get an appointment.' },
    },
    {
      '@type': 'Question',
      name: 'What should I tell a therapist when I first meet them?',
      acceptedAnswer: { '@type': 'Answer', text: 'Whatever you actually want help with — in whatever words you have for it. You do not need to have it organised or diagnosed. You can say "I have been feeling numb for years," "I have been struggling with mornings," "something happened in my teenage years that I think is still affecting me," or simply "I don\'t feel okay and I don\'t know why." A good therapist will take it from there. The first session is usually an intake — they are asking questions to understand your situation. You do not need to perform being more distressed or more together than you are. Just say the true thing.' },
    },
    {
      '@type': 'Question',
      name: 'How do I know if I need a therapist or if peer support is enough?',
      acceptedAnswer: { '@type': 'Answer', text: 'If your difficulties are significantly affecting your ability to function — relationships, work, basic self-care — a therapist is the appropriate level of support. If you are carrying something long-term that you have never processed, a therapist can provide the depth of work that peer support cannot. If you are in crisis, professional help is essential. Peer support is most valuable for: the ongoing emotional weight of being a person, situations where you need to be heard and to think out loud, times when you are waiting for professional access, and the kind of human connection that does not require a clinical relationship. The honest answer is that for most people, both serve different needs — and accessing professional help when you can is worth pursuing alongside peer support, not instead of it.' },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'I Need Professional Help India', item: 'https://www.leanon.app/i-need-professional-help-india' },
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
  .resource-list{display:flex;flex-direction:column;gap:12px;}
  .resource-item{background:var(--light);border:1.5px solid var(--border);border-radius:16px;padding:16px 20px;}
  .resource-item h3{font-size:15px;font-weight:800;color:var(--navy);margin-bottom:4px;}
  .resource-item p{font-size:13px;color:var(--gray);margin:0;font-weight:500;line-height:1.65;}
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

export default function INeedProfessionalHelpIndiaPage() {
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
          <span style={{color:'var(--navy)'}}>I Need Professional Help India</span>
        </nav>

        <div style={{background:'#EBF5FB',borderLeft:'4px solid #1A8FA0',borderRadius:'0 12px 12px 0',padding:'14px 18px',marginBottom:28,fontSize:14,color:'#0F4867',fontWeight:600,lineHeight:1.65}}>
          🆘 In crisis? Call <a href="tel:08046110007" style={{color:'#1A8FA0',fontWeight:800}}>NIMHANS 080-46110007</a> or <a href="tel:14416" style={{color:'#1A8FA0',fontWeight:800}}>Tele-MANAS 14416</a> (free · 24/7 · Govt of India)
        </div>

        <div className="hero">
          <p className="badge">Mental Health Access · India · Honest Guidance</p>
          <h1>You Know You Need Help. <em>Getting It</em> Is the Hard Part.</h1>
          <p className="lead">The clarity is there. You know something is wrong and you know you need more than what you have been doing. The problem is not the knowing — it is the cost, the waiting, the stigma, the not knowing where to start. Here is what is actually available in India, and what to do right now while you figure out the bigger picture.</p>
          <a href="/browse" className="cta-hero">Talk to someone right now →</a>
        </div>

        <div className="section">
          <h2>You Already Know You Need Help. That Clarity Is Valuable.</h2>
          <p>It took something — time, honesty, maybe years of quietly carrying things — to get to the point of saying &quot;I need professional help.&quot; That is not a small thing. Many people never get there. They dismiss their experience, tell themselves others have it worse, keep waiting for things to improve on their own. You have already moved past that.</p>
          <p>The clarity you have — that what you are experiencing is real, that you deserve support, that what you have been doing is not enough — is the hardest part of the journey. Everything after this is logistics. Difficult logistics, in a country where mental health infrastructure is genuinely inadequate. But logistics, not a question of whether you deserve help or whether your experience is real enough.</p>
          <p>It is. You do.</p>
          <p>The gap between knowing you need professional help and being able to access it in India is wide and real. Cost: private therapy is ₹1,500–₹4,000 per session, and weekly therapy runs ₹6,000–₹16,000 a month — genuinely inaccessible on most Indian salaries. Availability: qualified mental health professionals are concentrated in metros, scarce in smaller cities. Stigma: even for people who can afford therapy, the family, social, and workplace pressure against seeking help is significant. Waiting: good therapists often have waiting lists.</p>
          <p>None of this is your fault. It is a systems failure, not a personal one.</p>
        </div>

        <div className="section">
          <h2>Why Accessing Professional Help in India Is Genuinely Hard</h2>
          <p>India has approximately 0.3 psychiatrists per 100,000 people — compared to 13 per 100,000 in developed countries. The mental health treatment gap (the percentage of people who need help and do not receive it) is estimated at over 80%. This is the context in which you are trying to access care.</p>
          <p>The specific barriers most people hit:</p>
          <ul>
            <li><strong>Cost:</strong> A single private therapy session costs roughly what a person earning ₹30,000 per month earns in a day. Weekly therapy is not financially feasible for most of the people who need it.</li>
            <li><strong>Access in non-metros:</strong> If you are not in Bangalore, Mumbai, Delhi, Hyderabad, or Chennai, the options narrow dramatically. Online therapy has improved this, but quality and affordability remain inconsistent.</li>
            <li><strong>Stigma:</strong> Even when therapy is available and affordable, the fear of family finding out, colleagues knowing, a record existing — keeps many people from accessing it. In India, mental health stigma is not just cultural, it can have real consequences for employment, marriage prospects, and family relationships.</li>
            <li><strong>Not knowing who to see:</strong> The difference between a psychiatrist, psychologist, and counsellor is not well understood. Many people see the wrong kind of professional for their needs, or see someone unqualified because they did not know what to look for.</li>
            <li><strong>Fear of the process itself:</strong> What happens when you walk into a therapist&apos;s office? What if they judge you? What if you have to talk about things you are not ready for? The unknown is its own barrier.</li>
          </ul>
        </div>

        <div className="section">
          <h2>What to Do Right Now — Before the Therapy Appointment</h2>
          <p>The most important thing to do right now is not to wait. Waiting for the &quot;right&quot; moment, the right budget, the right circumstance — while the weight continues to build — makes everything harder. There are things you can do today that will matter.</p>
          <p><strong>Talk to someone.</strong> LeanOn is not therapy. But it is a real person, available now, who will listen without judgment to whatever you are carrying. For the cost of a session (a fraction of a therapy appointment), you can have a real conversation with someone who has navigated their own difficult experiences. That conversation — the act of saying things out loud to another human being — is not a substitute for therapy, but it is not nothing. It often helps people clarify what they are experiencing well enough to then go to a professional with greater clarity.</p>
          <p><strong>Start the search while you are waiting.</strong> Even if therapy is not accessible right now, begin orienting toward it. Research what is available in your city or online. Look at government hospital options. Ask your company HR if there is an Employee Assistance Program (many larger companies offer a few free therapy sessions through EAPs). Check whether any university clinics in your area offer low-cost therapy.</p>
          <p><strong>Say it out loud somewhere.</strong> The isolation of carrying this alone is its own weight. Whether through LeanOn, a trusted friend, or a family member who can hold it carefully — saying what you are going through to another person matters. You do not have to carry this entirely inside.</p>
        </div>

        <div className="section">
          <h2>How to Find Affordable Therapy in India (Actual Resources)</h2>
          <div className="resource-list">
            <div className="resource-item">
              <h3>Government Hospital OPDs</h3>
              <p>District hospitals, medical college psychiatry departments, and NIMHANS (Bangalore) offer free or very low-cost consultation. Quality varies, but for medication management and initial assessment, these are genuine options. Expect waiting and paperwork.</p>
            </div>
            <div className="resource-item">
              <h3>NIMHANS (080-46110007)</h3>
              <p>National Institute of Mental Health and Neuro Sciences in Bangalore — a government institution offering subsidized care. Also runs the 24/7 helpline for crisis support.</p>
            </div>
            <div className="resource-item">
              <h3>Tele-MANAS (14416)</h3>
              <p>Government of India&apos;s national tele-mental health programme. Free, 24/7, available in multiple Indian languages. Counsellors and psychologists on the line. Not crisis-only — available for general mental health support.</p>
            </div>
            <div className="resource-item">
              <h3>Sangath</h3>
              <p>An NGO based in Goa with community mental health programmes and some online services. Known for low-cost, accessible care. Worth contacting if other options are not working.</p>
            </div>
            <div className="resource-item">
              <h3>Online Platforms (iCall, YourDOST, Wysa)</h3>
              <p>Some online platforms offer lower-cost sessions with qualified counsellors, starting from ₹500–₹1,000 per session. Quality varies significantly by individual counsellor — look for qualifications and read reviews carefully.</p>
            </div>
            <div className="resource-item">
              <h3>Employer EAP (Employee Assistance Programmes)</h3>
              <p>Many larger Indian employers (especially in IT, finance, and multinationals) offer free confidential counselling sessions through EAP providers. Check with HR — you may have 3–6 free sessions you do not know about.</p>
            </div>
          </div>
        </div>

        <div className="section">
          <h2>LeanOn Is Not Therapy. Here Is What It Is.</h2>
          <p>This page would not be honest if it told you LeanOn is a substitute for professional care. It is not. If you have been carrying things for years — numbness since your teenage years, the effects of a difficult childhood, a depression that is affecting your ability to function — you need, and deserve, a trained professional. A therapist or psychologist who can work with you over time, who has the clinical tools to help you process what you are carrying at a structural level.</p>
          <p>But here is what LeanOn is:</p>
          <ul>
            <li>A real person, available now, who has navigated their own hard experiences and is trained to listen without judgment</li>
            <li>A space to say things out loud that you have never said — to have them witnessed by another human being without being dismissed, fixed, or alarmed</li>
            <li>A way to feel less alone in what you are carrying while you work toward professional support</li>
            <li>A conversation that often helps people clarify what they are experiencing, and what they want to say when they get to a therapist</li>
            <li>Available at any hour, from anywhere, anonymously, for the cost of less than a coffee at a nice cafe</li>
          </ul>
          <p>The woman who came to LeanOn saying &quot;that&apos;s why I need professional help&quot; — who paid ₹310 for a 15-minute session at 5pm on a Tuesday — knew exactly what she was doing. She knew LeanOn was not therapy. She came anyway because the professional help was not available to her right then, and the weight was real right then, and a real conversation with a real person was better than nothing.</p>
          <p>Better than nothing is underselling it. Being heard — by a person, not an algorithm, in real time, without judgment — does something. It does not do everything. But it does something real. And for many people, that something is where the movement toward getting the bigger help begins.</p>
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
          <h2>While you work toward the bigger picture — you don&apos;t have to carry this alone right now</h2>
          <p>Anonymous. Real person. Available now. Not therapy — but real support while you navigate toward it.</p>
          <a href="/browse" className="btn-cta">Talk to someone →</a>
        </div>

        <div className="section">
          <h2>You Might Also Find This Helpful</h2>
          <div className="related">
            <a href="/support/emotional-numbness">Emotional numbness →</a>
            <a href="/support/dont-want-to-get-out-of-bed">Morning heaviness →</a>
            <a href="/support/childhood-trauma-india">Childhood trauma →</a>
            <a href="/i-need-someone-to-talk-to">Need someone to talk to →</a>
            <a href="/support/loneliness">Loneliness →</a>
            <a href="/browse">Browse listeners →</a>
          </div>
        </div>
      </div>
    </>
  )
}
