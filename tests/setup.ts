import FormPlugin from '@ulaval/modul-components';
import {
    DebugMode,
    ENGLISH,
    I18nPluginOptions,
} from '@ulaval/modul-components/dist/utils/i18n/i18n';
import { ConsoleOptions } from '@ulaval/modul-components/dist/utils/logger/logger';
import UtilsPlugin, {
    UtilsPluginOptions,
} from '@ulaval/modul-components/dist/utils/utils-plugin';
import Vue from 'vue';

const i18PluginOptions: I18nPluginOptions = {
    curLang: ENGLISH,
    debug: DebugMode.Prod,
};

const consoleOptions: ConsoleOptions = {
    displayDebugs: false,
    displayWarnings: false,
};

const utilsOptions: UtilsPluginOptions = {
    consoleOptions,
    i18PluginOptions,
    l10nPluginOptions: {},
    propagateVueParserErrors: false,
};

Vue.config.productionTip = false;
Vue.config.silent = true;

Vue.use(UtilsPlugin, utilsOptions);

Vue.use(FormPlugin);
