
import MAccordionGroupPlugin from '@ulaval/modul-components/dist/components/accordion-group/accordion-group';
import MAccordionPlugin from '@ulaval/modul-components/dist/components/accordion/accordion';
import MButtonPlugin from '@ulaval/modul-components/dist/components/button/button';
import MErrorPageNotFoundPlugin from '@ulaval/modul-components/dist/components/error-page-not-found/error-page-not-found';
import MI18nPlugin from '@ulaval/modul-components/dist/components/i18n/i18n';
import MFrenchPlugin from '@ulaval/modul-components/dist/lang/fr';
import '@ulaval/modul-components/dist/styles/main.scss';
import MUtilsPlugin, { FRENCH } from '@ulaval/modul-components/dist/utils';
import '@ulaval/modul-components/dist/utils/polyfills';
import MDefaultSpritesPlugin from '@ulaval/modul-components/dist/utils/svg/default-sprites';
import Vue from 'vue';
import Root from './common/root/root';
import router from './common/router';

Vue.config.productionTip = false;

Vue.use(MUtilsPlugin, { propagateVueParserErrors: false, i18PluginOptions: { curLang: FRENCH } }); // propagateVueError to console and use french
Vue.use(MFrenchPlugin);
Vue.use(MDefaultSpritesPlugin);
Vue.use(MI18nPlugin);
Vue.use(MAccordionGroupPlugin);
Vue.use(MAccordionPlugin);
Vue.use(MButtonPlugin);
Vue.use(MErrorPageNotFoundPlugin);

const vue = new Vue({
    router,
    render: (h: any) => h(Root)
});

vue.$mount('#app');
