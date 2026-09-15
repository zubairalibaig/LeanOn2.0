import type { Metadata } from 'next'
import CountrySeoPage from '@/app/country-seo-page'
import { COUNTRY_SEO_BY_SLUG } from '@/lib/country-seo'
const data = COUNTRY_SEO_BY_SLUG.canada
export const metadata: Metadata = { title: data.title, description: data.description, keywords: data.searchTerms, alternates: { canonical: 'https://www.leanon.app/canada', languages: { 'en-CA': 'https://www.leanon.app/canada', 'x-default': 'https://www.leanon.app/india' } }, openGraph: { title: data.title, description: data.description, url: 'https://www.leanon.app/canada', type: 'website', siteName: 'LeanOn' } }
export default function Page() { return <CountrySeoPage data={data} /> }
