<template>
    <div class="auth-content">
        <div class="auth-modal">
            <div class="auth-title">{{showSignup ? 'Cadastro' : 'Login'}}</div>
            <hr/>
            <span class='labels' v-if="showSignup">Nome: </span>
            <input type="text" v-if='showSignup' v-model='user.name' placeholder="João Gabriel">

        
            <span class='labels'>E-mail: </span>
            
            <input type="text"  class='input-group-text' v-model='user.email' placeholder="email@exemplo.com">
            
            <span class='labels'>Senha: </span>
            <input type="password"  v-model='user.password' placeholder="********">

            <span class='labels' v-if="showSignup">Confirme a senha: </span>
            <input type="password" v-if="showSignup" v-model='user.confirmPassword' placeholder="********">
            
            <button v-if='showSignup' @click= 'signup'>Registrar</button>
            <button v-else @click= 'signin'> Fazer Login</button>
            <span class="button-span" v-if='showSignup'>Já tem cadastro? <a href @click.prevent="showSignup = !showSignup"> Acesse o Login!</a></span>
            <span v-else class="button-span">Não tem cadastro? <a href @click.prevent="showSignup = !showSignup"> Registre-se aqui!</a></span>   
        </div>
    </div>
</template>

<script>

import {baseApiUrl, showError} from '@/global'
import axios from 'axios'
export default {
    name:'Auth',
    data: function () {
        return {
            showSignup: false,
            user: {}
        }
    },
    methods: {

        signin(){
            axios.post(`${baseApiUrl}/signin`, this.user)
                .then( () => {
                    this.$router.push({path:'/'})
                }).catch(showError)
        },
        signup(){
            axios.post(`${baseApiUrl}/signup`, this.user)
                .then(() => {
                    this.$toasted.global.defaultSuccess()
                    this.user = {}
                    this.showSignup = false
                }).catch(showError)

        }
    }
}
</script>

<style>
    .auth-content{
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        
    }
    .auth-modal {
        background-color: #fff;
        width: 350px;
        padding: 35px;
        box-shadow: 0 2px 6px rgba(0, 0 ,0 , 0.15);

        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 10px;
        
    }

    .auth-title {
        font-size: 1.2rem;
        font-weight: 100;
        margin-top: 10px;
        margin-bottom: 10px;
    }
    .auth-modal input {
        border: 1px solid #bbb;
        width: 100%;
        margin-bottom: 15px;
        padding: 10px 8px 10px 8px;
        outline: none;
        border-radius: 8px;
    }
    .auth-modal .button-span {
        margin-top:35px;
    }
    .auth-modal input::placeholder{
        text-align: start;
    }
    .auth-modal button{
        width: 60%;
        padding: 12px 8px 12px 8px;
        border: 1px solid #fff;
        border-radius: 8px;
        margin-top: 5px;
        color: white;
        font-weight: 100;
        font-size: 1.2rem;
        background: #ec5252; 
    }
    .auth-modal .labels {
        align-self: flex-start;
        margin-bottom: 8px;
        font-size: 1.1rem;
        

    }
    .auth-modal hr{
        border: 0;
        width: 100%;
        height: 1px;
        margin-bottom: 15px;
        background-image: linear-gradient(to right,
            rgba(120, 120, 120, 0),
            rgba(120, 120, 120, 0.75),
            rgba(120, 120, 120, 0));
    }
    
    
    
</style>