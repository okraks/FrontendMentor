module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Commissioner"],
        serif: ["Commissioner"],
        mono: ["Commissioner"],
        display: ["Commissioner"],
        body: ["Commissioner"],
      },
      backgroundImage: (theme) => ({
        "hero-desktop": "url('/src/assets/images/image-hero-desktop.jpg')",
      }),
      colors: {
        "moderate-cyan": "hsl(176, 50%, 47%)",
        "dark-cyan": "hsl(176, 72%, 28%)",
        black: "#000",
      },
    },
  },
  plugins: [],
};
