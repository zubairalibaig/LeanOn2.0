import type { createAdminClient } from '@/lib/supabase-server'
import type { ContactKind } from '@/lib/contact-guard'
import { logger } from '@/lib/logger'

type Sb = ReturnType<typeof createAdminClient>

// A blocked attempt to share contact details shows up in admin → Reports as
// type 'contact_attempt' (reporter = the sender: it's an automatic flag, nobody
// reported them). BLOCKED = a contact detail, never delivered; otherwise a hint
// that was delivered (lib/contact-guard.ts tiers). At most 3 rows per sender per
// conversation per day.
export async function flagContactAttempt(sb: Sb, a: { senderId: string; sessionId: string | null; kinds: ContactKind[]; text: string; where: 'session_chat' | 'offline_message'; blocked: boolean }): Promise<void> {
  try {
    // Separate caps per tier, so a few harmless hints can never hide a real
    // blocked attempt from admin.
    let q = sb.from('reports').select('id', { count: 'exact', head: true })
      .eq('reporter_id', a.senderId).eq('type', 'contact_attempt')
      .ilike('description', a.blocked ? 'Automatic: tried%' : 'Automatic: may be%')
      .gte('created_at', new Date(Date.now() - 24 * 60 * 60_000).toISOString())
    q = a.sessionId ? q.eq('session_id', a.sessionId) : q.is('session_id', null)
    const { count } = await q
    if ((count ?? 0) >= 3) return
    const { error } = await sb.from('reports').insert({
      reporter_id: a.senderId,
      reported_user_id: a.senderId,
      session_id: a.sessionId,
      type: 'contact_attempt',
      description: a.blocked
        ? `Automatic: tried to share contact details (${a.kinds.join(', ')}) in ${a.where === 'session_chat' ? 'a session chat' : 'an offline message'} — BLOCKED, not delivered. Text: "${a.text.slice(0, 300)}"`
        : `Automatic: may be trying to move off LeanOn (${a.kinds.join(', ')}) in ${a.where === 'session_chat' ? 'a session chat' : 'an offline message'} — delivered, please review. Text: "${a.text.slice(0, 300)}"`,
      status: 'pending',
    })
    if (error) logger.warn('contact flag insert failed', { error: error.message })
  } catch (e) {
    logger.warn('contact flag failed', { error: String(e) })
  }
}
