import { ModulVue } from '@ulaval/modul-components/dist/utils/vue/vue';
import { Component, Prop } from 'vue-property-decorator';
import WithRender from './welcome-page-body.html?style=./welcome-page-body.scss';

@WithRender
@Component
export default class WelcomePageBody extends ModulVue {
    @Prop() private msg!: string;
}
