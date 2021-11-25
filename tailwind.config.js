module.exports = {
  purge: {
    mode: "all",
    content: ["./**/*.html"],
    options: {
      whitelist: [],
    },
  },
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        lightGray: {
          DEFAULT: '#F0EFEA'
        },
        darkYellow: {
          DEFAULT: '#322E23'
        },
        white: {
          DEFAULT: '#ffffff'
        },
        bodyText: {
          DEFAULT: '#4D4A45'
        },
        gold: {
          DEFAULT: '#B0A890'
        },
        blue: {
          DEFAULT: '#6389C2'
        }
      },
    },
    fontFamily: {
      'sans': ['Inter', 'sans-serif'],
      'serif': ['El Messiri', 'serif']
     }
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
