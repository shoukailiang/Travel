import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 解决移动端300ms延迟问题
import fastClick from 'fastclick'
import './assets/styles/reset.css'
// 解决移动端1px边框问题
import './assets/styles/border.css'
import './assets/styles/iconfont.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
