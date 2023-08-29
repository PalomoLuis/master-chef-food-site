/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'title': ['Libre Baskerville', 'serif'],
        'body': ['Open Sans', 'Helvetica', 'sans-serif']
      },
      colors: {
        'silver': '#2A3135',
        'silver2': '#262C2F',
        'silver3': '#2F3639',
        'zafiro': '#0C151A',
        'golden': '#F8AB39'
      },
      dropShadow: {
        '2l': '2px 2px 10px rgba(0, 0, 0, 0.40)',
        '8l': '8px 8px 20px rgba(0, 0, 0, 0.30)',
        '2xl': '20px 20px 20px rgba(0, 0, 0, 0.25)',
        '3xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      }
    },
  },
  plugins: [],
}

