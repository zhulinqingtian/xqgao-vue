<template>
  <div>
    <div class="mainBlock" v-show="mainBlock">
      <p class="page-title">商品列表</p>
      <p class="sub-title">the lists of commodity</p>
      <div class="main panel">
        <p>主食</p>
        <div class="food-block bg">
          <ul>
            <li v-for="data in stapleFoodData" :key="data.id">
              <div class="view-detail">
                <span @click="_getDetails(data)">查看详情</span>
              </div>
              <img :src="data.src" alt="" :title="data.f_name">
              <p class="title">{{data.f_name}}</p>
            </li>
          </ul>
        </div>
        <!--小食-->
        <p>小食</p>
        <div class="food-block bg">
          <ul>
            <li v-for="data in snacksData" :key="data.id">
              <div class="view-detail">
                <span @click="_getDetails(data)">查看详情</span>
              </div>
              <img :src="data.src" alt="" :title="data.f_name">
              <p class="title">{{data.f_name}}</p>
            </li>
          </ul>
        </div>
        <!--饮料-->
        <p>饮料</p>
        <div class="food-block bg">
          <ul>
            <li v-for="data in drinksData" :key="data.id">
              <div class="view-detail">
                <span @click="_getDetails(data)">查看详情</span>
              </div>
              <img :src="data.src" alt="" title="查看详情">
              <p class="title">{{data.f_name}}</p>
            </li>
          </ul>
        </div>
        <!--套餐-->
        <p>套餐</p>
        <div class="food-block bg">
          <ul>
            <li v-for="data in packagesData" :key="data.id">
              <div class="view-detail">
                <span @click="_getDetails(data)">查看详情</span>
              </div>
              <img :src="data.src" alt="" title="查看详情">
              <p class="title">{{data.f_name}}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="detailBlock" v-show="!mainBlock">
      <CommodityDetails
        :item="testItem"
        :mainBlock="!mainBlock"
        @changeVisible = _changeVisible
      ></CommodityDetails>
    </div>
  </div>
</template>

<script>
import API from './../../axios/api.js'
import CommodityDetails from './Commodity-Details'
export default {
  name: 'commodity-list',
  data () {
    return {
      // 主食
      stapleFoodData: [],
      snacksData: [],
      packagesData: [],
      drinksData: [],
      hotGoods: [],
      currentItem: {
        id: 6,
        f_name: '葱花饼',
        price: 6,
        stock: 50,
        src: './static/image/commodity/example.png',
        buyNum: 0,
        attibutes: [
          {
            id: 1,
            title: '有食欲',
            description: '外观很漂亮，有个显示屏，好高大尚，睡眠模式非常安静！',
            imgUrl: './static/image/commodity/qrcode.png'
          },
          {
            id: 2,
            title: '性价比高',
            description: '外观很漂亮，有个显示屏，好高大尚，睡眠模式非常安静！',
            imgUrl: './static/image/commodity/qrcode.png'
          },
          {
            id: 3,
            title: '食用方便',
            description: '外观很漂亮，有个显示屏，好高大尚，睡眠模式非常安静！',
            imgUrl: './static/image/commodity/qrcode.png'
          },
          {
            id: 4,
            title: '适合任意人群',
            description: '外观很漂亮，有个显示屏，好高大尚，睡眠模式非常安静！',
            imgUrl: './static/image/commodity/qrcode.png'
          },
          {
            id: 5,
            title: '味道好',
            description: '外观很漂亮，有个显示屏，好高大尚，睡眠模式非常安静！',
            imgUrl: './static/image/commodity/qrcode.png'
          }
        ]
      },
      testItem: {},
      mainBlock: true
    }
  },
  created () {
    this._stapleFood()
    this._snacksFood()
    this._getPackages()
    this._getDrinks()
  },
  components: {CommodityDetails},
  methods: {
    // 获取主食列表
    _stapleFood () {
      API.stapleFood({})
        .then(result => {
          this.stapleFoodData = result.data
        }).catch(err => {
          this.$Message.error(err)
        })
    },
    // 获取小食列表
    _snacksFood () {
      API.snacksFood({})
        .then(result => {
          this.snacksData = result.data
        }).catch(err => {
        this.$Message.error(err)
      })
    },
    // 获取套餐列表
    _getPackages () {
      API.getPackages({})
        .then(result => {
          this.packagesData = result.data
        }).catch(err => {
        this.$Message.error(err)
      })
    },
    // 获取饮料列表
    _getDrinks () {
      API.getDrinks({})
        .then(result => {
          this.drinksData = result.data
        }).catch(err => {
          this.$Message.error(err)
        })
    },
    _getDetails (item) {
      this.mainBlock = false
      this.currentItem = item
      this.testItem = item
    },
    _changeVisible (mainBlock) { // mainBlock = false
      this.mainBlock = !mainBlock // !mainBlock = true
    }
  }
}
</script>

<style scoped lang="stylus">
  .main
    padding 24px 16px
    margin 0 auto
    >p
      font-size 18px
      line-height 36px
      border-bottom 1px solid #d8d8d8
      margin-bottom 24px
      text-align left
  .page-title
    font-size 18px
    font-weight bold
    line-height 26px
    text-align left
  .sub-title
    font-size 14px
    color #efebeb
    text-align left
    font-style italic
    text-shadow 1px 1px #e39e41
    margin-bottom 16px
  .food-block
    ul
      display flex
      align-items center
    li
      width 140px
      text-align center
      padding 16px 8px
      margin 8px 16px 8px 8px
      position relative
      background-color #fff
      box-shadow 1px 1px 1px 1px rgba(0,0,0,0.1)
      img
        width 70%
      p
        font-size 16px
        line-height 32px
      .view-detail
        position absolute
        top 0
        bottom 0
        left 0
        right 0
        cursor pointer
        background-color rgba(0,0,0,0.7)
        opacity 0
        transition all 0.8s linear
        span
          display: block;
          width: 60%;
          height: 30px;
          margin: 52px auto;
          text-align: center;
          line-height: 30px;
          color: #fff;
          background-color: #3596fc;
          border-radius: 4px;
      &:hover
        transform translateY(-5px)
        .view-detail
          opacity: 1;

</style>
