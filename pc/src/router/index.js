import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
Vue.use(Router)
Vue.use(Vuex)
export default new Router({
    routes: [{
        path: '/',
        name: 'index',
        component: r => require.ensure([], () => r(require('@/view/index/index')))
    }],
    linkActiveClass: 'active'
})