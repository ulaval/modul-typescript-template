import Vue from 'vue';
import Component from 'vue-class-component';
import MainLayout from '../common/main-layout/main-layout';
import WelcomePageBody from './welcome-page-body/welcome-page-body';
import WithRender from './welcome-page.html?style=./welcome-page.scss';

@WithRender
@Component({
    components: { WelcomePageBody, MainLayout }
})
export default class WelcomePage extends Vue { }
