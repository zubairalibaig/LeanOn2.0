import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Peer Support vs Therapy — What Is the Difference? | LeanOn',
  description: 'Peer support vs therapy explained clearly: lived experience, empathy and listening compared with professional counselling and clinical treatment. Learn when each type of support fits.',
  keywords: ['peer support vs therapy', 'peer support and therapy', 'peer support vs psychotherapy', 'peer support vs counselling', 'therapy alternative', 'mental health support', 'emotional support'],
  alternates: { canonical: 'https://www.leanon.app/peer-support-vs-therapy' },
  openGraph: { title: 'Peer Support vs Therapy — What Is the Difference? | LeanOn', description: 'A practical comparison of peer support, counselling and therapy — what each provides, what each does not, and how they can complement one another.', url: 'https://www.leanon.app/peer-support-vs-therapy', siteName: 'LeanOn', type: 'website' },
}

const faq = {
  '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
    { '@type': 'Question', name: 'What is the main difference between peer support and therapy?', acceptedAnswer: { '@type': 'Answer', text: 'Peer support centres on lived experience, empathy, listening and mutual understanding. Therapy is professional care delivered by a qualified practitioner within a therapeutic framework and may involve assessment, formulation and clinical treatment.' } },
    { '@type': 'Question', name: 'Can peer support replace therapy?', acceptedAnswer: { '@type': 'Answer', text: 'No. Peer support is not a replacement for therapy or other professional mental-health care when clinical care is needed. It can be a complementary form of emotional support.' } },
    { '@type': 'Question', name: 'When might peer support be useful?', acceptedAnswer: { '@type': 'Answer', text: 'Peer support can be useful for everyday emotional weight such as loneliness, relationship stress, breakup recovery, work pressure, burnout, grief, homesickness, overthinking and situations where someone mainly wants to be heard by another person.' } },
    { '@type': 'Question', name: 'What does therapy provide that peer support does not?', acceptedAnswer: { '@type': 'Answer', text: 'Therapy provides professional assessment and structured therapeutic work. Depending on the practitioner and setting, it may address clinical symptoms, diagnoses, trauma, persistent functional impairment and other needs that require professional treatment.' } },
  ],
}

const rows = [
  ['Primary purpose', 'Connection, listening, lived experience and emotional support', 'Professional assessment, therapeutic work and clinical care'],
  ['Who provides it', 'A peer with relevant lived experience and support training', 'A qualified mental-health professional'],
  ['Approach', 'Empathy, active listening, reflection and shared experience', 'A therapeutic framework selected by the practitioner'],
  ['Diagnosis or treatment', 'No', 'May include assessment and treatment depending on practitioner and setting'],
  ['Everyday emotional challenges', 'Often a natural fit', 'Can also be appropriate, especially when difficulties are persistent or impairing'],
  ['Crisis or serious clinical symptoms', 'Not sufficient on its own', 'Professional/crisis care should be prioritised'],
]

