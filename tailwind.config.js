/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#2C3B4D",
        accent: "#FFB162", 
        secondary: "#1B2632",
        tertiary: "#A35139",
        light: {
          100: "#F8F6F3", // Tom mais claro inspirado no accent
          200: "#E8E4DE", // Tom neutro claro
          300: "#D1C8BC", // Tom derivado do primary mais claro
        },
        dark: {
          100: "#4A5A6B", // Tom médio baseado no primary
          200: "#364048", // Tom entre primary e secondary
          300: "#243138", // Tom escuro baseado no secondary
        }
      }
    },
  },
  plugins: [],
};