'use client'
import {
  EDUCATION_LEVELS, EDUCATION_FIELDS, OCCUPATIONS, HOURS_PER_WEEK, TIME_SLOTS, PRIOR_EXPERIENCE,
  HEARD_FROM, SCREENING_QUIZ, isBelowPreferredEducation, labelOf,
} from '@/lib/listener-onboarding'

export type ListenerReview = {
  education_level?: string | null
  education_field?: string | null
  tagline_phrases?: string[] | null
  lived_experience?: string | null
  legacy_gallery?: string[]
  selfie_url?: string | null
  screening?: {
    occupation?: string; state?: string; hours_per_week?: string; time_slots?: string[]
    prior_experience?: string[]; why?: string; heard_from?: string; linkedin_url?: string | null
    quiz?: { score: number; total: number; answers: Record<string, number> }
    submitted_at?: string
  } | null
}

const box: React.CSSProperties = { background: 'white', border: '1.5px solid var(--border)', borderRadius: 12, padding: '10px 12px' }
const lbl: React.CSSProperties = { fontSize: 11, fontWeight: 800, color: 'var(--gray)', textTransform: 'uppercase', letterSpacing: '.04em', marginBottom: 4 }

function Photo({ url, title, note }: { url: string | null | undefined; title: string; note: string }) {
  return (
    <div style={{ flex: '1 1 160px', minWidth: 150 }}>
      <div style={lbl}>{title}</div>
      <a href={url || undefined} target="_blank" rel="noopener noreferrer"
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 180, borderRadius: 12, overflow: 'hidden',
          background: 'var(--light)', border: '1.5px solid var(--border)', fontSize: 12, color: 'var(--gray)', fontWeight: 700,
          cursor: url ? 'zoom-in' : 'default', textAlign: 'center', padding: url ? 0 : 10 }}>
        {url
          // eslint-disable-next-line @next/next/no-img-element
          ? <img src={url} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          : note}
      </a>
    </div>
  )
}

// Everything the admin needs to approve or reject an application, in one place.
export default function ListenerReviewPanel({ review, displayUrl }: { review?: ListenerReview | null; displayUrl?: string | null }) {
  const r = review ?? {}
  const s = r.screening ?? null
  const q = s?.quiz
  const wrong = q ? SCREENING_QUIZ.filter(x => q.answers[x.id] !== x.correct) : []
  const lowEdu = isBelowPreferredEducation(r.education_level)
  return (
    <div style={{ display: 'grid', gap: 10, width: '100%', background: 'var(--light)', borderRadius: 14, padding: 12 }}>
      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
        <Photo url={r.selfie_url} title="Verification selfie (private)" note="No private selfie on file — applied before the Sep 2026 change, or not taken" />
        <Photo url={displayUrl} title="Display photo (public)" note="No display photo" />
      </div>
      <div style={{ fontSize: 12, fontWeight: 700, color: '#7A4500', background: '#FFF8E6', border: '1px solid #F5A623', borderRadius: 10, padding: '8px 10px' }}>
        Approve only if both photos are real, well-lit, clearly the same person, with the face fully visible (no filters, sunglasses or group shots).
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 10 }}>
        <div style={box}>
          <div style={lbl}>Education</div>
          <div style={{ fontSize: 13, fontWeight: 800, color: lowEdu ? 'var(--red)' : 'var(--navy)' }}>
            {r.education_level ? labelOf(EDUCATION_LEVELS, r.education_level) : '—'}{lowEdu ? ' · below Diploma' : ''}
          </div>
          <div style={{ fontSize: 12, color: 'var(--gray)', fontWeight: 600 }}>{r.education_field ? labelOf(EDUCATION_FIELDS, r.education_field) : '—'}</div>
        </div>
        <div style={box}>
          <div style={lbl}>Screening quiz</div>
          {q ? (
            <>
              <div style={{ fontSize: 13, fontWeight: 900, color: q.score >= q.total - 1 ? '#1B7A3A' : 'var(--red)' }}>{q.score} / {q.total}</div>
              {wrong.length > 0 && (
                <div style={{ fontSize: 11, color: 'var(--gray)', fontWeight: 600, lineHeight: 1.5, marginTop: 2 }}>
                  Wrong: {wrong.map(x => `"${x.q.slice(0, 48)}…" → ${x.options[q.answers[x.id]] ?? '—'}`).join(' | ')}
                </div>
              )}
            </>
          ) : <div style={{ fontSize: 12, color: 'var(--gray)' }}>Not taken</div>}
        </div>
        <div style={box}>
          <div style={lbl}>About them (private)</div>
          <div style={{ fontSize: 12, color: 'var(--navy)', fontWeight: 600, lineHeight: 1.7 }}>
            {s ? <>
              {labelOf(OCCUPATIONS, s.occupation)} · {s.state || '—'}<br />
              {labelOf(HOURS_PER_WEEK, s.hours_per_week)} · {(s.time_slots ?? []).map(t => labelOf(TIME_SLOTS, t)).join(', ') || '—'}<br />
              Experience: {(s.prior_experience ?? []).map(t => labelOf(PRIOR_EXPERIENCE, t)).join(', ') || '—'}<br />
              Heard via: {labelOf(HEARD_FROM, s.heard_from)}
              {s.linkedin_url && <><br /><a href={s.linkedin_url} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--teal)', fontWeight: 800 }}>LinkedIn ↗</a></>}
            </> : 'Not provided (applied before Sep 2026 onboarding)'}
          </div>
        </div>
      </div>

      {s?.why && (
        <div style={box}>
          <div style={lbl}>Why they want to be a listener</div>
          <div style={{ fontSize: 13, color: 'var(--navy)', lineHeight: 1.6, whiteSpace: 'pre-wrap' }}>{s.why}</div>
        </div>
      )}
      {((r.tagline_phrases ?? []).length > 0 || r.lived_experience) && (
        <div style={box}>
          <div style={lbl}>Public profile text</div>
          {(r.tagline_phrases ?? []).length > 0 && (
            <div style={{ fontSize: 12, fontWeight: 800, color: '#1B5E32', marginBottom: 4 }}>{(r.tagline_phrases ?? []).join(' · ')}</div>
          )}
          {r.lived_experience && <div style={{ fontSize: 13, color: 'var(--navy)', lineHeight: 1.6, whiteSpace: 'pre-wrap' }}>{r.lived_experience}</div>}
        </div>
      )}
      {(r.legacy_gallery ?? []).length > 0 && (
        <div style={box}>
          <div style={lbl}>Old gallery photos — hidden from the public profile</div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {(r.legacy_gallery ?? []).map((u, i) => (
              <a key={i} href={u} target="_blank" rel="noopener noreferrer" style={{ width: 72, height: 72, borderRadius: 10, overflow: 'hidden', border: '1.5px solid var(--border)' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={u} alt={`Gallery ${i + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
