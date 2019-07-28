<template>
    <div class="feed" >
        <ul>
            <li><AddPost/></li>
            <li v-for='post in postss' :Key='post.id'><Posts :email="post.email" :name='post.name' :content="post.content" userEmail="user.email" :poId='post.id'/></li>
        </ul>
    </div>

    
</template>

<script>
import {baseApiUrl} from '@/global'
import Posts from './Posts'
import AddPost from './AddPost'
import axios from 'axios'
import {mapState} from 'vuex'
export default {
    name: 'feed',
    components:{Posts, AddPost},
    computed: mapState([ 'user']),
    data: function (){
        return {
            postss:[]
        }
    },
    methods: {
        showPosts (){
            axios.get(`${baseApiUrl}/posts`).then(res => {
                this.postss = res.data})
        }
    },
    

    mounted(){
        this.showPosts()
    }
}
</script>

<style>
    .feed{
        display:flex;
        justify-content: center;
        align-items: center;
        
    }
    .feed ul {
        list-style: none;
    }
    .feed li{
        margin-bottom: 10px;
    }
    .feed li:first-child{
        margin-bottom:20px !important;
    }
</style>
