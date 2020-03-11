import Vue from 'vue'
import Vuex from 'vuex'

// use 将插件作为Vue的插件使用
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    num: 1
  }
})
