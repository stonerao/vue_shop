export let router = [{
        name: 'list',
        path: '/commodity/index',
        component: r => require.ensure([], () => r(require('@/components/commodity/list'))),
    },
    {
        name: 'details',
        path: '/commodity/details',
        component: r => require.ensure([], () => r(require('@/components/commodity/details'))),
    }
]

export let Order = [{
    name: 'Order',
    path: '/order/index',
    component: r => require.ensure([], () => r(require('@/components/order/index')))
}]