/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "bell-swing": "bell-swing 2s ease-in-out infinite",
        "bell-swing-scale": "bell-swing-scale 2s ease-in-out infinite",
        typing:
          "typing 4s steps(38) 1s infinite alternate, blink 1s steps(1) infinite",
      },
      keyframes: {
        "bell-swing": {
          "0%, 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(10deg)" },
          "50%": { transform: "rotate(0deg)" },
          "75%": { transform: "rotate(-10deg)" },
        },
        "bell-swing-scale": {
          "0%, 100%": { transform: "rotate(0deg) scale(1)" },
          "25%": { transform: "rotate(10deg) scale(1.2)" },
          "50%": { transform: "rotate(0deg) scale(1)" },
          "75%": { transform: "rotate(-10deg) scale(1.2)" },
        },
        typing: {
          from: {
            width: 0,
          },
          to: {
            width: "100%",
          },
        },
        "typing-reset": {
          from: {
            width: "100%",
          },
          to: {
            width: 0,
          },
        },
        blink: {
          "50%": {
            borderColor: "transparent",
          },
        },
      },
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
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1536px",
      "2xl": "1700px",
    },
  },
  plugins: [],
  darkMode: "class",
};
