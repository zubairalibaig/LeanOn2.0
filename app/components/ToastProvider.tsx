'use client'
import { useState, useEffect } from 'react'
import type { ToastType } from '@/lib/toast'

type Toast = { id: number; message: string; type: ToastType }

const COLORS: Record<ToastType, string> = {
  info:    '#0F4867',
  success: '#276749',
  error:   '#C0392B',
  warning: '#B7570B',
}

export default function ToastProvider() {
  const [toasts, setToasts] = useState<Toast[]>([])

  useEffect(() => {
    function handler(e: Event) {
      const { message, type } = (e as CustomEvent).detail
      const id = Date.now()
      setToasts(p => [...p, { id, message, type }])
      setTimeout(() => setToasts(p => p.filter(t => t.id !== id)), 3500)
    }
    window.addEventListener('leanon:toast', handler)
    return () => window.removeEventListener('leanon:toast', handler)
  }, [])

  if (toasts.length === 0) return null

  return (
    <div style={{ position: 'fixed', top: 16, left: '50%', transform: 'translateX(-50%)', zIndex: 9999, display: 'flex', flexDirection: 'column', gap: 8, width: 'min(92vw, 420px)', pointerEvents: 'none' }}>
      {toasts.map(t => (
        <div key={t.id} style={{ background: COLORS[t.type], color: 'white', fontFamily: 'Nunito, sans-serif', fontWeight: 700, fontSize: 14, padding: '12px 20px', borderRadius: 14, boxShadow: '0 4px 20px rgba(0,0,0,0.18)', animation: 'toastIn .2s ease', pointerEvents: 'auto' }}>
          {t.message}
        </div>
      ))}
      <style>{`@keyframes toastIn{from{opacity:0;transform:translateY(-8px)}to{opacity:1;transform:translateY(0)}}`}</style>
    </div>
  )
}
