'use client'
import { useState, useEffect, useRef, RefObject } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { BadgeCheck, Globe, Gift, LogIn, Mail, MessageCircle, Phone, Search, SlidersHorizontal, Star, Wallet as WalletIcon, X } from 'lucide-react'
import { createClient } from '@/lib/supabase'
import { LANGUAGES, AGE_RANGES, ageRangeId, VOICE_PRICING_ENABLED, sessionRatePerMin, MAX_FREE_TRIALS } from '@/lib/constants'
import { SHOW_LISTENER_IN_SESSION_STATUS } from '@/lib/feature-flags'
import { estimateListenerTakeHome } from '@/lib/session-billing'
import { showToast } from '@/lib/toast'
import Avatar from '@/app/components/Avatar'

// Post-login welcome banner / onboarding modal
// New users (leanon_welcome_new in sessionStorage) see a full-screen overlay
// that explains the free trial and pushes them to pick a listener.
// Returning but un-onboarded users see the original thin strip.
function WelcomeBanner({
  listenerGridRef,
  onDismiss,
  trialAvailable = true,
}: {
  trialAvailable?: boolean
  listenerGridRef?: RefObject<HTMLDivElement | null>
  // Called with the topic the user came from (if any), so the parent can
  // pre-filter the listener grid before the modal closes.
  onDismiss?: (topic: string | null) => void
}) {
  const [show, setShow] = useState(false)
  const [isNew, setIsNew] = useState(false)
  // Topic the new user came from — read from sessionStorage so it survives
  // the /auth redirect that drops query params.
  const [intentTopic, setIntentTopic] = useState<string | null>(null)

  useEffect(() => {
    const newUser = sessionStorage.getItem('leanon_welcome_new')
    const onboarded = localStorage.getItem('leanon_onboarded')
    if (newUser) {
      setIsNew(true)
      setShow(true)
      sessionStorage.removeItem('leanon_welcome_new')
      // Read topic intent that auth/page.tsx may have left behind.
      // The browse page already cleared leanon_last_topic on mount, so read
      // leanon_intent_topic instead — a separate key set only for this purpose.
      try {
        const t = sessionStorage.getItem('leanon_intent_topic')
        if (t) { setIntentTopic(t); sessionStorage.removeItem('leanon_intent_topic') }
      } catch { /* ignore */ }
    } else if (!onboarded) {
      setShow(true)
    }
  }, [])
  if (!show) return null

  // Full-screen onboarding overlay for brand-new signups
  if (isNew) {
    const dismiss = () => {
      setShow(false)
      localStorage.setItem('leanon_onboarded', '1')
      onDismiss?.(intentTopic)
      // Scroll to the listener grid after a brief paint delay
      setTimeout(() => {
        listenerGridRef?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 80)
    }
    // If we know the topic they came from, personalise the CTA label.
    const topicLabel = intentTopic
      ? TAGS.find(t => t.id === intentTopic)?.label ?? null
      : null

    return (
      <div style={{
        position:'fixed', inset:0, zIndex:9999,
        background:'var(--navy)',
        display:'flex', flexDirection:'column',
        alignItems:'center', justifyContent:'center',
        padding:'32px 28px',
        fontFamily:'Nunito,sans-serif',
        textAlign:'center',
      }}>
        <div style={{fontSize:56, marginBottom:24, lineHeight:1}}>💙</div>
        <h2 style={{
          fontSize:'clamp(24px,6vw,32px)', fontWeight:900, color:'white',
          lineHeight:1.15, marginBottom:14, maxWidth:320,
        }}>
          Your first 5 minutes are completely free.
        </h2>
        <p style={{fontSize:16, color:'rgba(213,238,246,0.85)', fontWeight:600, lineHeight:1.65, marginBottom:10, maxWidth:300}}>
          Real person, not AI.
        </p>
        <p style={{fontSize:16, color:'rgba(213,238,246,0.85)', fontWeight:600, lineHeight:1.65, marginBottom:10, maxWidth:300}}>
          Anonymous. No prescription.
        </p>
        <p style={{fontSize:16, color:'rgba(213,238,246,0.85)', fontWeight:600, lineHeight:1.65, marginBottom:40, maxWidth:300}}>
          Just someone who listens.
        </p>
        <button
          onClick={dismiss}
          style={{
            background:'#FF9933', color:'white',
            border:'none', borderRadius:50,
            padding:'16px 40px',
            fontSize:17, fontWeight:900,
            cursor:'pointer', width:'100%', maxWidth:320,
            boxShadow:'0 4px 24px rgba(255,153,51,0.45)',
            fontFamily:'Nunito,sans-serif',
          }}
        >
          {topicLabel ? `Find a ${topicLabel.toLowerCase()} listener →` : 'Find a listener →'}
        </button>
        <p style={{fontSize:13, color:'rgba(213,238,246,0.45)', marginTop:20, fontWeight:600}}>
          No credit card needed for the free session.
        </p>
      </div>
    )
  }

  // The one intro strip on /browse (it replaced a separate free-trial nudge).
  return (
    <div style={{background:'var(--navy)',color:'white',padding:'10px 8px 10px 20px',display:'flex',alignItems:'center',justifyContent:'space-between',gap:8,fontFamily:'Nunito,sans-serif'}}>
      <div style={{flex:1}}>
        <p style={{fontSize:14,fontWeight:800,margin:0,marginBottom:2}}>
          {trialAvailable ? 'Your first 5 minutes are free.' : 'Not sure where to start?'}
        </p>
        <p style={{fontSize:13,fontWeight:600,color:'rgba(213,238,246,0.9)',margin:0}}>
          {trialAvailable
            ? 'Pick someone you’d feel comfortable talking to — text or voice, private and one-to-one.'
            : 'Pick a topic, then someone you’d feel comfortable talking to.'}
        </p>
      </div>
      <button aria-label="Dismiss" onClick={() => { setShow(false); localStorage.setItem('leanon_onboarded','1') }} style={{background:'none',border:'none',color:'white',cursor:'pointer',width:44,height:44,flexShrink:0,display:'flex',alignItems:'center',justifyContent:'center'}}><X size={20} aria-hidden /></button>
    </div>
  )
}

// Photo-less listeners get a stable brand-palette colour from their name, so
// cards don't all look identical. Blues/teals only (orange is the CTA colour);
// all pass 4.5:1 with white initials.
const INITIALS_COLORS = ['#0F4867', '#137A89', '#2E6F8E', '#3B6E86']
function initialsColor(name: string): string {
  let h = 0
  for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) >>> 0
  return INITIALS_COLORS[h % INITIALS_COLORS.length]
}

