
import '@ulaval/modul-components/dist/styles/main.scss';
import '@ulaval/modul-components/dist/utils/polyfills';
import Vue from 'vue';
import ModulPlugin from './common/modul';
import WelcomePage from './welcome-page/welcome-page';

Vue.config.productionTip = false;

Vue.use(ModulPlugin);

const bootstrap = (h: any) => h('div', {
    attrs: {
        class: 'm-u--app-body'
    }
}, [h(WelcomePage)]);

const vue = new Vue({
    render: bootstrap // (h) => h(WelcomePage)
});

vue.$mount('#app');
