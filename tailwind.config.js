/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        rubik:
          ['Rubik-Regular', 'sans-serif'],
        "rubik-bold": ['Rubik-Bold', 'sans-serif'],
        "rubil-regular": ['Rubik-Regular', 'sans-serif'],
        "rubil-semibold": ['Rubik-SemiBold', 'sans-serif'],
        "rubil-medium": ['Rubik-Medium', 'sans-serif'],
        "rubil-extrabold": ['Rubik-ExtrabBold', 'sans-serif'],
        "rubil-light": ['Rubik-Light', 'sans-serif'],
      },
      colors: {
        "primary": {
          400: '#0061FF0A',
          300: '#0061FF1A',
          500: '#0061FF',
        },
        "accent": {
          100: '#FBFBFD'
        },
        "black": {
          DEFAULT: '#000000',
          100: '#8C8E98',
          200: '#666876',
          300: '#191d31'
        },
        "danger": '#F75555'
      }
    },
  },
  plugins: [],
}