type Listener = {
  id: string
  user_id: string
  name: string
  bio: string
  rating: number
  total_sessions: number
  rate_per_min: number
  is_available: boolean
  is_in_session?: boolean  // derived: has an active session right now (feature-flagged)
  is_verified?: boolean
  specialty_tags: string[]
  languages_spoken: string[]
  avatar_url?: string
  birth_year?: number | null
  birth_month?: number | null
  last_heartbeat_at?: string | null
  tagline_phrases?: string[] | null
}

// Ranking used everywhere on this page. The online/offline precedence is
// deliberately identical to the server's and must not change — online listeners
// always sort first. The only tiebreaker that differs is WITHIN the offline
// group, which is now ordered by how recently the listener was last online.
function heartbeatMs(l: Listener): number {
  const t = l.last_heartbeat_at ? new Date(l.last_heartbeat_at).getTime() : NaN
  return Number.isFinite(t) ? t : -1 // never-online sinks to the bottom
}
function compareListeners(a: Listener, b: Listener): number {
  if (a.is_available !== b.is_available) return a.is_available ? -1 : 1
  if (!a.is_available) {
    const diff = heartbeatMs(b) - heartbeatMs(a)
    if (diff !== 0) return diff
  }
  return (b.rating || 0) - (a.rating || 0)
}

// "Last online" label for OFFLINE listeners. Returns null when the listener has
// never been online, or was last online long enough ago that surfacing it only
// signals dormancy — in that case the tile just shows the existing Offline dot.
function lastOnlineLabel(l: Listener): string | null {
  if (!l.last_heartbeat_at) return null
  const then = new Date(l.last_heartbeat_at).getTime()
  if (!Number.isFinite(then)) return null
  const mins = Math.floor((Date.now() - then) / 60_000)
  if (mins < 5)  return 'Active just now'
  if (mins < 60) return `Active ${mins}m ago`
  const hrs = Math.floor(mins / 60)
  if (hrs < 24)  return `Active ${hrs}h ago`
  const days = Math.floor(hrs / 24)
  if (days === 1) return 'Active yesterday'
  if (days <= 7)  return `Active ${days}d ago`
  return null
}

const TAGS = [
  {id:'all',       icon:'✨', label:'All'},
  {id:'loneliness',icon:'🌙', label:'Loneliness'},
  {id:'anxiety',   icon:'😰', label:'Anxiety'},
  {id:'stress',    icon:'💼', label:'Work stress'},
  {id:'burnout',   icon:'🔥', label:'Burnout'},
  {id:'career',    icon:'🧭', label:'Career'},
  {id:'relationships',icon:'💬',label:'Relationships'},
  {id:'breakup',   icon:'💔', label:'Breakup'},
  {id:'grief',     icon:'🌿', label:'Grief'},
  {id:'students',  icon:'📚', label:'Students'},
  {id:'selfesteem',icon:'💙', label:'Self-esteem'},
  {id:'lgbtq',     icon:'🌈', label:'LGBTQ+'},
  {id:'parenting', icon:'👶', label:'Parenting'},
  {id:'startup',   icon:'🚀', label:'Startup'},
  {id:'general',   icon:'☕', label:'Just talk'},
]

// Maps support/SEO page slugs onto real listener specialty tags. Keep in sync
// when a new /support/* page adds a `/browse?topic=<slug>` CTA — an unmapped
// slug now falls back to "All" instead of showing an empty directory.
const TOPIC_ALIASES: Record<string, string> = {
  // legacy slug → real tag (keeps old inbound links working)
  'overthinking':                    'anxiety',
  'social-anxiety':                  'anxiety',
  'cant-sleep-anxiety':              'anxiety',
  'imposter-syndrome':               'selfesteem',
  'feeling-like-a-failure':          'selfesteem',
  'work-from-home-loneliness':       'loneliness',
  'sunday-night-loneliness':         'loneliness',
  'new-city-india':                  'loneliness',
  'men-loneliness-india':            'loneliness',
  'marriage-loneliness':             'relationships',
  'relationship-stress':             'relationships',
  'relationship-anxiety':            'relationships',
  'married-but-lonely':              'relationships',
  'long-distance-relationship':      'relationships',
  'family-pressure-india':           'relationships',
  'arranged-marriage-stress':        'relationships',
  'husband-not-supportive-india':    'relationships',
  'not-ready-to-get-married-india':  'relationships',
  'fear-of-marriage-india':          'relationships',
  'job-loss':                        'career',
  'career-confusion':                'career',
  'career-pressure-india':           'career',
  'founder-burnout':                 'startup',
  'student-stress':                  'students',
  'mom-burnout-india':               'parenting',
  'postpartum-india':                'parenting',
  'emotional-exhaustion':            'burnout',
  'banking-job-stress-india':        'stress',
  'working-woman-india':             'stress',
  'emotional-support':               'general',
  'someone-to-talk-to':              'general',
  'anonymous-support':               'general',
  'adulting-india':                  'general',
  'childhood-trauma-india':          'general',
  'dont-want-to-get-out-of-bed':     'general',
  'emotional-numbness':              'general',
  'feeling-empty':                   'general',
  'feeling-lost':                    'general',
  'need-to-vent':                    'general',
}

// User-selectable ordering. Online listeners ALWAYS rank first in every mode —
// sorting a bookable-now listener below an offline one would defeat the point
// of the directory — so the chosen key only orders within the online and
// offline groups.
const SORTS = [
  { id: 'best',      label: '⚡ Best match' },
  { id: 'price-low', label: '₹ Price: low first' },
  { id: 'rating',    label: '⭐ Top rated' },
] as const
type SortId = typeof SORTS[number]['id']

