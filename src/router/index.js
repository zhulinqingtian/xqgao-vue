import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import NewsListPage from '@/components/NewsListPage'
import Cooks from '@/components/management/Cooks'
import CommodityList from '@/components/management/CommodityList'
import OrderOperate from '@/components/orderScreen/OrderOperate'

import UserInfo from '@/components/UserInfo'
import TestPage from '@/components/Other/Test-Page'
import TestProxy from '@/components/Other/Test-Proxy'

import TestStar from '@/components/star/star-test'

import TestForm from '@/components/Other/test-form' // 测试表单

// 这里使用的@，在webpack.base.conf.js中定义，指向src目录

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/view/news-list',
      name: 'NewsListPage',
      component: NewsListPage
    },
    {
      path: '/view/cooks',
      name: 'Cooks',
      title: '名厨介绍',
      component: Cooks
    },
    {
      path: '/view/test-page',
      name: 'TestPage',
      title: '测试页',
      component: TestPage
    },
    {
      path: '/view/test-proxy',
      name: 'TestProxy',
      title: '测试代理',
      component: TestProxy
    },
    {
      path: '/view/commodity-list',
      name: 'CommodityList',
      title: '商品列表',
      component: CommodityList
    },
    {
      path: '/view/order-operate',
      name: 'OrderOperate',
      title: '购买商品',
      component: OrderOperate
    },
    {
      path: '/view/user-info',
      name: 'UserInfo',
      title: '用户信息',
      component: UserInfo
    },
    {
      path: '/view/star-test',
      name: 'TestStar',
      title: '测试星级',
      component: TestStar
    },
    {
      path: '/view/star-form',
      name: 'TestForm',
      title: '测试表单',
      component: TestForm
    }
  ]
})
