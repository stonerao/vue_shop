import Vue from 'vue'
import Router from 'vue-router'
import * as whileList from './while'
import * as needList from './need'
import * as memberList from './member'
Vue.use(Router);
// 路由列表
const routerList = [{
            path: '/',
            redirect: '/index'
        },
        /* 重定向到index */
        {
            path: '/index',
            name: 'index',
            component: r => require.ensure([], () => r(require('@/view/index/index'))),
            //按需加载
        }, {
            path: "/member",
            name: 'member',
            component: r => require.ensure([], () => r(require('@/view/member/index'))),
            redirect: '/member/index',
            children: memberList.router /* member 左边 侧栏 */
        }, {
            path: "/system",
            name: 'system',
            component: r => require.ensure([], () => r(require('@/view/system/index'))),
            redirect: '/system/index',
            children: memberList.system /* member 左边 侧栏 */
        }, {
            path: "*",
            component: r => require.ensure([], () => r(require('@/routing/notFound')))
        }
    ]
    // 导出参数
export default new Router({
    /*
     * 需要后台配置
     * https://router.vuejs.org/zh-cn/essentials/history-mode.html
     */
    mode: 'history',
    routes: [
        ...routerList,
        ...whileList.router,
        ...needList.router
    ], //所有路由
    linkActiveClass: 'active',
    scrollBehavior(to, from, savedPosition) {
        /* 跳转路由后scrollTop 为 0  */
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }
})