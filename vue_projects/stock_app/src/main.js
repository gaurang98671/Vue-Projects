import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import CountryFlag from 'vue-country-flag'


Vue.use(VueRouter)
Vue.component('country-flag', CountryFlag)

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
