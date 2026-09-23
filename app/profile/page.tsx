'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase'
import { compressImage, extForType, AVATAR_OPTS, MAX_INPUT_BYTES } from '@/lib/compress-image'
import Avatar from '@/app/components/Avatar'
import SelfieCapture from '@/app/components/SelfieCapture'

const S = `
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
:root{--navy:#0F4867;--teal:#1A8FA0;--orange:#FF9933;--gray:#5A7A8A;--border:#D5EEF6;--light:#F0F8FC;}
body{font-family:'Nunito',sans-serif;color:var(--navy);-webkit-font-smoothing:antialiased;
  background:radial-gradient(ellipse 90% 55% at 0% 0%,#C2E4F2 0%,#DAEEF8 22%,#FFFFFF 58%) fixed;}
a{text-decoration:none;color:inherit;}
.topbar{position:sticky;top:0;z-index:50;background:rgba(255,255,255,0.95);backdrop-filter:blur(8px);border-bottom:1px solid var(--border);padding:14px 20px;display:flex;align-items:center;gap:12px;}
.back-btn{background:none;border:none;cursor:pointer;font-size:20px;color:var(--navy);padding:4px;line-height:1;}
.topbar h1{font-size:20px;font-weight:900;color:var(--navy);}
.page{max-width:540px;margin:0 auto;padding:24px 20px 100px;}
.avatar-section{display:flex;flex-direction:column;align-items:center;margin-bottom:28px;}
.avatar{width:80px;height:80px;border-radius:50%;background:var(--navy);display:flex;align-items:center;justify-content:center;font-size:28px;font-weight:900;color:white;margin-bottom:8px;position:relative;overflow:hidden;}
.avatar img{width:100%;height:100%;object-fit:cover;border-radius:50%;}
.avatar-upload-btn{font-size:12px;font-weight:700;color:var(--teal);background:none;border:none;cursor:pointer;padding:2px 0 10px;text-decoration:underline;}
.name-row{display:flex;align-items:center;gap:8px;}
.name-display{font-size:22px;font-weight:900;color:var(--navy);}
.pencil-btn{background:none;border:none;cursor:pointer;font-size:16px;padding:4px;opacity:0.6;}
.pencil-btn:hover{opacity:1;}
.name-input{font-family:'Nunito',sans-serif;font-size:18px;font-weight:800;color:var(--navy);border:2px solid var(--teal);border-radius:10px;padding:6px 12px;outline:none;width:200px;text-align:center;}
.save-btn{background:var(--teal);color:white;font-family:'Nunito',sans-serif;font-weight:700;font-size:13px;padding:7px 14px;border-radius:8px;border:none;cursor:pointer;}
.phone{font-size:14px;color:var(--gray);font-weight:600;margin-top:6px;}
.stats-grid{display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;margin-bottom:20px;}
.stat-card{background:white;border:1.5px solid var(--border);border-radius:16px;padding:16px 12px;text-align:center;box-shadow:0 1px 4px rgba(15,72,103,.04);}
.stat-card.clickable{cursor:pointer;transition:all .2s;}
.stat-card.clickable:hover{border-color:var(--teal);box-shadow:0 4px 16px rgba(15,72,103,.08);transform:translateY(-1px);}
.stat-icon{font-size:22px;margin-bottom:6px;}
.stat-value{font-size:18px;font-weight:900;color:var(--navy);margin-bottom:2px;}
.stat-label{font-size:11px;color:var(--gray);font-weight:600;}
.listener-banner{background:var(--light);border:1.5px solid var(--border);border-radius:16px;padding:18px;margin-bottom:20px;display:flex;align-items:center;justify-content:space-between;}
.listener-banner p{font-size:14px;font-weight:700;color:var(--navy);}
.go-btn{background:var(--navy);color:white;font-family:'Nunito',sans-serif;font-weight:700;font-size:13px;padding:9px 16px;border-radius:10px;border:none;cursor:pointer;white-space:nowrap;}
.help-row{width:100%;display:flex;align-items:center;justify-content:space-between;gap:12px;background:white;border:1.5px solid var(--border);border-radius:14px;padding:15px 18px;margin-bottom:12px;cursor:pointer;text-align:left;font-family:'Nunito',sans-serif;transition:all .2s;}
.help-row:hover{border-color:var(--teal);box-shadow:0 4px 16px rgba(15,72,103,.06);}
.help-row-label{font-size:15px;font-weight:800;color:var(--navy);}
.help-row-sub{font-size:12px;font-weight:600;color:var(--gray);margin-top:2px;}
.help-row-arrow{font-size:18px;color:var(--gray);}
.logout-btn{width:100%;background:white;color:#E53E3E;font-family:'Nunito',sans-serif;font-weight:700;font-size:15px;padding:14px;border-radius:14px;border:1.5px solid #FED7D7;cursor:pointer;transition:all .2s;}
.logout-btn:hover{background:#FFF5F5;}
.delete-btn{width:100%;background:transparent;color:#aaa;font-family:'Nunito',sans-serif;font-weight:600;font-size:13px;padding:10px;border-radius:14px;border:none;cursor:pointer;margin-top:8px;transition:color .2s;}
.delete-btn:hover{color:#E53E3E;}
.confirm-box{background:#FFF0F0;border:1.5px solid #FFCDD2;border-radius:16px;padding:18px;margin-top:12px;}
.confirm-box p{font-size:13px;color:#7A2020;font-weight:600;line-height:1.6;margin-bottom:14px;}
.confirm-actions{display:flex;gap:10px;}
.confirm-yes{flex:1;background:#E53E3E;color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:14px;padding:11px;border-radius:10px;border:none;cursor:pointer;}
.confirm-no{flex:1;background:white;color:var(--navy);font-family:'Nunito',sans-serif;font-weight:700;font-size:14px;padding:11px;border-radius:10px;border:1.5px solid var(--border);cursor:pointer;}
.loading{text-align:center;padding:60px 20px;font-size:16px;font-weight:600;color:var(--gray);}
`

