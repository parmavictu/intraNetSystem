<template>
    <div id="app" :class="{'hide-menu': !isMenuVisible || !user}" >
        <Header  :hideToggle="!user" :hideUserDropdown='!user'/> 
        <Menu v-if='user'/>
        <Loading v-if='validatingToken'/>
        <Content v-else/>
        <Footer />
    </div>
</template>

<script>
import Loading from '@/components/templates/Loading'
import { mapState } from 'vuex'
import {baseApiUrl, userKey} from '@/global'
import Header from '@/components/templates/Header'
import Menu from '@/components/templates/Menu'
import Content from '@/components/templates/Content'
import axios from 'axios'
import Footer from '@/components/templates/Footer'

export default {
    name:'App',
    components: { Header, Menu, Content, Footer, Loading },
    computed: mapState(['isMenuVisible', 'user']),
    data: function(){
        return {
            validatingToken: true
        }
    },
    methods: {
        async validateToken() {
            this.validatingToken = true
            const json = localStorage.getItem(userKey)
            const userData = JSON.parse(json)
            this.$store.commit('setUser', null)
            

            if(!userData){
                this.validatingToken = false
                this.$router.push({name: 'signin'})
                return
            }
            const res = await axios.post(`${baseApiUrl}/validateToken`, userData)


            if(res.data){
                this.$store.commit('setUser', userData)
                
            }else {
                localStorage.removeItem(userKey)
                this.$router.push({name: 'signin'})
            }
            this.validatingToken = false
        }
            
        
    },
    created(){
        this.validateToken()
    }    
    
    
}
</script>

<style>
    body{
        margin:0;
    }
    #app {
        -webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;


        height: 100vh;
        display: grid;
        grid-template-rows: 60px 1fr 40px;
        grid-template-columns: 270px 1fr;
        grid-template-areas: 'header header' 'menu content' 'footer footer';
        
    }
    #app.hide-menu{
        grid-template-areas: 'header header' 'content content' 'footer footer';
    }

    #app.auth-screen{
        grid-template-areas: 'header header' 'content content' 'content content';
       
    }   
     
</style>
