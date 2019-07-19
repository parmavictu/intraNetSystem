<template>
    <header class="header">
        <a  class="toggle" ><i class="fa fa-angle-left" ></i></a>
        <h1 class="title"><a href>{{title}}</a></h1>
        <UserDropdown/>
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
