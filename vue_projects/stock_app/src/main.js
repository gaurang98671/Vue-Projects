import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'

Vue.use(VueRouter)

const paths = [
  {
    path: "/",
    component: Home 
  },
]

const router = new VueRouter({
  routes: paths
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
