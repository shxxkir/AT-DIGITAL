/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'sm': '375px',
      'md': '768px',
      'lg': '1200px',
      'xl': '1440px'
    },
    extend: {
      colors: {
        primary: '#6B3CC9',
        secondary: '#F28D35',
        analogous_1: '#6A44F2',
        analogous_2: '#1CBDDD',
        triadic: '#52378C',
        darkColour_1: '#78BF91',
        darkColour_2: '#4DCA79',
        textColour: '#2F2F2F',
        textColourLight: '#545A75',
        textColourSubtle: '#9C9991',
        accent_1: '#E2F2FE',
        accent_2: '#FFF8E0',
        error: '#FF0335',
        success: '#5EB30B',
      }
    },
  },
  plugins: [],
}