/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "pattern-1": "url('./src/assets/bg-tree-1.jpg')",
        "pattern-2": "url('./src/assets/bg-tree-2.jpg')",
        "pattern-3": "url('./src/assets/bg-tree-3.jpg')",
        "pattern-4": "url('./src/assets/bg-tree-4.jpg')",
        "pattern-5": "url('./src/assets/bg-tree-5.jpg')",
        "pattern-6": "url('./src/assets/bg-tree-6.jpg')",
        "pattern-7": "url('./src/assets/bg-tree-7.jpg')",
      },
      colors: {
        base: "#F6F5F5",
      },
    },
  },
  plugins: [],
};