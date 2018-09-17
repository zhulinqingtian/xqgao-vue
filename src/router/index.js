import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import NewsListPage from '@/components/NewsListPage'
import Cooks from '@/components/management/Cooks'
import CommodityList from '@/components/management/CommodityList'
import OrderOperate from '@/components/orderScreen/OrderOperate'

import TestPage from '@/components/Other/Test-Page'

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
    }
  ]
})