const S = `
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
:root{--navy:#0F4867;--teal:#1A8FA0;--orange:#FF9933;--gray:#5A7A8A;--border:#D5EEF6;--light:#F0F8FC;}
body{font-family:'Nunito',sans-serif;color:var(--navy);-webkit-font-smoothing:antialiased;
  background:radial-gradient(ellipse 90% 55% at 0% 0%,#C2E4F2 0%,#DAEEF8 22%,#FFFFFF 58%) fixed;}
a{text-decoration:none;color:inherit;}
.wrap{max-width:1200px;margin:0 auto;padding:0 20px;}
.head{padding:16px 0 10px;}
.head-row{display:flex;align-items:center;justify-content:space-between;gap:12px;}
.head h1{font-size:21px;font-weight:900;color:var(--navy);line-height:1.2;}
.wallet-chip{display:flex;align-items:center;gap:6px;background:var(--light);min-height:44px;padding:0 16px;border-radius:50px;font-weight:800;font-size:14px;color:var(--navy);cursor:pointer;border:1.5px solid var(--border);flex-shrink:0;}
.topbar{position:sticky;top:0;z-index:50;background:rgba(255,255,255,0.96);backdrop-filter:blur(8px);border-bottom:1px solid var(--border);padding:10px 0;}
.search-container{width:100%;max-width:600px;margin:0 0 10px;position:relative;}
.search-icon{position:absolute;left:16px;top:50%;transform:translateY(-50%);color:var(--gray);pointer-events:none;display:flex;}
.search-wrap{width:100%;min-height:44px;padding:10px 16px 10px 44px;border-radius:50px;border:1.5px solid var(--border);font-family:'Nunito',sans-serif;font-size:15px;font-weight:600;color:var(--navy);background:white;outline:none;display:block;box-sizing:border-box;}
.search-wrap:focus{border-color:var(--navy);}
.search-wrap::placeholder{color:var(--gray);font-weight:500;}
.tag-scroll{display:flex;gap:8px;overflow-x:auto;padding-bottom:2px;
  -webkit-mask-image:linear-gradient(90deg,#000 88%,transparent);mask-image:linear-gradient(90deg,#000 88%,transparent);}
.tag-scroll::-webkit-scrollbar{display:none;}
@media(min-width:960px){.tag-scroll{flex-wrap:wrap;overflow:visible;-webkit-mask-image:none;mask-image:none;}}
.tag-pill{flex-shrink:0;display:flex;align-items:center;gap:6px;min-height:44px;padding:0 16px;border-radius:50px;font-size:13px;font-weight:700;border:1.5px solid var(--border);background:white;color:var(--gray);cursor:pointer;transition:all .15s;white-space:nowrap;font-family:'Nunito',sans-serif;}
.tag-pill.active{background:var(--navy);color:white;border-color:var(--navy);}
.filter-panel{margin-top:10px;display:grid;gap:8px;}
/* Bottom padding clears the fixed BottomNav — previously supplied by the
   listener-recruitment CTA that used to sit below this list. */
.list{padding:16px 20px 96px;display:grid;grid-template-columns:minmax(0,1fr);gap:14px;max-width:1200px;margin:0 auto;}
@media(min-width:640px){.list{grid-template-columns:repeat(2,minmax(0,1fr));}}
@media(min-width:960px){.list{grid-template-columns:repeat(3,minmax(0,1fr));}}
.card{background:white;border:1.5px solid var(--border);border-radius:20px;padding:18px;transition:border-color .2s,box-shadow .2s;box-shadow:0 1px 4px rgba(15,72,103,.04);display:flex;flex-direction:column;}
.card:hover{border-color:var(--teal);box-shadow:0 4px 20px rgba(15,72,103,.08);}
.card-link{display:block;color:inherit;border-radius:14px;outline-offset:4px;}
.card-link:focus-visible{outline:2.5px solid var(--teal);}
.card-actions{margin-top:auto;padding-top:4px;}
.card-top{display:flex;gap:14px;align-items:center;margin-bottom:12px;}
.av{width:88px;height:88px;border-radius:50%;background:var(--teal);display:flex;align-items:center;justify-content:center;font-weight:900;font-size:22px;color:white;flex-shrink:0;position:relative;overflow:hidden;}
.av img{width:100%;height:100%;object-fit:cover;border-radius:50%;}
.dot{position:absolute;bottom:1px;right:1px;width:14px;height:14px;border-radius:50%;border:2.5px solid white;}
.dot.on{background:#34C759;}.dot.off{background:#C7C7CC;}.dot.busy{background:var(--orange);}
.meta{flex:1;min-width:0;}
.name{font-size:16px;font-weight:900;color:var(--navy);margin-bottom:2px;display:flex;align-items:center;gap:6px;min-width:0;}
.name-text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0;}
.card-tagline{font-size:13px;font-weight:600;color:var(--gray);margin-bottom:4px;line-height:1.4;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;}
.stats{display:flex;align-items:center;flex-wrap:wrap;gap:4px 10px;font-size:13px;color:var(--gray);font-weight:600;margin-bottom:6px;}
.stats .st{display:inline-flex;align-items:center;gap:4px;}
.new-tag{background:#FFF4E5;color:#7A4A00;font-size:11px;font-weight:800;padding:2px 8px;border-radius:50px;}
.stats span{white-space:nowrap;}
.fit{font-size:13px;color:var(--navy);font-weight:700;line-height:1.6;margin-bottom:14px;}
.fit span{color:var(--gray);font-weight:600;}
.fit .ln{display:flex;align-items:center;gap:6px;}
.btn-filters{flex-shrink:0;display:flex;align-items:center;gap:6px;min-height:44px;padding:0 16px;border-radius:50px;font-size:13px;font-weight:800;border:1.5px solid var(--navy);background:white;color:var(--navy);cursor:pointer;font-family:'Nunito',sans-serif;}
.btn-filters .cnt{background:var(--orange);color:white;border-radius:50px;padding:0 6px;font-size:11px;}
.verified-chip{display:inline-flex;align-items:center;gap:3px;flex-shrink:0;background:#E6F6FF;color:#0F4867;font-size:11px;font-weight:800;padding:2px 8px 2px 6px;border-radius:50px;border:1.5px solid #B8D9F0;}
.mode-btns{display:grid;grid-template-columns:1fr 1fr;gap:8px;}
.btn-mode{color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:14px;min-height:52px;padding:6px;border-radius:12px;border:1.5px solid transparent;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:1px;line-height:1.25;transition:background .2s;width:100%;}
.btn-mode .bl{display:inline-flex;align-items:center;gap:6px;}
.btn-mode small{font-size:12px;font-weight:700;opacity:.95;}
.btn-mode.text{background:#137A89;}
.btn-mode.text:hover{background:#0F6673;}
.btn-mode.voice{background:var(--navy);}
.btn-mode.voice:hover{background:#0b3650;}
.btn-mode.full{grid-column:1 / -1;flex-direction:row;gap:8px;}
.btn-mode.msg{background:#137A89;}
.btn-mode.msg:hover{background:#0F6673;}
.btn-mode.busy{background:white;color:#4E6B7A;border-color:var(--border);cursor:not-allowed;}
.card-caption{margin-top:8px;font-size:12px;font-weight:700;color:var(--gray);display:flex;align-items:center;justify-content:center;gap:6px;text-align:center;}
.card-caption.free{color:#1B7A3A;}
.status-row{display:flex;align-items:center;flex-wrap:wrap;gap:4px 8px;}
.avail-label{display:inline-flex;align-items:center;gap:5px;font-size:12px;font-weight:800;padding:3px 10px;border-radius:50px;white-space:nowrap;}
.avail-label::before{content:'';width:7px;height:7px;border-radius:50%;background:currentColor;}
.avail-label.on{color:#1B7A3A;background:#E7F6EC;}.avail-label.off{color:#4E6B7A;background:#EEF3F6;}.avail-label.busy{color:#9A4E00;background:#FFF1E0;}
.last-seen{font-size:12px;font-weight:600;color:var(--gray);}
.skeleton{background:linear-gradient(90deg,#E6F2F8 25%,#F4FAFD 50%,#E6F2F8 75%);background-size:200% 100%;animation:shimmer 1.5s infinite;border-radius:20px;height:250px;border:1.5px solid var(--border);}
@keyframes shimmer{0%{background-position:-200% 0}100%{background-position:200% 0}}
.empty{text-align:center;padding:60px 20px;}
.session-toast{position:fixed;top:0;left:0;right:0;z-index:100;background:var(--orange);color:white;font-family:'Nunito',sans-serif;padding:14px 20px;display:flex;align-items:center;justify-content:space-between;gap:12px;box-shadow:0 4px 20px rgba(255,153,51,.35);animation:toastDrop .25s ease;}
@keyframes toastDrop{from{opacity:0;transform:translateY(-100%)}to{opacity:1;transform:translateY(0)}}
.session-toast-text{font-size:14px;font-weight:800;}
.session-toast-sub{font-size:12px;font-weight:600;opacity:.85;margin-top:2px;}
.btn-toast-join{background:white;color:var(--orange);font-family:'Nunito',sans-serif;font-weight:800;font-size:13px;padding:9px 16px;border-radius:10px;border:none;cursor:pointer;white-space:nowrap;}
.btn-toast-dismiss{background:transparent;color:white;font-family:'Nunito',sans-serif;font-weight:700;font-size:20px;border:none;cursor:pointer;padding:0 4px;line-height:1;}
.avail-bar{margin:0 20px 4px;border-radius:16px;padding:12px 16px;display:flex;align-items:center;justify-content:space-between;gap:10px;font-size:13px;font-weight:700;}
.avail-bar.has-online{background:rgba(52,199,89,.1);border:1.5px solid rgba(52,199,89,.25);color:#1A5C2A;}
.avail-bar.no-online{background:rgba(90,122,138,.07);border:1.5px solid var(--border);color:var(--gray);}
.avail-bar-dot{width:8px;height:8px;border-radius:50%;flex-shrink:0;}
.avail-bar-dot.on{background:#34C759;box-shadow:0 0 0 3px rgba(52,199,89,.2);}
.avail-bar-dot.off{background:#C7C7CC;}
.avail-bar-left{display:flex;align-items:center;gap:8px;}
.avail-bar-recovery{margin:0 20px 0;background:rgba(255,153,51,.06);border:1.5px solid rgba(255,153,51,.2);border-radius:16px;padding:14px 16px;}
.avail-bar-recovery-title{font-size:13px;font-weight:800;color:var(--navy);margin-bottom:8px;}
.avail-bar-recovery-chips{display:flex;flex-wrap:wrap;gap:8px;}
.avail-bar-recovery-chip{background:white;border:1.5px solid var(--border);border-radius:50px;padding:6px 14px;font-size:12px;font-weight:700;color:var(--navy);display:flex;align-items:center;gap:5px;cursor:pointer;transition:border-color .15s;}
.avail-bar-recovery-chip:hover{border-color:var(--teal);color:var(--teal);}
.avail-bar-recovery-chip .dot-sm{width:6px;height:6px;border-radius:50%;background:#34C759;display:inline-block;}
`

