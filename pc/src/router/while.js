export let list = [{
    path: '/',
    name: 'index',
    component: r => require.ensure([], () => r(require('@/view/index/index')))
}]