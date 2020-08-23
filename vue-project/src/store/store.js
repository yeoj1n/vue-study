import Vue from 'vue'
import Vuex from "vuex";

Vue.use(Vuex);

export default {
  // actions -> mutations -> state
  state: {
    todo: [
      {
        id: 1,
        text: 'buy a car',
        checked: false
      },
      {
        id: 2,
        text: 'play game',
        checked: false
      },
    ]
  },
  // 데이터를 바꾸는 곳
  mutations: {

  },
  // 함수 (비동기적 처리)
  actions: {

  },
  getters: {

  }
}