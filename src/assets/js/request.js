
/**
 * =======================
 * 掘金代码参考  request.js
 * =======================
 */
// request.js 和项目中的api.js作用相同
import axios from 'axios';

//这里一般指后端项目API的前缀，例如 /baidu/*/*/1.api  /mi/*/*/2.api
const BASE_API = "";
const apiServerUrl = window.location.protocol + '//' + window.location.host

export function axiosIntercept(Vue, router) {
  const axiosIntercept = axios.create({
    baseURL: BASE_API
  });

  //http request 拦截器 一般用来在请求前塞一些全局的配置、或开启一些 css 加载动画
  axios.interceptors.request.use(
    (config) => {
      // todo Authorization  授权
      // 判断是否存在token，如果存在的话，则每个http header都加上token
      // if (store.getters.accessToken) {
      //     console.log(store.getters.accessToken)
      //     config.headers.Authorization = `token ${store.getters.accessToken}`;
      // }

      // todo:加载动画

      //若有需求可以处理一下 post 亦或改变post传输格式
      if (config.method === 'post') {
        // 有需要传json字符串的接口在这里处理
        if (config.url !== (apiServerUrl + '/admin/addExchangeGood')) {
          config.data = JSON.stringify(config.data)
        }
      }

      return config;
    }, function (err) {
      return Promise.reject(err);
    });


  //http response 拦截器 一般用来根据一些后端协议特殊返回值做一些处理，例如：权限方面、404... 或关闭一些 css 加载动画
  axiosIntercept.interceptors.response.use(function (response) {
    // todo: 暂停加载动画
    return response;
  }, function (err) {
    //捕获异常
    if (err.response) {
      switch (err.response.status) {
        case 401:
        // do something 这里我们写完后端做好约束再完善
      }
    }
    return Promise.reject(err);
  });
  return axiosIntercept;
}
