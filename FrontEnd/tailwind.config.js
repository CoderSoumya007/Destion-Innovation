/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",,
  ],
  theme: {
    extend: {
      keyframes: {
        float: {
          '0%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(20px, -30px)' },
          '50%': { transform: 'translate(-15px, 20px)' },
          '75%': { transform: 'translate(10px, -10px)' },
          '100%': { transform: 'translate(0, 0)' },
        },
      },
      animation: {
        float: 'float 10s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}