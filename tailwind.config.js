/*eslint no-undef: "error"*/
/*eslint-env node*/
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true
    },
    extend: {},
  },
  plugins: [require("daisyui")],
  themes: ["light", "dark"],
}