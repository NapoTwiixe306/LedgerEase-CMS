import {createRouter, createWebHistory} from "vue-router";
import AccPage from '../components/HomePage.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: AccPage
    },
    {
        path: '/docs',
        name: 'docs',
        component: () => import('../components/Page/DocsPage.vue')
    },
    {
        path: '/create',
        name: 'create',
        component: () => import ('../components/Page/CreatePage.vue')
    },
    {
        path: '/register',
        name: 'register',
        component: () => import ('../components/Page/RegisterPage.vue')
    },
    {
        path: '/yoursite',
        name: 'yoursite',
        component: () => import ('../components/Page/YourSitePage.vue')
    }

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
