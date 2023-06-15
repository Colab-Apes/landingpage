/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('./assets/hero.jpeg')",
        mobilehero: "url('./assets/heroMobile.jpeg')",
        sidenav: "url('./assets/overlaysidenav.png')",
      },
      colors: {
        main: "#054E12",
        second: "#47019d",
        three: "#e00256",
        black: "#212121",
        white: "#ffffff",
        gray: "#808080e2",
      },
    },
    fontFamily: {
      lato: ["Lato", ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
};
