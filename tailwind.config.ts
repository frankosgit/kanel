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
        "hero-gradient": 'conic-gradient(from 230.29deg at 51.63% 52.16%, rgb(36, 0 ,255) 0deg, rgb(0,135,255) 67.5deg, rgb(108,39,157) 198.75deg, rgb(24,38,163) 251.25deg, rgb(54, 103, 106) 301.88deg, rgb(105,30,255) 360deg)'
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
      },
    animation: {
      "fade-in": "fade-in 1000ms var(--animation-delay, 0ms) ease forwards",
    },
  },

  plugins: []
}
export default config
