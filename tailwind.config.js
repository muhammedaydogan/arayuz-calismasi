/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-yellow": "#FFFBEB",
        white: "#FFFFFF",
        "light-orange": "#FEF3C7",
        "transparent-gray": "rgba(0, 0, 0, 0.5)",
        primary: "#78350F",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"], // Varsayılan font Roboto oldu
      },
      fontWeight: {
        extrabold: 800,
        bold: 700,
        normal: 600,
      },
    },
  },
  plugins: [],
};
