// tailwind.config.ts

import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'light-gray': '#f5f5f5',
        'blue': '#1e90ff', // Choose a shade of blue you like
      },
    },
  },
  plugins: [],
};

export default config;
