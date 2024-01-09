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
        'primary': {
          light: '#57C2A8',
          dark: '#31304D'
        },
        'secondary': {
          dark: '#E5E7EB'
        },
        'text': {
          light: '#48233c',
          dark: 'white'
        },
        'pink': '#E9507A'
        
      }
    },
  },
  plugins: [],
}