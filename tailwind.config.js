/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#C0C0C0",
        tertiary: "#110F0F",
        "black-100": "#101010",
        "black-200": "#050505",
        "white-100": "#f3f3f3",
        silver: "#C0C0C0",
        platinum: "#E5E5E5",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
      keyframes: {
        "text-shimmer": {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" }, // Changed to 100% for smooth loop if gradient is seamless, or 200%
        },
      },
      animation: {
        "text-shimmer": "text-shimmer 2.5s linear infinite",
      },
    },
  },
  plugins: [],
}
