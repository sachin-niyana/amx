/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      xsm: "14px",
      sm: "16px",
      xmd: "18px",
      md: "24px",
      lg: "32px",
      xl: "48px",
      "2xl": "58px",
      "3xl": "64px",
      "4xl": "85px",
    },
    fontFamily: {
      Inter: ["Inter", "sans-serif"],
      Oswald: ["Oswald", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "header-bg": "url('/assets/background/header-bg.png')",
        "Expertise-bg": "url('/assets/background/expertise-bg.png')",
        "choose-bg": "url('/assets/background/choose-bg.png')",
      },
      colors: {
        "Rich-Black": "#0a0a0a",
        green: "#3ca59d",
        "light-gray": "#cecece",
        "dark-gray": "#848484",
        "black-gray": "#878787",
        "dark-black": "#1d1d1d",
        "light-green": "#184b40",
        gray: "#bbbbbb",
        bomboy: "#b5b5b5",
        "light-white": "#fefefe",
        "light-black": "#3b3b3b",
      },
      boxShadow: {
        greenShadow: "0px 0px 10px 4px #13292b",
      },
    },
  },
  plugins: [],
};
