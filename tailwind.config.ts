import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'lg-xl': { 'max': '1535', 'min': '1280' },  // Custom breakpoint range

      },
      keyframes: {
        gradientPulse: {
          '0%, 100%': {
            borderColor: 'rgba(255, 0, 150, 1)',
            boxShadow: '0 0 15px rgba(255, 0, 150, 0.8)',
          },
          '25%': {
            borderColor: 'rgba(0, 255, 255, 1)',
            boxShadow: '0 0 15px rgba(0, 255, 255, 0.8)',
          },
          '50%': {
            borderColor: 'rgba(0, 255, 0, 1)',
            boxShadow: '0 0 15px rgba(0, 255, 0, 0.8)',
          },
          '75%': {
            borderColor: 'rgba(255, 255, 0, 1)',
            boxShadow: '0 0 15px rgba(255, 255, 0, 0.8)',
          },
        },
      },
      animation: {
        gradientPulse: 'gradientPulse 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;



// fontFamily: {
//   'sans': ['Helvetica', 'Arial', 'sans-serif'],
// },

