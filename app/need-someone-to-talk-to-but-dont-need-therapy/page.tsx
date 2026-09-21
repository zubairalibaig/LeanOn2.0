import type { Metadata } from 'next'
import ReadyToTalkLanding, { type ReadyToTalkLandingData } from '@/app/components/ReadyToTalkLanding'

const data: ReadyToTalkLandingData = {
  "canonical": "/need-someone-to-talk-to-but-dont-need-therapy",
  "title": "Need Someone to Talk To but Don't Need Therapy? | LeanOn",
  "description": "Need someone to talk to but do not think you need therapy? Learn how peer support works and start a private human conversation on LeanOn with a free 5-minute introduction.",
  "keywords": [
    "need someone to talk to but dont need therapy",
    "Need Someone to Talk To but Don't Need Therapy?",
    "peer support",
    "someone to talk to",
    "talk to a real person online"
  ],
  "eyebrow": "Human conversation · Ready to talk",
  "h1": "Need someone to talk to — but you don't need therapy?",
  "intro": "You can want human support without wanting clinical care. If what you need is someone to listen, help you process a difficult day or give you space to talk, peer support is a different kind of service.",
  "problemTitle": "Not every hard day is a therapy question",
  "problem": [
    "There are moments when you want to talk through a breakup, family tension, work pressure, loneliness or something that happened today. You may not be looking for assessment, diagnosis or treatment.",
    "That does not mean you have to keep everything to yourself. A trusted friend, family member, community or peer-support service can be appropriate for ordinary human connection."
  ],
  "humanTitle": "Peer support is different from clinical care",
  "human": [
    "No diagnosis — A peer listener does not diagnose a condition or provide clinical treatment.",
    "Lived experience — Peer support centres on listening, mutual understanding and relevant experience rather than clinical assessment.",
    "Conversation first — You can use the session to talk, vent or reflect rather than arrive with a treatment goal.",
    "A different service — LeanOn should not replace professional care when you need assessment or treatment."
  ],
  "whyTitle": "Why LeanOn fits this moment",
  "why": [
    "LeanOn is built around one-to-one peer support. It is not positioned as therapy, counselling or an AI companion.",
    "You choose a listener rather than receiving a generic response. The goal is a human conversation where you can talk, vent, reflect or simply not feel alone for a while.",
    "You can start without committing to a long programme: one free 5-minute introduction is available with each new listener, followed by paid time only if you choose to continue."
  ],
  "fitTitle": "Peer support may be relevant when…",
  "fit": [
    "You want someone to listen to a difficult week.",
    "You are lonely and want human connection.",
    "You want to process relationship or family stress.",
    "You want a private place to vent.",
    "You are unsure what you need and want to talk it through.",
    "You are looking for ordinary emotional support rather than diagnosis or treatment."
  ],
  "faq": [
    {
      "q": "Can I talk to someone instead of going to therapy?",
      "a": "If what you need is ordinary human connection or non-clinical peer support, you can choose peer support. It should not replace professional care when clinical assessment or treatment is needed."
    },
    {
      "q": "Is peer support the same as counselling?",
      "a": "No. Counselling is a professional service; peer support is non-clinical and focuses on listening, lived experience and supportive conversation."
    },
    {
      "q": "Can I try before paying?",
      "a": "Yes. New seekers get one free 5-minute introductory session with each new listener. Paid continuation is optional."
    }
  ],
  "related": [
    {
      "href": "/talk-to-someone-right-now",
      "label": "Someone to talk to right now"
    },
    {
      "href": "/chat-with-real-person",
      "label": "Talk to a real person"
    },
    {
      "href": "/peer-support",
      "label": "What is peer support?"
    },
    {
      "href": "/alternatives-to-therapy-india",
      "label": "Therapy vs peer support"
    }
  ]
}

export const metadata: Metadata = { title: data.title, description: data.description, keywords: data.keywords, alternates: { canonical: 'https://www.leanon.app'+data.canonical }, openGraph: { title: data.title, description: data.description, url: 'https://www.leanon.app'+data.canonical, siteName: 'LeanOn', type: 'website' } }

export default function Page() { return <ReadyToTalkLanding data={data} /> }
