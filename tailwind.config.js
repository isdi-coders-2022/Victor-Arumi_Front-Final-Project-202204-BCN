module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customblue: "#1974b6",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
