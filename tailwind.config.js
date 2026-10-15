/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0878F9',
          navy: '#07182F',
          electric: '#00A6FF',
          lightBg: '#F5F8FC',
          primaryText: '#152238',
          secondaryText: '#64748B',
          success: '#168653',
          risk: '#DC3545',
          navyMuted: '#0D2342',
          navyBorder: '#163156',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        telugu: ['"Noto Sans Telugu"', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(7, 24, 47, 0.05)',
        'premium': '0 10px 30px -5px rgba(8, 120, 249, 0.1), 0 5px 15px rgba(0, 0, 0, 0.04)',
        'card': '0 4px 20px -2px rgba(7, 24, 47, 0.06)',
      }
    },
  },
  plugins: [],
}
