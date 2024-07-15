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
        tertiary: "#0F172A",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"], // Varsayılan font Roboto oldu
      },
      fontWeight: {
        extrabold: 800,
        bold: 700,
        littlebold: 600,
        normal: 400,
      },
      boxShadow: {
        light: "0 3px 30px rgba(255, 255, 255, 0.4)",
      },
      aspectRatio: {
        "card": "83 / 100",
        "20/11": "20 / 11",
      },
      fontSize: {
        '18px': '18px',
        '24px': '24px',
      },
    },
  },
  plugins: [],
};
