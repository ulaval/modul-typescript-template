import './polyfills'
import Vue from 'vue'
import router from './router'

Vue.config.productionTip = false;

const vue = new Vue({
    router,
    template: '<router-view/>'
})

vue.$mount('#vue')
