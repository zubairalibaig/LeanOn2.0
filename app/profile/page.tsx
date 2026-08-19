'use client'
export const dynamic = 'force-dynamic'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase'
import { compressImage, extForType, AVATAR_OPTS, MAX_INPUT_BYTES } from '@/lib/compress-image'
import Avatar from '@/app/components/Avatar'

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
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null)
  const [uploadingAvatar, setUploadingAvatar] = useState(false)
  const [editingName, setEditingName] = useState(false)
  const [nameInput, setNameInput] = useState('')
  const [saving, setSaving] = useState(false)
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)
  const [deleting, setDeleting] = useState(false)

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
      } finally {
        setLoading(false)
      }
    }
    loadProfile()
  }, [])

  async function uploadAvatar(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file || !userId) return
    if (!file.type.startsWith('image/')) { alert('Please choose an image file'); return }
    // Raised from 2 MB: we downscale before upload, so a raw phone photo is
    // fine as INPUT. The guard now only stops absurd files (see MAX_INPUT_BYTES).
    if (file.size > MAX_INPUT_BYTES) { alert('Photo must be under 20 MB'); return }
    setUploadingAvatar(true)
    try {
      // Downscale to 256px before upload — a 48px avatar does not need 5 MB.
      // Returns the original file untouched if compression is not possible.
      const upload = await compressImage(file, AVATAR_OPTS)
      // Derive extension from MIME type, not the user-controlled filename
      const ext = extForType(upload.type)
      const path = `${userId}.${ext}`
      const { error: upErr } = await supabase.storage.from('avatars').upload(path, upload, { upsert: true, contentType: upload.type })
      if (upErr) throw upErr
      const { data: { publicUrl } } = supabase.storage.from('avatars').getPublicUrl(path)
      const url = `${publicUrl}?t=${Date.now()}` // cache bust
      const res = await fetch('/api/auth/profile', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ avatar_url: url }),
      })
      if (!res.ok) throw new Error((await res.json()).error || 'DB write failed')
      setAvatarUrl(url)
    } catch (err) {
      console.error('Avatar upload error:', err)
      alert('Upload failed. Make sure the avatars storage bucket exists in Supabase.')
    } finally {
      setUploadingAvatar(false)
    }
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
            <label style={{cursor:'pointer'}}>
              <input type="file" accept="image/*" style={{display:'none'}} onChange={uploadAvatar} />
              <span className="avatar-upload-btn">
                {uploadingAvatar ? 'Uploading...' : avatarUrl ? 'Change photo' : '+ Add photo'}
              </span>
            </label>
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
                <button className="pencil-btn" onClick={() => { setNameInput(name); setEditingName(true) }}>✏️</button>
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

          <button className="logout-btn" onClick={handleLogout}>
            Sign out
          </button>

          <button className="delete-btn" onClick={() => setShowDeleteConfirm(true)}>
            Delete account
          </button>

          {showDeleteConfirm && (
            <div className="confirm-box">
              <p>Are you sure you want to delete your account? Your data will be deactivated. This cannot be undone.</p>
              <div className="confirm-actions">
                <button className="confirm-yes" onClick={handleDeleteAccount} disabled={deleting}>
                  {deleting ? 'Deleting...' : 'Yes, delete'}
                </button>
                <button className="confirm-no" onClick={() => setShowDeleteConfirm(false)}>
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  )
}
