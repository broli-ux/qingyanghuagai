const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? (process.env.VUE_APP_PUBLIC_PATH || './')
    : '/',
  productionSourceMap: false,
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = '氢氧化钙 的博客'
      return args
    })
  }
})
