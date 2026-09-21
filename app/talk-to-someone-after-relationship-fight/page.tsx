import type { Metadata } from 'next'
import ReadyToTalkLanding, { type ReadyToTalkLandingData } from '@/app/components/ReadyToTalkLanding'

const data: ReadyToTalkLandingData = {
  "canonical": "/talk-to-someone-after-relationship-fight",
  "title": "Talk to Someone After a Relationship Fight | LeanOn",
  "description": "Had a fight with your partner and need someone to talk to? LeanOn offers private one-to-one peer support for relationship stress, breakups and difficult conversations.",
  "keywords": [
    "talk to someone after relationship fight",
    "Talk to Someone After a Relationship Fight",
    "peer support",
    "someone to talk to",
    "talk to a real person online"
  ],
  "eyebrow": "Human conversation · Ready to talk",
  "h1": "Had a relationship fight and need someone to talk to?",
  "intro": "After an argument, it can be hard to know whether you want advice, distance, reassurance or simply a place to say what happened. LeanOn gives you a private conversation with a real peer listener.",
  "problemTitle": "Right after a fight, you may not want another opinion",
  "problem": [
    "You may be angry, hurt, confused, guilty or exhausted. Calling a friend can help, but sometimes you do not want someone in your social circle taking sides or remembering every detail later.",
    "A peer conversation can give you space to put the whole story into words before deciding what you want to do next. LeanOn is for that conversation — not for deciding who was right."
  ],
  "humanTitle": "Why talking to another person can help",
  "human": [
    "Space without taking sides — A peer listener can hear the situation without being part of your relationship.",
    "Say the unedited version — You can talk through what happened before deciding what you want to tell your partner or friends.",
    "Perspective, not verdicts — The point is to listen and help you reflect, not declare a winner.",
    "Someone outside the relationship — A listener is not your partner, family member or mutual friend."
  ],
  "whyTitle": "Why LeanOn fits this moment",
  "why": [
    "LeanOn is built around one-to-one peer support. It is not positioned as therapy, counselling or an AI companion.",
    "You choose a listener rather than receiving a generic response. The goal is a human conversation where you can talk, vent, reflect or simply not feel alone for a while.",
    "You can start without committing to a long programme: one free 5-minute introduction is available with each new listener, followed by paid time only if you choose to continue."
  ],
  "fitTitle": "You might want a conversation when…",
  "fit": [
    "You keep replaying the argument and need to say it out loud.",
    "You are tempted to text your partner immediately and want a pause first.",
    "You do not want friends or family to take sides.",
    "You are unsure whether you are angry, hurt or overwhelmed.",
    "You want to talk after a breakup or difficult relationship conversation.",
    "You need to vent without being pushed toward a decision."
  ],
  "faq": [
    {
      "q": "Can I talk about my relationship on LeanOn?",
      "a": "Yes. Relationship stress, arguments, breakups and difficult conversations are within everyday peer support."
    },
    {
      "q": "Will the listener tell me whether I should leave?",
      "a": "Peer support is not a decision-maker. You can use the conversation to talk through what happened and what you are feeling."
    },
    {
      "q": "What if there is abuse or I feel unsafe?",
      "a": "If you are in immediate danger, contact local emergency services or an appropriate specialist support service. Peer support should not be your only source of help in a safety situation."
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
