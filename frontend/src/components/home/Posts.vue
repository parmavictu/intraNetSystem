<template>
        
    <div class="post-content">
        
        <div class="post-auth-modal">
            
            <div class="post-header">
                
                <div class="post-img-user">
                    <img :src="imgProfile" alt="User" v-if='imgProfile' width="50" height="50" >
                    <Gravatar :email="email" alt='User' v-else/>
                </div>
                <div class="post-name-user">{{name}}</div>
                <a href class="post-icon" @click.prevent='getpostIdDel($event)' @confirmDelPost='confirmedDelPost' :id="poId"  ><i class="fa fa-ellipsis-h"></i></a>
            </div>
            <hr>
            <div class="post-user-content">
                {{content}}
            </div>
            


            <div class="reply" v-for='reply in replies' :key='reply.id' >
                <Reply :name='reply.name' :email='reply.email' :content='reply.content' :imgProfileReply='reply.imgUrl'/>
            </div>

           
            <div class="post-answer">
                <img :src="user.imgUrl" alt="User" v-if='user.imgUrl'>
                <Gravatar :email="user.email" alt='User' v-else/>
                <input @click="getpostId($event)" v-model='postReply.content' :id='poId' @keyup.enter='addReply()'
                type="text" placeholder="escreva um comentario...">
            </div>
            <DeleteOrEdit  v-show='DeleteOrEdit' @clickedConfirmDelete='cnDelete'/>
            
            
        </div>
        <ConfirmDelete v-show='confirmDelete' @closeConfirmPass='closeCfP' @confirmDelPost='confirmedDelPost'/>
    </div>
</template>

<script>
import ConfirmDelete from './ConfirmDelete'
import DeleteOrEdit from './DeleteOrEdit.vue'
import axios from 'axios'
import {baseApiUrl, showError} from '@/global'
import Reply from './Reply'
import {mapState} from 'vuex'
import Gravatar from 'vue-gravatar'
export default {
    name: "Posts",
    components:{Gravatar, Reply, DeleteOrEdit, ConfirmDelete},
    data: function() {
        return{
            idPostDel: null,
            postReply: {},
            idpost: null,
            replies: [],
            DeleteOrEdit: false,
            confirmDelete: false
        }
    },
    computed: mapState(['user']),
    props:['email', 'name','content','userEmail','poId','imgProfile'],
    methods: {
        
        confirmedDelPost(){
            axios.delete(`${baseApiUrl}/posts/${this.idPostDel}`)
                .then(() => {
                    this.$toasted.global.defaultSuccess()

                }).catch(showError)
        },      
        closeCfP(){
            this.confirmDelete = false
        },
        cnDelete(){
            this.confirmDelete = true
        },
        
        addReply (){
            axios.post(`${baseApiUrl}/reply`, {...this.postReply, userIdReply: this.user.id, postId: this.idpost })
                .then(() => {
                    this.$toasted.global.defaultSuccess()
                    this.postReply = {}
                    this.getReplies(this.$props.poId)
                }).catch(showError)
        },
        getpostId(event){
            this.idpost = event.target.id
        },
        getpostIdDel(event){
            this.idPostDel = event.target.id
            this.DeleteOrEdit = true
        },
        async getReplies(id){
            
            const data = await axios.get(`${baseApiUrl}/posts/${id}/reply`)
            this.replies = data.data
        }
        
    },
    created(){
        this.getReplies(this.$props.poId)
    }
    
    
}
</script>

<style>
    
    .post-content{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .post-auth-modal{
        position: relative;
        background-color: #fff;
        width: 500px;
        padding: 20px;
        box-shadow: 0 2px 6px rgba(15, 14, 14, 0.15);
        border-radius: 10px;
    }

    .post-header{
        width: 100%;
        padding: 5px;
        display: flex;
        flex-direction: row;
        justify-content: stretch;
        
        
    }
    .post-img-user  img{
        
        max-height: 50px;
        border-radius: 30px; 
    
    }
    .post-name-user {
        margin-left: 10px;
        font-size: 1.8rem;
        
    }
    .post-icon{
        font-size: 1.6rem;
        margin-left: auto;
        padding-right: 5px; 
        
        
    }
    .post-icon{
        text-decoration: none;
        color: black;
    }
    .post-user-content{
        
        padding: 8px;
        box-shadow: 0 2px 6px rgba(0, 0 ,0 , 0.10);
        border-radius: 5px;
        
        
        
        
    }
    .post-auth-modal hr{
        border: 0;
        width: 100%;
        height: 1px;
        margin-bottom: 15px;
        background-image: linear-gradient(to right,
            rgba(120, 120, 120, 0.05),
            rgba(120, 120, 120, 0.20),
            rgba(120, 120, 120, 0.05));
    }
    .post-auth-modal input {
        width: 100%;
        height: 35px;
        outline: none;
        margin-top: 10px; 
        padding: 10px 4px 10px 4px;
        border-radius: 10px; 
        border: 1px solid rgb(163, 158, 158);
        
    }
    .post-answer{
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-top: 15px;
    }

    .post-answer  > img {
        height: 35px;
        width:40px;
        border-radius: 30px;
        margin-top: 10px;
        margin-right: 10px; 

    }
    
    .reply{
        padding: 7px;
        padding-left: 15px;
        
    }

</style>
