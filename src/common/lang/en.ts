import ComponentsFrenchPlugin from '@modul/lang/fr';
import { BundleMessagesMap, ENGLISH } from '@modul/utils/i18n/i18n';
import { PluginObject, VueConstructor } from 'vue';

const messages: BundleMessagesMap = {
    'common': {
        'confirm': 'Ok',
        'cancel': 'Cancel'
    },
    'welcome': {
        'modul': 'modul',
        'tagline': 'a unified experience',
        'welcome': 'Welcome',
        'intro': 'For guide and recipes on how to configure / customize this project, check out the <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.'
    },
    'todolist': {
        'welcome': 'TODO management',
        'status-open': 'Open',
        'status-in_progress': 'In progress',
        'status-done': 'Done',
        'status-wont_complete': 'Cancelled'
    },
    'm-error-page-not-found': {
        'title': 'Page not found',
        'home-label': 'Back to home',
        'hint.primary': 'Your page may have been removed or changed. Please check your URL.'
    },
    'm-accordion-group': {
        'open-all': 'Open All'
    },
    'm-accordion': {
        'open': 'Open'
    },
    'm-table': {
        'empty-table': 'No data available'
    },
    'f-m-date': {
        'long': '[$]Do[$] MMMM YYYY',
        'short': '[$]Do[$] MMM YYYY'
    }
};

const EnglishPlugin: PluginObject<any> = {
    install(v: VueConstructor): void {
        v.use(ComponentsFrenchPlugin);
        v.prototype.$i18n.addMessages(ENGLISH, messages);
    }
};

export default EnglishPlugin;
