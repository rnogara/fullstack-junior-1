import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        'play': '0px 24px 50px rgba(0, 0, 0, 0.15)',
        'car': '0px 24px 24px rgba(0, 0, 0, 0.5)',
        'search': '0px 24px 50px rgba(0, 0, 0, 0.05)'
      },
    },
  },
  plugins: [],
};
export default config;
