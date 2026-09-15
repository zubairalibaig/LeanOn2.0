import type { Metadata } from 'next'
import AICountryPage, { AI_COUNTRIES, buildAICountryMetadata } from '@/app/ai-country-page'

const data = AI_COUNTRIES.singapore
export const metadata: Metadata = buildAICountryMetadata(data)
export default function Page() { return <AICountryPage data={data} /> }
