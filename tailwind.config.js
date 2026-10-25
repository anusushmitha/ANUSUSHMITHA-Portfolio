/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ivory: {
          50: '#FDFCF9',
          100: '#F7F4EF',
          200: '#EFEBE1',
          300: '#E5DFCFC',
          400: '#D5CBB5',
        },
        charcoal: {
          900: '#0E0E0E',
          850: '#141414',
          800: '#1A1A1A',
          700: '#2A2A2A',
          600: '#4A4844',
          500: '#6E6B65',
          400: '#949089',
          300: '#B8B4AC',
        },
        champagne: {
          DEFAULT: '#B8A27A',
          light: '#CEBC99',
          dark: '#9E8860',
          muted: '#8C7A58',
        },
        taupe: {
          DEFAULT: '#9E8E7E',
          light: '#BDB1A4',
          dark: '#7D6E5F',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        editorial: ['"Playfair Display"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', '"SF Mono"', 'Menlo', 'monospace'],
      },
      letterSpacing: {
        'micro': '0.22em',
        'loose-editorial': '0.18em',
      },
      borderWidth: {
        'hairline': '1px',
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.85' },
        }
      }
    },
  },
  plugins: [],
}