export default function ProfilePage() {
  const router = useRouter()
  const supabase = createClient()

  const [loading, setLoading] = useState(true)
  const [userId, setUserId] = useState<string | null>(null)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [walletBalance, setWalletBalance] = useState(0)
  const [createdAt, setCreatedAt] = useState('')
  const [sessionCount, setSessionCount] = useState(0)
  const [isListener, setIsListener] = useState(false)
  const [isApprovedListener, setIsApprovedListener] = useState(false)
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null)
  const [uploadingAvatar, setUploadingAvatar] = useState(false)
  const [avatarUploadMsg, setAvatarUploadMsg] = useState<{ type: 'error' | 'info'; text: string } | null>(null)
  const [editingName, setEditingName] = useState(false)
  const [nameInput, setNameInput] = useState('')
  const [saving, setSaving] = useState(false)
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)
  const [deleting, setDeleting] = useState(false)
  const [deleteInput, setDeleteInput] = useState('')

  useEffect(() => {
    async function loadProfile() {
      try {
        const { data: { user } } = await supabase.auth.getUser()
        if (!user) { router.push('/auth'); return }
        setUserId(user.id)

        // Identity (name, photo, wallet, phone, joined) comes from the server
        // API which reads via the admin client. A direct browser read of `users`
        // is RLS-restricted and was returning blank name/photo for listeners.
        const [profileRes, sessionsRes, listenerRes] = await Promise.all([
          fetch('/api/auth/profile').then(r => r.ok ? r.json() : null).catch(() => null),
          supabase.from('sessions').select('id', { count: 'exact', head: true }).eq('seeker_id', user.id).eq('status', 'completed'),
          supabase.from('listener_profiles').select('id').eq('user_id', user.id).maybeSingle(),
        ])

        if (profileRes) {
          setName(profileRes.name || '')
          setNameInput(profileRes.name || '')
          setWalletBalance(profileRes.wallet_balance || 0)
          setCreatedAt(profileRes.created_at || '')
          setPhone(profileRes.phone || user.phone || '')
          setAvatarUrl(profileRes.avatar_url || null)
        }
        setSessionCount(sessionsRes.count || 0)
        setIsListener(!!listenerRes.data)
        // Use the server-returned flag (admin client, bypasses RLS) so the
        // pencil is hidden reliably even if the browser query hits an RLS gap.
        setIsApprovedListener(profileRes?.is_approved_listener === true)
      } finally {
        setLoading(false)
      }
    }
    loadProfile()
  }, [])

  async function doAvatarUpload(file: File) {
    if (!userId) return
    if (file.size > MAX_INPUT_BYTES) { setAvatarUploadMsg({ type: 'error', text: 'Photo must be under 20 MB.' }); return }
    setAvatarUploadMsg(null)
    setUploadingAvatar(true)
    try {
      const upload = await compressImage(file, AVATAR_OPTS)
      const ext = extForType(upload.type)
      const path = `${userId}.${ext}`
      const UPLOAD_TIMEOUT_MS = 30_000
      const uploadTimeout = new Promise<never>((_, reject) =>
        setTimeout(() => reject(new Error('upload_timeout')), UPLOAD_TIMEOUT_MS)
      )
      const { error: upErr } = await Promise.race([
        supabase.storage.from('avatars').upload(path, upload, { upsert: true, contentType: upload.type }),
        uploadTimeout,
      ])
      if (upErr) throw upErr
      const { data: { publicUrl } } = supabase.storage.from('avatars').getPublicUrl(path)
      const url = `${publicUrl}?t=${Date.now()}`
      const res = await fetch('/api/auth/profile', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ avatar_url: url }),
      })
      const json = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(json.error || 'DB write failed')
      if (json.pending_review) {
        setAvatarUploadMsg({ type: 'info', text: 'Your new selfie is under review. Your current photo stays live until an admin approves it.' })
      } else {
        setAvatarUrl(url)
      }
    } catch (err) {
      const msg = err instanceof Error && err.message === 'upload_timeout'
        ? 'Upload timed out. Please check your connection and try again.'
        : 'Photo upload failed. Please try again.'
      setAvatarUploadMsg({ type: 'error', text: msg })
    } finally {
      setUploadingAvatar(false)
    }
  }

  // For seekers: traditional file-input upload (no selfie restriction)
  async function uploadAvatar(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    if (!file.type.startsWith('image/')) { alert('Please choose an image file'); return }
    await doAvatarUpload(file)
  }

  async function saveName() {
    if (!userId || !nameInput.trim()) return
    setSaving(true)
    const res = await fetch('/api/auth/profile', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: nameInput.trim() }),
    })
    setSaving(false)
    if (!res.ok) { alert('Failed to save name. Please try again.'); return }
    setName(nameInput.trim())
    setEditingName(false)
  }

  async function handleLogout() {
    await supabase.auth.signOut()
    router.push('/')
  }

  async function handleDeleteAccount() {
    setDeleting(true)
    const res = await fetch('/api/account', { method: 'POST' })
    if (!res.ok) {
      const body = await res.json().catch(() => ({}))
      alert(body.error || 'Account deletion failed. Please try again or contact support.')
      setDeleting(false)
      setShowDeleteConfirm(false)
      return
    }
    await supabase.auth.signOut()
    router.push('/')
  }

  const ini = (n: string) => n.split(' ').map((x: string) => x[0] || '').join('').slice(0, 2).toUpperCase() || '?'

  const formatDate = (iso: string) => {
    if (!iso) return '—'
    return new Date(iso).toLocaleDateString('en-IN', { month: 'short', year: 'numeric' })
  }

  return (
    <>
      <style>{S}</style>
      <div className="topbar">
        <button className="back-btn" onClick={() => router.push('/browse')}>←</button>
        <h1>My Profile</h1>
      </div>

      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="page">
          <div className="avatar-section">
            <div className="avatar">
              {avatarUrl
                ? <Avatar src={avatarUrl} alt={name} size={192} />
                : ini(name)}
            </div>
            {isListener ? (
              <SelfieCapture
                preview={avatarUrl}
                loading={uploadingAvatar}
                onCapture={doAvatarUpload}
              />
            ) : (
              <label style={{cursor:'pointer'}}>
                <input type="file" accept="image/*" style={{display:'none'}} onChange={uploadAvatar} />
                <span className="avatar-upload-btn">
                  {uploadingAvatar ? 'Uploading...' : avatarUrl ? 'Change photo' : '+ Add photo'}
                </span>
              </label>
            )}
            {avatarUploadMsg && (
              <div style={{
                marginTop: 8, fontSize: 12, fontWeight: 600, lineHeight: 1.5,
                padding: '8px 12px', borderRadius: 8, maxWidth: 280, textAlign: 'center',
                background: avatarUploadMsg.type === 'error' ? 'rgba(255,59,48,0.07)' : 'rgba(26,143,160,0.07)',
                border: `1px solid ${avatarUploadMsg.type === 'error' ? 'rgba(255,59,48,0.25)' : 'rgba(26,143,160,0.25)'}`,
                color: avatarUploadMsg.type === 'error' ? '#C0392B' : '#0F4867',
              }}>
                {avatarUploadMsg.text}
              </div>
            )}
            {editingName ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', justifyContent: 'center' }}>
                <input
                  className="name-input"
                  value={nameInput}
                  onChange={e => setNameInput(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && saveName()}
                  autoFocus
                />
                <button className="save-btn" onClick={saveName} disabled={saving}>
                  {saving ? '...' : 'Save'}
                </button>
              </div>
            ) : (
              <div className="name-row">
                <span className="name-display">{name || 'Your Name'}</span>
                {!isApprovedListener && (
                  <button className="pencil-btn" onClick={() => { setNameInput(name); setEditingName(true) }}>✏️</button>
                )}
              </div>
            )}
            {phone && <div className="phone">📱 {phone}</div>}
          </div>

          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">💬</div>
              <div className="stat-value">{sessionCount}</div>
              <div className="stat-label">Sessions</div>
            </div>
            <div className="stat-card clickable" onClick={() => router.push('/wallet')}>
              <div className="stat-icon">💰</div>
              <div className="stat-value">₹{walletBalance}</div>
              <div className="stat-label">Wallet →</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">📅</div>
              <div className="stat-value" style={{ fontSize: 13 }}>{formatDate(createdAt)}</div>
              <div className="stat-label">Member since</div>
            </div>
          </div>

          {isListener && (
            <div className="listener-banner">
              <p>🎧 You have a listener profile</p>
              <button className="go-btn" onClick={() => router.push('/dashboard')}>
                Go to listener dashboard →
              </button>
            </div>
          )}

          <button className="help-row" onClick={() => router.push('/contact')}>
            <div>
              <div className="help-row-label">💬 Help &amp; Support</div>
              <div className="help-row-sub">Questions, feedback, or something not working? Reach us.</div>
            </div>
            <span className="help-row-arrow">→</span>
          </button>

          <button className="logout-btn" onClick={handleLogout}>
            Sign out
          </button>

          <button className="delete-btn" onClick={() => { setDeleteInput(''); setShowDeleteConfirm(true) }}>
            Delete account
          </button>

          {showDeleteConfirm && (
            <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999, padding: 20 }}>
              <div style={{ background: 'white', borderRadius: 20, padding: '28px 24px', maxWidth: 380, width: '100%', textAlign: 'center' }}>
                <div style={{ fontSize: 36, marginBottom: 12 }}>⚠️</div>
                <h3 style={{ fontSize: 18, fontWeight: 800, color: '#B71C1C', marginBottom: 8 }}>Delete your account?</h3>
                <p style={{ fontSize: 13, color: '#5A7A8A', fontWeight: 600, lineHeight: 1.6, marginBottom: walletBalance > 0 ? 8 : 16 }}>
                  This is permanent and cannot be undone. Your name, phone number, profile, and all personal data will be permanently erased. Session history will be anonymized.
                </p>
                {walletBalance > 0 && (
                  <p style={{ fontSize: 13, fontWeight: 700, color: '#B71C1C', background: '#FFF5F5', border: '1px solid #FFCDD2', borderRadius: 8, padding: '8px 12px', marginBottom: 16 }}>
                    You have ₹{walletBalance} in your wallet. This balance will be forfeited and cannot be recovered after deletion.
                  </p>
                )}
                <p style={{ fontSize: 13, fontWeight: 700, color: '#0F4867', marginBottom: 10 }}>
                  Type <strong>DELETE</strong> to confirm
                </p>
                <input
                  style={{ width: '100%', padding: '10px 14px', border: '2px solid #D5EEF6', borderRadius: 10, fontSize: 16, fontWeight: 700, textAlign: 'center', fontFamily: 'Nunito, sans-serif', letterSpacing: 2 }}
                  value={deleteInput}
                  onChange={e => setDeleteInput(e.target.value.toUpperCase())}
                  placeholder="DELETE"
                  autoFocus
                />
                <div style={{ display: 'flex', gap: 10, marginTop: 16 }}>
                  <button
                    style={{ flex: 1, padding: '12px 0', background: deleteInput === 'DELETE' ? '#B71C1C' : '#ccc', color: 'white', border: 'none', borderRadius: 12, fontSize: 14, fontWeight: 800, cursor: deleteInput === 'DELETE' ? 'pointer' : 'not-allowed', fontFamily: 'Nunito, sans-serif' }}
                    onClick={handleDeleteAccount}
                    disabled={deleting || deleteInput !== 'DELETE'}
                  >
                    {deleting ? 'Deleting...' : 'Permanently delete'}
                  </button>
                  <button
                    style={{ flex: 1, padding: '12px 0', background: 'white', color: '#0F4867', border: '2px solid #D5EEF6', borderRadius: 12, fontSize: 14, fontWeight: 800, cursor: 'pointer', fontFamily: 'Nunito, sans-serif' }}
                    onClick={() => setShowDeleteConfirm(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  )
}