export default function PeerSupportVsTherapyPage() {
  return <main style={s.page}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faq)}} />
    <nav style={s.nav}><a href="/" style={s.logo}>LeanOn</a><a href="/browse" style={s.navCta}>Find peer support</a></nav>
    <div style={s.wrap}>
      <p style={s.kicker}>PEER SUPPORT · THERAPY · COUNSELLING · MENTAL HEALTH SUPPORT</p>
      <h1 style={s.h1}>Peer support vs therapy: different tools for different needs.</h1>
      <p style={s.lead}>The terms peer support, counselling, therapy and emotional support are often used interchangeably online. They are not the same thing. Understanding the difference helps you find support that matches what you actually need.</p>

      <section style={s.note}><strong>LeanOn provides peer support.</strong><span>LeanOn does not diagnose, prescribe, provide psychotherapy or claim to replace licensed mental-health care.</span></section>

      <Section title="Peer support vs therapy at a glance"><div style={{overflowX:'auto'}}><table style={s.table}><thead><tr><th style={s.th}>Area</th><th style={s.th}>Peer support</th><th style={s.th}>Therapy</th></tr></thead><tbody>{rows.map(r=><tr key={r[0]}>{r.map((x,i)=><td key={i} style={s.td}>{x}</td>)}</tr>)}</tbody></table></div></Section>

      <Section title="What peer support is"><p>Peer support is support from someone who has lived through a comparable experience. The value is not that the peer has every answer. It is that they can understand the experience from the inside and listen without making the conversation clinical.</p><p>Good peer support uses empathy and active listening. A listener may reflect what they hear, ask gentle questions, share relevant experience when appropriate and help someone feel less alone. The goal is connection and support, not diagnosis or treatment.</p><p><a href="/peer-support" style={s.link}>Read the full guide to peer support →</a></p></Section>

      <Section title="What therapy or counselling is"><p>Therapy and counselling are forms of professional care. The exact training, regulation, terminology and scope vary by country and practitioner, so it is important to check the qualifications and type of service being offered.</p><p>Professional care can be appropriate when symptoms are persistent, severe, interfere substantially with daily life, involve trauma or other clinical concerns, or when someone wants structured therapeutic work. A psychiatrist may also be needed when medical assessment or medication is relevant.</p><p><a href="/peer-support-vs-counselling" style={s.link}>Compare peer support and counselling →</a></p></Section>

      <Section title="When peer support may fit"><ul style={s.ul}><li>You are lonely and want another person to talk to.</li><li>You are processing a breakup or relationship stress.</li><li>You are carrying work pressure or burnout and need space to talk.</li><li>You are grieving and want someone who understands loss.</li><li>You are overthinking and want to say the thoughts out loud.</li><li>You are dealing with homesickness, student pressure or a difficult life transition.</li><li>You want emotional support without turning the conversation into a clinical appointment.</li></ul></Section>

      <Section title="When professional care matters more"><ul style={s.ul}><li>Your symptoms are significantly disrupting work, study, relationships or basic self-care.</li><li>You suspect a mental-health condition and want a proper assessment.</li><li>You are experiencing persistent or severe depression, panic, trauma symptoms or other concerning changes.</li><li>You need medication assessment or medical care.</li><li>You are at immediate risk of harming yourself or someone else.</li></ul><p>In these situations, peer support should not be treated as a substitute for professional or emergency care.</p></Section>

      <Section title="Can you use peer support and therapy together?"><p>Yes. They can serve different roles. A therapist can provide structured clinical work, while peer support can provide additional human connection between appointments or during everyday moments when someone wants to talk.</p><p>The important boundary is clarity: peer support should remain peer support, and clinical needs should be taken to appropriately qualified professionals.</p></Section>

      <section style={s.cta}><h2 style={s.ctaH2}>Looking for someone to talk to?</h2><p style={s.ctaP}>If what you need is human connection and a listening ear, browse LeanOn peer listeners.</p><a href="/browse" style={s.button}>Browse peer listeners →</a></section>

      <Section title="Keep exploring"><div style={s.links}>{[['/mental-health-support','Mental health support'],['/peer-support-vs-counselling','Peer support vs counselling'],['/empathy','Empathy'],['/active-listening','Active listening'],['/human-connection','Human connection'],['/support/emotional-support','Emotional support'],['/support/loneliness','Loneliness support'],['/talk-to-someone-right-now','Talk to someone now']].map(([href,label])=><a key={href} href={href} style={s.linkCard}>{label} →</a>)}</div></Section>
    </div>
  </main>
}

function Section({title,children}:{title:string;children:React.ReactNode}){return <section style={s.section}><h2 style={s.h2}>{title}</h2>{children}</section>}
const s:Record<string,React.CSSProperties>={page:{minHeight:'100vh',background:'#F7FCFE',color:'#0F4867',fontFamily:'Arial,sans-serif'},nav:{height:72,display:'flex',alignItems:'center',justifyContent:'space-between',padding:'0 24px',maxWidth:980,margin:'0 auto'},logo:{fontWeight:900,fontSize:26,color:'#0F4867',textDecoration:'none'},navCta:{background:'#1A8FA0',color:'#fff',padding:'10px 18px',borderRadius:24,fontWeight:700,textDecoration:'none'},wrap:{maxWidth:820,margin:'0 auto',padding:'56px 24px 100px'},kicker:{color:'#1A8FA0',fontSize:12,fontWeight:800,letterSpacing:1.3},h1:{fontSize:'clamp(34px,6vw,56px)',lineHeight:1.08,margin:'14px 0 22px',fontWeight:900},lead:{fontSize:19,lineHeight:1.75,color:'#456979',maxWidth:720},note:{display:'flex',flexDirection:'column',gap:7,background:'#EAF7FA',border:'1px solid #BFE4EC',borderRadius:20,padding:24,marginTop:26,lineHeight:1.6},section:{background:'#fff',border:'1px solid #D5EEF6',borderRadius:22,padding:32,marginTop:24},h2:{fontSize:27,margin:'0 0 14px',fontWeight:850},table:{width:'100%',borderCollapse:'collapse',minWidth:700},th:{textAlign:'left',padding:12,background:'#EAF7FA',borderBottom:'1px solid #D5EEF6',fontSize:14},td:{padding:12,borderBottom:'1px solid #E7F1F4',color:'#456979',lineHeight:1.55,verticalAlign:'top',fontSize:14},ul:{color:'#456979',lineHeight:1.9,paddingLeft:22},link:{color:'#1A8FA0',fontWeight:800,textDecoration:'none'},cta:{background:'#0F4867',color:'#fff',borderRadius:22,padding:34,marginTop:24,textAlign:'center'},ctaH2:{margin:'0 0 10px',fontSize:28},ctaP:{color:'#D5EEF6',lineHeight:1.7,maxWidth:600,margin:'0 auto 22px'},button:{display:'inline-block',background:'#FF9933',color:'#fff',padding:'13px 22px',borderRadius:26,fontWeight:800,textDecoration:'none'},links:{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(190px,1fr))',gap:10},linkCard:{background:'#F2FAFC',borderRadius:13,padding:14,color:'#0F4867',fontWeight:700,textDecoration:'none'}}
