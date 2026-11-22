/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: '#6650a4',
          'purple-light': '#7a62c2',
          'purple-dark': '#aa97e8',
          teal: '#258d8b',
          'teal-light': '#2ea4a2',
          'teal-dark': '#69c5bd',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        script: ['Caveat', 'cursive'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
