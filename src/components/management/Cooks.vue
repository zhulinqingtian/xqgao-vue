<template>
  <div>
    <p class="title">名厨介绍</p>
    <div class="cook-section">
      <ul>
        <li v-for="cook in cooksData" :key="cook.id">
          <img :src="cook.src" alt="">
          <p class="name">{{cook.c_name}}</p>
          <p class="goodAt">{{cook.skill}}</p>
          <div class="details">{{cook.details}}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import API from './../../axios/api.js'
export default {
  name: 'cooks',
  data () {
    return {
      // 主食
      cooksData: []
    }
  },
  created () {
    this._getCooks()
  },
  methods: {
    _getCooks: function () {
      API.getCooks({})
        .then(result => {
          this.cooksData = result.data
        }).catch(err => {
          this.$Message.error(err)
        })
    }
  }
}
</script>

<style scoped lang="stylus">
.title
  line-height 40px
  padding 60px 0 10px 0
.cook-section
  padding 24px
  ul
    overflow hidden
    li
      width 220px
      height 250px
      padding 24px 16px
      text-align center
      position relative
      float left
      margin-right 24px
      overflow hidden
      background-color #fff
      img
        width 100px
      .name
        color orange
      p
        line-height 30px
      .details
        background-color #ff6700
        position absolute
        bottom -60px
        left 0
        right 0
        width 100%
        height 60px
        padding 8px 16px
        color #fff
        /*animation: bottom-out 1s forwards;*/
      &:hover
        .details
          animation: bottom-in 1s forwards;
@keyframes bottom-in
  from {bottom: -60px;}
  to {bottom :0px;}
@keyframes bottom-out
  from {bottom: 0px;}
  to {bottom : -60px;}

</style>
