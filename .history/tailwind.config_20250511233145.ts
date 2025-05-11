import { heroui } from '@heroui/react';
import type { Config } from 'tailwindcss';
export default {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        muted: {
          DEFAULT: '#6B7280',
          foreground: '#374151',
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [heroui()],
} satisfies Config;
