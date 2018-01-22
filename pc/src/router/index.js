import Vue from 'vue'
import Router from 'vue-router'
import * as whileList from './while'
Vue.use(Router);
// 路由列表
const routers = [...[{
    path: '/',
    name: 'index',
    component: r => require.ensure([], () => r(require('@/view/index/index')))
}], ...whileList.list];
// 导出参数
export default new Router({
    routes: routers,
    linkActiveClass: 'active'
})