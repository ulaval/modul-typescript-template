import ComponentsFrenchPlugin from '@ulaval/modul-components/dist/lang/fr';
import { ENGLISH } from '@ulaval/modul-components/dist/utils/i18n/i18n';
import { PluginObject } from 'vue';

const messages = {
    'welcome': {
        'welcome': 'Welcome'
    }
};

const EnglishPlugin: PluginObject<any> = {
    install(v, options) {
        v.use(ComponentsFrenchPlugin);
        v.prototype.$i18n.addMessages(ENGLISH, messages);
    }
};

export default EnglishPlugin;
