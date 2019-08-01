<template>
    <div class="reply-content">
        <div class="reply-modal">
            <Gravatar :email="email" alt='User'/>
            <div class='reply-text'>
                <span class='reply-userName'>{{name}}</span>
                <span class='replied-text'>   {{content}}</span>
            </div>
            
        </div>
    </div>
</template>

<script>


import Gravatar from 'vue-gravatar'
export default {
    name:'Reply',
    props: ['email','name','content'],
    components: {Gravatar},
    
}
</script>

<style>
    .reply-content{
        
        margin-top: 15px;
    }
    .reply-modal{
        display:flex;
        
        padding: 8px;
        border-left:1px solid rgb(185, 181, 181);

    }
    .reply-modal  img {
        max-height: 37px;
        border-radius: 30px; 
    }
    .reply-text{
        margin-left: 8px;
        background-color: #efefef88;
        border-radius: 8px; 
        padding: 5px;
        padding-right: 15px;
        word-break: break-all;
        
        
    }
    .reply-text .reply-userName{
        font-weight: 650; 
    }
    
</style>
