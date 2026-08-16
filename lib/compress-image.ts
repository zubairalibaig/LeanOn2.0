// Client-side image downscaling before Supabase Storage uploads.
//
// WHY THIS EXISTS (production incident, Aug 2026):
// Avatars were uploaded straight off the phone camera — up to 5 MB — and then
// rendered at 48x48 px on /browse (`.av{width:48px;height:48px}`). Supabase
// Free tier has no Storage Image Transformations, so nothing resized them on
// the way out. Result: 0.168 GB of stored avatars produced 12.03 GB of CDN
// egress in one month — 241% of the 5 GB quota, with project restriction
// pending. A 48px avatar needs ~3 KB; we were shipping up to 5,000 KB.
//
// Everything here runs in the BROWSER (canvas + toBlob). There is no server
// component and no dependency — Free tier can't transform, so it has to happen
// before the bytes ever leave the device.
//
// SAFETY CONTRACT: this must never block an upload. Every failure path returns
// the ORIGINAL file rather than throwing, so a browser without WebP, without
// createImageBitmap, or with a corrupt decode still completes the upload with
// exactly the behaviour it had before this module existed.

export type CompressOptions = {
  /** Longest edge of the output, in pixels. Aspect ratio is preserved. */
  maxDim: number
  /** Encoder quality, 0-1. Ignored by PNG. */
  quality: number
}

/** Avatars render at 48px (browse) and ~96px (profile headers). 256 covers
 *  2x retina at the largest use with room to spare. */
export const AVATAR_OPTS: CompressOptions = { maxDim: 256, quality: 0.82 }

/** KYC selfie / ID document. Must stay legible enough for an admin to read a
 *  12-digit Aadhaar number, so this is deliberately conservative — 1600px on
 *  the long edge is well beyond what that needs. */
export const DOCUMENT_OPTS: CompressOptions = { maxDim: 1600, quality: 0.85 }

/** Largest file we will even attempt to decode. Guards against a malicious or
 *  accidental multi-hundred-MB file exhausting browser memory on decode. */
export const MAX_INPUT_BYTES = 20 * 1024 * 1024

function canUseCanvas(): boolean {
  return (
    typeof document !== 'undefined' &&
    typeof HTMLCanvasElement !== 'undefined' &&
    typeof HTMLCanvasElement.prototype.toBlob === 'function'
  )
}

/** Feature-detect WebP encoding. Safari <14 and old Edge return a PNG blob
 *  when asked for WebP, so we check the produced type rather than trusting
 *  the request. Cached — the answer cannot change within a page load. */
let webpSupport: boolean | null = null
function supportsWebpEncode(): boolean {
  if (webpSupport !== null) return webpSupport
  try {
    const c = document.createElement('canvas')
    c.width = 1
    c.height = 1
    webpSupport = c.toDataURL('image/webp').startsWith('data:image/webp')
  } catch {
    webpSupport = false
  }
  return webpSupport
}

type Decoded = { width: number; height: number; draw: (ctx: CanvasRenderingContext2D, w: number, h: number) => void; done: () => void }

/**
 * Decode a File into something drawable, applying EXIF orientation.
 *
 * Orientation matters: phone cameras store portrait shots as landscape pixels
 * plus an EXIF rotation flag. `createImageBitmap` ignores that flag by default,
 * which would silently rotate every portrait avatar 90 degrees. We pass
 * `imageOrientation: 'from-image'` to honour it. The <img> fallback applies
 * orientation natively in all current browsers.
 */
async function decode(file: File): Promise<Decoded> {
  if (typeof createImageBitmap === 'function') {
    try {
      const bmp = await createImageBitmap(file, { imageOrientation: 'from-image' })
      return {
        width: bmp.width,
        height: bmp.height,
        draw: (ctx, w, h) => ctx.drawImage(bmp, 0, 0, w, h),
        done: () => bmp.close(),
      }
    } catch {
      // Older Safari throws on the options argument — fall through to <img>.
    }
  }

  const url = URL.createObjectURL(file)
  try {
    const img = await new Promise<HTMLImageElement>((resolve, reject) => {
      const el = new Image()
      el.onload = () => resolve(el)
      el.onerror = () => reject(new Error('decode failed'))
      el.src = url
    })
    return {
      width: img.naturalWidth,
      height: img.naturalHeight,
      draw: (ctx, w, h) => ctx.drawImage(img, 0, 0, w, h),
      done: () => URL.revokeObjectURL(url),
    }
  } catch (err) {
    URL.revokeObjectURL(url)
    throw err
  }
}

function toBlob(canvas: HTMLCanvasElement, type: string, quality: number): Promise<Blob | null> {
  return new Promise(resolve => canvas.toBlob(resolve, type, quality))
}

/**
 * Downscale and re-encode an image file.
 *
 * Returns a NEW File on success, or the ORIGINAL file if compression is
 * impossible or would not help. Never throws.
 */
export async function compressImage(file: File, opts: CompressOptions): Promise<File> {
  // Non-images (and SVG, which has no meaningful raster size and can carry
  // script) are passed through untouched — callers gate on type separately.
  if (!file.type.startsWith('image/') || file.type === 'image/svg+xml') return file
  if (file.size > MAX_INPUT_BYTES) return file
  if (!canUseCanvas()) return file

  let decoded: Decoded | null = null
  try {
    decoded = await decode(file)
    const { width: sw, height: sh } = decoded
    if (!sw || !sh) return file

    // Never upscale: a 64px avatar stays 64px rather than being blown up to 256.
    const scale = Math.min(1, opts.maxDim / Math.max(sw, sh))
    const dw = Math.max(1, Math.round(sw * scale))
    const dh = Math.max(1, Math.round(sh * scale))

    const canvas = document.createElement('canvas')
    canvas.width = dw
    canvas.height = dh
    const ctx = canvas.getContext('2d')
    if (!ctx) return file

    const useWebp = supportsWebpEncode()

    // JPEG has no alpha channel: a transparent PNG would composite onto black.
    // Paint white first so transparency degrades to white, not black.
    if (!useWebp) {
      ctx.fillStyle = '#FFFFFF'
      ctx.fillRect(0, 0, dw, dh)
    }

    ctx.imageSmoothingEnabled = true
    ctx.imageSmoothingQuality = 'high'
    decoded.draw(ctx, dw, dh)

    const outType = useWebp ? 'image/webp' : 'image/jpeg'
    const blob = await toBlob(canvas, outType, opts.quality)
    if (!blob || blob.size === 0) return file

    // If re-encoding made it bigger (already-optimised tiny images do this),
    // keep the original. The point is fewer bytes, not a uniform format.
    if (blob.size >= file.size) return file

    const ext = useWebp ? 'webp' : 'jpg'
    const base = file.name.replace(/\.[^.]+$/, '') || 'image'
    return new File([blob], `${base}.${ext}`, { type: outType, lastModified: Date.now() })
  } catch {
    return file
  } finally {
    try { decoded?.done() } catch { /* best effort */ }
  }
}

/**
 * Storage path extension for an uploaded file.
 *
 * Kept in one place because every upload site derives the extension from the
 * MIME type rather than the user-controlled filename — that was a deliberate
 * security decision and this preserves it.
 */
export function extForType(type: string): string {
  if (type === 'image/webp') return 'webp'
  if (type === 'image/png') return 'png'
  return 'jpg'
}
