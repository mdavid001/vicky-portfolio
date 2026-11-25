import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{ts,tsx}"],
  theme: { extend: {
    colors: { forest: "#173B36", blush: "#F5E9E3", cream: "#F8F5EF", gold: "#C49A6C", charcoal: "#292929" },
    fontFamily: { serif: ["var(--font-serif)", "Georgia", "serif"], sans: ["var(--font-sans)", "system-ui", "sans-serif"], script: ["var(--font-script)", "cursive"] },
  } },
} satisfies Config;
