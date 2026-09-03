'use client'
import { useState, useEffect } from 'react'

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <a
      href="/auth"
      style={{
        position: 'fixed',
        bottom: 80,
        right: 20,
        zIndex: 999,
        background: '#FF9933',
        color: 'white',
        fontFamily: "'Nunito', sans-serif",
        fontWeight: 800,
        fontSize: 14,
        padding: '13px 22px',
        borderRadius: 50,
        boxShadow: '0 4px 20px rgba(255,153,51,0.45)',
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        whiteSpace: 'nowrap',
        animation: 'floatIn 0.3s ease',
      }}
      aria-label="Start peer support session"
    >
      <style>{`@keyframes floatIn{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}`}</style>
      <span>💬</span> Start now
    </a>
  )
}
