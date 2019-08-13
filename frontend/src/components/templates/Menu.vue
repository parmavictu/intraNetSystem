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
        background-color: rgba(0,0,0,0.9);
    }
</style>
