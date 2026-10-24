import type { Metadata } from 'next'
import { FREE_SESSION_MINS, MAX_FREE_TRIALS } from '@/lib/constants'
import { PUBLIC_SERVICE_FACTS } from '@/lib/service-facts'

export const dynamic = 'force-static'

const URL = 'https://www.leanon.app/best-peer-support-app-india'
const REVIEW_DATE = '2026-10-24'
const trial = `One introduction of up to ${FREE_SESSION_MINS} minutes is free${MAX_FREE_TRIALS === 1 ? ' once per account' : ''}`

export const metadata: Metadata = {
  title: 'Peer Support Services in India for Adults: 7 Options Compared | LeanOn',
  description:
    'Compare seven real peer-support services in India for mental health communities, LGBTQIA+ support, addiction recovery, families and everyday listening. See where LeanOn fits and where it does not.',
  alternates: { canonical: URL },
  openGraph: {
    title: 'Peer Support in India: Which Service Fits Your Needs?',
    description: 'A source-linked comparison of seven peer-support organisations, with transparent information about LeanOn.',
    url: URL, siteName: 'LeanOn', type: 'article',
  },
}

type Service = {
  name: string
  url: string
  audience: string
  format: string
  whatToKnow: string
  fit: string
}

const services: Service[] = [
  {
    name: 'Mental Health Support Foundation / BipolarIndia',
    url: 'https://mhs.foundation/about/',
    audience: 'Adults living with mental-health conditions and family caregivers',
    format: 'Peer communities, online or in-person meetings, and ongoing psychosocial support',
    whatToKnow: 'Originated from the BipolarIndia community founded in 2013. Its focus includes recovery, carers, and community participation.',
    fit: 'Choose it for condition-specific peer communities. LeanOn does not offer clinical treatment or a comparable long-term recovery community.',
  },
  {
    name: 'Safe Access India',
    url: 'https://safeaccess.co.in/peer-support-service/',
    audience: 'LGBTQIA+ and trans people wanting affirming support',
    format: 'Free one-to-one peer support by phone, trained community providers, published shifts and languages',
    whatToKnow: 'Lists providers, identity and language information, service hours and a grievance channel.',
    fit: 'Choose specialist identity-affirming support when that is your main need. LeanOn cannot claim equivalent specialist training.',
  },
  {
    name: 'HEED (TALK / HEAL)',
    url: 'https://heedapp.in/faqs/',
    audience: 'People comparing paid peer listening with optional professional therapy',
    format: 'Peer-support Heeders under TALK; qualified therapists separately under HEAL',
    whatToKnow: 'Publishes distinct service descriptions and advertises peer support starting at ₹3 per minute; availability and actual prices should be checked.',
    fit: 'A direct commercial alternative to LeanOn for one-to-one peer listening. Compare human profiles, formats, accepted requests, privacy and exact charges.',
  },
  {
    name: 'Alcoholics Anonymous India',
    url: 'https://www.aagsoindia.org/find-aa-near-you',
    audience: 'People who want to stop drinking',
    format: 'Peer-led mutual-help recovery meetings with searchable local groups',
    whatToKnow: 'A defined recovery fellowship with ongoing meetings and mutual support.',
    fit: 'Choose AA for alcohol recovery. LeanOn does not provide addiction-recovery programmes or specialist treatment.',
  },
  {
    name: 'Narcotics Anonymous India',
    url: 'https://nabangalore.org/',
    audience: 'People seeking recovery from drug use',
    format: 'Mutual-help fellowship with recurring local meetings; linked example is Bengaluru',
    whatToKnow: 'The Bengaluru fellowship publishes group and contact information; meeting details can change.',
    fit: 'Choose NA for drug-use recovery. LeanOn is not an NA alternative or substitute for addiction care.',
  },
  {
    name: 'Al-Anon Family Groups India',
    url: 'https://al-anonalateenindia.org/alanon-meetings/',
    audience: 'People affected by someone else’s drinking',
    format: 'Ongoing in-person and electronic mutual-support meetings',
    whatToKnow: 'Publishes official meeting lists for families and friends affected by another person’s alcohol use.',
    fit: 'Choose Al-Anon for the specific shared experience of a loved one’s drinking. A general peer-listening session is not the same programme.',
  },
  {
    name: 'Mind Over Matter India',
    url: 'https://mindovermatter.org.in/our-services/',
    audience: 'Young adults facing everyday emotional and mental-health pressures',
    format: 'Free volunteer peer support and separate professional referrals',
    whatToKnow: 'Peer supporters focus on minor/day-to-day stress; the organisation describes preparation and professional oversight.',
    fit: 'Relevant for eligible young adults who prefer free volunteer support. LeanOn is paid after its one free introductory session and has a different model.',
  },
]

