import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import StockInfo from '../views/StockInfo'
Vue.use(VueRouter)


const paths = [
  {
    path: "/",
    component: Home 
  },
  {
    name: "StockInfo",
    path: "/stock/:stockID",
    component: StockInfo
  }
]

const router = new VueRouter({
  routes: paths
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
