/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: '#2B3945',         // Dark Blue for Dark Mode Elements
        veryDarkBlue: '#202C37',     // Very Dark Blue for Dark Mode Background
        deepBlueBlack: '#111517',    // Very Dark Blue for Light Mode Text
        mediumGray: '#858585',       // Dark Gray for Light Mode Input
        lightGray: '#FAFAFA',        // Very Light Gray for Light Mode Background
        pureWhite: '#FFFFFF',        // White for Dark Mode Text & Light Mode Elements
      },
      fontFamily: {
        'Nunito': ['"Nunito Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
  darkMode: 'selector',
}

