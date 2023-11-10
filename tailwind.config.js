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
        dark: "#222532",
        darkHd: "#0e1224",
        darkMd: "#2d334f",
        light: "#FFFFFF",
        pink: "#DA5D7D",
      },
      width: {
        42: "168px",
      },
    },
    minWidth: {
      xs: "320px",
      s: "750px",
    },
    maxWidth: {
      xs: "320px",
      s: "800px",
      "1/2": "50%",
    },
  },
  plugins: [],
};
