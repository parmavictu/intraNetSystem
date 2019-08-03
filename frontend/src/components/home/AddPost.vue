<template>
    <div class="addPost-content">
        <div class="addPost-auth-modal">
            <div class="addPost-header">
                <div class="addPost-img-user">
                    <img :src="user.imgUrl" alt="User" v-if='user.imgUrl' width="80" height="80" >
                    <Gravatar :email="user.email" alt='User' v-else/>
                    <div class='addPost_name'>{{user.name}}</div>
                </div>
                <div class="addPost_footer">
                    <input type="text" placeholder="escreva algo..."  v-model="addPostContent.content">
                    <b-button variant="danger" class="addPostButton" @click.prevent='addPost'>Postar</b-button>
                </div>
                
                
            </div>
            
        </div>
    </div>
</template>

<script>
import {baseApiUrl, showError} from '@/global'
import Gravatar from 'vue-gravatar'
import {mapState} from 'vuex'
import axios from 'axios'
export default {
    name:'AddPost',
    components:{Gravatar},
    data:function() {
        return {
            addPostContent: {}
        }
    },
    computed: mapState(['user']),
    methods:{
        addPost(){
            axios.post(`${baseApiUrl}/posts`,{...this.addPostContent, userId:this.user.id })
                .then(() => {
                    this.$toasted.global.defaultSuccess()
                    this.addPostContent = {}
                    this.$router.go(0)
                    //this.$parent.showPosts()
                }).catch(showError)
        }
    }
}
</script>

<style>
    .addPost-content{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .addPost-auth-modal{
        background-color: #fff;
        width: 500px;
        padding: 15px;
        box-shadow: 0 2px 6px rgba(0, 0 ,0 , 0.15);
        border-radius: 10px;
        
    }
    
    .addPost-header{
        width: 100%;
        padding: 6px;
        display: flex;
        flex-direction: row;
        
        
        
    }
    .addPost_name{
        font-size: 0.9rem;
        font-weight: 200;
        margin-top: 10px;
        height: 20px;
        
    }
    .addPost_footer{
        width: 100%;
        margin-left:10px;
        margin-right: 5px;
        display: flex;
        flex-direction: column;

        
    }
    
    .addPost-img-user > img{
        
        max-height: 110px;
        border-radius: 100px; 
        
    
    }
    .addPost-name-user {
        margin-left: 10px;
        font-size: 1.8rem;
        
    }
    
    
   
    .addPost-auth-modal input {
        width: 100%;
        margin-left: 10px;
        outline: none;
        margin-top: 10px; 
        padding: 4px;
        padding-bottom:50px;
        border-radius: 10px; 
        border: 1px solid rgb(163, 158, 158);
        
    }

    .addPost-auth-modal input::placeholder{
        text-align: start;
    }
    .addPostButton{
        width: 30%;
        align-self: flex-end;
        
        margin-top:10px;
        
        
    }
    .addPostButton a,.addPostButton a:hover{
        text-decoration: none;
        color:white;
    }
    

    
</style>
