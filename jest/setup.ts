import EnglishPlugin from '@/common/lang/en';
import MessagePlugin, { DebugMode, ENGLISH, I18nPluginOptions } from '@modul/utils/i18n/i18n';
import LoggerPlugin, { ConsoleOptions } from '@modul/utils/logger/logger';
import Vue from 'vue';

let i18nOptions: I18nPluginOptions = {
    curLang: ENGLISH,
    debug: DebugMode.Warn
};

let consoleOptions: ConsoleOptions = {
    displayDebugs: false
};

Vue.config.productionTip = false;
Vue.config.silent = true;
Vue.use(LoggerPlugin, consoleOptions);
Vue.use(MessagePlugin, i18nOptions);
Vue.use(EnglishPlugin);
