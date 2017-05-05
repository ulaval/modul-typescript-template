import './polyfills'
import Vue from 'vue'
import Page1 from './components/welcome/welcome'

Vue.config.productionTip = false;

Vue.component('Page1', Page1)

const vue = new Vue({
    template: '<page1/>'
})

vue.$mount('#vue')
