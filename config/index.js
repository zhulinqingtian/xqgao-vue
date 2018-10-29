// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
    build: {
        env: require('./prod.env'),
        index: path.resolve(__dirname, '../dist/index.html'),
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        productionSourceMap: true,
        // Gzip off by default as many popular static hosts such as
        // Surge or Netlify already gzip all static assets for you.
        // Before setting to `true`, make sure to:
        // npm install --save-dev compression-webpack-plugin
        productionGzip: false,
        productionGzipExtensions: ['js', 'css'],
        // Run the build command with an extra argument to
        // View the bundle analyzer report after build finishes:
        // `npm run build --report`
        // Set to `true` or `false` to always turn it on or off
        bundleAnalyzerReport: process.env.npm_config_report
    },
    dev: {
        env: require('./dev.env'),
        port: 8181,
        autoOpenBrowser: true,
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        proxyTable: {
          '/v1': {
            //拦截所有v1开头的xhr请求
            context: ['/v1'],
            target: "https://xiaoce-timeline-api-ms.juejin.im",
            cookieDomainRewrite: {
              // 不用cookie
            },
            changeOrigin: true,// TODO 重点，此处本地就会虚拟一个服务替我们接受或转发请求
            secure: false
          },
          '/v2': {
            //拦截所有v2开头的xhr请求  掘金活动列表
            context: ['/v2'],
            target: "https://event-storage-api-ms.juejin.im",
            cookieDomainRewrite: {
              // 不用cookie
            },
            changeOrigin: true,// TODO 重点，此处本地就会虚拟一个服务替我们接受或转发请求
            secure: false
          },
          // 程序人生
          '/api/articles': {
            context: ['/api/articles'],
            target: "https://www.csdn.net",
            changeOrigin: true,
            secure: false
          }
        },
        // CSS Sourcemaps off by default because relative paths are "buggy"
        // with this option, according to the CSS-Loader README
        // (https://github.com/webpack/css-loader#sourcemaps)
        // In our experience, they generally work as expected,
        // just be aware of this issue when enabling this option.
        cssSourceMap: false
    }
}
