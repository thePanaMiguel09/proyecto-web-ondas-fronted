/** @type {import('tailwindcss').Config} */
export default {
content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3A7BFF",
        secondary: "#5C9DFF",
        dark: "#1A2235",
        darkblue: "#0F1F4F",
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
      keyframes: {
  float: {
    '0%, 100%': { transform: 'translateY(0)' },
    '50%': { transform: 'translateY(-10px)' },
  },
  floatSlow: {
    '0%, 100%': { transform: 'translateY(0)' },
    '50%': { transform: 'translateY(-5px)' },
  },
  floatFast: {
    '0%, 100%': { transform: 'translateY(0)' },
    '50%': { transform: 'translateY(-20px)' },
  },
  floatWide: {
    '0%, 100%': { transform: 'translate(0, 0)' },
    '50%': { transform: 'translate(15px, -15px)' },
  },
},
animation: {
  float: 'float 4s ease-in-out infinite',
  floatSlow: 'floatSlow 6s ease-in-out infinite',
  floatFast: 'floatFast 2s ease-in-out infinite',
  floatWide: 'floatWide 5s ease-in-out infinite',
},
    },
  },
  plugins: [],
};