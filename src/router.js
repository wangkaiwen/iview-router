const routers = [{
    path: '/a/1',
    meta: {
        title: ''
    },
    component: (resolve) => require(['./views/secondMenu.vue'], resolve),
    children:[
        {
            path:':third',
            component: (resolve) => require(['./views/content.vue'], resolve)
        }
    ]
},{
    path: '/a/2',
    meta: {
        title: ''
    },
    component: (resolve) => require(['./views/secondMenu.vue'], resolve),
    children:[
        {
            path:':third',
            component: (resolve) => require(['./views/content.vue'], resolve)
        }
    ]
},{
    path:'/h',
    meta: {
        title: '备件市场'
    },
    component: (resolve) => require(['./views/content.vue'], resolve)
},{
    path:'/',
    redirect: '/a'
}];
export default routers;