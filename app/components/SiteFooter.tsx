'use client'
import { usePathname } from 'next/navigation'

// Site-wide "how to reach us" + legal footer.
//
// WHY THIS EXISTS: until now the only footer on the platform was inlined into
// the homepage (app/page.tsx). Every other page — the SEO/support pages that
// have no nav at all, and the signed-in app pages (/browse, /wallet, /history,
// /profile) whose bottom nav has no Help tab — gave a user no way to contact
// support. This mounts one slim footer everywhere that isn't immersive.
//
// The homepage keeps its own richer footer, so this is hidden there. It is also
// hidden on interactive/immersive surfaces where a footer would intrude or
// break a full-height layout: /auth, live /session, /admin, the read-only chat
// detail, and /contact itself (you're already there).

const SUPPORT_EMAIL = 'support@leanon.app'

function hideOn(pathname: string): boolean {
  if (pathname === '/') return true            // homepage has its own footer
  if (pathname === '/auth') return true
  if (pathname === '/contact') return true
  if (pathname.startsWith('/session/')) return true
  if (pathname === '/admin' || pathname.startsWith('/admin/')) return true
  // Full-height read-only chat detail (/history/<id>) — but keep it on /history.
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
        .site-footer{
          font-family:'Nunito',sans-serif;
          background:#F0F8FC;border-top:1.5px solid #D5EEF6;
          color:#5A7A8A;
          /* Clear the fixed bottom nav (~56px) where it is present. On pages
             without the nav this is just harmless extra breathing room. */
          padding:28px 20px calc(84px + env(safe-area-inset-bottom,0px));
        }
        .site-footer-inner{max-width:560px;margin:0 auto;text-align:center;}
        .sf-help{font-size:15px;font-weight:800;color:#0F4867;margin-bottom:6px;}
        .sf-sub{font-size:13px;font-weight:600;color:#5A7A8A;line-height:1.6;margin-bottom:14px;}
        .sf-actions{display:flex;flex-wrap:wrap;gap:10px;justify-content:center;margin-bottom:18px;}
        .sf-btn{
          display:inline-flex;align-items:center;gap:6px;
          font-size:13px;font-weight:800;text-decoration:none;
          padding:9px 18px;border-radius:50px;cursor:pointer;
        }
        .sf-btn-primary{background:#1A8FA0;color:#fff;}
        .sf-btn-ghost{background:#fff;color:#1A8FA0;border:1.5px solid #1A8FA0;}
        .sf-crisis{
          font-size:12px;font-weight:600;color:#5A7A8A;line-height:1.6;
          background:#fff;border:1.5px solid #D5EEF6;border-radius:12px;
          padding:10px 14px;margin-bottom:16px;
        }
        .sf-crisis strong{color:#0F4867;}
        .sf-crisis a{color:inherit;font-weight:800;}
        .sf-links{display:flex;flex-wrap:wrap;gap:6px 16px;justify-content:center;margin-bottom:12px;}
        .sf-links a{font-size:13px;font-weight:700;color:#1A8FA0;text-decoration:none;}
        .sf-copy{font-size:11px;font-weight:600;color:#9DB4C0;}
        @media (max-width:380px){.sf-actions{flex-direction:column;}.sf-btn{justify-content:center;}}
      `}</style>
      <footer className="site-footer" role="contentinfo">
        <div className="site-footer-inner">
          <p className="sf-help">Need help or have a question?</p>
          <p className="sf-sub">We usually reply within 24 hours. Reach us any time —</p>

          <div className="sf-actions">
            <a className="sf-btn sf-btn-primary" href="/contact">💬 Contact us</a>
            <a className="sf-btn sf-btn-ghost" href={`mailto:${SUPPORT_EMAIL}`}>✉️ {SUPPORT_EMAIL}</a>
          </div>

          {/* Crisis helplines — NIMHANS + Tele-MANAS ONLY (see CLAUDE.md). */}
          <p className="sf-crisis">
            🆘 <strong>In crisis?</strong> Call{' '}
            <a href="tel:08046110007">NIMHANS 080-46110007</a> or{' '}
            <a href="tel:14416">Tele-MANAS 14416</a> — free · 24/7 · Govt of India
          </p>

          <div className="sf-links">
            <a href="/faq">FAQ</a>
            <a href="/about">About</a>
            <a href="/trust">Trust &amp; safety</a>
            <a href="/privacy">Privacy</a>
            <a href="/terms">Terms</a>
          </div>

          <p className="sf-copy">© 2026 LeanOn · leanon.app · Made in India 🇮🇳</p>
        </div>
      </footer>
    </>
  )
}
