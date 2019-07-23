<template>
    <div class="content" :class="back">
        <router-view></router-view>
    </div>
</template>

<script>
//import {mapState} from 'vuex'
export default {
    name:'Content',
    //computed:mapState(['user'])
    computed: {
        back(){
            return window.location.pathname === '/signin' ? 'auth' : 'notauth'
        }
    }
}
</script>

<style>
    .content{
        grid-area: content;
        
        padding: 20px;
    }
    .auth{
         background: url('../../assets/walp.jpeg') !important;
    }
    .notauth{
        background: #efefef;
    }
</style>
