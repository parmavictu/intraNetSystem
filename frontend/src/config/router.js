import Vue from 'vue'
import VueRouter from 'vue-router'


import Auth from '@/components/auth/Auth'
import Feed from '@/components/home/Feed'

Vue.use(VueRouter)


const routes = [{
    name: 'signin',
    path: '/signin',
    component: Auth
},{
    name: 'feed',
    path:'/feed',
    component: Feed
}]



const router = new VueRouter({
    mode: 'history',
    routes
})

export default router