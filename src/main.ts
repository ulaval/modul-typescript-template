
import '@ulaval/modul-components/dist/styles/main.scss';
import '@ulaval/modul-components/dist/utils/polyfills';
import Vue from 'vue';
import App from './app';
import ModulPlugin from './modul';

Vue.config.productionTip = false;

Vue.use(ModulPlugin);

const vue = new Vue({
    render: (h) => h(App)
});

vue.$mount('#app');
