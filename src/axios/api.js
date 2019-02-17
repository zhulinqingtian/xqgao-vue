/**
 *  用 拦截器 axios.interceptors 对请求和响应做些拦截，定义一下 API 的前缀，处理一些常见的 HTTP 状态码
 */

import axios from 'axios'
import vue from 'vue'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// TODO http request 拦截器 一般用来在请求前塞一些全局的配置、或开启一些 css 加载动画
// TODO 拦截请求  POST传参序列化

const apiServerUrl = window.location.protocol + '//' + window.location.host
axios.defaults.baseURL = apiServerUrl;

axios.interceptors.request.use(function(config) {
  if (config.method === 'post') {
    // 弃用
    // config.data = qs.stringify(config.data, {
    //   arrayFormat: 'indices',
    //   allowDots: true
    // });

    // 有需要传json字符串的接口在这里处理
    if (config.url !== (apiServerUrl + '/admin/addExchangeGood')) {
      config.data = JSON.stringify(config.data)
    }
  }

  // Authorization  授权
  const token = localStorage.getItem('vueToken')
  config.headers.Authorization = token;

  // TODO 在发送请求之前对请求数据做一些处理

    return config;
  }, function(error) {
    return Promise.reject(error);
  });

// 响应拦截器aaa
axios.interceptors.response.use(function(response) {
  return response;
}, function(error) {
  return Promise.reject(error);
});

// 封装axios的post请求
export function fetch(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(response => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      })
  })
}

export default {
  getUser(url, params) {
    return fetch('/getUser', params, 'get');
  },
  JH_news(url, params) {
    return fetch(url, params);
  },
  getCooks(url, params) {
    return fetch(url, params, 'get');
  },
  stapleFood(url, params) {
    return fetch(url, params, 'get')
  },
  snacksFood(url, params) {
    return fetch(url, params, 'get')
  },
  getDrinks(url, params) {
    return fetch(url, params, 'get')
  },
  getPackages(url, params) {
    return fetch(url, params, 'get')
  },
  hotGoods(url, params) {
    return fetch(url, params, 'get')
  },
  getBlog(url, params) {
    return fetch(url, params, 'get')
  },
  getJueJinList(url, params) {
    return fetch(url, params, 'get')
  },
  getEventList(url, params) {
    return fetch(url, params, 'get')
  },
  getCsdnList(url, params) {
    return fetch(url, params, 'get')
  },
  test(url, params) {
    var a = 1;
    console.log(a);
    return fetch(url, params, 'get')
  }
}
