/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}", "./images/**/*"],
  theme: {
    extend: {
      content: {
        cart: 'url("./images/icon-cart.svg")',
      },
      colors: {
        darkCyan: "hsl(158, 36%, 37%)",
        cream: "hsl(30, 38%, 92%)",
        veryDarkBlue: "hsl(212, 21%, 14%)",
        darkGrayishBlue: "hsl(228, 12%, 48%)",
      },
      fontFamily: {
        montserrat: ["Montserrat"],
        fraunces: ["Fraunces"],
      },
    },
  },
  plugins: [],
};
