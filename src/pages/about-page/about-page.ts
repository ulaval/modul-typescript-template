import MainLayout from '@/common/layouts/main-layout/main-layout';
import Vue from 'vue';
import Component from 'vue-class-component';
import WithRender from './about-page.html?style=./about-page.scss';

@WithRender
@Component({
    components: { MainLayout }
})
export default class AboutPage extends Vue { }
