import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'AI Companion Alternative — Talk to a Real Person | LeanOn',
  description: 'Looking for an AI companion alternative or a real person instead of a chatbot? Compare AI conversations with human peer support, empathy and active listening on LeanOn.',
  keywords: ['AI companion alternative', 'AI companion alternative for loneliness', 'real person instead of chatbot', 'talk to a human instead of AI', 'ChatGPT alternative for loneliness', 'human emotional support', 'real person to talk to online', 'peer support'],
  alternates: { canonical: 'https://www.leanon.app/ai-companion-alternative' },
  openGraph: {
    title: 'AI Companion Alternative — Talk to a Real Person | LeanOn',
    description: 'If you have tried an AI chatbot and realised you want human connection, LeanOn offers one-to-one peer support with real listeners.',
    url: 'https://www.leanon.app/ai-companion-alternative',
    siteName: 'LeanOn',
    type: 'website',
  },
}

const faq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is an AI companion alternative?', acceptedAnswer: { '@type': 'Answer', text: 'An AI companion alternative can mean a service where you talk with another human rather than software. LeanOn is a peer-support platform where people can have one-to-one conversations with real peer listeners.' } },
    { '@type': 'Question', name: 'Can I talk to a human instead of ChatGPT?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. LeanOn lets you browse peer listeners and start a one-to-one conversation by text or voice, subject to current listener availability and the platform rules.' } },
    { '@type': 'Question', name: 'Is LeanOn therapy?', acceptedAnswer: { '@type': 'Answer', text: 'No. LeanOn provides peer support and human connection, not therapy, counselling, diagnosis or clinical treatment. Peer listeners are trained to listen and support within those boundaries.' } },
    { '@type': 'Question', name: 'Why would someone want a real person instead of an AI chatbot?', acceptedAnswer: { '@type': 'Answer', text: 'Some people want human presence, lived experience, empathy, a natural voice conversation or the feeling of being heard by another person. Those are different goals from getting an information or text-generation response.' } },
    { '@type': 'Question', name: 'Can AI and human support be used together?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. People can use AI for information or reflection and seek human support when they want a conversation with another person. The two formats serve different purposes.' } },
  ],
}

const comparison = [
  ['Who is responding?', 'Software generates a response', 'A real peer listener responds'],
  ['Core experience', 'Information, reflection or conversation with AI', 'Human presence, empathy and lived experience'],
  ['Format', 'Primarily digital text or AI voice', 'Text or voice with another person'],
  ['Best fit', 'Questions, brainstorming, reflection and many everyday tasks', 'Being heard, sharing experiences and human connection'],
  ['Clinical care?', 'Not a substitute for professional care', 'Not a substitute for professional care'],
]

export default function AICompanionAlternativePage() {
  return <main style={s.page}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    <nav style={s.nav}><a href="/" style={s.logo}>LeanOn</a><a href="/browse" style={s.navCta}>Talk to a real person</a></nav>
    <div style={s.wrap}>
      <p style={s.kicker}>AI COMPANION ALTERNATIVE · HUMAN CONNECTION</p>
      <h1 style={s.h1}>Looking for a real person instead of a chatbot?</h1>
      <p style={s.lead}>AI can be useful. But sometimes the thing you were looking for was not another generated response. It was another human being — someone who can listen, bring lived experience and share a real conversation with you.</p>

      <section style={s.heroBox}><strong>LeanOn is a human alternative to an AI-only conversation.</strong><span>Browse peer listeners and start a private one-to-one text or voice conversation when someone is available.</span></section>

      <Section title="Why people look for an AI companion alternative">
        <p>People may start talking to an AI because it is available, easy to access and does not create the social pressure of talking to someone they know. That can be useful. But a person looking for companionship or emotional support may eventually want something different: a human voice, another person's lived experience, reciprocal conversation or simply the feeling that somebody is genuinely listening.</p>
        <p>There is no single correct format. The useful question is what you need from the conversation.</p>
      </Section>

      <Section title="AI conversation vs human peer support">
        <div style={{overflowX:'auto'}}><table style={s.table}><thead><tr><th style={s.th}>Dimension</th><th style={s.th}>AI conversation</th><th style={s.th}>Human peer support</th></tr></thead><tbody>{comparison.map(row => <tr key={row[0]}>{row.map((x,i)=><td key={i} style={s.td}>{x}</td>)}</tr>)}</tbody></table></div>
      </Section>

      <Section title="What human peer support adds">
        <div style={s.grid}>
          <Box title="Presence" text="A real person is participating in the conversation rather than generating text as software." />
          <Box title="Empathy" text="A listener can pay attention to the emotional meaning behind what you say and respond to your actual conversation." />
          <Box title="Lived experience" text="Peer listeners can understand a challenge from personal experience rather than only from information about it." />
          <Box title="Active listening" text="The conversation can focus on listening, reflection and understanding rather than producing an answer to a prompt." />
        </div>
        <p style={{marginTop:20}}><a href="/human-connection" style={s.link}>Learn more about human connection →</a></p>
      </Section>

      <Section title="ChatGPT alternative for loneliness: what is actually different?"><p>If you searched for a “ChatGPT alternative for loneliness,” you may not really be looking for a different chatbot. You may be looking for a person. Loneliness is partly about the absence of connection, so changing one AI interface for another may not address the thing you wanted in the first place.</p><p>LeanOn approaches that search intent differently: connect with another human through peer support. You can talk about loneliness, relationships, breakup recovery, burnout, grief, overthinking, student pressure, marriage loneliness or simply whatever is weighing on you.</p></Section>

      <Section title="Talk to a human instead of AI — when it may fit">
        <ul style={s.ul}>
          <li>You want to hear a real person's voice rather than a generated voice.</li>
          <li>You want someone who has personally experienced something similar.</li>
          <li>You want to say something messy without turning it into a question that needs an answer.</li>
          <li>You want empathy and active listening rather than advice.</li>
          <li>You feel lonely and specifically want human connection.</li>
          <li>You have already used AI for reflection and now want to talk to a person.</li>
        </ul>
      </Section>

      <Section title="What LeanOn is — and is not">
        <p>LeanOn is a peer-support platform for one-to-one conversations with real listeners. It is not an AI chatbot, therapist, psychiatrist, counsellor or crisis service. Peer support is not a replacement for professional mental-health care when clinical care is needed.</p>
        <p>The aim is straightforward: give people another place to talk when they want human connection, empathy and someone who will listen.</p>
      </Section>

      <section style={s.cta}><h2 style={s.ctaH2}>Want a human conversation?</h2><p style={s.ctaP}>Browse peer listeners and choose someone whose experience feels relevant to you.</p><a href="/browse" style={s.button}>Find a real person →</a></section>

      <Section title="More ways to explore LeanOn"><div style={s.links}>{[['/ai-human-support','Talk to a human instead of AI'],['/peer-support','Peer support'],['/empathy','Empathy'],['/active-listening','Active listening'],['/support/loneliness','Loneliness support'],['/support/emotional-support','Emotional support'],['/peer-support-vs-counselling','Peer support vs counselling'],['/talk-to-someone-right-now','Talk to someone right now']].map(([href,label])=><a key={href} href={href} style={s.linkCard}>{label} →</a>)}</div></Section>
    </div>
  </main>
}

