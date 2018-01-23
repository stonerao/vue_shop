import Vue from 'vue'
import Router from 'vue-router'
import * as whileList from './while'
import * as needList from './need'
Vue.use(Router);
// 路由列表
const routerList = [
        { path: '/', redirect: '/index' }, //重定向到index
        {
            path: '/index',
            name: 'index',
            component: r => require.ensure([], () => r(require('@/view/index/index'))), //按需加载
            children: [{
                path: "/index/router",
                name: "head",
                component: r => require.ensure([], () => r(require('@/components/index/index')))
            }]
        }
    ]
    // 导出参数
export default new Router({
    mode: 'history',
    routes: [
        ...routerList,
        ...whileList.router,
        ...needList.router
    ], //所有路由
    linkActiveClass: 'active'
})