import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        isMenuVisible: false,
        user:{
            name:"victor parma",
            email: "victorparma@hotmail.com",
            admin: true
            
        }
    },
    mutations: {
        toggleMenu(state, isVisible) {
            if(!state.user) {
                state.isMenuVisible = false
                return
            }
            if(isVisible === undefined) {
                state.isMenuVisible = !state.isMenuVisible
            }else {
                state.isMenuVisible = isVisible
            }
        }
    }
})