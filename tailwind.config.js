/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    extend: {
      maxWidth: {
        app: '700px'
      },
      colors: {
        fellipe: '#333'
      }
    },
  },
  plugins: [],
}
