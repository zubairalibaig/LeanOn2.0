import { createAdminClient } from '@/lib/supabase-server'
import { logger } from '@/lib/logger'

export async function auditLog(
  action: string,
  actorId: string,
  targetId?: string,
  metadata?: Record<string, unknown>
) {
  try {
    const sb = createAdminClient()
    await sb.from('audit_logs').insert({
      action,
      actor_id: actorId,
      target_id: targetId ?? null,
      metadata: metadata ?? null,
    })
  } catch (err) {
    // Audit log failures must not crash the calling operation
    logger.error('auditLog write failed', { action, actorId, err: String(err) })
  }
}
