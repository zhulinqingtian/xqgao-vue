<template>
  <div class="height100">
    <!--<img src="../../assets/image/shop-header.png" alt="">-->
    <div class="section1 height100">
      <!--选中商品展示-->
      <div class="block left panel height100">
        <Tabs>
          <TabPane label="结账">
            <Table border :columns="key1" :data="buyListData" @on-selection-change="_changeSelected"></Table>
            <p class="total">总计：{{totalPayment}} 元</p>
            <div class="operate-btn-block">
              <Button type="primary" @click="_toSettle">结账</Button>
              <Button type="default">删除</Button>
            </div>
          </TabPane>
          <TabPane label="查看">
            总价 <span class="blue">{{totalPayment}}</span>
          </TabPane>
        </Tabs>
      </div>
      <!--商品展示-->
      <div class="block right panel height100">
        <EveryTypeGoods @showBuyList="_showBuyList(buyListData)"
                        @_showDataPush="_showDataPush(item)"
                        :_changeItem="item"
                        @_changeItem="_changeItem"
        ></EveryTypeGoods>
      </div>
    </div>

    <!--结账-->
    <Modal
      class="settle-accounts-modal"
      v-model="settleAccountsModal"
      title="结账"
      @on-ok="settleAccountsModal=false"
      @on-cancel="settleAccountsModal=false">
      <p>您选择了 <span class="blue">{{settleGoods.join(',')}}</span> ,共计 <span class="blue">{{totalPayment}}</span> 元</p>
    </Modal>
  </div>
</template>

<script>
import EveryTypeGoods from './EveryTypeGoods'
export default {
  name: 'order-operate',
  data () {
    return {
      key1: [
        {
          type: 'selection',
          width: 60,
          align: 'center'
        },
        {
          title: '商品名称',
          key: 'f_name'
        },
        {
          title: '数量',
          key: 'buyNum'
        },
        {
          title: '单价',
          key: 'price'
        },
        {
          title: '总价',
          key: 'payment',
          render: (h, params) => {
            const price = +params.row.price
            const buyNum = +params.row.buyNum
            const payment = price * buyNum
            return h('span', {}, payment)
          }
        }
      ],
      buyListData: [],
      item: {},
      selection: [],
      totalPayment: 0,
      // 结账
      settleAccountsModal: false,
      settleGoods: []
    }
  },
  mounted () {},
  methods: {
    _showBuyList: function (buyListData) {
      this.buyListData = buyListData
    },
    _showDataPush: function (item) {
      this.buyListData.push(item)
    },
    _changeItem: function (item) {
      this.item = item
    },
    _changeSelected (selection) {
      this.selection = selection // totalPayment
      this.totalPayment = 0
      const that = this
      this.selection.forEach(function (v) {
        that.totalPayment += +v.price * +v.buyNum
      })
    },
    _toSettle () {
      this.settleAccountsModal = true
      const that = this
      this.settleGoods = []
      this.selection.forEach(function (v) {
        that.settleGoods.push(v.f_name)
      })
    }
  },
  components: {
    EveryTypeGoods
  }
}
</script>

<style scoped lang="stylus">
  .total
    margin 24px 0px 16px 0
  img
    width 60px
    height 60px
  .section1
    position relative
    overflow-y hidden
    .block
      &.left
        width 500px
        padding 24px
      &.right
        position absolute
        left 533px
        right 0
        top 0
        bottom 0
        overflow initial
        padding 24px 24px 24px 40px
        ul
          width 100%
          padding 16px
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
    .operate-btn-block
      margin 20px 0
    .foods-type-block
      position absolute
      top 50%
      left 40px
      right 0
      bottom 0

</style>
<style lang="stylus">
  .ivu-tabs .ivu-tabs-tabpane
    text-align left
  .blue
    color #3596fc
</style>
