<template>
  <div class="panel xm-panel padding24">
    <div class="note">
      <p>一.BFC (Block formatting context) “块级格式化上下文”</p>
      <ul>
        <li>
          <p>1.概念BFC</p>
          <p>它是页面中的一块渲染区域，有一套渲染规则，决定了其子元素如何布局，以及和其他元素之间的关系和作用。</p>
        </li>
        <li>
          <p>2.BFC布局规则</p>
          <ul>
            <li>
              <p>【1】内部的Box会在垂直方向，一个接一个地放置。</p>
              <p>【2】Box垂直方向的距离由margin决定。属于同一个BFC的两个相邻Box的margin会发生重叠</p>
              <p>【3】每个元素的margin box的左边， 与包含块border box的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此。</p>
              <p>【4】BFC的区域不会与float box重叠。</p>
              <p>【5】BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。</p>
              <p>【6】计算BFC的高度时，浮动元素也参与计算。</p>
            </li>
          </ul>
        </li>
        <li>
          <p>3.触发：满足下列条件之一就可触发BFC:</p>
          <ul>
            <li>
              <p>【1】根元素，即HTML元素</p>
              <p>【2】float的值不为none</p>
              <p>【3】overflow的值不为visible</p>
              <p>【4】display的值为inline-block、table-cell、table-caption</p>
              <p>【5】position的值为absolute或fixed</p>
            </li>
          </ul>
        </li>
        <li>
          <p>4.特性</p>
          <ul>
            <li>
              <p> 【1】阻止垂直外边距（margin-top、margin-bottom）折叠</p>
              <p> 【2】包含浮动元素</p>
            </li>
          </ul>
        </li>
        <li>
          <p>5.解决办法</p>
          <ul>
            <li>
              <p> 触发其中一个div的BFC，使得两个div不在同一个 BFC内，这样就可以阻止这两个div的margin重叠</p>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="example">
      <div class="dv">
        <div class="dv2">
        </div>
        <div class="reslove">
          <div class="dv3">
            举例
          </div>
        </div>
      </div>
    </div>
    <div class="example">
      <div class="box">
        <div class="float"></div>
        <div class="noFloat">
          元素内容比较多的时候，内容会环绕着浮动的元素。  于是面试结束之后搜了几篇博客看了下，看完有一种豁然开朗的感觉，一些之前未能理解的CSS元素行为也知其所以然了。顺便说一下，前端的水也是很深的（且越来越深），在具体工作中可以分为偏前和偏后两个大方向，偏前的前端关注设计、HT
        </div>
      </div>
      <div class="box">
        <div class="float"></div>
        <div class="noFloat overflow">
          我用overflow: hidden; 来 清除环绕，为其本身创建一个BFC。  于是面试结束之后搜了几篇博客看了下，看完有一种豁然开朗的感觉，一些之前未能理解的CSS元素行为也知其所以然了。顺便说一下，前端的水也是很深的（且越来越深），在具体工作中可以分为偏前和偏后两个大方向，偏前的前端关注设计、HT
        </div>
      </div>
      <div class="box">
        <div class="float"></div>
        <div class="noFloat overflow">
          我用overflow: hidden; 来 撑开父元素。  内容比较少时，会出现高度坍塌. 浮动元素脱离文档流，父元素未被浮动元素撑开。
        </div>
      </div>
    </div>
    <div class="example">
      <div class="left">哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</div>
      <div class="right">广告广告广告广告广告广告广告广告广告</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'test--page'
}
</script>

<style scoped lang="stylus">
  *{
    box-sizing border-box
    text-align left
  }
  li>p
    line-height 30px
  .dv {
    width: 400px;
    height: 230px;
    border: 1px solid slateblue;
  }

  .dv2 {
    width: 200px;
    height: 80px;
    background: salmon;
    margin-bottom: 30px;
  }

  .dv3 {
    width: 200px;
    height: 30px;
    margin-top: 60px;
    background: seagreen;
  }
  .reslove{
    position absolute
  }

</style>
<style scoped>
.box{
  width: 33%;
  padding: 10px;
  border: 1px solid slateblue;
  display: inline-block;
}
.float{
  float: left;
  width: 200px;
  height: 50px;
  background: salmon;
  margin-right: 24px;
}
.noFloat{
  background: slategray;
  color: #fff;
  text-indent: 20px;
}
.overflow{
  overflow: hidden; /* 清除环绕，为其本身创建一个BFC */
}
.left{
  width: 30%;
  height: 100px;
  padding: 24px;
  background-color: antiquewhite;
  float: left;
}
.right{
  padding: 24px;
  background-color: aquamarine;
  /*float: left;*/
}
</style>
