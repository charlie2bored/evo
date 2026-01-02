/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'evo-dark': '#000000',
        'evo-gray': '#1a1a1a',
        'evo-red': '#F02D09',
        'evo-orange': '#F02D09',
        'evo-yellow': '#F02D09',
      },
      fontFamily: {
        'display': ['Bebas Neue', 'sans-serif'],
        'body': ['Montserrat', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(240, 45, 9, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(240, 45, 9, 0.8)' },
        },
      },
    },
  },
  plugins: [],
}
