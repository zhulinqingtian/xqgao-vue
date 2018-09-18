/**
 * 同步修改
 * 提交状态修改。就是set、get中的set。
  这是vuex中唯一一种修改state的方式，不支持异步操作。
  第一个参数默认是state
  外部调用方式：store.commit(‘SET_AGE’， 18)
 */

import * as types from './mutations-type.js';

export default {
  [types.SET_NAME](state, name) {
    state.name = name;
  },
  [types.SET_AGE](state, age) {
    state.age = age;
  },

  [types.USER_INFO](state, info) {
    state.info = info;
  }
};
