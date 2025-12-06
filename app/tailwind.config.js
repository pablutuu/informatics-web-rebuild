/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "top-shadow-card": "var(--top-shadow-card)",
      },
    },
  },
  plugins: [],
};
