import type { Config } from 'tailwindcss'



const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {

      fontFamily: {
        sans: '"SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      },
      colors: {
        background: "#000212",
        white: "#fff",
        "border-white": "rgba(255, 255, 255, 0.08)",
        grey: "#8C8C8C",
        green: "#B7F0AD",
        transparent: "transparent",
        "primary-text": "rbg(180, 188, 208)",
        offWhite: "#f7f8f8",
        black: "#000",
    },
      fontSize: {
        xs: "1.3rem",
        sm: "1.4rem",
        md: "1.6rem",
        lg: "1.8rem",
        xl: ["2.2rem", "1.3"],
        "2xl": "2.4rem",
        "3xl": "2.6rem",
        "4xl": "3.2rem",
        "5xl": "4rem",
        "6xl": ["4.4rem", "1"],
        "7xl": ["4.8rem", "1"],
        "8xl": ["8rem", '1'],

       
      },
      spacing: {
        0: "0",
        1: "0.4rem",
        2: "0.8rem",
        3: "1.2rem",
        4: "1.6rem",
        5: "2rem",
        6: "2.4rem",
        7: "2.8rem",
        8: "3.2rem",
        9: "3.6rem",
        10: "4rem",
        11: "4.4rem",
        12: "4.8rem",
      },
      backgroundImage: {
        "primary-gradient": "linear-gradient(92.88deg, rgb(69, 94, 181) 9.16%, rgb(86, 67, 204) 43.89%, rgb(103, 63, 215) 64.72%)",
        "page-gradient": "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(120, 119, 198, 0.3), transparent)",
        "hero-gradient": "radial-gradient(ellipse 50% 80% at 20% 40%, rgba(93, 52, 221, 0.1), transparent, radial-gradient(ellipse 50% 80% at 80% 50%, rgb(120, 190, 0.15), transparent)",
        "hero-glow": "conic-gradient(from 230.29deg at 51.63% 52.16%, rgb(36, 0, 255) 0deg, rgb(0, 135, 255) 67.5deg, rgb(108, 39, 157) 198.75deg, rgb(24, 38, 163) 251.25deg, rgb(54, 103, 106) 301.88deg, rgb(105, 30, 255) 360deg)",
        "glow-lines": 
      "linear-gradient(var(--direction), #9d9bf2 0.43%, #7877c6 14.11%, rgba(120,119,198,0) 62.95%)",
      },
      boxShadow: {
        primary: "rgb(80 63 285 / 50%) 8px 1px 40px"
      },
      transitionDelay: {
        '0': "8ms",
      },
      keyframes: {
        "fade-in": {
          from: { opacity: '0', transform: "translateY(-10px)" },
          to: { opacity: '1', transform: "none" }
        },
        "image-rotate": {
          "0%": { transform: "rotateX(25deg)" },
          "25%": { transform: "rotateX(25deg) scale(0.9)"},
          "60%": { transform: "none"},
          "100%": { transform: "none"}
        },
        "image-glow": {
          "0": {
            opacity: "0", 
            'animation-timing-function' : 'cubic-bezier(0.075, 0.25, 0.765, 1)'
          },
          "10%": {
            opacity: "1", 
            'animation-timing-function' : 'cubic-bezier(0.12, 0.01, 0.08, 0.99)'
          },
          "100%": {
            opacity: "0.2",
          }
        },
       "glow-line-horizontal": {
        "0%" : { opacity: "0", transform : "translateX(0px)" },
        "5%" : { opacity: "1", transform : "translateX(0px)" },
        "90%" : { opacity: "1" },
        "100%" : { opacity: "0", transform : "translateX(45rem)" },
       },
       "glow-line-vertical": {
        "0%" : { opacity: "0", transform : "translateY(0px)" },
        "5%" : { opacity: "1", transform : "translateY(0px)" },
        "90%" : { opacity: "1" },
        "100%" : { opacity: "0", transform : "translateY(45rem)" },
       }
      },
    animation: {
      "fade-in": "fade-in 1000ms var(--animation-delay, 0ms) ease forwards",
      "image-rotate": "image-rotate 1400ms ease forwards",
      "image-glow": "image-glow 4000ms 500ms ease-out forwards",
      "glow-line-horizontal": "glow-line-horizontal var(--animation-duration) ease-in forwards",
      "glow-line-vertical": "glow-line-vertical var(--animation-duration) ease-in forwards",

    },
  },

  plugins: []
}
export default config
