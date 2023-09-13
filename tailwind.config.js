/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "5xl": ["3rem", "3rem"],
        "6xl": ["3.75rem", "3.75rem"],
        "7xl": ["4.5rem", "4.5rem"],
        "8xl": ["6rem", "6rem"],
        "9xl": ["8rem", "8rem"],
      },
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      borderRadius: {
        "r-5xl": "0px 45px 45px 0px",
      },
    },
  },
  plugins: [],
};
