<template>
    <div id="app" class='hide-menu'>
        <Header/> 
        <Menu />
        <Content />
        <Footer />
    </div>
</template>

<script>
import Header from '@/components/templates/Header'
import Menu from '@/components/templates/Menu'
import Content from '@/components/templates/Content'
import Footer from '@/components/templates/Footer'
export default {
    name:'App',
    components: { Header, Menu, Content, Footer }
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
        grid-template-areas: 'header header' 'content content' 'footer footer';
        
    }
    #app.hide-menu {
        grid-area: 'header header' 'content content' 'footer footer';
    }
     
</style>
