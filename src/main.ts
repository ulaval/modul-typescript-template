import MAccordionGroupPlugin from '@ulaval/modul-components/dist/components/accordion-group/accordion-group';
import MAccordionPlugin from '@ulaval/modul-components/dist/components/accordion/accordion';
import MButtonPlugin from '@ulaval/modul-components/dist/components/button/button';
import MDialogPlugin from '@ulaval/modul-components/dist/components/dialog/dialog';
import MDropdownPlugin from '@ulaval/modul-components/dist/components/dropdown/dropdown';
import MErrorPageNotFoundPlugin from '@ulaval/modul-components/dist/components/error-page-not-found/error-page-not-found';
import MI18nPlugin from '@ulaval/modul-components/dist/components/i18n/i18n';
import MIconButtonPlugin from '@ulaval/modul-components/dist/components/icon-button/icon-button';
import MModalPlugin from '@ulaval/modul-components/dist/components/modal/modal';
import MOptionItemDeletePlugin from '@ulaval/modul-components/dist/components/option-item/option-item-delete';
import MOptionItemEditPlugin from '@ulaval/modul-components/dist/components/option-item/option-item-edit';
import MOptionPlugin from '@ulaval/modul-components/dist/components/option/option';
import MI18nFilterPlugin from '@ulaval/modul-components/dist/filters/i18n/i18n';
import '@ulaval/modul-components/dist/styles/main.scss';
import MUtilsPlugin, { ENGLISH, FRENCH } from '@ulaval/modul-components/dist/utils';
import '@ulaval/modul-components/dist/utils/polyfills';
import MDefaultSpritesPlugin from '@ulaval/modul-components/dist/utils/svg/default-sprites';
import Vue from 'vue';
import Vuex from 'vuex';
import appConfig from './common/app-config';
import Root from './common/components/root/root';
import router from './common/router';

Vue.config.productionTip = false;

const curLang = localStorage.getItem('lang') || FRENCH;

Vue.use(MUtilsPlugin, { propagateVueParserErrors: false, i18PluginOptions: { curLang } }); // propagateVueError to console and use french
Vue.use(MDefaultSpritesPlugin);
Vue.use(MDialogPlugin);
Vue.use(MI18nPlugin);
Vue.use(MI18nFilterPlugin);
Vue.use(MIconButtonPlugin);
Vue.use(MModalPlugin);
Vue.use(MAccordionGroupPlugin);
Vue.use(MAccordionPlugin);
Vue.use(MOptionPlugin);
Vue.use(MOptionItemEditPlugin);
Vue.use(MOptionItemDeletePlugin);
Vue.use(MButtonPlugin);
Vue.use(MErrorPageNotFoundPlugin);
Vue.use(MDropdownPlugin);
Vue.use(Vuex);

const store = new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production'
});

Vue.use(appConfig, { store });

let langPromise;

if (curLang == ENGLISH) {
    langPromise = import(/* webpackChunkName: "en" */ '@/lang/en');
} else {
    langPromise = import(/* webpackChunkName: "fr" */ '@/lang/fr');
}

langPromise.then((langPlugin: any) => {
    Vue.use(langPlugin.default);

    const vue = new Vue({
        store,
        router,
        render: (h: any) => h(Root)
    });

    vue.$mount('#app');
});
