import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class', '[data-theme^="dark-"]'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)'
        }
      },
      fontFamily: {
        jost: ['var(--font-jost)'],
        vibes: ['var(--font-vibes)']
      }
    }
  },
  plugins: []
}
export default config
