export type UserRole = 'seeker' | 'listener' | 'admin'
export type SessionType = 'text' | 'voice'
export type SessionStatus = 'pending' | 'active' | 'completed' | 'cancelled' | 'disputed'
export type TransactionType = 'credit' | 'debit' | 'refund' | 'payout'

export interface User {
  id: string
  phone: string
  name: string | null
  avatar_url: string | null
  role: UserRole
  wallet_balance: number
  is_active: boolean
  created_at: string
}

export interface ListenerProfile {
  id: string
  user_id: string
  bio: string
  specialty_tags: string[]
  rate_per_min: number
  is_available: boolean
  is_approved: boolean
  rating: number
  total_sessions: number
  total_minutes: number
  created_at: string
  // joined from users
  name?: string
  avatar_url?: string | null
}

export interface Session {
  id: string
  seeker_id: string
  listener_id: string
  session_type: SessionType
  duration_mins: 5 | 15 | 30
  status: SessionStatus
  amount_held: number
  platform_fee: number
  started_at: string | null
  ended_at: string | null
  seeker_rating: number | null
  seeker_review: string | null
  is_free_trial: boolean
  agora_channel: string | null
  created_at: string
}

export interface Message {
  id: string
  session_id: string
  sender_id: string
  content: string
  is_flagged: boolean
  created_at: string
}

export interface WalletTransaction {
  id: string
  user_id: string
  amount: number
  type: TransactionType
  description: string | null
  reference_id: string | null
  session_id: string | null
  created_at: string
}

export interface SpecialtyTag {
  id: string
  label: string
  icon: string
  sort_order: number
}

// Pricing helpers
export const SESSION_DURATIONS = [
  { mins: 5,  label: '5 min',  tag: 'Free trial', isFree: true  },
  { mins: 15, label: '15 min', tag: 'Quick chat',  isFree: false },
  { mins: 30, label: '30 min', tag: 'Deep dive',   isFree: false },
] as const

// Flat ₹10 per session, paid by the seeker on top of the listener's rate.
// Listeners keep 100% of their stated rate. Razorpay's gateway commission is
// also borne by the seeker at recharge time. Keep in sync with lib/constants.ts.
export const PLATFORM_FEE = 10

export function calcSessionCost(ratePerMin: number, durationMins: number) {
  const base = ratePerMin * durationMins
  const platformFee = PLATFORM_FEE
  const total = base + platformFee
  return { base, platformFee, total }
}

