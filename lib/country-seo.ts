export type CountrySeoData = {
  slug: string
  country: string
  regionCode: string
  audience: string
  title: string
  description: string
  eyebrow: string
  intro: string
  localAngle: string
  situations: string[]
  howItWorks: string[]
  faqs: Array<{ q: string; a: string }>
  searchTerms: string[]
}

/**
 * Country SEO pages are intentionally aimed at real seeker intent, not listener
 * recruitment. Each market has a distinct audience angle so these are useful
 * landing pages rather than near-duplicate doorway pages.
 */
export const COUNTRY_SEO: CountrySeoData[] = [
  {
    slug: 'india', country: 'India', regionCode: 'IN', audience: 'People in India who want a real person to listen',
    title: 'Peer Support in India — Talk to a Real Person | LeanOn',
    description: 'Need someone to talk to in India? LeanOn connects you with real peer listeners for private, one-to-one conversations about loneliness, relationships, work stress, grief and everyday life.',
    eyebrow: 'Peer support · India',
    intro: 'Sometimes you do not need advice, a diagnosis, or a long appointment. You just need another person who will listen properly. LeanOn connects people in India with real peer listeners for one-to-one conversations by text or voice.',
    localAngle: 'LeanOn is built around the realities of life in India: family expectations, work pressure, relationships, exam stress, loneliness inside busy cities, and the need for a private place to talk. You choose a listener whose lived experience feels relevant to you.',
    situations: ['Feeling lonely even when people are around', 'Relationship or marriage stress you do not want to discuss with family', 'Work, startup or career pressure', 'Student and competitive-exam stress', 'Breakups, grief or a difficult life transition', 'Simply needing to vent to someone who will listen'],
    howItWorks: ['Browse available peer listeners and read their lived-experience profiles.', 'Start your first 5-minute session free so you can see whether the connection feels right.', 'Continue with a paid session only if you want to. Sessions are time-based and the listener rate is shown before you start.', 'Use text when privacy matters or voice when you want the warmth of a real conversation.'],
    faqs: [
      { q: 'What is LeanOn in India?', a: 'LeanOn is a peer-support platform where people can talk one-to-one with real human listeners. It is for everyday emotional support and human connection, not therapy or clinical care.' },
      { q: 'Is the first session free?', a: 'New seekers get one free 5-minute introductory session. It is designed to help you find out whether a listener feels like the right fit.' },
      { q: 'What can I talk about?', a: 'Anything within the scope of peer support: loneliness, relationships, work stress, grief, family pressure, overthinking, or simply needing someone to hear you out.' },
    ],
    searchTerms: ['peer support India', 'someone to talk to India', 'talk to someone online India', 'emotional support India', 'real person to talk to India'],
  },
  {
    slug: 'usa', country: 'United States', regionCode: 'US', audience: 'Indian and South Asian people living in the United States',
    title: 'Peer Support for Indians in the USA — Talk to Someone | LeanOn',
    description: 'Living in the USA and need someone who understands the Indian or South Asian context? LeanOn offers private one-to-one peer support with real human listeners.',
    eyebrow: 'Peer support · USA',
    intro: 'Living far from home can make some conversations surprisingly difficult. LeanOn gives Indians and South Asians in the USA a private place to talk to a real person — without turning every difficult day into a therapy appointment.',
    localAngle: 'Talk about homesickness, family expectations from a distance, relationship pressure, work stress, cultural differences, visa uncertainty or simply the feeling that you cannot explain your experience to people around you. You can choose a listener based on language, topic and lived experience.',
    situations: ['Homesickness and missing family in India', 'Work pressure, relocation or visa-related uncertainty', 'Dating, marriage and relationship pressure across cultures', 'Feeling isolated despite having colleagues and friends', 'Family conversations you cannot have openly', 'Being second-generation Indian and navigating two cultures'],
    howItWorks: ['Browse listener profiles and find someone whose experience feels familiar.', 'Try your first 5-minute session free before deciding whether you want to continue.', 'Choose text or voice depending on what feels comfortable and private.', 'If you continue, the session price is shown before you start so there are no surprises.'],
    faqs: [
      { q: 'Are LeanOn listeners in the USA?', a: 'LeanOn is designed around real peer listeners and can connect diaspora users with listeners who understand Indian and South Asian experiences. Check the live listener list for current availability.' },
      { q: 'Can I talk about life in the USA?', a: 'Yes. Work, relationships, homesickness, family expectations, cultural differences and everyday loneliness are all reasonable topics for a peer-support conversation.' },
      { q: 'Do I need to be in crisis?', a: 'No. LeanOn is for everyday emotional weight and human connection. It is not a crisis service or a substitute for professional care.' },
    ],
    searchTerms: ['Indian peer support USA', 'Indian emotional support USA', 'Indian someone to talk to USA', 'South Asian peer support USA', 'talk to someone Indian abroad'],
  },
  {
    slug: 'uk', country: 'United Kingdom', regionCode: 'GB', audience: 'Indian and South Asian people living in the UK',
    title: 'Peer Support for Indians in the UK — Someone to Talk To | LeanOn',
    description: 'Need someone to talk to in the UK who understands Indian or South Asian life? LeanOn connects you with real peer listeners for private conversations.',
    eyebrow: 'Peer support · UK',
    intro: 'There are conversations that are easier with someone who understands where you come from. LeanOn gives Indians and South Asians in the UK a private way to talk with a real peer listener about life, relationships, family, work and loneliness.',
    localAngle: 'Whether you moved to the UK recently, grew up between cultures, or have lived there for years, you can choose a listener around the lived experience you want to discuss. The goal is simple: a real human conversation without judgement or unsolicited advice.',
    situations: ['Missing family, festivals and life in India', 'Work and relocation stress', 'Marriage and family expectations across cultures', 'Loneliness after moving cities or countries', 'Relationship problems you do not want to discuss with people you know', 'Feeling caught between Indian and British expectations'],
    howItWorks: ['Read listener profiles and choose someone whose lived experience fits your situation.', 'Start with the free 5-minute introductory session.', 'Use text or voice depending on your privacy and preference.', 'Continue only when you feel the conversation is worth continuing.'],
    faqs: [
      { q: 'Who is LeanOn for in the UK?', a: 'LeanOn is for people who want peer emotional support and human connection. The UK page is particularly relevant to Indians and South Asians living away from home.' },
      { q: 'Can I talk privately?', a: 'LeanOn is designed around a private one-to-one session. You can choose text when you do not want people nearby to hear a voice conversation.' },
      { q: 'Is LeanOn therapy?', a: 'No. LeanOn is peer support, not therapy, counselling or clinical treatment. For a clinical need, use an appropriately qualified professional or local emergency/crisis service.' },
    ],
    searchTerms: ['Indian peer support UK', 'Indian emotional support UK', 'Indian someone to talk to UK', 'South Asian peer support UK', 'lonely Indian in UK'],
  },
  {
    slug: 'canada', country: 'Canada', regionCode: 'CA', audience: 'Indian and South Asian people living in Canada',
    title: 'Peer Support for Indians in Canada — Talk to a Real Listener | LeanOn',
    description: 'Indian or South Asian in Canada and need someone to talk to? LeanOn offers private one-to-one peer support with real human listeners.',
    eyebrow: 'Peer support · Canada',
    intro: 'Moving countries can change who you can call when something is weighing on you. LeanOn gives Indians and South Asians in Canada a private place to talk to a real person who understands the cultural context behind the words.',
    localAngle: 'Talk about homesickness, immigration or work uncertainty, relationships, family expectations, loneliness, cultural adjustment or the everyday pressure of building a life away from India. Choose someone whose lived experience resonates with yours.',
    situations: ['Homesickness and distance from parents', 'Immigration, work or study pressure', 'Long-distance relationships and marriage decisions', 'Cultural adjustment and feeling out of place', 'Loneliness after moving to a new city', 'Family expectations while living independently abroad'],
    howItWorks: ['Browse real listener profiles and look for relevant lived experience.', 'Start with one free 5-minute introductory session.', 'Choose text for maximum privacy or voice when you want a more natural conversation.', 'If the fit feels right, continue with a paid session at the displayed rate.'],
    faqs: [
      { q: 'Can Indians in Canada use LeanOn?', a: 'Yes. LeanOn has dedicated peer-support content for the Indian and South Asian diaspora. Live listener availability is shown in the app.' },
      { q: 'What topics are appropriate?', a: 'Loneliness, relationships, homesickness, family pressure, work or study stress and other everyday emotional concerns are appropriate for peer support.' },
      { q: 'Do I have to share my real-life details?', a: 'No. Share only what you are comfortable sharing. LeanOn is designed to let a conversation start without requiring you to tell your whole story.' },
    ],
    searchTerms: ['Indian peer support Canada', 'Indian emotional support Canada', 'Indian someone to talk to Canada', 'South Asian peer support Canada', 'Indian loneliness Canada'],
  },
  {
    slug: 'australia', country: 'Australia', regionCode: 'AU', audience: 'Indian and South Asian people living in Australia',
    title: 'Peer Support for Indians in Australia — Someone to Talk To | LeanOn',
    description: 'Need someone to talk to in Australia who understands Indian or South Asian life? Connect with real peer listeners on LeanOn.',
    eyebrow: 'Peer support · Australia',
    intro: 'A busy life abroad can still feel lonely. LeanOn gives Indians and South Asians in Australia a private, one-to-one space to talk with a real peer listener about whatever is weighing on them.',
    localAngle: 'From homesickness and long-distance family relationships to work, study, dating, marriage and cultural adjustment, the right listener can make it easier to say the thing you have been holding in. Browse by lived experience and topic rather than trying to find the perfect words first.',
    situations: ['Homesickness and missing family in India', 'University, work or career pressure', 'Long-distance family and relationship strain', 'Cultural differences in dating and marriage', 'Feeling lonely after moving to Australia', 'Needing to vent without burdening a friend or partner'],
    howItWorks: ['Find a listener whose profile matches what you are going through.', 'Start with the free 5-minute introduction.', 'Talk by text or voice depending on your situation.', 'Continue only if the listener feels like a good fit.'],
    faqs: [
      { q: 'Is LeanOn available to people in Australia?', a: 'LeanOn has an Australia-focused peer-support experience for people who want to talk to real listeners. Check the live listener list for current availability.' },
      { q: 'Can I talk about homesickness?', a: 'Yes. Homesickness, family distance, cultural adjustment and relationships are common reasons someone may want a peer conversation.' },
      { q: 'What if I only want someone to listen?', a: 'That is exactly what peer support is designed for. You can tell the listener at the start that you want to be heard rather than given advice.' },
    ],
    searchTerms: ['Indian peer support Australia', 'Indian emotional support Australia', 'Indian someone to talk to Australia', 'South Asian peer support Australia', 'Indian loneliness Australia'],
  },
  {
    slug: 'uae', country: 'United Arab Emirates', regionCode: 'AE', audience: 'Indian and South Asian people living in the UAE',
    title: 'Peer Support for Indians in the UAE — Talk to Someone | LeanOn',
    description: 'Living in the UAE and need someone who understands the Indian or South Asian context? LeanOn connects you with real peer listeners.',
    eyebrow: 'Peer support · UAE',
    intro: 'Life as an expatriate can be busy, social and still emotionally isolating. LeanOn gives Indians and South Asians in the UAE a private place to talk to a real person about work, relationships, family, homesickness and everyday pressure.',
    localAngle: 'Whether you are in Dubai, Abu Dhabi, Sharjah or elsewhere in the UAE, you can start with the experience rather than the diagnosis. Talk about family back home, career pressure, relationships, loneliness, cultural expectations or simply a difficult day.',
    situations: ['Missing family and friends in India', 'Work pressure and expatriate life', 'Marriage, dating and family expectations', 'Feeling alone despite a busy social environment', 'Financial or career pressure you do not want to discuss at work', 'Needing a private conversation late in the day'],
    howItWorks: ['Browse listener profiles and choose someone who understands your topic.', 'Use the free 5-minute introductory session to test the fit.', 'Choose text or voice depending on privacy and preference.', 'Continue with a paid session only when you want to.'],
    faqs: [
      { q: 'Can Indians in the UAE use LeanOn?', a: 'Yes. LeanOn has UAE-focused content for the Indian and South Asian diaspora and connects seekers with real peer listeners. Live availability can change throughout the day.' },
      { q: 'What can I talk about?', a: 'Work pressure, relationships, homesickness, family expectations, loneliness, cultural adjustment and ordinary life problems are all valid peer-support topics.' },
      { q: 'Can I use text instead of voice?', a: 'Yes. Text is useful when you want a quieter, more private conversation. Voice is available when you prefer speaking.' },
    ],
    searchTerms: ['Indian peer support UAE', 'Indian emotional support Dubai', 'Indian someone to talk to UAE', 'South Asian peer support Dubai', 'Indian loneliness UAE'],
  },
  {
    slug: 'singapore', country: 'Singapore', regionCode: 'SG', audience: 'Indian and South Asian people living in Singapore',
    title: 'Peer Support for Indians in Singapore — Real Human Listeners | LeanOn',
    description: 'Need someone to talk to in Singapore who understands Indian or South Asian life? LeanOn offers private one-to-one peer support.',
    eyebrow: 'Peer support · Singapore',
    intro: 'You can be surrounded by people and still have no one you want to tell the whole story to. LeanOn gives Indians and South Asians in Singapore a private way to talk with a real peer listener.',
    localAngle: 'Talk about work intensity, relocation, relationships, family expectations, loneliness, cultural differences or the simple need to get something off your chest. Listener profiles help you choose someone based on lived experience and topic.',
    situations: ['Work and career pressure', 'Homesickness and family distance', 'Relationship or marriage uncertainty', 'Cultural adjustment and identity', 'Loneliness after relocating', 'A difficult thought you need to say out loud'],
    howItWorks: ['Browse listeners and choose someone whose lived experience feels relevant.', 'Start with the free 5-minute introductory session.', 'Use text when privacy matters or voice when speaking feels easier.', 'Continue if you find the conversation useful.'],
    faqs: [
      { q: 'Who is the Singapore page for?', a: 'It is primarily for Indians and South Asians living in Singapore who want human peer support and a listener who understands the cultural context.' },
      { q: 'Can I talk about work stress?', a: 'Yes. Work and career pressure are appropriate topics for a peer-support conversation, as are relationships, homesickness and loneliness.' },
      { q: 'Is this a professional mental health service?', a: 'No. LeanOn is peer support. It does not provide therapy, diagnosis or clinical treatment.' },
    ],
    searchTerms: ['Indian peer support Singapore', 'Indian emotional support Singapore', 'Indian someone to talk to Singapore', 'South Asian peer support Singapore', 'Indian loneliness Singapore'],
  },
  {
    slug: 'malaysia', country: 'Malaysia', regionCode: 'MY', audience: 'Indian and South Asian people living in Malaysia',
    title: 'Peer Support for Indians in Malaysia — Someone to Talk To | LeanOn',
    description: 'Indian or South Asian in Malaysia and need someone to talk to? LeanOn connects you with real peer listeners for private conversations.',
    eyebrow: 'Peer support · Malaysia',
    intro: 'Sometimes the hardest part is not the problem itself — it is finding someone you feel comfortable telling. LeanOn gives Indians and South Asians in Malaysia a private place to talk with a real listener.',
    localAngle: 'Use LeanOn for homesickness, family pressure, relationships, work stress, identity, cultural expectations or simply a conversation when you do not want to burden the people close to you. Choose a listener by lived experience and topic.',
    situations: ['Family expectations and difficult conversations', 'Work or study stress', 'Relationship and marriage concerns', 'Homesickness or feeling disconnected from India', 'Loneliness despite having a social circle', 'Needing a neutral person to listen'],
    howItWorks: ['Browse real peer listeners and read their profiles.', 'Try the first 5-minute session free.', 'Choose text or voice based on your privacy and comfort.', 'Continue with a paid session if the conversation feels valuable.'],
    faqs: [
      { q: 'Can people in Malaysia use LeanOn?', a: 'LeanOn has a Malaysia-focused peer-support landing experience for Indian and South Asian users. Check live availability in the app.' },
      { q: 'What is a peer listener?', a: 'A peer listener is a real person who offers human support informed by lived experience. They are not a therapist or medical professional.' },
      { q: 'Can I try before paying?', a: 'Yes. New seekers receive one free 5-minute introductory session to help them decide whether the listener feels like a good fit.' },
    ],
    searchTerms: ['Indian peer support Malaysia', 'Indian emotional support Malaysia', 'Indian someone to talk to Malaysia', 'South Asian peer support Malaysia', 'Indian loneliness Malaysia'],
  },
  {
    slug: 'kuwait', country: 'Kuwait', regionCode: 'KW', audience: 'Indian and South Asian people living in Kuwait',
    title: 'Peer Support for Indians in Kuwait — Talk to a Real Person | LeanOn',
    description: 'Living in Kuwait and need someone who understands Indian or South Asian life? LeanOn connects you with real peer listeners for private support conversations.',
    eyebrow: 'Peer support · Kuwait',
    intro: 'Expatriate life can mean carrying work pressure, family expectations and homesickness without wanting to explain everything to the people around you. LeanOn gives Indians and South Asians in Kuwait a private place to talk to a real listener.',
    localAngle: 'Talk about work and shift-life pressure, family back home, relationships, marriage decisions, loneliness or simply something you need to get off your chest. The conversation starts with a human listener, not a diagnosis or a script.',
    situations: ['Homesickness and missing family in India', 'Work or shift-related stress', 'Relationship and marriage pressure', 'Living away from your support network', 'Family concerns you cannot easily discuss', 'Needing a neutral person who will simply listen'],
    howItWorks: ['Browse listener profiles and look for relevant lived experience.', 'Start with your free 5-minute introductory session.', 'Choose text for privacy or voice when you want to speak.', 'Continue only when the conversation feels worth continuing.'],
    faqs: [
      { q: 'Is LeanOn available for Indians in Kuwait?', a: 'LeanOn has a Kuwait-focused peer-support experience for the Indian and South Asian diaspora. Current listener availability is shown in the app.' },
      { q: 'Can I talk about work pressure?', a: 'Yes. Work, relocation, relationships, family and loneliness are all suitable topics for a peer-support conversation.' },
      { q: 'Is LeanOn a counselling service?', a: 'No. LeanOn is peer support and human connection, not counselling, therapy or clinical treatment.' },
    ],
    searchTerms: ['Indian peer support Kuwait', 'Indian emotional support Kuwait', 'Indian someone to talk to Kuwait', 'South Asian peer support Kuwait', 'Indian loneliness Kuwait'],
  },
]

export const COUNTRY_SEO_BY_SLUG = Object.fromEntries(COUNTRY_SEO.map(c => [c.slug, c])) as Record<string, CountrySeoData>
