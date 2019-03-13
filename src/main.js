// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import iView from 'iview'; // 导入组件库
import 'iview/dist/styles/iview.css'; // 导入样式
import App from './App';
import router from './router';
import importDirective from '@/directive'; // 自定义指令
import store from '../store';

import axios from 'axios'; //引用axios
Vue.prototype.$axios = axios; //解决在其他组件无法使用axios命令

Vue.use(iView);
importDirective(Vue);

Vue.config.devtools = process.env.NODE_ENV === 'development';
Vue.config.productionTip = false;

// 引入mockjs
require('./mock.js');

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

/**
 * =====================
 * 自定义指令
 * =====================
 */

Vue.directive('autoFcs',{
  // 钩子函数，被绑定元素插入父节点时调用 (父节点存在即可调用，不必存在于 document 中)。
  inserted(el){
    el.focus()
    console.log( 'inserted' );
  },
  // 只调用一次，指令第一次绑定到元素时调用，用这个钩子函数可以定义一个在绑定时执行一次的初始化动作。
  bind(){
    console.log( 'bind' );
  },
  // 所在组件的 VNode 更新时调用，但是可能发生在其孩子的 VNode 更新之前。
  // 指令的值可能发生了改变也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新
  update(){
    console.log( 'update' );
  },
  // 所在组件的 VNode 及其孩子的 VNode 全部更新时调用。
  componentUpdated(){
    console.log( 'componentUpdated' );
  },
  // 只调用一次，指令与元素解绑时调用。
  unbind(){
    console.log( 'unbind' );
  }
});

Vue.directive('textGreen', {
  inserted (el, binding, vnode) {
    // TODO 参数  （el: 可用来操作DOM节点   binging： 一个对象，指令的很多信息。  vnode: Vue编译生成的虚拟节点。）
    // binding.value : 自定义指令传来的值， 可以为数字、字符串、对象

    if (!binding.value.color && !binding.value.bgColor) return;
    el.style.color = binding.value.color;
    el.style.backgroundColor = binding.value.bgColor;
  },
  update(){
    console.log( 'update' );
  }
});

/**
 * =======================
 * 过滤
 * =======================
 */
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

