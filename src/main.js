// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import iView from 'iview' // 导入组件库
import 'iview/dist/styles/iview.css' // 导入样式
import App from './App'
import router from './router'
import importDirective from '@/directive' // 自定义指令

Vue.config.productionTip = false

// 引入mockjs
require('./mock.js')

Vue.use(iView)
importDirective(Vue)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})

Vue.filter('getYMD', function(input) {
  return input.split(' ')[0];
})
