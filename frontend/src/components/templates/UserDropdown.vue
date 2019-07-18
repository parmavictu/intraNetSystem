<template>
    <div class="user-dropdown">
        <div class="user-button">
            <span class="d-none" d-sm-block>Victor Parma</span>
            <div class="user-dropdown-img">
                <Gravatar :email='user.email' alt='User' />
            </div>
            <i class="fa fa-angle-down"></i>
        </div>
        <div class="user-dropdown-content">
            <a href><i class="fa fa-cogs"></i> Administração</a>
        </div>
        <a href ><i class='fa fa-sign-out'></i> Sair </a>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import Gravatar from 'vue-gravatar'

export default {
    name: 'UserDropdown',
    components: { Gravatar}
}
</script>

<style>
    .user-dropdown{
        position: relative;
        height: 100%;
    }

    .user-button {
        display: flex;
        align-items: center;
        color: #fff;
        font-weight: 100;
        height: 100%;
        padding: 0 20px;
    }
</style>
