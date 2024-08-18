/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: '#061824', 
        secondary: '#D72029',
        tertiary: '#EDEDED',
        accent:'#182339 '
      },
      colors:{
        
          primary: '#061824', 
          secondary: '#D72029',
          tertiary: '#EDEDED',
          accent:'#182339 '
      },
      screens: {
      'sm': '300px',
   
      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
    }
    },
  },
  plugins: [],
};
