import type { Metadata } from 'next'
import ReadyToTalkLanding, { type ReadyToTalkLandingData } from '@/app/components/ReadyToTalkLanding'

const data: ReadyToTalkLandingData = {
  "canonical": "/indian-emotional-support-abroad",
  "title": "Indian Emotional Support Abroad | Talk to Someone Who Gets It | LeanOn",
  "description": "Indian or South Asian living abroad and need someone to talk to? LeanOn offers private peer support by text or voice, with a free 5-minute introduction.",
  "keywords": [
    "indian emotional support abroad",
    "Indian Emotional Support Abroad",
    "peer support",
    "someone to talk to",
    "talk to a real person online"
  ],
  "eyebrow": "Indian diaspora · NRI emotional support",
  "h1": "Living abroad and need someone who understands the Indian context?",
  "intro": "You can build a good life abroad and still miss having someone who understands the family expectations, relationships, language, humour and history you came from. LeanOn gives Indians and South Asians abroad a private place to talk to a real peer listener.",
  "problemTitle": "Distance changes who you can call",
  "problem": [
    "When you live away from India, some conversations become harder. You may not want to worry your parents, involve friends in a relationship problem, or explain cultural context to someone who has never lived it.",
    "Peer support cannot replace family, friends or professional care. It can provide another human conversation when you want someone outside your immediate circle."
  ],
  "humanTitle": "Why cultural context can matter",
  "human": [
    "Shared context — A listener with relevant Indian or South Asian experience may understand family dynamics or cultural references without a long explanation.",
    "Distance — You can talk about homesickness and family back home without needing to turn a difficult moment into a call to relatives.",
    "Private space — You choose what to share and whether text or voice feels more comfortable.",
    "Everyday support — The topic can be work, dating, marriage, immigration stress, loneliness or simply missing home."
  ],
  "whyTitle": "Why LeanOn fits this moment",
  "why": [
    "LeanOn is built around one-to-one peer support. It is not positioned as therapy, counselling or an AI companion.",
    "You choose a listener rather than receiving a generic response. The goal is a human conversation where you can talk, vent, reflect or simply not feel alone for a while.",
    "You can start without committing to a long programme: one free 5-minute introduction is available with each new listener, followed by paid time only if you choose to continue."
  ],
  "fitTitle": "Indians abroad may look for a conversation about…",
  "fit": [
    "Homesickness and missing parents or siblings.",
    "Marriage, dating or family expectations across countries.",
    "Work, study, relocation or immigration uncertainty.",
    "Feeling culturally isolated even when daily life looks busy.",
    "A breakup or relationship problem you do not want to discuss with family.",
    "The ordinary emotional weight of living far from home."
  ],
  "faq": [
    {
      "q": "Can Indians outside India use LeanOn?",
      "a": "Yes. LeanOn has a dedicated Indian diaspora support experience for Indians and South Asians living abroad."
    },
    {
      "q": "Can I talk about homesickness?",
      "a": "Yes. Homesickness, family distance and cultural adjustment are appropriate peer-support topics."
    },
    {
      "q": "Can I try LeanOn before paying?",
      "a": "Yes. New seekers get one free 5-minute introductory session with each new listener."
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
