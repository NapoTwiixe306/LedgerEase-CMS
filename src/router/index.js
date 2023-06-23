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
        component: () => import('../components/DocsPage.vue')
    }

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router