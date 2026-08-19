#!/usr/bin/env node
/**
 * ONE-TIME BACKFILL — shrink images already sitting in Supabase Storage.
 *
 * WHY: lib/compress-image.ts only shrinks NEW uploads. Every avatar uploaded
 * before that shipped is still full-size and still burning CDN egress on every
 * /browse page load. This re-encodes them in place.
 *
 * DESIGN — deliberately conservative:
 *   • Overwrites each object AT THE SAME PATH, IN THE SAME FORMAT.
 *     Nothing in the database changes. No avatar_url is rewritten, no row is
 *     touched, no URL breaks, no orphaned files are left behind. The bytes
 *     behind an unchanged URL simply get smaller.
 *   • Idempotent — safe to run repeatedly. Already-small objects are skipped.
 *   • --dry-run by default. It will not write anything until you pass --apply.
 *
 * NOTE ON CDN: Supabase Storage sends cache-control max-age=3600. Because the
 * URL does not change, edge caches keep serving the OLD large object for up to
 * one hour after this runs. Egress drops after that TTL expires. This is
 * expected — do not re-run the script thinking it failed.
 *
 * USAGE
 *   npm install --no-save sharp ws
 *   export NEXT_PUBLIC_SUPABASE_URL="https://<project>.supabase.co"
 *   export SUPABASE_SERVICE_ROLE_KEY="<service role key>"
 *
 *   node scripts/recompress-storage.mjs            # dry run — reports only
 *   node scripts/recompress-storage.mjs --apply    # actually rewrite
 *
 * The service-role key bypasses RLS. Run this from your own machine, never
 * from the browser, and never commit the key.
 */

import { createClient } from '@supabase/supabase-js'
import ws from 'ws'

// Every diagnostic goes to STDOUT, not stderr.
//
// The first CI run finished green with a completely empty report: the runner
// piped stdout through `tee` (masking the exit code) while the failure message
// went to stderr and vanished. Anything worth reading must therefore be on
// stdout, and any unexpected throw must announce itself rather than exiting
// silently. The workflow now also sets pipefail and redirects 2>&1, but this
// script should be legible however it is invoked.
const say = (...a) => console.log(...a)

process.on('unhandledRejection', (err) => {
  say('\n  FATAL (unhandled rejection):', err instanceof Error ? err.stack : String(err))
  process.exit(1)
})
process.on('uncaughtException', (err) => {
  say('\n  FATAL (uncaught exception):', err instanceof Error ? err.stack : String(err))
  process.exit(1)
})

const URL_ = process.env.NEXT_PUBLIC_SUPABASE_URL
const KEY  = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!URL_ || !KEY) {
  say('\n  Missing env vars.\n')
  say('  export NEXT_PUBLIC_SUPABASE_URL="https://<project>.supabase.co"')
  say('  export SUPABASE_SERVICE_ROLE_KEY="<service role key>"\n')
  process.exit(1)
}

let sharp
try {
  sharp = (await import('sharp')).default
} catch {
  say('\n  sharp is not installed or failed to load. Run:\n')
  say('    npm install --no-save --include=optional sharp\n')
  say('  (--include=optional matters: sharp ships libvips as an optional')
  say('   platform dependency that npm can silently skip.)\n')
  process.exit(1)
}

const APPLY = process.argv.includes('--apply')

// Mirrors lib/compress-image.ts so backfilled files match new uploads.
const BUCKETS = [
  { name: 'avatars',       maxDim: 256,  quality: 82, skipUnder: 40 * 1024,  prefixes: [''] },
  { name: 'verifications', maxDim: 1600, quality: 85, skipUnder: 250 * 1024, prefixes: ['selfies', 'ids'] },
]

// This script only ever calls Storage (plain REST) — never Realtime. But
// createClient() unconditionally constructs a RealtimeClient, which requires
// a WebSocket implementation. Node has one natively only from v22 on; under
// Node 20/21 the CONSTRUCTOR THROWS before a single Storage call is made,
// even though nothing here ever opens a socket.
//
// Passing `transport: undefined` does NOT fix this — verified directly: it
// still throws on Node 20, because the client checks for a transport before
// falling back to the native check, not instead of it. The only fix that
// actually works (confirmed on Node 20.20.2, the version that produced this
// exact error, and safe on 22) is supplying a real transport via the `ws`
// package, exactly as the error message itself suggests. This makes the
// script correct on any Node version — CI, a laptop, whatever — rather than
// relying on the workflow's Node 22 pin as the only thing standing between it
// and this exception.
const sb = createClient(URL_, KEY, {
  auth: { persistSession: false },
  realtime: { transport: ws },
})
const kb = n => (n / 1024).toFixed(1) + ' KB'

