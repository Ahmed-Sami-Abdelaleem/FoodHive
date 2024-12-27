import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#007AFF",
          dark: "#0055FF",
        },
        secondary: {
          DEFAULT: "#FF2D55",
          dark: "#FF375F",
        },
        background: {
          DEFAULT: "#F9FAFB",
          dark: "#1A1A1A",
        },
        text: {
          DEFAULT: "#333333",
          dark: "#FFFFFF",
        },
        border: {
          DEFAULT: "#E5E5E5",
          dark: "#333333",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
