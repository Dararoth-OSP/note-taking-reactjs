/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      flex: {
        0: "0 0 250px",
      },

      // keyframes: {
      //   slideDown: {
      //     from: { opacity: "0", transform: "translateY(-3rem)" },
      //     to: { opacity: "1", transform: "translateY(0)" },
      //   },
      // },
    },
  },
  plugins: [],
};
