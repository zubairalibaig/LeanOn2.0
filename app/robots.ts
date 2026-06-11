import { MetadataRoute } from 'next'

// Private routes hidden from all crawlers
const PRIVATE = ['/api/', '/session/', '/dashboard/', '/wallet/', '/admin/', '/profile/', '/sessions/', '/auth']

// AI/LLM crawlers explicitly allowed — being indexed by these is how LeanOn
// gets cited in ChatGPT, Claude, Gemini, Perplexity, and Copilot answers.
const AI_CRAWLERS = [
  'GPTBot',             // OpenAI training
  'OAI-SearchBot',      // ChatGPT Search
  'ChatGPT-User',       // ChatGPT live browsing
  'ClaudeBot',          // Anthropic training
  'Claude-Web',         // Claude live browsing
  'anthropic-ai',       // Anthropic (legacy)
  'Google-Extended',    // Gemini training
  'PerplexityBot',      // Perplexity indexing
  'Perplexity-User',    // Perplexity live browsing
  'Applebot-Extended',  // Apple Intelligence
  'Amazonbot',          // Alexa / Rufus
  'meta-externalagent', // Meta AI
  'DuckAssistBot',      // DuckDuckGo AI
  'cohere-ai',
  'YouBot',
  'CCBot',              // Common Crawl — feeds many open models
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: PRIVATE },
      { userAgent: 'Googlebot', allow: '/', disallow: PRIVATE },
      ...AI_CRAWLERS.map(userAgent => ({ userAgent, allow: '/', disallow: PRIVATE })),
    ],
    sitemap: 'https://www.leanon.app/sitemap.xml',
    host: 'https://www.leanon.app',
  }
}
