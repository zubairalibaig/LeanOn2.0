import type { Metadata } from 'next'
import ReadyToTalkLanding, { type ReadyToTalkLandingData } from '@/app/components/ReadyToTalkLanding'

const data: ReadyToTalkLandingData = {
  "canonical": "/talk-to-a-real-person-online",
  "title": "Talk to a Real Person Online | Private Peer Support | LeanOn",
  "description": "Want to talk to a real person online? LeanOn connects you with human peer listeners for private one-to-one conversations by text or voice. Start with a free 5-minute introduction.",
  "keywords": [
    "talk to a real person online",
    "Talk to a Real Person Online",
    "peer support",
    "someone to talk to",
    "talk to a real person online"
  ],
  "eyebrow": "Human conversation · Ready to talk",
  "h1": "Talk to a real person online — not another bot.",
  "intro": "Sometimes the thing you are looking for is not another answer. It is another person. LeanOn lets you browse real peer listeners and start a private one-to-one conversation by text or voice.",
  "problemTitle": "When what you need is a person, not more information",
  "problem": [
    "You may know what the advice says and still want to talk. You may have friends but not want to burden them, or family but not want to explain everything. You may simply want a neutral human being to listen for a while.",
    "That is a different need from searching for information or asking an AI assistant a question. You are looking for human conversation, not a perfect answer."
  ],
  "humanTitle": "What a human conversation can offer",
  "human": [
    "A person on the other side — You are speaking with another human being, not generating a response from software.",
    "Room to talk — You can explain the situation in your own words and decide what you want to discuss.",
    "Lived experience — Listener profiles describe the experiences and topics they can support with, so you can look for relevant context.",
    "A private conversation — Choose text or voice and share only what you are comfortable sharing."
  ],
  "whyTitle": "Why LeanOn fits this moment",
  "why": [
    "LeanOn is built around one-to-one peer support. It is not positioned as therapy, counselling or an AI companion.",
    "You choose a listener rather than receiving a generic response. The goal is a human conversation where you can talk, vent, reflect or simply not feel alone for a while.",
    "You can start without committing to a long programme: one free 5-minute introduction is available with each new listener, followed by paid time only if you choose to continue."
  ],
  "fitTitle": "You may be looking for a conversation when…",
  "fit": [
    "You want to say something you would rather not say to people you know.",
    "You have been using AI for information but still want human conversation.",
    "You need to vent without turning the conversation into a debate or advice session.",
    "You are dealing with loneliness, relationship stress, work pressure, grief or a difficult week.",
    "You want a private conversation but do not need clinical treatment.",
    "You simply want someone to listen."
  ],
  "faq": [
    {
      "q": "Is LeanOn therapy?",
      "a": "No. LeanOn is peer support and human connection. It is not a substitute for qualified mental-health professionals or clinical treatment."
    },
    {
      "q": "Can I talk by text instead of voice?",
      "a": "Yes. LeanOn supports one-to-one text or voice conversations, depending on what is available with the listener you choose."
    },
    {
      "q": "How much does it cost?",
      "a": "New seekers can start with one free 5-minute introductory session with each new listener. Paid sessions currently start at ₹160 for 15 minutes, with the applicable price shown before you continue."
    },
    {
      "q": "Do I have to explain everything before starting?",
      "a": "No. You can start simply. You decide what to share and how much context to give."
    },
    {
      "q": "How do I start?",
      "a": "Open Browse, review listener profiles and choose someone who feels relevant. Start with the free 5-minute introduction."
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
