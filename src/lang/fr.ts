import ComponentsFrenchPlugin from '@ulaval/modul-components/dist/lang/fr';
import { FRENCH } from '@ulaval/modul-components/dist/utils/i18n/i18n';
import { PluginObject } from 'vue';

const messages = {
    'welcome': {
        'welcome': 'Bienvenue'
    }
};

const FrenchPlugin: PluginObject<any> = {
    install(v, _options) {
        v.use(ComponentsFrenchPlugin);
        v.prototype.$i18n.addMessages(FRENCH, messages);
    }
};

export default FrenchPlugin;
