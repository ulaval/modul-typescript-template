import MainLayout from '@/common/components/layouts/main-layout/main-layout';
import { MPanel } from '@modul/components/panel/panel';
import Vue from 'vue';
import Component from 'vue-class-component';
import WithRender from './about-page.html';

@WithRender
@Component({
    components: { MainLayout, MPanel }
})
export default class AboutPage extends Vue { }
