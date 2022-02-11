const px2rem = require('postcss-px2rem')
const postcss = px2rem({
    remUnit: 37.5 // baseSize 设计稿等分后的值，比例和网页rem 一致
})

module.exports = {
    css: {
        loaderOptions: {
          postcss: {
            plugins: [
              postcss
            ]
          }
        }
      }
}