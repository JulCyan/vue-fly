import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: "我的商城",
    ballFlag: false,
    ballStyle: {
      top: '100px',
      left: '100px'
    },
    goodsNum: 0
  },
  mutations: {
    changeTitle(state, title) {
      state.title = title
    },
    changeBallFlag (state) {
      state.ballFlag = !state.ballFlag
    },
    changeBallStyle(state) {
      let number = document.getElementById("number").getBoundingClientRect()
      state.ballStyle.top = number.top + number.height -20+ "px"
      state.ballStyle.left = number.left + number.width / 2 - 4 + "px"
    },
    addGoods(state, num = 0) {
      state.goodsNum += num
    }
  },
  actions: {

  }
})
