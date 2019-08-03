<template>
    <div class="profile-content">
        <div class="profile-modal">
            <div class="essencial">
                <div class="img-profile" >
                    <div class="upload-image">
                        <div class="upload-btn-wrapper">
                            <button class="btns">Upload a file</button>
                            <input type="file" name="myfile" accept="mage/x-png,image/jpeg"/>
                        </div>
                        
                    </div>
                    <div class="profileImage-content">
                        <img :src="user.imgUrl" alt="User" v-if='user.imgUrl' width="250" height="250" >
                        <Gravatar :email="user.email" alt='User' v-else/>
                    </div>
                </div>
                <div class="information">
                    <span class='labels' >Admin: </span>
                        <div class="ratio-camp">
                            <div class="ratio-option">
                                <div class="container-checkbox">
                                    <input type="checkbox" :checked='user.admin' :disabled='!user.admin'>
                                    <span class="checkmark"></span>
                                </div>                                
                                <span>Sim</span>
                            </div>
                            <div class="ratio-option">
                                <div class="container-checkbox">
                                    <input type="checkbox" :checked='!user.admin' :disabled='user.admin'>
                                    <span class="checkmark"></span>
                                </div>                                
                                <span>Não</span>
                            </div>
                            
                        </div>
                    <div class="personal">Cargo: Gerente</div>   
                    <div class="personal">Salário: R$ 1200,00</div>
                       
                </div>
                </div>
            <div class="change-user">
                <span class='labels' >Nome: </span>
                <input type="text"  v-model='user.name' placeholder="João Gabriel">
                <span class='labels'>E-mail: </span>
                <input type="text"  v-model='user.email' placeholder="email@exemplo.com">
                <span class='labels'>Senha: </span>
                <input type="password"  v-model='user.password' placeholder="********">
                <span class='labels'>Confirme a senha: </span>
                <input type="password"  v-model='user.confirmPassword' placeholder="********">

                <div class="profile-buttons">
                    <b-button class="profile-button" variant="danger">Salvar</b-button>
                    <b-button class="profile-button" variant="secondary">Cancelar</b-button>
                </div>
            </div>

            
        </div>
    </div>
</template>

<script>
import Gravatar from 'vue-gravatar'
import {mapState} from 'vuex'
export default {
    name:'MyProfile',
    computed:mapState(['user']),
    components:{Gravatar},
    data: function() {
        return {
            userInformation:{} 
            
        }
    },
    watch: {
        user(){
            if(this.$state.user){
                this.userInformation.name= this.$state.user.name
                this.userInformation.email= this.$state.user.email
            }else{
                this.userInformation = {}
            }
        }
    }
}
</script>

<style>
    
    .profile-content{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .profile-modal{
        background-color: #fff;
        width: 750px;
        padding: 20px;
        box-shadow: 0 2px 6px rgba(0, 0 ,0 , 0.15);
        border-radius: 10px;
        display: flex;
        flex-direction: row;

    }

    .profile-modal .change-user {
        display: flex;
        flex-direction: column;
        width: 100%;
        
        padding: 20px 35px 20px 35px;
        margin-left: 3px;

        
    }
    .profile-modal .change-user input {
        border: 1px solid #bbb;
        width: 100%;
        margin-bottom: 15px;
        margin-top: 8px;
        padding: 10px 8px 10px 8px;
        outline: none;
        border-radius: 8px;
        box-shadow: 0 2px 6px rgba(0, 0 ,0 , 0.26);
        border: none;
        
        
    }
    .profile-modal input:read-only{
        background-color: #eee;
        color: #bbb;
    }
    
    .ratio-option input {
        height: 15px;
        width: 20px;
        padding: 8px;
        margin-top: 5px;
        background-color: rgb(48, 48, 48);
        border: none;
        
        
        
    }
    .ratio-option{
        align-items: top;
        display: flex;
    }
    .ratio-option span{
        margin-right: 10px;
    }
    .img-profile{
        padding: 25px;
        
        
        
    }
    .img-profile img{
        box-shadow: 0 4px 8px rgba(0, 0 ,0 , 0.76);
        width: 250px;
        height: 250px;
        border-radius: 2px;
        
    }
    
    .upload-image{
        opacity: 0;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        
        width: 250px;
        height: 250px;
        padding: 1px;
        
        

    }
    
    .upload-image:hover {
        opacity:1;
        
    }
    .profileImage-content:hover{
        opacity:0.4;
         
    }
    
    .information{
        width: 100%;
        padding: 0 25px 0 25px;
    }
    .ratio-camp{
        display: flex;
        padding: 15px;
    }
    .container-checkbox {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    }

    .container-checkbox input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
    }


    .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;
    }


    .container-checkbox input:checked ~ .checkmark {
    background-color: #2196F3;
    }

    .checkmark:after {
    content: "";
    position: absolute;
    display: none;
    }

    .container-checkbox input:checked ~ .checkmark:after {
    display: block;
    }


    .container-checkbox .checkmark:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    }
    .personal, .labels{
        font-size: 1.2rem;
    }
    .personal{
        margin-top: 15px;
    }
    .profile-buttons {
        margin-top: 20px;
        display: flex;
        justify-content: flex-end;
    }
    .profile-buttons .profile-button{
        margin-left: 15px;
        width: 100px;
        height: 45px;
        
    }

    .btns {
    border: 2px solid white;
    color: gray;
    background-color: white;
    opacity: 0.6;
    padding: 8px 20px;
    border-radius: 8px;
    font-size: 15px;
    font-weight: bold;
    
    }

    .upload-btn-wrapper input[type=file] {
    font-size: 100px;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    opacity: 0;
    
    }
</style>
