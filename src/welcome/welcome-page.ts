import MainLayout from '@/common/components/layouts/main-layout/main-layout';
import { MAccordionGroup } from '@modul/components/accordion-group/accordion-group';
import { MAccordion } from '@modul/components/accordion/accordion';
import { MButton } from '@modul/components/button/button';
import { MIcon } from '@modul/components/icon/icon';
import Vue from 'vue';
import Component from 'vue-class-component';
import WithRender from './welcome-page.html?style=./welcome-page.scss';

@WithRender
@Component({
    components: { MainLayout, MAccordionGroup, MAccordion, MButton, MIcon }
})
export default class WelcomePage extends Vue { }
