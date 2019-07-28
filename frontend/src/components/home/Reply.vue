<template>
    <div class="reply-content">
        <div class="reply-modal">
            <Gravatar email="victorparma@hotmail.com" alt='User'/>
            <div class='reply-text'>
                <span class='reply-userName'>Victor Parma</span>
                <span class='replied-text'>   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima nisi aspernatur quos ratione eum, et iusto doloribus ipsa eaque culpa nobis accusamus asper</span>
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
        padding: 6px;
        margin-top: 15px;
    }
    .reply-modal{
        display:flex;
        
        padding: 5px;

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
    }
    .reply-text .reply-userName{
        
        font-weight: 650; 
    }
    
</style>
