import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sign In — LeanOn Peer Support India',
  description: 'Sign in or create your LeanOn account. OTP-verified with your mobile number. Start a peer support session in 30 seconds.',
  alternates: { canonical: 'https://www.leanon.app/auth' },
  robots: { index: false, follow: false },
}

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
