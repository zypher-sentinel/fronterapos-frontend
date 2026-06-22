import { createRouter, createWebHistory } from 'vue-router'

import LoginView from '../views/LoginView.vue'
import DashboardView from '../views/DashboardView.vue'
import CategoriasView from '../views/CategoriasView.vue'
import ProductosView from '../views/ProductosView.vue'
import MesasView from '../views/MesasView.vue'

const routes = [

    {
        path: '/',
        redirect: '/login'
    },

    {
        path: '/login',
        name: 'login',
        component: LoginView
    },

    {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardView
    },

    {
        path: '/categorias',
        name: 'categorias',
        component: CategoriasView
    },

    {
        path: '/productos',
        name: 'productos',
        component: ProductosView
    },

    {
    path: '/mesas',
    name: 'mesas',
    component: MesasView
    },

]

const router = createRouter({

    history: createWebHistory(),

    routes

})

router.beforeEach((to, from, next) => {

    const logueado = localStorage.getItem('logueado') === 'true'

    if (

        to.path !== '/login' &&

        !logueado

    ) {

        next('/login')

    } else {

        next()

    }

})

export default router