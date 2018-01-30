const ORDER_ROUTER_NAME = '/member/order'
const myMember = [{
        name: 'orderInfo',
        /* 主页 */
        path: `${ORDER_ROUTER_NAME}/info`,
        component: r => require.ensure([], () => r(require('@/components/member/order/info')))
    },
    {
        name: 'orderInfo',
        /* 主页 */
        path: `${ORDER_ROUTER_NAME}/index`,
        component: r => require.ensure([], () => r(require('@/components/member/order/index')))
    },
]
export let router = [{
        name: 'my_member',
        /* 主页 */
        path: '/member/index',
        component: r => require.ensure([], () => r(require('@/components/member/my_member')))
    }, {
        name: 'order',
        /* 订单 */
        path: '/member/order',
        redirect: '/member/order/index',
        component: r => require.ensure([], () => r(require('@/components/member/order'))),
        children: myMember
    }, {
        name: 'coupon',
        /* 优惠券 */
        path: '/member/coupon',
        component: r => require.ensure([], () => r(require('@/components/member/coupon')))
    },
    {
        name: 'integral',
        /* 积分 */
        path: '/member/integral',
        component: r => require.ensure([], () => r(require('@/components/member/integral')))
    },
    {
        name: 'collection',
        /* 收藏 */
        path: '/member/collection',
        component: r => require.ensure([], () => r(require('@/components/member/collection')))
    },
    {
        name: 'superCollection',
        /* 线下超市收藏 */
        path: '/member/superCollection',
        component: r => require.ensure([], () => r(require('@/components/member/superCollection')))
    },
    {
        name: 'parst',
        /* 购买过的商品 */
        path: '/member/parst',
        component: r => require.ensure([], () => r(require('@/components/member/parst')))
    },
    {
        name: 'month',
        /* 账户余额 */
        path: '/member/month',
        component: r => require.ensure([], () => r(require('@/components/member/month')))
    }, {
        name: 'information',
        /* 个人资料 */
        path: '/member/information',
        component: r => require.ensure([], () => r(require('@/components/member/information')))
    }, {
        name: 'safety',
        /* 账户安全 */
        path: '/member/safety',
        component: r => require.ensure([], () => r(require('@/components/member/safety')))
    }, {
        name: 'address',
        /* 收获地址 */
        path: '/member/address',
        component: r => require.ensure([], () => r(require('@/components/member/address')))
    }, {
        name: 'cabinet',
        /* 收获自提柜 */
        path: '/member/cabinet',
        component: r => require.ensure([], () => r(require('@/components/member/cabinet')))
    },

]



export let system = [{
        name: 'my_system',
        /*  */
        path: '/system/index',
        component: r => require.ensure([], () => r(require('@/components/system/index')))
    },


]