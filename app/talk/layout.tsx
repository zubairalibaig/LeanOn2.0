import type { Metadata } from 'next'

// "Talk now" — conversion page for campaigns and in-app links, not a search
// landing page (the SEO pages already cover the queries). Keep it out of the index.
export const metadata: Metadata = {
  title: 'Talk to someone now | LeanOn',
  description: 'Tell us what’s on your mind and we’ll connect you with a peer listener who’s online now. First 5 minutes free.',
  robots: { index: false, follow: true },
}

export default function TalkLayout({ children }: { children: React.ReactNode }) {
  return children
}
