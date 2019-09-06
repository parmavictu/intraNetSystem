import Vue from 'vue'
import VueRouter from 'vue-router'

import MyProfile from '@/components/myprofile/MyProfile'
import Auth from '@/components/auth/Auth'
import Feed from '@/components/home/Feed'
import InventoryPage from '@/components/inventory/InventoryPage'
import Admin from '@/components/admin/Admin'

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
    name: 'myprofile',
    path:'/myprofile',
    component: MyProfile
},{
    name: 'inventory',
    path:'/inventory',
    component: InventoryPage
},{
    name: 'admin',
    path:'/admin',
    component: Admin
}]



const router = new VueRouter({
    mode: 'history',
    routes
})

export default router