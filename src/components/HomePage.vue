<template>
  <div class="hello">
    <div class="drag-section">
      <div class="xm-panel panel drag-1" v-draggable="options1">
        <Button type="primary" @click="showModal">显示可拖动弹窗</Button>
        <Spin></Spin>
      </div>
      <div class="xm-panel panel drag-3" v-draggable="options3">
        <Carousel autoplay loop easing>
          <CarouselItem>
            <div class="demo-carousel">1</div>
          </CarouselItem>
          <CarouselItem>
            <div class="demo-carousel">2</div>
          </CarouselItem>
          <CarouselItem>
            <div class="demo-carousel">3</div>
          </CarouselItem>
          <CarouselItem>
            <div class="demo-carousel">4</div>
          </CarouselItem>
        </Carousel>
      </div>
      <div class="xm-panel panel drag-4" v-draggable="options4">
        <i-circle :percent="35" stroke-color="#ff5500">
          <span class="demo-Circle-inner">
            <Icon type="ios-close" size="50" style="color:#ff5500"></Icon>
          </span>
        </i-circle>
      </div>
    </div>

    <Row :gutter="18">
      <i-col span="4"  v-for="(infor, i) in inforCardData" :key="`infor-${i}`" style="height: 120px;">
        <Card>
          <p slot="title">
            <Icon :type="infor.icon"></Icon>
            {{ infor.title }}
          </p>

        </Card>
      </i-col>
    </Row>
    <Modal v-draggable="options" v-model="modalVisible">
      拖动这里即可拖动整个弹窗
    </Modal>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data () {
    return {
      modalVisible: false,
      options: {
        trigger: '.ivu-modal-body',
        body: '.ivu-modal',
        recover: true
      },
      options1: {
        trigger: '.drag-1',
        body: '.drag-1'
      },
      options2: {
        trigger: '.drag-2',
        body: '.drag-2'
      },
      options3: {
        trigger: '.drag-3',
        body: '.drag-3'
      },
      options4: {
        trigger: '.drag-4',
        body: '.drag-4'
      },
      statu: 1,
      inforCardData: [
        { title: '新增用户', icon: 'power', count: 803, color: '#2d8cf0' },
        { title: '累计点击', icon: 'power', count: 23432, color: '#19be6b' },
        { title: '新增问答', icon: 'power', count: 142, color: '#ff9900' },
        { title: '分享统计', icon: 'power', count: 657, color: '#ed3f14' },
        { title: '新增互动', icon: 'power', count: 12, color: '#E46CBB' },
        { title: '新增页面', icon: 'power', count: 14, color: '#9A66E4' }
      ]
    }
  },
  methods: {
    showModal () {
      this.modalVisible = true
    }
  },
  components: {}
}
</script>

<style lang="stylus" scoped>
.drag-section
  display flex
  justify-content space-between
  .xm-panel
    width 300px
    height 200px
    display inline-block
    margin 24px
    padding 16px
.ivu-carousel
  height 100%
</style>
<style>
  .intro-con{
    min-height: 140px;
  }
  .code-con{
    width: 400px;
    background: #F9F9F9;
    padding-top: 10px;
  }
</style>
