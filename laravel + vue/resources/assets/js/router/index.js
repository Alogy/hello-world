import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

let Main = resolve => require(['../pages/home'], resolve)
let notFound = resolve => require(['../pages/404.vue'], resolve)

export default new VueRouter({
  saveScrollPosition: true,
  routes: [
    { path: '/404', component: notFound, name: '404' },
    {
      // name: 'home',
      path: '/',
      component: Main,
      children: [
        { path: '', redirect: { path: '/home' } },
        { path: '/home', component: Main, name: '首页' }
      ]
    },
    { path: '*', redirect: { path: '/404' } }
  ]
})