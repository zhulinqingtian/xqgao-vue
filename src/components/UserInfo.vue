<template>
  <div>
    <p>登录用户：{{name}} {{age}} </p>
    <p>权限：
      <span v-for="p in user.powerList">{{p}} </span>
    </p>
    <p>
      我的qq:
      <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=245350678&site=qq&menu=yes">
        <img src="http://wpa.qq.com/pa?p=2:975259840:52" align="absmiddle">
        客服-夏瞳
      </a>
    </p>
  </div>
</template>

<script>
import API from './../axios/api.js'
import {mapGetters, mapMutations, mapActions} from 'vuex';

export default {
  name: 'user-info',
  data () {
    return {
      name: this.$store.state.name,
      age: this.$store.state.age,
      user: this.$store.state.info
    }
  },
  created () {
    // this._getUser();
    this.$store.dispatch('getUserInfo'); // 修改state中的info对象
    console.log('**********', this.$store.state);
  },
  computed: {
    /*...mapGetters([
      'name',
      'age'
    ])*/
  },
  methods: {
    ...mapMutations({
      setName: 'SET_NAME', // 映射 this.setName() 为 this.$store.commit('SET_NAME')
      setAge: 'SET_AGE',
      userInfo: 'USER_INFO'
    }),
    ...mapActions([
      'nameAsyn' // 将 this.nameAsyn() 映射为 this.$store.dispatch('increment')
    ]),
    _getUser () {
      API.getUser('/getUser')
        .then(result => {
          this.user = result.data;
          console.log(result);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
}
</script>

<style scoped>

</style>
