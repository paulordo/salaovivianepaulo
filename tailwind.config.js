/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'brand-red': '#E11D48', // Um vermelho vivo e moderno
        'brand-black': '#000000',
      },
      fontFamily: {
        // Se você estiver usando Google Fonts como 'Inter' ou 'Archivo Black'
        sans: ['Archivo Black', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}