'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createBrowserClient } from '@supabase/ssr'

const sb = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

const ID_TYPES = [
  { value: 'aadhaar',          label: 'Aadhaar Card' },
  { value: 'pan',              label: 'PAN Card' },
  { value: 'passport',         label: 'Passport' },
  { value: 'voter_id',         label: 'Voter ID' },
  { value: 'driving_license',  label: "Driver's Licence" },
]

const S = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
  body{font-family:'Nunito',sans-serif;color:#0F4867;background:#F0F8FC;-webkit-font-smoothing:antialiased;}
  .page{max-width:480px;margin:0 auto;padding:20px 20px 80px;}
  .back{display:inline-flex;align-items:center;gap:6px;font-size:14px;font-weight:700;color:#1A8FA0;background:none;border:none;cursor:pointer;margin-bottom:24px;padding:0;}
  h1{font-size:24px;font-weight:900;margin-bottom:6px;}
  .sub{font-size:14px;color:#5A7A8A;font-weight:500;margin-bottom:28px;line-height:1.6;}
  .steps{display:flex;gap:6px;margin-bottom:28px;}
  .step-dot{width:28px;height:6px;border-radius:3px;background:#D5EEF6;}
  .step-dot.done{background:#1A8FA0;}
  .step-dot.active{background:#0F4867;}
  .label{font-size:12px;font-weight:800;color:#5A7A8A;text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px;display:block;}
  .input{width:100%;padding:12px 14px;border:1.5px solid #D5EEF6;border-radius:12px;font-family:'Nunito',sans-serif;font-size:15px;color:#0F4867;outline:none;transition:border-color .15s;}
  .input:focus{border-color:#1A8FA0;}
  .select{width:100%;padding:12px 14px;border:1.5px solid #D5EEF6;border-radius:12px;font-family:'Nunito',sans-serif;font-size:15px;color:#0F4867;outline:none;background:white;}
  .field{margin-bottom:20px;}
  .note{background:#E6F6FF;border-left:3px solid #1A8FA0;padding:10px 14px;border-radius:0 10px 10px 0;font-size:13px;color:#0F4867;font-weight:600;margin-bottom:20px;line-height:1.5;}
  .upload-box{border:2px dashed #D5EEF6;border-radius:14px;padding:28px;text-align:center;cursor:pointer;transition:border-color .15s;background:white;}
  .upload-box:hover{border-color:#1A8FA0;}
  .upload-box.has-file{border-style:solid;border-color:#1A8FA0;background:#F0FCF8;}
  .upload-icon{font-size:32px;margin-bottom:8px;}
  .upload-label{font-size:14px;font-weight:700;color:#0F4867;margin-bottom:4px;}
  .upload-sub{font-size:12px;color:#5A7A8A;font-weight:500;}
  .btn{width:100%;padding:15px;border-radius:14px;border:none;font-family:'Nunito',sans-serif;font-weight:800;font-size:15px;cursor:pointer;margin-top:8px;}
  .btn-primary{background:#0F4867;color:white;}
  .btn-primary:disabled{background:#ccc;cursor:not-allowed;}
  .done-wrap{text-align:center;padding:40px 20px;}
  .done-icon{font-size:56px;margin-bottom:20px;}
  .done-h{font-size:22px;font-weight:900;margin-bottom:10px;}
  .done-p{font-size:14px;color:#5A7A8A;font-weight:500;line-height:1.6;margin-bottom:28px;}
`

async function hashString(str: string): Promise<string> {
  const data = new TextEncoder().encode(str.trim().toUpperCase())
  const buf  = await crypto.subtle.digest('SHA-256', data)
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('')
}

async function uploadFile(userId: string, folder: string, file: File): Promise<string | null> {
  const ext  = file.type === 'image/png' ? 'png' : file.type === 'image/webp' ? 'webp' : 'jpg'
  const path = `${folder}/${userId}.${ext}`
  const { error } = await sb.storage.from('verifications').upload(path, file, { upsert: true })
  if (error) return null
  const { data } = sb.storage.from('verifications').getPublicUrl(path)
  return data.publicUrl
}

export default function VerifyPage() {
  const router = useRouter()
  const [step,       setStep]       = useState(0) // 0=name, 1=id, 2=selfie, 3=doc, 4=done
  const [userId,     setUserId]     = useState<string | null>(null)
  const [fullName,   setFullName]   = useState('')
  const [idType,     setIdType]     = useState('')
  const [idNumber,   setIdNumber]   = useState('')
  const [selfie,     setSelfie]     = useState<File | null>(null)
  const [idDoc,      setIdDoc]      = useState<File | null>(null)
  const [loading,    setLoading]    = useState(false)
  const [error,      setError]      = useState('')

  useEffect(() => {
    sb.auth.getUser().then(({ data: { user } }) => {
      if (!user) { router.push('/auth?redirect=/become-listener/verify'); return }
      setUserId(user.id)
    })
  }, [router])

  async function submit() {
    if (!userId) return
    setLoading(true)
    setError('')
    try {
      const [selfieUrl, idDocUrl, hash] = await Promise.all([
        selfie ? uploadFile(userId, 'selfies', selfie) : Promise.resolve(null),
        idDoc  ? uploadFile(userId, 'ids',     idDoc)  : Promise.resolve(null),
        hashString(idNumber),
      ])

      const res = await fetch('/api/listener/verify', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          full_name:      fullName.trim(),
          id_type:        idType,
          id_number_hash: hash,
          selfie_url:     selfieUrl,
          id_doc_url:     idDocUrl,
        }),
      })

      if (!res.ok) {
        const json = await res.json()
        setError(json.error || 'Submission failed. Please try again.')
        return
      }
      setStep(4)
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const steps = [fullName.trim().length >= 2, !!idType && idNumber.trim().length >= 4, !!selfie, !!idDoc]

  return (
    <>
      <style>{S}</style>
      <div className="page">
        <button className="back" onClick={() => router.push('/become-listener')}>← Back</button>

        {step < 4 ? (
          <>
            <h1>Identity Verification</h1>
            <p className="sub">To protect our community, we verify all peer listeners. Your data is stored securely.</p>

            <div className="steps">
              {[0,1,2,3].map(i => (
                <div key={i} className={`step-dot${i < step ? ' done' : i === step ? ' active' : ''}`} />
              ))}
            </div>

            {step === 0 && (
              <div>
                <div className="field">
                  <label className="label">Your full legal name</label>
                  <input
                    className="input"
                    type="text"
                    value={fullName}
                    onChange={e => setFullName(e.target.value)}
                    placeholder="As it appears on your ID"
                    autoFocus
                  />
                </div>
                <button
                  className="btn btn-primary"
                  disabled={fullName.trim().length < 2}
                  onClick={() => setStep(1)}
                >Continue →</button>
              </div>
            )}

            {step === 1 && (
              <div>
                <div className="field">
                  <label className="label">ID type</label>
                  <select className="select" value={idType} onChange={e => setIdType(e.target.value)}>
                    <option value="">Select ID type…</option>
                    {ID_TYPES.map(t => (
                      <option key={t.value} value={t.value}>{t.label}</option>
                    ))}
                  </select>
                </div>
                <div className="field">
                  <label className="label">ID number</label>
                  <input
                    className="input"
                    type="text"
                    value={idNumber}
                    onChange={e => setIdNumber(e.target.value)}
                    placeholder="Enter your ID number"
                  />
                </div>
                <div className="note">
                  🔒 We store a one-way hash of your ID number — the actual number is never saved on our servers.
                </div>
                <button
                  className="btn btn-primary"
                  disabled={!idType || idNumber.trim().length < 4}
                  onClick={() => setStep(2)}
                >Continue →</button>
              </div>
            )}

            {step === 2 && (
              <div>
                <label className="label">Selfie photo</label>
                <p style={{ fontSize: 13, color: '#5A7A8A', marginBottom: 14, fontWeight: 500 }}>
                  Take a clear photo of your face. No sunglasses or masks.
                </p>
                <label
                  className={`upload-box${selfie ? ' has-file' : ''}`}
                  style={{ display: 'block', marginBottom: 20 }}
                >
                  <input
                    type="file" accept="image/*" capture="user"
                    style={{ display: 'none' }}
                    onChange={e => {
                      const file = e.target.files?.[0]
                      if (!file) return
                      if (file.size > 5 * 1024 * 1024) { setError('Selfie must be under 5 MB'); return }
                      setError('')
                      setSelfie(file)
                    }}
                  />
                  <div className="upload-icon">{selfie ? '✅' : '🤳'}</div>
                  <div className="upload-label">{selfie ? selfie.name : 'Tap to take selfie'}</div>
                  <div className="upload-sub">{selfie ? 'Tap to change' : 'JPG, PNG — max 5MB'}</div>
                </label>
                <button
                  className="btn btn-primary"
                  disabled={!selfie}
                  onClick={() => setStep(3)}
                >Continue →</button>
              </div>
            )}

            {step === 3 && (
              <div>
                <label className="label">ID document photo</label>
                <p style={{ fontSize: 13, color: '#5A7A8A', marginBottom: 14, fontWeight: 500 }}>
                  Upload a clear photo of your {ID_TYPES.find(t => t.value === idType)?.label || 'ID'}.
                </p>
                <label
                  className={`upload-box${idDoc ? ' has-file' : ''}`}
                  style={{ display: 'block', marginBottom: 20 }}
                >
                  <input
                    type="file" accept="image/*"
                    style={{ display: 'none' }}
                    onChange={e => {
                      const file = e.target.files?.[0]
                      if (!file) return
                      if (file.size > 5 * 1024 * 1024) { setError('ID document must be under 5 MB'); return }
                      setError('')
                      setIdDoc(file)
                    }}
                  />
                  <div className="upload-icon">{idDoc ? '✅' : '📄'}</div>
                  <div className="upload-label">{idDoc ? idDoc.name : 'Tap to upload ID'}</div>
                  <div className="upload-sub">{idDoc ? 'Tap to change' : 'JPG, PNG — max 5MB'}</div>
                </label>

                {error && (
                  <div style={{ background: '#FFF0EF', color: '#FF3B30', padding: '10px 14px', borderRadius: 10, fontSize: 13, fontWeight: 600, marginBottom: 16 }}>
                    {error}
                  </div>
                )}

                <button
                  className="btn btn-primary"
                  disabled={!idDoc || loading || !steps.every(Boolean)}
                  onClick={submit}
                >
                  {loading ? 'Submitting…' : 'Submit Verification'}
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="done-wrap">
            <div className="done-icon">🎉</div>
            <h2 className="done-h">Verification submitted!</h2>
            <p className="done-p">
              Your identity verification is under review. We&apos;ll notify you within 48 hours.
              Once approved, a verified badge will appear on your profile.
            </p>
            <button
              className="btn btn-primary"
              onClick={() => router.push('/dashboard')}
            >Go to Dashboard</button>
          </div>
        )}
      </div>
    </>
  )
}
