/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        primary: "#1E90FF"
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        OpenSans: ['Open Sans', 'sans-serif'],
        BNPPSansBold: ['BNPPSansBold', 'sans-serif']
      },
      animation: {
        appear: "appear 500ms ease-in-out forwards",
        "appear-top": "appear-top 500ms ease-in-out forwards",
        "appear-bottom": "appear-bottom 500ms ease-in-out forwards",
        expand: "expand 2000ms ease-in-out 00ms forwards infinite",
        "expand-delayed": "expand 2000ms ease-in-out 500ms forwards infinite",
        shake: "shake 500ms ease-in-out forwards",
        "appear-center": "appear-center 500ms ease-in-out forwards"
      },
      keyframes: {
        "appear-top": {
          "0%": { transform: "translateY(-20px)", opacity: 0 },
          "100%": { transform: "translateY(0px)", opacity: 1 }
        },
        appear:{
          "0%" : { opacity: 0 },
          "100%" : { opacity: 1 }
        },
        "appear-bottom": {
          "0%": { transform: "translateY(20px)", opacity: 0 },
          "100%": { transform: "translateY(0px)", opacity: 1 }
        },
        expand:{
          "0%": { opacity: 0, height: "0px", width: "0px" },
          "50%": { opacity: 1 },
          "90%": { height: "48px", width: "48px" },
          "100%": { opacity: 0 }
        },
        shake: {
          "0%": { transform: "translateX(0px)" },
          "25%": { transform: "translateX(-5px)" },
          "50%": { transform: "translateX(5px)" },
          "75%": { transform: "translateX(-5px)" },
          "100%": { transform: "translateX(0px)" }
        },
        "appear-center": {
          "0%": {transform: "scale(0.5)", opacity: 0 },
          "25%": {transform: "scale(1.05)", opacity: 1 },
          "50%": {transform: "scale(0.95)", opacity: 1 },
          "75%": {transform: "scale(1.02)", opacity: 1 },
          "100%": {transform: "scale(1)", opacity: 1 }
        }
      }
    },
  },
  plugins: [],
}

