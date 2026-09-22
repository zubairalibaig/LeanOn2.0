import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Human Companionship Online India — Talk to a Real Person | LeanOn',
  description: 'Looking for human companionship online in India? Talk privately with a real peer listener on LeanOn by text or voice. Start with a free 5-minute introduction; paid sessions start at ₹160 for 15 minutes.',
  alternates: { canonical: 'https://www.leanon.app/human-companionship-online-india' },
  keywords: [
    'human companionship online India', 'human companionship India', 'online companionship India',
    'real human companionship', 'emotional companionship India', 'someone to talk to online India',
    'paid companionship online India', 'talk to a real person India', 'loneliness support India',
    'friendly conversation online India', 'human connection India', 'companion app India',
  ],
  openGraph: {
    title: 'Human Companionship Online India — Talk to a Real Person | LeanOn',
    description: 'Private one-to-one conversations with real human peer listeners. Start free, then continue with paid text or voice time if you want to.',
    url: 'https://www.leanon.app/human-companionship-online-india',
    type: 'website',
  },
}

const faq = [
  ['What is human companionship online?', 'It is a way to have a private conversation or spend time with another person online when you want human connection. LeanOn focuses on one-to-one peer conversations by text or voice.'],
  ['Is LeanOn a companionship app?', 'LeanOn is a peer-support and human-connection platform. It connects people with real peer listeners for private conversations, rather than dating or romantic companionship.'],
  ['How much does LeanOn cost?', 'You can start with one free 5-minute introduction with each new listener. Paid sessions currently start at ₹160 for 15 minutes.'],
  ['Is this therapy?', 'No. LeanOn listeners are not licensed therapists or counsellors. LeanOn provides peer support and human conversation, not diagnosis or clinical treatment.'],
  ['Can I talk about loneliness or relationship problems?', 'Yes. People use peer conversations for loneliness, relationship difficulties, work stress, grief, homesickness, overthinking and other everyday situations where they want someone to listen.'],
]

export default function HumanCompanionshipOnlineIndia() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'WebPage', '@id': 'https://www.leanon.app/human-companionship-online-india#webpage', name: 'Human Companionship Online India — Talk to a Real Person', url: 'https://www.leanon.app/human-companionship-online-india', isPartOf: { '@id': 'https://www.leanon.app/#website' }, about: { '@id': 'https://www.leanon.app/#service' } },
      { '@type': 'FAQPage', mainEntity: faq.map(([q,a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) },
    ],
  }
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <main style={{maxWidth:760,margin:'0 auto',padding:'48px 24px',fontFamily:'Arial,sans-serif',color:'#0F4867',lineHeight:1.7}}>
      <p style={{fontWeight:700,color:'#1A8FA0'}}>HUMAN CONNECTION • INDIA</p>
      <h1 style={{fontSize:'clamp(32px,6vw,52px)',lineHeight:1.1,margin:'12px 0 20px'}}>Human companionship online in India — when you want a real person to talk to</h1>
      <p style={{fontSize:19,color:'#496878'}}>Sometimes you do not need dating, therapy or another AI reply. You simply want another person who will listen and stay in the conversation.</p>
      <p>LeanOn connects you with real human peer listeners for private one-to-one conversations by text or voice. You can talk about loneliness, a difficult relationship, work stress, homesickness, grief, overthinking or whatever is weighing on you.</p>
      <p><strong>Start with one free 5-minute introduction with a new listener.</strong> If the conversation feels useful, paid sessions start at ₹160 for 15 minutes. There is no subscription.</p>
      <p><a href="/browse" style={{display:'inline-block',padding:'14px 24px',background:'#FF9933',color:'#fff',borderRadius:28,fontWeight:800,textDecoration:'none'}}>Browse listeners →</a></p>
      <h2>What LeanOn is — and is not</h2>
      <ul><li><strong>Real person:</strong> you are talking with a human peer listener, not a chatbot.</li><li><strong>Private conversation:</strong> choose text or voice for one-to-one support.</li><li><strong>Peer support:</strong> listeners offer lived-experience-based support and listening.</li><li><strong>Not therapy:</strong> LeanOn does not provide diagnosis, psychotherapy or clinical treatment.</li><li><strong>Not dating:</strong> the service is for human conversation and peer support, not romantic or sexual services.</li></ul>
      <h2>Who might use an online companionship service?</h2>
      <p>You might be looking for someone to talk to after a relationship fight, feeling lonely in a new city, dealing with work or career pressure, missing home while living abroad, or simply wanting a conversation without involving your friends or family.</p>
      <h2>Human companionship vs. AI conversation</h2>
      <p>AI assistants can be useful for information, ideas and reflection. LeanOn is for the different situation where you specifically want another human being in the conversation — someone with their own experiences, reactions and perspective.</p>
      <h2>Frequently asked questions</h2>
      {faq.map(([q,a]) => <section key={q} style={{padding:'18px 0',borderBottom:'1px solid #D5EEF6'}}><h3>{q}</h3><p>{a}</p></section>)}
      <p style={{marginTop:32,fontSize:13,color:'#5A7A8A'}}>LeanOn provides peer support and human connection, not therapy, counselling, diagnosis or clinical treatment. If you are in immediate danger or experiencing a mental-health emergency, contact an appropriate local emergency or crisis service.</p>
    </main>
  </>
}
