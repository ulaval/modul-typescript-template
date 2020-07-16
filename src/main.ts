/* eslint-disable @typescript-eslint/typedef */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    DialogServicePlugin,
    ENGLISH,
    FormPlugin,
    FRENCH,
    RichTextLicensePlugin,
    ToastServicePlugin,
    UtilsPlugin,
    UtilsPluginOptions,
} from '@ulaval/modul-components';
import '@ulaval/modul-components/lib/modul.min.css';
import Vue from 'vue';
import App from './app.vue';
import IconPlugin from './icons/icons';
import router from './router';
import './styles/main.scss';

const utilsPluginOptions: UtilsPluginOptions = {
    i18PluginOptions: {
        curLang: FRENCH,
    },
    propagateVueParserErrors: false,
};

Vue.config.productionTip = false;

Vue.use(UtilsPlugin, utilsPluginOptions);
Vue.use(FormPlugin);
Vue.use(ToastServicePlugin);
Vue.use(RichTextLicensePlugin, { key: `test` });
Vue.use(IconPlugin);
Vue.use(DialogServicePlugin);

const curLang: string = localStorage.getItem('lang') || FRENCH;

let langPromise: Promise<any>;
if (curLang === ENGLISH) {
    langPromise = import(/* webpackChunkName: "en" */ './lang/english');
} else {
    langPromise = import(/* webpackChunkName: "fr" */ './lang/french');
}

langPromise.then((langPlugin: any) => {
    Vue.use(langPlugin.default);
    new Vue({
        router,
        render: (h) => h(App),
    }).$mount('#app');
});
