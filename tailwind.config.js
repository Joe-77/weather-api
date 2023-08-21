/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        primary: "#2d324d",
      },
      container: {
        center: true,
        padding: "1rem",
      },
      letterSpacing: {
        normal: "1.5px",
      },
    },
  },
  plugins: [],
};
