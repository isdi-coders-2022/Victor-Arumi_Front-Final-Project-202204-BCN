module.exports = {
  content: ["node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customblue: "#1974b6",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("flowbite/plugin")],
};
