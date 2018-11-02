var utils = require('./utils')
var webpack = require('webpack')
var config = require('../config')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})

module.exports = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: '#cheap-module-eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      // webpack配在这里配置全局标识变量，配置之后可以在项目中直接使用该变量
      //需要注意的是，配置的变量的值必须使用单引号包双引号，或者双引号包单引号，不然会导致报错
      'process.env': config.dev.env
    }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    new FriendlyErrorsPlugin()
  ]
});

/**
 * webpack插件介绍
 */

/**
 * 1.webpack.DefinePlugin
 * =======================
 * 配置全局变量，配置之后可以在项目中直接使用该变量
 * 需要注意的是，配置的变量的值必须使用单引号包双引号，或者双引号包单引号，不然会导致报错
 *
 *
 * 2.html-webpack-plugin
 * ======================
 *  提供HTML自动创建的插件，会将编译好的js文件内嵌进HTML中。
 *  plugins: [
     new HtmlWebpackPlugin({
          filename: 'index.html',
          template: 'src/index.html',
          inject: true
        })
    ]
 */

