<template>
    <header class="header">
        <a  class="toggle" v-if="!hideToggle"><i class="fa fa-lg" :class='icon'></i></a>
        <h1 class="title"><a href>{{title}}</a></h1>
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
    }
}
</script>

<style>
    .header{
        grid-area: header;
        background: linear-gradient(to right, #2c2f45 25%, #161623);
    }
    
</style>
