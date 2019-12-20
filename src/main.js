import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import router from './router'
import infiniteScroll from 'vue-infinite-scroll'


import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'

Vue.use(ElementUI)
Vue.use(infiniteScroll)
Vue.config.productionTip = false



new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
