// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import iView from 'iview' // 导入组件库
import 'iview/dist/styles/iview.css' // 导入样式
import App from './App'
import router from './router'
import importDirective from '@/directive' // 自定义指令
import store from '../store';

Vue.config.productionTip = false

// 引入mockjs
require('./mock.js')

Vue.use(iView)
importDirective(Vue)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
});

Vue.filter('getYMD', function(input) {
  return input.split(' ')[0];
});


/**
 * package.json 文件里面的 dependencies 和 devDependencies 的区别
 * ===========================================================================
 *有两种使用npm install 安装模块或插件的命令，并写入到 package.json，比如：

    –save-dev 安装的 插件，被写入到 devDependencies 对象里面去
    –save 安装的 插件 ，被写入到 dependencies 对象里面去

 * –save-dev 和 –save 的区别

    devDependencies 里面的插件只用于开发环境，不用于生产环境
    dependencies 是需要发布到生产环境的。
 */

