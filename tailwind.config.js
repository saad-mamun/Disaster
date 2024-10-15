/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily : {
        'Bebas-Neue':'"Bebas Neue", sans-serif',
        'Onset':'"Onest", sans-serif',
      },
      colors:{
        DarkBlack:'#09090B',
        Opas:'#71717A',
        Orange:'#F26922',
        Bhind:'#E4E4E7'
      },

    },
  },
  plugins: [],
}

