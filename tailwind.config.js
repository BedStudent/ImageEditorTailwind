/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/Components/**/*.jsx",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      width: {
        "12/13": "95%",
        "11/12": "90%",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
