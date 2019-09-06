<template >
    <div class="delOrEditContainer">
        
            <a href class='del-button'> <i class="fa fa-pencil" id='pen'></i>  Editar</a> 
            <a href class='del-button' @click.prevent='openConfirmDelete'> <i class="fa fa-trash" id='trash'></i>   Deletar</a> 
        
    </div>
</template>

<script>
export default {
    name: "DeleteOrEdit",
    methods: {
        openConfirmDelete(){
            this.$emit('clickedConfirmDelete')
        }
    }
}
</script>


<style >
    .delOrEditContainer{
        position: absolute;
        top: 55px;
        right: 45px;
        background-color: #F9F9F9;
        min-width: 150PX;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        padding: 10px;
        z-index: 1;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        transition: visibility 0, opacity 0.5s linear;
        border-radius: 8px;
    }
    .del-button, .del-button:hover {
        text-decoration: none;
        color: black;
        width: 100%;
        text-align: center;
        font-size: 1.3rem;
        margin-top: 5px; 
        border-radius: 10px;
        padding: 6px;
    }
    .del-button:hover {
        background-color:  rgba(0, 0, 0, 0.2);
        
    }
    #trash {
        color:rgb(128,0,0);
    }
    
   
</style>