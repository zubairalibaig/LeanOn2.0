'use client'
import { usePathname } from 'next/navigation'

const SUPPORT_PHONE = '918971149279'
const PREFILL_MSG = 'Hi, I need help with LeanOn'
const WA_URL = `https://wa.me/${SUPPORT_PHONE}?text=${encodeURIComponent(PREFILL_MSG)}`

export default function WhatsAppSupport() {
  const pathname = usePathname()

  if (process.env.NEXT_PUBLIC_SHOW_SUPPORT_CHAT !== 'true') return null

  // Hide on active session pages (distraction-free) and admin
  if (pathname.startsWith('/session/') || pathname === '/admin' || pathname.startsWith('/admin/')) return null

  // Pages with BottomNav need extra bottom spacing
  const hasBottomNav =
    pathname === '/browse' ||
    pathname.startsWith('/browse/') ||
    pathname === '/history' ||
    pathname === '/wallet' ||
    pathname === '/notifications' ||
    pathname.startsWith('/notifications/') ||
    pathname === '/profile' ||
    pathname === '/dashboard' ||
    pathname.startsWith('/dashboard/')

  return (
    <>
      <style>{`
        .wa-support{
          position:fixed;
          bottom:${hasBottomNav ? '72' : '20'}px;
          right:16px;
          z-index:98;
          display:flex;
          align-items:center;
          gap:8px;
          text-decoration:none;
          animation:waFadeIn .4s ease;
        }
        .wa-support-pill{
          background:white;
          color:#0F4867;
          font-family:'Nunito',sans-serif;
          font-weight:700;
          font-size:12px;
          padding:8px 14px;
          border-radius:20px;
          box-shadow:0 2px 12px rgba(0,0,0,0.12);
          line-height:1.3;
          max-width:160px;
        }
        .wa-support-btn{
          width:52px;height:52px;
          border-radius:50%;
          background:#25D366;
          display:flex;align-items:center;justify-content:center;
          box-shadow:0 4px 16px rgba(37,211,102,0.4);
          flex-shrink:0;
        }
        .wa-support-btn svg{width:28px;height:28px;fill:white;}
        @keyframes waFadeIn{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}
        @media(max-width:400px){.wa-support-pill{display:none;}}
      `}</style>
      <a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="wa-support"
        aria-label="Chat with LeanOn support on WhatsApp"
      >
        <span className="wa-support-pill">Need help? Chat with us</span>
        <span className="wa-support-btn">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </span>
      </a>
    </>
  )
}
