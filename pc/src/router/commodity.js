export const router = [{
        name: 'list',
        path: '/commodity/index',
        component: r => require.ensure([], () => r(require('@/components/commodity/list')))
    }, {
        name: 'details',
        path: '/commodity/details',
        component: r => require.ensure([], () => r(require('@/components/commodity/details')))
    }]
    /* 订单列表 */
export const Order = [{
        name: 'Order',
        path: '/order/index',
        component: r => require.ensure([], () => r(require('@/components/order/index')))
    }]
    /* 活动中心 */
export const Activity = [{
    name: 'ActivityList',
    path: '/activity/index',
    component: r => require.ensure([], () => r(require('@/components/activity/index')))
    },{
        name: 'Exchange',
        path: '/activity/exchange',
        component: r => require.ensure([], () => r(require('@/components/activity/exchange')))
    },{
        name: 'flashSale',
        path: '/activity/flashSale',
        component: r => require.ensure([], () => r(require('@/components/activity/flashSale')))
    },{
        name: 'groupActivity',
        path: '/activity/group',
        component: r => require.ensure([], () => r(require('@/components/activity/groupActivity')))
    }]