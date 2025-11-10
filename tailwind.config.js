/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#161815",
        secondary: "#6DE754",
        accent: "#909090",
        light: "#ffffff",
        cards: "#1f211e",
        overlay: "#6DE754",
      },
    },
  },
  plugins: [],
};
