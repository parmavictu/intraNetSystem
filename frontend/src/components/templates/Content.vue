<template>
    <div class="content" :class="back">
        <router-view></router-view>
    </div>
</template>

<script>

export default {
    name:'Content',
    computed: {
        back(){
            return this.$route.path === '/signin' ? 'auth' : 'notauth'
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
