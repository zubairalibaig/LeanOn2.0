export default function Home() {
  return (
    <main style={{ maxWidth: 480, margin: '0 auto', padding: '40px 20px', fontFamily: 'sans-serif' }}>
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 48 }}>
        <span style={{ fontWeight: 700, fontSize: 20, color: '#1E3D5C' }}>Lean<span style={{ color: '#F7941D' }}>On</span></span>
        <a href="/auth" style={{ background: '#F7941D', color: 'white', padding: '8px 20px', borderRadius: 12, fontWeight: 700, textDecoration: 'none', fontSize: 14 }}>Get started</a>
      </nav>
      <div style={{ textAlign: 'center', marginBottom: 48 }}>
        <h1 style={{ fontSize: 40, fontWeight: 800, color: '#1E3D5C', lineHeight: 1.2, marginBottom: 16 }}>Someone to lean on, <span style={{ color: '#F7941D' }}>anytime.</span></h1>
        <p style={{ color: '#4A7FA5', fontSize: 17, lineHeight: 1.6, marginBottom: 32 }}>Talk to real people who have been through what you are going through. No appointments. No stigma.</p>
        <a href="/auth" style={{ background: '#F7941D', color: 'white', padding: '16px 32px', borderRadius: 14, fontWeight: 700, textDecoration: 'none', fontSize: 16, display: 'inline-block' }}>Start your free 5-min chat</a>
      </div>
    </main>
  )
}