function Section({title,children}:{title:string;children:React.ReactNode}){return <section style={s.section}><h2 style={s.h2}>{title}</h2>{children}</section>}
function Box({title,text}:{title:string;text:string}){return <div style={s.box}><h3 style={s.h3}>{title}</h3><p style={s.boxText}>{text}</p></div>}

const s: Record<string, React.CSSProperties> = {
  page:{minHeight:'100vh',background:'#F7FCFE',color:'#0F4867',fontFamily:'Arial, sans-serif'},nav:{height:72,display:'flex',alignItems:'center',justifyContent:'space-between',padding:'0 24px',maxWidth:980,margin:'0 auto'},logo:{fontWeight:900,fontSize:26,color:'#0F4867',textDecoration:'none'},navCta:{background:'#1A8FA0',color:'#fff',padding:'10px 18px',borderRadius:24,fontWeight:700,textDecoration:'none'},wrap:{maxWidth:820,margin:'0 auto',padding:'56px 24px 100px'},kicker:{color:'#1A8FA0',fontSize:12,fontWeight:800,letterSpacing:1.5},h1:{fontSize:'clamp(34px,6vw,56px)',lineHeight:1.08,margin:'14px 0 22px',fontWeight:900},lead:{fontSize:19,lineHeight:1.75,color:'#456979',maxWidth:720},heroBox:{display:'flex',flexDirection:'column',gap:8,background:'#EAF7FA',border:'1px solid #BFE4EC',borderRadius:20,padding:24,marginTop:26,fontSize:16,lineHeight:1.6},section:{background:'#fff',border:'1px solid #D5EEF6',borderRadius:22,padding:32,marginTop:24},h2:{fontSize:27,margin:'0 0 14px',fontWeight:850},h3:{fontSize:19,margin:'0 0 8px'},grid:{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))',gap:14},box:{background:'#F2FAFC',border:'1px solid #D5EEF6',borderRadius:16,padding:20},boxText:{color:'#456979',lineHeight:1.65,margin:0},table:{width:'100%',borderCollapse:'collapse',minWidth:650},th:{textAlign:'left',padding:12,background:'#EAF7FA',borderBottom:'1px solid #D5EEF6',fontSize:14},td:{padding:12,borderBottom:'1px solid #E7F1F4',color:'#456979',lineHeight:1.55,verticalAlign:'top',fontSize:14},ul:{color:'#456979',lineHeight:1.9,paddingLeft:22},link:{color:'#1A8FA0',fontWeight:800,textDecoration:'none'},cta:{background:'#0F4867',color:'#fff',borderRadius:22,padding:34,marginTop:24,textAlign:'center'},ctaH2:{margin:'0 0 10px',fontSize:28},ctaP:{color:'#D5EEF6',lineHeight:1.7,maxWidth:600,margin:'0 auto 22px'},button:{display:'inline-block',background:'#FF9933',color:'#fff',padding:'13px 22px',borderRadius:26,fontWeight:800,textDecoration:'none'},links:{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(190px,1fr))',gap:10},linkCard:{background:'#F2FAFC',borderRadius:13,padding:14,color:'#0F4867',fontWeight:700,textDecoration:'none'}
}
