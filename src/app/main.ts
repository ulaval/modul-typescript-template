import './polyfills'
import Vue from 'vue'
import Test from './components/test/Test'

Vue.config.productionTip = false

Vue.component('Test', Test)

const vue = new Vue({
    template: '<Test/>'
})

console.info('mount')
vue.$mount('#vue')