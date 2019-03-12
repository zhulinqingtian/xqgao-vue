<!--星级组件-->
<template>
  <div class="component-star" @click.stop="">
    <ul class="star-list">
      <li v-for="(item, index) in list" :key="index" @click="change(index)">{{item}}</li>
    </ul>
    <span class="label">{{label}}</span>
  </div>
</template>

<script>
  export default {
    name: 'myStar',
    props: {
      value: { // 必须是value属性，名字不能变
        type: [Number, String],
        required: true
      }
    },
    data () {
      return {}
    },
    computed: {
      list () {
        return '★★★★★☆☆☆☆☆'.slice(5 - this.value, 10 - this.value).split('')
      },
      label () {
        const arr = ['1星', '2星', '3星', '4星', '5星']
        return arr[this.value - 1]
      }
    },
    watch: {
    },
    methods: {
      // 当星级变化
      change (val) {
        let num = val + 1
        this.$emit('input', num) // 必须是input事件
      }
    }
  }
</script>

<style lang="stylus">
  .component-star
    .star-list
      display: inline-flex;
      font-size: 20px;
      li
        cursor: pointer;
        margin-right: 5px;
        color: #f7ba2a;
        transform: scale(1);
        transition: transform .1s linear;
        font-size: 28px;
        &:hover
          transform: scale(1.3);
</style>
