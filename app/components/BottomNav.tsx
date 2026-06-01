'use client'
import { usePathname, useRouter } from 'next/navigation'
import NotificationsBell from './NotificationsBell'

const TABS = [
  { href: '/browse',        icon: '🔍', label: 'Browse'   },
  { href: '/history',       icon: '📋', label: 'History'  },
  { href: '/wallet',        icon: '💰', label: 'Wallet'   },
  { href: '/notifications', icon: null, label: 'Alerts'   },
  { href: '/profile',       icon: '👤', label: 'Profile'  },
]

export default function BottomNav() {
  const pathname = usePathname()
  const router = useRouter()

  const shouldHide =
    pathname === '/' ||
    pathname === '/auth' ||
    pathname.startsWith('/session/') ||
    pathname === '/become-listener' ||
    pathname === '/about' ||
    pathname === '/privacy' ||
    pathname === '/terms' ||
    pathname === '/contact' ||
    pathname === '/admin' ||
    pathname.startsWith('/admin/') ||
    pathname === '/trust' ||
    pathname === '/press' ||
    pathname === '/leanon' ||
    pathname.startsWith('/resources') ||
    pathname.startsWith('/support/') ||
    pathname === '/support' ||
    pathname.startsWith('/leanon-app-mental-health') ||
    pathname.startsWith('/anonymous-peer-support') ||
    pathname.startsWith('/need-someone-to-talk-to-india') ||
    pathname.startsWith('/get-paid-to-chat-india') ||
    pathname.startsWith('/delhi') ||
    pathname.startsWith('/mumbai') ||
    pathname.startsWith('/bengaluru') ||
    pathname.startsWith('/hyderabad') ||
    pathname.startsWith('/blog') ||
    pathname.startsWith('/faq') ||
    pathname.startsWith('/emotional-support') ||
    pathname.startsWith('/anonymous-support-online') ||
    pathname.startsWith('/someone-to-talk-to-at-night') ||
    pathname.startsWith('/alternatives-to-therapy-india') ||
    pathname.startsWith('/feeling-lonely-in-india') ||
    pathname.startsWith('/online-emotional-support-india') ||
    pathname.startsWith('/our-story') ||
    pathname.startsWith('/why-leanon') ||
    pathname.startsWith('/how-leanon-works') ||
    pathname.startsWith('/is-leanon-safe')

  if (shouldHide) return null

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@600;700&display=swap');
        .bottom-nav{
          position:fixed;bottom:0;left:0;right:0;z-index:100;
          background:white;border-top:1.5px solid #D5EEF6;
          display:flex;justify-content:center;
          padding-bottom:env(safe-area-inset-bottom,0px);
        }
        .bottom-nav-inner{
          width:100%;max-width:540px;display:flex;
        }
        .nav-tab{
          flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;
          padding:10px 0 8px;cursor:pointer;border:none;background:transparent;
          font-family:'Nunito',sans-serif;font-weight:600;font-size:11px;
          color:#5A7A8A;transition:color .15s;gap:3px;
        }
        .nav-tab.active{color:#0F4867;}
        .nav-tab-icon{font-size:20px;line-height:1;}
      `}</style>
      <nav className="bottom-nav">
        <div className="bottom-nav-inner">
          {TABS.map(tab => (
            <button
              key={tab.href}
              className={`nav-tab${pathname === tab.href || pathname.startsWith(tab.href + '/') ? ' active' : ''}`}
              onClick={() => router.push(tab.href)}
            >
              <span className="nav-tab-icon">
                {tab.icon === null
                  ? <NotificationsBell />
                  : tab.icon
                }
              </span>
              {tab.label}
            </button>
          ))}
        </div>
      </nav>
    </>
  )
}
