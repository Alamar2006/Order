/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['system-ui', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          blue: 'var(--accent)',
          dark: '#0D1220',
          light: '#F5F8FF',
        },
        body: 'var(--bg)',
        text: 'var(--text)',
        'text-2': 'var(--text-2)',
        border: 'var(--border)',
        surface: 'var(--surface)',
      },
      boxShadow: {
        card: '0 32px 80px rgba(15, 23, 42, 0.18)',
      },
      borderRadius: {
        card: '32px',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out both',
      },
    },
  },
  plugins: [],
}

