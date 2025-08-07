// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#102E7A",
          90: "#1A4393",
          80: "#2460B7",
          70: "#3981DB",
          60: "#4A64FF",
          40: "#76C2FF",
          30: "#89D3FF",
          20: "#BAE5FF",
          10: "#DCF3FF",
        },

        typography: {
          100: "#222833",
          90: "#262A37",
          80: "#353A47",
          70: "#3F4451",
          60: "#494E59",
          40: "#596780",
          30: "#9DA3BF",
          20: "#C1CDE9",
          10: "#EDF0F4",
        },
        background: {
          primary: "#FFFFFF",
          secondary: "#F6F6FB",
          tertiary: "#F7FAFC",
        },
      },
      fontSize: {
        xs: ["12px", { lineHeight: "22px" }],
        sm: ["14px", { lineHeight: "24px" }],
        base: ["16px", { lineHeight: "26px" }],
        lg: ["20px", { lineHeight: "30px" }],
        xl: ["24px", { lineHeight: "34px" }],
        "2xl": ["32px", { lineHeight: "42px" }],
        "3xl": ["36px", { lineHeight: "46px" }],
        "4xl": ["40px", { lineHeight: "50px" }],
        "5xl": ["72px", { lineHeight: "82px" }],
      },
      keyframes: {
        growY: {
          "0%": { transform: "scaleY(0)" },
          "100%": { transform: "scaleY(1)" },
        },
        growXwithout: {
          "0%": { transform: "scaleX(0) rotate(0deg)" },
          "100%": { transform: "scaleX(1) rotate(-22deg)" },
        },
        growXwith: {
          "0%": { transform: "scaleX(0) rotate(0deg)" },
          "100%": { transform: "scaleX(1) rotate(-7deg)" },
        },
      },
      animation: {
        "bar-graph": "growY 2s ease-in-out",
        "line-graph-without": "growXwithout 2s ease-in-out",
        "line-graph-with": "growXwith 2s ease-in-out",
      },
    },
  },
  plugins: [],
};
