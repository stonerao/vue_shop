// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import 'babel-polyfill';
import App from './App'
import router from './router'
import store from '@/vuex/index';


import VueProgressBar from 'vue-progressbar'
/* 进度条 */
Vue.use(VueProgressBar, {
    color: 'rgb(143, 255, 199)',
    failedColor: 'red',
    height: '2px'
})
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
    preLoad: 1.5,
    error: require('@/assets/loading.png'),
    loading: require('@/assets/error.png'),
    attempt: 1
})


import { Icon, Row, Col } from 'element-ui'
Vue.use(Icon)
Vue.use(Row)
Vue.use(Col)

import '@/styles/reset.css'
import '@/mock/index'
import '@/utils/start'
Vue.config.productionTip = false
axios.defaults.withCredentials = true;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.transformRequest = [function(data) {
    let ret = '';
    for (let it in data) {
        ret += `${encodeURIComponent(it)}=${encodeURIComponent(data[it])}&`
    }
    return ret;
}]
Vue.prototype.$http = axios;
/* 路由开始执行代码 */
/* 如果含有，顶部和底部将不显示 */
const headerFooterList = ['/login', '/reg', '/adminl']
router.beforeEach((to, from, next) => {
        /* 如果含有，顶部和底部将不显示 */
        if (headerFooterList.indexOf(to.path) !== -1) {
            store.state.isHeaderFooter = false
        } else {
            store.state.isHeaderFooter = true
        }
        /* 进度条 */
        Vue.prototype.$Progress.start()
        next();
    })
    /* 路由结束之后执行*/
router.afterEach(() => {
    Vue.prototype.$Progress.finish()
});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router, //router
    store, //vuex
    template: '<App/>',
    components: { App },
    render: h => h(App)
})