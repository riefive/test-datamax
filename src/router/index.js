import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    { path: '/', name: 'Home', component: () => import('../views/PageAHome.vue') },
    { path: '/card', name: 'Card', component: () => import('../views/PageCard.vue') },
    { path: '/number', name: 'Number', component: () => import('../views/PageNumber.vue') },
    { path: '/timer', name: 'Timer', component: () => import('../views/PageTimer.vue') }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
