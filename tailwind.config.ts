import type { Config } from "tailwindcss";
const plugin = require('tailwindcss/plugin')

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      //ISSUE WITH TAILWIN FONT
      // fontFamily: { 
      //   sans: ['var(--font-interTight']
      // },
      colors: {
        primary: "gradient-to-br from-[#B86ADF] via-[#FF6C63] to-[#FFB147]",
        secondary: "#030712",
        accent: "#FDFFED",
        shadow: "#909090",
      },
      backgroundImage: {
        'my-gradient': 'linear-gradient(0deg, #B86ADF 2.11%,#FF6C63, #FFB147 100%)',
        'my-gradient90': 'linear-gradient(90deg, #B86ADF 2.11%,#FF6C63, #FFB147 100%)',
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
  ],
};
export default config;
