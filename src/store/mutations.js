import Vue from 'vue'

export default {
  updataData: (state, data) => {
    Vue.set(state, 'data', data)
  }
}
