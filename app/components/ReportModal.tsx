'use client'
import { useState, useEffect, useRef } from 'react'

const REASONS = [
  { value: 'inappropriate_content', label: 'Inappropriate language' },
  { value: 'harassment',            label: 'Harassment or bullying' },
  { value: 'impersonation',         label: 'Impersonation' },
  { value: 'spam',                  label: 'Spam or solicitation' },
  { value: 'self_harm_risk',        label: 'Self-harm concern' },
  { value: 'other',                 label: 'Other' },
]

type Props = {
  targetUserId: string
  targetName:   string
  sessionId?:   string
  onClose:      () => void
}

export default function ReportModal({ targetUserId, targetName, sessionId, onClose }: Props) {
  const [reason,    setReason]    = useState('')
  const [details,   setDetails]   = useState('')
  const [loading,   setLoading]   = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const firstBtn = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    firstBtn.current?.focus()

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = prev
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [onClose])

  async function submit() {
    if (!reason || !details.trim() || details.trim().length < 10) return
    setLoading(true)
    try {
      const res = await fetch('/api/report', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          reportedUserId: targetUserId,
          sessionId:      sessionId ?? undefined,
          type:           reason,
          description:    details.trim(),
        }),
      })
      if (res.ok) {
        setSubmitted(true)
        setTimeout(onClose, 2500)
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Report user"
      style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(2px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: 20,
      }}
      onClick={e => { if (e.target === e.currentTarget) onClose() }}
    >
      <div style={{
        background: 'white', borderRadius: 20, padding: '28px 24px',
        width: '100%', maxWidth: 400,
        fontFamily: "'Nunito', sans-serif",
        boxShadow: '0 20px 60px rgba(0,0,0,0.25)',
      }}>
        {submitted ? (
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <div style={{ fontSize: 48, marginBottom: 12 }}>🙏</div>
            <div style={{ fontSize: 18, fontWeight: 800, color: '#0F4867', marginBottom: 8 }}>
              Thank you for reporting
            </div>
            <div style={{ fontSize: 14, color: '#5A7A8A', fontWeight: 500, lineHeight: 1.6 }}>
              We&apos;ll review this within 24 hours. Your safety matters to us.
            </div>
          </div>
        ) : (
          <>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
              <div style={{ fontSize: 18, fontWeight: 900, color: '#0F4867' }}>
                Report {targetName}
              </div>
              <button
                ref={firstBtn}
                onClick={onClose}
                style={{ background: 'none', border: 'none', fontSize: 20, cursor: 'pointer', color: '#5A7A8A', lineHeight: 1 }}
                aria-label="Close"
              >✕</button>
            </div>

            <div style={{ marginBottom: 16 }}>
              <label style={{ fontSize: 12, fontWeight: 800, color: '#5A7A8A', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: 8 }}>
                What happened?
              </label>
              <select
                value={reason}
                onChange={e => setReason(e.target.value)}
                style={{
                  width: '100%', padding: '10px 12px', border: '1.5px solid #D5EEF6',
                  borderRadius: 10, fontFamily: "'Nunito', sans-serif",
                  fontSize: 14, fontWeight: 600, color: '#0F4867', outline: 'none',
                  background: 'white',
                }}
              >
                <option value="">Select a reason…</option>
                {REASONS.map(r => (
                  <option key={r.value} value={r.value}>{r.label}</option>
                ))}
              </select>
            </div>

            <div style={{ marginBottom: 20 }}>
              <label style={{ fontSize: 12, fontWeight: 800, color: '#5A7A8A', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: 8 }}>
                Details <span style={{ fontWeight: 500, textTransform: 'none' }}>(min 10 chars)</span>
              </label>
              <textarea
                value={details}
                onChange={e => setDetails(e.target.value.slice(0, 500))}
                placeholder="Please describe what happened…"
                rows={4}
                style={{
                  width: '100%', padding: '10px 12px', border: '1.5px solid #D5EEF6',
                  borderRadius: 10, fontFamily: "'Nunito', sans-serif",
                  fontSize: 14, fontWeight: 500, color: '#0F4867', outline: 'none',
                  resize: 'vertical', boxSizing: 'border-box',
                }}
              />
              <div style={{ fontSize: 11, color: '#8AAAB8', textAlign: 'right', marginTop: 4 }}>
                {details.length}/500
              </div>
            </div>

            <button
              onClick={submit}
              disabled={loading || !reason || details.trim().length < 10}
              style={{
                width: '100%', padding: '14px',
                background: loading || !reason || details.trim().length < 10 ? '#ccc' : '#FF3B30',
                color: 'white', border: 'none', borderRadius: 12,
                fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: 15,
                cursor: loading || !reason || details.trim().length < 10 ? 'not-allowed' : 'pointer',
              }}
            >
              {loading ? 'Submitting…' : 'Submit Report'}
            </button>
            <p style={{ fontSize: 12, color: '#8AAAB8', textAlign: 'center', marginTop: 12, marginBottom: 0 }}>
              All reports are anonymous and reviewed within 24 hours.
            </p>
          </>
        )}
      </div>
    </div>
  )
}
