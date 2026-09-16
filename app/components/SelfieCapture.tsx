'use client'
import { useRef, useState, useEffect, useCallback } from 'react'

interface Props {
  onCapture: (file: File) => void
  preview?: string | null
  loading?: boolean
  hasError?: boolean
}

// Selfie-only photo capture using the device camera (getUserMedia).
// Works on both mobile and desktop — never opens a file picker.
// The live preview is mirrored so users see themselves as in a mirror;
// the captured image is also mirrored to match that expectation.
export default function SelfieCapture({ onCapture, preview, loading, hasError }: Props) {
  const [open, setOpen]         = useState(false)
  const [stream, setStream]     = useState<MediaStream | null>(null)
  const [camError, setCamError] = useState<string | null>(null)
  const [busy, setBusy]         = useState(false)
  const [videoReady, setVideoReady] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  // Stop all camera tracks — call before closing the modal
  const stopStream = useCallback((s: MediaStream | null) => {
    s?.getTracks().forEach(t => t.stop())
  }, [])

  // Always stop the stream when the component unmounts
  useEffect(() => () => { stopStream(stream) }, [stream, stopStream])

  // Wire the stream to the <video> element once the modal is open
  useEffect(() => {
    if (open && stream && videoRef.current) {
      setVideoReady(false)
      videoRef.current.srcObject = stream
      videoRef.current.play().catch(() => {})
    }
  }, [open, stream])

  const openCamera = useCallback(async () => {
    setCamError(null)
    if (!navigator?.mediaDevices?.getUserMedia) {
      setCamError('Your browser does not support camera access. Try Chrome or Safari.')
      return
    }
    try {
      const s = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'user', width: { ideal: 720 }, height: { ideal: 720 } },
      })
      setStream(s)
      setOpen(true)
    } catch (e) {
      const name = (e as Error).name
      if (name === 'NotAllowedError' || name === 'PermissionDeniedError') {
        setCamError('Camera access denied. Click the camera icon in your browser address bar and allow access, then try again.')
      } else if (name === 'NotFoundError' || name === 'DevicesNotFoundError') {
        setCamError('No camera found on this device.')
      } else {
        setCamError('Could not start camera. Please try again.')
      }
    }
  }, [])

  const capture = useCallback(() => {
    const video = videoRef.current
    if (!video || !videoReady) return
    setBusy(true)
    const canvas = document.createElement('canvas')
    canvas.width  = video.videoWidth  || 640
    canvas.height = video.videoHeight || 640
    const ctx = canvas.getContext('2d')
    if (!ctx) { setBusy(false); return }
    // Draw unmirrored — the live preview is mirrored via CSS (natural selfie feel)
    // but the stored image should be the real camera orientation so text/logos
    // in clothing read correctly in the profile.
    ctx.drawImage(video, 0, 0)
    canvas.toBlob(blob => {
      setBusy(false)
      if (!blob) return
      stopStream(stream)
      setStream(null)
      setOpen(false)
      onCapture(new File([blob], 'selfie.jpg', { type: 'image/jpeg' }))
    }, 'image/jpeg', 0.92)
  }, [stream, stopStream, onCapture, videoReady])

  const close = useCallback(() => {
    stopStream(stream)
    setStream(null)
    setOpen(false)
  }, [stream, stopStream])

  return (
    <>
      {/* ── Trigger ──────────────────────────────────────────────────── */}
      <div
        onClick={openCamera}
        style={{
          border: `2px dashed ${hasError ? '#FF3B30' : '#B0D4E8'}`,
          borderRadius: 14,
          padding: '18px 12px 14px',
          textAlign: 'center',
          cursor: 'pointer',
          background: hasError ? 'rgba(255,59,48,0.04)' : 'rgba(240,248,252,0.7)',
          transition: 'border-color .15s',
          userSelect: 'none',
        }}
      >
        {preview ? (
          <img
            src={preview}
            alt="Selfie preview"
            style={{ width: 96, height: 96, borderRadius: '50%', objectFit: 'cover', marginBottom: 8, display: 'block', margin: '0 auto 8px' }}
          />
        ) : (
          <div style={{ fontSize: 40, marginBottom: 6 }}>🤳</div>
        )}
        <div style={{ fontSize: 14, fontWeight: 700, color: '#0F4867' }}>
          {loading ? 'Uploading…' : preview ? 'Retake selfie' : 'Take a selfie'}
        </div>
        <div style={{ fontSize: 11, color: '#5A7A8A', fontWeight: 600, marginTop: 3 }}>
          Uses your camera · no file upload
        </div>
      </div>

      {/* ── Camera permission error ───────────────────────────────────── */}
      {camError && (
        <div style={{ marginTop: 8, background: 'rgba(255,59,48,0.07)', border: '1px solid rgba(255,59,48,0.25)', borderRadius: 8, padding: '9px 12px', fontSize: 12, color: '#C0392B', fontWeight: 600, lineHeight: 1.5 }}>
          {camError}
        </div>
      )}

      {/* ── Camera modal ─────────────────────────────────────────────── */}
      {open && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 9999,
          background: 'rgba(0,0,0,0.92)',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          padding: 20,
        }}>
          <div style={{ width: '100%', maxWidth: 420 }}>
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
              <span style={{ color: 'white', fontWeight: 800, fontSize: 16 }}>Take your selfie</span>
              <button
                onClick={close}
                style={{ background: 'rgba(255,255,255,0.12)', border: 'none', color: 'white', borderRadius: 50, width: 32, height: 32, cursor: 'pointer', fontSize: 16, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >✕</button>
            </div>

            {/* Live camera feed — mirrored so it feels like a selfie camera */}
            <div style={{ position: 'relative', borderRadius: 16, overflow: 'hidden', background: '#111', aspectRatio: '1' }}>
              <video
                ref={videoRef}
                autoPlay
                playsInline
                muted
                onCanPlay={() => setVideoReady(true)}
                style={{ width: '100%', height: '100%', objectFit: 'cover', transform: 'scaleX(-1)', display: 'block' }}
              />
              {/* Face oval guide */}
              <div style={{
                position: 'absolute', inset: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                pointerEvents: 'none',
              }}>
                <div style={{
                  width: '60%', height: '75%',
                  border: '2px solid rgba(255,255,255,0.45)',
                  borderRadius: '50%',
                }} />
              </div>
            </div>

            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 12, textAlign: 'center', margin: '10px 0 18px', fontWeight: 600 }}>
              Centre your face in the oval · good lighting helps
            </p>

            {/* Capture button */}
            <button
              onClick={capture}
              disabled={busy || !videoReady}
              style={{
                width: '100%', padding: '16px', borderRadius: 50,
                background: (busy || !videoReady) ? 'rgba(26,143,160,0.5)' : '#1A8FA0',
                color: 'white', border: 'none', cursor: (busy || !videoReady) ? 'default' : 'pointer',
                fontWeight: 800, fontSize: 16, fontFamily: 'inherit',
                transition: 'background .15s',
              }}
            >
              {busy ? 'Capturing…' : !videoReady ? 'Starting camera…' : '📸 Take Photo'}
            </button>
          </div>
        </div>
      )}
    </>
  )
}
