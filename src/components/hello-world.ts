import { ModulVue } from '@ulaval/modul-components/dist/utils/vue/vue';
import { Component, Prop } from 'vue-property-decorator';
import WithRender from './hello-world.html?style=./hello-world.scss';

@WithRender
@Component
export default class HelloWorld extends ModulVue {
    @Prop() private msg!: string;
}
