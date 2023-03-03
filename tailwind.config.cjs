/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{svelte,html,js,ts}"],
  theme: {
    extend: {
      fontFamily: {
        prompt: ["Prompt", "sans-serif"],
      }
    },
    colors: {
      orange: "#F1895C",
      indigo: "#516079",
      darkblue: "#2E3244",
      grey: "#C5C6C6",
      white: "#FFFFFF",
      transparent: "transparent",
    },
  },
  plugins: [],
}
