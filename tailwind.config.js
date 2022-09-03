/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
       fontFamily:{
        body:['Comfortaa', 'cursive','Poppins', 'sans-serif']
       }
    },
  },
  plugins: [],
}
