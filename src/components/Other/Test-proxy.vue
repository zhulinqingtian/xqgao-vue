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
        API.getBlog("/v1/getListByLastTime?src=web&pageNum=1").then(res => {
          this.blogList = res.d;
        });
      },
      getList() {
        API.getJueJinList("/v1/getListByLastTime?uid=&client_id=&token=&src=web&pageNum=1").then(res => {
          this.JueJinList = res.d;
        });
      },
      getEventList() {
        API.getEventList("/v2/getEventList?uid=&client_id=&token=&src=web&orderType=startTime&cityAlias=&pageNum=3&pageSize=20").then(res => {
          this.EventList = res.d;
        });
      },
      getArticleList() {
        API.getEventList("/api/articles?type=more&category=career&shown_offset=1540784729309051").then(res => {
          this.articleList = res.articles;
        });
      },
      getWebList() {
        API.getEventList("/api/articles?type=more&category=web&shown_offset=1540792654004015").then(res => {
          this.webList = res.articles;
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
    color: #1d7046;
  }
</style>
