'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase'

const S = `
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
:root{--navy:#0F4867;--teal:#1A8FA0;--orange:#FF9933;--gray:#5A7A8A;--border:#D5EEF6;--light:#F0F8FC;}
body{font-family:'Nunito',sans-serif;color:var(--navy);background:radial-gradient(ellipse 90% 55% at 0% 0%,#C2E4F2 0%,#DAEEF8 22%,#FFFFFF 58%) fixed;}
.page{max-width:460px;margin:0 auto;padding:24px 20px 80px;}
.topbar{display:flex;align-items:center;gap:12px;margin-bottom:28px;}
.back{width:40px;height:40px;border-radius:12px;background:rgba(255,255,255,.8);border:1.5px solid var(--border);cursor:pointer;font-size:18px;display:flex;align-items:center;justify-content:center;}
h1{font-size:22px;font-weight:900;}
.card{background:white;border:1.5px solid var(--border);border-radius:24px;padding:28px;text-align:center;}
.status-icon{font-size:56px;margin-bottom:16px;}
.status-title{font-size:22px;font-weight:900;margin-bottom:10px;}
.status-desc{font-size:15px;color:var(--gray);line-height:1.65;font-weight:500;margin-bottom:24px;}
.notes-box{background:var(--light);border:1.5px solid var(--border);border-radius:14px;padding:16px;text-align:left;margin-bottom:20px;}
.notes-label{font-size:11px;font-weight:800;color:var(--teal);text-transform:uppercase;letter-spacing:.06em;margin-bottom:8px;}
.notes-text{font-size:14px;color:var(--gray);line-height:1.6;font-weight:500;}
.btn{background:var(--orange);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:15px;padding:14px 32px;border-radius:50px;border:none;cursor:pointer;box-shadow:0 4px 16px rgba(255,153,51,.3);}
.btn-outline{background:white;color:var(--teal);font-family:'Nunito',sans-serif;font-weight:800;font-size:15px;padding:13px 32px;border-radius:50px;border:2px solid var(--teal);cursor:pointer;margin-top:10px;display:inline-block;}
.steps{background:white;border:1.5px solid var(--border);border-radius:20px;padding:20px;margin-top:20px;}
.step{display:flex;gap:12px;align-items:flex-start;padding:10px 0;border-bottom:1px solid var(--border);}
.step:last-child{border-bottom:none;}
.step-num{width:28px;height:28px;border-radius:50%;background:var(--orange);display:flex;align-items:center;justify-content:center;font-weight:900;font-size:13px;color:white;flex-shrink:0;}
.step-num.done{background:#34C759;}
.step-text{font-size:14px;font-weight:700;color:var(--navy);padding-top:4px;}
`

export default function ListenerStatusPage() {
  const router = useRouter()
  const sb = createClient()
  const [status, setStatus] = useState<string | null>(null)
  const [notes, setNotes] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      try {
        const { data: { user } } = await sb.auth.getUser()
        if (!user) { router.push('/auth'); return }

        // Read application status from listener_applications (the admin approval flow)
        const { data: app } = await sb
          .from('listener_applications')
          .select('status, admin_notes')
          .eq('user_id', user.id)
          .maybeSingle()

        // Also check listener_profiles.is_approved (authoritative approved flag)
        const { data: profile } = await sb
          .from('listener_profiles')
          .select('is_approved, is_active')
          .eq('user_id', user.id)
          .maybeSingle()

        if (profile?.is_approved) {
          setStatus('approved')
        } else if (app?.status === 'rejected') {
          setStatus('rejected')
          setNotes(app.admin_notes || null)
        } else if (app?.status === 'needs_resubmission') {
          setStatus('needs_resubmission')
          setNotes(app.admin_notes || null)
        } else {
          setStatus('pending')
        }
      } catch {
        setStatus('pending')
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  const statusConfig: Record<string, { icon: string; title: string; desc: string }> = {
    pending: {
      icon: '⏳',
      title: 'Application Under Review',
      desc: 'Our team is reviewing your application. This usually takes up to 48 hours. We\'ll notify you as soon as there\'s an update.',
    },
    approved: {
      icon: '🎉',
      title: 'You\'re Approved!',
      desc: 'Congratulations! Your listener application has been approved. Complete your profile to start receiving session requests.',
    },
    rejected: {
      icon: '😔',
      title: 'Application Not Approved',
      desc: 'Unfortunately your application wasn\'t approved at this time. Please review the notes below and consider resubmitting.',
    },
    needs_resubmission: {
      icon: '📝',
      title: 'Additional Information Needed',
      desc: 'We need a little more information to complete your review. Please check the notes and resubmit your application.',
    },
  }

  const cfg = statusConfig[status || 'pending'] || statusConfig.pending

  if (loading) return (
    <>
      <style>{S}</style>
      <div className="page"><div style={{textAlign:'center',padding:'60px 0',color:'var(--gray)'}}>Loading…</div></div>
    </>
  )

  return (
    <>
      <style>{S}</style>
      <div className="page">
        <div className="topbar">
          <button className="back" onClick={() => router.push('/')}>←</button>
          <h1>Application Status</h1>
        </div>

        <div className="card">
          <div className="status-icon">{cfg.icon}</div>
          <div className="status-title">{cfg.title}</div>
          <div className="status-desc">{cfg.desc}</div>

          {notes && (
            <div className="notes-box">
              <div className="notes-label">Notes from our team</div>
              <div className="notes-text">{notes}</div>
            </div>
          )}

          {status === 'approved' && (
            <a href="/dashboard"><button className="btn">Complete your profile →</button></a>
          )}
          {(status === 'rejected' || status === 'needs_resubmission') && (
            <a href="/become-listener"><button className="btn">Resubmit application →</button></a>
          )}
          {status === 'pending' && (
            <div style={{fontSize:13,color:'var(--gray)',fontWeight:600}}>
              Check back in a few hours or wait for our email notification.
            </div>
          )}
        </div>

        <div className="steps">
          {[
            { label: 'Application submitted', done: true },
            { label: 'Background check in progress', done: status !== 'pending' },
            { label: 'Profile review', done: status === 'approved' },
            { label: 'Start earning as a listener', done: false },
          ].map((step, i) => (
            <div key={i} className="step">
              <div className={`step-num${step.done ? ' done' : ''}`}>{step.done ? '✓' : i + 1}</div>
              <div className="step-text">{step.label}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
