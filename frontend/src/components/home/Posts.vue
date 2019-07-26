<template>
    <div class="post-content">
        <div class="post-auth-modal">
            <div class="post-header">
                <div class="post-img-user">
                    <Gravatar :email="email" alt='User' />
                </div>
                <div class="post-name-user">{{name}}</div>
                <a href class="post-icon"><i class="fa fa-ellipsis-h"></i></a>
            </div>
            <hr>
            <div class="post-user-content">
                {{content}}
            </div>
            <div class="post-answer"><Gravatar :email="userEmail" alt='User' /><input type="text" placeholder="escreva um comentario..."></div>
            
        </div>
    </div>
</template>

<script>

import Gravatar from 'vue-gravatar'
export default {
    name: "Posts",
    components:{Gravatar},
    props:['email', 'name','content','userEmail']
    
    
}
</script>

<style>
    .post-content{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .post-auth-modal{
        background-color: #fff;
        width: 500px;
        padding: 20px;
        box-shadow: 0 2px 6px rgba(0, 0 ,0 , 0.15);
        border-radius: 10px;
    }

    .post-header{
        width: 100%;
        padding: 5px;
        display: flex;
        flex-direction: row;
        justify-content: stretch;
        
        
    }
    .post-img-user > img{
        
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
        background: #efefef88;
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
        height: 20px;
        outline: none;
        margin-top: 10px; 
        padding: 4px;
        border-radius: 10px; 
        border: 1px solid rgb(163, 158, 158);
        
    }
    .post-answer{
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-top: 15px;
    }

    .post-answer > img {
        max-height: 35px;
        border-radius: 30px;
        margin-top: 10px;
        margin-right: 10px; 

    }
</style>
