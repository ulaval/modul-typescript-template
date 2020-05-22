/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Vue, { PluginObject, VueConstructor } from 'vue';

const FrenchPlugin: PluginObject<any> = {
    install(v: VueConstructor): void {
        Vue.use(require('@ulaval/modul-components/lib/fr').default);

        // additional traduction here
    },
};

export default FrenchPlugin;
