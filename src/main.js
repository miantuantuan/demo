// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import store from './store'
import i18n from './utils/i18n/i18n' // 设置多国语言
// import 'lib-flexible/flexible.js
import XVideoPlayer from 'x-video-player'
import 'video.js/dist/video-js.css'
// require videojs style
import './assets/style/theme/default/index.css'
import animated from './assets/style/animate/vue-transition.scss' // npm install animate.css --save安装，在引入

Vue.use(animated)
Vue.use(ElementUI)
Vue.use(XVideoPlayer)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  i18n,
  router,
  components: { App },
  template: '<App/>'
})
