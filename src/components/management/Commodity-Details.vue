<template>
  <div class="details-page">
    <p class="page-title">
      商品详情
      <span class="go-back" title="返回" @click="subVisible = false">返回</span>
    </p>
    <div class="section">
      <p class="top-title">
        <span class="decoration one"></span>
        <!--TODO 解决刚进入列表时对象为空报错，用 v-if 判断-->
        <span  v-if="subItem && subItem.attibutes && subItem.attibutes.length">{{subItem.f_name}}</span>
        <span class="decoration two"></span>
      </p>
      <p class="sub-title">小标题</p>
      <ul class="block" v-if="subItem && subItem.attibutes && subItem.attibutes.length">
        <li v-for="list in subItem.attibutes" :key="list.id">
          <p class="function">{{list.title}}</p>
          <p class="des">{{list.description}}</p>
          <div class="circle">
            <img :src="list.imgUrl" alt="">
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'commodity-details',
  props: {
    item: Object,
    mainBlock: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    item: {
      handler (newValue, oldValue) {
        // TODO 监听对象变化 将新值赋给子组件的变量
        this.subItem = newValue
      },
      deep: true
    },
    mainBlock (mainBlock) {
      // TODO 监听变量变化 将新值赋给子组件的变量
      this.subVisible = mainBlock
    },
    subVisible (subVisible) {
      if (!subVisible) {
        // TODO 监听子组件变量变化 触发改变父组件变量的方法，将新值赋给父组件的变量
        this.$emit('changeVisible', false) // false : 子组件隐藏， 父组件显示
      }
    }
  },
  data () {
    return {
      subItem: this.item,
      subVisible: !this.mainBlock
    }
  },
  methods: {},
  mounted () {}
}
</script>

<style scoped lang="stylus">
.details-page
  background-color gray
  padding 24px
  .page-title
    font-size 24px
    color #fff
    font-style italic
    text-align center
    .go-back
      padding-left 16px
      color #fff
      cursor pointer
  .section
    padding 24px 16px
    padding-bottom 150px
    .top-title
      color #fff
      position relative
      .decoration
        position absolute
        top 10px
        width 30%
        height 1px
        background-color rgba(255,255,255,0.8)
        &.one
          left 15%
        &.two
          right 15%
      span
        color #fff
        font-size 18px
    .sub-title
      color #fff
      margin-bottom 24px
    .block
      width 100%
      height 311px
      display flex
      justify-content space-between
      align-items center
      li
        position relative
        background-color #fff
        width 150px
        height 100%
        padding 24px 10px
        .function
          font-size 16px
          line-height 58px
        .des
          line-height 24px
        .circle
          position absolute
          background-color #fff
          border-radius 50%
          overflow hidden
          width 100%
          height 150px
          left 0
          top 240px
          text-align center
          img
            width 89%
            border-radius 50%
            margin-top 7px
.decoration
  position absolute
  top 10px
  width 30%
  height 1px
  background-color rgba(255,255,255,0.8)
</style>
