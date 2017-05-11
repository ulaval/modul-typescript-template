import './polyfills';
import Vue from 'vue';
import Vuex from 'vuex';
import { Store } from './store';
import router from './router';

Vue.config.productionTip = false;

Vue.use(Vuex);

const store = Store.createStore();

const vue = new Vue({
    router,
    store,
    template: '<router-view></router-view>'
});

vue.$mount('#vue');
