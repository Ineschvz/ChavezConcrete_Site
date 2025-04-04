/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    fontFamily: {
      geist: ['var(--font-geist-sans)', 'sans-serif'],
      geistMono: ['var(--font-geist-mono)', 'monospace'],
      dmsans: ['var(--font-dmsans)', 'sans-serif'],
      inter: ['Inter', 'sans-serif'],  // Ensure this matches your font
    },
  },
  plugins: [],
};
