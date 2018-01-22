// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue' 
import App from './App'
import router from './router'
import '@/assets/css/reset.css'  
import store from '@/vuex/index';
import 'babel-polyfill'; 
import '@/mock/index' 
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,/* router */
    store,/* vuex */
    template: '<App/>', 
    components: { App },
    render: h => h(App)
})