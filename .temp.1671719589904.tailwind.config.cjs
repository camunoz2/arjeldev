/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./src/pages/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  darkMode: class,
  theme: {
    extend: {
      colors: {
        arjelgrey4: "#3b3b3b",
        arjelgrey3: "#727272",
        arjelgrey2: "#aaaaaa",
        arjelgrey1: "#dedede",
        arjelred: "#c91e1e",
        arjelpink: "#c76aae",
        arjelgreen: "#3AB45A",
        arjelblue: "#3c37c9",
        arjelgradient1: "#C9B9B8",
        arjelgradient2: "#BDBEE2",
      },
      fontFamily: {
        body: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        websites: "url('/images/websites.webp')",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
