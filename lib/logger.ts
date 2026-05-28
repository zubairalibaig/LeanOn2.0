type Level = 'info' | 'warn' | 'error' | 'audit'

interface LogEntry {
  ts: string
  level: Level
  msg: string
  ctx?: Record<string, unknown>
}

function log(level: Level, msg: string, ctx?: Record<string, unknown>) {
  const entry: LogEntry = { ts: new Date().toISOString(), level, msg, ...(ctx ? { ctx } : {}) }
  if (process.env.NODE_ENV === 'production') {
    // JSON format for log aggregation (Vercel, Datadog, etc.)
    const fn = level === 'error' ? console.error : level === 'warn' ? console.warn : console.log
    fn(JSON.stringify(entry))
  } else {
    const prefix = `[${entry.ts}] [${level.toUpperCase()}]`
    const fn = level === 'error' ? console.error : level === 'warn' ? console.warn : console.log
    fn(prefix, msg, ctx ?? '')
  }
}

export const logger = {
  info:  (msg: string, ctx?: Record<string, unknown>) => log('info',  msg, ctx),
  warn:  (msg: string, ctx?: Record<string, unknown>) => log('warn',  msg, ctx),
  error: (msg: string, ctx?: Record<string, unknown>) => log('error', msg, ctx),
  audit: (msg: string, ctx?: Record<string, unknown>) => log('audit', msg, ctx),
}
