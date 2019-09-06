<template>
    <aside class="menu" v-show='isMenuVisible || !user'></aside>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name:'Menu',
    computed: mapState(['isMenuVisible','user'])
}
</script>

<style>
    .menu{
        grid-area: menu;
        background:  linear-gradient(to right, rgba(0,0,0,0.9) 25%, rgba(0,0,0,0.9));
    }
</style>
