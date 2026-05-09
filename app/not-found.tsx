import type { Metadata } from 'next'
export const metadata: Metadata = { title: '404 — Page not found · LeanOn' }

const S = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
  body{font-family:'Nunito',sans-serif;color:#0F4867;min-height:100vh;display:flex;align-items:center;justify-content:center;
    background:radial-gradient(ellipse 90% 55% at 0% 0%, #C2E4F2 0%, #DAEEF8 22%, #FFFFFF 58%);}
  a{text-decoration:none;}
  .wrap{text-align:center;padding:40px 24px;max-width:400px;}
  .owl{font-size:72px;margin-bottom:24px;}
  h1{font-size:80px;font-weight:900;color:#0F4867;line-height:1;margin-bottom:8px;}
  h2{font-size:22px;font-weight:800;color:#0F4867;margin-bottom:12px;}
  p{font-size:15px;color:#5A7A8A;font-weight:500;line-height:1.6;margin-bottom:32px;}
  .btns{display:flex;flex-direction:column;gap:10px;max-width:260px;margin:0 auto;}
  .btn-primary{background:#FF9933;color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:16px;padding:15px 28px;border-radius:50px;border:none;cursor:pointer;box-shadow:0 4px 16px rgba(255,153,51,0.3);}
  .btn-outline{background:transparent;color:#1A8FA0;font-family:'Nunito',sans-serif;font-weight:700;font-size:15px;padding:13px 28px;border-radius:50px;border:2px solid #1A8FA0;cursor:pointer;}
`

export default function NotFound() {
  return (
    <>
      <style>{S}</style>
      <div className="wrap">
        <div className="owl">🦉</div>
        <h1>404</h1>
        <h2>Hoot! Page not found.</h2>
        <p>The page you&apos;re looking for doesn&apos;t exist — but someone to talk to always does.</p>
        <div className="btns">
          <a href="/"><button className="btn-primary">Go home →</button></a>
          <a href="/browse"><button className="btn-outline">Find a listener</button></a>
        </div>
      </div>
    </>
  )
}
