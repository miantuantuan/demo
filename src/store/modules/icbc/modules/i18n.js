export default {
  namespaced: true,
  state: {
    lang: 'cn'
  },
  mutations: {
    changeLang: (state, params) => {
      state.lang = lang
    }
  },
  actions: {
    /**
     * @description 设置用户语言环境
     * @param {Object} state vuex state
     * @param {*} lang lang
     */
    set ({ state, dispatch }, lang) {
      return new Promise(async resolve => {
        // store 赋值
        state.lang = lang
        // 状态存储
        localStorage.setItem('lang', lang)
        resolve()
      })
    }
  }
}
