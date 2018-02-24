export let router = [{
        name: '登录',
        /* 主页 */
        path: '/login',
        component: r => require.ensure([], () => r(require('@/view/login/login')))
    }, {
        name: '注册',
        /* 主页 */
        path: '/reg',
        component: r => require.ensure([], () => r(require('@/view/login/reg')))
    }, {
        name: '平台登录',
        /* 主页 */
        path: '/adminl',
        component: r => require.ensure([], () => r(require('@/view/login/admin')))
    }

]