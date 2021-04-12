import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueRouter from 'vue-router'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import './scss/main.scss'

import Routes from  './routes'

import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter)
Vue.use(VueAxios, axios)

Vue.config.productionTip = false


const router = new VueRouter ({
  routes: Routes,
  mode: 'history'
})

new Vue({
  store,
  render: h => h(App),
  router: router
}).$mount('#app')
