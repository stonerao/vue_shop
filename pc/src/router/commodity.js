  
export let router = [ {
        name: 'list', 
        path: '/commodity/index', 
        component: r => require.ensure([], () => r(require('@/components/commodity/list'))),
        // children: MYMEMBER
    }  
]

 