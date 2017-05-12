import './polyfills';
import Vue from 'vue';
import store from './store';
import router from './router';

Vue.config.productionTip = false;

const vue = new Vue({
    router,
    store,
    template: '<router-view></router-view>'
});

vue.$mount('#vue');
