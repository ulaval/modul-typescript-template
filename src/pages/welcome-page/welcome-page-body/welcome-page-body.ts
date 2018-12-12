import { MAccordionGroup } from '@ulaval/modul-components/dist/components/accordion-group/accordion-group';
import { MAccordion } from '@ulaval/modul-components/dist/components/accordion/accordion';
import { MButton } from '@ulaval/modul-components/dist/components/button/button';
import { MIcon } from '@ulaval/modul-components/dist/components/icon/icon';
import { ModulVue } from '@ulaval/modul-components/dist/utils/vue/vue';
import { Component, Prop } from 'vue-property-decorator';
import WithRender from './welcome-page-body.html?style=./welcome-page-body.scss';

@WithRender
@Component({
    components: { MAccordionGroup, MAccordion, MButton, MIcon }
})
export default class WelcomePageBody extends ModulVue {
    @Prop() private msg!: string;
}
