/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "786px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        primary: "black",
        celestialblue: "#1e91d6",
        frenchblue: "#0072BB",
        yellowgreen: "#8FC93A",
        citrine: "#E4CC37",
        caramel: "#E18335"
      },
    },
  },
  plugins: [],
};
