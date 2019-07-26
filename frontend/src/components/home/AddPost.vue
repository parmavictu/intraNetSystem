<template>
    <div class="addPost-content">
        <div class="addPost-auth-modal">
            <div class="addPost-header">
                <div class="addPost-img-user">
                    <Gravatar email="victorparma@hotmail.com" alt='User' />
                </div>
                <div class="addPost_footer">
                    <div class='addPost_name'>Victor parma</div>
                    <input type="text" placeholder="escreva algo..."  v-model="addPostContent.content">
                </div>
                <div class='addPostButton'><a href>Postar</a></div>
                
            </div>
            
            
        </div>
    </div>
</template>

<script>
import Gravatar from 'vue-gravatar'
export default {
    name:'AddPost',
    components:{Gravatar},
    data:function() {
        return {
            addPostContent: {}
        }
    },
    props:['email','name']
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
        font-size: 1.5rem;
        font-weight: 100;
        
    }
    .addPost_footer{
        width: 100%;
        margin-left:10px;
        margin-right: 10px;
        
    }
    
    .addPost-img-user > img{
        
        max-height: 90px;
        border-radius: 100px; 
        
    
    }
    .addPost-name-user {
        margin-left: 10px;
        font-size: 1.8rem;
        
    }
    
    
   
    .addPost-auth-modal input {
        width: 100%;
        height: 40px;
        outline: none;
        margin-top: 10px; 
        padding: 4px;
        border-radius: 10px; 
        border: 1px solid rgb(163, 158, 158);
        
    }
    

    
</style>
