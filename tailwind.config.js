/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        font1:['Righteous','sans-serif'],
        font2:['Saira','sans-serif'],
      },
      spacing: {
        '61.5rem': '61.5rem',
        '-5rem': '-5rem',
        '30rem': '30rem',
        '2rem': '-2rem',
        '15': '15rem',
        'font15': '15px',
      },
      colors: {
        'blue2': '#0E38CD',
        'text1': '#324361',
        'custom-purple': '#E441FF',
        'custom-blue': '#00B3FF',
        'custom-cyan': '#1901F8',
      },
      width:{
        '22': '22rem',
        '15': '15rem',
      },
      size:{
        '45': '3rem',
        '14': '14px',
      }
    },
    
  },
  plugins: [],
}

