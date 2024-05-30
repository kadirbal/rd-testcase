import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

export default <Partial<Config>>{
  theme: {
    extend: {
      container: { center: true },
      colors: {
        bg: "#F7FAFC",
      },
      fontFamily: {
        hk: ['"Hanken Grotesk"', "sans-serif"],
      },
    },
  },
};
