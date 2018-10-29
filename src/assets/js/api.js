/**
 * 封装axios
 */

/**
 *  用 拦截器 axios.interceptors 对请求和响应做些拦截，定义一下 API 的前缀，处理一些常见的 HTTP 状态码
 */

import axios from 'axios'
import iView from 'iview'

const apiServerUrl = window.location.protocol + '//' + window.location.host

// axios 配置
axios.defaults.timeout = 30000;
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
axios.defaults.baseURL = apiServerUrl

// TODO http request 拦截器 一般用来在请求前塞一些全局的配置、或开启一些 css 加载动画
// TODO 拦截请求  POST传参序列化
axios.interceptors.request.use(config => {
  if (config.method === 'post') {
    // 弃用
    // config.data = qs.stringify(config.data, {
    //   arrayFormat: 'indices',
    //   allowDots: true
    // });

    // 有需要传json字符串的接口在这里处理
    if (config.url !== (apiServerUrl + '/admin/addExchangeGood') && config.url !== (apiServerUrl + '/admin/saveOneExchangeGoodDetail')) {
      config.data = JSON.stringify(config.data)
    }
  }

  // Authorization  授权
  const token = localStorage.getItem('vueToken')
  config.headers.Authorization = token
  // TODO 在发送请求之前对请求数据做一些处理
  return config
}, error => {
  return Promise.reject(error)
});

// TODO 拦截响应  返回状态判断
axios.interceptors.response.use(res => {
  // console.log('axios.interceptors.response : res : ', res);
  // TODO 返回数据之前的处理
  if (res.data.code === 'ERR_SESSION_TIMEOUT' && res.data.message === '未登陆或登陆状态已失效！' && res.data.data) {
    window.location.href = res.data.data
    return true
  } else if (res.data.message === '您已退出登录。' && res.data.data) {
    iView.Message.info(res.data.message)
    window.location.href = res.data.data
    return true
  } else if (res.data.code !== 200) {
    return Promise.reject(res)
  }
  return res
}, error => {
  return Promise.reject(error)
});

export function fetch (url, param = {}, method = 'get') {
  return new Promise((resolve, reject) => {
    const config = {
      method: method,
      url: url
    }

    // `params` are the URL parameters to be sent with the request
    // Must be a plain object or a URLSearchParams object
    if (method === 'get') {
      config.params = param
    } else {
      // `data` is the data to be sent as the request body
      // Only applicable for request methods 'PUT', 'POST', and 'PATCH'
      // When no `transformRequest` is set, must be of one of the following types:
      // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
      // - Browser only: FormData, File, Blob
      // - Node only: Stream, Buffer
      config.data = param
      config.headers = {
        'Content-Type': 'application/json;charset=UTF-8'
      }
    }

    // console.log('config : ', config);
    axios(config)
      .then(response => {
        resolve(response.data.data)
      })
      .catch(error => {
        // reject(error.data)  正确
        resolve(error.data.data) // test 模拟数据时使用
      })
  })
}

export default {
  getSeller (params) {
    return fetch('/api/getSeller', params, 'get')
  },
  getUser (params) {
    return fetch('/getUser', params, 'get')
  },
  /** 食品列表 **/
  hotGoods (params) {
    return fetch('/api/hotGoods', params, 'get')
  },
  // 获取主食列表
  stapleFood (params) {
    return fetch('/api/stapleFood', params, 'get')
  },
  snacksFood (params) {
    return fetch('/api/snacks', params, 'get')
  },
  getDrinks (params) {
    return fetch('/api/drinks', params, 'get')
  },
  getPackages (params) {
    return fetch('/api/packages', params, 'get')
  },
  /** 食品列表 **/

  getCooks (params) {
    return fetch('/api/getCooks', params, 'get')
  }
}
