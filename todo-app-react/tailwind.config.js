/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary-blue": "hsl(220, 98%, 61%)",
      },
      backgroundImage: (theme) => ({
        cinema: "url('/src/img/people.jpg')",
        woman: "url('/src/img/woman.jpg')",
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
