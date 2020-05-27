import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import BootstrapVue from 'bootstrap-vue'
import 'vuetify/dist/vuetify.min.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import VueRouter from "vue-router"
import About from "./components/About";
import home from "./components/home";
import Contact from "./components/Contact";
import Service from "./components/Service";

Vue.use(VueRouter)
Vue.use(Vuetify)
Vue.use(BootstrapVue)
Vue.config.productionTip = false

const routes = [
  { path: '/about', component: About },
  { path: '/', component: home},
  { path: '/contact', component: Contact},
  { path: '/service', component: Service}
];

const router = new VueRouter({
  routes
})


new Vue({
  el: '#app',
  router,
  render: h => h(App),
})
