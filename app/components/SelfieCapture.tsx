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
// The live preview is mirrored (CSS scaleX(-1)) so users see themselves
// as in a mirror; the captured canvas is NOT mirrored so stored images
// have correct orientation (text/logos on clothing read correctly).
export default function SelfieCapture({ onCapture, preview, loading, hasError }: Props) {
  const [open, setOpen]         = useState(false)
  const [stream, setStream]     = useState<MediaStream | null>(null)
  const [camError, setCamError] = useState<string | null>(null)
  const [busy, setBusy]         = useState(false)
  const [videoReady, setVideoReady] = useState(false)
  const [camStuck, setCamStuck] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  // Stop all camera tracks — call before closing the modal
  const stopStream = useCallback((s: MediaStream | null) => {
    s?.getTracks().forEach(t => t.stop())
  }, [])

  // Always stop the stream when the component unmounts
  useEffect(() => () => { stopStream(stream) }, [stream, stopStream])

  // If none of the readiness signals fires within 6 s of the modal
  // opening, show a recoverable "camera couldn't start" message.
  useEffect(() => {
    if (!open || videoReady) { setCamStuck(false); return }
    const t = setTimeout(() => setCamStuck(true), 6000)
    return () => clearTimeout(t)
  }, [open, videoReady])

  // Secondary fallback: wire stream to video when both are available.
  // The primary path calls play() directly in openCamera (within the
  // user-gesture async continuation for iOS Safari). This effect catches
  // the rare case where videoRef wasn't reachable at that moment.
  useEffect(() => {
    const video = videoRef.current
    if (!open || !stream || !video) return
    if (video.srcObject !== stream) {
      video.srcObject = stream
      video.play()
        .then(() => setVideoReady(true))
        .catch(() => {
          // Autoplay blocked — onPlaying/onLoadedMetadata still fire once
          // the stream delivers its first frame.
        })
    }
  }, [open, stream])

  const openCamera = useCallback(async () => {
    // Reset stuck state so a previous failure doesn't leave the video
    // element hidden and videoRef.current unreachable on retry.
    setCamError(null)
    setCamStuck(false)
    setVideoReady(false)

    if (!navigator?.mediaDevices?.getUserMedia) {
      setCamError('Your browser does not support camera access. Try Chrome or Safari.')
      return
    }
    try {
      const s = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'user', width: { ideal: 720 }, height: { ideal: 720 } },
      })

      // Primary play path: call play() immediately while still in the
      // user-gesture async continuation. iOS Safari invalidates the
      // autoplay token after any cross-task yield (e.g. React re-render),
      // so we must attach and play before calling setState.
      // The modal div is always in the DOM (CSS display, not conditional
      // mount) so videoRef.current is available here without a re-render.
      if (videoRef.current) {
        videoRef.current.srcObject = s
        videoRef.current.play()
          .then(() => setVideoReady(true))
          .catch(() => {
            // Token expired or autoplay blocked — the useEffect fallback
            // above will retry when open+stream state commits.
          })
      }

      setStream(s)
      setOpen(true)
    } catch (e) {
      const name = (e as Error).name
      if (name === 'NotAllowedError' || name === 'PermissionDeniedError') {
        setCamError('permission_denied')
      } else if (name === 'NotFoundError' || name === 'DevicesNotFoundError') {
        setCamError('No camera found on this device.')
      } else if (name === 'NotReadableError' || name === 'AbortError') {
        setCamError('Camera is in use by another app or browser tab. Close it and try again.')
      } else {
        setCamError('Could not start camera. Please try again.')
      }
    }
  }, [])

  const capture = useCallback(() => {
    const video = videoRef.current
    if (!video || !videoReady || video.videoWidth <= 0 || video.videoHeight <= 0) return
    setBusy(true)
    const canvas = document.createElement('canvas')
    canvas.width  = video.videoWidth  || 640
    canvas.height = video.videoHeight || 640
    const ctx = canvas.getContext('2d')
    if (!ctx) {
      setBusy(false)
      setCamError('Could not capture photo — canvas unavailable. Try closing other browser tabs and retrying.')
      return
    }
    // Draw unmirrored — the live preview is mirrored via CSS (natural selfie feel)
    // but the stored image should be the real camera orientation so text/logos
    // in clothing read correctly in the profile.
    ctx.drawImage(video, 0, 0)
    canvas.toBlob(blob => {
      setBusy(false)
      if (!blob) {
        // toBlob can return null on low-memory devices or when the JPEG encoder
        // fails. Surface a clear error rather than silently re-enabling the button.
        setCamError('Could not capture photo. Try closing other browser tabs, then tap Try again.')
        return
      }
      stopStream(stream)
      setStream(null)
      setOpen(false)
      setCamStuck(false)
      setVideoReady(false)
      onCapture(new File([blob], 'selfie.jpg', { type: 'image/jpeg' }))
    }, 'image/jpeg', 0.92)
  }, [stream, stopStream, onCapture, videoReady])

  const close = useCallback(() => {
    stopStream(stream)
    setStream(null)
    setOpen(false)
    // Reset stuck + ready so the next openCamera attempt starts clean
    // and the video element (always in DOM) is not left in stuck-recovery state.
    setCamStuck(false)
    setVideoReady(false)
    if (videoRef.current) videoRef.current.srcObject = null
  }, [stream, stopStream])

  return (
    <>
      {/* ── Trigger ──────────────────────────────────────────────────── */}
      <button
        type="button"
        onClick={openCamera}
        style={{
          display: 'block',
          width: '100%',
          border: `2px dashed ${hasError ? '#FF3B30' : '#B0D4E8'}`,
          borderRadius: 14,
          padding: '18px 12px 14px',
          textAlign: 'center',
          cursor: 'pointer',
          background: hasError ? 'rgba(255,59,48,0.04)' : 'rgba(240,248,252,0.7)',
          transition: 'border-color .15s',
          userSelect: 'none',
          fontFamily: 'inherit',
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
      </button>

      {/* ── Camera permission / capture error ────────────────────────── */}
      {camError && (
        <div style={{ marginTop: 8, background: 'rgba(255,59,48,0.07)', border: '1px solid rgba(255,59,48,0.25)', borderRadius: 8, padding: '9px 12px', fontSize: 12, color: '#C0392B', fontWeight: 600, lineHeight: 1.6 }}>
          {camError === 'permission_denied' ? (
            <>
              <div style={{ marginBottom: 6 }}>📷 Camera access was blocked. Follow the steps for your device, then tap &ldquo;Take a selfie&rdquo; again:</div>
              <div style={{ paddingLeft: 4 }}>
                <div style={{ marginBottom: 4 }}>
                  <span style={{ fontWeight: 800 }}>Android (Chrome):</span> Tap the lock icon in the address bar → Site settings → Camera → Allow.
                </div>
                <div style={{ marginBottom: 4 }}>
                  <span style={{ fontWeight: 800 }}>iPhone (Safari):</span> Go to Settings → Apps → Safari → Camera → Allow. If that doesn&apos;t work: Settings → Privacy &amp; Security → Camera → make sure Safari is on.
                </div>
                <div>
                  <span style={{ fontWeight: 800 }}>iPhone (Chrome):</span> Go to Settings → Chrome → Camera → Allow.
                </div>
              </div>
            </>
          ) : camError}
        </div>
      )}

      {/* ── Camera modal ─────────────────────────────────────────────────
          Always rendered (CSS display, not conditional mount) so videoRef.current
          is non-null in openCamera() without waiting for a React re-render.
          The <video> element is also always in the DOM — even during the
          stuck-recovery view — so videoRef is never null between retries.
      ──────────────────────────────────────────────────────────────────── */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: 'rgba(0,0,0,0.92)',
        display: open ? 'flex' : 'none', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        padding: 20,
      }}>
        <div style={{ width: '100%', maxWidth: 420 }}>
          {/* Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
            <span style={{ color: 'white', fontWeight: 800, fontSize: 16 }}>Take your selfie</span>
            <button
              type="button"
              onClick={close}
              style={{ background: 'rgba(255,255,255,0.12)', border: 'none', color: 'white', borderRadius: 50, width: 32, height: 32, cursor: 'pointer', fontSize: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'inherit' }}
            >✕</button>
          </div>

          {/* Live camera feed — ALWAYS in DOM so videoRef is never null.
              Hidden via CSS when the stuck-recovery message is shown. */}
          <div style={{
            position: 'relative', borderRadius: 16, overflow: 'hidden',
            background: '#111', aspectRatio: '1',
            display: camStuck && !videoReady ? 'none' : 'block',
          }}>
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              onLoadedMetadata={() => setVideoReady(true)}
              onCanPlay={() => setVideoReady(true)}
              onPlaying={() => setVideoReady(true)}
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

          {/* Stuck recovery — shown when camera couldn't start after 6 s */}
          {camStuck && !videoReady ? (
            <div style={{ textAlign: 'center', padding: '32px 16px' }}>
              <div style={{ fontSize: 36, marginBottom: 12 }}>📷</div>
              <div style={{ color: 'white', fontWeight: 800, fontSize: 15, marginBottom: 8 }}>
                Camera couldn&apos;t start
              </div>
              <div style={{ color: 'rgba(255,255,255,0.65)', fontSize: 13, fontWeight: 600, lineHeight: 1.6, marginBottom: 20 }}>
                Close any other app or browser tab using your camera, then try again.
              </div>
              <button
                type="button"
                onClick={close}
                style={{ background: '#1A8FA0', color: 'white', border: 'none', borderRadius: 50, padding: '13px 32px', fontWeight: 800, fontSize: 15, fontFamily: 'inherit', cursor: 'pointer' }}
              >
                Try again
              </button>
            </div>
          ) : (
            <>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 12, textAlign: 'center', margin: '10px 0 18px', fontWeight: 600 }}>
                Centre your face in the oval · good lighting helps
              </p>
              <button
                type="button"
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
            </>
          )}
        </div>
      </div>
    </>
  )
}
