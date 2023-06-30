/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          50: "#e4eeff",
          100: "#cfdfff",
          200: "#a8c2ff",
          300: "#7499ff",
          400: "#3e5cff",
          500: "#1322ff",
          600: "#0009ff",
          700: "#0009ff",
          800: "#0008e4",
          900: "#00193b",
          950: "#010026",
        },
        "light-blue": {
          50: "#f1fafe",
          100: "#e2f4fc",
          200: "#bee9f9",
          300: "#85d8f4",
          400: "#2cbce9",
          500: "#1caddb",
          600: "#0f8cba",
          700: "#0d7097",
          800: "#0f5f7d",
          900: "#124e68",
          950: "#0c3245",
        },
        purple: {
          50: "#f2f4fc",
          100: "#e2e6f7",
          200: "#cbd3f2",
          300: "#a7b7e9",
          400: "#7d91dd",
          500: "#5e6fd3",
          600: "#4a54c6",
          700: "#4044b5",
          800: "#3b3b98",
          900: "#323476",
          950: "#222249",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-rainbow":
          "linear-gradient(81.66deg, #00B5EE 7.21%, #FF45A4 45.05%, #FFBA00 78.07%)",

        "gradient-rainblue":
          "linear-gradient(90deg, #24CBFF 14.53%, #FC59FF 69.36%, #FFBD0C 117.73%)",
      },
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
