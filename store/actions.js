/**
 * 异步操作、多个commit时
 *
 * 和mutations类似，支持异步操作
   第一个参数默认是和store具有相同参数属性的对象。
   外部调用方式：store.dispatch(‘nameAsyn’)
 */

import * as types from './mutations-type.js';

export default {
  nameAsyn({commit}, {age, name}) {
    commit(types.SET_NAME, name);
    commit(types.SET_AGE, age);
  }
};

import iView from 'iview';
import API from '../src/axios/api';


export const getUserInfo = ({ commit }) => {
  return API.getUser().then(response => {
    console.log('2 reponse:', response);
    commit(types.USER_INFO, response.data);
  }).catch(error => {
    console.log('2 error:', error);
    iView.Message.error(error.message);
  });
};
