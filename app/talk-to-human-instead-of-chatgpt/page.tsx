import type { Metadata } from 'next'
import ReadyToTalkLanding, { type ReadyToTalkLandingData } from '@/app/components/ReadyToTalkLanding'

const data: ReadyToTalkLandingData = {
  "canonical": "/talk-to-human-instead-of-chatgpt",
  "title": "Talk to a Human Instead of ChatGPT | Real Human Support | LeanOn",
  "description": "Been talking to ChatGPT but still want a real person? LeanOn connects you with human peer listeners for private one-to-one conversations by text or voice.",
  "keywords": [
    "talk to human instead of chatgpt",
    "Talk to a Human Instead of ChatGPT",
    "peer support",
    "someone to talk to",
    "talk to a real person online"
  ],
  "eyebrow": "Human conversation · Ready to talk",
  "h1": "Talk to a human instead of ChatGPT.",
  "intro": "ChatGPT and other AI assistants can be useful. But if what you are missing is another human being on the other side of the conversation, LeanOn is built for that different need.",
  "problemTitle": "Sometimes the AI conversation is not the thing you were looking for",
  "problem": [
    "You may have asked an AI for advice, reflected on a problem or simply chatted because you were lonely. The response can be useful and still leave you wanting something else: a human conversation.",
    "That does not make AI useless. It means information, reflection and human connection are different use cases."
  ],
  "humanTitle": "What changes when the other side is a person",
  "human": [
    "Human-to-human conversation — The person responding is a real participant in the conversation, not a generated answer.",
    "Lived experience — Listener profiles can help you find someone with relevant personal experience.",
    "Conversation, not just output — You can talk back and forth, clarify, pause and explain what you mean.",
    "A distinct form of connection — If your goal is to feel less alone with another person, an AI response and a human conversation are different experiences."
  ],
  "whyTitle": "Why LeanOn fits this moment",
  "why": [
    "LeanOn is built around one-to-one peer support. It is not positioned as therapy, counselling or an AI companion.",
    "You choose a listener rather than receiving a generic response. The goal is a human conversation where you can talk, vent, reflect or simply not feel alone for a while.",
    "You can start without committing to a long programme: one free 5-minute introduction is available with each new listener, followed by paid time only if you choose to continue."
  ],
  "fitTitle": "You may be looking for a human when…",
  "fit": [
    "You have already tried ChatGPT and still feel lonely.",
    "You want to say something to a person, not a chatbot.",
    "You want someone with lived experience to listen to your story.",
    "You want a private conversation about a relationship, work problem or difficult day.",
    "You want to talk without searching for the perfect answer.",
    "You simply miss talking to another person."
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
