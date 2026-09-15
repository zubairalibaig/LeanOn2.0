from pathlib import Path
import re

path = Path('app/admin/page.tsx')
s = path.read_text()

state_new = r'''  // Quality metrics — owner-facing quality/retention signals, separate from operational KPIs.
  type QualitySummary = {
    trial_to_paid_pct: number | null
    trial_to_paid_24h: { converted: number; eligible: number; pct: number | null }
    trial_to_paid_7d: { converted: number; eligible: number; pct: number | null }
    paid_to_second_pct: number | null
    paid_to_second_7d: { converted: number; eligible: number; pct: number | null }
    paid_to_second_30d: { converted: number; eligible: number; pct: number | null }
    unique_paid_seekers: number; one_paid_seekers: number; two_plus_paid_seekers: number
    three_plus_paid_seekers: number; five_plus_paid_seekers: number; three_plus_rate_pct: number | null
    avg_rating: number | null; rating_count: number | null; five_star_pct: number | null; low_rating_pct: number | null
    sessions_rated_pct: number | null; rating_history_available: boolean
    completion_rate_pct: number | null; short_voice_sessions: number; short_voice_pct: number | null
    missing_duration_telemetry: number; refund_requests: number; refund_amount: number; refund_rate_pct: number
    report_count: number; report_rate_per_1000: number; block_count: number; block_rate_per_100_sessions: number
    crisis_flags: number; voice_paid_sessions: number; text_paid_sessions: number
    paid_sessions: number; paid_minutes: number; avg_session_duration_mins: number | null
    online_listeners_now: number; listeners_taking_sessions: number; top_listener_concentration_pct: number | null
    unmatched_sessions: number; failed_starts: number; attributed_listener_refunds: number
  }
  type ListenerQuality = {
    listener_id: string; name: string; paid_sessions: number; unique_paid_seekers: number
    repeat_seekers: number; three_plus_seekers: number; five_plus_seekers: number
    second_session_pct: number | null; repeat3_pct: number | null; free_trials: number
    avg_duration_mins: number | null; short_voice_sessions: number; short_voice_pct: number | null
    missing_duration_telemetry: number; rating: number | null; rating_count: number | null
    five_star_pct: number | null; low_rating_pct: number | null; reports: number; reports_per_100: number
    refunds: number; refunds_per_100: number; blocks: number; blocks_per_100: number; earnings: number
  }
  type RepeatPair = { seeker_name: string; listener_name: string; count: number }
  const [qualitySummary, setQualitySummary] = useState<QualitySummary | null>(null)
  const [qualityWindow, setQualityWindow] = useState<'today' | '7d' | '30d' | '90d' | 'all'>('30d')
  const [qualityListeners, setQualityListeners] = useState<ListenerQuality[]>([])
  const [qualityPairs, setQualityPairs] = useState<RepeatPair[]>([])
  const [qualityLoading, setQualityLoading] = useState(false)
'''

s2, n = re.subn(r"  // Quality metrics\n.*?  const showToast =", state_new + "\n  const showToast =", s, count=1, flags=re.S)
if n != 1:
    raise SystemExit('Quality state block not found')
s = s2

loader = r'''  const loadQuality = useCallback(async (windowKey: 'today' | '7d' | '30d' | '90d' | 'all' = qualityWindow) => {
    setQualityLoading(true)
    const res = await fetch(`/api/admin/quality?window=${windowKey}`, { headers: adminHeaders() }).catch(() => null)
    if (res?.ok) {
      const json = await res.json()
      setQualitySummary(json.summary ?? null)
      setQualityListeners(json.listeners ?? [])
      setQualityPairs(json.repeatPairs ?? [])
    } else {
      showToast('Failed to load quality metrics')
    }
    setQualityLoading(false)
  }, [qualityWindow]) // eslint-disable-line react-hooks/exhaustive-deps
'''
s2, n = re.subn(r"  const loadQuality = useCallback\(async \(\) =>\n.*?  \}, \[\]\) // eslint-disable-line react-hooks/exhaustive-deps\n", loader, s, count=1, flags=re.S)
if n != 1:
    raise SystemExit('loadQuality function not found')
s = s2

