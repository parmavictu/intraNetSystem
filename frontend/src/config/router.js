import Vue from 'vue'
import VueRouter from 'vue-router'


import Auth from '@/components/auth/Auth'
import Posts from '@/components/home/Posts'

Vue.use(VueRouter)


const routes = [{
    name: 'signin',
    path: '/signin',
    component: Auth
},{
    name: 'post',
    path:'/post',
    component: Posts
}]



const router = new VueRouter({
    mode: 'history',
    routes
})

export default router