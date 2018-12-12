
import '@ulaval/modul-components/dist/styles/main.scss';
import '@ulaval/modul-components/dist/utils/polyfills';
import Vue from 'vue';
import ModulPlugin from './common/modul';
import Root from './common/root/root';
import router from './common/router';

Vue.config.productionTip = false;

Vue.use(ModulPlugin);

const vue = new Vue({
    router,
    render: (h: any) => h(Root)
});

vue.$mount('#app');
