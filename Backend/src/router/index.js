import { createWebHistory, createRouter } from 'vue-router'

import Dashboard from '../views/Dashboard.vue';
import Products from '../views/Products.vue';
import Login from '../views/Login.vue';
import About from '../views/About.vue';
import RequestPassword from '../views/RequestPassword.vue';
import ResetPassword from '../views/ResetPassword.vue';
import AppLayout from '../components/AppLayout.vue';

const routes = [
    {
        path: '/app',
        name: 'app',
        component: AppLayout,
        children: 
        [
            {
                path: 'dashboard',
                name: 'app.dashboard',
                component: Dashboard
            },
        
            {
                path: 'products',
                name: 'app.products',
                component: Products
            },
        ]
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
    {
        path: '/request-password',
        name: 'requestPassword',
        component: RequestPassword
    },
    {
        path: '/reset-password',
        name: 'resetPassword',
        component: ResetPassword
    },


]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;