import { createWebHistory, createRouter } from 'vue-router'

import Dashboard from '../views/Dashboard.vue';
import Products from '../views/Products.vue';
import Login from '../views/Login.vue';
import About from '../views/About.vue';
import RequestPassword from '../views/RequestPassword.vue';
import ResetPassword from '../views/ResetPassword.vue';
import NotFound from '../views/NotFound.vue';
import AppLayout from '../components/AppLayout.vue';
import store from '../store';

const routes = [
    {
        path: '/app',
        name: 'app',
        component: AppLayout,
        meta: { requiresAuth: true },
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
        meta:{
            requireGuest: true
        },
        component: Login
    },
    {
        path: '/about',
        name: 'about',
        meta:{
            requireGuest: true
        },
        component: About
    },
    {
        path: '/request-password',
        name: 'requestPassword',
        meta:{
            requireGuest: true
        },
        component: RequestPassword
    },
    {
        path: '/reset-password/:token',
        name: 'resetPassword',
        meta:{
            requireGuest: true
        },
        component: ResetPassword
    },

    {
        path: '/:pathMatch(.*)',
        name: 'notFount',
        component: NotFound
    },


]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach( (to, from, next) =>{

    if(to.meta.requiresAuth && !store.state.user.token){
        next({
            name:'login'
        })
    }else if (to.meta.requireGuest && store.state.user.token) {
        next({
            name:'app.dashboard'
        }) 
    }
    else{
        next()
    }
})

export default router;


