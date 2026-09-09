'use client'
import { useState, useEffect, useRef, RefObject } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase'
import { LANGUAGES, PLATFORM_FEE, AGE_RANGES, ageRangeId } from '@/lib/constants'
import { showToast } from '@/lib/toast'
import Avatar from '@/app/components/Avatar'

// Post-login welcome banner / onboarding modal
// New users (leanon_welcome_new in sessionStorage) see a full-screen overlay
// that explains the free trial and pushes them to pick a listener.
// Returning but un-onboarded users see the original thin strip.
function WelcomeBanner({
  listenerGridRef,
  onDismiss,
}: {
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

  // Thin strip for returning but un-onboarded users (unchanged)
  return (
    <div style={{background:'var(--navy)',color:'white',padding:'12px 20px',display:'flex',alignItems:'center',justifyContent:'space-between',gap:12,fontFamily:'Nunito,sans-serif'}}>
      <div style={{flex:1}}>
        <p style={{fontSize:14,fontWeight:800,margin:0,marginBottom:2}}>Not sure where to start?</p>
        <p style={{fontSize:12,fontWeight:600,opacity:0.8,margin:0}}>Browse listeners by topic → Find one you like → Start a 5-min session</p>
      </div>
      <button onClick={() => { setShow(false); localStorage.setItem('leanon_onboarded','1') }} style={{background:'none',border:'none',color:'white',cursor:'pointer',fontSize:18,fontWeight:900,padding:0,lineHeight:1}}>✕</button>
    </div>
  )
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
  is_verified?: boolean
  specialty_tags: string[]
  languages_spoken: string[]
  avatar_url?: string
  birth_year?: number | null
  birth_month?: number | null
  last_heartbeat_at?: string | null
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
.topbar{position:sticky;top:0;z-index:50;background:rgba(255,255,255,0.95);backdrop-filter:blur(8px);border-bottom:1px solid var(--border);padding:14px 20px;}
.topbar-row{display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;}
.topbar h1{font-size:20px;font-weight:900;color:var(--navy);}
.wallet-chip{display:flex;align-items:center;gap:6px;background:var(--light);padding:8px 14px;border-radius:50px;font-weight:800;font-size:14px;color:var(--navy);cursor:pointer;border:1.5px solid var(--border);}
.search-container{width:100%;max-width:600px;margin:0 auto 12px;position:relative;}
.search-icon{position:absolute;left:16px;top:50%;transform:translateY(-50%);font-size:16px;pointer-events:none;}
.search-wrap{width:100%;padding:12px 16px 12px 44px;border-radius:50px;border:1.5px solid var(--border);font-family:'Nunito',sans-serif;font-size:15px;font-weight:600;color:var(--navy);background:white;outline:none;display:block;box-sizing:border-box;}
.search-wrap:focus{border-color:var(--navy);}
.search-wrap::placeholder{color:#B0C8D8;font-weight:400;}
.filter-container{background:white;border-radius:24px;padding:12px 0 8px;margin-bottom:4px;}
.tag-scroll{display:flex;gap:8px;overflow-x:auto;padding-bottom:2px;}
.tag-scroll::-webkit-scrollbar{display:none;}
.tag-pill{flex-shrink:0;display:flex;align-items:center;gap:5px;padding:7px 14px;border-radius:50px;font-size:12px;font-weight:700;border:1.5px solid var(--border);background:white;color:var(--gray);cursor:pointer;transition:all .15s;white-space:nowrap;}
.tag-pill.active{background:var(--navy);color:white;border-color:var(--navy);}
/* Bottom padding clears the fixed BottomNav — previously supplied by the
   listener-recruitment CTA that used to sit below this list. */
.list{padding:16px 20px 96px;display:grid;grid-template-columns:1fr;gap:14px;max-width:1200px;margin:0 auto;}
@media(min-width:640px){.list{grid-template-columns:1fr 1fr;}}
@media(min-width:960px){.list{grid-template-columns:1fr 1fr 1fr;}}
.card{background:white;border:1.5px solid var(--border);border-radius:20px;padding:18px;cursor:pointer;transition:all .2s;box-shadow:0 1px 4px rgba(15,72,103,.04);}
.card:hover{border-color:var(--teal);box-shadow:0 4px 20px rgba(15,72,103,.08);transform:translateY(-2px);}
.card-top{display:flex;gap:12px;align-items:flex-start;margin-bottom:10px;}
.av{width:48px;height:48px;border-radius:16px;background:var(--teal);display:flex;align-items:center;justify-content:center;font-weight:900;font-size:16px;color:white;flex-shrink:0;position:relative;overflow:hidden;}
.av img{width:100%;height:100%;object-fit:cover;border-radius:16px;}
.dot{position:absolute;bottom:-2px;right:-2px;width:12px;height:12px;border-radius:50%;border:2px solid white;}
.dot.on{background:#34C759;}.dot.off{background:#C7C7CC;}
.meta{flex:1;min-width:0;}
.name{font-size:15px;font-weight:800;color:var(--navy);margin-bottom:3px;}
.stats{display:flex;align-items:center;gap:10px;font-size:12px;color:var(--gray);font-weight:600;}
.rate{font-size:15px;font-weight:900;color:var(--navy);flex-shrink:0;}
.rate span{font-size:11px;font-weight:500;color:var(--gray);}
.bio{font-size:13px;color:#4A6B7E;line-height:1.6;margin-bottom:12px;font-weight:500;}
.tags{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:14px;}
.tag-badge{background:rgba(26,143,160,.1);color:var(--navy);font-size:11px;font-weight:700;padding:4px 10px;border-radius:50px;}
.verified-chip{background:#E6F6FF;color:#0F4867;font-size:10px;font-weight:800;padding:3px 7px;border-radius:50px;border:1.5px solid #B8D9F0;}
.btns{display:flex;gap:8px;align-items:center;}
.btn-chat{flex:1;color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:13px;padding:11px;border-radius:12px;border:none;cursor:pointer;transition:all .2s;}
.btn-chat.avail{background:#34C759;box-shadow:0 2px 10px rgba(52,199,89,.3);}
.btn-chat.avail:hover{background:#28a745;}
.btn-chat.busy{background:var(--orange);}
.btn-chat.busy:hover{background:#e8861a;}
.btn-chat.offline{background:#C7C7CC;cursor:not-allowed;box-shadow:none;}
.btn-voice{background:white;color:var(--navy);font-family:'Nunito',sans-serif;font-weight:700;font-size:13px;padding:11px 16px;border-radius:12px;border:1.5px solid var(--border);cursor:pointer;white-space:nowrap;}
.avail-label{font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.04em;}
.avail-label.on{color:#34C759;}.avail-label.off{color:#C7C7CC;}
.skeleton{background:linear-gradient(90deg,#e8e8e4 25%,#f2f2ee 50%,#e8e8e4 75%);background-size:200% 100%;animation:shimmer 1.5s infinite;border-radius:12px;height:160px;}
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
.free-nudge{margin:0 20px 0;background:linear-gradient(135deg,#0F4867 0%,#1A6E8A 100%);border-radius:20px 20px 0 0;padding:16px 18px 12px;display:flex;align-items:center;gap:12px;position:relative;overflow:hidden;}
.free-nudge::after{content:'';position:absolute;inset:0;background:rgba(255,153,51,.07);pointer-events:none;}
.free-nudge-icon{font-size:28px;line-height:1;flex-shrink:0;}
.free-nudge-text{flex:1;min-width:0;}
.free-nudge-title{font-size:15px;font-weight:900;color:white;margin-bottom:3px;line-height:1.2;}
.free-nudge-sub{font-size:12px;color:rgba(213,238,246,0.75);font-weight:600;line-height:1.4;}
.free-nudge-close{background:rgba(255,255,255,0.12);border:none;color:rgba(255,255,255,0.7);width:28px;height:28px;border-radius:50%;cursor:pointer;font-size:14px;font-weight:900;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-family:'Nunito',sans-serif;}
.free-nudge-arrow{text-align:center;padding:6px 20px 0;color:rgba(26,143,160,0.9);font-size:20px;line-height:1;animation:bounce 1.2s ease-in-out infinite;}
@keyframes bounce{0%,100%{transform:translateY(0)}50%{transform:translateY(5px)}}
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
  const [query, setQuery]     = useState('')
  const [listeners, setListeners] = useState<Listener[]>([])
  const [loading, setLoading] = useState(true)
  const [balance, setBalance] = useState<number|null>(null)
  const [incomingSession, setIncomingSession] = useState<{
    id: string; duration_mins: number; session_type: string; amount_held: number
  } | null>(null)
  const channelRef = useRef<ReturnType<typeof client.channel> | null>(null)
  const listenerGridRef = useRef<HTMLDivElement | null>(null)
  // Free-trial nudge banner — shown to users who signed up within the last 30
  // days and haven't had a single session yet. Disappears after first session.
  const [showFreeNudge, setShowFreeNudge] = useState(false)

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
    }, 60_000)

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
        const updated = payload.new as { user_id: string; is_available: boolean; last_heartbeat_at?: string | null }
        setListeners(prev => {
          const mapped = prev.map(l =>
            l.user_id === updated.user_id
              // is_available handling is unchanged. last_heartbeat_at is carried
              // through when present (migration 046 sets REPLICA IDENTITY FULL,
              // so UPDATE payloads include it) to keep the "last online" label
              // and the offline ordering fresh without a refetch.
              ? { ...l, is_available: updated.is_available,
                  last_heartbeat_at: updated.last_heartbeat_at ?? l.last_heartbeat_at }
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
      if (!user) return
      // Remember who I am so I never see (or can book) my own listener card.
      setMyUserId(user.id)
      const {data} = await client.from('users').select('wallet_balance,created_at').eq('id',user.id).single()
      if (data) {
        setBalance(data.wallet_balance)

        // Free-trial nudge: new user (joined ≤30 days ago) with 0 seeker sessions.
        // Check localStorage first — if they dismissed it, respect that.
        const dismissed = localStorage.getItem('leanon_nudge_dismissed')
        if (!dismissed && data.created_at) {
          const joinedDaysAgo = (Date.now() - new Date(data.created_at).getTime()) / 86_400_000
          if (joinedDaysAgo <= 30) {
            const { count } = await client
              .from('sessions')
              .select('id', { count: 'exact', head: true })
              .eq('seeker_id', user.id)
            if ((count ?? 0) === 0) setShowFreeNudge(true)
          }
        }
      }

      // Only subscribe to incoming sessions if user is an approved listener — avoids
      // wasteful realtime connections for regular seekers
      const { data: lp } = await client.from('listener_profiles').select('is_approved').eq('user_id', user.id).maybeSingle()
      if (lp?.is_approved) {
        if (channelRef.current) client.removeChannel(channelRef.current)
        const channel = client.channel(`browse-incoming-${user.id}`)
          .on('postgres_changes', {
            event: 'INSERT',
            schema: 'public',
            table: 'sessions',
            filter: `listener_id=eq.${user.id}`,
          }, (payload) => {
            setIncomingSession(payload.new as { id: string; duration_mins: number; session_type: string; amount_held: number })
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
    .filter(l => !query
      || l.name.toLowerCase().includes(query.toLowerCase())
      || l.bio?.toLowerCase().includes(query.toLowerCase()))

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
              {incomingSession.session_type ?? ''}{incomingSession.amount_held ? ` · ₹${incomingSession.amount_held}` : ''}
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
        listenerGridRef={listenerGridRef}
        onDismiss={(topic) => {
          // Pre-filter the listener grid to the user's topic intent when
          // the onboarding modal closes — so they immediately see relevant
          // listeners rather than the generic "All" view.
          if (topic && TAGS.some(t => t.id === topic)) setTag(topic)
        }}
      />
      <div className="topbar">
        <div className="topbar-row">
          <h1>Find a listener</h1>
          <a href="/wallet" className="wallet-chip">
            💰 {balance !== null ? `₹${balance}` : 'Wallet'}
          </a>
        </div>
        <div className="search-container">
          <span className="search-icon">🔍</span>
          <input
            className="search-wrap"
            placeholder="Search listeners..."
            value={query}
            onChange={e=>setQuery(e.target.value)}
            aria-label="Search listeners by name or topic"
          />
        </div>
        <div className="filter-container">
          <div className="tag-scroll">
            {TAGS.map(t=>(
              <button key={t.id} className={`tag-pill${tag===t.id?' active':''}`} onClick={()=>setTag(t.id)}>
                {t.icon} {t.label}
              </button>
            ))}
          </div>
          <div className="tag-scroll" style={{marginTop:8}}>
            <button className={`tag-pill${lang==='all'?' active':''}`} onClick={()=>setLang('all')}>
              🌐 All languages
            </button>
            {LANGUAGES.map(l=>(
              <button key={l.id} className={`tag-pill${lang===l.id?' active':''}`} onClick={()=>setLang(l.id)}>
                {l.label}
              </button>
            ))}
          </div>
          <div className="tag-scroll" style={{marginTop:8}}>
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
          <div className="tag-scroll" style={{marginTop:8}}>
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
            <span style={{opacity:0.7,fontWeight:600,fontSize:12}}>First 5 min free</span>
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

      {showFreeNudge && (
        <div>
          <div className="free-nudge">
            <div className="free-nudge-icon">💙</div>
            <div className="free-nudge-text">
              <div className="free-nudge-title">You have 2 free sessions.</div>
              <div className="free-nudge-sub">Pick a listener — your first conversation is completely private.</div>
            </div>
            <button
              className="free-nudge-close"
              aria-label="Dismiss"
              onClick={() => {
                setShowFreeNudge(false)
                try { localStorage.setItem('leanon_nudge_dismissed', '1') } catch { /* ignore */ }
              }}
            >✕</button>
          </div>
          <div className="free-nudge-arrow">↓</div>
        </div>
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
        ) : visible.map(l => (
          <div key={l.id} className="card" onClick={()=>router.push(`/listener/${l.user_id}`)}>
            <div className="card-top">
              <div className="av">
                {l.avatar_url
                  ? <Avatar src={l.avatar_url} alt={l.name} size={96} />
                  : ini(l.name)}
                <div className={`dot ${l.is_available?'on':'off'}`}/>
              </div>
              <div className="meta">
                <div className="name">
                  {l.name}{l.is_verified && <>&nbsp;<span className="verified-chip">✓ Verified</span></>}
                </div>
                <div className="stats">
                  {l.rating > 0 && <span>⭐ {(+l.rating).toFixed(1)}</span>}
                  {l.total_sessions > 0 && <span>🗣️ {l.total_sessions} sessions</span>}
                </div>
              </div>
              <div style={{textAlign:'right',flexShrink:0}}>
                <div className="rate">₹{l.rate_per_min}<span>/min</span></div>
                <div className={`avail-label ${l.is_available?'on':'off'}`}>{l.is_available?'● Online':'● Offline'}</div>
                {/* Last-online hint — only for offline listeners; an online tile
                    already says "● Online". Hidden entirely once a listener has
                    been away long enough that the label would only signal
                    dormancy (see lastOnlineLabel). */}
                {!l.is_available && lastOnlineLabel(l) && (
                  <div style={{fontSize:11,fontWeight:600,color:'var(--gray)',marginTop:2,whiteSpace:'nowrap'}}>
                    {lastOnlineLabel(l)}
                  </div>
                )}
              </div>
            </div>
            <p className="bio">{l.bio}</p>
            <div className="tags">
              {(l.specialty_tags||[]).slice(0,3).map((t) => {
                const info = tagInfo(t)
                return <span key={t} className="tag-badge">{info?.icon} {info?.label||t}</span>
              })}
              {(l.languages_spoken||[]).slice(0,2).map((lid) => {
                const info = LANGUAGES.find(x=>x.id===lid)
                return <span key={lid} className="tag-badge" style={{background:'rgba(255,153,51,.1)',color:'#7A4A00'}}>🌐 {info?.label||lid}</span>
              })}
            </div>
            <div className="btns">
              <button
                className={`btn-chat ${l.is_available ? 'avail' : 'offline'}`}
                onClick={e=>{e.stopPropagation(); if(l.is_available) router.push(`/listener/${l.user_id}?type=text`)}}
              >
                {l.is_available ? '🎁 Try free · 5 min' : '💬 Currently offline'}
              </button>
              {l.is_available && (
                <button className="btn-voice" onClick={e=>{e.stopPropagation();router.push(`/listener/${l.user_id}?type=voice`)}}>
                  🎙️
                </button>
              )}
            </div>
            {l.is_available && (
              <div style={{fontSize:11,color:'#5A7A8A',fontWeight:600,textAlign:'center',marginTop:4}}>
                or ₹{Math.round(l.rate_per_min*15)+PLATFORM_FEE} for 15 min paid session
              </div>
            )}
          </div>
        ))}
      </div>

    </>
  )
}

export default function BrowsePage() {
  return (
    <BrowseContent/>
  )
}
