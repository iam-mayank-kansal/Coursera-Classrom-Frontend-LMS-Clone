import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      padding: {
        "side-padding": "var(--side-padding)",
      },
      backgroundColor: {
        "light-bg-1": "var(--light-bg-1)",
        "light-bg-2": "var(--light-bg-2)",
      },
      fontSize: {
        "header-heading": "var(--header-heading)",
        "h1-heading": "var(--h1-size)",
        "h2-heading": "var(--h2-size)",
        "h3-heading": "var(--h3-size)",
        "h4-heading": "var(--h4-size)",
        "h5-heading": "var(--h5-size)",
        "h6-heading": "var(--h6-size)",
        "para": "var(--p-size)",
        "para-small": "var(--p-small-size)",
      },
      colors: {
        "primary-color": "var(--primary-color)",
        "secondary-color": "var(--secondary-color)",
        "all-para-color": "var(--para-color)",
        "header-heading-color": "var(--header-heading-color)",
        "all-heading-color": "var(--heading-color)",
      },
      lineHeight: {
        "header-line-height": "var(--header-heading-line-height)",
        "h1-line-height": "var(--h1-line-height)",
        "h2-line-height": "var(--h2-line-height)",
        "h3-line-height": "var(--h3-line-height)",
        "h4-line-height": "var(--h4-line-height)",
        "h5-line-height": "var(--h5-line-height)",
        "h6-line-height": "var(--h6-line-height)",
        "para-line-height": "var(--p-line-height)",
        "para-small-line-height": "var(--p-small-line-height)",
      },
      fontWeight: {
        "header-heading-weight": "var(--header-heading-font-weight)",
        "h1-weight": "var(--h1-font-weight)",
        "h2-weight": "var(--h2-font-weight)",
        "h3-weight": "var(--h3-font-weight)",
        "h4-weight": "var(--h4-font-weight)",
        "h5-weight": "var(--h5-font-weight)",
        "h6-weight": "var(--h6-font-weight)",
      },
    },
  },
  plugins: [],
};
export default config;
