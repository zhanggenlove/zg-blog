import { createRouter, createWebHistory } from 'vue-router'

//静态路由

const routes = [
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('@/components/HelloWorld.vue') 
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
