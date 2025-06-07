module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        vt: ["var(--font-vt323)"],
        kiwi: ["var(--font-kiwi-maru)"],
      },
    },
  },
  plugins: [],
};
