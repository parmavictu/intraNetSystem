import Vue from 'vue'
import VueRouter from 'vue-router'

import AddPost from '@/components/home/AddPost'
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
},{
    name: 'addpost',
    path:'/addpost',
    component: AddPost
}]



const router = new VueRouter({
    mode: 'history',
    routes
})

export default router