function BrowseContent() {
  const router  = useRouter()
  const client  = createClient()

  const [tag, setTag]         = useState('all')
  const [lang, setLang]       = useState('all')
  const [ageRange, setAgeRange] = useState('all')
  const [sortBy, setSortBy]     = useState<SortId>('best')
  const [joiningToast, setJoiningToast] = useState(false)
  const [myUserId, setMyUserId] = useState<string | null>(null)
  const [myTextRate, setMyTextRate] = useState<number | null>(null)
  const [query, setQuery]     = useState('')
  const [listeners, setListeners] = useState<Listener[]>([])
  const [loading, setLoading] = useState(true)
  const [balance, setBalance] = useState<number|null>(null)
  const [incomingSession, setIncomingSession] = useState<{
    id: string; duration_mins: number; session_type: string; amount_held: number; platform_fee?: number | null
  } | null>(null)
  const channelRef = useRef<ReturnType<typeof client.channel> | null>(null)
  const listenerGridRef = useRef<HTMLDivElement | null>(null)
  // Free-trial nudge banner — shown to users who signed up within the last 30
  // days and haven't had a single session yet. Disappears after first session.
  const [authChecked, setAuthChecked] = useState(false)
  // Anonymous visitors are assumed eligible; logged-in seekers are checked below.
  const [trialAvailable, setTrialAvailable] = useState(true)
  const [showFilters, setShowFilters] = useState(false)

  // Read ?topic= from URL after hydration to avoid SSR mismatch.
  //
  // Support/SEO pages link here with their OWN slug (e.g. /support/overthinking
  // → ?topic=overthinking), but those slugs are not listener specialty tags.
  // Previously an unrecognised value was set as the filter verbatim, so the API
  // searched for a tag no listener has and the page rendered "No listeners
  // match" — every one of those landing-page CTAs dead-ended on an empty list.
  // Map known slugs to the closest real tag, and ignore anything unrecognised
  // (falling back to "All") rather than filtering the directory to nothing.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const raw = params.get('topic')
    if (!raw) {
      // Restore topic intent from a prior visit (e.g. after auth redirect drops
      // the query param). Only restore once — clear it so it doesn't persist
      // across unrelated visits.
      try {
        const saved = sessionStorage.getItem('leanon_last_topic')
        if (saved) {
          sessionStorage.removeItem('leanon_last_topic')
          if (TAGS.some(t => t.id === saved)) setTag(saved)
        }
      } catch { /* sessionStorage unavailable */ }
      return
    }
    const mapped = TOPIC_ALIASES[raw] ?? raw
    if (TAGS.some(t => t.id === mapped)) {
      setTag(mapped)
      // Persist topic intent so it survives the auth redirect (auth drops
      // query params when the redirect isn't set explicitly).
      try { sessionStorage.setItem('leanon_last_topic', mapped) } catch { /* ignore */ }
    }
  }, [])

  useEffect(() => { loadListeners(false) }, [tag, lang])

  // The /api/listeners response is authoritative and always fresh (the route is
  // force-dynamic + no-store), so we re-pull it on every trigger that could mean
  // a listener just toggled availability on /dashboard. Re-fetching can only
  // correct the list, never stale it:
  //   • window focus + tab becoming visible — covers switching back from the
  //     dashboard tab (visibilitychange alone is unreliable on desktop tab swaps)
  //   • a 30 s poll — backstop when Realtime isn't enabled for listener_profiles
  // Together these make online/offline reflect within seconds without depending
  // on Supabase Realtime being configured.
  useEffect(() => {
    // Silent refresh — no skeleton flash. Used for background polls and cross-tab
    // events. Initial load (called from the tag/lang effect) shows the skeleton.
    const refresh = () => loadListeners(true)
    const onVis = () => { if (document.visibilityState === 'visible') refresh() }
    // pageshow fires on back/forward navigation INCLUDING bfcache restores,
    // where the page is resurrected frozen and mount/focus/visibility may not
    // fire — this is the one path that otherwise shows a stale list after
    // navigating dashboard → back → browse.
    const onPageShow = () => refresh()
    window.addEventListener('focus', refresh)
    window.addEventListener('pageshow', onPageShow)
    document.addEventListener('visibilitychange', onVis)
    // Slow backstop poll for a dropped Realtime socket.
    //
    // WAS 3 SECONDS, which meant 20 requests/minute per open tab, forever,
    // even in a background tab nobody was looking at. Each one is a Vercel
    // function invocation plus a Supabase query, and /browse is the most-opened
    // page on the site — this was the single largest consumer of Vercel Fluid
    // Active CPU (the free-tier allowance hit 75% in Aug 2026).
    //
    // It is also redundant four times over: the listener-availability Realtime
    // subscription below pushes changes, BroadcastChannel catches same-origin
    // tab changes instantly, and focus/visibilitychange/pageshow all refresh on
    // return. This only has to catch a silently dropped socket, which 60 s does
    // just as well as 3 s.
    //
    // Skipping hidden tabs matters as much as the interval: visibilitychange
    // already refreshes the moment the user comes back, so polling in the
    // background bought nothing at all.
    const iv = setInterval(() => {
      if (document.visibilityState === 'visible') refresh()
    }, 120_000)

    // BroadcastChannel — receives immediate notification when another tab on the
    // same origin (e.g. /dashboard) toggles availability. Without this, the browse
    // page waits up to 5 s even when the change is known instantly.
    let bc: BroadcastChannel | null = null
    try {
      bc = new BroadcastChannel('leanon-availability')
      bc.onmessage = (e: MessageEvent<{ user_id: string; is_available: boolean }>) => {
        const { user_id, is_available } = e.data || {}
        if (typeof user_id !== 'string' || typeof is_available !== 'boolean') return
        setListeners(prev => {
          const mapped = prev.map(l =>
            l.user_id === user_id ? { ...l, is_available } : l
          )
          return [...mapped].sort(compareListeners)
        })
      }
    } catch {
      // BroadcastChannel unavailable (e.g. private browsing on some browsers)
    }

    return () => {
      window.removeEventListener('focus', refresh)
      window.removeEventListener('pageshow', onPageShow)
      document.removeEventListener('visibilitychange', onVis)
      clearInterval(iv)
      try { bc?.close() } catch { /* ignore */ }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tag, lang])

  // Realtime: update listener availability without requiring a full page reload.
  // Re-sort after update so newly-online listeners rise to the top (same order
  // as the server: is_available DESC, rating DESC). Without re-sorting, a
  // listener who was offline on initial load stays at the bottom even after
  // they go online, making them appear to have "disappeared" on short screens.
  useEffect(() => {
    const availSub = client.channel('listener-availability')
      .on('postgres_changes', {
        event: 'UPDATE',
        schema: 'public',
        table: 'listener_profiles',
      }, (payload) => {
        const updated = payload.new as { user_id: string; is_available: boolean; last_heartbeat_at?: string | null; is_in_session?: boolean }
        setListeners(prev => {
          const mapped = prev.map(l =>
            l.user_id === updated.user_id
              // is_available handling is unchanged. last_heartbeat_at is carried
              // through when present (migration 046 sets REPLICA IDENTITY FULL,
              // so UPDATE payloads include it) to keep the "last online" label
              // and the offline ordering fresh without a refetch.
              // is_in_session: updated from the DB column (migration 052) so the
              // orange dot appears instantly when a listener accepts a session,
              // without waiting for the 60-second poll.
              ? { ...l, is_available: updated.is_available,
                  last_heartbeat_at: updated.last_heartbeat_at ?? l.last_heartbeat_at,
                  is_in_session: updated.is_in_session ?? l.is_in_session }
              : l
          )
          return [...mapped].sort(compareListeners)
        })
      })
      .subscribe()
    return () => { client.removeChannel(availSub) }
  }, [])

  useEffect(() => {
    client.auth.getUser().then(async ({data:{user}}) => {
      setAuthChecked(true)
      if (!user) return
      // Remember who I am so I never see (or can book) my own listener card.
      setMyUserId(user.id)
      client.from('sessions').select('id', { count: 'exact', head: true })
        .eq('seeker_id', user.id).eq('is_free_trial', true).eq('status', 'completed')
        .then(({ count }) => { if ((count ?? 0) >= MAX_FREE_TRIALS) setTrialAvailable(false) })
      const {data} = await client.from('users').select('wallet_balance').eq('id',user.id).single()
      if (data) {
        setBalance(data.wallet_balance as number | null)
      }

      // Only subscribe to incoming sessions if user is an approved listener — avoids
      // wasteful realtime connections for regular seekers
      const { data: lp } = await client.from('listener_profiles').select('is_approved, rate_per_min').eq('user_id', user.id).maybeSingle()
      if (lp?.is_approved) {
        setMyTextRate(lp.rate_per_min != null ? Number(lp.rate_per_min) : null)
        if (channelRef.current) client.removeChannel(channelRef.current)
        const channel = client.channel(`browse-incoming-${user.id}`)
          .on('postgres_changes', {
            event: 'INSERT',
            schema: 'public',
            table: 'sessions',
            filter: `listener_id=eq.${user.id}`,
          }, (payload) => {
            setIncomingSession(payload.new as { id: string; duration_mins: number; session_type: string; amount_held: number; platform_fee?: number | null })
          })
          .subscribe()
        channelRef.current = channel
      }
    })

    return () => {
      if (channelRef.current) client.removeChannel(channelRef.current)
    }
  }, [])

  async function loadListeners(silent = false) {
    // Only show skeleton on the initial load (no existing listeners in state).
    // Background polls must be silent so the online→offline transition is visible
    // immediately when the poll completes — a skeleton flash during a poll looks
    // like the state "reset" and confuses listeners checking their own visibility.
    if (!silent) setLoading(true)
    const params = new URLSearchParams()
    if (tag  !== 'all') params.set('tag',  tag)
    if (lang !== 'all') params.set('lang', lang)
    try {
      params.set('_t', Date.now().toString())
      const res = await fetch(`/api/listeners?${params}`, { cache: 'no-store' })
      if (!res.ok) throw new Error('Failed to load')
      const { listeners: data } = await res.json()
      setListeners((data || []).map((l: Record<string, unknown>) => ({
        ...l,
        name:       ((l.users as { name?: string } | null)?.name) || 'Listener',
        avatar_url: ((l.users as { avatar_url?: string } | null)?.avatar_url),
        languages_spoken: (l.languages_spoken as string[]) || [],
      })))
    } catch {
      if (!silent) setListeners([])
    }
    if (!silent) setLoading(false)
  }

  const filtered = listeners
    // Item 1: a listener must never see their own card as bookable.
    .filter(l => !myUserId || l.user_id !== myUserId)
    // Item 2: age-range filter. A listener with no age set is only excluded
    // when a specific range is chosen (they still appear under "All ages").
    .filter(l => ageRange === 'all' || ageRangeId(l.birth_year, l.birth_month) === ageRange)
    .filter(l => {
      const q = query.trim().toLowerCase()
      if (!q) return true
      return l.name.toLowerCase().includes(q)
        || !!l.bio?.toLowerCase().includes(q)
        || (l.specialty_tags || []).some(t => (TAGS.find(x => x.id === t)?.label ?? t).toLowerCase().includes(q))
    })

  // Apply the user's chosen ordering at RENDER time only. The underlying
  // `listeners` array stays in the canonical compareListeners() order that the
  // realtime/BroadcastChannel handlers maintain, so availability behaviour is
  // completely untouched. 'best' renders that canonical order as-is.
  const visible = sortBy === 'best' ? filtered : [...filtered].sort((a, b) => {
    // Online first in EVERY mode — never bury a listener you can talk to now.
    if (a.is_available !== b.is_available) return a.is_available ? -1 : 1
    if (sortBy === 'price-low') return (a.rate_per_min || 0) - (b.rate_per_min || 0)
    if (sortBy === 'rating')    return (b.rating || 0) - (a.rating || 0)
    return 0
  })

  // ─── Availability stats for the current filter ───────────────────────────
  // Computed at render time from the already-fetched `visible` list.
  const onlineNow = visible.filter(l => l.is_available).length
  const showAvailBar = !loading && tag !== 'all'

  // Adjacent tags with at least one online listener — shown as recovery chips
  // when no listeners are online for the current tag.
  const recoveryTags = tag !== 'all' && onlineNow === 0
    ? TAGS.filter(t => t.id !== 'all' && t.id !== tag).filter(t =>
        listeners.some(l => l.is_available && l.specialty_tags?.includes(t.id))
      ).slice(0, 4)
    : []

  const ini = (n:string) => n.split(' ').map((x:string)=>x[0]||'').join('').slice(0,2).toUpperCase()||'?'
  const tagInfo = (id:string) => TAGS.find(t=>t.id===id)

  return (
    <>
      <style>{S}</style>

      {/* Incoming session toast for listeners browsing */}
      {incomingSession && (
        <div className="session-toast">
          <div>
            <div className="session-toast-text">New session request!</div>
            <div className="session-toast-sub">
              {incomingSession.duration_mins ? `${incomingSession.duration_mins} min` : ''}{' '}
              {incomingSession.session_type ?? ''}{incomingSession.amount_held ? ` · you earn ₹${estimateListenerTakeHome(incomingSession, myTextRate)}` : ' · free trial'}
            </div>
          </div>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <button
              className="btn-toast-join"
              disabled={joiningToast}
              onClick={async () => {
                // Must ACCEPT before navigating. Previously this only pushed the
                // route, leaving the session 'pending' — so the listener landed on
                // the waiting screen telling them to "open your dashboard to
                // accept", and if they didn't, the request expired and the seeker
                // was refunded. Mirrors the dashboard's accept flow.
                if (joiningToast) return
                const sess = incomingSession
                setJoiningToast(true)
                try {
                  const res = await fetch(`/api/sessions/${sess.id}/accept`, { method: 'POST' })
                  if (!res.ok) {
                    const body = await res.json().catch(() => ({}))
                    showToast(body.message || body.error || 'Could not accept — it may have expired.', 'error')
                    setIncomingSession(null)
                    return
                  }
                  setIncomingSession(null)
                  router.push(`/session/${sess.id}?name=You&duration=${sess.duration_mins}&type=${sess.session_type ?? 'text'}`)
                } catch {
                  showToast('Network error — could not accept session.', 'error')
                } finally {
                  setJoiningToast(false)
                }
              }}
            >
              {joiningToast ? 'Joining…' : 'Join →'}
            </button>
            {/* Declining explicitly refunds the seeker immediately rather than
                leaving them waiting out the full 5-minute request window. */}
            <button
              className="btn-toast-dismiss"
              title="Decline"
              onClick={async () => {
                const sess = incomingSession
                setIncomingSession(null)
                try { await fetch(`/api/sessions/${sess.id}/decline`, { method: 'POST' }) } catch { /* ignore */ }
              }}
            >✕</button>
          </div>
        </div>
      )}

      <WelcomeBanner
        trialAvailable={trialAvailable}
        listenerGridRef={listenerGridRef}
        onDismiss={(topic) => {
          // Pre-filter the listener grid to the user's topic intent when
          // the onboarding modal closes — so they immediately see relevant
          // listeners rather than the generic "All" view.
          if (topic && TAGS.some(t => t.id === topic)) setTag(topic)
        }}
      />
      <div className="head">
        <div className="wrap head-row">
          <h1>Who would you like to talk to?</h1>
          {authChecked && (myUserId ? (
            <a href="/wallet" className="wallet-chip" aria-label="Wallet balance">
              <WalletIcon size={17} aria-hidden /> {balance !== null ? `₹${balance}` : 'Wallet'}
            </a>
          ) : (
            <a href="/auth?redirect=/browse" className="wallet-chip">
              <LogIn size={17} aria-hidden /> Log in
            </a>
          ))}
        </div>
      </div>
      <div className="topbar">
        <div className="wrap">
          <div className="search-container">
            <span className="search-icon"><Search size={18} aria-hidden /></span>
            <input
              className="search-wrap"
              placeholder="Search by name or topic"
              value={query}
              onChange={e=>setQuery(e.target.value)}
              aria-label="Search listeners by name or topic"
            />
          </div>
          <div className="tag-scroll">
            {(() => {
              const activeFilters = (lang !== 'all' ? 1 : 0) + (ageRange !== 'all' ? 1 : 0) + (sortBy !== 'best' ? 1 : 0)
              return (
                <button className="btn-filters" onClick={() => setShowFilters(v => !v)} aria-expanded={showFilters}>
                  <SlidersHorizontal size={16} aria-hidden /> Filters{activeFilters > 0 && <span className="cnt">{activeFilters}</span>}
                </button>
              )
            })()}
            {TAGS.map(t=>(
              <button key={t.id} className={`tag-pill${tag===t.id?' active':''}`} onClick={()=>setTag(t.id)}>
                {t.icon} {t.label}
              </button>
            ))}
          </div>
          {showFilters && (
            <div className="filter-panel">
          <div className="tag-scroll">
            <button className={`tag-pill${lang==='all'?' active':''}`} onClick={()=>setLang('all')}>
              🌐 All languages
            </button>
            {LANGUAGES.map(l=>(
              <button key={l.id} className={`tag-pill${lang===l.id?' active':''}`} onClick={()=>setLang(l.id)}>
                {l.label}
              </button>
            ))}
          </div>
          <div className="tag-scroll">
            <button className={`tag-pill${ageRange==='all'?' active':''}`} onClick={()=>setAgeRange('all')}>
              🎂 All ages
            </button>
            {AGE_RANGES.map(r=>(
              <button key={r.id} className={`tag-pill${ageRange===r.id?' active':''}`} onClick={()=>setAgeRange(r.id)}>
                {r.label}
              </button>
            ))}
          </div>
          {/* Sort — online listeners stay first in every mode. */}
          <div className="tag-scroll">
            {SORTS.map(s=>(
              <button
                key={s.id}
                className={`tag-pill${sortBy===s.id?' active':''}`}
                onClick={()=>setSortBy(s.id)}
                title="Listeners who are online always appear first"
              >
                {s.label}
              </button>
            ))}
          </div>
            </div>
          )}
        </div>
      </div>

      {showAvailBar && (
        onlineNow > 0 ? (
          <div className="avail-bar has-online">
            <div className="avail-bar-left">
              <div className="avail-bar-dot on" />
              <span>
                {onlineNow === 1
                  ? `1 ${tagInfo(tag)?.label ?? tag} listener available right now`
                  : `${onlineNow} ${tagInfo(tag)?.label ?? tag} listeners available right now`}
              </span>
            </div>
            {trialAvailable && <span style={{opacity:0.7,fontWeight:600,fontSize:12}}>First 5 min free</span>}
          </div>
        ) : (
          <div>
            <div className="avail-bar no-online">
              <div className="avail-bar-left">
                <div className="avail-bar-dot off" />
                <span>No {tagInfo(tag)?.label ?? tag} listeners online right now</span>
              </div>
            </div>
            {recoveryTags.length > 0 && (
              <div className="avail-bar-recovery">
                <div className="avail-bar-recovery-title">Others available now:</div>
                <div className="avail-bar-recovery-chips">
                  {recoveryTags.map(t => (
                    <button
                      key={t.id}
                      className="avail-bar-recovery-chip"
                      onClick={() => setTag(t.id)}
                    >
                      <span className="dot-sm" />
                      {t.icon} {t.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )
      )}

      <div className="list" ref={listenerGridRef}>
        {loading ? (
          [1,2,3].map(i=><div key={i} className="skeleton"/>)
        ) : visible.length === 0 ? (
          <div style={{textAlign:'center',padding:'60px 20px',background:'white',borderRadius:24,border:'1.5px solid var(--border)',gridColumn:'1 / -1'}}>
            <div style={{fontSize:48,marginBottom:16}}>🔍</div>
            <h3 style={{fontSize:20,fontWeight:800,color:'var(--navy)',marginBottom:8}}>No listeners match right now</h3>
            <p style={{fontSize:15,color:'var(--gray)',lineHeight:1.7,marginBottom:24,maxWidth:400,margin:'0 auto 24px'}}>
              Our listeners are most active between 6–11 PM IST. Try broadening your topic, or check back in 30 minutes.
            </p>
            <div style={{display:'flex',gap:12,justifyContent:'center',flexWrap:'wrap'}}>
              <button
                onClick={()=>{ setTag('all'); setLang('all'); setAgeRange('all'); setSortBy('best'); setQuery('') }}
                style={{background:'var(--navy)',color:'white',border:'none',borderRadius:50,padding:'12px 24px',fontFamily:'Nunito,sans-serif',fontWeight:800,fontSize:14,cursor:'pointer'}}
              >
                Browse All Listeners
              </button>
              <a href="/support"
                style={{background:'white',color:'var(--navy)',border:'1.5px solid var(--border)',borderRadius:50,padding:'12px 24px',fontFamily:'Nunito,sans-serif',fontWeight:700,fontSize:14,display:'inline-block'}}
              >
                Explore Support Topics
              </a>
            </div>
            <p style={{marginTop:20,fontSize:13,color:'var(--gray)'}}>
              💙 Need immediate support? <a href="/faq" style={{color:'var(--teal)'}}>See crisis resources →</a>
            </p>
          </div>
        ) : visible.map(l => {
          const inSession = SHOW_LISTENER_IN_SESSION_STATUS && !!l.is_in_session
          const statusClass = inSession ? 'busy' : l.is_available ? 'on' : 'off'
          const statusLabel = inSession ? 'In a conversation' : l.is_available ? 'Available now' : 'Offline'
          // Listener-picked phrases ("People talk to me about…") when set; else the bio's first sentence.
          const bioFirstLine = (l.tagline_phrases ?? []).length > 0
            ? (l.tagline_phrases ?? []).join(' · ')
            : l.bio ? l.bio.split(/[.\n]/).filter(Boolean)[0]?.trim() : ''
          const isNew = !(l.rating > 0) && !(l.total_sessions > 0)
          const textRate  = sessionRatePerMin(Number(l.rate_per_min), 'text')
          const voiceRate = sessionRatePerMin(Number(l.rate_per_min), 'voice')
          const priceCaption = VOICE_PRICING_ENABLED ? `Text ₹${textRate}/min · Call ₹${voiceRate}/min` : `₹${textRate}/min · text or call`
          const goodFor = (l.specialty_tags||[]).slice(0,2).map(t => tagInfo(t)?.label || t)
          const langs = (l.languages_spoken||[]).slice(0,2).map(lid => {
            const label = LANGUAGES.find(x=>x.id===lid)?.label || lid
            return label.match(/\(([^)]+)\)/)?.[1] ?? label
          })
          const go = (type?: 'text' | 'voice') => router.push(`/listener/${l.user_id}${type ? `?type=${type}` : ''}`)
          return (
          <div key={l.id} className="card">
            <Link href={`/listener/${l.user_id}`} className="card-link" aria-label={`${l.name} — view profile`}>
              <div className="card-top">
                <div className="av" style={l.avatar_url ? undefined : { background: initialsColor(l.name) }}>
                  {l.avatar_url
                    ? <Avatar src={l.avatar_url} alt="" size={176} />
                    : <span aria-hidden>{ini(l.name)}</span>}
                  <div className={`dot ${statusClass}`}/>
                </div>
                <div className="meta">
                  <div className="name">
                    <span className="name-text" title={l.name}>{l.name}</span>
                    {l.is_verified && <span className="verified-chip"><BadgeCheck size={12} aria-hidden /> Verified</span>}
                  </div>
                  {bioFirstLine && <div className="card-tagline">{bioFirstLine}</div>}
                  <div className="stats">
                    {isNew
                      ? <span className="new-tag">New listener</span>
                      : <>
                          {l.rating > 0 && <span className="st"><Star size={14} fill="#FF9933" color="#FF9933" aria-hidden />{(+l.rating).toFixed(1)}</span>}
                          {l.total_sessions > 0 && <span className="st">{l.total_sessions} {l.total_sessions === 1 ? 'conversation' : 'conversations'}</span>}
                        </>}
                  </div>
                  <div className="status-row">
                    <span className={`avail-label ${statusClass}`}>{statusLabel}</span>
                    {!l.is_available && !inSession && lastOnlineLabel(l) && (
                      <span className="last-seen">{lastOnlineLabel(l)}</span>
                    )}
                  </div>
                </div>
              </div>
              {(goodFor.length > 0 || langs.length > 0) && (
                <div className="fit">
                  {goodFor.length > 0 && <div className="ln">Good for <span>{goodFor.join(' · ')}</span></div>}
                  {langs.length > 0 && <div className="ln"><Globe size={14} color="#5A7A8A" aria-hidden /><span>{langs.join(' · ')}</span></div>}
                </div>
              )}
            </Link>
            <div className="card-actions">
              {l.is_available && !inSession ? (
                <>
                  <div className="mode-btns">
                    <button className="btn-mode text" aria-label={`Text conversation with ${l.name}, ₹${textRate} per minute`} onClick={() => go('text')}>
                      <span className="bl"><MessageCircle size={16} aria-hidden /> Text</span><small>₹{textRate}/min</small>
                    </button>
                    <button className="btn-mode voice" aria-label={`Voice call with ${l.name}, ₹${voiceRate} per minute`} onClick={() => go('voice')}>
                      <span className="bl"><Phone size={16} aria-hidden /> Call</span><small>₹{voiceRate}/min</small>
                    </button>
                  </div>
                  {trialAvailable && <div className="card-caption free"><Gift size={14} aria-hidden /> First 5 min free</div>}
                </>
              ) : (
                <>
                  <div className="mode-btns">
                    {inSession ? (
                      <button className="btn-mode full busy" disabled aria-disabled>In a conversation — back soon</button>
                    ) : (
                      <button className="btn-mode full msg" onClick={() => go()}>
                        <Mail size={16} aria-hidden /> Leave a message
                      </button>
                    )}
                  </div>
                  <div className="card-caption">{priceCaption}</div>
                </>
              )}
            </div>
          </div>
          )
        })}
      </div>

    </>
  )
}

export default function BrowsePage() {
  return (
    <BrowseContent/>
  )
}
