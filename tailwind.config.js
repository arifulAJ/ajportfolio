/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      texts: {
        "footer-text": "38px",
      },
      colors: {
        "bg-color": "#FFF6EB",
        button: "#FF6B00",
        "hover-effect": "#A08BB9",
        "text-color": "#696968",
        testimonial: "#fff0e6",
        "hover-testimonial": "#FFF5EF",
        footer: "#101010",
      },

      keyframes: {
        portfolioEnterFromLeft: {
          "0%": {
            opacity: 0,
            transform: "translateX(-100%)",
          },
          "100%": {
            opacity: 1,
            transform: "translateX(0)",
          },
        },
        portfolioEnterFromRight: {
          "0%": {
            opacity: 0,
            transform: "translateX(100%)",
          },
          "100%": {
            opacity: 1,
            transform: "translateX(0)",
          },
        },
        portfolioEnterFromBottom: {
          "0%": {
            opacity: 0,
            transform: "translateY(100%)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        portfolioEnterFromTop: {
          "0%": {
            opacity: 0,
            transform: "translateY(-100%)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        portfolioEnterFromTopLeft: {
          "0%": {
            opacity: 0,
            transform: "translate(-100%, -100%)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(0, 0)",
          },
        },
        portfolioEnterFromTopRight: {
          "0%": {
            opacity: 0,
            transform: "translate(100%, -100%)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(0, 0)",
          },
        },
        portfolioEnterFromBottomLeft: {
          "0%": {
            opacity: 0,
            transform: "translate(-100%, 100%)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(0, 0)",
          },
        },
        portfolioEnterFromBottomRight: {
          "0%": {
            opacity: 0,
            transform: "translate(100%, 100%)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(0, 0)",
          },
        },

        fadeInUp: {
          "0%": {
            opacity: 0,
            transform: "translateY(30%)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(3 rem)",
          },
        },
      },
      animation: {
        "portfolio-enter-left": "portfolioEnterFromLeft 1s ease-in-out",
        "portfolio-enter-right": "portfolioEnterFromRight 1.5s ease-in-out",
        "portfolio-enter-bottom": "portfolioEnterFromBottom 2s ease-in-out",
        "portfolio-enter-top": "portfolioEnterFromTop 2.5s ease-in-out",
        "portfolio-enter-top-left": "portfolioEnterFromTopLeft 3s ease-in-out",
        "portfolio-enter-top-right":
          "portfolioEnterFromTopRight 2.5s ease-in-out",
        "portfolio-enter-bottom-left":
          "portfolioEnterFromBottomLeft 2s ease-in-out",
        "portfolio-enter-bottom-right":
          "portfolioEnterFromBottomRight 2.5s ease-in-out",
        "fade-in-up-one": "fadeInUp 1s ease-in-out",
        "fade-in-up-two": "fadeInUp 1.5s ease-in-out",
        "fade-in-up-three": "fadeInUp 2s ease-in-out",
        "fade-in-up-four": "fadeInUp 2.5s ease-in-out",
        "fade-in-up-five": "fadeInUp 3.5s ease-in-out",
        "fade-in-up-resume1": "fadeInUp 1.5s ease-in-out",
        "fade-in-up-resume2": "fadeInUp 1.5s ease-in-out",
      },
    },
  },
  plugins: [],
};
