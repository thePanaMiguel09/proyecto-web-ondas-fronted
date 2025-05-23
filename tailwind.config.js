/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3A7BFF",
        secondary: "#5C9DFF",
        dark: "#1A2235",
        background: {
          DEFAULT: "#0F172A",
          dark: "#1A2235",
        },
        text: {
          light: "#FFFFFF",
          muted: "#B0B8C6",
        },
        accent: {
          blue: "#3A7BFF",
          purple: "#7B61FF",
          red: "#FF4B4B",
          green: "#2DCC70",
          orange: "#FAA033",
        },
      },
    },
  },
  plugins: [],
}
