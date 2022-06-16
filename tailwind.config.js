module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      colors:{
        'mainBlue':'#09a2ff',
        'menuGray':'#000000b3',
        'textBlue':'#3b99e0',
        'bottomBlack':'#2b2f31',
      },
      screens: {
        'ph': {'min': '350px', 'max': '800px'},
      }
    },
  },
  plugins: [],
}
