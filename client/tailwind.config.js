/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "green-base": "#DAF7A6",
        "yellow-base": "#FFC300",
        "orange-base": "#FF5733",
        "red-base": "#C70039",
        "dark-red": "#900C3F",
        "dark-purple": "#581845 ",
      },
      fontFamily: {
        Poppins: ["Poppins, sans-serif"],
      },
      container: {
        padding: "2rem",
        center: true,
      },
      screens: {
        sm: "640px",
        md: "768px",
      },
    },
  },
  plugins: [],
};
