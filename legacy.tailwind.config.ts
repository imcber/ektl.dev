import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      colors: {
        foreground: "var(--foreground)",
        principal: "var(--principal)",
        secondary: "var(--secondary)",
        secondary_light: "var(--secondary_light)",
      },
      keyframes: {
        move_right: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(200px)" },
        },
        move_right_reverse: {
          "0%": { transform: "translateX(200px)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        move_right: "move_right 2s ease 1 forwards",
        move_right_reverse: "move_right_reverse 2s ease 1 forwards",
      },
    },
  },
};
export default config;
