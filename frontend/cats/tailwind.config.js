/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans : ['Montserrat','Soyuz Grotesk','Arial']
    },
    extend: {
      colors: {
        backgroundColor: 'green'
      },
      sans: 'Soyuz+Grotesk'
    },
  },
  plugins: [],
}

