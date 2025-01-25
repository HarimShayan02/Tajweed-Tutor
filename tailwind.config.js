/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/Pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Elements/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      poppin: ["var(--font-poppins)"],
    },
    colors: {
      lightGray: "#f7f7f7",
      gray: "#f4f4f4",
      transparent: "transparent",
      white: "#FFFFFF",
      black: "#000000",
      lightBlack: "#6c6c6c",
      primary: "#5bbcea",
      activePrimary: "#9ffd8e",
      secondary: "#37A4DD",
      secondaryLight: "#5bbcea",
      lightblue: "rgba(94, 181, 220, 0.33)",
    },
    boxShadow: {
      shadowblack: "0px 4px 60px rgba(0, 0, 0, 0.25)",
      shadowlightPurple: "0 4px 60px rgb(153,152,254, 0.25)",
      shadowlightpink: " 0 4px 60px rgba(255,96,246, 0.25)",
      shadowdarkpink: "0 4px 60px rgba(220,57,94,0.25)",
      shadowred: "0px 4px 60px rgba(240, 81, 56, 0.25)",
      shadowyellow: "0px 4px 60px rgba(248, 137, 9, 0.25)",
      shadowblue: "0px 4px 60px rgba(97, 218, 251, 0.25)",
      card: "0 4px 10px rgba(0, 0, 0, 0.06)",
      card2: "0 4.2px 10.5px rgba(0, 0, 0, 0.15)",
      aboutcard: "0 10px 20px rgba(0, 0, 0, 0.1)",
      whatwedidcard: "0px 4px 10px rgba(0, 0, 0, 0.15)",
    },
    extend: {
      backgroundImage: {
        // "gradient-1":
        //   "linear-gradient(22deg, rgb(91 188 234 / 30%) 0%, rgb(91 234 229 / 15%) 100%, rgb(0 212 255 / 0%) 100%);",
        // // "linear-gradient(22deg, rgb(91 188 234 / 50%) 0%, Rgba(159, 253, 142, 0.10) 95%, rgb(0 212 255 / 0%) 100%);",
        // // "linear-gradient(200.21deg, rgba(131,204,255,0.65) 0%, rgba(159, 253, 142, 0.1) 98.7%);",
        // "gradient-2":
        //   "linear-gradient(221.4deg, rgba(91, 188, 234, 0.15) -41.46%, rgba(91, 234, 229, 0.02) 102.64%)",
        // "about-us-gradient-1":
        //   "linear-gradient(200.4deg, rgba(55, 164, 221 , 70%) 50.46%, rgb(91 234 229 / 30%) 100.64%)",
        // "about-us-gradient-2":
        //   "linear-gradient(221.4deg, rgba(63, 147, 255, 0.3) -41.46%, rgba(161, 255, 139, 0.3) 102.64%)",
        // "technology-gradient":
        //   "linear-gradient(221.4deg, rgba(91, 188, 234, 0.6) -40.46%, rgba(91, 234, 299, 0.1) 102.64%)",
        // "outsource-gradient":
        //   // "linear-gradient(to right, rgba(94, 181, 220, 0.3) -0.75%, rgba(159, 252, 143, 0.3) 99.55%)",
        //   "linear-gradient(22deg, rgb(91 188 234 / 30%) 0%, rgb(91 234 229 / 15%) 100%, rgb(0 212 255 / 0%) 100%);",
        // "tab-gradient":
        //   "linear-gradient(22deg, rgb(91 188 234 / 40%) 0%, rgb(91 234 229 / 30%) 100%, rgb(0 212 255 / 0%)  100%);",
        // "circle-gradient":
        //   "linear-gradient(120.5deg,  rgba(131,204,255,1) 10%, #37A4DD 90.3%);",
        // "case-study-gradient":
        //   "linear-gradient(90.77deg, rgba(94, 181, 234, 0.55) 9.2%, rgba(91, 234, 229, 0.15) 96.82%)",
        // "industry-title-gradient":
        //   "linear-gradient(90deg, rgba(131,204,255,0.3) 50.1%, rgba(94, 181, 220, 0) 87.66%)",
        // "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        // "gradient-conic":
        //   "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      transform: {
        "-20": "translateY(-20%)",
        0: "translateY(0)",
      },
    },
  },
  variants: {
    extend: {
      backgroundImage: ["responsive"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
