import { createWebHistory, createRouter } from 'vue-router'

import Dashboard from '../views/Dashboard.vue';
import Login from '../views/Login.vue';
import About from '../views/About.vue';

const routes = [
    {
        path: '/',
        name: 'dashboard',
        component: Dashboard
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },


]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;