<template>
    <div class="feed" >
        <ul>
            <li v-for='post in postss' :Key='post.id'><Posts :email="post.email" :name='post.name' :content="post.content" userEmail="victorparma@hotmail.com"/></li>
        </ul>
    </div>

    
</template>

<script>
import {baseApiUrl} from '@/global'
import Posts from './Posts'
import axios from 'axios'
export default {
    name: 'feed',
    components:{Posts},
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

</style>
