
import AccordionGroupPlugin from '@ulaval/modul-components/dist/components/accordion-group/accordion-group';
import AccordionPlugin from '@ulaval/modul-components/dist/components/accordion/accordion';
import ButtonPlugin from '@ulaval/modul-components/dist/components/button/button';
import FrenchPlugin from '@ulaval/modul-components/dist/lang/fr';
import UtilsPlugin from '@ulaval/modul-components/dist/utils';
import FRENCH from '@ulaval/modul-components/dist/utils/i18n/i18n';
import DefaultSpritesPlugin from '@ulaval/modul-components/dist/utils/svg/default-sprites';
import Vue, { PluginObject } from 'vue';

const ModulPlugin: PluginObject<any> = {

    install(v, options): void {

        Vue.use(UtilsPlugin,
            {
                propagateVueParserErrors: true, i18PluginOptions: { curLang: FRENCH }
            }); // propagateVueError to console and use french

        Vue.use(FrenchPlugin);
        Vue.use(DefaultSpritesPlugin);

        // only import required components / directives / filters
        Vue.use(AccordionGroupPlugin);
        Vue.use(AccordionPlugin);
        Vue.use(ButtonPlugin);

    }
};

export default ModulPlugin;
