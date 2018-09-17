<template>
  <div id="app">
    <!--公用部分写在这里-->
    <NavBar></NavBar>
    <!--公用部分写在这里-->
    <div id="content">
      <router-view/>
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
    width 1480px
    margin 0 auto
    font-family '微软雅黑'
  h1, h2
    font-weight normal
  ul
    list-style-type none
    padding 0
  body
    position relative
    background-color #f5f5f5
  #content
    position fixed
    top 64px
    left 200px
    right 0
    bottom 0
    padding 24px
    background-color #f5f5f5
    width 1525px
    overflow-y scroll
</style>
