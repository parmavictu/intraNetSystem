<template>
    <div class="user-dropdown">
        <div class="user-button">
            <span class="d-none d-sm-block" >{{user.name}}</span>
            <div class="user-dropdown-img">
                <img :src="user.imgUrl" alt="User" v-if='user.imgUrl' width="37" height='37'>
                <Gravatar :email="user.email" alt='User' v-else/>
            </div>
            <i class="fa fa-angle-down"></i>
        </div>
        <div class="user-dropdown-content">
            <router-link to="/myprofile" ><i class="fa fa-user"></i> Meu Perfil</router-link>
            <router-link v-if='user.admin' to="/admin" ><i class="fa fa-cogs"></i> Administração</router-link>
            <a href @click.prevent='logout'><i class='fa fa-sign-out' click.prevent='logout'></i> Sair </a>
        </div>
        
    </div>
</template>

<script>
import { userKey } from '@/global'
import Gravatar from 'vue-gravatar'
import { mapState } from 'vuex'

export default {
    name: 'UserDropdown',
    components: { Gravatar},
    computed: mapState(['user']),
    
    methods: {
        logout(){
            localStorage.removeItem(userKey)
            this.$store.commit('setUser', null)
            this.$router.push({name: 'signin'})
        }
    }
}
</script>

<style>
    .user-dropdown{
        position: relative;
        height: 100%;
    }
    .user-button {
        display:flex;
        align-items: center;
        color:#fff;
        font-weight: 100;
        height: 100%;
        padding: 0px 20px;
        margin-right: 2px;
    }
    .user-button:hover{
        background-color: rgba(0, 0, 0, 0.2);
    }
    .user-dropdown-img{
        margin: 0px 12px;
        
    }
    .user-dropdown-img > img {
        max-height: 37px;
        border-radius: 5px; 
    }
    .user-dropdown-content {
        position: absolute;
        right: 0px;
        background-color: #F9F9F9;
        min-width: 170PX;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        padding: 10px;
        z-index: 1;

        display: flex;
        flex-direction: column;
        flex-wrap: wrap;

        visibility: hidden;
        opacity:0;
        transition: visibility 0, opacity 0.5s linear;
        border-radius: 8px;
    }
    .user-dropdown:hover .user-dropdown-content {
        visibility: visible;
        opacity: 1;
    }
    .user-dropdown-content a {
        text-decoration: none;
        color:#000;
        padding: 10px;
    }
    .user-dropdown-content a:hover{
        text-decoration: none;
        color: #000;
        background-color: #EDEDED;
    }
</style>
