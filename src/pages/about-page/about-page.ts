import MainLayout from '@/common/layouts/main-layout/main-layout';
import { MPanel } from '@ulaval/modul-components/dist/components/panel/panel';
import Vue from 'vue';
import Component from 'vue-class-component';
import WithRender from './about-page.html';

@WithRender
@Component({
    components: { MainLayout, MPanel }
})
export default class AboutPage extends Vue { }
