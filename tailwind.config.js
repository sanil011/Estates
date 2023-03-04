/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html","./src/**/*.{html,js}"],
  theme: {
    extend: {},
    screens: {
      'phone': { 'max': '550px' },
      'photo':{'max':'700px'},
      'photo1':'700px',
      'mobile': '550px',
      'landscape':"838px",
      'tablet': '940px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    fontFamily: {
      "sans":['Montserrat','sans-serif','Mulish','Roboto']
    },
    animation: {
      slideup: 'slideup 1s ease-in-out',
      pop:"pop .2s ease-in-out"
    },
    keyframes: {
      slideup: {
          from: { opacity: 0, transform: 'translateY(25%)' },
          to: { opacity: 1, transform: 'none' },
      },
       pop: {
          from: { opacity: 1, transform: 'translateY(-10%)' },
          to: { opacity: 1, transform: 'none' },
      }

    }
  },
  plugins: [],
}
