<template>
  <div>
    <p style="text-align: left">高频率商品</p>
    <ul>
      <li v-for="item in hotGoods" :key="item.id">{{item.name}}</li>
    </ul>
    <div class="foods-type-block">
      <Tabs>
        <TabPane label="主食" class="food-section">
          <div v-for="item in stapleFoodData" :key="item.id" class="item" @click="_viewDetail(item)">
            <img :src="item.src" alt="">
            <p>{{item.f_name}}</p>
            <p>{{item.price}}元</p>
          </div>
        </TabPane>
        <TabPane label="小食"  class="food-section">
          <div v-for="item in snacksData" :key="item.id"  class="item" @click="_viewDetail(item)">
            <img :src="item.src" alt="">
            <p>{{item.f_name}}</p>
            <p>{{item.price}}元</p>
          </div>
        </TabPane>
        <TabPane label="饮料" class="food-section">
          <div v-for="item in drinksData" :key="item.id"  class="item" @click="_viewDetail(item)">
            <img :src="item.src" alt="">
            <p>{{item.f_name}}</p>
            <p>{{item.price}}元</p>
          </div>
        </TabPane>
        <TabPane label="套餐" class="food-section">
          <div v-for="item in packagesData" :key="item.id"  class="item" @click="_viewDetail(item)">
            <img :src="item.src" alt="">
            <p>{{item.f_name}}</p>
            <p>{{item.price}}元</p>
          </div>
        </TabPane>
      </Tabs>
    </div>

    <!--详情 & 数量选择-->
    <Modal
      class="detailsModal"
      v-model="detailsModal"
      title="商品详情"
      @on-ok="completeSelect(currentItem)"
      @on-cancel="cancelSelect">
      <div class="img">
        <img :src="currentItem.src" alt="">
      </div>
      <div class="info">
        <p class="title">
          <label>商品名称：</label>
          <span class="value">{{currentItem.f_name}}</span>
        </p>
        <p class="stock">
          <label>商品库存：</label>
          <span class="value">{{currentItem.stock}}</span>
        </p>
        <p class="price">
          <label>商品单价：</label>
          <span class="value">{{currentItem.price}}</span>
        </p>
        <p class="number">
          <label>购买数量：</label>
          <Button type="default" @click="operateNumber('reduce')"> - </Button>
          <Input placeholder="请输入" style="width: 100px" v-model="buyNum"/>
          <Button type="default" @click="operateNumber('add')"> + </Button>
        </p>
      </div>
    </Modal>
  </div>
</template>

<script>
import API from './../../axios/api.js'
export default {
  name: 'select-goods',
  props: {
    buyListData: Array || [],
    item: Object
  },
  watch: {
    buyListData: function (buyListData) {
      this.buyListData = buyListData
      this.buyList = buyListData
    },
    item (item) {
      this.item = item
    },
    currentItem: function (currentItem) {
      this.$emit('_changeItem', currentItem) // 向父组件提交改变
    },
    buyList: function (buyList) {
      this.$emit('_showBuyList', buyList) // 重新赋值
    }
  },
  data () {
    return {
      // 主食
      stapleFoodData: [],
      snacksData: [],
      packagesData: [],
      drinksData: [],
      hotGoods: [],
      // 详情
      detailsModal: false,
      currentItem: this.item || {},
      buyNum: 0,
      buyList: this.buyListData
    }
  },
  mounted () {
    this._stapleFood()
    this._snacksFood()
    this._getPackages()
    this._getDrinks()
    this._hotGoods()
  },
  methods: {
    // 热搜
    _hotGoods () {
      API.hotGoods('/api/hotGoods', {})
        .then(result => {
          this.hotGoods = result.data
        }).catch(err => {
          this.$Message.error(err)
        })
    },
    // 获取主食列表
    _stapleFood () {
      API.stapleFood('/api/stapleFood', {})
        .then(result => {
          this.stapleFoodData = result.data
        }).catch(err => {
        this.$Message.error(err)
      })
    },
    // 获取小食列表
    _snacksFood () {
      API.snacksFood('/api/snacks', {})
        .then(result => {
          this.snacksData = result.data
        }).catch(err => {
        this.$Message.error(err)
      })
    },
    // 获取套餐列表
    _getPackages () {
      API.getPackages('/api/drinks', {})
        .then(result => {
          this.packagesData = result.data
        }).catch(err => {
        this.$Message.error(err)
      })
    },
    // 获取饮料列表
    _getDrinks () {
      API.getDrinks('/api/packages', {})
        .then(result => {
          this.drinksData = result.data
        }).catch(err => {
        this.$Message.error(err)
      })
    },
    // 查看详情
    _viewDetail (item) {
      this.buyNum = 0
      this.$emit('_changeItem', item)
      this.currentItem = item
      this.detailsModal = true
    },
    // 选择完成
    completeSelect (currentItem) {
      const selectName = []
      const that = this
      if (this.buyList && this.buyList.length) {
        this.buyList.forEach(function (v) {
          selectName.push(v.f_name)
        })
      }

      if (!this.buyNum) {
        return this.$Message.error('请选择商品数量')
      }

      if (selectName.join('').indexOf(currentItem.f_name) > -1) { // 已经添加过该商品 删除记录
        this.buyList.forEach(function (v, i) {
          if (v.f_name === currentItem.f_name) {
            that.buyList.splice(i, 1)
          }
        })
      }

      currentItem.buyNum = this.buyNum
      this.$emit('_showDataPush', currentItem) // 触发添加到数组方法

      this.detailsModal = false
      this.$emit('_showBuyList', this.buyList) // 触发重新赋值方法
    },
    cancelSelect () {
      this.detailsModal = false
    },
    operateNumber (type) {
      if (type === 'add') {
        this.buyNum++
      } else {
        this.buyNum--
      }
    }
  }
}
</script>

<style scoped lang="stylus">
.right
    position absolute
    left 500px
    right 0
    top 0
    bottom 0
    overflow-y scroll
    padding-left 40px
    ul
      width 100%
      padding 16px 0
      text-align left
      li
        width 18%
        padding 5px 16px
        border-radius 4px
        border 1px solid #d8d8d8
        display inline-block
        margin-right 20px
        text-align center
        vertical-align middle
        margin-bottom 20px
        &:nth-child(5n)
          margin-right 0
        &:hover
          background-color #35bcf9
          border-color #35bcf9
          color #fff
          cursor pointer
    .food-section
      >div
        display inline-block
        margin-right 16px
        padding 16px
        border 1px solid #d8d8d8
      .item
        margin-bottom 16px
        cursor pointer
        img
          display block
          width 80%
          height: 80%
          margin 0 auto
          margin-bottom 16px
        p
          line-height 26px
          text-align center
        &:hover
          border-color #3596fc

.detailsModal
  .img
    display inline-block
    width 40%
    img
      width 100%
  .info
    display inline-block
    vertical-align top
    padding-top 37px
</style>
<style lang="stylus">
  .ivu-tabs .ivu-tabs-tabpane
    text-align left
</style>
