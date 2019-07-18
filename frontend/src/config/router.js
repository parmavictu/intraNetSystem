import Vue from 'vue'
import VueRouter from 'vue-router'


import Auth from '@/components/auth/Auth'

Vue.use(VueRouter)


const routes = [{
    name: 'signin',
    path: '/signin',
    component: Auth
}]



const router = new VueRouter({
    mode: 'history',
    routes
})

export default router