import type { Config } from "tailwindcss";

export default {
  content: {
    relative: true,
    files: ["../../templates/**/*.html"],
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("daisyui")
  ],
} satisfies Config;