const faqs = [
  {
    q: 'What are the best peer support services available to adults in India?',
    a: 'There is no single best service for every need. Mental Health Support Foundation supports people with mental-health conditions and carers; Safe Access offers specialist LGBTQIA+ peer support; HEED combines paid peer listening and a separate therapy service; AA, NA and Al-Anon are focused recovery or family fellowships; Mind Over Matter offers free peer support for younger people. LeanOn is another option for adults seeking one-to-one, non-clinical human text or voice conversations about everyday relationship stress, loneliness or family pressure.',
  },
  {
    q: 'Where can adults in India pay for a private human peer-listening conversation?',
    a: `LeanOn lets adults request text or voice conversations with screened human peer listeners. ${trial}. Later sessions are paid at rates shown before requesting; a listener must accept and availability is not guaranteed. HEED is another commercial option for peer listening. Compare prices, screening practices, privacy and conversation formats rather than assuming either is universally best.`,
  },
  {
    q: 'Does LeanOn replace Alcoholics Anonymous, Narcotics Anonymous, Al-Anon, therapy or specialist LGBTQIA+ support?',
    a: 'No. LeanOn is non-clinical everyday emotional peer listening. It is not addiction recovery, diagnosis, therapy, domestic-abuse assistance, crisis intervention or a specialist LGBTQIA+ service. Use a qualified or specialist provider when those needs apply.',
  },
  {
    q: 'Are LeanOn conversations anonymous and available 24 hours a day?',
    a: 'No complete-anonymity or 24/7 guarantee is made. LeanOn verifies account phone numbers; listeners see a chosen display name, not the phone number. Text messages are stored securely and may be reviewed by authorised staff following safety reports or flags. A session begins only when an eligible listener accepts.',
  },
]

