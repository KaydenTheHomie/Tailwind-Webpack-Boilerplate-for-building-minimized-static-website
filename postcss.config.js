module.exports = {
  plugins: [
    require('tailwindcss')('./tailwind.config.js'),
    require('autoprefixer'),require('postcss-uncss')({
      html:[
        './src/index.html'
      ]
    })
  ],
};
