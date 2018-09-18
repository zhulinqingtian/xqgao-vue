/**
 * store
 * ├── index.js          # 我们组装模块并导出 store 的地方
 * ├── state.js          # 根级别的 state
 * ├── getters.js        # 根级别的 getter
 * ├── mutation-types.js # 根级别的mutations名称（官方推荐mutions方法名使用大写）
 * ├── mutations.js      # 根级别的 mutation
 *  ├── actions.js        # 根级别的 action
 */

// 如果项目中，使用的状态管理操作非常频繁，可以将状态管理的对象进行细分，最后汇集之后集中管理；
import vue from 'vue'
import vuex from 'vuex'

import state from './state'
import * as getters from './getters'
import mutations from './mutations'
import actions from './actions'

vue.use(vuex)

export default new vuex.Store({
  state,
  getters,
  mutations,
  actions
})



/**
 * 在vue组件中使用时，我们通常会使用mapGetters、mapActions、mapMutations，然后就可以按照vue调用methods和computed的方式去调用这些变量或函数
 * 示例如下:
 */

import {mapGetters, mapMutations, mapActions} from 'vuex';

/* 只写组件中的script部分 */
/*
export default {
  computed: {
    ...mapGetters([
      name,
      age
    ])
  },
  methods: {
    ...mapMutations({
      setName: 'SET_NAME',      // 映射 this.setName() 为 this.$store.commit('SET_NAME')
      setAge: 'SET_AGE'
    }),
    ...mapActions([
      nameAsyn                  // 将 this.nameAsyn() 映射为 this.$store.dispatch('increment')
    ])
  }
};
*/



