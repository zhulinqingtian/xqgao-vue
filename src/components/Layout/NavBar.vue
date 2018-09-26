<template>
  <div>
    <div id="header">
      <ul>
        <li>
          <router-link to="/">首页</router-link>
        </li>
        <li>
          <router-link to="/view/commodity-list">
            商品展示
            <Icon type="ios-arrow-down" />
          </router-link>
        </li>
        <li>
          <router-link to="/view/order-operate">
            购买商品
            <Icon type="ios-arrow-down" />
          </router-link>
        </li>
        <li>
          <router-link to="/view/cooks">
            名厨介绍
            <Icon type="ios-arrow-down" />
          </router-link>
        </li>
        <li>
          <router-link to="/view/user-info">
            设置
            <Icon type="ios-arrow-down" />
          </router-link>
        </li>
        <li>
          <router-link to="/view/test-page">
            测试页
            <Icon type="ios-arrow-down" />
          </router-link>
        </li>
        <li>
          <router-link to="/view/news-list">
            最新动态
            <Icon type="ios-arrow-down" />
          </router-link>
        </li>
        <li>
          <span>登陆用户：<!--{{p_user.username}}--></span>
          <Icon type="power"></Icon>
          <Icon type="md-person-add" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'nav-bar',
  data () {
    return {}
  },
  created: function () {

  },
  watch: {},
  computed: {}
}
</script>

<style lang="stylus">
  #header
    width 100%
    height 60px
    background-color #fff
    border-bottom 1px solid #d8d8d8
    >ul
      width 1480px
      height 100%
      margin 0 auto
      li
        display inline-block
        padding 22px 34px
        text-align left
        color #333
        float left
        &:nth-child(1)
          width 35%
</style>
