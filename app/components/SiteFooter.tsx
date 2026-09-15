'use client'
import { usePathname } from 'next/navigation'

const SUPPORT_EMAIL = 'support@leanon.app'

function hideOn(pathname: string): boolean {
  if (pathname === '/') return true
  if (pathname === '/auth') return true
  if (pathname === '/contact') return true
  if (pathname.startsWith('/session/')) return true
  if (pathname === '/admin' || pathname.startsWith('/admin/')) return true
  if (pathname.startsWith('/history/') && pathname !== '/history') return true
  if (pathname.startsWith('/messages/')) return true
  return false
}

export default function SiteFooter() {
  const pathname = usePathname()
  if (hideOn(pathname)) return null

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@500;600;700;800;900&display=swap');
        .site-footer{font-family:'Nunito',sans-serif;background:#F0F8FC;border-top:1.5px solid #D5EEF6;color:#5A7A8A;padding:28px 20px calc(84px + env(safe-area-inset-bottom,0px));}
        .site-footer-inner{max-width:560px;margin:0 auto;text-align:center;}
        .sf-help{font-size:15px;font-weight:800;color:#0F4867;margin-bottom:6px;}
        .sf-sub{font-size:13px;font-weight:600;color:#5A7A8A;line-height:1.6;margin-bottom:14px;}
        .sf-actions{display:flex;flex-wrap:wrap;gap:10px;justify-content:center;margin-bottom:18px;}
        .sf-btn{display:inline-flex;align-items:center;gap:6px;font-size:13px;font-weight:800;text-decoration:none;padding:9px 18px;border-radius:50px;cursor:pointer;}
        .sf-btn-primary{background:#1A8FA0;color:#fff;}.sf-btn-ghost{background:#fff;color:#1A8FA0;border:1.5px solid #1A8FA0;}
        .sf-crisis{font-size:12px;font-weight:600;color:#5A7A8A;line-height:1.6;background:#fff;border:1.5px solid #D5EEF6;border-radius:12px;padding:10px 14px;margin-bottom:16px;}
        .sf-crisis strong{color:#0F4867;}.sf-crisis a{color:inherit;font-weight:800;}
        .sf-links{display:flex;flex-wrap:wrap;gap:6px 16px;justify-content:center;margin-bottom:12px;}.sf-links a{font-size:13px;font-weight:700;color:#1A8FA0;text-decoration:none;}
        .sf-markets{display:flex;flex-wrap:wrap;gap:6px 12px;justify-content:center;margin:4px 0 14px;}.sf-markets a{font-size:12px;font-weight:700;color:#5A7A8A;text-decoration:none;}
        .sf-copy{font-size:11px;font-weight:600;color:#9DB4C0;}
        @media (max-width:380px){.sf-actions{flex-direction:column;}.sf-btn{justify-content:center;}}
      `}</style>
      <footer className="site-footer" role="contentinfo">
        <div className="site-footer-inner">
          <p className="sf-help">Need someone to talk to?</p>
          <p className="sf-sub">LeanOn connects you with real human peer listeners for private one-to-one conversations by text or voice.</p>
          <div className="sf-actions">
            <a className="sf-btn sf-btn-primary" href="/browse">🤝 Browse listeners</a>
            <a className="sf-btn sf-btn-ghost" href="/contact">💬 Contact us</a>
          </div>
          <p className="sf-crisis">🆘 <strong>In crisis?</strong> Contact an appropriate local emergency or crisis service where you are. LeanOn is peer support, not emergency or clinical care.</p>
          <div className="sf-links">
            <a href="/faq">FAQ</a><a href="/about">About</a><a href="/trust">Trust &amp; safety</a><a href="/privacy">Privacy</a><a href="/terms">Terms</a>
          </div>
          <div className="sf-markets" aria-label="LeanOn supported markets">
            <a href="/india">India</a><a href="/usa">USA</a><a href="/uk">UK</a><a href="/canada">Canada</a><a href="/australia">Australia</a><a href="/uae">UAE</a><a href="/oman">Oman</a><a href="/kuwait">Kuwait</a><a href="/singapore">Singapore</a><a href="/malaysia">Malaysia</a>
          </div>
          <p className="sf-copy">© 2026 LeanOn · leanon.app · India-origin peer support platform serving India and supported international markets</p>
        </div>
      </footer>
    </>
  )
}
