<template>
  <div class="parent">
    <p>星级测试</p>
    <star v-model="star"></star>
  </div>
</template>
<script>
import star from './star';

export default {
  name: 'star-test',
  data () {
    return {
      star: 3
    }
  },
  watch: {
    star (val) {
      console.log(val)
    }
  },
  components: {star}
};
</script>
