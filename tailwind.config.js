// tailwind.config.js

module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00CCFF",
      },
      fontFamily: {
        "Poppins-Black": ["Poppins-Black", "sans-serif"],
        Poppins: ["Poppins-Regular", "sans-serif"],
        Roboto: ["Roboto-Regular", "sans-serif"],
        Merriweather: ["Merriweather-Light", "serif"],
      },
    },
  },
  plugins: [],
};
