import type { Metadata } from 'next'
import QuickAnswer from '@/app/components/QuickAnswer'
import { FREE_SESSION_MINS } from '@/lib/constants'

export const dynamic = 'force-static'

// For people already living with a mental health condition — in treatment,
// on medication, between therapy sessions, or on a waiting list — who also
// want someone to talk to. LeanOn is ALONGSIDE care, never instead of it:
// listeners never advise on diagnosis or medication. Only Tele-MANAS /
// NIMHANS as crisis numbers (CLAUDE.md).

const URL = 'https://www.leanon.app/peer-support-alongside-therapy'

export const metadata: Metadata = {
  title: 'Someone to Talk To Between Therapy Sessions or While You Wait | LeanOn',
  description: `In therapy, on medication or on a waiting list — and need someone to talk to in between? Talk privately to a real, screened peer listener in India. Alongside your care, never instead of it. First ${FREE_SESSION_MINS} minutes free.`,
  alternates: { canonical: URL },
  robots: { index: true, follow: true },
  openGraph: { title: 'Someone to talk to between therapy sessions', description: 'Peer support alongside professional care — never instead of it.', url: URL, siteName: 'LeanOn', type: 'article' },
}

const QA_Q = 'I am in therapy or on a waiting list — can I talk to someone in between?'
const QA_A = 'Yes. Many people use LeanOn between therapy sessions, late at night when their therapist is not available, or while they wait for a first appointment. You talk privately, by text or voice, with a screened peer listener in India who listens without judging. Keep your doctor or therapist: LeanOn listeners never advise on diagnosis or medication. Your first 5 minutes are free.'

const faqs = [
  { q: 'Can I use LeanOn if I have depression, anxiety or another diagnosis?', a: 'Yes, as long as you keep your professional care. A peer listener can be someone to talk to about your day, your worries or how you are coping. They are not clinicians: they will not diagnose you, change your treatment or tell you what medication to take. Share only what you are comfortable sharing.' },
  { q: 'Can a listener tell me whether to change or stop my medication?', a: 'No — and they will not try. Only your psychiatrist or doctor should decide anything about medication. If something about your treatment worries you, write it down and take it to them.' },
  { q: 'I am on a waiting list for therapy. Is it okay to talk to someone meanwhile?', a: 'Yes. Waiting can be hard, and talking to someone who listens can make it more bearable. If things get worse while you wait — especially thoughts of harming yourself — call Tele-MANAS on 14416 (free, 24/7) or NIMHANS on 080-46110007, and contact the service you are waiting for.' },
  { q: 'Should I tell my therapist I use LeanOn?', a: 'It is up to you, but many therapists welcome knowing what helps you between sessions. You can bring anything that came up in a LeanOn conversation into therapy.' },
  { q: 'What is the difference between a peer listener and my therapist?', a: 'Your therapist is a trained professional who assesses and treats. A peer listener is an ordinary adult with lived experience who listens — no treatment plan, no diagnosis. Peer support can sit alongside therapy, but it does not replace it.' },
  { q: 'Is it private?', a: 'The listener sees only the name you choose, never your phone number. Voice calls are not recorded. Text messages are stored securely and only authorised LeanOn administrators can open them, for example to review a reported or safety-flagged session.' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'WebPage', name: 'Someone to talk to between therapy sessions or while you wait', url: URL, dateModified: '2026-10-16', isPartOf: { '@id': 'https://www.leanon.app/#website' }, about: { '@id': 'https://www.leanon.app/#organization' } },
    { '@type': 'FAQPage', mainEntity: [{ q: QA_Q, a: QA_A }, ...faqs].map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
  ],
}

const S = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
  body{font-family:'Nunito',sans-serif;color:#0F4867;-webkit-font-smoothing:antialiased;
    background:radial-gradient(ellipse 90% 55% at 0% 0%,#C2E4F2 0%,#DAEEF8 22%,#FFFFFF 58%) fixed;}
  a{color:#1A8FA0;font-weight:800;text-decoration:none;}
  .nav{padding:0 20px;height:72px;display:flex;align-items:center;max-width:900px;margin:0 auto;}
  .nav img{height:52px;width:auto;}
  .page{max-width:720px;margin:0 auto;padding:12px 20px 110px;}
  h1{font-size:clamp(26px,6vw,36px);font-weight:900;line-height:1.2;margin-bottom:12px;}
  .lead{font-size:16.5px;color:#5A7A8A;line-height:1.7;font-weight:500;margin-bottom:22px;}
  h2.s{font-size:20px;font-weight:900;margin:30px 0 10px;}
  ul.l{margin:0 0 6px 20px;}
  ul.l li{font-size:15px;color:#3A6070;line-height:1.7;margin-bottom:4px;}
  .q{border-bottom:1.5px solid #D5EEF6;padding:14px 0;}
  .q h3{font-size:16px;font-weight:800;margin-bottom:6px;}
  .q p{font-size:15px;color:#3A6070;line-height:1.7;}
  .fine{font-size:13px;color:#5A7A8A;text-align:center;margin-top:24px;line-height:1.6;}
`

export default function PeerSupportAlongsideTherapyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <style>{S}</style>
      <nav className="nav"><a href="/"><img src="/logo.png" alt="LeanOn" /></a></nav>
      <main className="page">
        <h1>Someone to talk to between therapy sessions — or while you wait</h1>
        <p className="lead">Therapy is once a week at best. Waiting lists are long. The hard moments don&apos;t keep to a schedule. Peer support can help in between — alongside your care, never instead of it.</p>
        <QuickAnswer question={QA_Q} answer={QA_A} />

        <h2 className="s">When people use LeanOn alongside care</h2>
        <ul className="l">
          <li>Late at night or on weekends, when their therapist isn&apos;t available</li>
          <li>While waiting weeks for a first therapy or psychiatry appointment</li>
          <li>When weekly therapy is too expensive and they need someone to talk to in between</li>
          <li>To talk about everyday life — work, family, loneliness — with someone who gets it</li>
        </ul>

        <h2 className="s">What a peer listener will not do</h2>
        <ul className="l">
          <li>Diagnose you, or tell you what you &quot;have&quot;</li>
          <li>Advise on medication — starting, changing or stopping it is for your doctor</li>
          <li>Replace your therapist, psychiatrist or crisis support</li>
        </ul>

        <h2 className="s">Questions</h2>
        {faqs.map(f => (
          <div className="q" key={f.q}><h3>{f.q}</h3><p>{f.a}</p></div>
        ))}

        <p className="fine">More: <a href="/peer-support-vs-therapy">Peer support vs therapy</a> · <a href="/is-leanon-worth-it">Is LeanOn worth it?</a> · <a href="/trust">Trust &amp; safety</a></p>
      </main>
    </>
  )
}
