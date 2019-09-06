<template>
    <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper" >
        <div class="modal-containerPass">
             
          <div class="modal-header">
              
            <slot name="header">
              <span class="header-change-password">Alteração da senha</span>
              <div class="close-container-pass">
                    <a href @click.prevent='closeModal()'><div class="close-modal-pass">x</div></a>
                </div>
                
            </slot>
           
            
          </div>

          <div class="modal-body">
            <slot name="body">
                <span class='labels-p' >Senha antiga: </span>
                <input type="password"  class="pass-modal" v-model="passwordChange.oldPassword"  placeholder="********">
                <span class='labels-p' >Nova senha: </span>
                <input type="password"  class="pass-modal" v-model="passwordChange.password" placeholder="********">
                <span class='labels-p' >confirmação de senha: </span>
                <input type="password" class="pass-modal confirmpass"  v-model="passwordChange.confirmPassword" placeholder="********">
                <span class= 'passwordTip'> * A senha precisa ter no mínimo 8 dígitos,  uma letra Maiúscula e um número...</span>
                 <div class="profile-buttons">
                    <b-button class="profile-button" variant="danger" @click.prevent='savePassword'>Salvar</b-button>
                    <b-button class="profile-button" variant="secondary"  @click="reset">Limpar</b-button>
                </div>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>

</template>



<script>
import {mapState} from 'vuex'
import {baseApiUrl, showError} from '@/global'
import axios from 'axios'
export default {
    name: "ModalPass",
    computed:mapState(['user']),
    data: function () {
        return{
            passwordChange: {}
        }
    },
    methods:{
        closeModal(){
            this.$emit('clickedClosePasswordModal')
        },
        savePassword(){
            axios.put(`${baseApiUrl}/users/${this.user.id}/password`, this.passwordChange)
                .then(() => {
                    this.$toasted.global.defaultSuccess()
                    this.reset()
                }).catch(showError)
        },
        reset(){
            this.passwordChange = {}
        }
    }
}
</script>


<style>
    .header-change-password{
        font-size: 1.6rem;
    }
    .close-container-pass{
        display: flex;
        text-align: center;
        justify-content: center;
        position: relative;
        right: -25px;
        
    }
    .close-modal-pass{
        
        background: #dc3545;
        width: 25px;
        height: 25px;
        color: white;
        margin-bottom: 10px;
        font-size: 1.0rem;
        text-align: center;
        font-weight: bold;
        box-shadow: 0 2px 6px rgba(0, 0 ,0 , 0.1);
        border-radius: 15px; 
    }
    .close-container-pass a, .close-container-pass a:hover {
        text-decoration: none;
    }
    
    .pass-modal {
        
        border: 1px solid #bbb;
        width: 100%;
        margin-top: 15px!important; 
        margin-bottom: 25px;
        margin-top: 8px;
        padding: 10px 8px 10px 8px;
        outline: none;
        border-radius: 8px;
        box-shadow: 0 2px 6px rgba(0, 0 ,0 , 0.26);
        border: none;
    }

    
    .modal-mask {
        position: absolute;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .9);
         display: flex;
        align-items: center;
        justify-content: center;
        transition: opacity .3s ease;
    }

    .modal-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;

    }

    .modal-containerPass {
        
        width: 800px;
        margin: 0px auto;
        padding: 20px 30px;
        background-color: #fff;
        border-radius: 2px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
        transition: all .3s ease;
        font-family: Helvetica, Arial, sans-serif;
    }

    .modal-header h3 {
        margin-top: 0;
        color: #42b983;
    }

    .modal-body {
        margin: 20px 0;
    }
    .modal-enter {
        opacity: 0;
    }

    .modal-leave-active {
        opacity: 0;
    }

    .modal-enter .modal-containerPass,
    .modal-leave-active .modal-containerPass {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
        
    }
   
    
</style>