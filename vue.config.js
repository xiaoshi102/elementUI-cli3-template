module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000/'
      }
    },
    // overlay: {
    //   warnings: true,
    //   errors: true
    // }
  },
  transpileDependencies: [
    /\/node_modules\/vue-echarts\//,
    /\/node_modules\/resize-detector\//
  ]
}
