/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./App.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        colors: {
          primary: "#537DA7", // 14ers brand blue
          secondary: "#89AFCB",
          accent: "#F4B942",
          background: "#F9FAFB",
          surface: "#FFFFFF",
          text: {
            primary: "#111827",
            secondary: "#6B7280",
          },
        },
        fontFamily: {
          sans: ["Manrope", "system-ui"],
        },
      },
    },
    plugins: [],
  };
  