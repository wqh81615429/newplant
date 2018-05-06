import Vue from 'vue'
import App from './App.vue'
import bb from './lib/index.js'

Vue.use(bb)
new Vue({
  el: '#app',
  render: h => h(App)
})
