import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy:         '#1E3D5C',
        'navy-light': '#2A5580',
        orange:       '#F7941D',
        'orange-light':'#FAB155',
        cream:        '#FAFAF8',
        'slate-blue': '#4A7FA5',
        'soft-blue':  '#B8D4E8',
        'warm-gray':  '#F2EFE9',
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body:    ['var(--font-body)',    'sans-serif'],
      },
      fontWeight: {
        '400': '400',
        '500': '500',
        '600': '600',
        '700': '700',
        '800': '800',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        'card':       '0 2px 12px rgba(30,61,92,0.08)',
        'card-hover': '0 4px 24px rgba(30,61,92,0.14)',
        'orange':     '0 4px 16px rgba(247,148,29,0.30)',
      },
    },
  },
  plugins: [],
}
export default config
