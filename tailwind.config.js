import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern":
          "url('https://images5.alphacoders.com/135/thumb-1920-1350706.jpeg')",
      },
    },
  },
  plugins: [daisyui],
};
