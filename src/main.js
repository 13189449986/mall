import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyload from 'vue-lazyload'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import 'lib-flexible/flexible.js'

Vue.use(VueLazyload, {
  loading: '/static/images/loading.gif'
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