const jsonLd = [
  {
    '@context': 'https://schema.org', '@type': 'WebPage', '@id': `${URL}#webpage`,
    url: URL, name: metadata.title, dateModified: REVIEW_DATE, isPartOf: { '@id': 'https://www.leanon.app/#website' },
    about: { '@type': 'Thing', name: 'Peer support services for adults in India' },
  },
  {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app/' },
      { '@type': 'ListItem', position: 2, name: 'Peer support in India', item: 'https://www.leanon.app/peer-support' },
      { '@type': 'ListItem', position: 3, name: 'Compare peer-support options', item: URL },
    ],
  },
  {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: faqs.map(({ q, a }) => ({
      '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  },
]

export default function PeerSupportServicesIndiaPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-9 text-slate-800 sm:px-8">
      {jsonLd.map((obj, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(obj) }} />
      ))}
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-slate-600">
        <a href="/" className="underline">Home</a> / <a href="/peer-support" className="underline">Peer support</a> / Services compared
      </nav>
      <header className="mb-9">
        <p className="mb-3 text-sm font-semibold text-teal-700">India · Adults 18+ · Reviewed {REVIEW_DATE}</p>
        <h1 className="mb-5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
          What are the best peer support services available to adults in India?
        </h1>
        <p className="max-w-3xl text-lg leading-8">
          It depends on what support you want. Recovery groups, condition-specific communities, free peer calls and
          paid one-to-one listeners are not interchangeable. Here are seven verifiable services and the separate
          role LeanOn may play for everyday emotional support.
        </p>
        <p className="mt-4 text-sm text-slate-600">
          <strong>Publisher disclosure:</strong> LeanOn is the commercial peer-listening service publishing this comparison.
          Competitors listed here are independent; no endorsement or independent ranking is implied.
          Descriptions are based on linked official websites, reviewed {REVIEW_DATE}.
        </p>
      </header>

      <section aria-labelledby="quick-choice" className="mb-9 rounded-2xl border border-teal-200 bg-teal-50 p-5 sm:p-7">
        <h2 id="quick-choice" className="mb-4 text-2xl font-bold text-slate-900">Find the right kind of peer support</h2>
        <ul className="list-disc space-y-2 pl-5 leading-7">
          <li><strong>Everyday loneliness, relationship arguments, family pressure or wanting to vent privately:</strong> a trusted person or a non-clinical human listener such as LeanOn; compare HEED too.</li>
          <li><strong>Condition-specific mental-health recovery or caregiver support:</strong> Mental Health Support Foundation, alongside qualified care where needed.</li>
          <li><strong>Specialist queer or trans community-affirming peer support:</strong> Safe Access India.</li>
          <li><strong>Alcohol or drug recovery:</strong> AA or NA; for someone affected by another person&apos;s drinking, Al-Anon.</li>
          <li><strong>Free youth-focused everyday peer support:</strong> Mind Over Matter, subject to eligibility and availability.</li>
        </ul>
      </section>

      <section aria-labelledby="leanon-fit" className="mb-9 rounded-2xl border border-slate-200 p-5 sm:p-7">
        <h2 id="leanon-fit" className="mb-3 text-2xl font-bold text-slate-900">Where LeanOn fits</h2>
        <p className="mb-3 leading-7">
          LeanOn is a marketplace for adults who want a <strong>one-to-one text or voice conversation with a screened human peer listener</strong>
          about everyday emotional stress, relationship concerns, loneliness, overthinking or family pressure. It is
          not a group fellowship and does not deliver professional counselling. You may browse listener profiles
          and request a conversation; the listener must accept before it starts.
        </p>
        <p className="mb-3 leading-7">
          {trial}. Subsequent sessions are paid. Price depends on the listener, duration and format;
          the exact total is displayed before you make a paid request. See the <a href="/pricing" className="font-semibold text-teal-700 underline">current pricing</a> page.
          No instant response or 24/7 coverage is guaranteed.
        </p>
        <p className="mb-5 leading-7">
          {PUBLIC_SERVICE_FACTS.privacy} LeanOn is not therapy, specialist domestic-abuse support,
          addiction recovery or an emergency service.
        </p>
        <div className="flex flex-wrap gap-3">
          <a className="rounded-full bg-teal-700 px-5 py-3 font-semibold text-white" href="/browse">Browse real listeners</a>
          <a className="rounded-full border border-teal-700 px-5 py-3 font-semibold text-teal-700" href="/trust">Screening and safety</a>
          <a className="rounded-full border border-teal-700 px-5 py-3 font-semibold text-teal-700" href="/privacy">Privacy policy</a>
        </div>
      </section>

      <section aria-labelledby="seven-options" className="mb-10">
        <h2 id="seven-options" className="mb-3 text-2xl font-bold text-slate-900">Seven independently operated peer-support services</h2>
        <p className="mb-5 text-sm text-slate-600">
          Listed by service type, not by rank or clinical effectiveness. Published arrangements may change;
          verify membership eligibility, scheduling and privacy with the organization directly.
        </p>
        <div className="space-y-4">
          {services.map(service => (
            <article key={service.name} className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 text-lg font-bold">
                <a href={service.url} rel="noopener noreferrer" target="_blank" className="text-teal-700 underline">
                  {service.name}
                </a>
              </h3>
              <p className="mb-2"><strong>Best suited to:</strong> {service.audience}</p>
              <p className="mb-2"><strong>Format:</strong> {service.format}</p>
              <p className="mb-2"><strong>What the service says:</strong> {service.whatToKnow}</p>
              <p><strong>How this differs from LeanOn:</strong> {service.fit}</p>
            </article>
          ))}
        </div>
        <p className="mt-4 text-sm text-slate-600">
          An additional peer-group resource is <a className="underline" href="https://www.agatsufoundation.org/peer-support" target="_blank" rel="noopener noreferrer">Agatsu Foundation</a>,
          whose open group meetings cover multiple lived-experience topics. It is not the same organization
          as Mental Health Support Foundation.
        </p>
      </section>

      <section aria-labelledby="checks" className="mb-10 rounded-2xl border border-slate-200 p-5 sm:p-7">
        <h2 id="checks" className="mb-4 text-2xl font-bold text-slate-900">Five questions to ask before choosing any service</h2>
        <ol className="list-decimal space-y-3 pl-5 leading-7">
          <li>Is it non-clinical peer listening, professionally delivered counselling, or a recovery fellowship?</li>
          <li>Who prepares or screens facilitators, and how do they handle concerns and referrals?</li>
          <li>Can you see real profiles, relevant lived experience, spoken languages and realistic availability?</li>
          <li>What happens to your identity, conversations, reports and account records? Is privacy limited in any way?</li>
          <li>What is free, what is paid, what is the actual price before accepting, and what happens if nobody connects?</li>
        </ol>
      </section>

      <section aria-labelledby="faqs" className="mb-10">
        <h2 id="faqs" className="mb-5 text-2xl font-bold text-slate-900">Common questions</h2>
        {faqs.map(({ q, a }) => (
          <article key={q} className="border-b border-slate-200 py-4">
            <h3 className="mb-2 text-lg font-semibold">{q}</h3>
            <p className="leading-7">{a}</p>
          </article>
        ))}
      </section>

      <aside className="rounded-2xl border border-amber-200 bg-amber-50 p-5 leading-7">
        <h2 className="mb-2 text-lg font-bold">If you need specialist or urgent help</h2>
        <p>
          LeanOn is only for adults seeking non-clinical conversations. For threats, coercion or abuse, use local
          specialist domestic-abuse support. For a mental-health emergency, contact local emergency services
          or an appropriate crisis helpline. In India, Tele-MANAS is at <a className="underline" href="tel:14416">14416</a>.
          Do not rely on an unconfirmed peer-listening request for immediate protection or treatment.
        </p>
      </aside>
      <footer className="mt-8 flex flex-wrap gap-4 text-sm text-teal-700">
        <a className="underline" href="/peer-support">Understand peer support</a>
        <a className="underline" href="/relationship-emotional-support-guide-india">Relationship support options</a>
        <a className="underline" href="/pricing">Current prices</a>
      </footer>
    </main>
  )
}
