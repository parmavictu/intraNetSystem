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
        background-color: #2c2f45;
    }
</style>
