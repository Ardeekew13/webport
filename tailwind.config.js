/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#061824',
        secondary: '#D72029',
        tertiary: '#EDEDED',
        accent: '#182339',
        // Basketball theme
        ball: {
          DEFAULT: '#F26A1B',
          light: '#FF8A3D',
          dark: '#C2410C',
        },
        court: {
          dark: '#0B0B0C',
          light: '#FAF6EF',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Impact', 'Arial Narrow', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      screens: {
        'sm': '300px',
        'md': '768px',
        'lg': '1024px',
      },
    },
  },
  plugins: [],
};
