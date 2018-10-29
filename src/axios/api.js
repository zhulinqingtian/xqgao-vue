import axios from 'axios'
import vue from 'vue'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// 请求拦截器
axios.interceptors.request.use(function(config) {
    return config;
  }, function(error) {
    return Promise.reject(error);
  })
  // 响应拦截器
axios.interceptors.response.use(function(response) {
  return response;
}, function(error) {
  return Promise.reject(error);
})

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
  }
}
