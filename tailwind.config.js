/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          200: "rgb(219 234 254 / <alpha-value>)",
          900: "rgb(30 58 138 / <alpha-value>)",
        },
        accent: {
          500: "rgb(245 158 11 / <alpha-value>)",
          600: "rgb(217 119 6 / <alpha-value>)",
        },
      },
    },
  },
};
