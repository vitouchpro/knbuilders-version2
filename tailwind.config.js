/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Warm earthy palette (construction materials theme)
        // "navy" kept as a key name to avoid sweeping renames, but now maps to charcoal/olive-dark.
        navy: {
          DEFAULT: '#2e2a26', // charcoal — main dark text / dark sections
          deep: '#262320',
          dark: '#1c1a17',
        },
        // Secondary olive / earthy green
        olive: {
          DEFAULT: '#6b7045',
          dark: '#565a37',
          light: '#838754',
        },
        // Primary terracotta / rust orange
        orange: {
          DEFAULT: '#c9591f',
          light: '#d97334',
        },
        cream: {
          DEFAULT: '#faf6ef', // warm off-white page bg
          deep: '#f4ecdd', // section bg / cards
          tan: '#ede4d3', // borders / icon circles
        },
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Poppins', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1.25rem',
        screens: { '2xl': '1200px' },
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        kenburns: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.09)' },
        },
        'scroll-cue': {
          '0%': { transform: 'translateY(0)', opacity: '0' },
          '40%': { opacity: '1' },
          '80%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { opacity: '0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out both',
        'spin-slow': 'spin-slow 18s linear infinite',
        kenburns: 'kenburns 7s ease-out both',
        'scroll-cue': 'scroll-cue 1.8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
