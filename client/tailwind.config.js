/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        padding: "2rem",
        center: true,
      },
      colors: {
        "base-green": "#DAF7A6",
        "base-yelow": "#FFC300 ",
        "base-orange": "#FF5733",
        "base-red": "#C70039 ",
        "base-purple": "#900C3F ",
        "dark-purple": "#581845",
      },
    },
  },
  plugins: [],
};
