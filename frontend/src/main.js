import 'font-awesome/css/font-awesome.css'

import Vue from 'vue'

import App from './App'
import './config/bootstrap'
import './config/axios'
import './config/msgs'
import router from './config/router'
import store from './config/store'

Vue.config.productionTip = false

new Vue ({
    store,
    router,
    render: h => h(App)
}).$mount('#app')