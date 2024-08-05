/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        mycolor: 
        {
          50: '#ffe9e9',
          100: '#f0c4c4',
          200: '#e19d9e',
          300: '#d47878',
          400: '#c65252',
          500: '#ad3939',
          600: '#872b2b',
          700: '#621e1f',
          800: '#3c1112',
          900: '#1b0202',
        },
        navcolor:
        {
          50: '#e4f5ff',
          100: '#bdddf4',
          200: '#2B3148',
          300: '#6bafe2',
          400: '#4698da',
          500: '#307fc1',
          600: '#246296',
          700: '#18466c',
          800: '#0b2a42',
          900: '#000f1a',
        }
      }
    },
  },
  plugins: [],
}

