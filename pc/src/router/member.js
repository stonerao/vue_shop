const ORDER_ROUTER_NAME = '/member/order';
const MONTH_ROUTER_NAME = '/member/month';
const SAFETY_ROUTER_NAME = '/member/safety';
const ADDRESS_ROUTER_NAME = '/member/address';
/* 订单 */
const MYMEMBER = [{
            name: 'orderInfo',
            /* 详情页 */
            path: `${ORDER_ROUTER_NAME}/info`,
            component: r => require.ensure([], () => r(require('@/components/member/order/info')))
        },
        {
            name: 'orderIndex',
            /* 主页 */
            path: `${ORDER_ROUTER_NAME}/index`,
            component: r => require.ensure([], () => r(require('@/components/member/order/index')))
        },
        {
            name: 'orderEvaluation',
            /* 评价 */
            path: `${ORDER_ROUTER_NAME}/evaluation`,
            component: r => require.ensure([], () => r(require('@/components/member/order/evaluation')))
        },
    ]
    /* account 账户 */
const MONTH = [{
            name: 'accountRecharge',
            /* 充值*/
            path: `${MONTH_ROUTER_NAME}/index`,
            component: r => require.ensure([], () => r(require('@/components/member/month/index')))
        },
        {
            name: 'accountItems',
            /* 列表*/
            path: `${MONTH_ROUTER_NAME}/items`,
            component: r => require.ensure([], () => r(require('@/components/member/month/items')))
        },
    ]
    /* SAFETY 账户安全 */
const SAFETY = [{
            name: 'safetyIndex',
            /* 密码修改*/
            path: `${SAFETY_ROUTER_NAME}/index`,
            component: r => require.ensure([], () => r(require('@/components/member/safety/index')))
        }, {
            name: 'password',
            /* 密码修改*/
            path: `${SAFETY_ROUTER_NAME}/password`,
            component: r => require.ensure([], () => r(require('@/components/member/safety/password')))
        }, {
            name: 'pay_password',
            /* 支付密码密码修改*/
            path: `${SAFETY_ROUTER_NAME}/pay`,
            component: r => require.ensure([], () => r(require('@/components/member/safety/pay')))
        },
        {
            name: 'mobile',
            /* 列表*/
            path: `${SAFETY_ROUTER_NAME}/mobile`,
            component: r => require.ensure([], () => r(require('@/components/member/safety/mobile')))
        }, {
            name: 'mail',
            /* 列表*/
            path: `${SAFETY_ROUTER_NAME}/mail`,
            component: r => require.ensure([], () => r(require('@/components/member/safety/mail')))
        }
    ]
    /* ADDRESS 账户安全 */
const ADDRESS = [{
    name: '地址列表',
    /* 地址列表*/
    path: `${ADDRESS_ROUTER_NAME}/index`,
    component: r => require.ensure([], () => r(require('@/components/member/address/index')))
}, {
    name: '收货地址',
    /* 收货地址*/
    path: `${ADDRESS_ROUTER_NAME}/items`,
    component: r => require.ensure([], () => r(require('@/components/member/address/items')))
}]



export let router = [{
        name: '我的e菜市',
        /* 主页 */
        path: '/member/index',
        component: r => require.ensure([], () => r(require('@/components/member/my_member')))
    }, {
        name: 'order',
        /* 订单 */
        path: '/member/order',
        redirect: '/member/order/index',
        component: r => require.ensure([], () => r(require('@/components/member/order'))),
        children: MYMEMBER
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
        redirect: '/member/month/index',
        component: r => require.ensure([], () => r(require('@/components/member/month'))),
        children: MONTH
    }, {
        name: 'information',
        /* 个人资料 */
        path: '/member/information',
        component: r => require.ensure([], () => r(require('@/components/member/information')))
    }, {
        name: 'safety',
        /* 账户安全 */
        path: '/member/safety',
        redirect: '/member/safety/index',
        component: r => require.ensure([], () => r(require('@/components/member/safety'))),
        children: SAFETY

    }, {
        name: 'address',
        /* 收获地址 */
        path: '/member/address',
        redirect: '/member/address/index',
        component: r => require.ensure([], () => r(require('@/components/member/address'))),
        children: ADDRESS
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