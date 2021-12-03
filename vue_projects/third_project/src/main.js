import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Profile from '../views/Profile'
Vue.use(VueRouter)

const paths = [
  {
    path: "/",
    component: Home
  },
  {
    path: '/profile',
    component: Profile
  }
]

const router = new VueRouter({
  routes: paths,   
})
Vue.config.productionTip = false

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
