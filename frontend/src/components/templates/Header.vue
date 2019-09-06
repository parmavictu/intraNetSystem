<template>
    <header class="header">
        <a  class="toggle" v-if="!hideToggle" @click='toggleMenu' ><i class="fa fa-lg" :class='icon'></i></a>
        <h1 class="title"><a href>{{title}}</a></h1>
        <UserDropdown v-if="!hideUserDropdown"/>
    </header>
</template>

<script>
import UserDropdown from './UserDropdown'

export default {
    name: 'Header',
    components: { UserDropdown},
    props:{
        title: String,
        hideToggle: Boolean,
        hideUserDropdown: Boolean
    },
    computed: {
        icon() {
            return this.$store.state.isMenuVisible ? 'fa-angle-left' : 'fa-angle-down'
        }
        
    },
    methods:{
        toggleMenu() {
            this.$store.commit('toggleMenu')
        }
    }
}
</script>

<style>
    .header{
        grid-area: header;
        background: linear-gradient(to right, rgba(0,0,0,0.9) 25%, rgba(0,0,0,0.9));
        
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .title{
        font-size: 1.2rem;
        color: #fff;
        font-weight: 100;
        flex-grow: 1;
        text-align: center;
    }
    .title a {
        text-decoration: none;
        color:#fff
    }
    header.header > a.toggle {
        width: 60px;
        height: 100%;
        color: #fff;
        justify-self: flex-start;
        text-decoration: none;

        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
