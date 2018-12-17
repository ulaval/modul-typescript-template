import ComponentsFrenchPlugin from '@ulaval/modul-components/dist/lang/fr';
import { FRENCH } from '@ulaval/modul-components/dist/utils/i18n/i18n';
import { PluginObject } from 'vue';

const messages = {
    'welcome': {
        'welcome': 'Bienvenue',
        'intro': 'Pour personnaliser ce projet, consulter la documentation du projet <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli</a>.'
    },
    'todolist': {
        'welcome': 'Gestion des tâches à faire',
        'status-open': 'Ouvert',
        'status-in_progress': 'En cours',
        'status-done': 'Complété',
        'status-wont_complete': 'Ne sera pas complété'
    }
};

const FrenchPlugin: PluginObject<any> = {
    install(v, _options) {
        v.use(ComponentsFrenchPlugin);
        v.prototype.$i18n.addMessages(FRENCH, messages);
    }
};

export default FrenchPlugin;
