
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// Vue.component('example', require('./components/Example.vue'));

// const app = new Vue({
//     el: '#app'
// });

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

window.API_PATH = '127.0.0.1:8000';

Vue.prototype.$http = axios
Vue.prototype.$http.url = (url) => {
    return window.API_PATH + url
}

const app = new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
