/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        karels: {
          50: "#effcfc",
          100: "#d7f6f6",
          200: "#b4eded",
          300: "#80e0e0",
          400: "#45c8cb",
          500: "#2ebfc4",
          600: "#258c95",
          700: "#24717a",
          800: "#265c64",
          900: "#234e56",
          950: "#12333a",
        },
      },
    },
  },
  plugins: [],
};
