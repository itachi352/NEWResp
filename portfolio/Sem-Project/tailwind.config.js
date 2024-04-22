/** @type {import('tailwindcss').Config} */

import preline from "preline/plugin";
import form from "@tailwindcss/forms";

export default {
  content: ["./*.html", "./src/*.html", "node_modules/preline/dist/*.js"],

  darkMode: "class",

  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      baloo: ["'Baloo Bhai 2'", "'Poppins'", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#161730",
        secondary: "#112F38",
        slime: "#CCF32F",
        darkBlue: "#141b34",
      },
    },
  },
  plugins: [preline, form],
};