quality_ui = r'''        {tab === 'quality' && (
          <>
            <div className="section-title" style={{ justifyContent: 'space-between', flexWrap: 'wrap' }}>
              <span>Quality</span>
              <div style={{ display: 'flex', gap: 6, alignItems: 'center', flexWrap: 'wrap' }}>
                {(['today', '7d', '30d', '90d', 'all'] as const).map(w => (
                  <button key={w} className={`filter-btn${qualityWindow === w ? ' active' : ''}`} onClick={() => { setQualityWindow(w); loadQuality(w) }}>
                    {w === 'today' ? 'Today' : w === '7d' ? '7 days' : w === '30d' ? '30 days' : w === '90d' ? '90 days' : 'All time'}
                  </button>
                ))}
                <button className="btn btn-teal" style={{ padding: '5px 12px' }} onClick={() => loadQuality(qualityWindow)}>↻ Refresh</button>
              </div>
            </div>

            {qualityLoading ? (
              <div className="kpi-grid">{Array.from({ length: 8 }).map((_, i) => <div key={i} className="skeleton" style={{ height: 90 }} />)}</div>
            ) : qualitySummary ? (
              <>
                <div style={{ fontSize: 12, color: 'var(--gray)', fontWeight: 700, marginBottom: 16 }}>
                  Quality for {qualityWindow === 'today' ? 'today' : qualityWindow === '7d' ? 'the last 7 days' : qualityWindow === '30d' ? 'the last 30 days' : qualityWindow === '90d' ? 'the last 90 days' : 'all time'}. Cohort rates exclude users whose conversion window has not matured yet.
                </div>

                <div className="section-title" style={{ fontSize: 15 }}>Customer outcome</div>
                <div className="kpi-grid" style={{ marginBottom: 24 }}>
                  <div className="kpi-card"><div className="kpi-label">Trial → Paid · 7d</div><div className="kpi-value">{qualitySummary.trial_to_paid_7d.pct == null ? '—' : `${qualitySummary.trial_to_paid_7d.pct}%`}</div><div className="kpi-sub">{qualitySummary.trial_to_paid_7d.converted} / {qualitySummary.trial_to_paid_7d.eligible} matured trials</div></div>
                  <div className="kpi-card"><div className="kpi-label">Trial → Paid · 24h</div><div className="kpi-value">{qualitySummary.trial_to_paid_24h.pct == null ? '—' : `${qualitySummary.trial_to_paid_24h.pct}%`}</div><div className="kpi-sub">{qualitySummary.trial_to_paid_24h.converted} / {qualitySummary.trial_to_paid_24h.eligible} matured trials</div></div>
                  <div className="kpi-card"><div className="kpi-label">Paid → 2nd Paid · 7d</div><div className="kpi-value">{qualitySummary.paid_to_second_7d.pct == null ? '—' : `${qualitySummary.paid_to_second_7d.pct}%`}</div><div className="kpi-sub">{qualitySummary.paid_to_second_7d.converted} / {qualitySummary.paid_to_second_7d.eligible} matured first-paid</div></div>
                  <div className="kpi-card"><div className="kpi-label">Paid → 2nd Paid · 30d</div><div className="kpi-value">{qualitySummary.paid_to_second_30d.pct == null ? '—' : `${qualitySummary.paid_to_second_30d.pct}%`}</div><div className="kpi-sub">{qualitySummary.paid_to_second_30d.converted} / {qualitySummary.paid_to_second_30d.eligible} matured first-paid</div></div>
                  <div className="kpi-card"><div className="kpi-label">1 paid session</div><div className="kpi-value">{fmt(qualitySummary.one_paid_seekers)}</div></div>
                  <div className="kpi-card"><div className="kpi-label">2+ paid sessions</div><div className="kpi-value">{fmt(qualitySummary.two_plus_paid_seekers)}</div></div>
                  <div className="kpi-card"><div className="kpi-label">3+ paid sessions</div><div className="kpi-value">{fmt(qualitySummary.three_plus_paid_seekers)}</div><div className="kpi-sub">{qualitySummary.three_plus_rate_pct == null ? '—' : `${qualitySummary.three_plus_rate_pct}% of paid seekers`}</div></div>
                  <div className="kpi-card"><div className="kpi-label">5+ paid sessions</div><div className="kpi-value">{fmt(qualitySummary.five_plus_paid_seekers)}</div></div>
                </div>

                <div className="section-title" style={{ fontSize: 15 }}>Listener quality</div>
                <div className="table-wrap" style={{ marginBottom: 28 }}>
                  <table><thead><tr>
                    <th>Listener</th><th style={{textAlign:'right'}}>Paid</th><th style={{textAlign:'right'}}>Unique seekers</th><th style={{textAlign:'right'}}>2nd-session %</th><th style={{textAlign:'right'}}>3+ seekers</th><th style={{textAlign:'right'}}>Rating</th><th style={{textAlign:'right'}}>Rated</th><th style={{textAlign:'right'}}>Reports / 100</th><th style={{textAlign:'right'}}>Refunds / 100</th><th style={{textAlign:'right'}}>Blocks / 100</th><th style={{textAlign:'right'}}>Short voice</th><th style={{textAlign:'right'}}>Avg duration</th><th style={{textAlign:'right'}}>Earnings</th>
                  </tr></thead><tbody>
                    {qualityListeners.map(l => <tr key={l.listener_id}>
                      <td style={{fontWeight:800}}>{l.name}</td><td style={{textAlign:'right'}}>{l.paid_sessions}</td><td style={{textAlign:'right'}}>{l.unique_paid_seekers}</td>
                      <td style={{textAlign:'right'}}>{l.second_session_pct == null ? '—' : `${l.second_session_pct}%`}</td><td style={{textAlign:'right'}}>{l.three_plus_seekers}</td>
                      <td style={{textAlign:'right'}}>{l.rating == null ? '—' : `${l.rating} ⭐`}</td><td style={{textAlign:'right'}}>{l.rating_count == null ? '—' : l.rating_count}</td>
                      <td style={{textAlign:'right'}}>{l.paid_sessions ? l.reports_per_100 : '—'}</td><td style={{textAlign:'right'}}>{l.paid_sessions ? l.refunds_per_100 : '—'}</td>
                      <td style={{textAlign:'right'}}>{l.paid_sessions ? l.blocks_per_100 : '—'}</td><td style={{textAlign:'right'}}>{l.paid_sessions ? `${l.short_voice_pct ?? 0}%` : '—'}</td>
                      <td style={{textAlign:'right'}}>{l.avg_duration_mins == null ? '—' : `${l.avg_duration_mins} min`}</td><td style={{textAlign:'right'}}>₹{fmt(l.earnings)}</td>
                    </tr>)}
                    {qualityListeners.length === 0 && <tr><td colSpan={13} className="empty">No completed paid-session listener data in this window.</td></tr>}
                  </tbody></table>
                </div>

                <div className="section-title" style={{ fontSize: 15 }}>Session quality</div>
                <div className="kpi-grid" style={{ marginBottom: 24 }}>
                  <div className="kpi-card"><div className="kpi-label">Completion rate</div><div className="kpi-value">{qualitySummary.completion_rate_pct == null ? '—' : `${qualitySummary.completion_rate_pct}%`}</div><div className="kpi-sub">Completed / terminal sessions</div></div>
                  <div className="kpi-card"><div className="kpi-label">Short voice sessions</div><div className="kpi-value">{qualitySummary.short_voice_pct == null ? '—' : `${qualitySummary.short_voice_pct}%`}</div><div className="kpi-sub">{qualitySummary.short_voice_sessions} under 2 min; missing telemetry excluded</div></div>
                  <div className="kpi-card"><div className="kpi-label">Sessions rated</div><div className="kpi-value">{qualitySummary.sessions_rated_pct == null ? '—' : `${qualitySummary.sessions_rated_pct}%`}</div><div className="kpi-sub">{qualitySummary.rating_count == null ? 'Rating history unavailable' : `${qualitySummary.rating_count} ratings in window`}</div></div>
                  <div className="kpi-card"><div className="kpi-label">Average rating</div><div className="kpi-value">{qualitySummary.avg_rating == null ? '—' : `${qualitySummary.avg_rating} ⭐`}</div><div className="kpi-sub">5-star {qualitySummary.five_star_pct == null ? '—' : `${qualitySummary.five_star_pct}%`} · 1–2 star {qualitySummary.low_rating_pct == null ? '—' : `${qualitySummary.low_rating_pct}%`}</div></div>
                  <div className="kpi-card"><div className="kpi-label">Refund rate</div><div className="kpi-value">{qualitySummary.refund_rate_pct}%</div><div className="kpi-sub">{qualitySummary.refund_requests} requests · ₹{fmt(qualitySummary.refund_amount)}</div></div>
                  <div className="kpi-card"><div className="kpi-label">Reports / 1K sessions</div><div className="kpi-value">{qualitySummary.report_rate_per_1000}</div><div className="kpi-sub">{qualitySummary.report_count} reports</div></div>
                  <div className="kpi-card"><div className="kpi-label">Blocks / 100 sessions</div><div className="kpi-value">{qualitySummary.block_rate_per_100_sessions}</div><div className="kpi-sub">{qualitySummary.block_count} blocks</div></div>
                  <div className="kpi-card"><div className="kpi-label">Crisis flags</div><div className="kpi-value">{qualitySummary.crisis_flags}</div><div className="kpi-sub">Flagged sessions</div></div>
                </div>

                <div className="section-title" style={{ fontSize: 15 }}>Marketplace health</div>
                <div className="kpi-grid" style={{ marginBottom: 24 }}>
                  <div className="kpi-card"><div className="kpi-label">Paid sessions</div><div className="kpi-value">{fmt(qualitySummary.paid_sessions)}</div><div className="kpi-sub">{fmt(qualitySummary.paid_minutes)} paid minutes</div></div>
                  <div className="kpi-card"><div className="kpi-label">Listeners taking sessions</div><div className="kpi-value">{fmt(qualitySummary.listeners_taking_sessions)}</div><div className="kpi-sub">Online now: {fmt(qualitySummary.online_listeners_now)}</div></div>
                  <div className="kpi-card"><div className="kpi-label">Top listener concentration</div><div className="kpi-value">{qualitySummary.top_listener_concentration_pct == null ? '—' : `${qualitySummary.top_listener_concentration_pct}%`}</div><div className="kpi-sub">Share of paid sessions from #1</div></div>
                  <div className="kpi-card"><div className="kpi-label">Failed starts</div><div className="kpi-value">{fmt(qualitySummary.failed_starts)}</div><div className="kpi-sub">Cancelled/failed/expired before start</div></div>
                  <div className="kpi-card"><div className="kpi-label">Unmatched sessions</div><div className="kpi-value">{fmt(qualitySummary.unmatched_sessions)}</div><div className="kpi-sub">No listener id</div></div>
                  <div className="kpi-card"><div className="kpi-label">Voice / text</div><div className="kpi-value">{fmt(qualitySummary.voice_paid_sessions)} / {fmt(qualitySummary.text_paid_sessions)}</div><div className="kpi-sub">Completed paid sessions</div></div>
                  <div className="kpi-card"><div className="kpi-label">Avg duration</div><div className="kpi-value">{qualitySummary.avg_session_duration_mins == null ? '—' : `${qualitySummary.avg_session_duration_mins} min`}</div></div>
                  <div className="kpi-card"><div className="kpi-label">Missing telemetry</div><div className="kpi-value">{fmt(qualitySummary.missing_duration_telemetry)}</div><div className="kpi-sub">Not classified as poor quality</div></div>
                </div>

                {qualityPairs.length > 0 && <>
                  <div className="section-title" style={{ fontSize: 15 }}>Repeat seeker–listener relationships</div>
                  <div className="table-wrap"><table><thead><tr><th>Seeker</th><th>Listener</th><th style={{textAlign:'right'}}>Paid sessions together</th></tr></thead><tbody>
                    {qualityPairs.map((p, i) => <tr key={i}><td>{p.seeker_name}</td><td style={{fontWeight:800}}>{p.listener_name}</td><td style={{textAlign:'right',fontWeight:800}}>{p.count}</td></tr>)}
                  </tbody></table></div>
                </>}
              </>
            ) : <div className="empty">No quality data available.</div>}
          </>
        )}
'''

s2, n = re.subn(r"        /\* ─── QUALITY ──────────────────────────────────────────────────────── \*/\n        \{tab === 'quality' && \(.*?\n        \)\}\n", quality_ui, s, count=1, flags=re.S)
if n != 1:
    raise SystemExit('Quality render block not found')
s = s2

path.write_text(s)
print('Patched admin Quality UI')
