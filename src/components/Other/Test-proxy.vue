<template>
  <div class="main-block">
    <p>https://juejin.im/post/5bcf69105188255c69784280</p>
    <!--掘金小册-->
    <div class="list-block panel padding24" style="margin-bottom: 24px;">
      <h2>小册列表</h2>
      <div v-for="(blog,index) in blogList" v-bind:key="index">
        <h3>
          <a :href="`https://juejin.im/book/`+blog.id" :title="blog.title">
            <span>{{blog.title}}</span>
          </a>
        </h3>
      </div>
    </div>

    <div class="list-block panel padding24">
      <h2>活动列表</h2>
      <div v-for="(list,index) in EventList" v-bind:key="index">
        <h3>
          <a :href="`https://juejin.im/event/`+list.category" >
            <span>{{list.title}}</span>
          </a>
        </h3>
      </div>
    </div>

    <div class="panel padding24">
      <h2>csdn文章列表</h2>
      <div v-for="(list,index) in articleList" v-bind:key="index">
        <h3>
          <a :href="list.url" >
            <span>{{list.title}}</span>
          </a>
        </h3>
      </div>
    </div>

    <div class="panel padding24">
      <h2>csdn前端学习文章列表</h2>
      <div v-for="(list,index) in webList" v-bind:key="index">
        <h3>
          <a :href="list.url" >
            <span>{{list.title}}</span>
          </a>
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
  import API from './../../axios/api.js'
  export default {
    name: "Blog",
    data() {
      return {
        msg: "掘金小册一览",
        blogList: [],
        JueJinList: [],
        EventList: [],
        articleList: [],
        webList: []
      };
    },
    created() {
      this.getBlog();
      this.getEventList();
      this.getArticleList();
      this.getWebList();
      // this.getList();
    },
    methods: {
      getBlog() {
        API.getBlog()
          .then(res => {
            this.blogList = res.d;
          }).catch(err => {
            console.log('err:', err);
          });
      },
      getList() {
        API.getJueJinList()
          .then(res => {
            this.JueJinList = res.d;
          }).catch(err => {
            console.log('err:', err);
          });
      },
      getEventList() {
        API.getEventList()
          .then(res => {
            this.EventList = res.d;
          }).catch(err => {
            console.log('err:', err);
          });
      },
      getArticleList() {
        API.getArticleList()
          .then(res => {
            console.log('res:', res);
            this.articleList = res.articles;
          }).catch(err => {
            console.log('err:', err);
          });
      },
      getWebList() {
        API.getWebList()
          .then(res => {
            this.webList = res.articles;
          })
          .catch(err => {
            console.log('err:', err);
          });
      }
    }
  };
</script>

<style scoped>
  .main-block{
    overflow: hidden;
  }
  .list-block{
    width: 49%;
    display: inline-block;
    padding-top: 20px;
  }
  h3{
    text-align: left;
  }
  h3 span{
    font-size: 16px;
    color: #333;
    line-height: 30px;
  }
  h3 span:hover{
    color: #52a77c;
  }
</style>