/** List every object under a prefix, paging past the 100-item default. */
async function listAll(bucket, prefix) {
  const out = []
  const limit = 100
  for (let offset = 0; ; offset += limit) {
    const { data, error } = await sb.storage.from(bucket).list(prefix, { limit, offset })
    if (error) throw new Error(`list ${bucket}/${prefix}: ${error.message}`)
    if (!data || data.length === 0) break
    // Entries with no id are sub-folders, not objects.
    out.push(...data.filter(o => o.id).map(o => ({ ...o, path: prefix ? `${prefix}/${o.name}` : o.name })))
    if (data.length < limit) break
  }
  return out
}

/** Re-encode to the SAME format so the object path never has to change. */
async function shrink(buf, ext, maxDim, quality) {
  const img = sharp(buf, { failOn: 'none' }).rotate() // .rotate() applies EXIF orientation
  const meta = await img.metadata()
  if (!meta.width || !meta.height) return null
  if (meta.width <= maxDim && meta.height <= maxDim) return null // already small enough

  const resized = img.resize(maxDim, maxDim, { fit: 'inside', withoutEnlargement: true })
  if (ext === 'png')  return { buf: await resized.png({ compressionLevel: 9 }).toBuffer(), contentType: 'image/png' }
  if (ext === 'webp') return { buf: await resized.webp({ quality }).toBuffer(),            contentType: 'image/webp' }
  return { buf: await resized.jpeg({ quality, mozjpeg: true }).toBuffer(),                 contentType: 'image/jpeg' }
}

console.log(`\n=== Supabase Storage re-compress — ${APPLY ? 'APPLY (writing)' : 'DRY RUN (no writes)'} ===\n`)

let totalBefore = 0, totalAfter = 0, changed = 0, skipped = 0, failed = 0

for (const bucket of BUCKETS) {
  let objects = []
  try {
    for (const prefix of bucket.prefixes) objects.push(...await listAll(bucket.name, prefix))
  } catch (err) {
    console.log(`  ${bucket.name}: SKIPPED — ${err.message}\n`)
    continue
  }

  console.log(`  ${bucket.name}: ${objects.length} object(s)`)

  for (const obj of objects) {
    const ext = (obj.name.split('.').pop() || '').toLowerCase()
    if (!['jpg', 'jpeg', 'png', 'webp'].includes(ext)) { skipped++; continue }

    const size = obj.metadata?.size ?? 0
    if (size && size < bucket.skipUnder) { skipped++; continue }

    try {
      const { data, error } = await sb.storage.from(bucket.name).download(obj.path)
      if (error) throw new Error(error.message)
      const before = Buffer.from(await data.arrayBuffer())

      const result = await shrink(before, ext, bucket.maxDim, bucket.quality)
      if (!result || result.buf.length >= before.length) { skipped++; continue }

      totalBefore += before.length
      totalAfter  += result.buf.length
      changed++

      console.log(`    ${obj.path.padEnd(48)} ${kb(before.length).padStart(10)} -> ${kb(result.buf.length).padStart(9)}  (${(before.length / result.buf.length).toFixed(0)}x)`)

      if (APPLY) {
        const { error: upErr } = await sb.storage.from(bucket.name).upload(obj.path, result.buf, {
          upsert: true,
          contentType: result.contentType,
          cacheControl: '3600',
        })
        if (upErr) throw new Error(upErr.message)
      }
    } catch (err) {
      failed++
      console.log(`    ${obj.path.padEnd(48)} FAILED — ${err.message}`)
    }
  }
  console.log('')
}

console.log('  ─────────────────────────────────────────────')
console.log(`  rewritten : ${changed}`)
console.log(`  skipped   : ${skipped} (already small, or not an image)`)
console.log(`  failed    : ${failed}`)
if (changed) {
  console.log(`  bytes     : ${kb(totalBefore)} -> ${kb(totalAfter)}  (${(totalBefore / totalAfter).toFixed(0)}x smaller)`)
  const perLoad = (totalBefore - totalAfter) / 1024 / 1024
  console.log(`  saves     : ~${perLoad.toFixed(1)} MB per full browse-page load`)
}
if (!APPLY && changed) console.log('\n  This was a DRY RUN. Re-run with --apply to write the changes.')
console.log('')
