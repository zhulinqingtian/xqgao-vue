<template>
  <div id="app">
    <!--公用部分写在这里-->
    <NavBar></NavBar>
    <div id="main-block">
      <!--公用部分写在这里-->
      <div id="content">
        <router-link to="/view/star-test">测试星级</router-link>
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
  import NavBar from './components/Layout/NavBar'
  export default {
    name: 'app',
    data() {
      return {}
    },
    components: {
      NavBar
    }
  }
</script>

<style>
  #app {
    width: 100%;
    height: 100%;
  }
</style>
<style lang="stylus">
  @import "./assets/css/common.styl";
  #app
    font-family 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    text-align center
    color #2c3e50
    width 100%
    font-family '微软雅黑'
  #app #main-block
    width 1480px
    margin 0 auto
  h1, h2
    font-weight normal
  ul
    list-style-type none
    padding 0
  body
    position relative
    background-color #f5f5f5
  #content
    padding 24px
</style>
