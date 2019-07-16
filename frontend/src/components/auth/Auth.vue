<template>
    <div class="auth-content">
        <div class="auth-modal">
            <div class="auth-title">{{showSignup ? 'Cadastro' : 'Login'}}</div>
            <input type="text" v-if='showSignup' v-model='user.name' placeholder="Nome">
            <input type="text"  v-model='user.email' placeholder="E-mail">
            <input type="text"  v-model='user.password' placeholder="Senha">
            <input type="text" v-if="showSignup" v-model='user.password' placeholder="Confirme a senha">
            
            <button v-if='showSignup'>Registrar</button>
            <button v-else> Fazer Login</button>



            <span v-if='showSignup'>Já tem cadastro? <a href @click.prevent="showSignup = !showSignup">Acesse o Login!</a></span>
            <span v-else>Não tem cadastro? <a href @click.prevent="showSignup = !showSignup">Registre-se aqui!</a></span>


            <!--<a href @click.prevent='showSignup = !showSignup'>
                <span v-if="showSignup"> Já tem cadastro?Acesse o Login!</span>    
                <span v-else> Não tem cadastro? Registre-se aqui!</span>    
            </a>-->            
        </div>
    </div>
</template>

<script>
export default {
    name:'Auth',
    data: function () {
        return {
            showSignup: false,
            user: {}
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
        box-shadow: 0 1px 5px rgba(0, 0 ,0 , 0.15);

        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 10px;
    }

    .auth-title {
        font-size: 1.2rem;
        font-weight: 100;
        margin-top: 10px;
        margin-bottom: 15px;
    }
    .auth-modal input {
        border: 1px solid #bbb;
        width: 100%;
        margin-bottom: 15px;
        padding: 10px 8px 10px 8px;
        outline: none;
        border-radius: 8px;
    }
    .auth-modal span {
        margin-top:35px;
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
</style>
