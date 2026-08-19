'use client'

import Image from 'next/image'

/**
 * Avatar image, served through Vercel's image optimizer instead of directly
 * from Supabase Storage.
 *
 * WHY THIS EXISTS (production incident, Aug 2026):
 * Supabase bills "Cached Egress" — it charges for CDN cache HITS, not just
 * origin fetches. So caching harder on Supabase's side saves nothing; every
 * single avatar view a browser makes is billable egress. Compressing the
 * files (lib/compress-image.ts) cut the SIZE of each fetch, but the number of
 * fetches still scales linearly with traffic, and the account was already at
 * 298% of the 5 GB quota.
 *
 * Routing through next/image breaks that link entirely. Vercel fetches each
 * source image from Supabase ONCE, caches the optimized WebP at its own edge
 * (minimumCacheTTL is set to a year in next.config.js), and serves every
 * subsequent visitor itself. Supabase egress stops scaling with traffic and
 * becomes a fixed cost of roughly one fetch per avatar, forever.
 *
 * Avatar URLs are versioned with ?t=<upload-time>, so a re-upload produces a
 * new URL and therefore a new cache entry — a long TTL can never serve a
 * stale photo.
 *
 * The rendered element is still a plain <img>, so existing CSS that targets
 * `.av img { width:100%; height:100% }` keeps working untouched.
 */
export default function Avatar({
  src,
  alt,
  size = 96,
  className,
}: {
  src?: string | null
  alt?: string
  /** Pixel size requested from the optimizer. Layout still comes from CSS. */
  size?: number
  className?: string
}) {
  if (!src) return null

  // Local previews (FileReader data: URLs, object URLs) have no remote origin
  // for the optimizer to fetch, and would throw. Render them directly — they
  // cost no egress anyway, because they never leave the browser.
  if (src.startsWith('data:') || src.startsWith('blob:')) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={alt ?? ''} className={className} />
  }

  return (
    <Image
      src={src}
      alt={alt ?? ''}
      width={size}
      height={size}
      className={className}
      // Avatars are decorative-adjacent and always below the fold on /browse
      // after the first row; letting them lazy-load avoids fetching photos for
      // listeners the visitor never scrolls to.
      loading="lazy"
      // The optimizer needs a hint for srcset generation; every avatar slot in
      // the app is a small fixed square.
      sizes={`${size}px`}
    />
  )
}
