const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
        'neutral-warm': {
          25: '#f7f8fa',
          50: '#f5f6f7',
          100: '#eceff2',
          200: '#e3e6ea',
          300: '#d9dce1',
          400: '#b7bcc3',
          500: '#9aa0a6',
          600: '#6f767d',
          700: '#3a3f44',
          800: '#1b1f23',
          900: '#111316',
        },
      },
      fontFamily: {
        sans: ['Supreme', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        display: ['Chubbo', 'Supreme', 'system-ui', 'Arial', 'sans-serif'],
      },
      borderRadius: {
        xl: '0.75rem',
        '2xl': '1rem',
        '3xl': '1.25rem',
      },
      boxShadow: {
        card: '0 2px 6px rgba(17,19,22,0.06), 0 12px 24px rgba(17,19,22,0.06)',
        header: '0 1px 0 rgba(0,0,0,0.06)',
        medium: '0 4px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)',
        large: '0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)'
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
