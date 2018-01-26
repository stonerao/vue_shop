export let router = [{
    name: 'my_member',
    path: '/member/index',
    component: r => require.ensure([], () => r(require('@/components/member/my_member')))
}]
export let system = [{
    name: 'my_system',
    path: '/system/index',
    component: r => require.ensure([], () => r(require('@/components/system/index')))
}]