/**
 *  用 拦截器 axios.interceptors 对请求和响应做些拦截，定义一下 API 的前缀，处理一些常见的 HTTP 状态码
 */

import axios from 'axios'

// axios 配置
const apiServerUrl = window.location.protocol + '//' + window.location.host;
axios.defaults.timeout = 30000;
// axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.baseURL = apiServerUrl;

// TODO http request 拦截器 一般用来在请求前塞一些全局的配置、或开启一些 css 加载动画
// TODO 拦截请求  POST传参序列化

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
  // const token = localStorage.getItem('vueToken')
  // config.headers.Authorization = token;

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
export function fetch(url, param = {}, method = 'get') {
  return new Promise((resolve, reject) => {
    const config = {
      method: method,
      url: url
    };
    if (method === 'get') {
      config.params = param;
    } else {
      config.data = param;
      config.headers = {
        'Content-Type': 'application/json;charset=UTF-8'
      };
    }

    axios(config)
      .then(response => {
        console.log('********* axios response:', response);
        // response是个Object对象，但是 response.data 才是本地JSON文件的对象
        // JSON文件如果有注释，JSON.parse报错含有非法字符/。JSON文件本来就是对象，再用 JSON.parse(),会报错含有非法字符o
        resolve(response.data);
      })
      .catch(error => {
        reject(error.data);
      });
  });
}


export default {
  getUser(params) {
    return fetch('/getUser', params, 'get');
  },
  JH_news(url, params) {
    return fetch(url, params);
  },
  getCooks(params) {
    return fetch('/api/getCooks', params, 'get');
  },
  stapleFood(params) {
    return fetch('/api/stapleFood', params, 'get')
  },
  snacksFood(params) {
    return fetch('/api/snacksFood', params, 'get')
  },
  getDrinks(params) {
    return fetch('/api/drinks', params, 'get')
  },
  getPackages(params) {
    return fetch('/api/packages', params, 'get')
  },
  hotGoods(params) {
    return fetch('/api/hotGoods', params, 'get')
  },
  getBlog(params) {
    return fetch('/v1/getListByLastTime?src=web&pageNum=1', params, 'get')
  },
  getJueJinList(params) {
    return fetch('/v1/getListByLastTime?uid=&client_id=&token=&src=web&pageNum=1', params, 'get')
  },
  getEventList(params) {
    return fetch('/v2/getEventList?uid=&client_id=&token=&src=web&orderType=startTime&cityAlias=&pageNum=3&pageSize=20', params, 'get')
  },
  getArticleList(params) {
    return fetch('/api/articles?type=more&category=career&shown_offset=1540784729309051', params, 'get')
  },
  getWebList(params) {
    return fetch('/api/articles?type=more&category=web&shown_offset=1540792654004015', params, 'get')
  },
  test(url, params) {
    var a = {name: '哈哈哈'};
    console.log(a);
    return fetch(url, params, 'get')
  }
}
