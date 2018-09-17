<template>
  <section class="financial-list">
    <section class="collect" @click="jumpPage">
      <aside>
        <h2>{{newsDate.title}}</h2>
        <section class="Cleft clearfix">
          <img class="fl" src="./../assets/icon/eyes.png" style="width:0.24rem;height:0.2rem;">
          <span class="fl">{{newsDate.author_name}}</span>
        </section>
        <section class="Cright">
          <img src="./../assets/icon/clock.png" style="width:0.2rem;height:0.2rem;">
          <span>{{newsDate.date | getYMD}}</span>
        </section>
        <div style="clear: both"></div>
      </aside>
      <aside>
        <img :src="newsDate.thumbnail_pic_s" style="border-radius: 0.2rem;">
      </aside>
      <div style="clear: both"></div>
    </section>
  </section>
</template>

<script>
  export default {
    name: 'NewsCell',
    props: {
      newsDate: Object
    },
    data () {
      return {
      }
    },
    computed: {
    },
    methods: {
      jumpPage: function () {
        window.location.href = this.newsDate.url
      }
    }
  }
</script>

<style scoped>
  .financial-list {
    width: 100%;
    height: 100%;
    background-color: white;
    padding: 0.28rem 0;
    border-bottom: 1px solid #ccc;
  }

  .financial-list .collect {
    width: 92%;
    margin: 0 auto;
  }

  .financial-list .collect aside:nth-of-type(1) {
    width: 60%;
    float: left;
  }

  .financial-list .collect aside:nth-of-type(2) {
    width: 32%;
    float: left;
    margin-left: 0.3rem;
  }

  .financial-list .collect h2 {
    width: 100%;
    font-size: 0.32rem;
    color: #333333;
    line-height: 0.4rem;
    text-overflow: ellipsis;
    -o-text-overflow: ellipsis;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .financial-list .collect aside:nth-of-type(2) img {
    width: 100%;
    height: 100%;
  }

  .financial-list .collect aside .Cleft {
    width: 45%;
    float: left;
    margin-top: 0.26rem;
  }

  .financial-list .collect aside .Cleft span{
    display: inline-block;
    width: 1rem;
    margin-left: 0.05rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    -o-text-overflow: ellipsis;
    overflow: hidden;
    line-height: 1.2rem;
  }

  .financial-list .collect aside .Cright {
    width: 55%;
    float: right;
    margin-top: 0.66rem;
  }
  .financial-list .collect aside .Cright span{
    display: inline-block;
    margin: 0.04rem 0 0 0.05rem;
  }
  .financial-list .collect aside span {
    font-size: 0.2rem;
    color: #999999;
  }

  .financial-list .collect aside .Cleft img{
    width: 0.18rem;
    height: 0.24rem;
    vertical-align: top;
    margin-top: 0.5rem;
  }
  .financial-list .collect aside .Cright img {
    width: 0.18rem;
    height: 0.24rem;
    margin-top: 0.1rem;
  }
</style>
