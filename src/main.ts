import MAccordionGroupPlugin from '@modul/components/accordion-group/accordion-group';
import MAccordionPlugin from '@modul/components/accordion/accordion';
import MButtonPlugin from '@modul/components/button/button';
import MDialogPlugin from '@modul/components/dialog/dialog';
import MDropdownPlugin from '@modul/components/dropdown/dropdown';
import MErrorPageNotFoundPlugin from '@modul/components/error-page-not-found/error-page-not-found';
import MI18nPlugin from '@modul/components/i18n/i18n';
import MIconButtonPlugin from '@modul/components/icon-button/icon-button';
import MModalPlugin from '@modul/components/modal/modal';
import MOptionItemDeletePlugin from '@modul/components/option-item/option-item-delete';
import MOptionItemEditPlugin from '@modul/components/option-item/option-item-edit';
import MOptionPlugin from '@modul/components/option/option';
import MI18nFilterPlugin from '@modul/filters/i18n/i18n';
import '@modul/styles/main.scss';
import MUtilsPlugin, { ENGLISH, FRENCH } from '@modul/utils';
import '@modul/utils/polyfills';
import MDefaultSpritesPlugin from '@modul/utils/svg/default-sprites';
import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import appConfig from './common/app-config';
import Root from './common/components/root/root';
import router from './common/router';

Vue.config.productionTip = false;

const curLang: string = localStorage.getItem('lang') || FRENCH;

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

const store: Store<any> = new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production'
});

Vue.use(appConfig, { store });

let langPromise: Promise<any>;

if (curLang == ENGLISH) {
    langPromise = import(/* webpackChunkName: "en" */ '@/common/lang/en');
} else {
    langPromise = import(/* webpackChunkName: "fr" */ '@/common/lang/fr');
}

langPromise.then((langPlugin: any) => {
    Vue.use(langPlugin.default);

    const vue: Vue = new Vue({
        store,
        router,
        render: (h: any): any => h(Root)
    });

    vue.$mount('#app');
});
