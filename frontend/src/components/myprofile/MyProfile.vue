<template>
    <div class="profile-content">
        <div class="profile-modal">
            <span class='labels' >Nome: </span>
            <input type="text"  v-model='user.name' placeholder="João Gabriel">

        
            <span class='labels'>E-mail: </span>
            
            <input type="text"  v-model='user.email' placeholder="email@exemplo.com">
            
            <span class='labels'>Senha: </span>
            <input type="password"  v-model='user.password' placeholder="********">

            <span class='labels'>Confirme a senha: </span>
            <input type="password"  v-model='user.confirmPassword' placeholder="********">
        </div>
    </div>
</template>

<script>
export default {
    name:'MyProfile',
    data: function() {
        return {
            user:{}
        }
    }
}
</script>

<style>

</style>
