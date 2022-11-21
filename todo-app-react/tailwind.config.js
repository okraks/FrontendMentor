/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary-blue": "hsl(220, 98%, 61%)",
        "very-dark-blue": "hsl(235, 21%, 11%)",
        "very-dark-desaturated-blue": "hsl(235, 24%, 19%)",
        "very-light-gray": "hsl(0, 0%, 98%)",
        "very-light-grayish-blue": "hsl(236, 33%, 92%)",
        "light-grayish-blue": "hsl(233, 11%, 84%)",
        "dark-grayish-blue": "hsl(236, 9%, 61%)",
        "very-dark-grayish-blue": "hsl(235, 19%, 35%)",
      },
      backgroundImage: (theme) => ({
        bgDesktopLight: "url('/src/img/bg-desktop-light.jpg')",
        bgDesktopDark: "url('/src/img/bg-desktop-dark.jpg')",
      }),
      fontFamily: {
        sans: ["Josefin Sans"],
        serif: ["Josefin Sans"],
        mono: ["Josefin Sans"],
        display: ["Josefin Sans"],
        body: ["Josefin Sans"],
      },
    },
  },
  variants: {
    extend: {
      animation: ["motion-safe"],
    },
  },
  plugins: [],
};
